import {applyMiddleware, createStore, compose} from "redux";
import {reducers} from "./reducers";
import {booksMdl} from "./middleware/books";
import {api} from "./middleware/api";
import {orderMdl} from "./middleware/order";

// dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store     = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...booksMdl, ...orderMdl, api),
  )
);