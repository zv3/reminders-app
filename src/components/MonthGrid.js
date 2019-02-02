import React from 'react';
import PropTypes from 'prop-types';

export default function MonthGrid({ currentMonth, gridCellComp: MonthGridCell, ...props }) {
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
  const currentDate = firstDay;
  const weekGridRows = [];

  while (currentDate <= lastDay) {
    const gridCells = [];

    for (let gridCellIdx = 0; gridCellIdx <= 6; gridCellIdx += 1) {
      if (currentDate.getDay() !== gridCellIdx || currentDate > lastDay) {
        gridCells.push(<div className="cal-grid-cell cal-grid-cell--empty" key={`empty_${gridCellIdx}`} />);
      } else {
        gridCells.push(
          <MonthGridCell
            dt={new Date(currentDate.getTime())}
            key={currentDate.getDate()}
            {...props}
          />,
        );

        currentDate.setDate(currentDate.getDate() + 1);
      }
    }

    weekGridRows.push(<div className="cal-grid-row" key={weekGridRows.length + 1}>{ gridCells }</div>);
  }

  return (
    <div className="cal-grid">{ weekGridRows }</div>
  );
}

MonthGrid.propTypes = {
  currentMonth: PropTypes.instanceOf(Date).isRequired,
  gridCellComp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
};
