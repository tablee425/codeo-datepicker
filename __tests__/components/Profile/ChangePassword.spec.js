import React from 'react';
import renderer from 'react-test-renderer';
import { ChangePassword } from '../../../src/components';

test('<ChangePassword />', () => {
  const tree = renderer.create(<ChangePassword />).toJSON();
  expect(tree).toMatchSnapshot();
});
