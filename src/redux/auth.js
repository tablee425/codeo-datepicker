import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  // Sign In Actions
  signIn: ['email', 'password'],
  signOut: [],
  signUp: ['email', 'firstName', 'lastName', 'password'],
  signInSuccess: ['token'],
  signUpSuccess: ['token'],
  requestFailed: ['error'],
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

const defaultState = {
  fetchSignRequest: false,
  error: null,
  token: null,
};

/* ------------- Reducers ------------- */
const request = state => ({ ...state, fetchSignRequest: true });
const requestSignUp = state => ({ ...state, fetchSignRequest: true });
const failure = (state, { error }) => ({ ...state, fetchSignRequest: false, error });
const signInSuccess = (state, { token }) => ({
  ...state, fetchSignRequest: false, error: null, token,
});
const signUpSuccess = (state, { token }) => ({
  ...state, fetchSignRequest: false, error: null, token,
});
const signOut = state => ({ ...state, error: null, token: null });

/* ------------- Hookup Reducers To Types ------------- */
export const authReducer = createReducer(defaultState, {
  [Types.SIGN_IN]: request,
  [Types.SIGN_OUT]: signOut,
  [Types.SIGN_UP]: requestSignUp,
  [Types.REQUEST_FAILED]: failure,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_UP_SUCCESS]: signUpSuccess,
});
