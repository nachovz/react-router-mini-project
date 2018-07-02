import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default class ProdCardBody extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        arrObj: [0,1,2,3],
        p_bootstrap: [0,1],
        p_bgclass1: "bg-dark",
        p_bgclass2: "bg-light",
        p_bgclass3: "bg-light",
        p_bgclass4: "bg-dark"  
        };
    }
    
    //const others = [];
    //props.other.forEach(function(element,index){
    //    others.push(<li key={index}>{element}</li>); 
    //});   
    
        GetStyleClass1 (pcounter) {
            let pbgclass1 = 'bg-dark';
            console.log('Class1 '+pcounter);
            return pbgclass1;
        }
        GetStyleClass2 (pcounter) {
            let pbgclass2 = 'bg-light';
            console.log('Class2 '+pcounter);
            return pbgclass2;
        }
        
    render() {
        let counter = 0;
        var counter2 = 0;


            return (<div className="containerBody" >
                {this.state.arrObj.map((value, index) => {
                

                    return <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3" key={index} >
                        {this.state.p_bootstrap.map((value, index) => {

                        return <div className={this.GetStyleClass1(++counter)+" mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"} key={index} >
                            <div className="my-3 py-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className={"cardLoop1 "+this.GetStyleClass2(++counter)+" box-shadow mx-auto"}></div>
                            <style>{'div .cardLoop1 {width: 80%; height: 300px; border-radius: 21px 21px 0 0;'}</style>
                        
                        </div>;})
            } 

                    </div>;
                })
            }           
            </div>);}
    }
//}