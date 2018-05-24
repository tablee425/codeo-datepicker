/**
 * Calendar Picker Component
 *
 * Copyright 2016 Yahoo Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

export const Utils = {
  START_DATE: 'START_DATE',
  END_DATE: 'END_DATE',
  WEEKDAYS: ['ש', 'ו', 'ה', 'ד', 'ג', 'ב', 'א'],
  WEEKDAYS_MON: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  MONTHS: [
    'דצמבר',
    'נובמבר',
    'אוקטובר',
    'ספטמבר',
    'אוגוסט',
    'יולי',
    'יוני',
    'מאי',
    'אפריל',
    'מרץ',
    'פברואר',
    'ינואר'
  ],
  MAX_ROWS: 7,
  MAX_COLUMNS: 7,
  getDaysInMonth: function(month, year) {
    const lastDayOfMonth = new Date(year, month + 1, 0);
    return lastDayOfMonth.getDate();
  },
};
