import React from 'react';
import CheckoutHeader from '../component/CheckoutHeader.jsx';
import CheckoutForm from '../component/CheckoutForm.jsx';
import CheckoutCart from '../component/CheckoutCart.jsx';

//create your first component
export class Checkout extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <CheckoutHgti pusheader />


                <p>Made by Mike and Ed<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!</p>
            </React.Fragment>

        );
    }
}
