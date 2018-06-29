import React from 'react';

//create your first component
export class Checkout extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <CheckoutHeader />
                <CheckoutForm />
                <CheckoutCart />

                <p>Made by Mike and Ed<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!</p>
            </React.Fragment>
        );
    }
}
