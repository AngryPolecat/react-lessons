import { URL } from '../config';
import { PROCESS_LOAD_DATA_END, PROCESS_LOAD_DATA_START } from '../const/const';

export const removeTodo = (id) => (dispatch) => {
  dispatch(PROCESS_LOAD_DATA_START);
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((result) => {
      dispatch({
        type: 'REMOVE_TODO',
        payload: id,
      });
    })
    .finally(() => setTimeout(() => dispatch(PROCESS_LOAD_DATA_END), 300));
};
