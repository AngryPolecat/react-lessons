import { useRef, useState } from 'react';
import styles from './Form.module.css';

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
  const submitButtonRef = useRef(null);

  const handlerSubmit = (event) => {
    event.preventDefault();
    console.log(email.text, password.text, rePassword.text);
  };

  const handlerPasswordsBlur = ({ target }) => {
    const { name, value } = target;
    let error = null;
    if (value && value.length < MIN_LENGTH_FIELD) {
      error = `Пароль не может быть меньше 6 символов`;
    } else {
      if (
        password.text.length &&
        rePassword.text.length &&
        password.text !== rePassword.text
      ) {
        error = 'Пароли не совпадают';
      }
    }
    onShowMessage(error);
    updateState(name, value, !!error);
  };

  const handlerChangeInformation = ({ target }) => {
    const { name, value } = target;
    let error = null;
    if (!/^[\w_@.]*$/.test(value)) {
      error = `Разрешенные символы: цифры, латинские буквы, знак @ и точка`;
    } else {
      if (value.length > 30) {
        error = `Не более 30 символов`;
      }
    }
    onShowMessage(error);
    updateState(name, value, !!error);
    if (
      !error &&
      name === 'rePassword' &&
      password.text === value &&
      value.length >= MIN_LENGTH_FIELD
    ) {
      console.log(true);
      submitButtonRef.current.focus();
    }
  };

  return (
    <>
      <header>Регистрация</header>
      <form onSubmit={handlerSubmit}>
        <input
          className={`${styles.ordinary} ${email.error ? styles.error : ''}`}
          name="email"
          type="email"
          placeholder="E-mail"
          value={email.text}
          onChange={handlerChangeInformation}
        />
        <input
          className={`${styles.ordinary} ${password.error ? styles.error : ''}`}
          type="password"
          name="password"
          placeholder="Пароль"
          value={password.text}
          onBlur={handlerPasswordsBlur}
          onChange={handlerChangeInformation}
        />
        <input
          className={`${styles.ordinary} ${
            rePassword.error ? styles.error : ''
          }`}
          type="password"
          name="rePassword"
          placeholder="Повторите пароль"
          value={rePassword.text}
          onChange={handlerChangeInformation}
          onBlur={handlerPasswordsBlur}
        />
        <button
          type="submit"
          ref={submitButtonRef}
          disabled={getError() ? true : false}
        >
          Зарегистрироваться
        </button>
      </form>
    </>
  );
};
