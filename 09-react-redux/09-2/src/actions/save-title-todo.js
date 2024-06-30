import { URL } from '../config';

export const saveTitleTodo = (id, updatedTodo, newTitle) => (dispatch) => {
  return fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      ...updatedTodo,
      title: newTitle,
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
