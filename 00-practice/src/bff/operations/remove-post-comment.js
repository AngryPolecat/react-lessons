import { getPost, getComments, getUsers, removeComment } from '../api';
import { ROLE, ERROR } from '../const';
import { sessions } from '../sessions';

export const removePostComment = async (userSession, commentId, postId) => {
  const accessRole = [ROLE.ADMIN, ROLE.MODERATOR];

  if (!sessions.access(userSession, accessRole)) {
    return {
      error: ERROR.ACCESS_DENIED,
      res: null,
    };
  }

  await removeComment(commentId);

  const post = await getPost(postId);

  const comments = await getComments(postId);

  const users = await getUsers();

  const commentsJoinAuthor = comments.map((comment) => {
    const user = users.find(({ id }) => id === comment.authorId);
    return {
      ...comment,
      author: user?.login,
    };
  });

  return {
    error: null,
    res: { ...post, comments: commentsJoinAuthor },
  };
};
