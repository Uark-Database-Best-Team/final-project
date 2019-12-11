import React, { useState } from 'react';
import apiPath from '../constants';
import './Users.css';

function Users() {

  const [cartId, setCartId] = useState([]);
  const [cartData, setCartData] = useState([]);

  function getShoppingCartData(cartId){
    console.log("called");
    fetch(`${apiPath}/cart/data?id=${cartId}`).then(d => d.json()).then(data => {
      console.log(data);
      setCartData(data);
    });
  }

  let getCartInfo = () =>{
    if(cartData.cartItems !== undefined){
      return(
        <div>
          <p>Cart Name: {cartData.cart}</p>
          <p>Cart Items</p>
          {cartData.items.map((item,i) => 
          <div key={i}>
            <p>{cartData.books[i].title}</p> {/* Show the books name*/}
            <p>{item.quantity}</p> {/* Show the books name*/}
            <p>Price: {item.quantity * cartData.books[i].price}</p> {/* Show the books name*/}
          </div>
          )}  
        </div>
      );  
    } else {
      return (
        <div>
          <p>Please enter your cart id to see your cart information</p>
        </div>
      );     
    }

  }

  return (
    <div className="Header">

      Shopping Cart ID: <input type="text" value={cartId} onChange={(e) => setCartId(e.target.value)}/><br/>
      <button onClick={() => getShoppingCartData(cartId)}>Search</button>

      <hr/>

      {getCartInfo()}
    </div>
  );
}

export default Users;
