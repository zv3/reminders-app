import cloneDeep from 'lodash/cloneDeep';
import { ADD_REMINDER, EDIT_REMINDER, REMOVE_REMINDER } from '../constants/ActionTypes';

let lastId = 0;
const uniqIdGen = () => {
  lastId += 1;

  return lastId;
};

const initialState = {};

export default function reminders(state = initialState, { type, reminder }) {
  if (!reminder) {
    return state;
  }

  const newState = cloneDeep(state);
  const objKey = (new Date(reminder.dt)).setHours(0, 0, 0, 0);
  const entries = state[objKey] || [];

  switch (type) {
    case ADD_REMINDER:
      entries.push({ ...reminder, id: uniqIdGen() });

      break;
    case EDIT_REMINDER: {
      if (reminder && reminder.id) {
        const idx = entries.findIndex(e => e.id === reminder.id);

        entries.splice(idx, 1, reminder);

        break;
      }

      throw new Error('Invalid `reminder` argument passed in');
    }
    case REMOVE_REMINDER: {
      if (reminder && reminder.id) {
        const idx = entries.findIndex(e => e.id === reminder.id);

        entries.splice(idx, 1);

        break;
      }

      throw new Error('Invalid `reminder` argument passed in');
    }
    default:
  }

  newState[objKey] = entries.sort((a, b) => a.dt - b.dt);

  return newState;
}
