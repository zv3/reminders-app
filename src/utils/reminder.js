import { DEFAULT_COLOR_VALUE } from '../constants/consts';

/**
 * Get a dummy reminder object model.
 *
 * @returns {{dt: Date, color: string, title: string}}
 */
export function getDummyReminder() {
  return {
    title: '',
    dt: new Date(),
    color: DEFAULT_COLOR_VALUE,
  };
}
