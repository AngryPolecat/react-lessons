//import { getUsers } from './get-users';
import { URL } from '../config';

export const getUser = async (loginToFind) =>
  fetch(`${URL}/users?login=${loginToFind}`)
    .then((response) => response.json())
    .then(([user]) => user);
//const users = await getUsers();
//return users.find((user) => user.login === loginToFind);
