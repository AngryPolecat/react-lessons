import { INITIAL_TODOS } from '../const/const';

export const loaderReducer = (state = INITIAL_TODOS, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'PROCESS_LOAD_DATA':
      return {
        ...state,
        loader: payload,
      };
    default:
      return state;
  }
};
