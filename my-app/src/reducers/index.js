import {combineReducers} from 'redux';
import { bookMarkUpdateReducer } from "./bookMarkUpdateReducer";
import { toastReducer } from "./toastReducer";

export const rootReducer = combineReducers({
    bookMarkUpdateReducer,
    toastReducer
})