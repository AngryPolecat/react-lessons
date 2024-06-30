import { URL } from '../config';
import { PROCESS_LOAD_DATA_END, PROCESS_LOAD_DATA_START } from '../const/const';

export const loadTodosAsync = (dispatch) => {
  dispatch(PROCESS_LOAD_DATA_START);
  return fetch(URL)
    .then((response) => response.json())
    .then((result) => {
      dispatch({
        type: 'GET_TODOS',
        payload: result,
      });
    })
    .finally(() => setTimeout(() => dispatch(PROCESS_LOAD_DATA_END), 1000));
};
