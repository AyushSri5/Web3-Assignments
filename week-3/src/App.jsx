import './App.css'
import { SolanaWallet } from './SolanaWallet'
import { EthWallet } from './EthWallet'
import SolBalance from './SolBalance'
import EthBalance from './EthBalance'

function App() {
  return (
    <div className="app-container">
      <div className="wallet-row">
        <span className="wallet-label">Solana:</span>
        <SolanaWallet />
      </div>
      <div className="wallet-row">
        <span className="wallet-label">Ethereum:</span>
        <EthWallet />
      </div>
      <div className='wallet-row'>
        <SolBalance />
      </div>
      <div className='wallet-row'>
        <EthBalance />
      </div>
    </div>
  )
}

export default App