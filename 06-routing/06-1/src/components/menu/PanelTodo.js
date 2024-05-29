import styles from './PanelTodo.module.css';
import { Button } from './Button';

export const PanelTodo = ({
  onClickButtonBack,
  onClickButtonDelete,
  onClickButtonComplete,
  onClickButtonUpdate,
  onClickButtonSaveText,
  modeEditingText,
}) => {
  return (
    <div className={styles.panelTodo}>
      {!modeEditingText ? (
        <>
          {' '}
          <Button
            name="back"
            title="Вернуться"
            typeButton="todo"
            action={onClickButtonBack}
          >
            &lArr;
          </Button>
          <Button
            name="complete"
            title="Завершить"
            typeButton="todo"
            action={onClickButtonComplete}
          >
            &#10004;
          </Button>
          <Button
            name="change"
            title="Изменить"
            typeButton="todo"
            action={onClickButtonUpdate}
          >
            &#9998;
          </Button>
          <Button
            name="delete"
            title="Удалить"
            typeButton="todo"
            action={onClickButtonDelete}
          >
            &#10008;
          </Button>
        </>
      ) : (
        <Button
          name="save"
          title="Сохранить"
          typeButton="todo"
          action={onClickButtonSaveText}
        >
          OK
        </Button>
      )}
    </div>
  );
};
