/**
 * Retrieves the pressed key from an event.
 *
 * @param   {KeyboardEvent} event - The keyboard event.
 * @return  {string}              - The name of the key or an empty string.
 */
export function keyPress(event) {
  try {
    // Use event.key or event.keyCode to support older browsers.
    const key = event.key || event.keyCode;
    const keys = {
      Enter: key === "Enter" || key === 13,
      Space: key === " " || key === "Spacebar" || key === 32,
      Escape: key === "Escape" || key === "Esc" || key === 27,
      ArrowDown: key === "ArrowDown" || key === 40,
      ArrowUp: key === "ArrowUp" || key === 38,
      Home: key === "Home" || key === 36,
      End: key === "End" || key === 35,
    };

    return Object.keys(keys).find((key) => keys[key] === true) || "";
  } catch {
    // Return an empty string if something goes wrong.
    return "";
  }
}

/**
 * Stops an event from taking action.
 *
 * @param {Event} event - The event.
 */
export function preventEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
