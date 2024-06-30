import { INITIAL_TODOS } from '../const/const';

export const loaderReducer = (state = INITIAL_TODOS, action) => {
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
