import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ForgotPass from '../../src/containers/forgotPass';

Enzyme.configure({ adapter: new Adapter() });

const login = Enzyme.shallow(<ForgotPass />);

test('<ForgotPass />', () => {
  const treeJSON = renderer.create(<ForgotPass />).toJSON();
  expect(treeJSON).toMatchSnapshot();
});

test('Testing email', () => {
  login.setState({ login: 'test@test.com' });
  expect(login.instance().validateEmail()).toBeTruthy();
});

test('Testing not email', () => {
  login.setState({ login: 'emailmail.com' });
  expect(login.instance().validateEmail()).toBeFalsy();
});

test('Testing not email 1', () => {
  login.setState({ login: 'email@mail' });
  expect(login.instance().validateEmail()).toBeFalsy();
});

test('Testing not email 2', () => {
  login.setState({ login: 'email@.com' });
  expect(login.instance().validateEmail()).toBeFalsy();
});

test('Testing not email 3', () => {
  login.setState({ login: '@email.com' });
  expect(login.instance().validateEmail()).toBeFalsy();
});

test('Testing form button', () => {
  login.setState({ login: 'test@test.com' });
  expect(login.instance().formCheckEmail()).toBeTruthy();
});

test('Testing form button 1', () => {
  login.setState({ login: 'emailmail.com' });
  expect(login.instance().formCheckEmail()).toBeFalsy();
});

test('Testing form button 2', () => {
  login.setState({ login: 'email@mail' });
  expect(login.instance().formCheckEmail()).toBeFalsy();
});

test('Testing form button 3', () => {
  login.setState({ login: 'email@.com' });
  expect(login.instance().formCheckEmail()).toBeFalsy();
});

test('Testing form button 4', () => {
  login.setState({ login: '@email.com' });
  expect(login.instance().formCheckEmail()).toBeFalsy();
});
