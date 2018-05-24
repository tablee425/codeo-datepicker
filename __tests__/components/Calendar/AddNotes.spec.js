import React from 'react';
import renderer from 'react-test-renderer';
import { AddNotes } from '../../../src/components/Calendar/JobDetails/AddNotes';

test('<AddNotes />', () => {
  const props = {
    hideNote: () => null,
    isShowNote: true
  };
  const tree = renderer.create(<AddNotes {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
