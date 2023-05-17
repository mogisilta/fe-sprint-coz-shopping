import { SHOW_TOAST, HIDE_TOAST } from '../actions';

const initialState = { message: '', visible: false };

export function toastReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_TOAST:
      return { message: action.payload, visible: true };
    case HIDE_TOAST:
      return { ...state, visible: false };//
    default:
      return state;
  }
}