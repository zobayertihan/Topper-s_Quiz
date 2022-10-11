import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Tpoic';
import './Home.css'

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div>
            <h2>Welcome Home</h2>
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