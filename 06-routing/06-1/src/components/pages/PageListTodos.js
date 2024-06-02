import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';
import styles from './PageListTodos.module.css';
import { URL } from '../../config';
import { Todo } from '../todos/Todo';
import { Panel } from '../menu/Panel';
import { Loader } from '../loader/Loader';

export const PageListTodos = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [refreshTodo, setRefreshTodo] = useState(false);
  const [modeButtonFilter, setModeButtonFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const searchTodo = (textTodo) => {
    setIsLoading(true);
    const url = `${URL}?title_like=${textTodo}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => setTodos(result))
      .finally(() => {
        setTimeout(() => setIsLoading(false), 200);
      });
  };

  const debouncedSearchTodo = useCallback(debounce(searchTodo, 1000), []);

  const handlerChangeModeApp = () => {
    setModeButtonFilter(!modeButtonFilter);
  };

  const handlerSortTodo = ({ target }) => {
    setIsLoading(true);
    fetch(`${URL}/?_sort=${target.name}&_order=asc`)
      .then((response) => response.json())
      .then((result) => {
        setTodos(result);
      })
      .finally(() => {
        setTimeout(() => setIsLoading(false), 200);
      });
  };

  const handlerChangeText = ({ target }) => {
    setInputText(target.value);
    if (modeButtonFilter) {
      debouncedSearchTodo(target.value);
    }
  };

  const handlerCreateTodo = () => {
    if (inputText) {
      fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({
          title: inputText,
          completed: false,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          setRefreshTodo(!refreshTodo);
        })
        .finally(() => {
          setInputText('');
        });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((result) => {
        setTodos(result);
      })
      .finally(() => {
        setTimeout(() => setIsLoading(false), 300);
      });
  }, [refreshTodo]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.todoList}>
          <header className={styles.header}>Список дел</header>
          <Panel
            onCreateTodo={handlerCreateTodo}
            onInputText={handlerChangeText}
            inputText={inputText}
            onClickButtonSortTodo={handlerSortTodo}
            onChangeModeApp={handlerChangeModeApp}
            modeButtonFilter={modeButtonFilter}
          />
          <div className={styles.containerTodo}>
            {todos.map(({ id, title, completed }) => (
              <Todo key={id} completed={completed} id={id}>
                {title}
              </Todo>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
