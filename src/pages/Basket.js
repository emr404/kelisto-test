import React, { useState,useContext } from 'react'
import {ProductContext} from '../context/BasketContext';
const Basket = () => {
    const [basketContext, setBasketContext] = useContext(ProductContext)
    const [basketContent, setBasketContent] = useState(basketContext)
    
    return (
        <div className='Basket'>
            <h1>My Basket</h1>

            {
                basketContent.map(item=>
                    <div className='BasketItem' key={item.sku}>
                        <img src={item.image} alt={item.title} title={item.title}/>
                        
                        <div>
                        <p id='Price'>{item.price}</p>
                        <p id='Title'>{item.title}</p>
                        <p id='Qty'>Qty: {item.qty}</p>
                        
                        </div>
                    </div>
                )
            }
            
        </div>
    )
}

export default Basket
