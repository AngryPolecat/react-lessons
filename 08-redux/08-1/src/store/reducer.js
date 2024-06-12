const INITIAL_VALUE = Array(9).fill('');

export const reducer = (state = INITIAL_VALUE, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'RESET':
      return Array(9).fill('');
    case 'MOVE':
      const { cell, player } = payload;
      state.splice(cell, 1, player);
      return state;
    default:
      return state;
  }
};
