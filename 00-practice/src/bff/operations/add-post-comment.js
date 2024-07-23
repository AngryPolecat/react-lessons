import { getPost, addComment } from '../api'
//import { ROLE } from '../const'
//import { sessions } from '../sessions'

export const addPostComment = async (userSession, userId, postId, content) => {
  // const accessRole = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER]

  // if (!sessions.access(userSession, accessRole)) {
  //   return {
  //     error: 'Доступ запрещен',
  //     res: null,
  //   }
  // }

  /** где то здесь к апи на добавление комментария */
  await addComment(userId, postId, content)

  const post = await getPost(postId)
  console.log(post)
  return {
    error: null,
    res: post,
  }
}
