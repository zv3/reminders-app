/**
 * Get the timestamp that corresponds to the start of the day of the given date object.
 *
 * @param dt {Date}
 * @returns {int}
 */
export function getStartOfDay(dt) {
  return (new Date(dt)).setHours(0, 0, 0, 0);
}
