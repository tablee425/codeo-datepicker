import { call, put } from 'redux-saga/effects';
import { login, register } from '../../service/api';
import { AuthActions, UserActions } from '../';
import { getUserInformation } from './user';

export function* signIn({ email, password }) {
  try {
    // yield call(signOut);
    const ret = yield call(login, email, password);
    if (ret && ret.jwt) {
      yield call(getUserInformation, { email, token: ret.jwt });
      yield put(AuthActions.signInSuccess(ret.jwt));
    } else {
      yield put(AuthActions.requestFailed('Wrong Login information'));
    }
  } catch (err) {
    yield put(AuthActions.requestFailed('Wrong Login information'));
  }
}

export function* signUp({
  email, firstName, lastName, password
}) {
  try {
    const ret = yield call(register, email, firstName, lastName, password);
    if (ret && ret.success && ret.jwt) {
      yield put(AuthActions.signUpSuccess(ret.jwt));
      yield put(UserActions.setUserInformation({ ...ret.response }, ret.jwt));
    } else {
      yield put(AuthActions.requestFailed('Failure SignUp..'));
    }
  } catch (err) {
    yield put(AuthActions.requestFailed('Failure SignUp..'));
  }
}
