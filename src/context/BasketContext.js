import React,{ createContext, useState } from 'react'


export const ProductContext = createContext();
export const ProductProvider = ({children}) => {
    const [productData, setProductData] = useState([])
    return (
        <div>
            <ProductContext.Provider value={[productData,setProductData]}>
                {children}
            </ProductContext.Provider>
        </div>
    )
}


