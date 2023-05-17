
export const UPDATE = "UPDATE";
export const SET_INITIAL = 'SET_INITIAL';
export const SHOW_TOAST = 'SHOW_TOAST';
export const HIDE_TOAST = 'HIDE_TOAST';

export const update = (id) => {
    return {
        type: UPDATE,
        payload: id,
    }
}

export const setInitial = (list) => {
  return {
    type: SET_INITIAL,
    payload: list,
  }
}

export const showToast = (message) => ({ type: SHOW_TOAST, payload: message });

export const hideToast = () => ({ type: HIDE_TOAST });