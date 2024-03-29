import { useState, useEffect } from "react";
import "./EditForm.css"
import ListOfProducts from "./../../products.json" 
import { useNavigate } from "react-router-dom";

const EditForm = ({editProduct}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [discountPercentage, setDiscountPercentage] = useState('')

    const handleTitleChange = event => setTitle(event.target.value)
    const handleDescriptionChange = event => setDescription(event.target.value)
    const handlePriceChange = event => setPrice(event.target.value)
    const handleThumbnailChange = event => setThumbnail(event.target.value)
    const handleDiscountChange = event => setDiscountPercentage(event.target.value)

    const handleSubmit = event => {
        event.preventDefault()

        const editProduct = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            discountPercentage: discountPercentage
        }

        editProduct(editProduct)
    }

    return(
        <div className="EditForm">
            <form onSubmit={handleSubmit}>
                <hr/>
                <label>
                    Name of the Product:
                    <input type="text" value={title} onChange={handleTitleChange}/>
                </label>
                <br/>
                <label>
                    Description:
                    <input type="text" value={description} onChange={handleDescriptionChange}/>
                </label>
                <br/>
                <label>
                    Price:
                    <input type="text" value={price} onChange={handlePriceChange}/>
                </label>
                <br/>
                <label>
                    Photo:
                    <input type="text" value={thumbnail} onChange={handleThumbnailChange}/>
                </label>
                <br/>
                <label>
                    Discount *if any*:
                    <input type="text" value={discountPercentage} onChange={handleDiscountChange}/>
                </label>
                <br/>
                <input type="submit"  value = 'CHANGE DETAILS!'/>
            </form>
        </div>
    )
}

export default EditForm