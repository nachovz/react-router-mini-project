import React from 'react';
import { Link } from "react-router-dom";

function NavBar(props){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">React Router Mini-Project</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to={"/"} className="nav-item nav-link active" >Home <span className="sr-only">(current)</span></Link>
                    <Link to={"/product"} className="nav-item nav-link" >Product</Link>
                    <Link to={"/blog"} className="nav-item nav-link" >Blog</Link>
                    <Link to={"/checkout"} className="nav-item nav-link" >Checkout</Link>
                </div>
            </div>
        </nav>);
}

export default NavBar;