import React from 'react';
import { Link } from "react-router-dom";
import ex from '../../../img/ex.jpg';
import PropTypes from 'prop-types';

export class Products extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
                {
                    id: 1,
                    name: "A Laptop computer",
                    price: 30,
                    image_url: "http://picsum.photos/600/600/?image=1",
                    description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                },
                {
                    id: 2,
                    name: "A Laptop computer",
                    price: 30,
                    image_url: "http://picsum.photos/600/600/?image=1",
                    description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                },
                {
                    id: 3,
                    name: "A Laptop computer",
                    price: 30,
                    image_url: "http://picsum.photos/600/600/?image=1",
                    description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                }
                ]
        }; 
}
    
    render(){
        return (
            this.state.products.map((items, index) => {
                return (
                    <div className="col-lg-4 text-center" key={index}>
                        <img className="rounded-circle" src={items.url} alt="Generic placeholder image" width="140" height="140"/>
                        <h2>{items.name}</h2>
                        <p>{items.content}</p>
                        <p>{items.description}</p>
                        <p><a className="btn btn-secondary" href="#" role="button">&#36;{items.price} »</a></p>
                    </div>
                    );
            })
            
    );
    }
    
}
