import { useState } from 'react';
import styles from './App.module.css';
import { useEffect } from 'react';

export const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
  }, []);

  return (
    <div className={styles.app}>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
};
