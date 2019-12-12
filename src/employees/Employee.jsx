import React from 'react';
import { Link } from 'react-router-dom';
import './Employees.css';

function Employees() {
  return (
    <div className="Header">
        <Link to={'/addBook'} className="headerElement">Add a New Book</Link>
    </div>
  );
}

export default Employees;
