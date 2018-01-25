import {combineReducers} from "redux";
import {booksReducer} from "./books";
import {uiReducer} from "./ui";
import {orderReducer} from "./order";

export const reducers = combineReducers({
  ui  : uiReducer,
  books: booksReducer,
  order: orderReducer
});
