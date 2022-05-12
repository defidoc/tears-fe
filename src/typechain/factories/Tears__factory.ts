/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Tears, TearsInterface } from "../Tears";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "enableTrading",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lp",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        name: "lpPair",
        type: "address",
      },
      {
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "setLP",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    name: "tradingEnabled",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
];

const _bytecode =
  "0x60806040526000600560146101000a81548160ff0219169083151502179055506200002f6200014760201b60201c565b600a6200003d9190620005bb565b629896806200004d9190620006f8565b6006553480156200005d57600080fd5b506040518060400160405280600d81526020017f5465617273206f66204c756e61000000000000000000000000000000000000008152506040518060400160405280600581526020017f54454152530000000000000000000000000000000000000000000000000000008152508160039080519060200190620000e2929190620003cb565b508060049080519060200190620000fb929190620003cb565b5050506200011e620001126200015060201b60201c565b6200015860201b60201c565b62000141620001326200021e60201b60201c565b6006546200024860201b60201c565b6200083a565b60006012905090565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620002bb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002b290620004b3565b60405180910390fd5b620002cf60008383620003c160201b60201c565b8060026000828254620002e3919062000503565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200033a919062000503565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620003a19190620004d5565b60405180910390a3620003bd60008383620003c660201b60201c565b5050565b505050565b505050565b828054620003d99062000770565b90600052602060002090601f016020900481019282620003fd576000855562000449565b82601f106200041857805160ff191683800117855562000449565b8280016001018555821562000449579182015b82811115620004485782518255916020019190600101906200042b565b5b5090506200045891906200045c565b5090565b5b80821115620004775760008160009055506001016200045d565b5090565b60006200048a601f83620004f2565b9150620004978262000811565b602082019050919050565b620004ad8162000759565b82525050565b60006020820190508181036000830152620004ce816200047b565b9050919050565b6000602082019050620004ec6000830184620004a2565b92915050565b600082825260208201905092915050565b6000620005108262000759565b91506200051d8362000759565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620005555762000554620007a6565b5b828201905092915050565b6000808291508390505b6001851115620005b2578086048111156200058a5762000589620007a6565b5b60018516156200059a5780820291505b8081029050620005aa8562000804565b94506200056a565b94509492505050565b6000620005c88262000759565b9150620005d58362000763565b9250620006047fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846200060c565b905092915050565b6000826200061e5760019050620006f1565b816200062e5760009050620006f1565b8160018114620006475760028114620006525762000688565b6001915050620006f1565b60ff841115620006675762000666620007a6565b5b8360020a915084821115620006815762000680620007a6565b5b50620006f1565b5060208310610133831016604e8410600b8410161715620006c25782820a905083811115620006bc57620006bb620007a6565b5b620006f1565b620006d1848484600162000560565b92509050818404811115620006eb57620006ea620007a6565b5b81810290505b9392505050565b6000620007058262000759565b9150620007128362000759565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156200074e576200074d620007a6565b5b828202905092915050565b6000819050919050565b600060ff82169050919050565b600060028204905060018216806200078957607f821691505b60208210811415620007a0576200079f620007d5565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60008160011c9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b611e69806200084a6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063715018a6116100ad57806395d89b411161007157806395d89b411461031f578063a457c2d71461033d578063a9059cbb1461036d578063dd62ed3e1461039d578063f2fde38b146103cd5761012c565b8063715018a6146102a1578063733948c1146102ab57806379cc6790146102db5780638a8c523c146102f75780638da5cb5b146103015761012c565b8063313ce567116100f4578063313ce567146101e9578063395093511461020757806342966c68146102375780634ada218b1461025357806370a08231146102715761012c565b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461017f57806323b872dd1461019d57806328d67938146101cd575b600080fd5b6101396103e9565b6040516101469190611705565b60405180910390f35b61016960048036038101906101649190611451565b61047b565b60405161017691906116ea565b60405180910390f35b61018761049e565b60405161019491906118a7565b60405180910390f35b6101b760048036038101906101b291906113c6565b6104a8565b6040516101c491906116ea565b60405180910390f35b6101e760048036038101906101e29190611415565b6104d7565b005b6101f16105ae565b6040516101fe91906118c2565b60405180910390f35b610221600480360381019061021c9190611451565b6105b7565b60405161022e91906116ea565b60405180910390f35b610251600480360381019061024c919061148d565b6105ee565b005b61025b610602565b60405161026891906116ea565b60405180910390f35b61028b60048036038101906102869190611361565b610615565b60405161029891906118a7565b60405180910390f35b6102a961065d565b005b6102c560048036038101906102c09190611361565b6106e5565b6040516102d291906116ea565b60405180910390f35b6102f560048036038101906102f09190611451565b610705565b005b6102ff610725565b005b6103096107be565b60405161031691906116cf565b60405180910390f35b6103276107e8565b6040516103349190611705565b60405180910390f35b61035760048036038101906103529190611451565b61087a565b60405161036491906116ea565b60405180910390f35b61038760048036038101906103829190611451565b6108f1565b60405161039491906116ea565b60405180910390f35b6103b760048036038101906103b2919061138a565b610914565b6040516103c491906118a7565b60405180910390f35b6103e760048036038101906103e29190611361565b61099b565b005b6060600380546103f890611a0b565b80601f016020809104026020016040519081016040528092919081815260200182805461042490611a0b565b80156104715780601f1061044657610100808354040283529160200191610471565b820191906000526020600020905b81548152906001019060200180831161045457829003601f168201915b5050505050905090565b600080610486610a93565b9050610493818585610a9b565b600191505092915050565b6000600254905090565b6000806104b3610a93565b90506104c0858285610c66565b6104cb858585610cf2565b60019150509392505050565b6104df610a93565b73ffffffffffffffffffffffffffffffffffffffff166104fd6107be565b73ffffffffffffffffffffffffffffffffffffffff1614610553576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054a906117e7565b60405180910390fd5b80600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60006012905090565b6000806105c2610a93565b90506105e38185856105d48589610914565b6105de91906118f9565b610a9b565b600191505092915050565b6105ff6105f9610a93565b82610dfa565b50565b600560149054906101000a900460ff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610665610a93565b73ffffffffffffffffffffffffffffffffffffffff166106836107be565b73ffffffffffffffffffffffffffffffffffffffff16146106d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d0906117e7565b60405180910390fd5b6106e36000610fd1565b565b60076020528060005260406000206000915054906101000a900460ff1681565b61071782610711610a93565b83610c66565b6107218282610dfa565b5050565b61072d610a93565b73ffffffffffffffffffffffffffffffffffffffff1661074b6107be565b73ffffffffffffffffffffffffffffffffffffffff16146107a1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610798906117e7565b60405180910390fd5b6001600560146101000a81548160ff021916908315150217905550565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546107f790611a0b565b80601f016020809104026020016040519081016040528092919081815260200182805461082390611a0b565b80156108705780601f1061084557610100808354040283529160200191610870565b820191906000526020600020905b81548152906001019060200180831161085357829003601f168201915b5050505050905090565b600080610885610a93565b905060006108938286610914565b9050838110156108d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108cf90611887565b60405180910390fd5b6108e58286868403610a9b565b60019250505092915050565b6000806108fc610a93565b9050610909818585610cf2565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6109a3610a93565b73ffffffffffffffffffffffffffffffffffffffff166109c16107be565b73ffffffffffffffffffffffffffffffffffffffff1614610a17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0e906117e7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a87576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7e90611767565b60405180910390fd5b610a9081610fd1565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0290611867565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b7b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7290611787565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610c5991906118a7565b60405180910390a3505050565b6000610c728484610914565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610cec5781811015610cde576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd5906117a7565b60405180910390fd5b610ceb8484848403610a9b565b5b50505050565b600560149054906101000a900460ff16610dea57600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16158015610daa5750600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b610de9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de090611847565b60405180910390fd5b5b610df5838383611097565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6190611807565b60405180910390fd5b610e7682600083611318565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610efc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef390611747565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254610f53919061194f565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610fb891906118a7565b60405180910390a3610fcc8360008461131d565b505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611107576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110fe90611827565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611177576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161116e90611727565b60405180910390fd5b611182838383611318565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611208576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ff906117c7565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461129b91906118f9565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516112ff91906118a7565b60405180910390a361131284848461131d565b50505050565b505050565b505050565b60008135905061133181611dee565b92915050565b60008135905061134681611e05565b92915050565b60008135905061135b81611e1c565b92915050565b60006020828403121561137357600080fd5b600061138184828501611322565b91505092915050565b6000806040838503121561139d57600080fd5b60006113ab85828601611322565b92505060206113bc85828601611322565b9150509250929050565b6000806000606084860312156113db57600080fd5b60006113e986828701611322565b93505060206113fa86828701611322565b925050604061140b8682870161134c565b9150509250925092565b6000806040838503121561142857600080fd5b600061143685828601611322565b925050602061144785828601611337565b9150509250929050565b6000806040838503121561146457600080fd5b600061147285828601611322565b92505060206114838582860161134c565b9150509250929050565b60006020828403121561149f57600080fd5b60006114ad8482850161134c565b91505092915050565b6114bf81611983565b82525050565b6114ce81611995565b82525050565b60006114df826118dd565b6114e981856118e8565b93506114f98185602086016119d8565b61150281611a9b565b840191505092915050565b600061151a6023836118e8565b915061152582611aac565b604082019050919050565b600061153d6022836118e8565b915061154882611afb565b604082019050919050565b60006115606026836118e8565b915061156b82611b4a565b604082019050919050565b60006115836022836118e8565b915061158e82611b99565b604082019050919050565b60006115a6601d836118e8565b91506115b182611be8565b602082019050919050565b60006115c96026836118e8565b91506115d482611c11565b604082019050919050565b60006115ec6020836118e8565b91506115f782611c60565b602082019050919050565b600061160f6021836118e8565b915061161a82611c89565b604082019050919050565b60006116326025836118e8565b915061163d82611cd8565b604082019050919050565b6000611655600f836118e8565b915061166082611d27565b602082019050919050565b60006116786024836118e8565b915061168382611d50565b604082019050919050565b600061169b6025836118e8565b91506116a682611d9f565b604082019050919050565b6116ba816119c1565b82525050565b6116c9816119cb565b82525050565b60006020820190506116e460008301846114b6565b92915050565b60006020820190506116ff60008301846114c5565b92915050565b6000602082019050818103600083015261171f81846114d4565b905092915050565b600060208201905081810360008301526117408161150d565b9050919050565b6000602082019050818103600083015261176081611530565b9050919050565b6000602082019050818103600083015261178081611553565b9050919050565b600060208201905081810360008301526117a081611576565b9050919050565b600060208201905081810360008301526117c081611599565b9050919050565b600060208201905081810360008301526117e0816115bc565b9050919050565b60006020820190508181036000830152611800816115df565b9050919050565b6000602082019050818103600083015261182081611602565b9050919050565b6000602082019050818103600083015261184081611625565b9050919050565b6000602082019050818103600083015261186081611648565b9050919050565b600060208201905081810360008301526118808161166b565b9050919050565b600060208201905081810360008301526118a08161168e565b9050919050565b60006020820190506118bc60008301846116b1565b92915050565b60006020820190506118d760008301846116c0565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611904826119c1565b915061190f836119c1565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561194457611943611a3d565b5b828201905092915050565b600061195a826119c1565b9150611965836119c1565b92508282101561197857611977611a3d565b5b828203905092915050565b600061198e826119a1565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156119f65780820151818401526020810190506119db565b83811115611a05576000848401525b50505050565b60006002820490506001821680611a2357607f821691505b60208210811415611a3757611a36611a6c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f547261696e672064697361626c65640000000000000000000000000000000000600082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b611df781611983565b8114611e0257600080fd5b50565b611e0e81611995565b8114611e1957600080fd5b50565b611e25816119c1565b8114611e3057600080fd5b5056fea2646970667358221220ecf2c41b2a33fa052c400c64833221cbf7a34478992e5c0129b6689bfb5cb7bf64736f6c63430008040033";

export class Tears__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Tears> {
    return super.deploy(overrides || {}) as Promise<Tears>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Tears {
    return super.attach(address) as Tears;
  }
  connect(signer: Signer): Tears__factory {
    return super.connect(signer) as Tears__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TearsInterface {
    return new utils.Interface(_abi) as TearsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Tears {
    return new Contract(address, _abi, signerOrProvider) as Tears;
  }
}