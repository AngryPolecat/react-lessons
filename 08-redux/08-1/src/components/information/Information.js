import { store } from '../../store/store';
import styles from './Information.module.css';

export const Information = () => {
  const { player, status } = store.getState();
  let info = '';
  switch (status) {
    case 'win':
      info = `Победа игрока: ${player}`;
      break;
    case 'draw':
      info = `Ничья`;
      break;
    default:
      info = `Ход игрока: ${player}`;
  }
  return <div className={styles.info}>{info}</div>;
};
