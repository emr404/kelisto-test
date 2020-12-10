import React, {useContext } from 'react'
import { Link } from "react-router-dom";
import {ProductContext} from '../context/BasketContext';
import "../styling/style.scss";
const Header = () => {
    const [basketContent, setBasketContent] = useContext(ProductContext)
    return (
        <div className='Header'>
        
            <div className='Logo'>
                <h2>KTS</h2>
            </div>

            <div className='NavLinks'>
                <Link to='/' className='NavLink'>
                    Shop
                </Link>
                
                <Link to='/Basket' className='NavLink'>
                    Your Basket ({basketContent.length == 1 ? basketContent.length + ' item' : basketContent.length + ' items' })
                </Link>
            </div>

            
        </div>
    )
}

export default Header
