import { useSelector } from 'react-redux';
import styles from './Information.module.css';
import { STATE_GAME } from '../../const/const';

export const Information = () => {
  const player = useSelector((state) => state.player);
  const status = useSelector((state) => state.status);
  let info = '';
  switch (status) {
    case STATE_GAME.win:
      info = `Победа игрока: ${player}`;
      break;
    case STATE_GAME.draw:
      info = `Ничья`;
      break;
    default:
      info = `Ход игрока: ${player}`;
  }
  return <div className={styles.info}>{info}</div>;
};
