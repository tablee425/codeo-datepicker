import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import DirectMessageScreen from '../../src/containers/DirectMessageScreen';

const mockStore = configureStore();

test('<DirectMessageScreen />', () => {
  const props = {
    navigation: {
      goBack: jest.fn(),
      state: {
        params: {}
      }
    },
  };
  const tree = renderer.create(
    <Provider
      store={mockStore({
        chat: {
          height: 0
        }
      })}
    >
      <DirectMessageScreen {...props} />
    </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
