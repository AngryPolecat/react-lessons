import PropTypes from 'prop-types';
import styles from './Field.module.css';

export const FieldLayout = ({ cells, move }) => {
  return (
    <div className={styles.field}>
      {cells.map((cell, idx) => {
        return (
          <div
            className={`${styles.cell} ${cell ? styles.disabled : false}`}
            key={idx}
            onClick={move}
            data-key={idx}
          >
            {cell}
          </div>
        );
      })}
    </div>
  );
};

FieldLayout.propTypes = {
  cells: PropTypes.array,
  move: PropTypes.func,
};
