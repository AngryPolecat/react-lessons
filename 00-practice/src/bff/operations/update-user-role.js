import { ROLE } from '../const';
import { sessions } from '../sessions';
import { setUserRole } from '../api';

export const updateUserRole = async (userSession, userId, roleId) => {
  const accessRole = [ROLE.ADMIN];

  if (!sessions.access(userSession, accessRole)) {
    return {
      error: 'Доступ запрещен',
      res: null,
    };
  }

  setUserRole(userId, roleId);

  return {
    error: null,
    res: true,
  };
};
