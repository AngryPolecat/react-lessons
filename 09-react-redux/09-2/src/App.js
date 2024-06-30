import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './App.module.css';
import { TodoList } from './components/todos/TodoList';
import { loadTodosAsync } from './actions/load-todos';
//import { Loader } from './components/loader/Loader';
//import { PROCESS_LOAD_DATA_START } from './const/const';

export const App = () => {
  const dispatch = useDispatch();
  //const loader = useSelector((state) => state.loaderState.loading);

  useEffect(() => {
    //dispatch(PROCESS_LOAD_DATA_START);
    dispatch(loadTodosAsync);
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <TodoList />
    </div>
  );
};
