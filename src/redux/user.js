import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setUserInformation: ['userInformation', 'token'],
  getUserInformation: ['email', 'token'],
  requestFailed: ['error'],
  clear: [],
  updateUserInformation: ['userInformation'],
  updateUserAvatar: [],
  updateAvatar: ['email', 'fileURI', 'token'],
  deleteUserAvatar: ['userInformation'],
  updateSampleWork: ['email', 'sampleWorks'],
  // deleteSampleWork: ['userInformation', 'fileUrl']
  updateRecipient: ['name', 'sortCode', 'accountNumber'],
  updateRecipientSuccess: []
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

const defaultState = {
  userInformation: null,
  fetching: false,
  error: null,
  token: null,
  uploadAvatar: false,
  uploadSampleWork: false,
};

/* ------------- Reducers ------------- */
const request = state => ({ ...state, fetching: true, error: null });
const requestUpdateUserInfo = state => ({ ...state, fetching: true });
const clear = () => ({ ...defaultState });
const failure = (state, { error }) => ({
  ...state,
  fetching: false,
  error,
  uploadAvatar: false,
  uploadSampleWork: false
});
const setUserInformation = (state, { userInformation, token }) => ({
  ...state,
  userInformation,
  fetching: false,
  error: null,
  token,
  uploadAvatar: false,
  uploadSampleWork: false
});
const uploadAvatar = state => ({ ...state, uploadAvatar: true, error: null, });
const uploadSampleWork = state => ({ ...state, uploadSampleWork: true, error: null, });
const updateRecipientSuccess = state => ({ ...state, fetching: false });

export const userReducer = createReducer(defaultState, {
  [Types.SET_USER_INFORMATION]: setUserInformation,
  [Types.GET_USER_INFORMATION]: request,
  [Types.REQUEST_FAILED]: failure,
  [Types.CLEAR]: clear,
  [Types.UPDATE_USER_INFORMATION]: requestUpdateUserInfo,
  [Types.UPDATE_AVATAR]: uploadAvatar,
  [Types.DELETE_USER_AVATAR]: request,
  [Types.UPDATE_SAMPLE_WORK]: uploadSampleWork,
  // [Types.DELETE_SAMPLE_WORK]: request
  [Types.UPDATE_RECIPIENT]: request,
  [Types.UPDATE_RECIPIENT_SUCCESS]: updateRecipientSuccess
});
