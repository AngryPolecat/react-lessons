import { URL } from '../../config';
import { postTransformer } from '../transformers';

export const getPost = (idPost) =>
  fetch(`${URL}/posts/${idPost}`)
    .then((response) => response.json())
    .then((post) => {
      return post && postTransformer(post);
    });
