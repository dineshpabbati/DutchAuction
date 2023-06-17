/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  NFTDutchAuction_ERC20BidsUpgradeable,
  NFTDutchAuction_ERC20BidsUpgradeableInterface,
} from "../../../contracts/NFTDutchAuction_ERC20BidsUpgradeable.sol/NFTDutchAuction_ERC20BidsUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BidSuccessful",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "auctionStatusOpen",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "bid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "buyer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20TokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "erc721TokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nftTokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reservePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_numBlocksAuctionOpen",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_offerPriceDecrement",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "productSold",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "seller",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b50608051612c6861007b600039600081816103060152818161039401528181610a5701528181610ae50152610b950152612c686000f3fe6080604052600436106100c25760003560e01c8063715018a61161007f5780638da5cb5b116100595780638da5cb5b146102215780639d1b464a1461024c578063b785e05214610277578063f2fde38b146102a2576100c2565b8063715018a6146101b65780637150d8ae146101cd57806386489ba9146101f8576100c2565b806308551a53146100c75780630b48ab8f146100f25780633659cfe61461011d578063454a2ab3146101465780634f1ef2861461016f57806352d1902d1461018b575b600080fd5b3480156100d357600080fd5b506100dc6102cb565b6040516100e99190611c68565b60405180910390f35b3480156100fe57600080fd5b506101076102f1565b6040516101149190611c9e565b60405180910390f35b34801561012957600080fd5b50610144600480360381019061013f9190611cf9565b610304565b005b34801561015257600080fd5b5061016d60048036038101906101689190611d5c565b61048c565b005b61018960048036038101906101849190611ecf565b610a55565b005b34801561019757600080fd5b506101a0610b91565b6040516101ad9190611f44565b60405180910390f35b3480156101c257600080fd5b506101cb610c4a565b005b3480156101d957600080fd5b506101e2610c5e565b6040516101ef9190611c68565b60405180910390f35b34801561020457600080fd5b5061021f600480360381019061021a9190611f5f565b610c84565b005b34801561022d57600080fd5b50610236611194565b6040516102439190611c68565b60405180910390f35b34801561025857600080fd5b506102616111be565b60405161026e9190611ffb565b60405180910390f35b34801561028357600080fd5b5061028c611223565b6040516102999190611c9e565b60405180910390f35b3480156102ae57600080fd5b506102c960048036038101906102c49190611cf9565b611236565b005b60d060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60d360009054906101000a900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1603610392576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038990612099565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166103d16112b9565b73ffffffffffffffffffffffffffffffffffffffff1614610427576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041e9061212b565b60405180910390fd5b61043081611310565b61048981600067ffffffffffffffff81111561044f5761044e611da4565b5b6040519080825280601f01601f1916602001820160405280156104815781602001600182028036833780820191505090505b506000611357565b50565b6104a0676772d44bfdb3b48360c01b6114c5565b6104b4675b226ddb93c2967e60c01b6114c5565b6104c867dbdd4bfade6ef8c360c01b6114c5565b6104dc67a89bbf48f062394060c01b6114c5565b6104e46114c8565b610523576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051a90612197565b60405180910390fd5b61053767e46c0655617cdc1760c01b6114c5565b61054b67ece90b8365ea35b160c01b6114c5565b61055f6712fc3323a9269fac60c01b6114c5565b6105736794524d1b4a773fb160c01b6114c5565b60cf60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1603610603576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fa90612203565b60405180910390fd5b61061767fcce416fcaa55f4360c01b6114c5565b61062b672054353b98287e8960c01b6114c5565b61063f675df6524b20f364fa60c01b6114c5565b6106536774ebc55e78a69c0360c01b6114c5565b60d360019054906101000a900460ff16156106a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069a9061226f565b60405180910390fd5b6106b7670c31f53ea55d787860c01b6114c5565b6106cb6732e8dd82fd3eda2160c01b6114c5565b6106df6715386c0e348f6dae60c01b6114c5565b6106f36768cc44c87273097a60c01b6114c5565b60d060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1603610783576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077a906122db565b60405180910390fd5b61079767d722ce29e7270be660c01b6114c5565b6107ab67c9481be35ced414060c01b6114c5565b6107bf673a779ea636bc4b2960c01b6114c5565b6107d3674eb228eabb64141960c01b6114c5565b6107db6111be565b81101561081d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081490612347565b60405180910390fd5b610831677b78a2de5aeffa2d60c01b6114c5565b61084567f25f546510e88cde60c01b6114c5565b610859679fa5029c280fb50060c01b6114c5565b600060cb60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3360d060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166108c56111be565b6040518463ffffffff1660e01b81526004016108e393929190612367565b6020604051808303816000875af1158015610902573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092691906123ca565b905061093c67fa7ff142dbc8129460c01b6114c5565b61095067313c58045ae615c460c01b6114c5565b610964673cbcd6a5dae7d22360c01b6114c5565b60011515811515146109ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a290612443565b60405180910390fd5b6109bf67f4dd5aad2fa55fbc60c01b6114c5565b6109d3679cc5dd9feed350f360c01b6114c5565b6109e7674ea0535e2dc6558e60c01b6114c5565b6109f033611518565b610a0467c600290e727a170f60c01b6114c5565b610a18670252ba9abeba8fd960c01b6114c5565b7f712b869a682989ca25166d33d64ea7866d689776d1ebe6cc857b20b45da56d0f3383604051610a49929190612463565b60405180910390a15050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1603610ae3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ada90612099565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610b226112b9565b73ffffffffffffffffffffffffffffffffffffffff1614610b78576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6f9061212b565b60405180910390fd5b610b8182611310565b610b8d82826001611357565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614610c21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c18906124fe565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b610c5261175c565b610c5c60006117da565b565b60cf60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610c98676a3f7421c2d255f060c01b6114c5565b60008060019054906101000a900460ff16159050808015610cc95750600160008054906101000a900460ff1660ff16105b80610cf65750610cd8306118a0565b158015610cf55750600160008054906101000a900460ff1660ff16145b5b610d35576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2c90612590565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610d72576001600060016101000a81548160ff0219169083151502179055505b610d866784b00186b93be85f60c01b6114c5565b610d9a67dc08b526f0cfb21160c01b6114c5565b610dae6793bb7d4b0aba860260c01b6114c5565b3360d060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610e0367676aea2781551b6160c01b6114c5565b4360d181905550610e1e672f0e7aa3d065790e60c01b6114c5565b600160d360006101000a81548160ff021916908315150217905550610e4d67d2602b016b6473aa60c01b6114c5565b600060d360016101000a81548160ff021916908315150217905550610e7c679eafed1dd98db46960c01b6114c5565b8460c981905550610e97678275302d769a648160c01b6114c5565b8560ca60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610eec67a91e7b43733c8ba260c01b6114c5565b8660cb60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610f4167097f8eb8ce886ed860c01b6114c5565b610f5567eb0726da3a4594c760c01b6114c5565b610f69676da8b1714d35099c60c01b6114c5565b60d060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e60c9546040518263ffffffff1660e01b8152600401610fff9190611ffb565b602060405180830381865afa15801561101c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061104091906125c5565b73ffffffffffffffffffffffffffffffffffffffff1614611096576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108d9061263e565b60405180910390fd5b6110aa6733bfd5e7b8bc101160c01b6114c5565b6110be6792513261ab20fba660c01b6114c5565b8360cc819055506110d9670bfe821c1319509a60c01b6114c5565b8260cd819055506110f4670916289f18edb46160c01b6114c5565b8160ce8190555061110f674615e33afafa7a2f60c01b6114c5565b60ce5460cd5461111f919061268d565b60cc5461112c91906126cf565b60d281905550801561118b5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516111829190612755565b60405180910390a15b50505050505050565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006111d467968da3be185e5a5160c01b6114c5565b6111e867f739f162c0464a1460c01b6114c5565b6111fc672eaeeaa9830b5d3f60c01b6114c5565b60ce546112076118c3565b611211919061268d565b60d25461121e9190612770565b905090565b60d360019054906101000a900460ff1681565b61123e61175c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036112ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112a490612816565b60405180910390fd5b6112b6816117da565b50565b60006112e77f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61191b565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611324673df13441059aeabb60c01b6114c5565b61132c61175c565b6113406721a231bcf14a50a860c01b6114c5565b61135467e5eeca2d798885e060c01b6114c5565b50565b6113837f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b611925565b60000160009054906101000a900460ff16156113a7576113a28361192f565b6114c0565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561140f57506040513d601f19601f8201168201806040525081019061140c9190612862565b60015b61144e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161144590612901565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b81146114b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114aa90612993565b60405180910390fd5b506114bf8383836119e8565b5b505050565b50565b60006114de675cf31f177ed0cdc260c01b6114c5565b6114f26749d89b64c3876df460c01b6114c5565b61150667c8e5fc41365668f560c01b6114c5565b60cd546115116118c3565b1115905090565b61152c6734af3ac4c9a79b0560c01b6114c5565b6115406795d13a6505f2256c60c01b6114c5565b61155467a091be6c83b593fd60c01b6114c5565b60ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd60d060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168360c9546040518463ffffffff1660e01b81526004016115d793929190612367565b600060405180830381600087803b1580156115f157600080fd5b505af1158015611605573d6000803e3d6000fd5b5050505061161d67e33f44f1be724bd760c01b6114c5565b60ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e60c9546040518263ffffffff1660e01b815260040161167a9190611ffb565b602060405180830381865afa158015611697573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116bb91906125c5565b60cf60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061170f6782b15f27954dc7dd60c01b6114c5565b600060d360006101000a81548160ff02191690831515021790555061173e676ca622a2f08c651260c01b6114c5565b600160d360016101000a81548160ff02191690831515021790555050565b611764611a14565b73ffffffffffffffffffffffffffffffffffffffff16611782611194565b73ffffffffffffffffffffffffffffffffffffffff16146117d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117cf906129ff565b60405180910390fd5b565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081609760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60006118d96739b87bcf3c8397cb60c01b6114c5565b6118ed679ae6c55db1d2000760c01b6114c5565b61190167af2081904e0c184460c01b6114c5565b60d15461190c611a1c565b6119169190612770565b905090565b6000819050919050565b6000819050919050565b611938816118a0565b611977576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161196e90612a91565b60405180910390fd5b806119a47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61191b565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6119f183611a60565b6000825111806119fe5750805b15611a0f57611a0d8383611aaf565b505b505050565b600033905090565b6000611a3267bb993aeca79d20f960c01b6114c5565b611a4667b5b235af91dabe4e60c01b6114c5565b611a5a6716a935552421cfd560c01b6114c5565b43905090565b611a698161192f565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b6060611ad48383604051806060016040528060278152602001612c0c60279139611adc565b905092915050565b60606000808573ffffffffffffffffffffffffffffffffffffffff1685604051611b069190612b22565b600060405180830381855af49150503d8060008114611b41576040519150601f19603f3d011682016040523d82523d6000602084013e611b46565b606091505b5091509150611b5786838387611b62565b925050509392505050565b60608315611bc4576000835103611bbc57611b7c856118a0565b611bbb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bb290612b85565b60405180910390fd5b5b829050611bcf565b611bce8383611bd7565b5b949350505050565b600082511115611bea5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c1e9190612be9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c5282611c27565b9050919050565b611c6281611c47565b82525050565b6000602082019050611c7d6000830184611c59565b92915050565b60008115159050919050565b611c9881611c83565b82525050565b6000602082019050611cb36000830184611c8f565b92915050565b6000604051905090565b600080fd5b600080fd5b611cd681611c47565b8114611ce157600080fd5b50565b600081359050611cf381611ccd565b92915050565b600060208284031215611d0f57611d0e611cc3565b5b6000611d1d84828501611ce4565b91505092915050565b6000819050919050565b611d3981611d26565b8114611d4457600080fd5b50565b600081359050611d5681611d30565b92915050565b600060208284031215611d7257611d71611cc3565b5b6000611d8084828501611d47565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611ddc82611d93565b810181811067ffffffffffffffff82111715611dfb57611dfa611da4565b5b80604052505050565b6000611e0e611cb9565b9050611e1a8282611dd3565b919050565b600067ffffffffffffffff821115611e3a57611e39611da4565b5b611e4382611d93565b9050602081019050919050565b82818337600083830152505050565b6000611e72611e6d84611e1f565b611e04565b905082815260208101848484011115611e8e57611e8d611d8e565b5b611e99848285611e50565b509392505050565b600082601f830112611eb657611eb5611d89565b5b8135611ec6848260208601611e5f565b91505092915050565b60008060408385031215611ee657611ee5611cc3565b5b6000611ef485828601611ce4565b925050602083013567ffffffffffffffff811115611f1557611f14611cc8565b5b611f2185828601611ea1565b9150509250929050565b6000819050919050565b611f3e81611f2b565b82525050565b6000602082019050611f596000830184611f35565b92915050565b60008060008060008060c08789031215611f7c57611f7b611cc3565b5b6000611f8a89828a01611ce4565b9650506020611f9b89828a01611ce4565b9550506040611fac89828a01611d47565b9450506060611fbd89828a01611d47565b9350506080611fce89828a01611d47565b92505060a0611fdf89828a01611d47565b9150509295509295509295565b611ff581611d26565b82525050565b60006020820190506120106000830184611fec565b92915050565b600082825260208201905092915050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f64656c656761746563616c6c0000000000000000000000000000000000000000602082015250565b6000612083602c83612016565b915061208e82612027565b604082019050919050565b600060208201905081810360008301526120b281612076565b9050919050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f6163746976652070726f78790000000000000000000000000000000000000000602082015250565b6000612115602c83612016565b9150612120826120b9565b604082019050919050565b6000602082019050818103600083015261214481612108565b9050919050565b7f41756374696f6e20697320636c6f736564000000000000000000000000000000600082015250565b6000612181601183612016565b915061218c8261214b565b602082019050919050565b600060208201905081810360008301526121b081612174565b9050919050565b7f596f7520616c726561647920626f7567687420746869732070726f6475637400600082015250565b60006121ed601f83612016565b91506121f8826121b7565b602082019050919050565b6000602082019050818103600083015261221c816121e0565b9050919050565b7f50726f6475637420616c726561647920736f6c64000000000000000000000000600082015250565b6000612259601483612016565b915061226482612223565b602082019050919050565b600060208201905081810360008301526122888161224c565b9050919050565b7f4f776e65722063616e2774206269640000000000000000000000000000000000600082015250565b60006122c5600f83612016565b91506122d08261228f565b602082019050919050565b600060208201905081810360008301526122f4816122b8565b9050919050565b7f57454920697320696e73756666696369656e7400000000000000000000000000600082015250565b6000612331601383612016565b915061233c826122fb565b602082019050919050565b6000602082019050818103600083015261236081612324565b9050919050565b600060608201905061237c6000830186611c59565b6123896020830185611c59565b6123966040830184611fec565b949350505050565b6123a781611c83565b81146123b257600080fd5b50565b6000815190506123c48161239e565b92915050565b6000602082840312156123e0576123df611cc3565b5b60006123ee848285016123b5565b91505092915050565b7f4661696c656420746f2073656e64000000000000000000000000000000000000600082015250565b600061242d600e83612016565b9150612438826123f7565b602082019050919050565b6000602082019050818103600083015261245c81612420565b9050919050565b60006040820190506124786000830185611c59565b6124856020830184611fec565b9392505050565b7f555550535570677261646561626c653a206d757374206e6f742062652063616c60008201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000602082015250565b60006124e8603883612016565b91506124f38261248c565b604082019050919050565b60006020820190508181036000830152612517816124db565b9050919050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b600061257a602e83612016565b91506125858261251e565b604082019050919050565b600060208201905081810360008301526125a98161256d565b9050919050565b6000815190506125bf81611ccd565b92915050565b6000602082840312156125db576125da611cc3565b5b60006125e9848285016125b0565b91505092915050565b7f596f7520646f6e2774206f776e2074686973204e465420746f2073656c6c0000600082015250565b6000612628601e83612016565b9150612633826125f2565b602082019050919050565b600060208201905081810360008301526126578161261b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061269882611d26565b91506126a383611d26565b92508282026126b181611d26565b915082820484148315176126c8576126c761265e565b5b5092915050565b60006126da82611d26565b91506126e583611d26565b92508282019050808211156126fd576126fc61265e565b5b92915050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b600061273f61273a61273584612703565b61271a565b61270d565b9050919050565b61274f81612724565b82525050565b600060208201905061276a6000830184612746565b92915050565b600061277b82611d26565b915061278683611d26565b925082820390508181111561279e5761279d61265e565b5b92915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612800602683612016565b915061280b826127a4565b604082019050919050565b6000602082019050818103600083015261282f816127f3565b9050919050565b61283f81611f2b565b811461284a57600080fd5b50565b60008151905061285c81612836565b92915050565b60006020828403121561287857612877611cc3565b5b60006128868482850161284d565b91505092915050565b7f45524331393637557067726164653a206e657720696d706c656d656e7461746960008201527f6f6e206973206e6f742055555053000000000000000000000000000000000000602082015250565b60006128eb602e83612016565b91506128f68261288f565b604082019050919050565b6000602082019050818103600083015261291a816128de565b9050919050565b7f45524331393637557067726164653a20756e737570706f727465642070726f7860008201527f6961626c65555549440000000000000000000000000000000000000000000000602082015250565b600061297d602983612016565b915061298882612921565b604082019050919050565b600060208201905081810360008301526129ac81612970565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006129e9602083612016565b91506129f4826129b3565b602082019050919050565b60006020820190508181036000830152612a18816129dc565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b6000612a7b602d83612016565b9150612a8682612a1f565b604082019050919050565b60006020820190508181036000830152612aaa81612a6e565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015612ae5578082015181840152602081019050612aca565b60008484015250505050565b6000612afc82612ab1565b612b068185612abc565b9350612b16818560208601612ac7565b80840191505092915050565b6000612b2e8284612af1565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000612b6f601d83612016565b9150612b7a82612b39565b602082019050919050565b60006020820190508181036000830152612b9e81612b62565b9050919050565b600081519050919050565b6000612bbb82612ba5565b612bc58185612016565b9350612bd5818560208601612ac7565b612bde81611d93565b840191505092915050565b60006020820190508181036000830152612c038184612bb0565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220b8002d21faf98a80dd80845c09f730c21d41bb07808edb58ba5609014e3c9c5164736f6c63430008110033";

type NFTDutchAuction_ERC20BidsUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTDutchAuction_ERC20BidsUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTDutchAuction_ERC20BidsUpgradeable__factory extends ContractFactory {
  constructor(...args: NFTDutchAuction_ERC20BidsUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTDutchAuction_ERC20BidsUpgradeable> {
    return super.deploy(
      overrides || {}
    ) as Promise<NFTDutchAuction_ERC20BidsUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTDutchAuction_ERC20BidsUpgradeable {
    return super.attach(address) as NFTDutchAuction_ERC20BidsUpgradeable;
  }
  override connect(
    signer: Signer
  ): NFTDutchAuction_ERC20BidsUpgradeable__factory {
    return super.connect(
      signer
    ) as NFTDutchAuction_ERC20BidsUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTDutchAuction_ERC20BidsUpgradeableInterface {
    return new utils.Interface(
      _abi
    ) as NFTDutchAuction_ERC20BidsUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTDutchAuction_ERC20BidsUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NFTDutchAuction_ERC20BidsUpgradeable;
  }
}