import React from 'react';
import { Link } from "react-router-dom";
import ex from '../../../img/ex.jpg';
import PropTypes from 'prop-types';

export class Bottom extends React.Component{
    constructor(){
        super();
        this.state={
            bottomContent:[
                {
                    header: 'First featurette heading.',
                    mutedHeader: ' It will blow your mind.',
                    text: 'Donec ullamcorper nulla non metus auctor fringilla.Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
                },
                {
                    order: 'order-md-1',
                    orderLast: 'order-md-2',
                    header: 'First featurette heading.',
                    mutedHeader: ' It will blow your mind.',
                    text: 'Donec ullamcorper nulla non metus auctor fringilla.Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
                },
                {
                    header: 'First featurette heading.',
                    mutedHeader: ' It will blow your mind.',
                    text: 'Donec ullamcorper nulla non metus auctor fringilla.Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
                }
                ]
        };
    }
    
    
    render(){
        return (
            <React.Fragment>
                {
                this.state.bottomContent.map((items, index) => {
                return (
                    <div className="row mt-5" key={index}>
                        <div className={"col-md-7 my-auto "+(items.orderLast || "")}>
                            <h2 className="featurette-heading">{items.header}<span className="text-muted">{items.mutedHeader}</span></h2>
                            <p className="lead">{items.text}</p>
                        </div>
                        <div className={"bottomContent col-md-5 "+(items.order || "")}>
                            <img className="featurette-image img-fluid mx-auto" src={ex} alt="Generic placeholder image"/>
                        </div>
                    </div>
                );})
                }
            </React.Fragment>
        );
    }
}
