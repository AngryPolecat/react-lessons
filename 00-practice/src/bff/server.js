import { authorize, fetchRoles, fetchUsers, logout, register } from './operations';

export const server = {
  authorize,
  register,
  logout,
  fetchRoles,
  fetchUsers,
};
