import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { Hebrew } from './src/app';
// import configureStore from './configureStore';
import createStore from './src/redux';

const store = createStore();

const RNRedux = () => (
  <Provider store={store}>
    <Hebrew />
  </Provider>
);

AppRegistry.registerComponent('Hebrew', () => RNRedux);
