import { combineReducers } from 'redux';
import configureStore from './createStore';
import rootSaga from './sagas';
import UserActions, { userReducer as user } from './user';
import ChatActions, { chatReducer as chat } from './chat';
import AuthActions, { authReducer as auth } from './auth';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    user,
    chat,
    auth
  });
  return configureStore(rootReducer, rootSaga);
};

export {
  AuthActions,
  UserActions,
  ChatActions
};
