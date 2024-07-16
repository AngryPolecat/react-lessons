import { ROLE } from '../const';

const initialUserState = {
  id: null,
  login: null,
  roleId: ROLE.GUEST,
  session: null,
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
