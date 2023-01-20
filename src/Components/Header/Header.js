import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/order">Order</Link>
            <Link to="/grandpa">Grandpa</Link>
        </nav>
    );
};

export default Header;