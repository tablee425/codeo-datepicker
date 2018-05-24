import React from 'react';
import renderer from 'react-test-renderer';
import {
  MainNavBar,
  ProfileSubNavBar,
  EditProfileNavBar,
  JobDetailsNavBar,
  CalendarNavBar,
  OrderConfirmNavBar
} from '../../../src/components';

test('<MainNavBar />', () => {
  const tree = renderer.create(<MainNavBar />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('<ProfileSubNavBar />', () => {
  const props = {
    title: '',
    onPressBack: () => null
  };
  const tree = renderer.create(<ProfileSubNavBar {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('<EditProfileNavBar />', () => {
  const props = {
    title: '',
    onSave: () => null,
    onClose: () => null
  };
  const tree = renderer.create(<EditProfileNavBar {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('<CalendarNavBar />', () => {
  const props = {
    title: '',
    isShowBackIcon: true,
    onPressBack: () => null,
  };
  const tree = renderer.create(<CalendarNavBar {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('<JobDetailsNavBar />', () => {
  const props = {
    onAddNote: () => null,
    onClose: () => null
  };
  const tree = renderer.create(<JobDetailsNavBar {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('<OrderConfirmNavBar />', () => {
  const props = {
    onBack: () => null
  };
  const tree = renderer.create(<OrderConfirmNavBar {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
