import { useSelector, useDispatch } from 'react-redux';
import styles from './Field.module.css';
import { CHANGE_PLAYER, STATE_GAME } from '../../const/const';
import { movePlayer, changeStatusGame } from '../../actions';
import { checkResult } from '../../utils/check';

export const Field = () => {
  const field = useSelector((state) => state.field);
  const player = useSelector((state) => state.player);
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  const handlerMovePlayer = ({ target }) => {
    const cell = target.dataset.id;
    const statusCell = field.at(cell);
    if (!statusCell && status === STATE_GAME.game) {
      dispatch(movePlayer(cell));
      const newField = [...field];
      newField[cell] = player;
      const resultGame = checkResult(newField, player);
      if (resultGame === STATE_GAME.game) {
        dispatch(CHANGE_PLAYER);
      } else {
        dispatch(changeStatusGame(resultGame));
      }
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
