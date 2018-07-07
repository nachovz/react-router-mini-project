import React from 'react';
import { Link } from "react-router-dom";
import {Consumer} from "../../stores/AppContext.jsx";

export class Products extends React.Component{
    
    render(){
        return (
            <Consumer>
                {({ state }) => (
                state.products.map((items, index) => {
                return (
                    <div className="col-lg-4 text-center" key={index}>
                        <img className="rounded-circle" src={items.image_url} alt="Generic placeholder image" width="140" height="140"/>
                        <h2>{items.name}</h2>
                        <p>{items.content}</p>
                        <p>{items.description}</p>
                        <p><a className="btn btn-secondary" href="#" role="button">&#36;{items.price} »</a></p>
                    </div>
                    );
            })
            )}
            </Consumer>
    );}
}
