import { useContext } from 'react';
import styles from './Panel.module.css';
import { Button } from './Button';
import { AppContext, ActionsContext } from '../../context';

export const Panel = () => {
  const { inputText, modeButtonFilter } = useContext(AppContext);
  const {
    handlerCreateTodo,
    handlerSortTodo,
    handlerChangeModeApp,
    handlerChangeText,
  } = useContext(ActionsContext);

  return (
    <div className={styles.panel}>
      <input
        type="text"
        onChange={handlerChangeText}
        value={inputText}
        placeholder={modeButtonFilter ? 'Режим поиска' : 'Новая задача'}
      />
      <Button action={handlerCreateTodo} name="create-todo">
        Добавить
      </Button>
      <Button action={handlerChangeModeApp} modeButtonFilter={modeButtonFilter}>
        Найти
      </Button>
      <Button action={handlerSortTodo} name="id">
        1...9
      </Button>
      <Button action={handlerSortTodo} name="title">
        А...Я
      </Button>
    </div>
  );
};
