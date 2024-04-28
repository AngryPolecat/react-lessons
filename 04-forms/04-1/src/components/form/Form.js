import { useRef, useState } from 'react';
import styles from './Form.module.css';

const initialState = {
  email: { text: '', error: false },
  password: { text: '', error: false },
  rePassword: { text: '', error: false },
};

const useStore = () => {
  const [state, setState] = useState(initialState);

  return {
    getState: () => state,
    updateState: (field, value, error) =>
      setState({ ...state, [field]: { text: value, error } }),
    getError: () =>
      Object.values(state).some(
        (item) => item.error === true || !item.text.length
      ),
  };
};

export const Form = ({ onShowMessage }) => {
  const { getState, updateState, getError } = useStore();
  const { email, password, rePassword } = getState();
  const submitButtonRef = useRef(null);

  const handledSubmit = (event) => {
    event.preventDefault();
    console.log(email.text, password.text, rePassword.text);
  };

  const handlerRePasswordBlur = ({ target }) => {
    const { name, value } = target;
    let error = null;
    if (value.length && value.length < 6) {
      error = `Пароль не может быть меньше 6 символов`;
    } else {
      if (password.text.length === value.length && password.text !== value) {
        error = 'Пароли не совпадают';
      }
    }
    onShowMessage(error);
    updateState(name, value, !!error);
  };

  const handlerPasswordBlur = ({ target }) => {
    const { name, value } = target;
    let error = null;
    if (value.length && value.length < 6) {
      error = `Пароль не может быть меньше 6 символов`;
    }
    onShowMessage(error);
    updateState(name, value, !!error);
  };

  const handledChangeInformation = ({ target }) => {
    const { name, value } = target;
    let error = null;
    if (!/^[\w_@.]*$/.test(value)) {
      error = `Разрешенные символы: цифры, латинские буквы, знак @ и точка`;
    } else {
      if (value.length > 30) {
        error = `Не более 30 символов`;
      }
    }
    if (
      name === 'rePassword' &&
      !getError() &&
      value.length >= 6 &&
      value === password.text
    ) {
      submitButtonRef.current.focus();
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
          onChange={handledChangeInformation}
        />
        <input
          className={`${styles.ordinary} ${password.error ? styles.error : ''}`}
          type="password"
          name="password"
          placeholder="Пароль"
          value={password.text}
          onBlur={handlerPasswordBlur}
          onChange={handledChangeInformation}
        />
        <input
          className={`${styles.ordinary} ${
            rePassword.error ? styles.error : ''
          }`}
          type="password"
          name="rePassword"
          placeholder="Повторите пароль"
          value={rePassword.text}
          onChange={handledChangeInformation}
          onBlur={handlerRePasswordBlur}
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
