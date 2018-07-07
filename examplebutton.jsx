import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {Consumer} from "../stores/AppContext.jsx";

function BlogPostCards(props){
    
    return (
        
        <div className="row mb-2">
            <Consumer>
                {({ state , actions }) => 
                    (
                        state.products.map((item,index)=>{
                            return <ProductInfo 
                                    key={index}
                                    name={item.name}
                                    image={item.image_url}
                                    description={item.description}
                                    idOfProduct={item.id}
                                    />;
                            
                        })
                        
                    )
                }
            </Consumer>
        </div>

        );
}

    ProductInfo.propTypes = {
        name:PropTypes.string,
        image:PropTypes.string,
        description:PropTypes.string,
        idOfProduct: PropTypes.number
        };

export default BlogPostCards;

function ProductInfo(props){
            return (
                <div className="col-md-4">
                    <div className="card flex">
                        <div className="card-body">
                            <Consumer>
                                {
                                    ({actions}) => {
                                        return <button className="btn btn-primary" onClick={() => actions.addProductToCart(props.idOfProduct)}>Buy</button>;
                                    }
                                }
                            </Consumer>
                            
                            <h3 className="mb-0">
                                <a className="text-dark" href="#">{props.name}</a>
                            </h3>
                            <p className="card-text mb-auto pt-4">{props.description}</p>
                        </div>    
                        <img className="card-img-top img-fluid h-md-250 w-md-200" src={props.image}></img>
                    </div>
                </div>
                
                );
        }
        
    