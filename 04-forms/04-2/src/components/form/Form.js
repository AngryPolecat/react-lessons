import * as yup from 'yup';
import styles from './Form.module.css';
import { useState } from 'react';

const dataChangeScheme = yup
  .string()
  .matches(
    /^[\w_@.]*$/,
    'Допустимые символы цифры, буквы, знак подчеркивания, знак @ и точка'
  )
  .max(30, 'Допустимая длина 30 символов');

const passwordsBlurScheme = yup
  .string()
  .min(6, 'Пароль не может быть меньше 6 символов');

const validateData = (scheme, value) => {
  let error = null;
  try {
    scheme.validateSync(value, { abortEarly: false });
  } catch ({ errors }) {
    error = errors.join('\n');
  }
  return error;
};

const initialState = {
  email: { text: '', error: false },
  password: { text: '', error: false },
  rePassword: { text: '', error: false },
};

const MIN_LENGTH_FIELD = 6;

const useStore = () => {
  const [state, setState] = useState(initialState);

  return {
    getState: () => state,
    updateState: (field, value, error) =>
      setState({ ...state, [field]: { text: value, error } }),
    getError: () =>
      Object.values(state).some(
        (item) =>
          item.error === true ||
          !item.text.length ||
          item.text.length < MIN_LENGTH_FIELD
      ),
  };
};

export const Form = ({ onShowMessage }) => {
  const { getState, updateState, getError } = useStore();
  const { email, password, rePassword } = getState();

  const handledSubmit = (event) => {
    event.preventDefault();
    console.log(email.text, password.text, rePassword.text);
  };

  const handlerChangeData = ({ target }) => {
    const { name, value } = target;
    const error = validateData(dataChangeScheme, value);
    updateState(name, value, !!error);
    onShowMessage(error);
  };

  const handlerBlurData = ({ target }) => {
    const { name, value } = target;
    let error = null;
    if (value.length) {
      error = validateData(passwordsBlurScheme, value);
      if (!error) {
        if (
          password.text.length &&
          rePassword.text.length &&
          password.text !== rePassword.text
        ) {
          error = 'Пароли не совпадают';
        }
      }
    }
    onShowMessage(error);
    updateState(name, value, !!error);
  };

  return (
    <>
      <header>Регистрация</header>
      <form onSubmit={handledSubmit}>
        <input
          className={`${styles.ordinary} ${email.error ? styles.error : ''}`}
          name="email"
          type="email"
          placeholder="E-mail"
          value={email.text}
          onChange={handlerChangeData}
        />
        <input
          className={`${styles.ordinary} ${password.error ? styles.error : ''}`}
          type="password"
          name="password"
          placeholder="Пароль"
          value={password.text}
          onChange={handlerChangeData}
          onBlur={handlerBlurData}
        />
        <input
          className={`${styles.ordinary} ${
            rePassword.error ? styles.error : ''
          }`}
          type="password"
          name="rePassword"
          placeholder="Повторите пароль"
          value={rePassword.text}
          onChange={handlerChangeData}
          onBlur={handlerBlurData}
        />
        <button type="submit" disabled={getError() ? true : false}>
          Зарегистрироваться
        </button>
      </form>
    </>
  );
};
