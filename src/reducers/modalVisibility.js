import { SHOW_MODAL, HIDE_MODAL } from '../constants/ActionTypes';
import { DEFAULT_COLOR_VALUE } from '../constants/consts';

const initialState = {
  show: false,
  reminder: {
    title: '',
    dt: new Date(),
    color: DEFAULT_COLOR_VALUE,
  },
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
