import React from 'react';
import renderer from 'react-test-renderer';
import { Availability } from '../../../../src/components/Calendar/DailyCalendar/Availability';

test('<Availability />', () => {
  const props = {
    onBlock: () => null,
    onUpdate: () => null,
    selectedJob: {
      item: null
    }
  };
  const tree = renderer.create(<Availability {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
