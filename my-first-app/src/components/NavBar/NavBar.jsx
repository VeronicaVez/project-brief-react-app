import './NavBar.css'
import logo from './../../assets/images/shopping-cart.png'


const NavBar = () => {

    return(
        <header className='NavBar'>
            <h1>Easy-Buy</h1>
            <img src={logo} alt="logo"/>
        </header>
    )
}

export default NavBar