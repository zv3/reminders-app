import reducer from '../reminders';
import { getLastUniqId } from '../../utils/uniqueId';
import { getStartOfDay } from '../../utils/datetime';
import { getDummyReminder } from '../../utils/reminder';
import { addReminder, editReminder, deleteReminder } from '../../actions';
import { COLORS } from '../../constants/consts';

const initialState = {};

describe('Reminders reducer', () => {
  const dummyReminder = {
    ...getDummyReminder(),
    dt: new Date(2019, 1, 3, 18, 28, 0, 0),
  };
  const startOfDay = getStartOfDay(dummyReminder.dt);

  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handles reminder creation request', () => {
    expect(reducer(initialState, addReminder(dummyReminder))).toEqual({
      ...initialState,
      [startOfDay]: [{
        ...dummyReminder,
        id: getLastUniqId(),
      }],
    });
  });

  it('handles reminder update request', () => {
    const state = reducer(initialState, addReminder(dummyReminder));
    const existingReminder = state[startOfDay][0];
    const modifiedReminder = {
      ...existingReminder,
      title: 'This is a test',
      color: COLORS[0].value,
      dt: new Date(existingReminder.dt.getTime()),
    };

    modifiedReminder.dt.setDate(existingReminder.dt.getDate() + 1); // modify the reminder's date

    expect(reducer(state, editReminder(modifiedReminder))).toEqual({
      ...state,
      // the state should have 0 entries in the old key due to the modified date and should have
      // exactly one reminder in the new key
      [startOfDay]: [],
      [getStartOfDay(modifiedReminder.dt)]: [modifiedReminder],
    });
  });

  it('handles reminder deletion request', () => {
    const state = reducer(initialState, addReminder(dummyReminder));

    expect(reducer(state, deleteReminder({ ...dummyReminder, id: getLastUniqId() })))
      .toEqual({
        ...state,
        [startOfDay]: [],
      });
  });
});
