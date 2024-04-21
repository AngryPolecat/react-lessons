import { useState } from 'react';
import { AppLayout } from './AppLayout';

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Варианты побед по горизонтали
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Варианты побед по вертикали
  [0, 4, 8],
  [2, 4, 6], // Варианты побед по диагонали
];

export const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

  const handledResetButton = () => {
    setField(['', '', '', '', '', '', '', '', '']);
    setIsGameEnded(false);
    setIsDraw(false);
    setCurrentPlayer('X');
  };

  const checkResult = () => {
    const win = WIN_PATTERNS.map((pattern) => {
      return pattern.every((position) => field[position] === currentPlayer);
    }).some((result) => result === true);
    if (win) {
      setIsGameEnded(true);
    } else {
      if (!field.includes('')) {
        setIsDraw(true);
      } else {
        currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
      }
    }
  };

  const handledPlayerMove = ({ target }) => {
    const idxCell = target.dataset.key;
    if (!field[idxCell]) {
      const currentField = field;
      currentField[idxCell] = currentPlayer;
      setField(currentField);
      checkResult();
    }
  };

  return (
    <AppLayout
      cells={field}
      reset={handledResetButton}
      move={handledPlayerMove}
      player={currentPlayer}
      end={isGameEnded}
      draw={isDraw}
    />
  );
};
