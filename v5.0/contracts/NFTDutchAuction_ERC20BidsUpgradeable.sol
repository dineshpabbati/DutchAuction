// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

// Interface for Unique NFT (ERC721) contract
interface IMyNFT {
    function transferFrom(address _from, address _to, uint _nftId) external;
    function ownerOf(uint id) external view returns (address owner);
}

// Interface for Uniq Token (ERC20) contract
interface IMyToken {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract NFTDutchAuction_ERC20BidsUpgradeable is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    uint256 nftId;
    IMyNFT nftAddress;
    IMyToken tokenAddress;
    uint256 private reservePrice;
    uint256 private numBlocksAuctionOpen;
    uint256 private offerPriceDecrement;
    address public buyer;
    address public seller;
    uint256 private initBlock;
    uint256 private initialPrice;
    bool public auctionStatusOpen;
    bool public productSold;

    event BidSuccessful(address bidder, uint256 amount);

    function initialize(address erc20TokenAddress, address erc721TokenAddress, uint256 _nftTokenId, uint256 _reservePrice, uint256 _numBlocksAuctionOpen, uint256 _offerPriceDecrement) public initializer {
        seller = payable(msg.sender);
        initBlock = block.number;
        auctionStatusOpen = true;
        productSold = false;

        nftId = _nftTokenId;
        nftAddress = IMyNFT(erc721TokenAddress);
        tokenAddress = IMyToken(erc20TokenAddress);

        require(nftAddress.ownerOf(nftId) == seller, "You don't own this NFT to sell");

        reservePrice = _reservePrice;
        numBlocksAuctionOpen = _numBlocksAuctionOpen;
        offerPriceDecrement = _offerPriceDecrement;

        initialPrice = reservePrice + (numBlocksAuctionOpen * offerPriceDecrement);
    }

    function _authorizeUpgrade(address) internal override onlyOwner {}

    function currentBlock() view private returns (uint256) {
        return block.number;
    }

    function blockDifference() view private returns (uint256) {
        return currentBlock() - initBlock;
    }

    function currentPrice() view public returns (uint256) {
        return initialPrice - (blockDifference() * offerPriceDecrement);
    }

    function isAuctionOpen() view private returns (bool) {
        return blockDifference() <= numBlocksAuctionOpen;
    }

    function finalize(address addy) private {
        nftAddress.transferFrom(seller, addy, nftId);
        buyer = nftAddress.ownerOf(nftId);
        auctionStatusOpen = false;
        productSold = true;
    }

    function bid(uint256 amount) public {
        require(isAuctionOpen(), "Auction is closed");
        require(msg.sender != buyer, "You already bought this product");
       
        require(msg.sender != seller, "Owner can't bid");
        require(amount >= currentPrice(), "WEI is insufficient");

        bool tryToSend = tokenAddress.transferFrom(msg.sender, seller, currentPrice());
        require(tryToSend == true, "Failed to send");

        finalize(msg.sender);
        emit BidSuccessful(msg.sender, amount);
    }
}
