import React from 'react';
import renderer from 'react-test-renderer';
import Day from '../../../../src/components/common/Calendar/calendar/day/basic';

test('<Day />', () => {
  const props = {
    theme: {},
    state: '',
    marking: {},
    onPress: () => null,
    date: new Date(),
    isBlocked: false,
    appointSize: -1
  };
  const tree = renderer.create(<Day {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
