import cloneDeep from 'lodash/cloneDeep';
import { getUniqId } from '../utils/uniqueId';
import { getStartOfDay } from '../utils/datetime';

import { CREATE_REMINDER, UPDATE_REMINDER, DELETE_REMINDER } from '../constants/ActionTypes';

const mappedEntries = {};

export default function reminders(state = {}, { type, reminder }) {
  if (!reminder) {
    return state;
  }

  const newState = cloneDeep(state);
  const startOfDay = getStartOfDay(reminder.dt);
  const entries = state[startOfDay] || [];

  switch (type) {
    case CREATE_REMINDER: {
      const newId = getUniqId(); // Generate a new unique id to be used as id.

      entries.push({ ...reminder, id: newId });
      mappedEntries[newId] = startOfDay; // store the `startOfDay` that this entry maps to.

      break;
    }
    case UPDATE_REMINDER:
      if (reminder.id) {
        const idx = entries.findIndex(e => e.id === reminder.id);

        if (idx === -1 && mappedEntries[reminder.id]) {
          // the reminder's date has been changed and therefore should be removed from the
          // old date's entries and added to the new date's entries.
          const oldKey = mappedEntries[reminder.id];
          const oldIdx = newState[oldKey].findIndex(e => e.id === reminder.id);

          newState[oldKey].splice(oldIdx, 1);
          entries.push(reminder);
        } else {
          // the reminders date hasn't been changed, we can do an in place replacement.
          entries.splice(idx, 1, reminder);
        }

        mappedEntries[reminder.id] = startOfDay; // remap this reminder to it's `startOfDay` value.

        break;
      }

      throw new Error('Invalid `reminder` argument passed in');
    case DELETE_REMINDER:
      if (reminder.id) {
        const idx = entries.findIndex(e => e.id === reminder.id);

        entries.splice(idx, 1);
        delete mappedEntries[reminder.id];

        break;
      }

      throw new Error('Invalid `reminder` argument passed in');
    default:
  }

  newState[startOfDay] = entries.sort((ra, rb) => ra.dt - rb.dt);

  return newState;
}
