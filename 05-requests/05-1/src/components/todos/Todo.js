import styles from './Todo.module.css';

export const Todo = ({ id, completed, children }) => {
  return (
    <div className={styles.todo}>
      <div className={`${styles.idTodo} ${completed ? styles.completed : ''}`}>
        {id}
      </div>
      <div
        className={`${styles.bodyTodo} ${completed ? styles.completed : ''}`}
      >
        {children}
      </div>
    </div>
  );
};
