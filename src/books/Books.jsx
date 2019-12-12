import React, { useState, useEffect } from 'react';
import apiPath from '../constants';
import BookCard from './bookCard';
import './Books.css';

function Books() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);

  function searchBooks(author){
    if(author!== ""){
      fetch(`${apiPath}/book/search?author=${author}`).then(d => d.json()).then(data => {
      setBooks(data);
      });
    } else {
      getAllBooks();
    }
  }

  function getAllBooks(){
    fetch(`${apiPath}/books`).then(d => d.json()).then(data => {
      setBooks(data);
      });
  }

  return (
    <div className="Header">

      Author Name: <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/><br/>
      <button onClick={() => searchBooks(searchQuery)}>Search</button>

      {/* Display the books variable onto the screen */}
      {books.map((item,i) => 
      <div key={i}>
        <hr />  
        <BookCard item={item} />
      </div>
      )}


    </div>
  );


}

export default Books;
