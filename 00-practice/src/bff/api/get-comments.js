import { commentTransformer } from '../transformers';
import { URL } from '../../config';

export const getComments = (postId) =>
  fetch(`${URL}/comments?post_id=${postId}`)
    .then((response) => response.json())
    .then((loadComments) => loadComments && loadComments.map(commentTransformer));
