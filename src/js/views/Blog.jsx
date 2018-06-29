import React from 'react';
import { Link } from "react-router-dom";

import NavBar from '../component/navbar.jsx';
import BlogJumbotron from '../component/BlogJumbotron.jsx';
import BlogSidebar from '../component/BlogSidebar.jsx';
import BlogFooter from '../component/BlogFooter.jsx';
import BlogPostCards from '../component/BlogPostCards.jsx';
import BlogSamplePost from '../component/BlogSamplePost.jsx';

//create your first component
export class Blog extends React.Component{
    
    render(){
        return (
            <div>
                <div id="blogTopContentContainer" className="container">
                    <NavBar />
                    <BlogJumbotron />
                    <BlogPostCards />
                </div>
                <div id="blogMainContentContainer" className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <BlogSamplePost />
                        </div>
                        <aside className="col-md-4">
                            <BlogSidebar />
                        </aside>
                    </div>
                </div>
                <BlogFooter />
            </div>
        );
    }
}
