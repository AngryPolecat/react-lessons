import { INITIAL_LOADER } from '../const/const';

export const loaderReducer = (state = INITIAL_LOADER, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'TOGGLE_LOAD':
      return {
        ...state,
        loader: payload,
      };
    default:
      return state;
  }
};
