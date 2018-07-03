import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {Consumer} from "../stores/AppContext.jsx";

function BlogSamplePost(index){
    

    
    return (
        
        <div className="col-md-12 blog-main">
            <h3 className="pb-3 mb-4 font-italic border-bottom"> From the Firehouse</h3>
            
            <Consumer>
                {({ state }) => 
                    (
                        state.posts.map((item,index)=>{
                            return <BlogPost 
                                    key={index}
                                    title={item.name}
                                    date={item.date}
                                    author={item.author}
                                    post={item.content}
                                    />;
                            
                        })
                        
                    )
                }
            </Consumer>
        
            <nav className="blog-pagination">
                <a className="btn btn-outline-primary" href="#">Older</a>
                <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
            </nav>

        </div>
        
        
        );
        
}

    BlogPost.propTypes = {
        title:PropTypes.string,
        date:PropTypes.string,
        author:PropTypes.string,
        post:PropTypes.string
        };



export default BlogSamplePost;


 function BlogPost(props){
            return (
                <div className="blogPost">
                    <h2 className="blogTitle">{props.title}</h2>
                    <p className="blogDate">{props.date} by <a href="#">{props.author}</a></p>
                    <p>{props.post}</p>
                </div>
                
                
                
                
                
                );
        }
        