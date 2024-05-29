import { NavLink } from 'react-router-dom';
import styles from './Todo.module.css';

export const Todo = ({ id, completed, children }) => {
  return (
    <div className={styles.todo}>
      <div className={`${styles.idTodo} ${completed ? styles.completed : ''}`}>
        {id}
      </div>
      <div
        className={`${styles.bodyTodo} ${completed ? styles.completed : ''}`}
        data-id={id}
      >
        <NavLink className={styles.navLink} to={`/task/${id}`}>
          {children}
        </NavLink>
      </div>
    </div>
  );
};
