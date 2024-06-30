import { useSelector } from 'react-redux';
import styles from './TodoList.module.css';
import { Todo } from './Todo';
import { Panel } from '../menu/Panel';

export const TodoList = () => {
  const todos = useSelector((state) => state.todosState.todos);

  return (
    <div className={styles.todoList}>
      <header className={styles.header}>Список дел</header>
      <Panel />
      <div className={styles.containerTodo}>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};
