import { store } from '../../store/store';
import styles from './Field.module.css';
import { WIN_PATTERNS } from '../../const/const';

export const Field = () => {
  const { field, player, status } = store.getState();

  const checkResult = () => {
    const currentField = store.getState().field;
    const win = WIN_PATTERNS.map((pattern) => {
      return pattern.every((position) => currentField.at(position) === player);
    }).some((result) => result === true);
    if (win) {
      store.dispatch({ type: 'WIN' });
    } else {
      const draw = currentField.includes('');
      if (!draw) {
        store.dispatch({ type: 'DRAW' });
      } else {
        store.dispatch({ type: 'CHANGE_PLAYER' });
      }
    }
  };

  const handlerMovePlayer = ({ target }) => {
    const cell = target.dataset.id;
    const statusCell = field.at(cell);
    if (!statusCell && status === 'game') {
      store.dispatch({ type: 'MOVE', payload: { cell } });
      checkResult();
    }
  };

  return (
    <div className={styles.field}>
      {field.map((cell, idx) => (
        <div
          className={`${styles.cell} ${cell ? styles.disabled : false}`}
          key={idx}
          data-id={idx}
          onClick={handlerMovePlayer}
        >
          {cell}
        </div>
      ))}
    </div>
  );
};
