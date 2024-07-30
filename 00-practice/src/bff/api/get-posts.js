import { postTransformer } from '../transformers';
import { URL } from '../../config';

export const getPosts = () =>
  fetch(`${URL}/posts`)
    .then((response) => response.json())
    .then((loadPosts) => loadPosts && loadPosts.map(postTransformer));
