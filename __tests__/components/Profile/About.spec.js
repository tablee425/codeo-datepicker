import React from 'react';
import renderer from 'react-test-renderer';
import { About } from '../../../src/components';

test('<About />', () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});
