import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { bookMarkUpdateReducer } from "../reducers/bookMarkUpdateReducer";

export const store = createStore(bookMarkUpdateReducer,applyMiddleware(thunk));