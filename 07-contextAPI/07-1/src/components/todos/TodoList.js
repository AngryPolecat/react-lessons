import styles from './TodoList.module.css';
import { Todo } from './Todo';
import { Panel } from '../menu/Panel';

export const TodoList = ({ todos }) => {
  return (
    <div className={styles.todoList}>
      <header className={styles.header}>Список дел</header>
      <Panel />
      <div className={styles.containerTodo}>
        {todos.map(({ id, title, completed }) => (
          <Todo key={id} completed={completed} id={id}>
            {title}
          </Todo>
        ))}
      </div>
    </div>
  );
};
