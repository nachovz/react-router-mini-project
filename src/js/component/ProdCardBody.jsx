import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";

export default class ProdCardBody extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        arrObj: [0,1,2,3,4],
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

    GetStyleDiv (pcounter) {
                //while (counter <= 4 ) {
        //let counter = 0;
        let bgclass1, bgclass2, bgclass3, bgclass4 = '';
        //switch (counter) {
        //    case (counter === 1):
                this.setState({ p_bgclass1: "bg-dark",
                                p_bgclass2: "bg-light",
                                p_bgclass3: "bg-light",
                                p_bgclass4: "bg-dark" });
         //   break;
         //   case (this.counter === 2):
         //       bgclass1 = "bg-light";
        //         bgclass2 = "bg-dark";
          //       bgclass3 = "bg-primary";
          //       bgclass4 = "bg-light";
         //   break;
          //  case (counter === 3):
          //       bgclass1 = "bg-light";
          //       bgclass2 = "bg-white";
    //             bgclass3 = "bg-light";
      //           bgclass4 = "bg-white";
          //  break;
        //    case (counter === 4):
        //         bgclass1 = "bg-light";
         //        bgclass2 = "bg-white";
        //         bgclass3 = "bg-light";
         //        bgclass4 = "bg-white";              
        //    counter = 1;
        //    break;
        //}

        return null;
        }
    
    render() {
        let counter = 1;
            //this.GetStyleDiv(counter);
            return (<div className="containerBody" >
                {this.state.arrObj.map((value, index) => {
                    return <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3" key={index}>
                        {this.state.p_bootstrap.map((value, index) => {
                        return <div className={this.state.p_bgclass1+" mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"} key={index}>
                            <div className="my-3 py-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className={"cardLoop1 "+this.state.p_bgclass2+" box-shadow mx-auto"}></div>
                            <style>{'div .cardLoop1 {width: 80%; height: 300px; border-radius: 21px 21px 0 0;'}</style>
                        
                        </div>;})
            } 

                    </div>;
                })
            }           
            </div>);}
    }
//}