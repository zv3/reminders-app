import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MonthSelector from './MonthSelector';
import WeekHeader from './WeekHeader';
import MonthGrid from './MonthGrid';
import DateInputSelectorGridCell from './DateInputSelectorGridCell';
import TimePicker from './TimePicker';

class DateInputSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: props.selectedDt,
      currentDt: props.selectedDt,
      pickerDt: props.selectedDt,
      showSelector: false,
    };
  }

  onChangeMonth = (dt) => {
    this.setState({ currentMonth: dt });
  };

  onChangeDate = (dt) => {
    this.setState({ pickerDt: new Date(dt.getTime()) });
  };

  onClickCancelBtn = () => {
    this.setState({ showSelector: false });
  };

  onClickSubmitBtn = () => {
    const { onChange } = this.props;
    const { pickerDt } = this.state;
    const newCurrentDt = new Date(pickerDt.getTime());

    this.setState({ currentDt: newCurrentDt, showSelector: false });
    onChange(newCurrentDt);
  };

  onClickDateInput = () => {
    this.setState({ showSelector: true });
  };

  onChangeHours = (hours) => {
    const { pickerDt } = this.state;
    const dt = new Date(pickerDt.getTime());

    dt.setHours(hours);

    this.setState({ pickerDt: dt });
  };

  onChangeMinutes = (minutes) => {
    const { pickerDt } = this.state;
    const dt = new Date(pickerDt.getTime());

    dt.setMinutes(minutes);
    this.setState({ pickerDt: dt });
  };

  render() {
    const {
      currentMonth,
      currentDt,
      pickerDt,
      showSelector,
    } = this.state;

    const localeOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };

    return (
      <div className="date-input-sel">
        <div className="input-group date-input-sel__input" onClick={this.onClickDateInput}>
          <div className="input-group-prepend">
            <span className="input-group-text date-input-sel__input-icon">
              <FontAwesomeIcon icon="calendar" />
            </span>
          </div>
          <div id="date-input" className="form-control date-input-sel__input-field">
            { currentDt.toLocaleDateString('en-US', localeOptions) }
          </div>
        </div>

        <div className="date-input-sel__popup">
          <div className={`date-input-sel__popup-inner ${showSelector ? 'd-block' : ''}`}>
            <div className="date-input-sel__popup-body">
              <div className="date-input-sel__popup-body-block">
                <MonthSelector
                  setMonth={this.onChangeMonth}
                  currentMonth={new Date(currentMonth.getTime())}
                />
                <WeekHeader labelDisplayLength={1} />
                <MonthGrid
                  currentMonth={currentMonth}
                  gridCellComp={DateInputSelectorGridCell}
                  selectedDt={pickerDt}
                  onClickDateBtn={this.onChangeDate}
                />
              </div>
              <div className="date-input-sel__popup-body-block">
                <hr className="date-input-sel__popup-block-separator" />
                <TimePicker
                  dt={pickerDt}
                  onChangeHours={this.onChangeHours}
                  onChangeMinutes={this.onChangeMinutes}
                />
              </div>
            </div>

            <div className="date-input-sel__popup-footer">
              <button type="button" className="btn btn-default" onClick={this.onClickCancelBtn}>Cancel</button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={this.onClickSubmitBtn}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DateInputSelector.propTypes = {
  selectedDt: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
};

DateInputSelector.defaultProps = {
  selectedDt: new Date(),
};

export default DateInputSelector;
