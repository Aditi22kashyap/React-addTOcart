import React from 'react'
import './Cart.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from "./Items";
import { useState } from 'react';
import { products } from './products';
function Cart() {
    const [items,setItem]=useState(products);
  return (
    <>
    <div>
      <header>
        <div className="continue-shopping">
        <img src="./images/arrow.png" alt="" srcset="" style={{ width: '20px', height: '20px' }} />
            <h3>Continue shopping</h3>
        </div>
        <div className='cart-icon'>
            <img src="./images/cart.png" alt="cart" />
            <p>7</p>
        </div>
      </header>
      <section className='main-cart-section'>
        <h1>shopping cart</h1>
        <p>you have <span className='total-items-count'>4</span> items in shooping cart</p>
        <div className='cart-items'>
           <div className="cart-items-container">
           <Scrollbars >
            {
                items.map((curItem,)=>{
                    return  <Items key={curItem.id} {...curItem}/>
                })
            }
          
           
            </Scrollbars>
           </div>
        </div>
        <div className='card-total'>
            <h3>Cart Total:<span>2200rs</span></h3>
        </div>
      </section>
    </div>
    </>
  )
}

export default Cart