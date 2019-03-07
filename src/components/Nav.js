import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';

const Nav = ({ match }) => {
    return (
        <div className="container nav">
            
            <Search />
            
            <nav className="main-nav">
                <ul>
                <li><NavLink to='/Cats'>Cats</NavLink></li>
                <li><NavLink to='/Dogs'>Dogs</NavLink></li>
                <li><NavLink to='/Computers'>Computers</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;