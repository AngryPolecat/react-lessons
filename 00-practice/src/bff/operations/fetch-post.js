import { getPost, getComments, getUsers } from '../api';

export const fetchPost = async (postId) => {
  let post;
  try {
    post = await getPost(postId);
  } catch (error) {
    return {
      error,
      res: null,
    };
  }

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
    res: {
      ...post,
      comments: commentsJoinAuthor,
    },
  };
};
