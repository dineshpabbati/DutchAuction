/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface NFTDutchAuction_ERC20BidsInterface extends utils.Interface {
  functions: {
    "addressOfToken()": FunctionFragment;
    "auctionStatusOpen()": FunctionFragment;
    "bid(uint256)": FunctionFragment;
    "blockDifference()": FunctionFragment;
    "buyer()": FunctionFragment;
    "currentBlock()": FunctionFragment;
    "currentPrice()": FunctionFragment;
    "initialPrice()": FunctionFragment;
    "isAuctionOpen()": FunctionFragment;
    "nft_Address()": FunctionFragment;
    "nft_Id()": FunctionFragment;
    "numBlocksAuctionOpen()": FunctionFragment;
    "offerPriceDecrement()": FunctionFragment;
    "reservePrice()": FunctionFragment;
    "sellerAccountAddress()": FunctionFragment;
    "startingBlock()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addressOfToken"
      | "auctionStatusOpen"
      | "bid"
      | "blockDifference"
      | "buyer"
      | "currentBlock"
      | "currentPrice"
      | "initialPrice"
      | "isAuctionOpen"
      | "nft_Address"
      | "nft_Id"
      | "numBlocksAuctionOpen"
      | "offerPriceDecrement"
      | "reservePrice"
      | "sellerAccountAddress"
      | "startingBlock"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addressOfToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "auctionStatusOpen",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bid",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "blockDifference",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "buyer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "currentBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAuctionOpen",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nft_Address",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nft_Id", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "numBlocksAuctionOpen",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "offerPriceDecrement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reservePrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sellerAccountAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startingBlock",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addressOfToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "auctionStatusOpen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "blockDifference",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAuctionOpen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nft_Address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nft_Id", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numBlocksAuctionOpen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "offerPriceDecrement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reservePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sellerAccountAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startingBlock",
    data: BytesLike
  ): Result;

  events: {};
}

export interface NFTDutchAuction_ERC20Bids extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NFTDutchAuction_ERC20BidsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addressOfToken(overrides?: CallOverrides): Promise<[string]>;

    auctionStatusOpen(overrides?: CallOverrides): Promise<[boolean]>;

    bid(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    blockDifference(overrides?: CallOverrides): Promise<[BigNumber]>;

    buyer(overrides?: CallOverrides): Promise<[string]>;

    currentBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    currentPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    isAuctionOpen(overrides?: CallOverrides): Promise<[boolean]>;

    nft_Address(overrides?: CallOverrides): Promise<[string]>;

    nft_Id(overrides?: CallOverrides): Promise<[BigNumber]>;

    numBlocksAuctionOpen(overrides?: CallOverrides): Promise<[BigNumber]>;

    offerPriceDecrement(overrides?: CallOverrides): Promise<[BigNumber]>;

    reservePrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    sellerAccountAddress(overrides?: CallOverrides): Promise<[string]>;

    startingBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  addressOfToken(overrides?: CallOverrides): Promise<string>;

  auctionStatusOpen(overrides?: CallOverrides): Promise<boolean>;

  bid(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  blockDifference(overrides?: CallOverrides): Promise<BigNumber>;

  buyer(overrides?: CallOverrides): Promise<string>;

  currentBlock(overrides?: CallOverrides): Promise<BigNumber>;

  currentPrice(overrides?: CallOverrides): Promise<BigNumber>;

  initialPrice(overrides?: CallOverrides): Promise<BigNumber>;

  isAuctionOpen(overrides?: CallOverrides): Promise<boolean>;

  nft_Address(overrides?: CallOverrides): Promise<string>;

  nft_Id(overrides?: CallOverrides): Promise<BigNumber>;

  numBlocksAuctionOpen(overrides?: CallOverrides): Promise<BigNumber>;

  offerPriceDecrement(overrides?: CallOverrides): Promise<BigNumber>;

  reservePrice(overrides?: CallOverrides): Promise<BigNumber>;

  sellerAccountAddress(overrides?: CallOverrides): Promise<string>;

  startingBlock(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    addressOfToken(overrides?: CallOverrides): Promise<string>;

    auctionStatusOpen(overrides?: CallOverrides): Promise<boolean>;

    bid(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    blockDifference(overrides?: CallOverrides): Promise<BigNumber>;

    buyer(overrides?: CallOverrides): Promise<string>;

    currentBlock(overrides?: CallOverrides): Promise<BigNumber>;

    currentPrice(overrides?: CallOverrides): Promise<BigNumber>;

    initialPrice(overrides?: CallOverrides): Promise<BigNumber>;

    isAuctionOpen(overrides?: CallOverrides): Promise<boolean>;

    nft_Address(overrides?: CallOverrides): Promise<string>;

    nft_Id(overrides?: CallOverrides): Promise<BigNumber>;

    numBlocksAuctionOpen(overrides?: CallOverrides): Promise<BigNumber>;

    offerPriceDecrement(overrides?: CallOverrides): Promise<BigNumber>;

    reservePrice(overrides?: CallOverrides): Promise<BigNumber>;

    sellerAccountAddress(overrides?: CallOverrides): Promise<string>;

    startingBlock(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    addressOfToken(overrides?: CallOverrides): Promise<BigNumber>;

    auctionStatusOpen(overrides?: CallOverrides): Promise<BigNumber>;

    bid(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    blockDifference(overrides?: CallOverrides): Promise<BigNumber>;

    buyer(overrides?: CallOverrides): Promise<BigNumber>;

    currentBlock(overrides?: CallOverrides): Promise<BigNumber>;

    currentPrice(overrides?: CallOverrides): Promise<BigNumber>;

    initialPrice(overrides?: CallOverrides): Promise<BigNumber>;

    isAuctionOpen(overrides?: CallOverrides): Promise<BigNumber>;

    nft_Address(overrides?: CallOverrides): Promise<BigNumber>;

    nft_Id(overrides?: CallOverrides): Promise<BigNumber>;

    numBlocksAuctionOpen(overrides?: CallOverrides): Promise<BigNumber>;

    offerPriceDecrement(overrides?: CallOverrides): Promise<BigNumber>;

    reservePrice(overrides?: CallOverrides): Promise<BigNumber>;

    sellerAccountAddress(overrides?: CallOverrides): Promise<BigNumber>;

    startingBlock(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addressOfToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    auctionStatusOpen(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bid(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    blockDifference(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAuctionOpen(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nft_Address(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nft_Id(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numBlocksAuctionOpen(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    offerPriceDecrement(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reservePrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sellerAccountAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    startingBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
