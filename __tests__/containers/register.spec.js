import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Register from '../../src/containers/register';

Enzyme.configure({ adapter: new Adapter() });

const login = Enzyme.shallow(<Register />);

test('<Register />', () => {
  const treeJSON = renderer.create(<Register />).toJSON();
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

test('Testing pass', () => {
  login.setState({ pass: '123456aW.', confirmPass: '123456aW.' });
  expect(login.instance().validatePass()).toBeTruthy();
});

test('Testing not pass', () => {
  login.setState({ pass: '1234' });
  expect(login.instance().validatePass()).toBeFalsy();
});

test('Testing not pass 1', () => {
  login.setState({ pass: 'qwer' });
  expect(login.instance().validatePass()).toBeFalsy();
});

test('Testing not pass 2', () => {
  login.setState({ pass: 'qw12' });
  expect(login.instance().validatePass()).toBeFalsy();
});

test('Testing not pass 3', () => {
  login.setState({ pass: 'qwertyuiop', confirmPass: 'qwertyuiop' });
  expect(login.instance().validatePass()).toBeFalsy();
});

test('Testing not pass 4', () => {
  login.setState({ pass: 'qwer1234', confirmPass: 'qwer1234' });
  expect(login.instance().validatePass()).toBeFalsy();
});

test('Testing not equal pass', () => {
  login.setState({ pass: 'qwertyuiop', confirmPass: 'qwer1234' });
  expect(login.instance().validatePass()).toBeFalsy();
});

test('Testing email form validation', () => {
  login.setState({ login: 'test@test.com' });
  expect(login.instance().formCheckEmail()).toBeTruthy();
});

test('Testing not email form validation', () => {
  login.setState({ login: 'emailmail.com' });
  expect(login.instance().formCheckEmail()).toBeFalsy();
});

test('Testing not email 1 form validation', () => {
  login.setState({ login: 'email@mail' });
  expect(login.instance().formCheckEmail()).toBeFalsy();
});

test('Testing not email 2 form validation', () => {
  login.setState({ login: 'email@.com' });
  expect(login.instance().formCheckEmail()).toBeFalsy();
});

test('Testing not email 3 form validation', () => {
  login.setState({ login: '@email.com' });
  expect(login.instance().formCheckEmail()).toBeFalsy();
});

test('Testing pass form validation', () => {
  login.setState({ pass: '123456aW.', confirmPass: '123456aW.' });
  expect(login.instance().formCheckPass()).toBeTruthy();
});

test('Testing not pass form validation', () => {
  login.setState({ pass: '1234' });
  expect(login.instance().formCheckPass()).toBeFalsy();
});

test('Testing not pass 1 form validation', () => {
  login.setState({ pass: 'qwer' });
  expect(login.instance().formCheckPass()).toBeFalsy();
});

test('Testing not pass 2 form validation', () => {
  login.setState({ pass: 'qw12' });
  expect(login.instance().formCheckPass()).toBeFalsy();
});

test('Testing not pass 3 form validation', () => {
  login.setState({ pass: 'qwertyuiop', confirmPass: 'qwertyuiop' });
  expect(login.instance().formCheckPass()).toBeFalsy();
});

test('Testing not pass 4 form validation', () => {
  login.setState({ pass: 'qwer1234', confirmPass: 'qwer1234' });
  expect(login.instance().formCheckPass()).toBeFalsy();
});
