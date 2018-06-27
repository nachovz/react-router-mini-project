import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {Home} from "./views/Home.jsx";
import {Checkout} from "./views/Checkout.jsx";
import {Product} from "./views/Product.jsx";
import {Blog} from "./views/Blog.jsx";

export default class Layout extends React.Component {

  render() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/product" component={Product} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/checkout" component={Checkout} />
                    <Route render={() => <h1>Not found!</h1>} />
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
  }
}
