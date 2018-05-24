import { createStore } from 'redux';
import rootReducer from './src/reducers';

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
