import { ROLE } from '../const'
import { sessions } from '../sessions'
import { updatePost } from '../api'

export const savePost = async (userSession, dataPost) => {
  const accessRole = [ROLE.ADMIN]

  if (!sessions.access(userSession, accessRole)) {
    return {
      error: 'Доступ запрещен',
      res: null,
    }
  }

  const updatedPost = await updatePost(dataPost)

  return {
    error: null,
    res: updatedPost,
  }
}
