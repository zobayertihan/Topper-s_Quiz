import React from 'react';
import './ErrorPage.css'
import img from '../404.png'

const ErrorPage = () => {
    return (
        <div className='error'>
            <img src={img} alt="" />
        </div>
    );
};

export default ErrorPage;