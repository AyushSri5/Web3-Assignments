import React, { useRef } from 'react'
import * as solanaWeb3 from '@solana/web3.js'
import { PublicKey } from '@solana/web3.js';

function ShowTokens() {
  const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'),"confirmed");
  
  const address = useRef(null);
  console.log(connection);
  

  const getTokens = async () => {
    const publicKey = new PublicKey(address.current.value);
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey,{
      programId: new solanaWeb3.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
    });
    console.log(tokenAccounts);

    tokenAccounts.value.forEach((accountInfo) => {
      const accountData = accountInfo.account.data.parsed;
      const tokenBalance = accountData.info.tokenAmount.uiAmount;
      const mintAddress = accountData.info.mint;
      console.log(`Token mint: ${mintAddress}, Balance: ${tokenBalance}`);
  });
    
  }
  return (
    <div>
    <h1>Show tokens:</h1>
    <input type='text' ref={address}/>
    <button onClick={getTokens}>Get Tokens</button>
    </div>
  )
}

export default ShowTokens