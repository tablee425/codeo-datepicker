import React from 'react';
import renderer from 'react-test-renderer';
import { MainProfile } from '../../../src/components';

test('<MainProfile />', () => {
  const tree = renderer.create(<MainProfile />).toJSON();
  expect(tree).toMatchSnapshot();
});
