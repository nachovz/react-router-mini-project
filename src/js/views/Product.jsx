import React from 'react';
import 'bootstrap';
import NavBar from '../component/navbar.jsx';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProdCardHeader from '../component/ProdCardHeader.jsx';
import ProdCardBody from '../component/ProdCardBody.jsx';
import ProdCardFooter from '../component/ProdCardFooter.jsx';

//Jobel and Jesus product page team 2

//create your first component
export class Product extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <div id="prodCardContentHeader">
                    <ProdCardHeader />
                </div>
                <div id="prodCardContentBody">
                    <ProdCardBody 
                            prod = {[
                            {id: 1,
                            name: "Hourglass Gal Waist Trainer Kim Kardashian Size S to 3XL",
                            price: 54,
                            image_url: "https://cdn.shopify.com/s/files/1/1667/1115/products/angel-curves-purple-sport-waist-trainer-kardashian_1024x1024@2x.jpg?v=1489113892=1",
                            description: "If you're between sizes,it is recommended to choose one size larger as body shapers usually run smaller. It makes you look instantly slimmer, adding confidence and helping you feel better after have a baby or a surgery"
                            },
                            {id: 2,
                            name: "Postpartum Belly Wrap Set 3 in 1",
                            price: 164,
                            image_url: "https://cdn.shopify.com/s/files/1/1667/1115/products/product-image-408030862_1024x1024@2x.jpg?v=1510356533",
                            description: "If you're between sizes,it is recommended to choose one size larger as body shapers usually run smaller. It makes you look instantly slimmer, adding confidence and helping you feel better after have a baby or a surgery"
                            },
                            {id: 3,
                            name: "Capri pants by FullBeauty SPORT",
                            price: 21,
                            image_url: "https://www.womanwithin.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_WomanWithin/default/dw83e41878/images/hi-res/0045_31131_mm.jpg?sw=556&sh=680&sm=fit",
                            description: "If you're between sizes,it is recommended to choose one size larger as body shapers usually run smaller. It makes you look instantly slimmer, adding confidence and helping you feel better after have a baby or a surgery"
                            },
                            {id: 4,
                            name: "Studded Waist Training Cincher",
                            price: 48,
                            image_url: "https://cdn.shopify.com/s/files/1/1667/1115/products/img.moberlo_1024x1024@2x.jpg?v=1511227391",
                            description: "If you're between sizes,it is recommended to choose one size larger as body shapers usually run smaller. It makes you look instantly slimmer, adding confidence and helping you feel better after have a baby or a surgery"
                            },
                            {id: 5,
                            name: "Body Shaper Tummy Control with Butt Lift",
                            price: 29,
                            image_url: "https://cdn.shopify.com/s/files/1/1667/1115/products/product-image-429790004_grande_48dcb526-8479-4e18-a18b-3d4f28ee4042_1024x1024@2x.jpg?v=1511227449",
                            description: "If you're between sizes,it is recommended to choose one size larger as body shapers usually run smaller. It makes you look instantly slimmer, adding confidence and helping you feel better after have a baby or a surgery"
                            },
                            {id: 6,
                            name: "Black Zipper Corset Top",
                            price: 59,
                            image_url: "https://cdn.shopify.com/s/files/1/1667/1115/products/leather-pvc-zip-front-lace-up-back-corset-hourglass-gal-5_1024x1024@2x.jpg?v=1489113908",
                            description: "If you're between sizes,it is recommended to choose one size larger as body shapers usually run smaller. It makes you look instantly slimmer, adding confidence and helping you feel better after have a baby or a surgery"
                            },
                            {id: 7,
                            name: "Corset Bustier Zipperr",
                            price: 30,
                            image_url: "https://cdn.shopify.com/s/files/1/1667/1115/products/product-image-158115310_d3daa925-55f2-4533-9374-8bdfeaed20b9_1024x1024@2x.jpg?v=1489113453",
                            description: "If you're between sizes,it is recommended to choose one size larger as body shapers usually run smaller. It makes you look instantly slimmer, adding confidence and helping you feel better after have a baby or a surgery"
                            },
                            {id: 8,
                            name: "Neoprene Sweat Sport Top",
                            price: 30,
                            image_url: "https://cdn.shopify.com/s/files/1/1667/1115/products/product-image-57883681_1024x1024@2x.jpg?v=1489113252",
                            description: "If you're between sizes,it is recommended to choose one size larger as body shapers usually run smaller. It makes you look instantly slimmer, adding confidence and helping you feel better after have a baby or a surgery"
                            }            
                            ]}   
                    />
                </div>
                <div id="prodCardContentFooter">
                    <ProdCardFooter />
                </div>
            </React.Fragment>
        );
    }
}
     
