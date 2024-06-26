export const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Варианты побед по горизонтали
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Варианты побед по вертикали
  [0, 4, 8],
  [2, 4, 6], // Варианты побед по диагонали
];

export const STATE_GAME = {
  win: 'WIN',
  draw: 'DRAW',
  game: 'GAME',
};

export const PLAYERS = {
  naughts: 'O',
  crosses: 'X',
};

export const INITIAL_STATE = {
  field: Array(9).fill(''),
  player: PLAYERS.crosses,
  status: STATE_GAME.game,
};

export const CHANGE_PLAYER = {
  type: 'CHANGE_PLAYER',
};

export const RESET = {
  type: 'RESET',
};
