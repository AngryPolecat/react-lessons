export const changeStatusGame = (status) => {
  return {
    type: 'CHANGE_STATUS',
    payload: { status },
  };
};
