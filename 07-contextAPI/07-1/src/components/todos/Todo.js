import { useContext } from 'react';
import styles from './Todo.module.css';
import { ActionsContext } from '../../context';

export const Todo = ({ id, completed, children }) => {
  const { handlerComplitedTodo, handlerClickMenuTodo } =
    useContext(ActionsContext);

  return (
    <div className={styles.todo}>
      <div className={`${styles.idTodo} ${completed ? styles.completed : ''}`}>
        {id}
      </div>
      <div
        className={`${styles.bodyTodo} ${completed ? styles.completed : ''}`}
        onClick={handlerComplitedTodo}
        data-id={id}
      >
        {children}
      </div>
      <button
        className={styles.removeTodo}
        onClick={handlerClickMenuTodo}
        data-id={id}
      >
        &#9776;
      </button>
    </div>
  );
};
