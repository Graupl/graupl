/**
 * @file
 * Provides a system to get and store Graupl data in the browser.
 */

import { isValidType } from "./validate.js";

/**
 * Initializes the storage system.
 *
 * @param {Object<string>} [options = {}]           - The options for the storage.
 * @param {?string}        [options.type = null]    - The type of storage.
 * @param {string}         [options.scope = Graupl] - The scope of the storage.
 */
export function initializeStorage({ type = null, scope = "Graupl" } = {}) {
  if (!isValidType("string", { scope })) return;

  window[scope] = window[scope] || {};

  if (isValidType("string", { type })) {
    window[scope][type] = window[scope][type] || {};
  }
}

/**
 * Get the storage object.
 *
 * @param  {Object<string>} [options = {}]           - The options for the storage.
 * @param  {?string}        [options.type = null]    - The type of storage.
 * @param  {string}         [options.scope = Graupl] - The scope of the storage.
 * @return {object|null}                             - The storage object or null.
 */
export function getStorage({ type = null, scope = "Graupl" } = {}) {
  if (!isValidType("string", { scope })) return null;

  if (isValidType("string", { type })) {
    return window[scope][type];
  }

  return window[scope];
}

/**
 * Set the storage object of a given type.
 *
 * @param {Object<string, object>} [options = {}]           - The options for the storage.
 * @param {string}                 options.type             - The type of storage.
 * @param {object}                 [options.data = {}]      - The data to store.
 * @param {string}                 [options.scope = Graupl] - The scope of the storage.
 */
export function setStorage({ type, data = {}, scope = "Graupl" } = {}) {
  if (!isValidType("string", { scope })) return;

  if (isValidType("string", { type }) && isValidType("object", { data })) {
    window[scope][type] = data;
  }
}

/**
 * Clear the storage object of a given type.
 *
 * @param {Object<string>} [options = {}]           - The options for the storage.
 * @param {string}         options.type             - The type of storage.
 * @param {string}         [options.scope = Graupl] - The scope of the storage.
 */
export function clearStorage({ type, scope = "Graupl" } = {}) {
  if (!isValidType("string", { scope })) return;

  if (isValidType("string", { type })) {
    window[scope][type] = {};
  }
}

/**
 * Push a value to the storage object.
 *
 * @param {Object<string, object>} [options = {}]           - The options for the storage.
 * @param {string}                 options.type             - The type of storage.
 * @param {string}                 options.key              - The key of the storage item.
 * @param {object}                 options.data             - The data to store.
 * @param {string}                 [options.scope = Graupl] - The scope of the storage.
 */
export function pushToStorage({ type, key, value, scope = "Graupl" } = {}) {
  if (!isValidType("string", { scope })) return;

  if (isValidType("string", { type, key })) {
    window[scope][type][key] = value;
  }
}

/**
 * Get a value from the storage object.
 *
 * @param  {Object<string>} [options = {}]           - The options for the storage.
 * @param  {string}         options.type             - The type of storage.
 * @param  {string}         options.key              - The key of the storage item.
 * @param  {string}         [options.scope = Graupl] - The scope of the storage.
 * @return {object|null}                             - The storage object or null.
 */
export function getFromStorage({ type, key, scope = "Graupl" } = {}) {
  if (!isValidType("string", { scope })) return null;

  if (isValidType("string", { type, key })) {
    return window[scope][type][key];
  }

  return null;
}

/**
 * Remove a value from the storage object.
 *
 * @param {Object<string>} [options = {}]           - The options for the storage.
 * @param {string}         options.type             - The type of storage.
 * @param {string}         options.key              - The key of the storage item.
 * @param {string}         [options.scope = Graupl] - The scope of the storage.
 */
export function removeFromStorage({ type, key, scope = "Graupl" } = {}) {
  if (!isValidType("string", { scope })) return;

  if (isValidType("string", { type, key })) {
    delete window[scope][type][key];
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
