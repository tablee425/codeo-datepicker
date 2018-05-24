import React from 'react';
import renderer from 'react-test-renderer';
import { Calendar } from '../../../../src/components';

test('<Calendar />', () => {
  const props = {
    theme: {},
    markedDates: null,
    style: {},
    current: null,
    minDate: new Date(),
    maxDate: new Date(),
    firstDay: 1,
    markingType: '',
    hideArrows: false,
    displayLoadingIndicator: false,
    hideExtraDays: true,
    onDayPress: () => null,
    onMonthChange: () => null,
    onVisibleMonthsChange: () => null,
    renderArrow: () => null,
    dayComponent: null,
    monthFormat: '',
    disableMonthChange: false,
    hideDayNames: true,
    disabledByDefault: false,
    showWeekNumbers: false,
    appointDates: null,
    blockedDates: null
  };
  const tree = renderer.create(<Calendar {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
