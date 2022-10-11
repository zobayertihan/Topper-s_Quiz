import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='blogs'>
                <h1>What is the purpose of React Router?</h1>
                <p>The method of routing involves sending users to various websites in response to their requests or actions. The major use for ReactJS Router is the creation of single-page web applications. Multiple routes are defined in the application using React Router. A user will be sent to a certain route when they enter a particular URL into their browser and that URL path matches any of the "routes" in the router file.</p>

                <p> The React Router Package, a standard library system built on top of React, is used to provide routing in React applications. It gives the information that will be shown on the web page to the synchronous URL in the browser. It is mostly used for creating single-page web apps and preserves the application's regular structure and functionality.</p>
            </div>
            <div className='blogs'>
                <h1>How does context API works?</h1>
                <p>In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.React.createContext() is all we need. It returns a consumer and a provider. The provider is a component that as its name suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div className='blogs'>
                <h1>What is useRef hook?</h1>
                <p>The useRef Hook allows us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
            </div>
        </div>
    );
};

export default Blog;