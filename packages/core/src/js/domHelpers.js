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
 * Select all focusable elements within a given context.
 *
 * @param  {HTMLElement}                     [context = document] - The context in which to search for focusable elements.
 * @param  {?function(HTMLElement): boolean} [fn = null]          - An optional addition filter function to process out focusable elements.
 * @return {HTMLElement[]}                                        - An array of focusable elements.
 */
export function selectAllFocusableElements(context = document, fn = null) {
  const querySelector =
    "a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),[tabindex]";
  const elements = Array.from(context.querySelectorAll(querySelector));

  const tabbableElements = elements.filter((element) => {
    let check = true;

    if (element.getAttribute("tabindex") === "-1") check = false;

    return check;
  });

  if (fn !== null) {
    return tabbableElements.filter(fn);
  } else {
    return tabbableElements;
  }
}

/**
 * Select the first focusable element within a given context.
 *
 * @param  {HTMLElement}                     [context = document] - The context in which to search for focusable elements.
 * @param  {?function(HTMLElement): boolean} [fn = null]          - An optional addition filter function to process out focusable elements.
 * @return {HTMLElement|boolean}                                  - The first focusable element or false if none found.
 */
export function selectFirstFocusableElement(context = document, fn = null) {
  const tabbableElements = selectAllFocusableElements(context, fn);

  return tabbableElements[0] || false;
}

/**
 * Select the last focusable element within a given context.
 *
 * @param  {HTMLElement}                     [context = document] - The context in which to search for focusable elements.
 * @param  {?function(HTMLElement): boolean} [fn = null]          - An optional addition filter function to process out focusable elements.
 * @return {HTMLElement|boolean}                                  - The last focusable element or false if none found.
 */
export function selectLastFocusableElement(context = document, fn = null) {
  const tabbableElements = selectAllFocusableElements(context, fn);

  return tabbableElements[tabbableElements.length - 1] || false;
}

/**
 * Select the next focusable element relative to the given element within a context.
 *
 * @param  {HTMLElement}                     element              - The reference element.
 * @param  {HTMLElement}                     [context = document] - The context in which to search for focusable elements.
 * @param  {?function(HTMLElement): boolean} [fn = null]          - An optional addition filter function to process out focusable elements.
 * @return {HTMLElement|boolean}                                  - The next focusable element or false if none found.
 */
export function selectNextFocusableElement(
  element,
  context = document,
  fn = null
) {
  const tabbableElements = selectAllFocusableElements(context, fn);
  const index = tabbableElements.indexOf(element);

  return index === tabbableElements.length - 1
    ? false
    : tabbableElements[index + 1];
}

/**
 * Select the previous focusable element relative to the given element within a context.
 *
 * @param  {HTMLElement}                     element              - The reference element.
 * @param  {HTMLElement}                     [context = document] - The context in which to search for focusable elements.
 * @param  {?function(HTMLElement): boolean} [fn = null]          - An optional addition filter function to process out focusable elements.
 * @return {HTMLElement|boolean}                                  - The previous focusable element or false if none found.
 */
export function selectPreviousFocusableElement(
  element,
  context = document,
  fn = null
) {
  const tabbableElements = selectAllFocusableElements(context, fn);
  const index = tabbableElements.indexOf(element);

  return index === 0 ? false : tabbableElements[index - 1];
}
