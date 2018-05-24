import React from 'react';
import renderer from 'react-test-renderer';
import { Settings } from '../../../src/components';

test('<Settings />', () => {
  const tree = renderer.create(<Settings />).toJSON();
  expect(tree).toMatchSnapshot();
});
