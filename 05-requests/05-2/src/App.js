import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';
import styles from './App.module.css';
import { Loader } from './components/loader/Loader';
import { TodoList } from './components/todos/TodoList';
import { URL } from './config';
import { Win } from './components/win/Win';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshTodo, setRefreshTodo] = useState(false);
  const [inputText, setInputText] = useState('');
  const [modeButtonFilter, setModeButtonFilter] = useState(false);
  const [isOpeningMenuTodo, setIsOpeningMenuTodo] = useState(false);
  const [updatableTodo, setUpdatableTodo] = useState({});
  const [updatedTextTodo, setUpdatedTextTodo] = useState('');

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

  const handlerChangeText = ({ target }) => {
    setInputText(target.value);
    if (modeButtonFilter) {
      debouncedSearchTodo(target.value);
    }
  };

  const handlerUpdateTextTodo = ({ target }) => {
    setUpdatedTextTodo(target.value);
  };

  const handlerChangeModeApp = () => {
    setModeButtonFilter(!modeButtonFilter);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((result) => {
        setTodos(result);
      })
      .finally(() => {
        setTimeout(() => setIsLoading(false), 200);
      });
  }, [refreshTodo]);

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

  const handlerComplitedTodo = (id) => {
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
        const updatedTodos = todos.map((todo) =>
          todo.id === Number(id)
            ? { ...todo, completed: !todo.completed }
            : todo
        );
        setTodos(updatedTodos);
      });
  };

  const handlerSaveTextTodo = () => {
    if (updatedTextTodo) {
      setIsOpeningMenuTodo(!isOpeningMenuTodo);
      const id = updatableTodo.id;
      const updatedTodo = todos.find((todo) => todo.id === Number(id));
      fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({
          ...updatedTodo,
          title: updatedTextTodo,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          const updatedTodos = todos.map((todo) =>
            todo.id === Number(id) ? { ...todo, title: updatedTextTodo } : todo
          );
          setTodos(updatedTodos);
        });
    }
  };

  const handlerRemoveTodo = () => {
    setIsOpeningMenuTodo(!isOpeningMenuTodo);
    const id = updatableTodo.id;
    fetch(`${URL}/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((result) => {
        const updatedTodos = todos.filter((todo) => todo.id !== Number(id));
        setTodos(updatedTodos);
      });
  };

  const handlerClickMenuTodo = (id) => {
    if (!Number.isNaN(id) && Number(id)) {
      setIsOpeningMenuTodo(!isOpeningMenuTodo);
      const currentTodo = todos.find((todo) => todo.id === Number(id));
      setUpdatableTodo(currentTodo);
      setUpdatedTextTodo(currentTodo.title);
    }
  };

  return (
    <div className={styles.app}>
      <Win
        isOpeningMenuTodo={isOpeningMenuTodo}
        onClickWin={() => setIsOpeningMenuTodo(!isOpeningMenuTodo)}
        onRemoveTodo={handlerRemoveTodo}
        onUpdateTodo={handlerSaveTextTodo}
        currentTodo={updatableTodo}
        onUpdateTextTodo={handlerUpdateTextTodo}
        textTodo={updatedTextTodo}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TodoList
            todos={todos}
            onUpdateComplitedTodo={handlerComplitedTodo}
            onCallMenuTodo={handlerClickMenuTodo}
            onCreateTodo={handlerCreateTodo}
            onInputText={handlerChangeText}
            inputText={inputText}
            onClickButtonSortTodo={handlerSortTodo}
            onChangeModeApp={handlerChangeModeApp}
            modeButtonFilter={modeButtonFilter}
          />
        </>
      )}
    </div>
  );
};
