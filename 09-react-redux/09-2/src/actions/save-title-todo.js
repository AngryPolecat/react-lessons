import { URL } from '../config';
import { PROCESS_LOAD_DATA_END, PROCESS_LOAD_DATA_START } from '../const/const';

export const saveTitleTodo = (id, updatedTodo, newTitle) => (dispatch) => {
  dispatch(PROCESS_LOAD_DATA_START);
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
    })
    .finally(() => setTimeout(() => dispatch(PROCESS_LOAD_DATA_END), 300));
};
