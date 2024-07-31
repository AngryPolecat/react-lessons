import { getPost, addComment, getComments, getUsers } from '../api';
import { ROLE, ERROR } from '../const';
import { sessions } from '../sessions';

export const addPostComment = async (userSession, userId, postId, content) => {
  const accessRole = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

  if (!sessions.access(userSession, accessRole)) {
    return {
      error: ERROR.ACCESS_DENIED,
      res: null,
    };
  }

  await addComment(userId, postId, content);

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
