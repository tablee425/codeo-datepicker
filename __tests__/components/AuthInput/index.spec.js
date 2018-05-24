import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AuthInput from '../../../src/components/AuthInput';

test('<AuthInput />', () => {
  const treeJSON = renderer.create(<AuthInput
    onChangeText={() => {}}
    onSubmitEditing={() => {}}
    value=""
    label=""
    returnKeyType="next"
  />).toJSON();
  expect(treeJSON).toMatchSnapshot();
});
