import React from 'react';
import 'bootstrap';
import NavBar from '../component/navbar.jsx';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProdCardBody from '../component/ProdCardLoop.jsx';

//Jobel and Jesus product page team 2

//create your first component
export class Product extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <div id="prodCardContentHeader">
                    <ProdCardHeader />
                </div>
                <div id="prodCardContentBody">
                    <ProdCardBody />
                </div>
                <div id="prodCardContentFooter">
                    <ProdCardFooter />
                </div>
            </React.Fragment>
        );
    }
}
