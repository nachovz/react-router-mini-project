import React from 'react';
import { Link } from "react-router-dom";
import {Consumer} from "../stores/AppContext.jsx";

export default class CheckoutCart extends React.Component{
    constructor() {
        super();
        this.state = {
            discount: 25    
        };
    }
    
    render(){
        var totalItems = 0;
        var totalPrice = 0;

        return (
            <div className="col-md-4 order-md-2 mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Your cart</span>
                    <span className="badge badge-secondary badge-pill">{totalItems}</span>
                </h4>
                <ul className="list-group mb-3">
                    
                    <Consumer>
                        {({ state }) => 
                            (
                                state.products.map( (item, index) => {

                                    totalItems = totalItems + 1 ;
                                    totalPrice = item.price + totalPrice;
                                
                                    return (
                                        <li key={item.id} className="list-group-item d-flex justify-content-between lh-condensed">
                                            <div>
                                                <h6 className="my-0">{item.name}</h6>
                                                <small className="text-muted">{item.description}</small>
                                            </div>
                                            <span className="text-muted">${item.price.toFixed(2)}</span>
                                        </li>
                                    );
                                })
                            )
                        }
                    </Consumer>
                    
                    <li className="list-group-item d-flex justify-content-between bg-light">
                        <div className="text-success">
                            <h6 className="my-0">Promo code</h6>
                            <small>{this.state.discount}% Discount</small>
                        </div>
                        <span className="text-success">-${(this.state.discount/100 * totalPrice).toFixed(2)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total (USD)</span>
                        <strong>${(totalPrice - this.state.discount/100 * totalPrice).toFixed(2)}</strong>
                    </li>
                </ul>
                <form className="card p-2">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Promo code"></input>
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-secondary">Redeem</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}