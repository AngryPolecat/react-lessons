import styles from './Todo.module.css';

export const Todo = ({
  id,
  completed,
  children,
  onUpdateComplitedTodo,
  onCallMenuTodo,
}) => {
  const callMenuTodo = ({ target }) => {
    onCallMenuTodo(target.dataset.id);
  };

  const complitedTodo = ({ target }) => {
    onUpdateComplitedTodo(target.dataset.id);
  };

  return (
    <div className={styles.todo}>
      <div className={`${styles.idTodo} ${completed ? styles.completed : ''}`}>
        {id}
      </div>
      <div
        className={`${styles.bodyTodo} ${completed ? styles.completed : ''}`}
        onClick={complitedTodo}
        data-id={id}
      >
        {children}
      </div>
      <button className={styles.removeTodo} onClick={callMenuTodo} data-id={id}>
        &#9776;
      </button>
    </div>
  );
};
