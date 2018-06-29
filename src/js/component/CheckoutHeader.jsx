import React from 'react';
import { Link } from "react-router-dom";

//create your first component
function CheckoutCart() {
    return (
        <div className="py-5 text-center">
            <h2>Checkout form</h2>
            <p className="lead">Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>
    );
}

export default CheckoutCart();