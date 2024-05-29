import styles from './TodoList.module.css';
import { Todo } from './Todo';
import { Panel } from '../menu/Panel';

export const TodoList = ({
  todos,
  onUpdateComplitedTodo,
  onCallMenuTodo,
  onCreateTodo,
  onInputText,
  inputText,
  onClickButtonSortTodo,
  onChangeModeApp,
  modeButtonFilter,
}) => {
  return (
    <div className={styles.todoList}>
      <header className={styles.header}>Список дел</header>
      <Panel
        onCreateTodo={onCreateTodo}
        onInputText={onInputText}
        inputText={inputText}
        onClickButtonSortTodo={onClickButtonSortTodo}
        onChangeModeApp={onChangeModeApp}
        modeButtonFilter={modeButtonFilter}
      />
      <div className={styles.containerTodo}>
        {todos.map(({ id, title, completed }) => (
          <Todo
            key={id}
            completed={completed}
            id={id}
            onUpdateComplitedTodo={onUpdateComplitedTodo}
            onCallMenuTodo={onCallMenuTodo}
          >
            {title}
          </Todo>
        ))}
      </div>
    </div>
  );
};
