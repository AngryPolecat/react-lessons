import { useDispatch } from 'react-redux';
//import { useState } from 'react';
//import { store } from './store/store';
import { Information } from './components/information/Information';
import { Field } from './components/field/Field';
import styles from './App.module.css';
import { RESET } from './const/const';

export const App = () => {
  const dispatch = useDispatch();

  const handlerResetButton = () => {
    dispatch(RESET);
  };

  return (
    <div className={styles.app}>
      <Information />
      <Field />
      <button onClick={handlerResetButton}>Начать заново</button>
    </div>
  );
};
