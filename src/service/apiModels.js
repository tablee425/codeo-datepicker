import AppConfig from './../config/appConfig';

const { API_URL } = AppConfig;

export const apiModels = async (url, method, parameters, token) => {
  let ret = null;
  let queryURL = '';
  let params = {};
  try {
    queryURL = `${API_URL}/${url}`;
    const body = JSON.stringify(parameters);
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    if (token || token === '') {
      headers.authorization = `Bearer ${token}`;
    }
    params = { headers, method };
    if (method.toUpperCase() === 'POST' || method.toUpperCase() === 'PUT' || method.toUpperCase() === 'DELETE') {
      params.body = body;
    }
    // eslint-disable-next-line
    const response = await fetch(queryURL, params);
    console.info('response', response);
    if (method.toUpperCase() !== 'DELETE') {
      if (response.status === 200 && response._bodyText === 'SUCCESS') {
        if (response.headers && response.headers.map && response.headers.map.authorization &&
          !!response.headers.map.authorization.length) {
          let jwt = response.headers.map.authorization[0];
          jwt = jwt.replace('Bearer', '');
          jwt = jwt.replace(/\s/g, '');
          ret = { jwt, success: true };
        } else {
          ret = { jwt: null, success: false };
        }
        return ret;
      }
      if (response.status === 400 && response._bodyText === 'FAILED') {
        ret = { jwt: null, success: false };
        return ret;
      }
      if (response.headers && response.headers.map && response.headers.map.authorization &&
        !!response.headers.map.authorization.length) {
        let jwt = response.headers.map.authorization[0];
        jwt = jwt.replace('Bearer', '');
        jwt = jwt.replace(/\s/g, '');
        ret = { jwt, response: await response.json(), success: true };
      } else {
        ret = { response: await response.json(), success: true };
      }
    } else {
      ret = { success: true };
    }
    if (response.status >= 400) {
      // ret.error = true;
      debugger;
      ret = { error: true, success: false };
    }
    console.log('request result', queryURL, params, ret);
  } catch (err) {
    console.log('err', queryURL, params, err);
  }
  return ret;
};
