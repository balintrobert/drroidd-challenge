import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='logo-container'>
        <p className='logo'>LOGO</p>
      </div>
      <ul className='nav-buttons'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li className='search-button'>
          <a href='#search'>
            <i className='fas fa-search'></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
