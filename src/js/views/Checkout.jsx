import React from 'react';
import { Link } from "react-router-dom";

import NavBar from '../component/navbar.jsx';
import CheckoutHeader from '../component/CheckoutHeader.jsx';
import CheckoutForm from '../component/CheckoutForm.jsx';
import CheckoutCart from '../component/CheckoutCart.jsx';
import CheckoutFooter from '../component/CheckoutFooter.jsx';
import CheckoutBody from '../component/CheckoutBody.jsx';

//create your first component
export class Checkout extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
<<<<<<< HEAD

                <p>Made by Mike and Ed <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!</p>
=======
                <div className="container">  
                    <CheckoutHeader />
                    <div className="row">
                        <CheckoutCart />
                        <CheckoutForm />
                    </div>
                    <CheckoutFooter />
                </div>
>>>>>>> de875dfde13e144ed211f41021446ae943366746
            </React.Fragment>
        );
    }
}