import ListOfProducts from '../../products.json'
import ProductCard from '../ProductCard/ProductCard'
import { useState } from 'react'

const ProductsList = () => {
    const [products, setProducts] = useState(ListOfProducts);

    const deleteProduct = productIdToDelete => {
        const filteredProducts = products.filter(product => product.id !== productIdToDelete);
        setProducts(filteredProducts);
    };

    return (
        <section className='ProductsList'>
            <h2>Product List</h2>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <img src={product.thumbnail} alt="Product Image" />
                    <p>{product.description}</p>
                    <p>{product.price}$</p>
                    <button className="btn-delete" onClick={() => deleteProduct(product.id)}>Delete</button>
                </div>
            ))}
        </section>
    );
};

export default ProductsList