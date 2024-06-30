export const INITIAL_TODOS = {
  todos: [],
};

export const INITIAL_LOADER = { loader: false };

export const PROCESS_LOAD_DATA_START = {
  type: 'TOGGLE_LOAD',
  payload: true,
};

export const PROCESS_LOAD_DATA_END = {
  type: 'TOGGLE_LOAD',
  payload: false,
};
