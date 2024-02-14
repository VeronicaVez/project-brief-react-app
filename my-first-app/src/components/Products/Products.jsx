import ListOfProducts from '../../products.json'
import { useState } from 'react'
import './Products.css'
import {Link} from "react-router-dom"
import Form from './Form' 
import EditForm from './EditForm'

const ProductsList = () => {
    const [products, setProducts] = useState(ListOfProducts);

    const deleteProduct = productIdToDelete => {
        const filteredProducts = products.filter(product => product.id !== productIdToDelete);
        setProducts(filteredProducts)
    }

    const addNewProduct = newProduct => {
        const productsCopy = [...ListOfProducts]
        productsCopy.unshift(newProduct)
        setProducts(productsCopy)
    }

        const [isVisible, setVisible] = useState(false)

    const toggleVisibility = () => {
        setVisible(!isVisible)
    }

    return (
        <div className="flex">
            <section>
                <h2>Product List</h2>
                {products.map(product => (
                    <div key={product.id} className='Products'>
                        <figure>
                        <img src={product.thumbnail} alt="Product Image" className="imageProSize" />
                        </figure>
                        <article className="info">
                        <Link to={`/products/${product.id}`}>
                            <h3>{product.title}</h3>
                            </Link>
                        <p>{product.description} </p> 
                        <p>{product.price}$ <br/> {product.discountPercentage > 15 ? 'GREAT DEAL!' : undefined}</p>
                        <button className="btn-delete" onClick={() => deleteProduct(product.id)}>Delete</button>
                        <button className="btn-editProduct" onClick={toggleVisibility}>Edit</button>
                        <hr/>
                        </article>
                    </div>
                ))}
            </section>

            <section>
                <h1 className = 'Form'>Have something to sell? Add it here!</h1>
                <Form addNewProduct = {addNewProduct}/>
                <div style={{display: isVisible ? "flex" : "none"}}>
                <EditForm/>
                </div>
            </section>
        </div>
       
    );
};


export default ProductsList