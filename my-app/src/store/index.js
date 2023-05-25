import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { rootReducer } from "../reducers/index";
import { toastMiddleware } from "../middleware/toastMiddleware";
export const store = createStore(rootReducer,applyMiddleware(thunk, toastMiddleware));