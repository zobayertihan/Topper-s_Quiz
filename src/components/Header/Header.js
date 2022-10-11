import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to={'/home'}>Topic</Link>
                    <Link to={'/statistics'}>Statistics</Link>
                    <Link to={'/blog'}>Blog</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;