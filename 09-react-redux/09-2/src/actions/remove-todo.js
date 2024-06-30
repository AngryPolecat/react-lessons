import { URL } from '../config';

export const removeTodo = (id) => (dispatch) =>
  fetch(`${URL}/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((result) => {
      dispatch({
        type: 'REMOVE_TODO',
        payload: id,
      });
    });
