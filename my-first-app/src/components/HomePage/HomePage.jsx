import NavBar from "../NavBar/NavBar"
import SideBar from "../SideBar/SideBar"
import Footer from "../Footer/Footer"
import ProductsList from "../Products/products"
const HomePage = () =>{
    return (
        <div className="HomePage">
        <NavBar/>
        <SideBar/>
        <Footer/>
        <ProductsList/>
        </div>
    )
}

export default HomePage