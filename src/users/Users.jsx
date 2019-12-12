import React, { useState } from 'react';
import apiPath from '../constants';
import { Switch, Route, NavLink as Link } from "react-router-dom";
import './Users.css';

function Users() {

  const [cartId, setCartId] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [mergeSource, setMergeSource] = useState([]);
  const [mergeDestination, setMergeDestination] = useState([]);
  const [shoppingCartName, setShoppingCartName] = useState([]);
  const [customerId, setCustomerId] = useState([]);

  function getShoppingCartData(cartId){
    fetch(`${apiPath}/cart/data?id=${cartId}`).then(d => d.json()).then(data => {
      setCartData(data);
    });
  }

  function mergeShoppingCarts(mergeSource, mergeDestination){
    fetch(`${apiPath}/cart/merge`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({cartId1: mergeDestination, cartId2: mergeSource})
    }).then(response=>response.json()).then(data => {
      console.log(data);
      setCartData(data);
    });
  }

  function createShoppingCart() {
    const body = {
      cartId: Math.floor(Math.random()*1000),
      customerId,
      cartName: shoppingCartName,
    }
    fetch(`${apiPath}/cart`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(x => x.json()).then(x => alert(`Please remember this cart id: ${x.cartId}`));
  }

  return (
    <div className="Header">
      <br />
      <Link activeClassName="activeLink" to={"/users/cart"}> View Cart </Link>
      <Link activeClassName="activeLink" to={"/users/merge-carts"}> Merge Cart </Link> 
      <Link activeClassName="activeLink" to={"/users/new-cart"}> New Cart </Link> 
      <br />

      <Switch>
        <Route path="/users/cart">
          Shopping Cart Id: <input type="number" value={cartId} onChange={(e) => setCartId(e.target.value)}/><br/>
          <button onClick={() => getShoppingCartData(cartId)}>View</button>
          {
            cartData.items !== undefined ? (
              <div>
                <p className="cartName">{cartData.cart.cartName}</p>
                {cartData.items.map((item,i) => 
                <div key={i}>
                  <p className="bookTitle">{cartData.books[i].title}</p> {/* Show the books name*/}
                  <p className="itemQuantity">{item.quantity}</p> {/* Show the books name*/}
                  <p className="price">Price: {item.quantity * cartData.books[i].price}</p> {/* Show the books name*/}
                  <hr/>
                </div>
                )}  
              </div>
            ) : (
              <div>
                <p>Please enter your cart id to see your cart information or id's to merge two shopping carts</p>
              </div>
            )
          }
        </Route>
        <Route path="/users/merge-carts">
          <div className="cartMergeInputItem">
            Merge shopping cart: <input type="number" value={mergeSource} onChange={(e) => setMergeSource(parseInt(e.target.value))}/>
                into <input type="number" value={mergeDestination} onChange={(e) => setMergeDestination(parseInt(e.target.value))}/>

            <button onClick={() => mergeShoppingCarts(mergeSource, mergeDestination)}>Merge</button>
          </div>
        </Route>
        <Route path="/users/new-cart">
        <div className="cartMergeInputItem">
            Shopping cart name: <input type="text" value={shoppingCartName} onChange={(e) => setShoppingCartName(e.target.value)}/><br/>
            User id: <input type="number" value={customerId} onChange={(e) => setCustomerId(parseInt(e.target.value))}/><br/>

            <button onClick={() => createShoppingCart()}>Create Cart</button>
          </div>          
        </Route>
        </Switch>
    </div>
  );
}

export default Users;
