import { URL } from '../config';

export const loadTodosAsync = (dispatch) =>
  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
      dispatch({
        type: 'GET_TODOS',
        payload: result,
      });
    });
