import { SET_CALENDAR_MONTH } from '../constants/ActionTypes';

const monthSelector = (state = new Date(), action) => {
  switch (action.type) {
    case SET_CALENDAR_MONTH:
      return action.currentMonth;
    default:
      return state;
  }
};

export default monthSelector;
