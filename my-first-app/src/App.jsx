import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import SideBar from './components/SideBar/SideBar.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
      <NavBar />
       <br/>
      <SideBar link={'#'} text={'Home'}></SideBar>  
      <SideBar link={'#'} text={'About'}></SideBar>  
       <br/>
       <Footer link={"https://github.com/VeronicaVez/project-brief-react-app"} text={"GitHub Link"}></Footer>
    </>
  )
}

export default App
