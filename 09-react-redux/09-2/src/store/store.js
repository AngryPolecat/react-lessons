import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { todosReducer } from './todos-reducer';
//import { loaderReducer } from './loader-reducer';
//import { reducerTitle } from './reducer-title';
//import { reducerCompleted } from './reducer-competed';

const reducer = combineReducers({
  todosState: todosReducer,
  //loaderState: loaderReducer,
  //titleState: reducerTitle,
  //completedState: reducerCompleted,
});

export const store = createStore(reducer, applyMiddleware(thunk));
