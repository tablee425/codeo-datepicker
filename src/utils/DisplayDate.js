import { MonthNames } from './../constants';

export function displayDate(dateStr) {
  const currentTime = new Date();
  let value = '';
  const date = new Date(dateStr);
  if (date.getDate() === currentTime.getDate()) {
    if (date.getHours() === currentTime.getHours() &&
      date.getMinutes() === currentTime.getMinutes()) {
      return 'now';
    }
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours === 12 ? 12 : hours % 12;
    if (hours) {
      hours = hours < 10 && date.getHours() !== 0 ? `0${hours}` : hours;
    } else {
      hours = '00';
    }
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    value = `${hours}:${minutes} ${ampm}`;
  } else {
    if (currentTime.getDate() - date.getDate() === 1) {
      value = 'YESTERDAY';
    } else {
      value = `${date.getDate()} ${MonthNames[date.getMonth()]}`;
    }
  }
  return value;
}

export function getRemainingTime(time, isOnlyMin = false) {
  const today = new Date();
  const calculateTime = new Date(time);
  const diffMs = (calculateTime - today); // milliseconds between now & Christmas
  if (calculateTime < today) {
    return '0';
  }
  const diffDays = Math.floor(diffMs / 86400000); // days
  const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
  if (!isOnlyMin) {
    if (diffDays >= 1) {
      return `${diffDays} days, ${diffHrs} hours, ${diffMins} mins`;
    }
    if (diffHrs >= 1) {
      return `${diffHrs} hours, ${diffMins}`;
    }
    return `${diffMins}`;
  }
  return `${Math.ceil(diffMs / 60000)}`;
}
