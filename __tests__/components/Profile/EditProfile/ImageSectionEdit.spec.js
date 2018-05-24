import React from 'react';
import renderer from 'react-test-renderer';
import { ImageSectionEdit } from '../../../../src/components/Profile/EditProfile/ImageSectionEdit';
import { DummyProfile } from '../../../../src/constants';

test('<ImageSectionEdit />', () => {
  const props = {
    userInfo: DummyProfile.userInfo
  };
  const tree = renderer.create(<ImageSectionEdit {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
