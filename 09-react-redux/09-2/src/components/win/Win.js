import styles from './Win.module.css';
import { Button } from '../menu/Button';

export const Win = (
  {
    // isOpeningMenuTodo,
    // onClickWin,
    // onRemoveTodo,
    // onUpdateTodo,
    // onUpdateTextTodo,
    // textTodo,
  }
) => {
  return (
    <div className={`${styles.win} ${isOpeningMenuTodo ? styles.active : ''}`}>
      {/* <div className={styles.backgroundWin} onClick={onClickWin}></div>
      <div className={styles.modalWin}>
        <header>Меню</header>
        <div className={styles.containerButtons}>
          <input
            className={styles.textTodo}
            value={textTodo}
            onChange={onUpdateTextTodo}
            placeholder={!textTodo ? 'Текст не может быть пустым' : ''}
          />
          <Button name="update-todo" action={onUpdateTodo}>
            Сохранить
          </Button>
          <Button name="remove-todo" action={onRemoveTodo}>
            Удалить
          </Button>
        </div>
      </div> */}
    </div>
  );
};
