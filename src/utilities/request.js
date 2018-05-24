export const RequestApi = (url, body = '', method = 'GET') => {
  let header;
  if (method === 'GET') {
    header = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
  } else {
    header = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    };
  }

  return new Promise((resolve, reject) => {
    fetch(url, header)
      .then(response => {
        if (response.status === 200) {
          resolve(null);
        } else {
          resolve(response.json());
        }
      })
      .catch(error => reject(error));
  });
};

export const RequestMSApi = (url, body = '', method = 'GET') => {
  let header;
  if (method === 'GET') {
    header = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
  } else {

    var details = {
      'grant_type': 'password',
      'username': body['username'],
      'password': body['password']
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    header = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody//JSON.stringify(body)
    };
  }

  return new Promise((resolve, reject) => {
    fetch(url, header)
      .then(response => {
        if (response.status === 200) {
          resolve(response.json());
          // resolve(null);
        } else {
          resolve(response.json());
        }
      })
      .catch(error => reject(error));
  });
};

export const RequestAppointmentsApi = (url, token, method = 'GET') => {
  let header;
  header = {
    method,
    headers: {
      'Authorization': "Bearer " + token,
    },
  };
  return new Promise((resolve, reject) => {
    fetch(url, header)
      .then(response => {

        if (response.status === 200) {
          resolve(response.json());
          // resolve(null);
        } else {
          resolve(null);
        }
      })
      .catch(error => reject(error));
  });
};

export const SignUp = (email, password, confirmPassword, firstName, lastName, phoneNumber) => (
  RequestApi('https://api.birdienow.com/api/account/register', {email, password, confirmPassword, firstName, lastName, phoneNumber}, 'POST')
);

export const SignIn = (grant_type, username, password) => (
  RequestMSApi('https://api.birdienow.com/token', {grant_type, username, password}, 'POST')
);

export const Appointments = (token) => (
  RequestAppointmentsApi('https://api.birdienow.com/api/clientAppointments?auth=auth', token, 'GET')
);
