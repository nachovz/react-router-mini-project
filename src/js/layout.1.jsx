import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {Home} from "./views/Home.jsx";
import {Checkout} from "./views/Checkout.jsx";
import {Product} from "./views/Product.jsx";
import {Blog} from "./views/Blog.jsx";

import {Provider} from "./stores/AppContext.jsx";

export default class Layout extends React.Component {
    
    constructor(){
        super();
        
        this.state = {
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
                    name: "A cool pen",
                    price: 40,
                    image_url: "http://picsum.photos/600/600/?image=4",
                    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
                },
                {
                    id: 3,
                    name: "A Goat",
                    price: 1000,
                    image_url: "http://picsum.photos/600/600/?image=937",
                    description: "Aliquam eu rutrum felis, vel interdum nunc. Cras gravida volutpat ultricies. Phasellus porta mi eget dictum auctor. Etiam libero ante, fermentum vel enim nec, lacinia bibendum mauris. Cras eu risus et odio convallis vestibulum. Cras nibh lorem, tempor et ex id, imperdiet commodo tellus. Aenean eu pellentesque ex. Donec eget dapibus enim. Phasellus sollicitudin posuere elit. Quisque blandit augue tellus, ut maximus dolor hendrerit a"
                }
            ],
            posts: [
                {
                    id: 1,
                    name: "This is the first post",
                    featured_image_url: "http://picsum.photos/800/600/?image=732",
                    date: "January 1, 2014",
                    author: "Mark",
                    content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                },
                {
                    id: 2,
                    name: "2nd blog post",
                    featured_image_url: "http://picsum.photos/800/600/?image=631",
                    date: "December 23, 2013",
                    author: "Jacob",
                    content: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
                },
                {
                    id: 3,
                    name: "Hey this is the 3rd one",
                    featured_image_url: "http://picsum.photos/800/600/?image=1068",
                    date: "December 23, 2013",
                    author: "Jacob",
                    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32."
                }
            ],
            archive: [
                {
                    date: "March 2014",
                    url: "http://picsum.photos/?random"
                },
                {
                    date: "February 2014",
                    url: "http://picsum.photos/?random"
                },
                {
                    date: "January 2014",
                    url: "http://picsum.photos/?random"
                },
                {
                    date: "December 2013",
                    url: "http://picsum.photos/?random"
                },
                {
                    date: "November 2013",
                    url: "http://picsum.photos/?random"
                },
                {
                    date: "October 2013",
                    url: "http://picsum.photos/?random"
                },
                {
                    date: "September 2013",
                    url: "http://picsum.photos/?random"
                },
                {
                    date: "August 2013",
                    url: "http://picsum.photos/?random"
                },
                {
                    date: "July 2013",
                    url: "http://picsum.photos/?random"
                },
                {
                    date: "June 2013",
                    url: "http://picsum.photos/?random"
                },
                {
                    date: "May 2013",
                    url: "http://picsum.photos/?random"
                },
                {
                    date: "April 2013",
                    url: "http://picsum.photos/?random"  
                }
                ],
            social_networks: [
                    {
                        name: "Twitter",
                        url: "https://twitter.com/4geeksacademy"
                    },
                    {
                        name: "Facebook",
                        url: "https://facebook.com/4geeksacademy"
                    },
                    {
                        name: "Github",
                        url: "https://github.com/4geeksacademy"
                    }
                ],
            cart:[]
        };
        
        this.actions = {
            addProductToCart: (productId) =>{
                let tempCart = this.state.cart;
                tempCart.push(this.state.products[productId]);
                this.setState({cart: tempCart});
            }
        };
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Provider value={{state:this.state, actions:this.actions}}>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/product" component={Product} />
                            <Route exact path="/blog" component={Blog} />
                            <Route exact path="/checkout" component={Checkout} />
                        </Provider>
                        <Route render={() => <h1>Not found!</h1>} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
