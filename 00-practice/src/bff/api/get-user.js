//import { getUsers } from './get-users';
import { URL } from '../../config'

export const getUser = async (loginToFind) =>
  fetch(`${URL}/users?login=${loginToFind}`)
    .then((response) => response.json())
    .then(([user]) => {
      return (
        user && {
          id: user.id,
          login: user.login,
          password: user.password,
          registeredAt: user.registed_at,
          roleId: user.role_id,
        }
      )
    })
//const users = await getUsers();
//return users.find((user) => user.login === loginToFind);
