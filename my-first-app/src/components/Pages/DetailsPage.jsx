import { Navigate, useParams} from "react-router-dom"
import productsData from "./../../products.json"
import './DetailsPage.css'
import EditForm from "../Products/EditForm"
import { useState } from "react"

const ProductsDetailsPage = () => {

    const {product_id} = useParams()

    const foundProduct = productsData.find((elm) => {
        return elm.id == product_id
    })

    if (!foundProduct) return <Navigate to="/error"/>

    const [isVisible, setVisible] = useState(false)

    const toggleVisibility = () => {
        setVisible(!isVisible)
    }

    return (
        <>
        <div  className = "DetailsPage">
        <h1>Estos son los detalles del producto {product_id}</h1>
        <p>Nombre: {foundProduct.title}</p>
        <p>Marca: {foundProduct.brand}</p>
        <p>Precio: ${foundProduct.price}</p>
        <p>Descuento: {foundProduct.discountPercentage}%</p>
        <img src={foundProduct.thumbnail} alt="imgs del producto"/>
        </div>
        </>
    )
}


export default ProductsDetailsPage