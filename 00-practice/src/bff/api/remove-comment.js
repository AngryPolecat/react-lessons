import { URL } from '../../config';

export const removeComment = (commentId) => {
  fetch(`${URL}/comments/${commentId}`, {
    method: 'DELETE',
  });
};
