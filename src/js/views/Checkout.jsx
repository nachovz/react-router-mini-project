import React from 'react';
import { Link } from "react-router-dom";

import NavBar from '../component/navbar.jsx';
import CheckoutHeader from '../component/CheckoutHeader.jsx';
import CheckoutForm from '../component/CheckoutForm.jsx';
import CheckoutCart from '../component/CheckoutCart.jsx';

//create your first component
export class Checkout extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <CheckoutHeader />
                <CheckoutForm />
                <CheckoutCart />

                <p>Made by Mike and Ed<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!</p>
            </React.Fragment>
        );
    }
}
