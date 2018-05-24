import { Platform } from 'react-native';
import { apiModels } from './apiModels';
import AppConfig from './../config/appConfig';

const { API_URL } = AppConfig;
let apiToken = null;

export function setToken(_apiToken) {
  apiToken = _apiToken;
}

export async function login(email, password) {
  // const params = {
  //   username: 'test@gmail.com',
  //   password: '123asdA.'
  // };
  const params = { email, password };
  const ret = await apiModels('user/login', 'POST', params, '');
  console.info('ret', ret);
  if (ret.success) {
    setToken(ret.jwt);
  }
  return ret;
}

export async function register(email, firstName, lastName, password) {
  const params = {
    email, firstName, lastName, password
  };
  const ret = await apiModels('user/signup', 'POST', params, '');
  if (ret && ret.success && ret.jwt) {
    setToken(ret.jwt);
  }
  return ret;
}

export async function getUserInfo(email, token = null) {
  if (token) {
    setToken(token);
  }
  const ret = await apiModels(`account/profileByEmail?email=${email}`, 'GET', '', apiToken);
  if (ret && !ret.error) {
    return ({ userInfo: { ...ret.response }, success: true });
  }
  return ({ userInfo: null, success: false });
}

export async function updateUserInfo(userInfo) {
  const params = { ...userInfo };
  const ret = await apiModels('account/updateProfile', 'POST', params, apiToken);
  return ret;
}

export async function uploadFile(email, fileURI) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line
    if (!XMLHttpRequest) {
      resolve();
    }
    const data = new FormData();
    // eslint-disable-next-line
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${API_URL}/storage/uploadFile`);
    xhr.setRequestHeader('Authorization', `Bearer ${apiToken}`);
    xhr.onerror = () => {
      reject();
    };
    data.append('email', email);
    data.append('file', {
      uri: `${Platform.OS === 'android' ? 'file://' : ''}${fileURI}`,
      name: 'image.jpg',
      type: 'multipart/form-data'
    });
    xhr.onreadystatechange = () => {
      // eslint-disable-next-line
      if (xhr.readyState !== XMLHttpRequest.DONE) {
        return;
      }
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      }
    };
    xhr.send(data);
  });
}

export async function uploadFiles(email, fileURIs) {
  console.info('email', email);
  console.info('fileURIs', fileURIs);
  debugger;
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line
    if (!XMLHttpRequest) {
      resolve();
    }
    const data = new FormData();
    // eslint-disable-next-line
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${API_URL}/storage/uploadFiles`);
    xhr.setRequestHeader('Authorization', `Bearer ${apiToken}`);
    xhr.onerror = (err) => {
      console.info('err', err);
      debugger;
      reject();
    };
    data.append('email', email);
    console.info('data1', data);
    fileURIs.forEach((fileURI) => {
      data.append('files', {
        uri: `${Platform.OS === 'android' ? 'file://' : ''}${fileURI.fileUrl}`,
        name: 'image.jpg',
        type: 'multipart/form-data'
      });
    });
    console.info('data2', data);
    debugger;
    xhr.onreadystatechange = () => {
      // eslint-disable-next-line
      if (xhr.readyState !== XMLHttpRequest.DONE) {
        debugger;
        return;
      }
      if (xhr.status === 200) {
        debugger;
        resolve(xhr.responseText);
      }
    };
    xhr.send(data);
  });
}

export async function uploadImage(email, fileURI, token) {
  if (token) {
    setToken(token);
  }
  const ret = await uploadFile(email, fileURI);
  return ret;
}

export async function uploadImages(email, fileURIs) {
  const ret = await uploadFiles(email, fileURIs);
  return ret;
}

export async function deleteImage(email, fileUrl) {
  const params = { email, fileUrl };
  const ret = await apiModels('storage/deleteFile', 'DELETE', params, apiToken);
  return ret;
}
export async function changeRecipient(accountName, accountNumber, accountSortCode) {
  const params = { accountName, accountNumber, accountSortCode };
  const ret = await apiModels('user/updatePaymentInfo', 'POST', params, apiToken);
  return ret;
}
