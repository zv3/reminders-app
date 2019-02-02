import * as types from '../constants/ActionTypes';

export const addReminder = reminder => ({ type: types.ADD_REMINDER, reminder });
export const deleteReminder = reminder => ({ type: types.REMOVE_REMINDER, reminder });
export const editReminder = reminder => ({ type: types.EDIT_REMINDER, reminder });

export const setMonth = currentMonth => ({ type: types.SET_CALENDAR_MONTH, currentMonth });

export const showModal = reminder => ({ type: types.SHOW_MODAL, reminder });
export const hideModal = () => ({ type: types.HIDE_MODAL });
