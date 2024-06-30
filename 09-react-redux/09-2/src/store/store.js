import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { todosReducer } from './todos-reducer';
import { loaderReducer } from './loader-reducer';

const reducer = combineReducers({
  todosState: todosReducer,
  loaderState: loaderReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
