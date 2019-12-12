import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {


  render(){
    return (
      <div className="Header">
          <Link exact activeClassName="activeLink" to={'/'} className="headerElement">Home</Link>
          <Link activeClassName="activeLink" to={'/books'} className="headerElement">Books</Link>
          <Link activeClassName="activeLink" to={'/users'} className="headerElement">Users</Link>
          <Link activeClassName="activeLink" to={'/employees'} className="headerElement">Employee Access</Link>
        </div>
      );
  }
}

export default Header;
