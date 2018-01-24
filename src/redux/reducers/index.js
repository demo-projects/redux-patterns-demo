import {combineReducers} from "redux";
import {booksReducer} from "./books";
import {uiReducer} from "./ui";

export const reducers = combineReducers({
  ui  : uiReducer,
  books: booksReducer
});
