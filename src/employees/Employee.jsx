import React from 'react';
import { Link } from 'react-router-dom';
import './Employees.css';

function Employees() {
  return (
    <div className="Header">
        <p>Employees Page</p>

        <Link to={'/addBook'} className="headerElement">Add a New Book</Link>
    </div>
  );
}

export default Employees;
