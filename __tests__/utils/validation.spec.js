import { checkEmail, checkPass } from '../../src/utils/validation';
import { getRemainingTime } from '../../src/utils';

test('Is valid mail', () => {
  const answer = checkEmail('email@mail.com');
  expect(answer).toBeTruthy();
});

test('Is not valid mail 1', () => {
  const answer = checkEmail('emailmail.com');
  expect(answer).toBeFalsy();
});

test('Is not valid mail 2', () => {
  const answer = checkEmail('email@mail');
  expect(answer).toBeFalsy();
});

test('Is not valid mail 3', () => {
  const answer = checkEmail('email@.com');
  expect(answer).toBeFalsy();
});

test('Is not valid mail 4', () => {
  const answer = checkEmail('@email.com');
  expect(answer).toBeFalsy();
});

test('Is valid pass', () => {
  const answer = checkPass('1234567aW890.');
  expect(answer).toBeTruthy();
});

test('Is not valid pass', () => {
  const answer = checkPass('1234');
  expect(answer).toBeFalsy();
});

test('Is not valid pass 2', () => {
  const answer = checkPass('qwer');
  expect(answer).toBeFalsy();
});

test('Is not valid pass 3', () => {
  const answer = checkPass('qw12');
  expect(answer).toBeFalsy();
});

test('Is not valid pass 4', () => {
  const answer = checkPass('qwerty12');
  expect(answer).toBeFalsy();
});

test('Is not valid pass 5', () => {
  const answer = checkPass('1234567890');
  expect(answer).toBeFalsy();
});

test('Is not valid pass 6', () => {
  const answer = checkPass('qwertyuiop');
  expect(answer).toBeFalsy();
});

test('Is not valid pass 7', () => {
  const answer = checkPass('qwerty12345');
  expect(answer).toBeFalsy();
});

test('Testing getRemaining', () => {
  const date = new Date('2020/08/09 11:20');
  const answer = getRemainingTime(date);
  const getMins = getRemainingTime(date, true);
  expect(answer).toBeDefined();
  expect(getMins).toBeDefined();
});
