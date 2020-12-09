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
                        <p>{item.price}</p>
                        <p>{item.title}</p>
                    </div>
                )
            }
            
        </div>
    )
}

export default Basket
