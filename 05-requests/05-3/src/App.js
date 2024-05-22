import { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { ref, onValue, push, set, remove } from 'firebase/database';
import debounce from 'lodash/debounce';
import styles from './App.module.css';
import { Loader } from './components/loader/Loader';
import { TodoList } from './components/todos/TodoList';
import { db } from './firebase';

export const App = () => {
  const [todos, setTodos] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [text, setText] = useState('');
  const [modeFilter, setModeFilter] = useState(false);

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

  const handlerChangeText = ({ target }) => {
    setText(target.value);
    if (modeFilter) {
      debouncedSearchTodo(target.value);
    }
  };

  const handlerFilterTodo = () => {
    setModeFilter(!modeFilter);
  };

  useEffect(() => {
    const todosDbRef = ref(db, 'todos');

    return onValue(todosDbRef, (snapshot) => {
      const loadedTodos = snapshot.val() || {};
      //console.log(loadedTodos);
      setTodos(loadedTodos);
      setIsLoaded(true);
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

    //console.log(sortedArray);
    const sortedDataset = Object.fromEntries(sortedArray);
    //console.log(JSON.stringify(sortedDataset));
    setTodos(sortedDataset);
  };

  const handlerCreateTodo = () => {
    if (text) {
      const todosDbRef = ref(db, 'todos');
      push(todosDbRef, {
        title: text,
        completed: false,
        create: Date.now(),
      })
        .then((response) => {
          //console.log(response);
        })
        .finally(() => {
          setText('');
        });
    }
  };

  const handlerUpdateTodo = (id) => {
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

  const handlerRemoveTodo = (id) => {
    const todosDbRef = ref(db, `todos/${id}`);
    remove(todosDbRef).then((response) => {
      //console.log(response);
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
