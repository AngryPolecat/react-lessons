import { useState } from 'react';
//import { useCallback } from 'react';
import debounce from 'lodash/debounce';
import styles from './App.module.css';
import { useEffect } from 'react';

const handlerDebounceFn = (text) => {
  console.log(text);
};

const debouncedFunction = debounce(handlerDebounceFn, 1000);

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log(counter);
  }, []);

  const handlerChangeText = ({ target }) => {
    setText(target.value);
    debouncedFunction(target.value);
  };

  //const debouncedFunction = useCallback(debounce(handlerDebounceFn, 1000), []);

  return (
    <div className={styles.app}>
      <input type="text" value={text} onChange={handlerChangeText} />
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
};
