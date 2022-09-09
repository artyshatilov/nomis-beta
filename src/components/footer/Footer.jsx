import './Footer.scss'
import { Logo } from '../utilities/logo/Logo'
import { footerMenu } from '../../maps/menu'


export const Footer = () => {
    return(
        <footer>
            <div className='wrapper'>
                <div className='container'>
                    <Logo></Logo>
                </div>
                <div className='container'>
                    <p className='footnote'>
                        Nomis is a wallet scoring and credentials protocol which helps on-chain developers build better DeFi products.
                    </p>
                </div>
                <div className='container'>
                    <ul className='menu'>
                        {footerMenu.map((item, idx) => (
                            <li className='footnote' key={`menu item ${idx}`}>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='container'>
                    <p className='footnote'>
                        2022 © Nomis, all rights reserved.
                    </p>
                    <p className='footnote'>
                        <a href='#'>gm@nomis.cc</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}