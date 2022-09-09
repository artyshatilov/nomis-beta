import { Logo } from '../utilities/logo/Logo'
import './Header.scss'
import { headerMenu } from '../../maps/menu'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <div className="container">
                    <Link to='/'><Logo ></Logo></Link>
                </div>
                <div className="container">
                    <ul className='menu'>
                        {headerMenu.map((item, idx) => (
                            <li className='body' key={`menu item ${idx}`}>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}