import { WIN_PATTERNS, STATE_GAME } from '../const/const';

export const checkResult = (newField, player) => {
  const win = WIN_PATTERNS.map((pattern) => {
    return pattern.every((position) => newField.at(position) === player);
  }).some((result) => result === true);
  if (win) {
    return STATE_GAME.win;
  } else {
    const draw = newField.includes('');
    if (!draw) {
      return STATE_GAME.draw;
    } else {
      return STATE_GAME.game;
    }
  }
};
