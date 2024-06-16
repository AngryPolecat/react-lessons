import { INITIAL_STATE } from '../const/const';

export const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'RESET':
      return { ...INITIAL_STATE };
    case 'MOVE':
      const { cell } = payload;
      const field = [...state.field];
      field.splice(cell, 1, state.player);
      return {
        ...state,
        field,
      };
    case 'CHANGE_PLAYER':
      return { ...state, player: state.player === 'X' ? 'O' : 'X' };
    case 'WIN':
      return { ...state, status: 'win' };
    case 'DRAW':
      return { ...state, status: 'draw' };
    default:
      return { ...state };
  }
};
