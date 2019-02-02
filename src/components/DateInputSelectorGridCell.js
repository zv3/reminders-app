import React from 'react';
import PropTypes from 'prop-types';

export default function DateInputSelectorGridCell({ dt, selectedDt, onClickDateBtn }) {
  const date = dt.getDate();
  const isActive = date === selectedDt.getDate();

  dt.setHours(selectedDt.getHours(), selectedDt.getMinutes());

  return (
    <div className={`cal-grid-cell ${isActive ? 'cal-grid-cell--active' : ''}`} onClick={() => onClickDateBtn(dt)}>
      <div className="cal-grid-cell__content">
        <div className="cal-grid-cell__label">{ date }</div>
      </div>
    </div>
  );
}

DateInputSelectorGridCell.propTypes = {
  dt: PropTypes.instanceOf(Date).isRequired,
  selectedDt: PropTypes.instanceOf(Date).isRequired,
  onClickDateBtn: PropTypes.func.isRequired,
};
