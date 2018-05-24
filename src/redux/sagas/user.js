import { call, put } from 'redux-saga/effects';
import {
  getUserInfo,
  updateUserInfo,
  uploadImage,
  deleteImage,
  uploadImages,
  changeRecipient
} from '../../service/api';
import { UserActions } from '../';

export function* getUserInformation({ email, token }) {
  try {
    const ret = yield call(getUserInfo, email, token);
    if (ret && ret.success) {
      yield put(UserActions.setUserInformation(ret.userInfo, token));
    } else {
      yield put(UserActions.requestFailed('Failure Get Profile Info'));
    }
  } catch (err) {
    yield put(UserActions.requestFailed('Failure Get Profile Info'));
  }
}

export function* updateUserInformation({ userInformation }) {
  try {
    const ret = yield call(updateUserInfo, userInformation);
    if (ret && ret.success) {
      yield put(UserActions.setUserInformation(userInformation));
    } else {
      yield put(UserActions.requestFailed('Failure Update User Info'));
    }
  } catch (err) {
    yield put(UserActions.requestFailed('Failure Update User Info'));
  }
}

export function* updateAvatar({ email, fileURI, token }) {
  try {
    const ret = yield call(uploadImage, email, fileURI, token);
    if (ret) {
      yield call(getUserInformation, { email, token });
    } else {
      yield put(UserActions.requestFailed('Failure Update User Avatar'));
    }
  } catch (err) {
    yield put(UserActions.requestFailed('Failure Update User Avatar'));
  }
}

export function* deleteAvatar({ userInformation }) {
  try {
    const ret =
      yield call(deleteImage, userInformation.emailAddress, userInformation.profileImageUrl);
    if (ret.success) {
      const updatedUserInfo = { ...userInformation, profileImageUrl: null };
      yield call(updateUserInformation, { userInformation: updatedUserInfo });
    } else {
      yield put(UserActions.requestFailed('Failure Delete User Avatar'));
    }
  } catch (err) {
    yield put(UserActions.requestFailed('Failure Delete User Avatar'));
  }
}

export function* updateSampleWork({ email, sampleWorks }) {
  const filteredWorks = sampleWorks ?
    sampleWorks.filter(item => !!item) : null;
    // sampleWorks.filter(item => !!item && (item.fileUrl.indexOf('http') === -1)) : null;
  try {
    if (!filteredWorks.length) {
      yield call(getUserInformation, { email, token: null });
    } else {
      const ret = yield call(uploadImages, email, filteredWorks);
      if (ret) {
        yield call(getUserInformation, { email, token: null });
      } else {
        yield put(UserActions.requestFailed('Failure Update Sample Work'));
      }
    }
  } catch (err) {
    yield put(UserActions.requestFailed('Failure Update Sample Work'));
  }
}

// export function* deleteSampleWork({ userInformation, fileUrl }) {
//   try {
//     const ret =
//       yield call(deleteImage, userInformation.emailAddress, fileUrl);
//     if (ret.success) {
//       const updatedUserInfo = { ...userInformation, profileImageUrl: null };
//       yield call(updateUserInformation, { userInformation: updatedUserInfo });
//     } else {
//       yield put(UserActions.requestFailed('Failure Delete User Avatar'));
//     }
//   } catch (err) {
//     yield put(UserActions.requestFailed('Failure Delete Sample Work'));
//   }
// }
export function* updateRecipient({ name, sortCode, accountNumber }) {
  try {
    const ret = yield call(changeRecipient, name, accountNumber, sortCode);
    if (ret && ret.success) {
      yield put(UserActions.updateRecipientSuccess());
    } else {
      yield put(UserActions.requestFailed('Failure Update Recipient'));
    }
  } catch (err) {
    yield put(UserActions.requestFailed('Failure Update Recipient'));
  }
}
