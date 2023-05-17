import { showToast, hideToast } from '../actions/index';

export const toastMiddleware = storeAPI => next => action => {
  if (action.type === showToast().type) {
    setTimeout(() => {
      storeAPI.dispatch(hideToast());
    }, 2000);
  }
  
  return next(action);
};