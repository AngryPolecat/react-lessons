import { URL } from '../config';

export const createTodo = (text) => (dispatch) =>
  fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      title: text,
      completed: false,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      dispatch({
        type: 'ADD_TODO',
        payload: [result],
      });
    });
