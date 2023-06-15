/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Lock, LockInterface } from "../Lock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_unlockTime",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockTime",
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
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052604051610798380380610798833981810160405281019061002591906101a9565b61003f674e5bf3d384b9929260c01b61016b60201b60201c565b61005967404d43fb85c3c8c160c01b61016b60201b60201c565b61007367e7ab251c0fb95c7760c01b61016b60201b60201c565b61008d678e0b9fbd3b321ea560c01b61016b60201b60201c565b8042106100cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100c690610259565b60405180910390fd5b6100e9673d6e5264c62c062f60c01b61016b60201b60201c565b6101036773f861609802cdf560c01b61016b60201b60201c565b806000819055506101246755652ad64191f4ae60c01b61016b60201b60201c565b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610279565b50565b600080fd5b6000819050919050565b61018681610173565b811461019157600080fd5b50565b6000815190506101a38161017d565b92915050565b6000602082840312156101bf576101be61016e565b5b60006101cd84828501610194565b91505092915050565b600082825260208201905092915050565b7f556e6c6f636b2074696d652073686f756c6420626520696e207468652066757460008201527f7572650000000000000000000000000000000000000000000000000000000000602082015250565b60006102436023836101d6565b915061024e826101e7565b604082019050919050565b6000602082019050818103600083015261027281610236565b9050919050565b610510806102886000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063251c1aa3146100465780633ccfd60b146100645780638da5cb5b1461006e575b600080fd5b61004e61008c565b60405161005b9190610351565b60405180910390f35b61006c610092565b005b61007661030f565b60405161008391906103ad565b60405180910390f35b60005481565b6100a667fc0449e4cebf0a6d60c01b610335565b6100ba67da1ce6f1234146b660c01b610335565b6100ce672c3a80a68a9c2c1660c01b610335565b6100e2670d19f0b1ef821eb260c01b610335565b600054421015610127576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011e90610425565b60405180910390fd5b61013b6766d1554dc195de1e60c01b610335565b61014f67ee3ef3a2d4a3cd7560c01b610335565b61016367f6d99c343c957f2e60c01b610335565b610177674f6136401e6eda8460c01b610335565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610207576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101fe90610491565b60405180910390fd5b61021b6744f27bcb604df14560c01b610335565b61022f67bcb49c8c23b07f1a60c01b610335565b61024367d039bf25f1d680e260c01b610335565b7fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b9347426040516102749291906104b1565b60405180910390a1610290675b18b6bd914aa14660c01b610335565b6102a467cd86764fd1eba4c660c01b610335565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505015801561030c573d6000803e3d6000fd5b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b6000819050919050565b61034b81610338565b82525050565b60006020820190506103666000830184610342565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103978261036c565b9050919050565b6103a78161038c565b82525050565b60006020820190506103c2600083018461039e565b92915050565b600082825260208201905092915050565b7f596f752063616e27742077697468647261772079657400000000000000000000600082015250565b600061040f6016836103c8565b915061041a826103d9565b602082019050919050565b6000602082019050818103600083015261043e81610402565b9050919050565b7f596f75206172656e277420746865206f776e6572000000000000000000000000600082015250565b600061047b6014836103c8565b915061048682610445565b602082019050919050565b600060208201905081810360008301526104aa8161046e565b9050919050565b60006040820190506104c66000830185610342565b6104d36020830184610342565b939250505056fea2646970667358221220ece5d8e0b2b2e8c00e4b5c61758820343abb50171b1ea7f677dbb69c4994f03c64736f6c63430008120033";

type LockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lock__factory extends ContractFactory {
  constructor(...args: LockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _unlockTime: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<Lock> {
    return super.deploy(_unlockTime, overrides || {}) as Promise<Lock>;
  }
  override getDeployTransaction(
    _unlockTime: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_unlockTime, overrides || {});
  }
  override attach(address: string): Lock {
    return super.attach(address) as Lock;
  }
  override connect(signer: Signer): Lock__factory {
    return super.connect(signer) as Lock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LockInterface {
    return new utils.Interface(_abi) as LockInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Lock {
    return new Contract(address, _abi, signerOrProvider) as Lock;
  }
}