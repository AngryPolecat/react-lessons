export const movePlayer = (cell) => {
  return {
    type: 'MOVE',
    payload: { cell },
  };
};
