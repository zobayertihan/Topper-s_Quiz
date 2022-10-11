import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Tpoic';
import './Home.css'

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div>
            <div className='header-container'>
                <div className='header-title'>
                    <h1 className='details'>It Matters how you eveolve. Solve much Quiz and become one of the Topper</h1>
                </div>
            </div>
            <div className='home-container'>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;