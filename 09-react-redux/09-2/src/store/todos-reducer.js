import { INITIAL_TODOS } from '../const/const';

export const todosReducer = (state = INITIAL_TODOS, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_TODOS':
      return {
        ...state,
        todos: [...payload],
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, ...payload],
      };
    case 'SAVE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? payload : todo
        ),
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== Number(payload)),
      };
    default:
      return { ...state };
  }
};
