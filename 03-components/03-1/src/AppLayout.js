import PropTypes from 'prop-types';
import styles from './App.module.css';
import { Information } from './components/information/Information';
import { Field } from './components/field/Field';

export const AppLayout = ({ cells, reset, move, player, end, draw }) => {
  return (
    <div className={styles.app}>
      <Information player={player} end={end} draw={draw} />
      <Field cells={cells} move={move} player={player} />
      <button onClick={reset}>Начать заново</button>
    </div>
  );
};

AppLayout.propTypes = {
  cells: PropTypes.array,
  reset: PropTypes.func,
  move: PropTypes.func,
  player: PropTypes.string,
  end: PropTypes.bool,
  draw: PropTypes.bool,
};
