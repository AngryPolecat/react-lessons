import { URL } from '../config';

export const searchTodo = (textTodo) => (dispatch) =>
  fetch(`${URL}?title_like=${textTodo}`)
    .then((response) => response.json())
    .then((result) => {
      dispatch({
        type: 'GET_TODOS',
        payload: result,
      });
    });
