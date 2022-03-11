var Web3 = require('web3')
//console.log(Web3)

//connect to mainnet
var url = 'https://mainnet.infura.io/v3/39e6de62426d42ab9917ba74290f65a9'

var web3 = new Web3(url)
//console.log(web3)

var address = '0x00000000219ab540356cBB839Cbe05303d7705Fa'
web3.eth.getBalance(address).then(function (balance) {
  //console.log('balance', balance)

  //   show balance in wei

  let weibalance = web3.utils.fromWei(balance, 'ether')
  //console.log('weibalance', weibalance)
})

//Create wallet address on block chain
var createAccount = web3.eth.accounts.create()
// console.log(createAccount)

// get abi of bnb  from ethscan
var abi = [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_spender', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: 'success', type: 'bool' }],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_from', type: 'address' },
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: 'success', type: 'bool' }],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'amount', type: 'uint256' }],
    name: 'withdrawEther',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_value', type: 'uint256' }],
    name: 'burn',
    outputs: [{ name: 'success', type: 'bool' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_value', type: 'uint256' }],
    name: 'unfreeze',
    outputs: [{ name: 'success', type: 'bool' }],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'freezeOf',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_value', type: 'uint256' }],
    name: 'freeze',
    outputs: [{ name: 'success', type: 'bool' }],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: '', type: 'address' },
      { name: '', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    type: 'function',
  },
  {
    inputs: [
      { name: 'initialSupply', type: 'uint256' },
      { name: 'tokenName', type: 'string' },
      { name: 'decimalUnits', type: 'uint8' },
      { name: 'tokenSymbol', type: 'string' },
    ],
    payable: false,
    type: 'constructor',
  },
  { payable: true, type: 'fallback' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'from', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'from', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Burn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'from', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Freeze',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'from', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Unfreeze',
    type: 'event',
  },
]

// console.log('abi=====>>>>', abi)

var contractAddress = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52'
//  console.log('contractAddress', contractAddress)

var contract = new web3.eth.Contract(abi, contractAddress)
// console.log('contract', contract)

var methods = contract.methods
// console.log('methods', methods)

// show token name
contract.methods
  .name()
  .call()
  .then((name) => {
    //    console.log('name', name)
  })

//   show symbol
contract.methods
  .symbol()
  .call()
  .then((symbol) => {
    // console.log('symbol', symbol)
  })

//   balanceof take one perameter which is token address
contract.methods
  .balanceOf('0xB8c77482e45F1F44dE1745F52C74426C631bDD52')
  .call()
  .then((result, err) => {
    console.log('result', web3.utils.fromWei(result, 'ether'))
  })
