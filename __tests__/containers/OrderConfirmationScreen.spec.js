import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OrderConfirmationScreen from '../../src/containers/OrderConfirmationScreen';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  navigation: {
    state: {
      params: {
        item: {
          date: {}
        }
      }
    }
  }
};
const orderConfirmation = Enzyme.shallow(<OrderConfirmationScreen {...props} />);

test('<OrderConfirmationScreen />', () => {
  const props = {
    navigation: {
      state: {
        params: {
          item: {
            date: {}
          }
        }
      }
    }
  };
  const tree = renderer.create(<OrderConfirmationScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Testing onStartTimer', () => {
  jest.useFakeTimers();
  orderConfirmation.instance().onStartTimer();
  expect(setInterval.mock.calls[0][1]).toBe(1000 * 60);
});
