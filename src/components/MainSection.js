import React from 'react';
import PropTypes from 'prop-types';
import MonthSelector from './MonthSelector';
import WeekHeader from './WeekHeader';
import MonthGrid from './MonthGrid';
import ReminderFormModal from '../containers/ReminderFormModal';
import GridCell from '../containers/GridCell';

export default function MainSection({ currentMonth, actions, modalVisibility }) {
  return (
    <div className="main">
      { modalVisibility.show ? <ReminderFormModal reminder={modalVisibility.reminder} /> : null }
      <MonthSelector currentMonth={currentMonth} setMonth={actions.setMonth} />
      <WeekHeader />
      <MonthGrid currentMonth={currentMonth} gridCellComp={GridCell} />
    </div>
  );
}

MainSection.propTypes = {
  currentMonth: PropTypes.instanceOf(Date).isRequired,
  actions: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types,
  modalVisibility: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    reminder: PropTypes.instanceOf(Object),
  }).isRequired,
};
