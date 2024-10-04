/**
 * @file
 * The Accordion class.
 */

import AccordionItem from "./AccordionItem.js";
import { keyPress, preventEvent } from "../eventHandlers.js";
import { isValidInstance, isValidType, isValidClassList } from "../validate.js";

class Accordion {
  /**
   * The DOM elements within the accordion.
   *
   * @protected
   *
   * @type {Object<HTMLElement, HTMLElement[]>}
   *
   * @property {HTMLElement}   accordion             - The accordion element.
   * @property {HTMLElement[]} accordionItems        - An array of accordion items.
   * @property {HTMLElement[]} accordionItemToggles  - An array of accordion item toggles.
   */
  _dom = {
    accordion: null,
    accordionItems: [],
    accordionItemToggles: [],
  };

  /**
   * The DOM elements within the accordion that cannot be reset or generated by the accordion.
   *
   * @protected
   *
   * @type {string[]}
   */
  _domLock = ["accordion"];

  /**
   * The query selectors used by the accordion.
   *
   * @protected
   *
   * @type {Object<string>}
   *
   * @property {string} accordionItems        - The query selector for accordion items.
   * @property {string} accordionItemToggles  - The query selector for accordion toggle.
   */
  _selectors = {
    accordionItems: "",
    accordionItemToggles: "",
  };

  /**
   * The list of accordion items.
   *
   * @protected
   *
   * @type {Object<AccordionItem[]>}
   *
   * @property {AccordionItem[]} accordionItems - The list of accordion items.
   */
  _elements = {
    accordionItems: [],
  };

  /**
   * The class(es) to apply when the accordion is open.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _openClass = "show";

  /**
   * The class(es) to apply when the accordion is closed.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _closeClass = "hide";

  /**
   * The class(es) to apply when the accordion is transitioning between states.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _transitionClass = "transitioning";

  /**
   * The duration time (in milliseconds) for the transition between open and closed states.
   *
   * @protected
   *
   * @type {number}
   */
  _transitionDuration = 250;

  /**
   * The duration time (in milliseconds) for the transition from closed to open states.
   *
   * @protected
   *
   * @type {number}
   */
  _openDuration = -1;

  /**
   * The duration time (in milliseconds) for the transition from open to closed states.
   *
   * @protected
   *
   * @type {number}
   */
  _closeDuration = -1;

  /**
   * A flag to decide if the accordion items can be navigated by arrows.
   *
   * @protected
   *
   * @type {boolean}
   */
  _optionalKeySupport = true;

  /**
   * A flag to decide if multiple accordions can be open at the same time.
   *
   * If set to false, only one accordion can be open at a time.
   *
   * @protected
   *
   * @type {boolean}
   */
  _allowMultipleExpand = true;

  /**
   * A flag to decide if no accordions can be opened at the same time.
   *
   * If set to false, at least one accordion must be open at all times.
   *
   * @protected
   *
   * @type {boolean}
   */
  _allowNoExpand = true;

  /**
   * The index of the current child node.
   *
   * @protected
   *
   * @type {number}
   */
  _currentChild = 0;

  /**
   * errors - The list of errors found during validation.
   *
   * @protected
   *
   * @type {string[]}
   */
  _errors = [];

