import React from 'react';
import renderer from 'react-test-renderer';
import XDate from 'xdate';
import CalendarHeader from '../../../../src/components/common/Calendar/calendar/header';

test('<CalendarHeader />', () => {
  const props = {
    theme: {},
    hideArrows: false,
    month: XDate.today(),
    addMonth: () => null,
    showIndicator: false,
    firstDay: 1,
    renderArrow: () => null,
    hideDayNames: true,
    weekNumbers: false
  };
  const tree = renderer.create(<CalendarHeader {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
