import { useDispatch } from 'react-redux';
import { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';
import styles from './Panel.module.css';
import { Button } from './Button';
import { sortTodos } from '../../actions/sort-by';
import { searchTodo } from '../../actions/search-todo';
import { createTodo } from '../../actions/create-todo';

export const Panel = () => {
  const [modeFilter, setModeFilter] = useState(false);
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const handlerSortTodos = ({ target }) => {
    dispatch(sortTodos(target.name));
  };

  const handlerChangeMode = () => {
    setModeFilter(!modeFilter);
  };

  const handlerSearchTodo = (text) => {
    dispatch(searchTodo(text));
  };

  const debouncedSearchTodo = useCallback(
    debounce(handlerSearchTodo, 1000),
    []
  );

  const handlerChangeText = ({ target }) => {
    setInputText(target.value);
    if (modeFilter) {
      debouncedSearchTodo(target.value);
    }
  };

  const handlerCreateTodo = () => {
    if (inputText) {
      dispatch(createTodo(inputText));
    }
  };

  return (
    <div className={styles.panel}>
      <input
        type="text"
        onChange={handlerChangeText}
        value={inputText}
        placeholder={modeFilter ? 'Режим поиска' : 'Новая задача'}
      />
      <Button action={handlerCreateTodo}>Добавить</Button>
      <Button action={handlerChangeMode} modeFilter={modeFilter}>
        Найти
      </Button>
      <Button action={handlerSortTodos} name="id">
        1...9
      </Button>
      <Button action={handlerSortTodos} name="title">
        А...Я
      </Button>
    </div>
  );
};
