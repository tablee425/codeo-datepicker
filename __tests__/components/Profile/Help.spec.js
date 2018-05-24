import React from 'react';
import renderer from 'react-test-renderer';
import { Help } from '../../../src/components';

test('<Help />', () => {
  const tree = renderer.create(<Help />).toJSON();
  expect(tree).toMatchSnapshot();
});
