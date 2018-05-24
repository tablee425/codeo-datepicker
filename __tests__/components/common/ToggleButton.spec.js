import React from 'react';
import renderer from 'react-test-renderer';
import { ToggleButton } from '../../../src/components';

test('<ToggleButton />', () => {
  const props = {
    isEnabled: true,
    onChange: () => null
  };
  const tree = renderer.create(<ToggleButton {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
