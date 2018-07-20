import React from 'react';
import { Link } from "react-router-dom";
//Yariel, Frank & Raul
//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';
import NavBar from '../component/navbar.jsx';
import {Carousel} from '../component/home/carousel.jsx';
import {Products} from '../component/home/products.jsx';
import {Bottom} from '../component/home/bottom.jsx';
import Footer from '../component/home/footer.jsx';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <Carousel />
                <div className="container">
                    <div className="row">
                        <Products />
                        <Bottom />
                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}