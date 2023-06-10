import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">CLOTHBUCKS</h1>
      <nav className="header__nav">
        <Link to="/register" className="header__link">Register</Link>
        <Link to="/cart" className="header__link">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
