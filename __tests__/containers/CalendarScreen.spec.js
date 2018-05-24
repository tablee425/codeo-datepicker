import React from 'react';
import renderer from 'react-test-renderer';
import CalendarScreen from '../../src/containers/CalendarScreen';

test('<CalendarScreen />', () => {
  const tree = renderer.create(<CalendarScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
