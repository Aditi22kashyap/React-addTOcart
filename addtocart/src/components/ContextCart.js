import React, { useContext, useState } from 'react';
import './Cart.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import { CartContext } from './Cart';

function ContextCart() {
  const cart = useContext(CartContext);
  const [items, setItems] = useState(cart);

  // Function to handle incrementing quantity
  const handleIncrement = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    );
    setItems(updatedItems);
  };

  // Function to handle decrementing quantity
  const handleDecrement = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id && item.amount > 1 ? { ...item, amount: item.amount - 1 } : item
    );
    setItems(updatedItems);
  };

  // Function to handle removing an item from the cart
  const handleRemove = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  // Calculate total price
  const totalPrice = items.reduce((total, item) => total + item.price * item.amount, 0);

  return (
    <div>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="" style={{ width: '20px', height: '20px' }} />
          <h3>Continue shopping</h3>
        </div>
        <div className='cart-icon'>
          <img src="./images/cart.png" alt="cart" />
          <p>{items.length}</p>
        </div>
      </header>
      <section className='main-cart-section'>
        <h1>shopping cart</h1>
        <p>you have <span className='total-items-count'>{items.length}</span> items in shopping cart</p>
        <div className='cart-items'>
          <div className="cart-items-container">
            <Scrollbars>
              {items.map((curItem) => (
                <Items
                  key={curItem.id}
                  {...curItem}
                  onIncrement={() => handleIncrement(curItem.id)}
                  onDecrement={() => handleDecrement(curItem.id)}
                  onRemove={() => handleRemove(curItem.id)}
                />
              ))}
            </Scrollbars>
          </div>
        </div>
        <div className='card-total'>
          <h3>Cart Total:<span>{totalPrice}rs</span></h3>
        </div>
      </section>
    </div>
  );
}

export default ContextCart;
