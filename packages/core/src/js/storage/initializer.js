/**
 * @file
 * Provides an initializer for the storage system.
 */

import StorageManager from "./StorageManager.js";

document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    new StorageManager({ scope: "GrauplStorage", crush: true });
  }
});
