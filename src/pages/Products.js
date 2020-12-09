import React,{useState} from 'react'
import { ProductData, ProductsData } from "../data/products.js";

const Products = () => {
    const [Products, setProducts] = useState(ProductData)
    return (
        <div className='ProductsContainer'>
        
        {
            Products.map(product=>
            <div className='Product'>
            <form onSubmit=''>
            <img src={product.image.default} alt={product.title} title={product.title}/>
            <p id='Title'>{product.title}</p>
                    <p id='Price'>£{product.price}</p>
                    
                    
                    <button>Add to Basket</button>
            </form>

            </div>
            )
        }
            
        </div>
    )
}

export default Products
