import React from 'react';
import { Link } from "react-router-dom";
import ex from '../../../img/ex.jpg';
import PropTypes from 'prop-types';

export class Carousel extends React.Component{
    
        constructor(){
            super();
            this.state = {
                post:[
                    {   
                        active: "active",
                        id: 1,
                        name: "This is the first post",
                        featured_image_url: "http://picsum.photos/800/600/?image=732",
                        date: "January 1, 2014",
                        author: "Mark",
                        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                        config: "text-left"
                    },
                    {   
                        active: "",
                        id: 2,
                        name: "This is the second post",
                        featured_image_url: "http://picsum.photos/800/600/?image=732",
                        date: "January 1, 2014",
                        author: "Mark",
                        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                        config: "text-center"
                    },
                    {   
                        active: "",
                        id: 3,
                        name: "This is the third post",
                        featured_image_url: "http://picsum.photos/800/600/?image=732",
                        date: "January 1, 2014",
                        author: "Mark",
                        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                        config: "text-right"
                    }
                    ]
            };
        }  
        
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
                            {
                                this.state.post.map((carts, index) => {
                                    return (
                                        <div className={"carousel-item "+carts.active} key={index}>
                                            <img className="d-block w-100" id={carts.id} src={ex} alt={carts.name}/>
                                            <div className="container">
                                                <div className={"carousel-caption d-none d-md-block "+carts.config}>
                                                    <h1>{carts.name}</h1>
                                                    <p>{carts.content}</p>
                                                    <p>{carts.author}</p>
                                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse products</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                    
                                })
                            }
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