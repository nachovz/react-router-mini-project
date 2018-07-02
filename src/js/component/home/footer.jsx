import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="container">
            <p className="float-right"><a href="#">Back to top</a></p>
            <p>
                © 2017-2018 Company, Inc. · 
                <a href="#">Privacy</a>
                · 
                <a href="#">Terms</a>
            </p>
        </div>
    );
}

export default Footer;