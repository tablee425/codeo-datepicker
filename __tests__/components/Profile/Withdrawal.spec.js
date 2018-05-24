import React from 'react';
import renderer from 'react-test-renderer';
import { Withdrawal } from '../../../src/components';

test('<Withdrawal />', () => {
  const tree = renderer.create(<Withdrawal />).toJSON();
  expect(tree).toMatchSnapshot();
});
