import { useState } from 'react';
import styles from './App.module.css';
import { useEffect } from 'react';
import { Loader } from './components/loader/Loader';
import { TodoList } from './components/todos/TodoList';

const URL = 'https://jsonplaceholder.typicode.com/todos';

export const App = () => {
  const [dataset, setDataset] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((dataset) => {
        console.log(dataset);
        setDataset(dataset);
      })
      .finally(() => setTimeout(() => setIsLoaded(true), 2000));
  }, []);

  return (
    <div className={styles.app}>
      {!isLoaded ? <Loader /> : <TodoList dataset={dataset} />}
    </div>
  );
};
