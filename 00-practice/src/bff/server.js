import { getUser } from './get-user';
import { addUser } from './add-user';
import { createSession } from './create-session';

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

    return {
      error: null,
      res: createSession(user.role_id),
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

    return {
      error: null,
      res: createSession(newUser.role_id),
    };
  },
};
