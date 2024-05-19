import styles from './Todo.module.css';

export const Todo = ({ id, completed, children, upd, del }) => {
  const removeTodo = ({ target }) => {
    del(target.dataset.id);
  };

  const updateTodo = ({ target }) => {
    upd(target.dataset.id);
  };

  return (
    <div className={styles.todo}>
      <div
        className={`${styles.idTodo} ${completed ? styles.completed : ''}`}
      ></div>
      <div
        className={`${styles.bodyTodo} ${completed ? styles.completed : ''}`}
        onClick={updateTodo}
        data-id={id}
      >
        {children}
      </div>
      <button className={styles.removeTodo} onClick={removeTodo} data-id={id}>
        X
      </button>
    </div>
  );
};
