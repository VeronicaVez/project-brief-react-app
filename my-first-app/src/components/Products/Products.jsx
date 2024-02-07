import ListOfProducts from '../../products.json'
import ProductCard from '../ProductCard/ProductCard'
import SideBar from './../SideBar/SideBar'
import { useState } from 'react'
import './Products.css'
import {Link} from "react-router-dom"

const ProductsList = () => {
    const [products, setProducts] = useState(ListOfProducts);

    const deleteProduct = productIdToDelete => {
        const filteredProducts = products.filter(product => product.id !== productIdToDelete);
        setProducts(filteredProducts);
    };

    return (
        <section className='Products'>
            <h2>Product List</h2>
            {products.map(product => (
                <div key={product.id}>
                    <figure>
                    <img src={product.thumbnail} alt="Product Image" />
                    </figure>
                    <article className="info">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}$</p>
                    <p>{product.discountPercentage > 15 ? 'SUPER OFERTA!' : undefined}</p>
                    <Link to={`/products/${product.id}`}>Details</Link>
                    <br/>
                    <button className="btn-delete" onClick={() => deleteProduct(product.id)}>Delete</button>
                    <hr/>
                    </article>
                </div>
            ))}
        </section>
    );
};

export default ProductsList