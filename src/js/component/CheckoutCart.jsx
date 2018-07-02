import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default class Todolist extends React.Component{
    constructor() {
        super();
        this.state = {
            cart: [
                {
                    id: 1, name: "Freeze Ray", 
                    price: 350.99, 
                    desc: "The freeze ray is Felonius Gru's signature weapon. As its name implies, the freeze ray, when fired, projects a ray that instanteously freezes whatever the beam hits on contact."
                },
                {id: 2, name: "SR-9", price: 150.99, desc: "The SR-6, more often referred to as just the shrink ray, is, as the informal name implies, a prototype shrink-ray device designed by a top-secret East Asian laboratory. The weapon can shrink any object to the size of an apple."},
                {id: 3, name: "Zapp Lipstick Taser", price: 1050.99, desc: "An effective combination between concealability and power, it has the ability to incapacitate opponents struck by its prongs."},
                {id: 4, name: "Flamethrower", price: 55.10, desc: "The Flamethrower is a mechanical incendiary device designed to project a long, controllable stream of fire."},
                {id: 5, name: "Inflation Gun", price: 99.99, desc: "The Inflation Gun is a gadget used by Gru to inflate balloons for Agnes' birthday party."}
            ],
            discount: 1,
            total: 999
        };
    }
    
    render(){
        var totalItems = 0;
        var totalPrice = 0;
        
        var itemsToRender = this.state.cart.map((item) => {
        totalItems = totalItems + 1 ;
        totalPrice = item.price + totalPrice;
        
        return (
            <li key={item.id} className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 className="my-0">{item.name}</h6>
                    <small className="text-muted">{item.desc}</small>
                </div>
                <span className="text-muted">${item.price.toFixed(2)}</span>
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