  /**
   * Constructs a new `Accordion`.
   *
   * @param {object}             options                                                          - The options for generating the accordion.
   * @param {HTMLElement}        [options.accordionElement]                                       - The accordion element in the DOM.
   * @param {string}             [options.accordionItemSelector = .accordion-item]                - The query selector string for accordion items.
   * @param {string}             [options.accordionItemToggleSelector = .accordion-item-toggle]   - The query selector string for accordion toggle.
   * @param {?(string|string[])} [options.openClass = show]                                       - The class to apply when a accordion is "open".
   * @param {?(string|string[])} [options.closeClass = hide]                                      - The class to apply when a accordion is "closed".
   * @param {?(string|string[])} [options.transitionClass = transitioning]                        - The class to apply when a accordion is transitioning between "open" and "closed" states.
   * @param {number}             [options.transitionDuration = 250]                               - The duration of the transition between "open" and "closed" states (in milliseconds).
   * @param {number}             [options.openDuration = -1]                                      - The duration of the transition from "closed" to "open" states (in milliseconds).
   * @param {number}             [options.closeDuration = -1]                                     - The duration of the transition from "open" to "closed" states (in milliseconds).
   * @param {boolean}            [options.optionalKeySupport = false]                             - A flag to determine if accordions can be navigated with arrows.
   * @param {boolean}            [options.allowMultipleExpand = true]                             - A flag to determine if multiple accordions can be open at the same time.
   * @param {boolean}            [options.allowNoExpand = true]                                   - A flag to determine if no accordions can be open at the same time.
   * @param {boolean}            [options.initialize = false]                                     - A flag to initialize the accordion immediately upon creation.
   * @param {?string}            [options.prefix = graupl-]                                           - The prefix to use for CSS custom properties.
   */
  constructor({
    accordionElement,
    accordionItemSelector = ".accordion-item",
    accordionItemToggleSelector = ".accordion-item-toggle",
    openClass = "show",
    closeClass = "hide",
    transitionClass = "transitioning",
    transitionDuration = 250,
    openDuration = -1,
    closeDuration = -1,
    optionalKeySupport = false,
    allowMultipleExpand = true,
    allowNoExpand = true,
    initialize = false,
    prefix = "am-",
  }) {
    // Set DOM elements.
    this._dom.accordion = accordionElement;

    // Set DOM selectors.
    this._selectors.accordionItems = accordionItemSelector;
    this._selectors.accordionItemToggles = accordionItemToggleSelector;

    // Set open/close classes.
    this._openClass = openClass || "";
    this._closeClass = closeClass || "";
    this._transitionClass = transitionClass || "";

    // Set transition duration.
    this._transitionDuration = transitionDuration;
    this._openDuration = openDuration;
    this._closeDuration = closeDuration;

    // Set optional key support.
    this._optionalKeySupport = optionalKeySupport;

    // Set expand rules.
    this._allowMultipleExpand = allowMultipleExpand;
    this._allowNoExpand = allowNoExpand;

    // Set prefix.
    this._prefix = prefix || "";

    if (initialize) {
      this.initialize();
    }
  }

  /**
   * The class(es) to apply when the accordion is open.
   *
   * @type {string|string[]}
   *
   * @see _openClass
   */
  get openClass() {
    return this._openClass;
  }

  /**
   * The class(es) to apply when the accordion is closed.
   *
   * @type {string|string[]}
   *
   * @see _closeClass
   */
  get closeClass() {
    return this._closeClass;
  }

  /**
   * The class(es) to apply when the accordion is transitioning between open and closed.
   *
   * @type {string|string[]}
   *
   * @see _transitionClass
   */
  get transitionClass() {
    return this._transitionClass;
  }

  /**
   * The current index of the accordion item.
   *
   * @readonly
   *
   * @type {number}
   *
   * @see _currentChild
   */
  get currentChild() {
    return this._currentChild;
  }

  /**
   * The dom elements of the accordion.
   *
   * @readonly
   *
   * @type {object}
   *
   * @see _dom
   */
  get dom() {
    return this._dom;
  }

  /**
   * The elements of the accordion.
   *
   * @readonly
   *
   * @type {object}
   *
   * @see _elements
   */
  get elements() {
    return this._elements;
  }

  /**
   * The selectors used for the accordion and accordion items.
   *
   * @readonly
   *
   * @type {boolean}
   *
   * @see _selectors
   */
  get selectors() {
    return this._selectors;
  }

  /**
   * The timer for transitions.
   *
   * @readonly
   *
   * @type {number}
   *
   * @see _transitionTimer
   */
  get transitionTimer() {
    return this._transitionTimer;
  }

