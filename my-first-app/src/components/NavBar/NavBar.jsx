import './NavBar.css'
import logo from './../../assets/images/shopping-cart.png'
import { Link } from 'react-router-dom'


const NavBar = () => {

    return(
        <header className='NavBar'>
            <Link to = '/'><h1>Easy-Buy</h1></Link>
            <img src={logo} alt="logo"/>
        </header>
    )
}

export default NavBar