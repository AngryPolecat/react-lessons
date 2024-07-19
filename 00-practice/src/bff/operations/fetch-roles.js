import { getRoles, getUser } from '../api'

export const fetchRoles = async (userSession) => {
  const roles = await getRoles()

  return {
    error: null,
    res: roles,
  }
}
