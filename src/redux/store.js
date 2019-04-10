import { createStore, applyMiddleware, compose } from "redux";

/* middlewares */
import thunk from "redux-thunk";
import logger from "redux-logger";
import request from "@redux/middlewares/request";

import rootReducer from "./reducers";

const middleware = applyMiddleware(thunk, logger, request);

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, reduxDevTools(middleware));

window.getState = store.getState;

export default store;
