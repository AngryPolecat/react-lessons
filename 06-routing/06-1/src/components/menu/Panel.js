import styles from './Panel.module.css';
import { Button } from './Button';

export const Panel = ({
  onCreateTodo,
  inputText,
  onInputText,
  onClickButtonSortTodo,
  onChangeModeApp,
  modeButtonFilter,
}) => {
  return (
    <div className={styles.panel}>
      <input
        type="text"
        onChange={onInputText}
        value={inputText}
        placeholder={modeButtonFilter ? 'Режим поиска' : 'Новая задача'}
      />
      <Button action={onCreateTodo} name="create-todo">
        Добавить
      </Button>
      <Button action={onChangeModeApp} modeButtonFilter={modeButtonFilter}>
        Найти
      </Button>
      <Button action={onClickButtonSortTodo} name="id">
        1...9
      </Button>
      <Button action={onClickButtonSortTodo} name="title">
        А...Я
      </Button>
    </div>
  );
};
