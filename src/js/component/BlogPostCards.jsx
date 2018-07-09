import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {Consumer} from "../stores/AppContext.jsx";

function BlogPostCards(props){
    
    {/*var product = [
        {
            id: 1,
            name: "Blogger Stickers",
            image: "https://via.placeholder.com/200x250",
            description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
            
        },{
            id: 2,
            name: "Blog Notebook",
            image: "https://via.placeholder.com/200x250",
            description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        ];*/}
    
    
    
    return (
        
        <div className="row mb-2">

            
            <Consumer>
                {({ state, actions }) => 
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
            
            
            {/*<div className="col-md-6">
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-2 text-success">Design</strong>
                        <h3 className="mb-0">
                            <a className="text-dark" href="#">Featured post</a>
                        </h3>
                        <div className="mb-1 text-muted">Nov 11</div>
                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#">Continue reading</a>
                    </div>
                    <img className="card-img-right flex-auto d-none d-md-block width:200px height:250px" src="https://via.placeholder.com/200x250"></img>
                </div>
            </div>*/}
        </div>
        
        
        );
}

    ProductInfo.propTypes = {
        name:PropTypes.string,
        image:PropTypes.string,
        description:PropTypes.string,
        idOfProduct:PropTypes.number
        };

export default BlogPostCards;

function ProductInfo(props){
            return (
                <div className="col-md-4">
                    <div className="card flex">
                        <div className="card-body">
                            <Consumer>
                                {
                                    ({actions}) =>{
                                        return <button className="btn btn-primary" onClick={()=>actions.addProductToCart (props.idOfProduct)}>Buy</button>;
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
        
        