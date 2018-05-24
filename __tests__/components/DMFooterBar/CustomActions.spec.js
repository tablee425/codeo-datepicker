import React from 'react';
import renderer from 'react-test-renderer';
import CustomActions from '../../../src/components/DMFooterBar/CustomActions';

test('<CustomActions />', () => {
  const props = {
    icon: null,
    onSend: jest.fn(),
    messageText: ''
  };
  const tree = renderer.create(<CustomActions {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
