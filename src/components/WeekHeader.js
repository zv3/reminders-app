import React from 'react';
import PropTypes from 'prop-types';
import { DAYS_OF_THE_WEEK } from '../constants/consts';

export default function WeekHeader({ labelDisplayLength }) {
  const dayElements = DAYS_OF_THE_WEEK.map((day) => {
    const label = day.substr(0, labelDisplayLength);

    return <div className="week-header__day" key={day}>{ label }</div>;
  });

  return <div className="week-header">{ dayElements }</div>;
}

WeekHeader.propTypes = {
  labelDisplayLength: PropTypes.number,
};

WeekHeader.defaultProps = {
  labelDisplayLength: 3,
};
