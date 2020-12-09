import React,{useState,useContext} from 'react'
import { ProductData } from "../data/products.js";
import {ProductContext} from '../context/BasketContext';

const Products = () => {
    const [Products, setProducts] = useState(ProductData)
    const [basket, setBasket] = useContext(ProductContext)
    
    const addItem = e =>{
        e.preventDefault();
        const productName =  e.target.childNodes[1].innerText
        const productPrice = e.target.childNodes[2].innerText
        const productImage = e.target.childNodes[0].currentSrc

        setBasket(prevProduct=>[
            ...prevProduct,
            {title:productName, price:productPrice, image:productImage}
        ])
    }
    return (
        <div className='ProductsContainer'>
        
            {
                Products.map(product=> 
                    <div className='Product' key={product.productId}>
                        <form onSubmit={addItem}>
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
