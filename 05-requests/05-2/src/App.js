import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';
import styles from './App.module.css';
import { Loader } from './components/loader/Loader';
import { TodoList } from './components/todos/TodoList';
import { URL } from './config';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [refreshTodo, setRefreshTodo] = useState(false);
  const [text, setText] = useState('');
  const [modeFilter, setModeFilter] = useState(false);

  const searchTodo = (text) => {
    const url = `${URL}?title_like=${text}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => setTodos(result));
  };

  const debouncedSearchTodo = useCallback(debounce(searchTodo, 1000), []);

  const handlerChangeText = ({ target }) => {
    setText(target.value);
    if (modeFilter) {
      debouncedSearchTodo(target.value);
    } else {
      setRefreshTodo(!refreshTodo);
    }
  };

  const handlerFilterTodo = () => {
    setModeFilter(!modeFilter);
  };

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos);
      })
      .finally(() => {
        setTimeout(() => setIsLoaded(true), 2000);
      });
  }, [refreshTodo]);

  const handlerSortTodo = ({ target }) => {
    fetch(`${URL}/?_sort=${target.name}&_order=asc`)
      .then((response) => response.json())
      .then((result) => {
        setTodos(result);
      });
  };

  const handlerCreateTodo = () => {
    if (text) {
      fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({
          title: text,
          completed: false,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          setRefreshTodo(!refreshTodo);
        })
        .finally(() => {
          setText('');
        });
    }
  };

  const handlerUpdateTodo = (id) => {
    const updatedTodo = todos.find((todo) => todo.id === Number(id));
    fetch(`${URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        ...updatedTodo,
        completed: !updatedTodo.completed,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        setRefreshTodo(!refreshTodo);
      });
  };

  const handlerRemoveTodo = (id) => {
    fetch(`${URL}/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((result) => {
        setRefreshTodo(!refreshTodo);
      });
  };

  return (
    <div className={styles.app}>
      {!isLoaded ? (
        <Loader />
      ) : (
        <>
          <TodoList
            todos={todos}
            upd={handlerUpdateTodo}
            del={handlerRemoveTodo}
            create={handlerCreateTodo}
            change={handlerChangeText}
            text={text}
            sort={handlerSortTodo}
            filter={handlerFilterTodo}
            mode={modeFilter}
          />
        </>
      )}
    </div>
  );
};
