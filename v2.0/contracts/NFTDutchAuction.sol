// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

interface IMyNFT {
    function transferFrom(address _from, address _to, uint256 _nftId) external;

    function ownerOf(uint256 _id) external view returns (address _owner);
}

contract NFTDutchAuction {
    uint256 public nftId;
    IMyNFT public nftAddress;

    uint256 public reservePrice;
    uint256 public numBlocksAuctionOpen;
    uint256 public offerPriceDecrement;

    address public buyer;
    address public seller;

    uint256 public initBlock;
    uint256 public initialPrice;
    bool public auctionStatusOpen;

    constructor(
        address _nftAddress,
        uint256 _nftId,
        uint256 _reservePrice,
        uint256 _numBlocksAuctionOpen,
        uint256 _offerPriceDecrement
    ) {
        seller = payable(msg.sender);
        initBlock = block.number;
        auctionStatusOpen = true;

        nftId = _nftId;
        nftAddress = IMyNFT(_nftAddress);

        require(
            nftAddress.ownerOf(nftId) == seller,
            "You don't own this NFT to sell"
        );

        reservePrice = _reservePrice;
        numBlocksAuctionOpen = _numBlocksAuctionOpen;
        offerPriceDecrement = _offerPriceDecrement;
        uint256 initialPrice1 = numBlocksAuctionOpen * offerPriceDecrement;
        initialPrice = initialPrice1 + reservePrice;

    }
      function getCurrentPrice() public view returns (uint256) {
        uint256 blockDiff = getBlockDifference();
        if (blockDiff >= numBlocksAuctionOpen) {
            return reservePrice;
        }
        return initialPrice - (blockDiff * offerPriceDecrement);
    }

    function getCurrentBlock() public view returns (uint256) {
        return block.number;
    }

    function getBlockDifference() public view returns (uint256) {
        return getCurrentBlock() - initBlock;
    }


    function finalizeAuction() private {
        nftAddress.transferFrom(seller, msg.sender, nftId);
        buyer = nftAddress.ownerOf(nftId);
        auctionStatusOpen = false;
    }

    function placeBid() public payable {
        require(isAuctionOpen(), "Auction is closed");
        require(msg.sender != buyer, "You already bought this product");
        require(buyer == address(0), "Product already sold");
        require(msg.sender != seller, "Owner can't bid");
        require(msg.value >= getCurrentPrice(), "WEI is insufficient");

        (bool tryToSend, ) = seller.call{ value: getCurrentPrice() }("");
        require(tryToSend == true, "Failed to send");

        uint256 excess = msg.value - getCurrentPrice();
        if (excess > 0) {
            refundExcess(excess);
        }

        finalizeAuction();
    } 
 

       function refundExcess(uint256 excessAmount) private {
        payable(msg.sender).transfer(excessAmount);
    }
     function isAuctionOpen() public view returns (bool) {
        return getBlockDifference() <= numBlocksAuctionOpen;
    }

}
