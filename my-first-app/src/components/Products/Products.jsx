import ListOfProducts from '../../products.json'
import { useState } from 'react'
import './Products.css'
import {Link} from "react-router-dom"
import ProductForm from './Form' 

const ProductsList = () => {
    const [products, setProducts] = useState(ListOfProducts);
    const [editingProduct, setEditingProduct] = useState(null);

    const deleteProduct = productIdToDelete => {
        const filteredProducts = products.filter(product => product.id !== productIdToDelete);
        setProducts(filteredProducts)
    }

    const addNewProduct = newProduct => {
        const productsCopy = [...ListOfProducts]
        productsCopy.unshift(newProduct)
        setProducts(productsCopy)
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
                        <p>{product.price}$ <br/> {product.discountPercentage > 15 ? 'SUPER OFERTA!' : undefined}</p>
                        <button className="btn-delete" onClick={() => deleteProduct(product.id)}>Delete</button>
                        <hr/>
                        </article>
                    </div>
                ))}
            </section>

            <section>
                <h1 className = 'Form'>Have something to sell? Add it here!</h1>
                <ProductForm addNewProduct = {addNewProduct}/>
            </section>
        </div>
       
    );
};


export default ProductsList