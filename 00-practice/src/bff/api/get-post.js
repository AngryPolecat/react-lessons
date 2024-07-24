import { URL } from '../../config';
import { postTransformer } from '../transformers';

export const getPost = (postId) =>
  fetch(`${URL}/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => {
      return post && postTransformer(post);
    });
