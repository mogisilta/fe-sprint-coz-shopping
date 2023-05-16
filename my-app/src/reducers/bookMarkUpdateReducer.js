import { initialState } from "./initialState";
import { UPDATE, FETCH_DATA, SET_INITIAL } from "../actions/index";

export const bookMarkUpdateReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE:
            return state.map((item)=>{
                if(item.id===action.payload){
                    item.bookMark = !item.bookMark;
                    return item;
                }else{
                    return item;
                }
            })
        case FETCH_DATA:
            return action.payload;
        case SET_INITIAL:
            return action.payload;
        default:
            return state;
    }
}