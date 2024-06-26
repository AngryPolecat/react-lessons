import { useSelector } from 'react-redux';
import styles from './TodoList.module.css';
import { Todo } from './Todo';
//import { Panel } from '../menu/Panel';

export const TodoList = () => {
  const todos = useSelector((state) => state.todosState.todos);

  return (
    <div className={styles.todoList}>
      <div className={styles.containerTodo}>
        {todos.map(({ id, title, completed }) => (
          <Todo key={id} completed={completed} id={id}>
            {title}
          </Todo>
        ))}
      </div>
      {/* <header className={styles.header}>Список дел</header>
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
      </div> */}
    </div>
  );
};
