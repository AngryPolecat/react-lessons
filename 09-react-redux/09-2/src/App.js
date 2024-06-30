import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.css';
import { TodoList } from './components/todos/TodoList';
import { loadTodosAsync } from './actions/load-todos';
import { Loader } from './components/loader/Loader';
//import { PROCESS_LOAD_DATA_START } from './const/const';

export const App = () => {
  const dispatch = useDispatch();
  const loader = useSelector(({ optionsState }) => optionsState.isLoading);

  useEffect(() => {
    dispatch(loadTodosAsync);
  }, [dispatch]);

  return <div className={styles.app}>{loader ? <Loader /> : <TodoList />}</div>;
};
