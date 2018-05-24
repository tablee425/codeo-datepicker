import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MessageVideo from '../../../src/components/MessageBubble/MessageVideo';

test('<MessageVideo />', () => {
  const props = {
    currentMessage: {
      video: ''
    },
    containerStyle: null,
    videoProps: {}
  };
  const treeJSON = renderer.create(<MessageVideo {...props} />).toJSON();
  expect(treeJSON).toMatchSnapshot();
});
