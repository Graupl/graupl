/**
 * Add a class or array of classes to an element.
 *
 * @param {string|string[]} className - The class or classes to add.
 * @param {HTMLElement} element - The element to add the class to.
 */
export function addClass(className, element) {
  // Gracefully handle empty strings or arrays.
  if (className === "" || className.length === 0) {
    return;
  }

  if (typeof className === "string") {
    element.classList.add(className);
  } else {
    element.classList.add(...className);
  }
}

/**
 * Remove a class or array of classes from an element.
 *
 * @param {string|string[]} className - The class or classes to remove.
 * @param {HTMLElement} element - The element to remove the class from.
 */
export function removeClass(className, element) {
  // Gracefully handle empty strings or arrays.
  if (className === "" || className.length === 0) {
    return;
  }

  if (typeof className === "string") {
    element.classList.remove(className);
  } else {
    element.classList.remove(...className);
  }
}

/**
 *
 * @param context
 */
export function selectAllFocusableElements(context = document) {
  const querySelector =
    "a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),[tabindex]";
  const elements = Array.from(context.querySelectorAll(querySelector));

  const tabbableElements = elements.filter((element) => {
    let check = true;

    if (element.getAttribute("tabindex") === "-1") check = false;

    return check;
  });

  return tabbableElements;
}

/**
 *
 * @param context
 */
export function selectFirstFocusableElement(context = document) {
  const tabbableElements = selectAllFocusableElements(context);

  return tabbableElements[0] || false;
}

/**
 *
 * @param context
 */
export function selectLastFocusableElement(context = document) {
  const tabbableElements = selectAllFocusableElements(context);

  return tabbableElements[tabbableElements.length - 1] || false;
}

/**
 *
 * @param element
 * @param context
 */
export function selectNextFocusableElement(element, context = document) {
  const tabbableElements = selectAllFocusableElements(context);
  const index = tabbableElements.indexOf(element);

  return index === tabbableElements.length - 1
    ? false
    : tabbableElements[index + 1];
}

/**
 *
 * @param element
 * @param context
 */
export function selectPreviousFocusableElement(element, context = document) {
  const tabbableElements = selectAllFocusableElements(context);
  const index = tabbableElements.indexOf(element);

  return index === 0 ? false : tabbableElements[index - 1];
}
