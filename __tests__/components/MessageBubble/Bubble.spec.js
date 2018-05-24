import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Bubble from '../../../src/components/MessageBubble';

test('<Bubble />', () => {
  const props = {
    touchableProps: {},
    onLongPress: null,
    renderMessageImage: null,
    renderMessageText: null,
    renderCustomView: null,
    renderTime: null,
    position: 'left',
    currentMessage: {
      text: null,
      createdAt: null,
      image: null,
      user: {
        _id: 1,
        avatar: 'http://i.pravatar.cc/200'
      }
    },
    nextMessage: {},
    previousMessage: {},
    containerStyle: {},
    wrapperStyle: {},
    bottomContainerStyle: {},
    tickStyle: {},
    containerToNextStyle: {},
    containerToPreviousStyle: {},
    user: {
      _id: 1,
      avatar: 'http://i.pravatar.cc/200'
    }
  };
  const treeJSON = renderer.create(<Bubble {...props} />).toJSON();
  expect(treeJSON).toMatchSnapshot();
});
