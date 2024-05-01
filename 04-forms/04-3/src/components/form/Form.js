import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './Form.module.css';

const sendFormData = (formData) => {
  console.log(formData);
};

const fieldsSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[\w_@.]*$/,
      'Допустимые символы цифры, буквы, знак подчеркивания, знак @ и точка'
    )
    .max(30, 'Допустимая длина 30 символов')
    .min(6, 'E-mail не может быть меньше 6 символов'),
  password: yup
    .string()
    .matches(/^[\w]*$/, 'Допустимые символы цифры и буквы')
    .max(20, 'Допустимая длина 20 символов')
    .min(6, 'Пароль не может быть меньше 6 символов'),
  rePassword: yup
    .string()
    .matches(/^[\w]*$/, 'Допустимые символы цифры и буквы')
    .max(20, 'Допустимая длина 20 символов')
    .min(6, 'Пароль (повтор) не может быть меньше 6 символов')
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
    },
    resolver: yupResolver(fieldsSchema),
  });

  const errorState = {
    email: errors.email?.message,
    password: errors.password?.message,
    rePassword: errors.rePassword?.message,
  };

  const error = Object.values(errorState).some((item) => !!item);
  const message = Object.values(errorState)
    .filter((item) => item != null)
    .join('\n');

  return (
    <>
      <header>Регистрация</header>
      {error && (
        <div className={`${styles.message} ${!error ? styles.hidden : ''}`}>
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit(sendFormData)}>
        <input
          className={`${styles.ordinary} ${
            errorState.email ? styles.error : ''
          }`}
          name="email"
          type="email"
          placeholder="E-mail"
          {...register('email')}
        />
        <input
          className={`${styles.ordinary} ${
            errorState.password ? styles.error : ''
          }`}
          type="password"
          name="password"
          placeholder="Пароль"
          {...register('password')}
        />
        <input
          className={`${styles.ordinary} ${
            errorState.rePassword ? styles.error : ''
          }`}
          type="password"
          name="rePassword"
          placeholder="Повторите пароль"
          {...register('rePassword')}
        />
        <button type="submit" disabled={error ? true : false}>
          Зарегистрироваться
        </button>
      </form>
    </>
  );
};
