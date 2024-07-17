import { getUser } from './get-user';
import { addUser } from './add-user';
//import { createSession } from './create-session'
import { sessions } from './sessions';

export const server = {
  async authorize(authLogin = null, authPassword = null) {
    const user = await getUser(authLogin);

    if (!user) {
      return {
        error: 'Логин не верный',
        res: null,
      };
    }

    if (user.login !== authPassword) {
      return {
        error: 'Пароль не верный',
        res: null,
      };
    }

    const { id, login, role_id } = user;

    return {
      error: null,
      res: {
        id,
        login,
        roleId: role_id,
        session: sessions.create(user),
      },
    };
  },
  async register(regLogin, regPassword) {
    const user = await getUser(regLogin);

    if (user) {
      return {
        error: 'Такой пользователь уже существует',
        res: null,
      };
    }

    const newUser = await addUser(regLogin, regPassword);
    const { id, login, role_id } = newUser;

    return {
      error: null,
      res: {
        id,
        login,
        roleId: role_id,
        session: sessions.create(newUser),
      },
    };
  },
  async logout(session) {
    sessions.remove(session);
  },
};
