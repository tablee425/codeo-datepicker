import React from 'react';
import renderer from 'react-test-renderer';
import { MainCalendar } from '../../../src/components';

test('<MainCalendar />', () => {
  const tree = renderer.create(<MainCalendar />).toJSON();
  expect(tree).toMatchSnapshot();
});
