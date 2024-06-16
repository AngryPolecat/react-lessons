import { store } from '../../store/store';
import styles from './Field.module.css';

export const Field = ({ onClickCell }) => {
  const cells = store.getState();

  return (
    <div className={styles.field}>
      {cells.map((cell, idx) => (
        <div
          className={`${styles.cell} ${cell ? styles.disabled : false}`}
          key={idx}
          onClick={onClickCell}
          data-id={idx}
        >
          {cell}
        </div>
      ))}
    </div>
  );
};
