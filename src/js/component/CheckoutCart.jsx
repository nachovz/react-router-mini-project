import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default class Todolist extends React.Component{
    constructor() {
        super();
        this.state = {
            cart: [
                {id: 1, name: 'Product', price: 11, desc: 'Brief description'},
                {id: 2, name: 'Product', price: 22, desc: 'Brief description'},
                {id: 3, name: 'Product', price: 33, desc: 'Brief description'},
                {id: 4, name: 'Product', price: 44, desc: 'Brief description'},
                {id: 5, name: 'Product', price: 55, desc: 'Brief description'}
            ]
        };
    }
    
    render(){
        var totalItems = 0;
        var itemsToRender = this.state.cart.map((item) => {
        totalItems = totalItems + 1 ;
        return (
            <li key={item.id} className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 className="my-0">{item.name}</h6>
                    <small className="text-muted">{item.desc}</small>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>);
        });
    

        return (
            <div className="col-md-4 order-md-2 mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Your cart</span>
                    <span className="badge badge-secondary badge-pill">{totalItems}</span>
                </h4>
                <ul className="list-group mb-3">
                    {itemsToRender}
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