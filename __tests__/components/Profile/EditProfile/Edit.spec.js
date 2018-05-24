import React from 'react';
import renderer from 'react-test-renderer';
import { EditProfile } from '../../../../src/components';

test('<EditProfile />', () => {
  const tree = renderer.create(<EditProfile />).toJSON();
  expect(tree).toMatchSnapshot();
});
