import React from "react";
import { render } from "react-dom";
import Layout from "@containers/Layout/Layout";

import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "@redux/store";
import routes from "@helpers/routes";

window.goToRoute = HashRouter.push;

render(
  <HashRouter>
    <Provider store={store}>
      <Layout>{routes}</Layout>
    </Provider>
  </HashRouter>,
  document.getElementById("odio-root")
);
