import { getUsers } from '../api';
import { ROLE } from '../const';
import { sessions } from '../sessions';

export const fetchUsers = async (userSession) => {
  const accessRole = [ROLE.ADMIN];

  if (!sessions.access(userSession, accessRole)) {
    return {
      error: 'Доступ запрещен',
      res: null,
    };
  }

  const users = await getUsers();

  return {
    error: null,
    res: users,
  };
};
