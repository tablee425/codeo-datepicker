const PUBLISH_VERSION = false;

function getApiServerUrl() {
  if (!PUBLISH_VERSION) {
    return 'http://snapr-mvp.us-east-2.elasticbeanstalk.com';
  }
  return 'https://';
}

export default {
  API_URL: getApiServerUrl(),
  version: { name: 'Software Version', value: '1.0.001' },
  updatedDate: { name: 'Updated', value: '8-01-2017' },
  fontFamily: 'skia',

  //
  currentDay: null,
  currentMonth: null,
  currentYear: null,
};
