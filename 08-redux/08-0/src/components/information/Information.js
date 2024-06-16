import styles from './Information.module.css';

export const Information = ({ player, isGameEnded, isDraw }) => {
  let info = '';
  if (isGameEnded || isDraw) {
    info = isDraw ? 'Ничья' : `Победа игрока ${player}`;
  } else {
    info = `Ход игрока: ${player}`;
  }
  return <div className={styles.info}>{info}</div>;
};
