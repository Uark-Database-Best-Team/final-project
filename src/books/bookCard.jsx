import React, { useState } from "react"
import apiPath from '../constants';



export default function BookCard(props) {

    const [quantity, setQuantity] = useState([]);
    const [cartId, setCartId] = useState([]);
    const [shown, setShown] = useState(false);

  const item = props.item;

  function addToCart(cartId, quantity, isbn, cartItemId){

    fetch(`${apiPath}/cart/item`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cartId, quantity, isbn, cartItemId
      })
    }).then(res => res.text()).then(res => {
        setShown(false);
        alert(res);
    });
  }

  return (
    <div>
        <p>{item.title}</p>
        <pre className="authorList">Author(s): {item.authors} | ISBN: {item.isbn}</pre>
            <button onClick={() => setShown(last => !last)}> Add to Cart </button>
        {
          shown && 
          <div>
            Quantity: <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}/>
            CartId: <input type="number" value={cartId} onChange={(e) => setCartId(parseInt(e.target.value))}/>
            <button onClick={() => addToCart(cartId, quantity, item.isbn, Math.floor(Math.random()*10000))}>Add To Cart</button>
          </div>
        }
     </div>    
  )
}