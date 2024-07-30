import { postTransformer } from '../transformers'
import { URL } from '../../config'

export const getPosts = (page, limit) =>
  fetch(`${URL}/posts?_page=${page}&_limit=${limit}`)
    .then((response) => response.json())
    .then((loadPosts) => loadPosts && loadPosts.map(postTransformer))
