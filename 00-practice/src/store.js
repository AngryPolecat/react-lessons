import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { postReducer, postsReducer, userReducer, usersReducer } from './reducers';
import { thunk } from 'redux-thunk';

const reducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  post: postReducer,
  posts: postsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
