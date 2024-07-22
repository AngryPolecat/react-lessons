import { authorize, fetchPost, fetchRoles, fetchUsers, logout, register, removeUser, updateUserRole } from './operations';

export const server = {
  authorize,
  register,
  logout,
  fetchRoles,
  fetchUsers,
  updateUserRole,
  removeUser,
  fetchPost,
};
