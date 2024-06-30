import { URL } from '../config';

export const sortTodos = (nameField) => (dispatch) =>
  fetch(`${URL}/?_sort=${nameField}&_order=asc`)
    .then((response) => response.json())
    .then((result) => {
      dispatch({
        type: 'GET_TODOS',
        payload: result,
      });
    });
