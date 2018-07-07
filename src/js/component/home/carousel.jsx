import React from 'react';
import { Link } from "react-router-dom";
import {Consumer} from "../../stores/AppContext.jsx";

export class Carousel extends React.Component{
    
        render(){
            return (
                <div>
                    <div id="carouselExampleIndicators" className="carousel slide mb-5" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <Consumer>
                                {({ state }) => 
                                    (
                                    state.posts.map((carts, index) => {
                                    return (
                                        <div className={"carousel-item "+(index===0 && "active")} key={index}>
                                            <img className="d-block w-100" id={carts.id} src={carts.featured_image_url} alt={carts.name}/>
                                            <div className="container">
                                                <div className={"carousel-caption d-none d-md-block "+((index==0 && "text-left") || (index===2 && "text-right"))}>
                                                    <h1>{carts.name}</h1>
                                                    <p>{carts.content}</p>
                                                    <p>{carts.author}</p>
                                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse products</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        );})
                                    )
                                }
                            </Consumer>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            );
    }
}