import { ROLE } from '../const'
import { sessions } from '../sessions'
import { updatePost, createPost } from '../api'

export const savePost = async (userSession, dataPost) => {
  const accessRole = [ROLE.ADMIN]

  if (!sessions.access(userSession, accessRole)) {
    return {
      error: 'Доступ запрещен',
      res: null,
    }
  }

  const savedPost = dataPost.id ? await updatePost(dataPost) : await createPost(dataPost)
  console.log('operation: ', savedPost)
  return {
    error: null,
    res: savedPost,
  }
}
