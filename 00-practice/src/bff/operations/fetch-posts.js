import { getPosts, getComments } from '../api'
import { getCountComments } from '../utils'

export const fetchPosts = async (page, limit) => {
  const [posts, comments] = await Promise.all([getPosts(page, limit), getComments()])

  return {
    error: null,
    res: posts.map((post) => {
      return {
        ...post,
        commentsCount: getCountComments(comments, post.id),
      }
    }),
  }
}
