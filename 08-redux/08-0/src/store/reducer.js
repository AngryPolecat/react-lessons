const INITIAL_VALUE = { id: 1, name: 'Vitaly', city: 'Kemerovo', age: 44 };

export const reducer = (state = INITIAL_VALUE, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_AGE_PERSON':
      const { age } = payload;
      return {
        ...state,
        age,
      };
    case 'CHANGE_NAME_PERSON':
      const { name, id } = payload;
      return { ...state, name, id };
    default:
      return state;
  }
};
