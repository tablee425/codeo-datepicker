import { all, takeLatest } from 'redux-saga/effects';

import { UserTypes } from '../user';
import { AuthTypes } from '../auth';

/* ------------- Sagas ------------- */
import {
  getUserInformation,
  updateUserInformation,
  updateAvatar,
  deleteAvatar,
  updateSampleWork,
  updateRecipient
} from './user';
import { signIn, signUp } from './auth';

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(UserTypes.GET_USER_INFORMATION, getUserInformation),
    takeLatest(UserTypes.UPDATE_USER_INFORMATION, updateUserInformation),
    takeLatest(AuthTypes.SIGN_IN, signIn),
    takeLatest(AuthTypes.SIGN_UP, signUp),
    takeLatest(UserTypes.UPDATE_AVATAR, updateAvatar),
    takeLatest(UserTypes.DELETE_USER_AVATAR, deleteAvatar),
    takeLatest(UserTypes.UPDATE_SAMPLE_WORK, updateSampleWork),
    // takeLatest(UserTypes.DELETE_SAMPLE_WORK, deleteSampleWork)
    takeLatest(UserTypes.UPDATE_RECIPIENT, updateRecipient)
  ]);
}
