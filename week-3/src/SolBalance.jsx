import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import React, { useRef, useState } from 'react'

const SolBalance = () => {
    const address = useRef(null);
    const [balance, setBalance] = useState(null);
    console.log("Address", address);

    const getBalance = async() => {
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
 
        let wallet = new PublicKey(address.current.value);
        console.log(
          `${(await connection.getBalance(wallet)) / LAMPORTS_PER_SOL} SOL`,
        );
        setBalance((await connection.getBalance(wallet)) / LAMPORTS_PER_SOL);
    }
    
  return (
    <div>
        <h1>Solana Balance:</h1>
        <label>Enter the address</label>
        <input type="text" ref={address} />
        <button onClick={getBalance}>Show Balance</button>
        <p>{balance}</p>
    </div>
  )
}

export default SolBalance