import React from 'react';
import { Link } from "react-router-dom";
//Yariel, Frank & Raul
//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';
import NavBar from '../component/navbar.jsx';
import Carousel from '../component/carousel.jsx';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
<<<<<<< HEAD
                <div className="text-center mt-5">
                    <h1>Hello Rigo!</h1>
                    <p><img src={rigoImage} /></p>
                    <a href="#" className="btn btn-success">Bootstrap is working</a>
                    <p>Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!</p>
                    
                    <Link to={"/"}><span className="badge badge-pill badge-primary">Home</span></Link>
                    <Link to={"/product"}><span className="badge badge-pill badge-primary">Product</span></Link>
                    <Link to={"/blog"}><span className="badge badge-pill badge-primary">Blog</span></Link>
                    <Link to={"/checkout"}><span className="badge badge-pill badge-primary">Checkout</span></Link>
                    
                    
                    <h2>Hello</h2>
                    <h2>Hello</h2>
                    <h2>Hello</h2>
                    <h2>Hello</h2>
                    <h2>Hello</h2>
                    <h2>Hello</h2>
                    
                </div>
=======
                <Carousel />
>>>>>>> 01ef75ac612435f01b2a37f3e900c0b5b60295a9
            </React.Fragment>
        );
    }
}
