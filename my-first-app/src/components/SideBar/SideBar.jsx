import './SideBar.css'
import {Link} from "react-router-dom"

const SideBar = () => {

    return (
        <header className="SideBar">
            <Link to={`/`}>Home</Link>
            <Link to={`/about`}>About</Link>
            <Link to={`/products`}>Products</Link>

        </header>
    )
}

export default SideBar