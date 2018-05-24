import React from 'react';
import renderer from 'react-test-renderer';
import NotificationScreen from '../../src/containers/NotificationScreen';

test('<NotificationScreen />', () => {
  const tree = renderer.create(<NotificationScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
