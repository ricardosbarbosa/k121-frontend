import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { routerMiddleware } from "connected-react-router";

import createRootReducer, { history } from "./ducks/index";

const client = axios.create({
  //all axios can be used, shown in axios documentation
  baseURL: process.env.REACT_APP_BASE_URL_API,
  responseType: "json"
});

const middlewares = [];
middlewares.push(axiosMiddleware(client));
middlewares.push(thunk);
middlewares.push(routerMiddleware(history));

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  createRootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
