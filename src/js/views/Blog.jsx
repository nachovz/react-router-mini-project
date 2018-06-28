import React from 'react';
import { Link } from "react-router-dom";

import NavBar from '../component/navbar.jsx';
import BlogJumbotron from '../component/BlogJumbotron.jsx';
import BlogSidebar from '../component/BlogSidebar.jsx';
import BlogFooter from '../component/BlogFooter.jsx';

//create your first component
export class Blog extends React.Component{
    
    render(){
        return (
            <div>
                <div id="blogTopContentContainer" className="container">
                    <NavBar />
                    <BlogJumbotron />
                    {/*card components will go here*/}
                </div>
                <div id="blogMainContentContainer" className="container">
                    <div className="row">
                        <div className="col-md-8">
                            {/*sample blog post components will go here*/}
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
