/**
 * Handles promises return result. If the promise execution is successfull then
 * the error value will be null and the result will be in the
 * second value.
 * @param {Promise} promise to handle
 * @returns {Array} an array with error value and/or result value
 */
const to = (promise: Promise<any>): any =>
  promise.then((data) => [null, data]).catch((error) => [error]);

export default to;
