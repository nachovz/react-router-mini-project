import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";

function ProdCardBody(props){
    return ( 
        <div className="containerBody">
            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="cardLoop1 bg-light box-shadow mx-auto" >
                        <style>{'div .cardLoop1 {width: 80%; height: 300px; border-radius: 21px 21px 0 0;'}</style>
                    </div>
                </div>
                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="cardLoop2 bg-dark box-shadow mx-auto">
                        <style>{'div .cardLoop2 {width: 80%; height: 300px; border-radius: 21px 21px 0 0;'}</style>
                    </div>
                </div>
            </div>
    
    
            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="cardLoop3 bg-dark box-shadow mx-auto">
                    </div>
                    <style>{'div .cardLoop3 {width: 80%; height: 300px; border-radius: 21px 21px 0 0;'}</style>
                </div>
                <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="cardLoop4 bg-light box-shadow mx-auto"></div>
                    <style>{'div .cardLoop4 {width: 80%; height: 300px; border-radius: 21px 21px 0 0;'}</style>
                    
                </div>
            </div>            
                
                
                
            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="cardLoop5 bg-white box-shadow mx-auto"></div>
                    <style>{'div .cardLoop5 {width: 80%; height: 300px; border-radius: 21px 21px 0 0;'}</style>
                </div>
                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="cardLoop6 bg-white box-shadow mx-auto"></div>
                    <style>{'div .cardLoop6 {width: 80%; height: 300px; border-radius: 21px 21px 0 0;'}</style>
                </div>
            </div>
        
        
        
            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="cardLoop7 bg-white box-shadow mx-auto" ></div>
                    <style>{'div .cardLoop7 {width: 80%; height: 300px; border-radius: 21px 21px 0 0;'}</style>
                </div>
                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="cardLoop8 bg-white box-shadow mx-auto"></div>
                    <style>{'div .cardLoop8 {width: 80%; height: 300px; border-radius: 21px 21px 0 0;'}</style>
                </div>
            </div>
    
        </div>
            

        );
}

export default ProdCardBody;