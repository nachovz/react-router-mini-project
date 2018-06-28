import React from 'react';

import { Link } from "react-router-dom";

import BlogJumbotron from '../component/BlogJumbotron.jsx';

//create your first component
export class Blog extends React.Component{
    
    render(){
        return (
            <div className="text-center mt-5">
                <BlogJumbotron />
            </div>
        );
    }
}
