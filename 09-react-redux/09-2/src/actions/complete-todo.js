import { URL } from '../config';

export const completeTodo = (id, updatedTodo) => (dispatch) => {
  return fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      ...updatedTodo,
      completed: !updatedTodo.completed,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      dispatch({
        type: 'SAVE_TODO',
        payload: result,
      });
    });
};
