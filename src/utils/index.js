import { Alert } from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';
import moment from 'moment';

export {
  imagePicker as ImagePicker,
  imagePickerFromCamera as ImagePickerFromCamera,
  imagePickerFromLibrary as ImagePickerFromLibrary
} from './ImagePicker';
export { checkEmail, checkPassLength } from './validation';
export { displayDate, getRemainingTime } from './DisplayDate';

export const showAlert = (title, phrase, onClick) => {
  Alert.alert(
    title,
    phrase,
    [
      { text: 'OK', onPress: onClick },
    ],
    { cancelable: false }
  );
};

export const checkIfAvailable = (selectedJob) => {
  return new Promise((resolve) => {
    const startDate = new Date(selectedJob.date);
    const endDate = new Date(selectedJob.endDate);
    RNCalendarEvents.fetchAllEvents(
      moment(startDate).local().format('YYYY-MM-DDTHH:mm:ss.sssZ'),
      moment(endDate).local().format('YYYY-MM-DDTHH:mm:ss.sssZ')
    )
      .then((events) => {
        console.info('events', events);
        return resolve(!events.length);
      })
      .catch((error) => {
        console.info('error', error);
        return resolve(false);
      });
  });
};

export const removeFromCalendar = (selectedJob) => {
  const startDate = new Date(selectedJob.date);
  const endDate = new Date(selectedJob.endDate);
  RNCalendarEvents.fetchAllEvents(
    moment(startDate).local().format('YYYY-MM-DDTHH:mm:ss.sssZ'),
    moment(endDate).local().format('YYYY-MM-DDTHH:mm:ss.sssZ')
  )
    .then((events) => {
      if (events.length) {
        RNCalendarEvents.removeEvent(events[0].id);
        showAlert('', 'Successfully removed from phone calendar');
      }
    })
    .catch((error) => {
      console.info('error', error);
    });
};

export const saveDateToCalendar = (selectedJob) => {
  const startDate = new Date(selectedJob.date);
  const endDate = new Date(selectedJob.endDate);
  return new Promise((resolve) => {
    RNCalendarEvents.saveEvent('title', {
      location: 'location',
      notes: 'notes',
      startDate: moment(startDate).local().format('YYYY-MM-DDTHH:mm:ss.sssZ'),
      endDate: moment(endDate).local().format('YYYY-MM-DDTHH:mm:ss.sssZ'),
      alarms: [{
        date: -1 // or absolute date - iOS Only
      }]
    }).then(id => resolve({ isSuccess: true, id }))
      .catch(error => resolve({ isSuccess: false, error }));
  });
};

export const authorizeStatusCalendar = () => {
  return new Promise((resolve) => {
    RNCalendarEvents.authorizationStatus()
      .then((status) => {
        console.info('status', status);
        if (status === 'undetermined') {
          RNCalendarEvents.authorizeEventStore()
            .then((res) => {
              if (res === 'authorized') {
                console.info('res', res);
                return resolve(true);
              }
            });
        } else if (status === 'authorized') {
          return resolve(true);
        }
      })
      .catch(error => resolve(false));
  });
};
