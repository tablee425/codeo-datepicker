import React from 'react';
import renderer from 'react-test-renderer';
import { UserInfoEdit } from '../../../../src/components/Profile/EditProfile/UserInfoEdit';
import { DummyProfile } from '../../../../src/constants';

test('<UserInfoEdit />', () => {
  const props = {
    userInfo: DummyProfile.userInfo
  };
  const tree = renderer.create(<UserInfoEdit {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
