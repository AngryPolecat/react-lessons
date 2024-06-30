import { INITIAL_OPTIONS } from '../const/const';

export const optionsReducer = (state = INITIAL_OPTIONS, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'TOGGLE_LOAD':
      return {
        isLoading: payload,
      };
    default:
      return state;
  }
};
