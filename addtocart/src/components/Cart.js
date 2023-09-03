import React from 'react'
import './Cart.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from "./Items";
import { createContext } from 'react';
import { products } from './products';
import ContextCart from "./ContextCart";
export const CartContext =createContext();
function Cart() {
    // const [items,setItem]=useState(products);
  return (
    <>
   <CartContext.Provider value={products}>
      
        {/* Your Cart component code here */}
        {/* You can render ContextCart here or in other parts of your app */}
        <ContextCart />
      
    </CartContext.Provider>
    </>
  )
}

export default Cart