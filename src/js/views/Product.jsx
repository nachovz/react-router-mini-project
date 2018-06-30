import React from 'react';
import 'bootstrap';
import NavBar from '../component/navbar.jsx';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProdCardLoop from '../component/ProdCardLoop.jsx';

//Jobel and Jesus product page team 2

//create your first component
export class Product extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <div className="container">
                    <style>{'div .container {max-width: 960px;'}</style>
                    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                        <div className="col-md-5 p-lg-5 mx-auto my-5">
                            <h1 className="display-4 font-weight-normal">Punny headline</h1>
                            <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apples marketing pages.</p>
                            <a className="btn btn-outline-secondary" href="#">Coming soon</a>
                        </div>
                        <div className="product-device box-shadow d-none d-md-block"></div>
                        <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
                    </div>
                </div>
                <div id="prodCardContentContainer">
                    <ProdCardLoop />
                </div>
                <div id="prodCardContentContainer">
                    <ProdCardFooter />
                </div>
            </React.Fragment>
        );
    }
}
