import React from 'react';
import './Navbar.css';

export const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navigations'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Men's Watches</a></li>
                    <li><a href="#">Women's Watches</a></li>
                    <li><a href="#">New Arrival</a></li>
                    <li><a href="#">Special Products</a></li>
                </ul>
            </div>
            <div className='search-div'>
                <input type="search" name="search" id="search" /><span><i className="bi bi-search"></i></span>
            </div>
            <div>
                <ul>
                    <li><a href="/login"><i className="bi bi-person"></i></a></li>
                    <li><a href="#"><i className="bi bi-cart-check"></i></a></li>
                </ul>
            </div>
        </div>
    )
}
