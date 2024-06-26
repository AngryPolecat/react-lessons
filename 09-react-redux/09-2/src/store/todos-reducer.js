import { INITIAL_TODOS } from '../const/const';

export const todosReducer = (state = INITIAL_TODOS, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'LOAD_TODOS':
      return {
        ...state,
        todos: [...payload],
      };
    default:
      return { ...state };
  }
};
