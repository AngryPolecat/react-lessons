import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { todosReducer } from './todos-reducer';
import { optionsReducer } from './options-reducer';

const reducer = combineReducers({
  todosState: todosReducer,
  optionsState: optionsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
