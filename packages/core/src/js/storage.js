/**
 * @file
 * Provides a system to get and store Graupl data in the browser.
 */

import { isValidType } from "./validate.js";

/**
 * Initializes the storage system.
 *
 * @param {?string} [type = null] - The type of storage to initialize.
 */
export function initializeStorage(type = null) {
  window.Graupl = window.Graupl || {};

  if (isValidType("string", { type })) {
    window.Graupl[type] = window.Graupl[type] || {};
  }
}

/**
 * Get the storage object.
 *
 * @param  {?string} type - The type of storage to get.
 * @return {object}       - The storage object.
 */
export function getStorage(type = null) {
  if (isValidType("string", { type })) {
    return window.Graupl[type];
  }

  return window.Graupl;
}

/**
 * Set the storage object of a given type.
 *
 * @param {string} type - The type of storage to set.
 * @param {object} data - The data to set.
 */
export function setStorage(type, data = {}) {
  if (isValidType("string", { type }) && isValidType("object", { data })) {
    window.Graupl[type] = data;
  }
}

/**
 * Clear the storage object of a given type.
 *
 * @param {string} type - The type of storage to clear.
 */
export function clearStorage(type) {
  if (isValidType("string", { type })) {
    window.Graupl[type] = {};
  }
}

/**
 * Push a value to the storage object.
 *
 * @param {string} type  - The type of storage to push to.
 * @param {string} key   - The key to use for the value.
 * @param {*}      value - The value to store.
 */
export function pushToStorage(type, key, value) {
  if (isValidType("string", { type, key })) {
    window.Graupl[type][key] = value;
  }
}

/**
 * Get a value from the storage object.
 *
 * @param  {string }type - The type of storage to get from.
 * @param  {string }key  - The key to get the value from.
 * @return {*}           - The value from the storage object.
 */
export function getFromStorage(type, key) {
  if (isValidType("string", { type, key })) {
    return window.Graupl[type][key];
  }

  return null;
}

/**
 * Remove a value from the storage object.
 *
 * @param {string} type - The type of storage to remove from.
 * @param {string} key  - The key to remove the value from.
 */
export function removeFromStorage(type, key) {
  if (isValidType("string", { type, key })) {
    delete window.Graupl[type][key];
  }
}

export default {
  initializeStorage,
  getStorage,
  setStorage,
  clearStorage,
  pushToStorage,
  getFromStorage,
  removeFromStorage,
};
