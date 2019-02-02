import { combineReducers } from 'redux';
import reminders from './reminders';
import monthSelector from './monthSelector';
import modalVisibility from './modalVisibility';

const rootReducer = combineReducers({
  reminders,
  modalVisibility,
  currentMonth: monthSelector,
});

export default rootReducer;
