import React, { useState, useEffect } from 'react';
import apiPath from '../constants';
import './Books.css';

function Books() {

  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);

  useEffect(() => {
    fetch(apiPath + "/books").then(d => d.json()).then(data => {
    setBooks(data);
    });
  }, []);

  function searchBooks(author){
    fetch(apiPath + "/books/search?author=" + author).then(d => d.json()).then(data => {
    setBooks(data);
    });
  }

  console.log(books);

  return (
    <div className="Header">

      Author Name: <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/><br/>
      <button onClick={() => searchBooks(searchQuery)}>Search</button>

      {/* Display the books variable onto the screen */}
      {books.map((item,i) => 
      <div key={i}>
        <hr />  
        <p>{item.title}</p>
        <pre className="authorList">Author(s): {item.authors} | ISBN: {item.isbn}</pre>
      </div>
      )}

    </div>
  );


}

export default Books;
