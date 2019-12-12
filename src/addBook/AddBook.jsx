import React, {useState} from 'react';
import apiPath from '../constants';
import './AddBook.css';

function AddBook() {

    const [title, setTitle] = useState([]);
    const [isbn, setIsbn] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [publisher, setPublisher] = useState([]);
    const [year, setYear] = useState([]);
    const [category, setCategory] = useState([]);
    const [edition, setEdition] = useState([]);


    function addBook(){
        const book = {
          title, isbn, authors, publisher, year, category, edition
        }
        fetch(`${apiPath}/book`,{
          method: "PUT",
          headers:  {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(book),
        }).then(d => d.text()).then(data => {
          alert(data);
        });
    }

  return (
    <div className="Header">
        <p>Add a book</p>
        Book Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/><br/>
        Book ISBN: <input type="number" value={isbn} onChange={(e) => setIsbn(e.target.value)}/><br/>
        Author(s): <input type="text" value={authors} onChange={(e) => setAuthors(e.target.value)}/><br/>
        Publisher: <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)}/><br/>
        Year: <input type="number" value={year} onChange={(e) => setYear(e.target.value)}/><br/>
        Category: <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}/><br/>
        Edition: <input type="number" value={edition} onChange={(e) => setEdition(e.target.value)}/><br/>
        <button onClick={addBook}> Add Book </button> 
    </div>
  );
}

export default AddBook;
