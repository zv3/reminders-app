let lastId = 0;

/**
 * Generate a random unique value to be used as a identifiers.
 *
 * @returns {number}
 */
export function getUniqId() {
  lastId += 1;

  return lastId;
}

/**
 * Get the last generated unique id.
 *
 * @returns {number}
 */
export function getLastUniqId() {
  return lastId;
}
