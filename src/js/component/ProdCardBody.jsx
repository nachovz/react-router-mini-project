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
        //arrObj: [0,1,2,3],
        p_bootstrap: [0,1],
        oldValue: '',
        newValue: ''
        };
        this.arrObj = [];        
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
         
        //console.log('Class2 '+pcounter);
        return pbgclass2;
    }

    pushValueObj(value) {
        this.arrObj.push(value);
        //this.forceUpdate();
        }
        
    returnValueArrays (index, parray) {
        return <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3" key={index} >
            {parray.map((valuebootstrap, index) => {
    
                            return <div className={"bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"} key={index} >
                                <div className="my-3 py-3">
                                    <h2 className="display-5">{valuebootstrap.name}</h2>
                                    <p className="lead">{valuebootstrap.description}</p>
                                    <p className="lead">Price: {valuebootstrap.price}</p>
                                </div>
                                <div className={"cardLoop1 bg-light box-shadow mx-auto"}>
                                    <img className="img-responsive" src={valuebootstrap.image_url} alt="Chania" width="200" height="200" />
                                </div>
                                <style>{'div .cardLoop1 {width: 80%; height: 300px; border-radius: 21px 21px 0 0;'}</style>
                            
                            </div>;
                            })
                        } 
        </div>;
        
        }
    
    SetProductArticle (index, newValue, counter, pindexOf, plastIndexOf) {
        if ( pindexOf === plastIndexOf-1 ) {
            if ( this.arrObj.length == 0 ) {
                
                this.pushValueObj(newValue);
                return this.returnValueArrays(index, this.arrObj);
                }
            else {this.pushValueObj(newValue);
                return this.returnValueArrays(index, this.arrObj);
                }
            } 
        else { if ( JSON.stringify(this.arrObj)=='[]' ) {
                this.pushValueObj(newValue);
                return null;
                }
                else {  this.pushValueObj(newValue);
                        if ( this.arrObj.length == 2 ) {
                            let parray = this.arrObj;
                            this.arrObj = [];
                            
                            return  this.returnValueArrays(index,parray);
                }       else { return null; }
            }
        }
    }
 
    render() {
        let counter = 0;
        var counter2 = 0;


            return (<div className="containerBody" >
                <Consumer>
                    {
                    ({ state }) => 
                                (state.products.map((value, index) => {
                                return (
                                this.SetProductArticle ( index, 
                                                                                                value, 
                                                                                                counter,
                                                                                                state.products.indexOf(value),
                                                                                                state.products.length)
                                                                                                );
                                                                    })
                                
                
            )}        
                </Consumer>
            </div>);
            }
    }