import React from 'react';
import PropTypes from 'prop-types';
import { REMINDER_PROP_TYPES } from '../constants/consts';

export default function Reminder({ reminder, onClickReminderBtn }) {
  const hours = reminder.dt.getHours();
  const minutes = reminder.dt.getMinutes();
  const twelveHourValue = hours % 12;

  return (
    <div
      className="reminder"
      style={{ ...(reminder.color ? { color: 'white' } : {}) }}
      onClick={onClickReminderBtn}
    >
      <div className="reminder__overlay" style={{ backgroundColor: reminder.color }} />
      <span className="reminder__time">
        { twelveHourValue === 0 ? 12 : twelveHourValue }
        { minutes > 0 ? `:${(minutes < 10 ? `0${minutes}` : minutes)}` : '' }
        { hours >= 12 ? 'pm' : 'am' }
      </span>
      <span className="reminder__title">{ reminder.title }</span>
    </div>
  );
}

Reminder.propTypes = {
  reminder: REMINDER_PROP_TYPES.reminder.isRequired,
  onClickReminderBtn: PropTypes.func.isRequired,
};
