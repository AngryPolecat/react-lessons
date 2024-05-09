import styles from './TodoList.module.css';
import { Todo } from './Todo';

export const TodoList = ({ dataset }) => {
  return (
    <div className={styles.todoList}>
      <header className={styles.header}>Список дел</header>
      <div className={styles.containerTodo}>
        {dataset.map(({ id, title, completed }) => (
          <Todo key={id} completed={completed} id={id}>
            {title}
          </Todo>
        ))}
      </div>
    </div>
  );
};
