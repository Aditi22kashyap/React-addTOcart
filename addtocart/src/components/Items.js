import React from 'react';
function Items({ id, title, description, price, img, amount, onIncrement, onDecrement, onRemove }) {
   // Calculate the total price for the item based on quantity
   const totalItemPrice = price * amount;
 
   return (
     <>
       <div className='items-info'>
         <div className='product-img'>
           <img src={img} alt="imag" />
         </div>
         <div className='title'>
           <h2>{title}</h2>
           <p>{description}</p>
         </div>
         <div className='add-minus-quantity'>
           <i className="fas fa-minus minus" onClick={() => onDecrement(id)}></i>
           <input type='text' placeholder={amount} readOnly />
           <i className="fas fa-plus add" onClick={() => onIncrement(id)}></i>
         </div>
         <div className='price'>
           <h3>{totalItemPrice}rs</h3>
         </div>
         <div className='remove-item'>
           <i className='fas fa-trash-alt remove' onClick={() => onRemove(id)}></i>
         </div>
       </div>
       <hr />
     </>
   );
 }
 
export default Items;
