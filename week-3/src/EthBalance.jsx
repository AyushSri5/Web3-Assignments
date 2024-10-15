import React, { useRef, useState } from 'react'
import axios from 'axios';
import { ethers } from 'ethers';


const EthBalance = () => {
  const [balance, setBalance] = useState(null);
  const address = useRef(null);

  const getBalance =  async () => {

// Set wallet address corresponding to vitalik.eth

// Alchemy API key
const apiKey = 'W5c5MuiMAzNX0kEUZpDa4_6VlWxghBfQ';

var data = JSON.stringify({
    "jsonrpc": "2.0",
    "id": 1,
    "method": "eth_getBalance",
    "params": [
        address.current.value, 'latest',
    ]
});

var config = {
    method: 'post',
    url: `https://eth-sepolia.g.alchemy.com/v2/${apiKey}`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    data: data
};

axios(config)
    .then(function (response) {
        let balance = response['data']['result'];
        console.log(ethers);
        
        balance = ethers.formatEther(balance);
        setBalance(balance);
        console.log(`Balance of ${address.current.value}: ${balance} ETH`);
    })
    .catch(function (error) {
        console.log(error);
    });
  }
  return (
    <div>
      <h1>Eth Balance:</h1>
        <label>Enter the address</label>
        <input type="text" ref={address} />
        <button onClick={getBalance}>Show Balance</button>
        <p>{balance}</p>
    </div>
  )
}

export default EthBalance