import styles from './Panel.module.css';
import { Button } from './Button';

export const Panel = ({ create, text, change, sort, filter, mode }) => {
  return (
    <div className={styles.panel}>
      <input
        type="text"
        onChange={change}
        value={text}
        placeholder={mode ? 'Режим поиска' : 'Новая задача'}
      />
      <Button action={create} name="create-todo">
        Добавить
      </Button>
      <Button action={filter} mode={mode}>
        Найти
      </Button>
      <Button action={sort} name="id">
        1...9
      </Button>
      <Button action={sort} name="title">
        А...Я
      </Button>
    </div>
  );
};
