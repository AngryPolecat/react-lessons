import { ACTION_TYPE } from './action-type'
import { server } from '../bff'

export const logout = (session) => {
  // отправка на сервер разлога
  server.logout(session)

  return {
    type: ACTION_TYPE.LOGOUT,
  }
}
