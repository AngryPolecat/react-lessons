import { commentTransformer } from '../transformers'
import { URL } from '../../config'

export const getComments = (idPost) =>
  fetch(`${URL}/comments?post_id=${idPost}`)
    .then((response) => response.json())
    .then((loadComments) => loadComments && loadComments.map(commentTransformer))
