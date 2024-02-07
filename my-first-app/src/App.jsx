import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import SideBar from './components/SideBar/SideBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import HomePage from './components/Pages/HomePage/HomePage.jsx'
import Products from './components/Products/Products.jsx'
import { Routes, Route } from 'react-router-dom'
import ProductsDetailsPage from './components/Pages/DetailsPage.jsx'
import AboutPage from "./components/Pages/AboutPage.jsx"
import NotFound from "./components/Pages/NotFoundPage/NotFound.jsx"

function App() {

  return (
    <div className="App">

      <NavBar />
      <SideBar/>
      <Footer/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/products/:product_id' element={<ProductsDetailsPage/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
