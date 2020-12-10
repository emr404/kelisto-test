import React from 'react'
import { Link } from "react-router-dom";
import "../styling/style.scss";
const Header = () => {
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
                    Your Basket
                </Link>
            </div>

            
        </div>
    )
}

export default Header
