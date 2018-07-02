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
            <React.Fragment>
                <NavBar />
                <div id="blogTopContentContainer" className="container">
                    <BlogJumbotron
                        title="Title of a longer featured blog post"
                        subHeadline="Multiple lines of text that form the lede, informing new readers quickly and efficiently about what&apos;s most interesting in this post&apos;s contents."
                        />
                    <BlogPostCards />
                </div>
                <div id="blogMainContentContainer" className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <BlogSamplePost />
                        </div>
                        <aside className="col-md-4">
                            <BlogSidebar
                                date={["March 2018", "February 2018", "January 2018", "December 2017", "November 2017", "October 2017", "September 2017", "August 2017", "July 2017", "June 2017", "May 2017", "April 2017"]}
                                social={["GitHub", "Twitter", "Facebook"]}
                            />
                        </aside>
                    </div>
                </div>
                <BlogFooter />
            </React.Fragment>
        );
    }
}
