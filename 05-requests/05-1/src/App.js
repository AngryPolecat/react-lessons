import { useState } from 'react';
import { URL } from './config';
import styles from './App.module.css';
import { useEffect } from 'react';
import { Loader } from './components/loader/Loader';
import { TodoList } from './components/todos/TodoList';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos);
      })
      .finally(() => setTimeout(() => setIsLoading(false), 2000));
  }, []);

  return (
    <div className={styles.app}>
      {isLoading ? <Loader /> : <TodoList todos={todos} />}
    </div>
  );
};
