import { URL } from '../../config'

export const getUsers = () => fetch(`${URL}/users`).then((response) => response.json())
