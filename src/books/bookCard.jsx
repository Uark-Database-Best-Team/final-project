import React, { useState, useEffect } from "react"
import apiPath from '../constants';



export default function BookCard(props) {

    const [quantity, setQuantity] = useState([]);
    const [cartId, setCartId] = useState([]);
    const [shown, setShown] = useState(false);
    const [imageUrl, setImageUrl] = useState([]);

    const item = props.item;


    useEffect(() => {
      const q = props.item.title;
      const proxyurl = 'https://cors-anywhere.herokuapp.com/';
      const url = `https://www.google.com/search?q=${q}&tbm=isch&sa=X`; // site that doesn’t send Access-Control-*
  
      fetch(proxyurl + url).then((res) => res.text()).then((data) => {
        const div = document.createElement('div');
        div.innerHTML = data;
        const imgs = Array.from(div.getElementsByTagName('img'));
    
        const mainImgs = imgs.filter(
          ele => ele.alt && ele.dataset && (ele.dataset.src || ele.dataset.iurl)
        );
        console.log(mainImgs);
    
        if (mainImgs.length === 0) {
            setImageUrl('https://usathss.files.wordpress.com/2018/08/s20180725img_football_promos078cbl.jpg?w=1000&h=600&crop=1');
          return;
        }
    
        const img = mainImgs[Math.floor(Math.random() * mainImgs.length)];
    
        const src = img.dataset.iurl || img.dataset.src;
        setImageUrl(src);     
      });
       
    }, []);

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
        <image src={imageUrl} />
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