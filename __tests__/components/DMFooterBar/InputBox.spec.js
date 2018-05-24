import React from 'react';
import renderer from 'react-test-renderer';
import InputBox from '../../../src/components/DMFooterBar/InputBox';

test('<InputBox />', () => {
  const props = {
  };
  const tree = renderer.create(<InputBox {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
