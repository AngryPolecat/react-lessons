import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  const onInputButtonClick = () => {
    const promptValue = prompt('Введите значение');
    if (promptValue.length >= 3) {
      setValue(promptValue);
      setError(false);
    } else {
      setError(true);
    }
  };

  const onAddButtonClick = () => {
    const date = new Date();
    const formatDate =
      ('0' + date.getDate()).slice(-2) +
      '.' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '.' +
      date.getFullYear() +
      ' ' +
      date.getHours() +
      ':' +
      date.getMinutes() +
      ':' +
      date.getSeconds();
    setList((list) => [...list, { id: Date.now(), value, formatDate }]);
    setValue('');
    setError('');
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.pageHeading}>Ввод значения</h1>
      <p className={styles.noMarginText}>
        Текущее значение <code>value</code>: "
        <output className={styles.currentValue}>{value}</output>"
      </p>
      <div className={styles.error}>
        {error && `Введенное значение должно содержать минимум 3 символа`}
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={onInputButtonClick}>
          Ввести новое
        </button>
        <button
          className={styles.button}
          disabled={error || error === '' ? true : false}
          onClick={onAddButtonClick}
        >
          Добавить в список
        </button>
      </div>
      <div className={styles.listContainer}>
        <h2 className={styles.listHeading}>Список:</h2>
        {!list.length ? (
          <p className={styles.noMarginText}>Нет добавленных элементов</p>
        ) : (
          <ul className={styles.list}>
            {list.map(({ id, value, formatDate }) => (
              <li className={styles.listItem} key={id}>
                {`${value} Добавлено ${formatDate}`}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
