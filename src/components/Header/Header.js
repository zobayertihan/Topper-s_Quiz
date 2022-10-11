import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import img from '../quiz0.0.png'

const Header = () => {
    return (
        <div>
            <nav className='nav-contaisner'>
                <div className='title-container'>
                    <img src={img} alt="" />
                    <h1>Topper's Quiz</h1>
                </div>
                <div className='route-container'>
                    <NavLink to={'/home'}>Topic</NavLink>
                    <NavLink to={'/statistics'}>Statistics</NavLink>
                    <NavLink to={'/blog'}>Blog</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;