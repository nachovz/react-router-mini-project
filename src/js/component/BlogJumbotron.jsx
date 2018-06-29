import React from 'react';
import { Link } from "react-router-dom";

function BlogJumbotron(props){
    return (
        <div>
            <div className="jumbotron text-white rounded bg-dark my-3 p-3 p-md-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="display-4 font-weight-normal font-italic">Title of a longer featured blog post</h1>
                        <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what&apos;s most interesting in this post&apos;s contents.</p>
                        <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default BlogJumbotron;