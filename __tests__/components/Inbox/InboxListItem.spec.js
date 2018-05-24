import React from 'react';
import renderer from 'react-test-renderer';
import { InboxListItem } from '../../../src/components';

test('<InboxListItem />', () => {
  const props = {
    onPress: jest.fn(),
    message: {
      userId: 0,
      name: '',
      lastName: '',
      headDate: '',
      message: '',
      mainDate: '',
      avatar: ''
    }
  };
  const tree = renderer.create(<InboxListItem {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
