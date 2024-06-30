import { URL } from '../config';
import { PROCESS_LOAD_DATA_END, PROCESS_LOAD_DATA_START } from '../const/const';

export const createTodo = (text) => (dispatch) => {
  dispatch(PROCESS_LOAD_DATA_START);
  return fetch(URL, {
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
        payload: result,
      });
    })
    .finally(() => setTimeout(() => dispatch(PROCESS_LOAD_DATA_END), 500));
};
