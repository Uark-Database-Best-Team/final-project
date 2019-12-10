import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {


  render(){
    return (
      <div className="Header">
          <Link to={'/'} className="headerElement">Home</Link>
          <Link to={'/books'} className="headerElement">Books</Link>
          <Link to={'/users'} className="headerElement">Users</Link>
          <Link to={'/employees'} className="headerElement">Employee Access</Link>
        </div>
      );
  }
}

export default Header;
