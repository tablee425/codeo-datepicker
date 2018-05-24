import React from 'react';
import renderer from 'react-test-renderer';
import InboxScreen from '../../src/containers/InboxScreen';

test('<InboxScreen />', () => {
  const props = {
    navigation: {
    }
  };
  const tree = renderer.create(<InboxScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
