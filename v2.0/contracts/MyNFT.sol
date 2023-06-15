// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721, Ownable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint public currentSupply;
    uint public maxSupply;

    constructor(uint max) ERC721("My NFT", "MNFT") {
        maxSupply = max;
    }

    function safeMint(address to) public onlyOwner {
        require(maxSupply > currentSupply, "Already minted max");
        _tokenIds.increment();
        _mint(to, _tokenIds.current());
        currentSupply++;
    }

}
