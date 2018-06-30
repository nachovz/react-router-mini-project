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
                <Carousel />
                
            </React.Fragment>
        );
    }
}
