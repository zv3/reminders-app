import React from 'react';
import PropTypes from 'prop-types';

export default function TimePicker({ dt, onChangeHours, onChangeMinutes }) {
  const dtHours = dt.getHours();
  const currentMinutes = dt.getMinutes();
  const hourOptions = [...Array(24)].map((_, hr) => (
    <option key={hr} value={hr}>{ hr < 10 ? `0${hr}` : hr }</option>
  ));
  const minOptions = [...Array(60)].map((_, min) => (
    <option key={min} value={min}>{ min < 10 ? `0${min}` : min }</option>
  ));

  return (
    <div className="time-picker">
      <div className="time-picker__cell">
        <div className="time-picker__header">Hour</div>
        <select
          className="custom-select"
          id="time-picker-hr"
          value={dtHours}
          onChange={e => onChangeHours(e.target.value)}
        >
          { hourOptions }
        </select>
      </div>
      <div className="time-picker__cell">
        <div className="time-picker__header">Minute</div>
        <select
          className="custom-select"
          id="time-picker-min"
          value={currentMinutes}
          onChange={e => onChangeMinutes(e.target.value)}
        >
          { minOptions }
        </select>
      </div>
    </div>
  );
}

TimePicker.propTypes = {
  dt: PropTypes.instanceOf(Date).isRequired,
  onChangeHours: PropTypes.func.isRequired,
  onChangeMinutes: PropTypes.func.isRequired,
};
