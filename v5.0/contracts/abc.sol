// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./NFTDutchAuction_ERC20BidsUpgradeable.sol";
contract test {
    NFTDutchAuction_ERC20BidsUpgradeable test;
    constructor () {
        test = new NFTDutchAuction_ERC20BidsUpgradeable();
    }    function targetTest() external payable{
        test.receiveMoney{value: msg.value}();
    }
}