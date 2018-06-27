import React from 'react';
import { Link } from "react-router-dom";

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';
import NavBar from '../component/navbar.jsx';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <div className="text-center mt-5">
                    <h1>Hello Rigo!</h1>
                    <p><img src={rigoImage} /></p>
                    <a href="#" className="btn btn-success">Bootstrap is working</a>
                    <p>Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!</p>
                    
                    <Link to={"/"}><span className="badge badge-pill badge-primary">Home</span></Link>
                    <Link to={"/product"}><span className="badge badge-pill badge-primary">Product</span></Link>
                    <Link to={"/blog"}><span className="badge badge-pill badge-primary">Blog</span></Link>
                    <Link to={"/checkout"}><span className="badge badge-pill badge-primary">Checkout</span></Link>
                    
                </div>
            </React.Fragment>
        );
    }
}
