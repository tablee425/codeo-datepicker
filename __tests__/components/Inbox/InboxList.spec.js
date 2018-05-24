import React from 'react';
import renderer from 'react-test-renderer';
import { InboxList } from '../../../src/components';

test('<InboxList />', () => {
  const props = {
    navigation: {
      navigate: jest.fn()
    }
  };
  const tree = renderer.create(<InboxList {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
