import { SHOW_MODAL, HIDE_MODAL } from '../constants/ActionTypes';
import { getDummyReminder } from '../utils/reminder';

const initialState = {
  show: false,
  reminder: getDummyReminder(),
};

const modalVisibility = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        show: true,
        reminder: action.reminder,
      };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default modalVisibility;
