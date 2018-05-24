import React from 'react';
import renderer from 'react-test-renderer';
import { UserInfo } from '../../../src/components/Profile/MainProfile/UserInfo';

test('<UserInfo />', () => {
  const props = {
    user: {
      profile_backImg: require('../../../src/assets/img_profile_back.png'),
      profileImg: require('../../../src/assets/img_profile.png'),
      name: 'Robert Boud'
    }
  };
  const tree = renderer.create(<UserInfo {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
