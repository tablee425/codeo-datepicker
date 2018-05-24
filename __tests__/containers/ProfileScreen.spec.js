import React from 'react';
import renderer from 'react-test-renderer';
import ProfileScreen from '../../src/containers/ProfileScreen';

test('<ProfileScreen />', () => {
  const tree = renderer.create(<ProfileScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