  /**
   * A flag to decide if the accordion items can be navigated by arrows.
   *
   * @readonly
   *
   * @type {boolean}
   *
   * @see _optionalKeySupport
   */
  get optionalKeySupport() {
    return this._optionalKeySupport;
  }

  /**
   * An array to hold error messages.
   *
   * @readonly
   *
   * @type {string[]}
   *
   * @see _errors
   */
  get errors() {
    return this._errors;
  }

  set openClass(value) {
    isValidClassList({ openClass: value });

    if (this._openClass !== value) {
      this._openClass = value;
    }
  }

  set closeClass(value) {
    isValidClassList({ closeClass: value });

    if (this._closeClass !== value) {
      this._closeClass = value;
    }
  }

  set transitionClass(value) {
    isValidClassList({ transitionClass: value });

    if (this._transitionClass !== value) {
      this._transitionClass = value;
    }
  }

  set transitionTimer(value) {
    isValidType("number", { value });

    if (value >= 0 && this._transitionTimer !== value) {
      this._transitionTimer = value;
    }
  }

  set currentChild(value) {
    isValidType("number", { value });

    if (
      this._currentChild !== value &&
      value >= 0 &&
      value < this._accordionItems.length
    ) {
      this._currentChild = value;
    }
  }

  set accordionItems(value) {
    isValidType("object", { value });

    if (
      value?.isArray() &&
      value.every((item) => item instanceof AccordionItem)
    ) {
      this._accordionItems = value;
    }
  }

