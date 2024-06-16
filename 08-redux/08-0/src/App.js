import { store } from './store/store';
import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
  const { id, name, city, age } = store.getState();
  const [render, setRender] = useState(false);

  const handlerButton1 = () => {
    store.dispatch({ type: 'CHANGE_AGE_PERSON', payload: { age: 45 } });
    //console.log(store.getState());
  };

  const handlerButton2 = () => {
    store.dispatch({
      type: 'CHANGE_NAME_PERSON',
      payload: { id: 5, name: 'Ivan' },
    });
  };

  store.subscribe(() => {
    setRender(!render);
  });

  return (
    <div className={styles.app}>
      <div className={styles.text}>
        Текст: {`${id}: ${name} (${city}). Возраст: ${age}`}
      </div>
      <button onClick={handlerButton1}>Кнопка 1</button>
      <button onClick={handlerButton2}>Кнопка 2</button>
      <button>Кнопка 3</button>
    </div>
  );
};
