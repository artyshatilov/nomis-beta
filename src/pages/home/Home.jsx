import { Link } from 'react-router-dom'
import './Home.scss'
import inch from '../../assets/1inch.svg'
import solana from '../../assets/solana.svg'
import aave from '../../assets/aave.svg'
import { Blurred } from '../../components/utilities/background/blurredBg'

export const Home = () => {
    const dapp = "/score"
    const docs = "#"
    return(
        <>
            <Blurred></Blurred>

            <div className="container">
                <h1>Wallet Scoring and Credentials Protocol</h1>
            </div>

            <div className="container">
                <h5>The infrastucture for data-based personalized web3 experiences</h5>
            </div>

            <div className="container">

                <Link className="button dapp" to={dapp}>
                    <span>Try dApp</span>
                </Link>

                <Link className="button docs" to={docs}>
                    <span>Read Docs</span>
                </Link>
                
            </div>
            
            <div className="container overlay">
                <p>Backed by</p>
                <img src={aave} alt='AAVE'></img>
                <img src={solana} alt='SOLANA'></img>
                <img src={inch} alt='1INCH'></img>
            </div>
        </>
    )
}