import React from 'react';
import { Link } from "react-router-dom";

function BlogFooter(props){
    return (
        <footer className="footer text-center bg-light text-muted border-top p-4">
            <p>Blog template recreated by Emily and Keshaunda for <a href="#">4Geeks Academy</a></p>
            <p className="mb-0"><a href="#">Back to top</a></p>
        </footer>
        );
}

export default BlogFooter;