import { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { ref, onValue, push, set, remove } from 'firebase/database';
import debounce from 'lodash/debounce';
import styles from './App.module.css';
import { Loader } from './components/loader/Loader';
import { TodoList } from './components/todos/TodoList';
import { db } from './firebase';
import { Win } from './components/win/Win';

export const App = () => {
  const [todos, setTodos] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [inputText, setInputText] = useState('');
  const [modeButtonFilter, setModeButtonFilter] = useState(false);
  const [isOpeningMenuTodo, setIsOpeningMenuTodo] = useState(false);
  const [updatableTodo, setUpdatableTodo] = useState({});
  const [updatedTextTodo, setUpdatedTextTodo] = useState('');

  const searchTodo = (text) => {
    const todosDbRef = ref(db, 'todos');
    onValue(todosDbRef, (snapshot) => {
      const loadedTodos = snapshot.val() || {};
      const filteredArray = Object.entries(loadedTodos)
        .slice()
        .filter(([, body]) => body.title.includes(text));
      const filteredDataset = Object.fromEntries(filteredArray);
      setTodos(filteredDataset);
    });
  };

  const debouncedSearchTodo = useCallback(debounce(searchTodo, 1000), []);

  const handlerUpdateTextTodo = ({ target }) => {
    setUpdatedTextTodo(target.value);
  };

  const handlerChangeText = ({ target }) => {
    setInputText(target.value);
    if (modeButtonFilter) {
      debouncedSearchTodo(target.value);
    }
  };

  const handlerChangeModeApp = () => {
    setModeButtonFilter(!modeButtonFilter);
  };

  useEffect(() => {
    const todosDbRef = ref(db, 'todos');

    return onValue(todosDbRef, (snapshot) => {
      const loadedTodos = snapshot.val() || {};
      setTodos(loadedTodos);
      setTimeout(() => setIsLoading(false), 200);
    });
  }, []);

  const handlerSortTodo = ({ target }) => {
    const sortedArray = Object.entries(todos)
      .slice()
      .sort(([, a], [, b]) =>
        target.name === 'title'
          ? a.title.localeCompare(b.title)
          : a.create - b.create
      );
    const sortedDataset = Object.fromEntries(sortedArray);
    setTodos(sortedDataset);
  };

  const handlerCreateTodo = () => {
    if (inputText) {
      setIsLoading(true);
      const todosDbRef = ref(db, 'todos');
      push(todosDbRef, {
        title: inputText,
        completed: false,
        create: Date.now(),
      })
        .then((response) => {
          //console.log(response);
        })
        .finally(() => {
          setInputText('');
        });
    }
  };

  const handlerComplitedTodo = (id) => {
    setIsLoading(true);
    const updatedTodo = Object.entries(todos)
      .find(([idTodo]) => idTodo === id)
      .at(1);
    const todosDbRef = ref(db, `todos/${id}`);
    set(todosDbRef, {
      ...updatedTodo,
      completed: !updatedTodo.completed,
    }).then((response) => {
      //console.log(response);
    });
  };

  const handlerRemoveTodo = () => {
    setIsLoading(true);
    setIsOpeningMenuTodo(!isOpeningMenuTodo);
    const id = updatableTodo;
    const todosDbRef = ref(db, `todos/${id}`);
    remove(todosDbRef).then((response) => {
      //console.log(response);
    });
  };

  const handlerSaveTextTodo = () => {
    if (updatedTextTodo) {
      setIsLoading(true);
      setIsOpeningMenuTodo(!isOpeningMenuTodo);
      const id = updatableTodo;
      const [, updatedTodo] = Object.entries(todos).find(
        ([idTodo]) => idTodo === id
      );
      const todosDbRef = ref(db, `todos/${id}`);
      set(todosDbRef, {
        ...updatedTodo,
        title: updatedTextTodo,
      }).then((response) => {
        //console.log(response);
      });
    }
  };

  const handlerClickMenuTodo = (id) => {
    if (id) {
      setIsOpeningMenuTodo(!isOpeningMenuTodo);
      const [currentTodo, { title }] = Object.entries(todos).find(
        ([idTodo]) => idTodo === id
      );
      setUpdatableTodo(currentTodo);
      setUpdatedTextTodo(title);
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
