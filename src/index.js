import React from "react";
import { render } from "react-dom";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Index from "./pages/index";

window.store = store;
render(
 /*  <Provider store={store}>
    <App></App>
  </Provider>, */
  <Router>
      <Route path="/" component={Index} />
  </Router>,
  document.getElementById("root")
);
