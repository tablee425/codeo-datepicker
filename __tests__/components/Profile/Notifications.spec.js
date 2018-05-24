import React from 'react';
import renderer from 'react-test-renderer';
import { Notifications } from '../../../src/components';

test('<Notifications />', () => {
  const tree = renderer.create(<Notifications />).toJSON();
  expect(tree).toMatchSnapshot();
});
