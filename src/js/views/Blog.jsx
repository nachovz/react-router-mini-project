import React from 'react';
import { Link } from "react-router-dom";

import NavBar from '../component/navbar.jsx';
import BlogJumbotron from '../component/BlogJumbotron.jsx';

//create your first component
export class Blog extends React.Component{
    
    render(){
        return (
            <div className="container">
                <NavBar />
                <BlogJumbotron />
            </div>
        );
    }
}
