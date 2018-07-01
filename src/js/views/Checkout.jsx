import React from 'react';
import { Link } from "react-router-dom";

import NavBar from '../component/navbar.jsx';
import CheckoutHeader from '../component/CheckoutHeader.jsx';
import CheckoutForm from '../component/CheckoutForm.jsx';
import CheckoutCart from '../component/CheckoutCart.jsx';
import CheckoutFooter from '../component/CheckoutFooter.jsx';

//create your first component
export class Checkout extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <div className="container">  
                    <CheckoutHeader />
                    <div className="row">
                        <CheckoutCart />
                        <CheckoutForm />
                    </div>
                    <CheckoutFooter />
                </div>
            </React.Fragment>
        );
    }
}
