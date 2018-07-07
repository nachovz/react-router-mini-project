import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Product } from '../views/Product.jsx';
import {Consumer} from "../stores/AppContext.jsx";

    
export default class ProdCardBody extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        arrObj: [0,1,2,3],
        //arrObj: [0,1,2,3],
        p_bootstrap: [0,1]
        };
    }

    GetStyleClass1 (pcounter) {
        let pbgclass1 = '';
        if (pcounter == 1) {
            pbgclass1 = 'bg-dark';
        }
        if (pcounter == 2) {
            pbgclass1 = 'bg-light';
        }
        if (pcounter == 3) {
            pbgclass1 = 'bg-light';
        }
        if (pcounter == 4) {
            pbgclass1 = 'bg-primary';
        }            
        if (pcounter >= 5) {
            pbgclass1 = 'bg-light';
        }
        console.log('Class1 '+pcounter);
        return pbgclass1;
    }
    
    GetStyleClass2 (pcounter) {
        let pbgclass2 = '';
        if (pcounter == 1) {
            pbgclass2 = 'bg-light';
        }
        if (pcounter == 2) {
            pbgclass2 = 'bg-dark';
        }            
        if (pcounter == 3) {
            pbgclass2 = 'bg-dark';
        }            
        if (pcounter == 4) {
            pbgclass2 = 'bg-light';
        } 
        if (pcounter >= 5) {
            pbgclass2 = 'bg-white';
        }    
         
        console.log('Class2 '+pcounter);
        return pbgclass2;
    }


 
    render() {
        let counter = 0;
        var counter2 = 0;


            return (<div className="containerBody" >
                <Consumer>
                    {
                    ({ state }) => 
                                (state.products.map((value, index) => {
                    
    
                        return <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3" key={index} >
                            {this.state.p_bootstrap.map((valuebootstrap, index) => {
    
                            return <div className={this.GetStyleClass1(++counter)+" mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"} key={index} >
                                <div className="my-3 py-3">
                                    <h2 className="display-5">Another headline</h2>
                                    <p className="lead">And an even wittier subheading.</p>
                                </div>
                                <div className={"cardLoop1 "+this.GetStyleClass2(++counter2)+" box-shadow mx-auto"}>
                                    <img className="img-responsive" src={value.image_url} alt="Chania" width="200" height="200" />
                                </div>
                                <style>{'div .cardLoop1 {width: 80%; height: 300px; border-radius: 21px 21px 0 0;'}</style>
                            
                            </div>;})
                        } 
                        </div>;
                    })
                
            )}        
                </Consumer>
            </div>);
            }
    }
    
     ProdCardBody.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image_url: PropTypes.string,
    description: PropTypes.string,
    article: PropTypes.array
    };