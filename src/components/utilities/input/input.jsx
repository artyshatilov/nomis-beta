import './input.scss'
import eth from '../../../assets/eth.svg'
import sol from '../../../assets/sol.svg'
import expandIcon from '../../../assets/expandIcon.svg'

export const Input = () => {
    const handleClick = event => {
        event.currentTarget.classList.toggle('pressed');
    }
    return (
        <>
            <form className='checkwallet'>
                <div className="select" onClick={handleClick}>
                    <img className='expand' src={expandIcon}></img>

                    <div className='chains'>

                        <input type='radio' name='blockchain' id='etherium' value='eth'/>
                        <label htmlFor="etherium"><span className='callout'>
                            <img src={eth}></img>Etherium
                        </span></label>

                        <input type='radio' name='blockchain' id='solana' value='sol'/>
                        <label htmlFor="solana"><span className='callout'>
                            <img src={sol}></img>Solana
                        </span></label>
                    </div>
                </div>
                
                <input className='body' type='text' name='wallet' id='wallet' placeholder='Type a wallet address here...'/>

                <button className='callout'>Get Score</button>
            </form>
        </>
    )
}