import { useState } from 'react';
import { store } from './store/store';
import { Information } from './components/information/Information';
import { Field } from './components/field/Field';
import styles from './App.module.css';
import { WIN_PATTERNS } from './const/const';

export const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  const handlerResetButton = () => {
    setIsGameEnded(false);
    setIsDraw(false);
    setCurrentPlayer('X');
    store.dispatch({ type: 'RESET' });
  };

  const checkResult = () => {
    const win = WIN_PATTERNS.map((pattern) => {
      return pattern.every(
        (position) => store.getState().at(position) === currentPlayer
      );
    }).some((result) => result === true);
    if (win) {
      setIsGameEnded(true);
    } else {
      const draw = store.getState().includes('');
      if (!draw) {
        setIsDraw(true);
      } else {
        currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
      }
    }
  };

  const handlerPlayerMove = ({ target }) => {
    const cell = target.dataset.id;
    const valueCell = store.getState().at(cell);
    if (!valueCell) {
      store.dispatch({
        type: 'MOVE',
        payload: { cell, player: currentPlayer },
      });
      checkResult();
    }
  };

  return (
    <div className={styles.app}>
      <Information
        player={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field onClickCell={handlerPlayerMove} />
      <button onClick={handlerResetButton}>Начать заново</button>
    </div>
  );
};
