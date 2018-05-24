import React from 'react';
import renderer from 'react-test-renderer';
import { Document } from '../../../src/components';

test('<Document />', () => {
  const tree = renderer.create(<Document />).toJSON();
  expect(tree).toMatchSnapshot();
});
