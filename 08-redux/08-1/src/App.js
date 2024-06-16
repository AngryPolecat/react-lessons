import { useState } from 'react';
import { store } from './store/store';
import { Information } from './components/information/Information';
import { Field } from './components/field/Field';
import styles from './App.module.css';

export const App = () => {
  const [isRendering, setIsRendering] = useState(false);

  store.subscribe(() => {
    setIsRendering(!isRendering);
  });

  const handlerResetButton = () => {
    store.dispatch({ type: 'RESET' });
  };

  return (
    <div className={styles.app}>
      <Information />
      <Field />
      <button onClick={handlerResetButton}>Начать заново</button>
    </div>
  );
};
