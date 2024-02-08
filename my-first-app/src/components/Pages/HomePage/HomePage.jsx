import SideBar from "../../SideBar/SideBar"
import Footer from "../../Footer/Footer"
import './HomePage.css'

const HomePage = () =>{
    return (
        <div className="HomePage">
            <SideBar/>
            <Footer/>
            <div className="ImageText">
                <div className="WelcomeContainer">
                    <img className='WelcomeImage' src='https://i.pinimg.com/1200x/8f/c4/69/8fc46935246069c1b0d9dcd33c1bcce5.jpg' alt='Welcome Image'></img>
                    <h3 className="WelcomeText">YOU DREAM IT! WE HAVE IT!</h3>
                </div>
            </div>
        </div>
    )
}

export default HomePage