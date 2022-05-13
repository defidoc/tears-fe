/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TearsFaucet, TearsFaucetInterface } from "../TearsFaucet";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "tears_",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ust",
        type: "address",
      },
      {
        internalType: "address",
        name: "_luna",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getOutput",
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
    name: "luna",
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
    name: "maxRedeem",
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
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "ust",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b50604051620019af380380620019af8339818101604052810190620000379190620002e1565b620000576200004b620001d060201b60201c565b620001d860201b60201c565b6001808190555082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250506103e8600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200017957600080fd5b505afa1580156200018e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001b4919062000337565b620001c0919062000363565b60c081815250505050506200046a565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050620002ad816200041c565b92915050565b600081519050620002c48162000436565b92915050565b600081519050620002db8162000450565b92915050565b600080600060608486031215620002f757600080fd5b60006200030786828701620002b3565b93505060206200031a868287016200029c565b92505060406200032d868287016200029c565b9150509250925092565b6000602082840312156200034a57600080fd5b60006200035a84828501620002ca565b91505092915050565b60006200037082620003e3565b91506200037d83620003e3565b92508262000390576200038f620003ed565b5b828204905092915050565b6000620003a882620003c3565b9050919050565b6000620003bc826200039b565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b62000427816200039b565b81146200043357600080fd5b50565b6200044181620003af565b81146200044d57600080fd5b50565b6200045b81620003e3565b81146200046757600080fd5b50565b60805160601c60a05160601c60c0516114d0620004df600039600081816102ce0152818161087901528181610a9e0152610acb0152600081816102310152818161051d015261075e0152600081816101dc015281816105bd015281816106010152818161071a0152610af601526114d06000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063715018a611610066578063715018a6146100fa5780638da5cb5b14610104578063b0b651eb14610122578063c896782d14610152578063f2fde38b1461017057610093565b80631e9a695014610098578063234a4c3e146100b45780633ccfd60b146100d25780636f31ab34146100dc575b600080fd5b6100b260048036038101906100ad9190610d6e565b61018c565b005b6100bc61051b565b6040516100c99190610ef2565b60405180910390f35b6100da61053f565b005b6100e4610877565b6040516100f1919061100d565b60405180910390f35b61010261089b565b005b61010c610923565b6040516101199190610ef2565b60405180910390f35b61013c60048036038101906101379190610d6e565b61094c565b604051610149919061100d565b60405180910390f35b61015a610af4565b6040516101679190610ef2565b60405180910390f35b61018a60048036038101906101859190610d45565b610b18565b005b600260015414156101d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c990610fed565b60405180910390fd5b60026001819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16148061027f57507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b6102be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b590610fad565b60405180910390fd5b60006102ca838361094c565b90507f000000000000000000000000000000000000000000000000000000000000000081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103389190611039565b1115610379576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037090610f8d565b60405180910390fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103c89190611039565b925050819055508273ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161040c93929190610f0d565b602060405180830381600087803b15801561042657600080fd5b505af115801561043a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045e9190610daa565b50600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016104bc929190610f44565b602060405180830381600087803b1580156104d657600080fd5b505af11580156104ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050e9190610daa565b5050600180819055505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b610547610c10565b73ffffffffffffffffffffffffffffffffffffffff16610565610923565b73ffffffffffffffffffffffffffffffffffffffff16146105bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b290610fcd565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6105ff610923565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016106589190610ef2565b60206040518083038186803b15801561067057600080fd5b505afa158015610684573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a89190610dd3565b6040518363ffffffff1660e01b81526004016106c5929190610f44565b602060405180830381600087803b1580156106df57600080fd5b505af11580156106f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107179190610daa565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb61075c610923565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016107b59190610ef2565b60206040518083038186803b1580156107cd57600080fd5b505afa1580156107e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108059190610dd3565b6040518363ffffffff1660e01b8152600401610822929190610f44565b602060405180830381600087803b15801561083c57600080fd5b505af1158015610850573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108749190610daa565b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b6108a3610c10565b73ffffffffffffffffffffffffffffffffffffffff166108c1610923565b73ffffffffffffffffffffffffffffffffffffffff1614610917576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090e90610fcd565b60405180910390fd5b6109216000610c18565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000808373ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561099557600080fd5b505afa1580156109a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cd9190610dfc565b600a6109d99190611113565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015610a4157600080fd5b505afa158015610a55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a799190610dfc565b600a610a859190611113565b84610a909190611231565b610a9a919061108f565b90507f00000000000000000000000000000000000000000000000000000000000000008111610ac95780610aeb565b7f00000000000000000000000000000000000000000000000000000000000000005b91505092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b610b20610c10565b73ffffffffffffffffffffffffffffffffffffffff16610b3e610923565b73ffffffffffffffffffffffffffffffffffffffff1614610b94576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8b90610fcd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfb90610f6d565b60405180910390fd5b610c0d81610c18565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081359050610ceb8161143e565b92915050565b600081519050610d0081611455565b92915050565b600081359050610d158161146c565b92915050565b600081519050610d2a8161146c565b92915050565b600081519050610d3f81611483565b92915050565b600060208284031215610d5757600080fd5b6000610d6584828501610cdc565b91505092915050565b60008060408385031215610d8157600080fd5b6000610d8f85828601610cdc565b9250506020610da085828601610d06565b9150509250929050565b600060208284031215610dbc57600080fd5b6000610dca84828501610cf1565b91505092915050565b600060208284031215610de557600080fd5b6000610df384828501610d1b565b91505092915050565b600060208284031215610e0e57600080fd5b6000610e1c84828501610d30565b91505092915050565b610e2e8161128b565b82525050565b6000610e41602683611028565b9150610e4c8261134b565b604082019050919050565b6000610e64600f83611028565b9150610e6f8261139a565b602082019050919050565b6000610e87600b83611028565b9150610e92826113c3565b602082019050919050565b6000610eaa602083611028565b9150610eb5826113ec565b602082019050919050565b6000610ecd601f83611028565b9150610ed882611415565b602082019050919050565b610eec816112c9565b82525050565b6000602082019050610f076000830184610e25565b92915050565b6000606082019050610f226000830186610e25565b610f2f6020830185610e25565b610f3c6040830184610ee3565b949350505050565b6000604082019050610f596000830185610e25565b610f666020830184610ee3565b9392505050565b60006020820190508181036000830152610f8681610e34565b9050919050565b60006020820190508181036000830152610fa681610e57565b9050919050565b60006020820190508181036000830152610fc681610e7a565b9050919050565b60006020820190508181036000830152610fe681610e9d565b9050919050565b6000602082019050818103600083015261100681610ec0565b9050919050565b60006020820190506110226000830184610ee3565b92915050565b600082825260208201905092915050565b6000611044826112c9565b915061104f836112c9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611084576110836112e0565b5b828201905092915050565b600061109a826112c9565b91506110a5836112c9565b9250826110b5576110b461130f565b5b828204905092915050565b6000808291508390505b600185111561110a578086048111156110e6576110e56112e0565b5b60018516156110f55780820291505b80810290506111038561133e565b94506110ca565b94509492505050565b600061111e826112c9565b9150611129836112d3565b92506111567fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848461115e565b905092915050565b60008261116e576001905061122a565b8161117c576000905061122a565b8160018114611192576002811461119c576111cb565b600191505061122a565b60ff8411156111ae576111ad6112e0565b5b8360020a9150848211156111c5576111c46112e0565b5b5061122a565b5060208310610133831016604e8410600b84101617156112005782820a9050838111156111fb576111fa6112e0565b5b61122a565b61120d84848460016110c0565b92509050818404811115611224576112236112e0565b5b81810290505b9392505050565b600061123c826112c9565b9150611247836112c9565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156112805761127f6112e0565b5b828202905092915050565b6000611296826112a9565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60008160011c9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f766572206d61782072656465656d0000000000000000000000000000000000600082015250565b7f57726f6e6720746f6b656e000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6114478161128b565b811461145257600080fd5b50565b61145e8161129d565b811461146957600080fd5b50565b611475816112c9565b811461148057600080fd5b50565b61148c816112d3565b811461149757600080fd5b5056fea264697066735822122025d501c0483876acaf035bae3589ffdeecf1fabd0d711224371713cdaad1ad5664736f6c63430008040033";

export class TearsFaucet__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    tears_: string,
    _ust: string,
    _luna: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TearsFaucet> {
    return super.deploy(
      tears_,
      _ust,
      _luna,
      overrides || {}
    ) as Promise<TearsFaucet>;
  }
  getDeployTransaction(
    tears_: string,
    _ust: string,
    _luna: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(tears_, _ust, _luna, overrides || {});
  }
  attach(address: string): TearsFaucet {
    return super.attach(address) as TearsFaucet;
  }
  connect(signer: Signer): TearsFaucet__factory {
    return super.connect(signer) as TearsFaucet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TearsFaucetInterface {
    return new utils.Interface(_abi) as TearsFaucetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TearsFaucet {
    return new Contract(address, _abi, signerOrProvider) as TearsFaucet;
  }
}
