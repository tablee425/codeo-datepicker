import React from 'react';
import renderer from 'react-test-renderer';
import { JobDetails } from '../../../src/components';

test('<JobDetails />', () => {
  const tree = renderer.create(<JobDetails />).toJSON();
  expect(tree).toMatchSnapshot();
});
