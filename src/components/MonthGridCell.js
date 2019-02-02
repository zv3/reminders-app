import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Reminder from '../containers/Reminder';

class MonthGridCell extends Component {
  renderReminders() {
    const { reminders, dt } = this.props;

    // debugger
    return (reminders[dt.getTime()] || []).map(r => {
      return <Reminder reminder={r} key={r.id} />;
    });
  }

  render() {
    const { dt, onClickAddReminderBtn } = this.props;

    return (
      <div className="cal-grid-cell">
        <div className="cal-grid-cell__header">
          <div className="cal-grid-cell__label">{dt.getDate()}</div>
          <button
            type="button"
            className="btn btn-link cal-grid-cell__add-btn"
            onClick={() => onClickAddReminderBtn(dt)}
          >
            <FontAwesomeIcon icon="calendar-plus" />
          </button>
        </div>

        <div className="cal-grid-cell__events">{ this.renderReminders() }</div>
      </div>
    );
  }
}

MonthGridCell.propTypes = {
  dt: PropTypes.instanceOf(Date).isRequired,
  reminders: PropTypes.instanceOf(Object).isRequired,
  onClickAddReminderBtn: PropTypes.func.isRequired,
};

export default MonthGridCell;
