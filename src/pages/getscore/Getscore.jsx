import { Link } from 'react-router-dom'
import '../home/Home.scss'
import './Getscore.scss'
import { Blurred } from '../../components/utilities/background/blurredBg'
import { Input } from '../../components/utilities/input/input'

export const Getscore = () => {
    return(
        <>
            <Blurred></Blurred>

            <div className="container">
                <h1>Check Your Wallet</h1>
            </div>

            <div className="container">
                <Input></Input>
            </div>

        </>
    )
}