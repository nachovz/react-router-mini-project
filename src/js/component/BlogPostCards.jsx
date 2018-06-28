import React from 'react';
import { Link } from "react-router-dom";

function BlogPostCards(){
    return (
        
        <div className="row mb-2">
            <div className="col-md-6">
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-2 text-primary">World</strong>
                        <h3 className="mb-0">
                            <a className="text-dark" href="#">Featured post</a>
                        </h3>
                        <div className="mb-1 text-muted">Nov 12</div>
                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#">Continue reading</a>
                    </div>
                    <img className="card-img-right flex-auto d-none d-md-block width:200px height:250px" src="https://via.placeholder.com/200x250"></img>
                </div>
            </div>
            <div className="col-md-6">
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
            </div>
        </div>
        
        
        );
}

export default BlogPostCards;
        