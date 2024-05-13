import styles from './TodoList.module.css';
import { Todo } from './Todo';
import { Panel } from '../menu/Panel';

export const TodoList = ({
  dataset,
  upd,
  del,
  create,
  change,
  text,
  sort,
  filter,
  mode,
}) => {
  return (
    <div className={styles.todoList}>
      <header className={styles.header}>Список дел</header>
      <Panel
        create={create}
        change={change}
        text={text}
        sort={sort}
        filter={filter}
        mode={mode}
      />
      <div className={styles.containerTodo}>
        {dataset.map(({ id, title, completed }) => (
          <Todo key={id} completed={completed} id={id} upd={upd} del={del}>
            {title}
          </Todo>
        ))}
      </div>
    </div>
  );
};
