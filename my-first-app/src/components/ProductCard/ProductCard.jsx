import ListOfProducts from './../../products.json'

const ProductCard = props => {

    const product = props.productInfo
    

    return (
        <article className= "ProductCard">
            <h3>{ListOfProducts.title}</h3>
            <p>{ListOfProducts.description}</p>
            <p>{ListOfProducts.price}</p>

            <button className="btn-delete" onClick={() => deleteMovie(movie._id)}>Delete </button>
        </article>
    ) 


}
export default ProductCard