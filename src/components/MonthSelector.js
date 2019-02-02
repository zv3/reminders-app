import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MonthSelector extends Component {
  onClickPrevMonthBtn = () => {
    const { setMonth, currentMonth } = this.props;
    const dt = new Date(currentMonth.getTime());

    dt.setDate(0); // 0 will result in the last day of the previous month

    setMonth(dt);
  };

  onClickNextMonthBtn = () => {
    const { setMonth, currentMonth } = this.props;
    const dt = new Date(currentMonth.getTime());

    dt.setDate(32); // 32 will result in the first day of the next month

    setMonth(dt);
  };

  render() {
    const { currentMonth } = this.props;

    return (
      <div className="month-selector">
        <button
          type="button"
          className="btn btn-link month-selector__link month-selector__link--prev"
          onClick={this.onClickPrevMonthBtn}
        >
          <FontAwesomeIcon icon="angle-left" />
        </button>

        <div className="month-selector__label">
          { currentMonth.toLocaleString('en-us', { month: 'long' }) }
          { ' ' }
          { currentMonth.getFullYear() }
        </div>

        <button
          type="button"
          className="btn btn-link month-selector__link month-selector__link--next"
          onClick={this.onClickNextMonthBtn}
        >
          <FontAwesomeIcon icon="angle-right" />
        </button>
      </div>
    );
  }
}

MonthSelector.propTypes = {
  setMonth: PropTypes.func.isRequired,
  currentMonth: PropTypes.instanceOf(Date).isRequired,
};

export default MonthSelector;
