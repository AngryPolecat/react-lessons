import { getPost, addComment, getComments } from '../api'
import { ROLE } from '../const'
import { sessions } from '../sessions'

export const addPostComment = async (userSession, userId, postId, content) => {
  const accessRole = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER]

  if (!sessions.access(userSession, accessRole)) {
    return {
      error: 'Доступ запрещен',
      res: null,
    }
  }

  await addComment(userId, postId, content)

  const post = await getPost(postId)

  const comments = await getComments(postId)

  return {
    error: null,
    res: { ...post, comments },
  }
}
