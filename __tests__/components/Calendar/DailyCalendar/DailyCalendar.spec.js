import React from 'react';
import renderer from 'react-test-renderer';
import { DailyCalendar } from '../../../../src/components';

test('<DailyCalendar />', () => {
  const props = {
    navigation: {
      state: {
        params: {
          date: {
            dateString: ''
          }
        }
      },
      goBack: () => null
    }
  };
  const tree = renderer.create(<DailyCalendar {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
