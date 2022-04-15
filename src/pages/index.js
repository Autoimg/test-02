import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import Cate from "./CategoryList";
export default class index extends Component {
    componentDidMount() {
        // console.log(this.props)
    }
  render() {
    return (
      <Fragment>
        <div>123</div>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/category" exact={true} component={Category}></Route>
          <Route path="/category/:id" component={Cate}></Route>
        </Switch>
      </Fragment>
    );
  }
}