  /**
   * Initializes the accordion.
   */
  initialize() {
    try {
      if (!this._validate()) {
        throw new Error(
          `Graupl Accordion: cannot initialize accordion. The following errors have been found:\n - ${this.errors.join(
            "\n - "
          )}`
        );
      }

      this._setDOMElements();
      this._createChildElements();
      this._handleFocus();
      this._handleClick();
      this._handleKeydown();
      this._handleKeyup();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Sets DOM elements.
   *
   * Elements listed in _domLock cannot be set using this method.
   *
   * @protected
   *
   * @param {string}      elementType                 - The type of element to populate.
   * @param {HTMLElement} [base = this.dom.accordion] - The element used as the base for the querySelect.
   * @param {boolean}     [overwrite = true]          - A flag to set if the existing elements will be overwritten.
   * @param {boolean}     [strict = false]            - A flag to set if the elements must be direct children of the base.
   */
  _setDOMElementType(
    elementType,
    base = this.dom.accordion,
    overwrite = true,
    strict = false
  ) {
    if (typeof this.selectors[elementType] === "string") {
      if (this._domLock.includes(elementType)) {
        throw new Error(
          `Graupl ${this.contructor.name}: "${elementType}" element cannot be set through _setDOMElementType.`
        );
      }

      if (base !== this.dom.accordion) isValidInstance(HTMLElement, { base });

      // Get the all elements matching the selector in the base.
      const domElements = Array.from(
        base.querySelectorAll(this.selectors[elementType])
      );

      // Filter the elements so only direct children of the base are kept.
      const filteredElements = domElements.filter((item) =>
        strict ? item.parentElement === base : true
      );

      if (overwrite) {
        this._dom[elementType] = filteredElements;
      } else {
        this._dom[elementType] = [
          ...this._dom[elementType],
          ...filteredElements,
        ];
      }
    } else {
      throw new Error(
        `Graupl ${this.contructor.name}: "${elementType}" is not a valid element type.`
      );
    }
  }

  /**
   * Resets DOM elements.
   *
   * Elements listed in _domLock cannot be reset using this method.
   *
   * @protected
   *
   * @param {string} elementType - The type of element to clear.
   */
  _resetDOMElementType(elementType) {
    if (typeof this.selectors[elementType] === "string") {
      if (this._domLock.includes(elementType)) {
        throw new Error(
          `Graupl ${this.contructor.name}: "${elementType}" element cannot be reset through _resetDOMElementType.`
        );
      }

      if (Array.isArray(this._dom[elementType])) {
        this._dom[elementType] = [];
      } else {
        this._dom[elementType] = null;
      }
    } else {
      throw new Error(
        `Graupl ${this.contructor.name}: "${elementType}" is not a valid element type.`
      );
    }
  }

  /**
   * Sets all DOM elements within the accordion.
   *
   * Utilizes _setDOMElementType and
   * _resetDOMElementType.
   *
   * @protected
   */
  _setDOMElements() {
    this._setDOMElementType("accordionItems");
    this._resetDOMElementType("accordionItemToggles");

    this.dom.accordionItems.forEach((accordionItem) => {
      this._setDOMElementType("accordionItemToggles", accordionItem, false);
    });
  }

  /**
   * Creates and initializes all accordion items.
   *
   * @protected
   */
  _createChildElements() {}

  /**
   * Validates all aspects of the accordion item to ensure proper functionality.
   *
   * @protected
   *
   * @return {boolean} - The result of the validation.
   */
  _validate() {
    let check = true;

    return check;
  }

  /**
   * Handles focus events throughout the accordion for proper use.
   *
   * - Adds a `focus` listener to every accordion item so when it gains focus,
   *   it will set the accordion's current child to the index of the item.
   *
   * @protected
   */
  _handleFocus() {
    this.elements.accordionItems.forEach((accordionItem, index) => {
      accordionItem.dom.toggle.addEventListener("focus", () => {
        this.currentChild = index;
      });
    });
  }

  /**
   * Handles click events throughout the accordion item for proper use.
   *
   * - Adds a `pointerup` listener to the accordion item toggles that will toggle each accordion item.
   *
   * @protected
   */
  _handleClick() {
    this.elements.accordionItems.forEach((accordionItem, index) => {
      accordionItem.dom.toggle.addEventListener("pointerup", () => {
        this.currentChild = index;
        accordionItem.toggle();
      });
    });
  }

  /**
   * Handles keydown events throughout the accordion item for proper use.
   *
   * This method exists to assist the _handleKeyup method.
   *
   * - Adds a `keydown` listener to all accordion item toggles.
   *   - Blocks propagation on "Space" and "Enter" keys.
   *   - _If_ optionalKeySupport is enabled, blocks propagation on the following keys:
   *     - "ArrowDown", "ArrowUp", "Home", and "End".
   */
  _handleKeydown() {
    this.dom.accordionItemToggles.forEach((accordionToggle) => {
      accordionToggle.addEventListener("keydown", (event) => {
        const key = keyPress(event);
        const ToggleKeys = ["Space", "Enter"];

        // Prevent default behavior for space and enter keys.
        if (ToggleKeys.includes(key)) {
          preventEvent(event);
        } else if (this.optionalKeySupport) {
          const optionalKeys = ["ArrowDown", "ArrowUp", "Home", "End"];

          if (optionalKeys.includes(key)) {
            preventEvent(event);
          }
        }
      });
    });
  }

  /**
   * Handles keyup events throughout the accordion item for proper use.
   *
   * Adds the follow keybindings (explanations are taken from the WAI ARIA Practices Guide Accordion Pattern):
   *
   * - `Enter` or `Space`:
   *   - When focus is on the accordion header for a collapsed panel, expands the associated panel. If the implementation allows only one panel to be expanded, and if another panel is expanded, collapses that panel.
   *   - When focus is on the accordion header for an expanded panel, collapses the panel if the implementation supports collapsing. Some implementations require one panel to be expanded at all times and allow only one panel to be expanded; so, they do not support a collapse function.
   * - `Tab`: Moves focus to the next focusable element; all focusable elements in the accordion are included in the page `Tab` sequence.
   * - `Shift + Tab`: Moves focus to the previous focusable element; all focusable elements in the accordion are included in the page `Tab` sequence.
   * - `Down Arrow` (Optional): If focus is on an accordion header, moves focus to the next accordion header. If focus is on the last accordion header, either does nothing or moves focus to the first accordion header.
   * - `Up Arrow` (Optional): If focus is on an accordion header, moves focus to the previous accordion header. If focus is on the first accordion header, either does nothing or moves focus to the last accordion header.
   * - `Home` (Optional): When focus is on an accordion header, moves focus to the first accordion header.
   * - `End` (Optional): When focus is on an accordion header, moves focus to the last accordion header.
   *
   * Note: When the above explanations mention "accordion header", they are referring to the accordion item toggle.
   */
  _handleKeyup() {
    this.dom.accordionItemToggles.forEach((accordionToggle) => {
      accordionToggle.addEventListener("keyup", (event) => {
        const key = keyPress(event);

        switch (key) {
          case "Space":
          case "Enter":
            preventEvent(event);
            this.currentAccordionItem.toggle();

            break;
          case "Home":
            preventEvent(event);
            this.focusFirstChild();

            break;
          case "End":
            preventEvent(event);
            this.focusLastChild();

            break;
          case "ArrowDown":
            preventEvent(event);
            this.focusNextChild();

            break;
          case "ArrowUp":
            preventEvent(event);
            this.focusPreviousChild();

            break;
        }
      });
    });
  }

  /**
   * Sets the transition durations of the accordion as a CSS custom properties.
   *
   * The custom properties are:
   *   - `--graupl-accordion-transition-duration`,
   *   - `--graupl-accordion-open-transition-duration`, and
   *   - `--graupl-accordion-close-transition-duration`.
   *
   * The prefix of `graupl-` can be changed by setting the accordion's prefix value.
   *
   * @protected
   */
  _setTransitionDurations() {
    this.dom.accordion.style.setProperty(
      `--${this.prefix}accordion-transition-duration`,
      `${this.transitionDuration}ms`
    );

    this.dom.accordion.style.setProperty(
      `--${this.prefix}accordion-open-transition-duration`,
      `${this.openDuration}ms`
    );

    this.dom.accordion.style.setProperty(
      `--${this.prefix}accordion-close-transition-duration`,
      `${this.closeDuration}ms`
    );
  }

  /**
   * Focus the accordion's current child.
   *
   * @public
   */
  focusCurrentChild() {
    if (this.currentChild !== -1) {
      this.currentAccordionItem.focus();
    }
  }

  /**
   * Focuses the accordion's child at a given index.
   *
   * @public
   *
   * @param {number} index - The index of the child to focus.
   */
  focusChild(index) {
    this.blurCurrentChild();
    this.currentChild = index;
    this.focusCurrentChild();
  }

  /**
   * Focuses the accordion's first child.
   *
   * @public
   */
  focusFirstChild() {
    this.focusChild(0);
  }

  /**
   * Focus the accordion's last child.
   *
   * @public
   */
  focusLastChild() {
    this.focusChild(this.elements.accordionItems.length - 1);
  }

  /**
   * Focus the accordion's next child.
   *
   * @public
   */
  focusNextChild() {
    if (this.currentChild < this.elements.accordionItems.length - 1) {
      this.focusChild(this.currentChild + 1);
    } else {
      this.focusCurrentChild();
    }
  }

  /**
   * Focus the accordion's previous child.
   *
   * @public
   */
  focusPreviousChild() {
    if (this.currentChild > 0) {
      this.focusChild(this.currentChild - 1);
    } else {
      this.focusCurrentChild();
    }
  }

  /**
   * Blurs the accordion's current child.
   *
   * @public
   */
  blurCurrentChild() {
    if (this.currentChild !== -1) {
      this.currentAccordionItem.blur();
    }
  }
}

export default Accordion;
