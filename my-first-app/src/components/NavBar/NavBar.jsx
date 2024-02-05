import './NavBar.css'
import logo from './../../assets/images/shopping-cart.png'
import Title from './Title'


const NavBar = () => {
    const styleObject = {
        color: "violet"
    }

    return(
        <header className='NavBar' style={styleObject}>
            <img src={logo} alt="logo"/>
            <Title text={'Shop it'} />
        </header>
    )
}

export default NavBar