/**
 * @file
 * The Accordion class.
 */

import AccordionItem from "./AccordionItem.js";
import { keyPress, preventEvent } from "../eventHandlers.js";
import {
  isValidInstance,
  isValidType,
  isQuerySelector,
  isValidClassList,
} from "../validate.js";

class Accordion {
  /**
   * Constructs a new `Accordion`.
   *
   * @param {object}             options - The options for generating the accordion.
   * @param {HTMLElement}        [options.accordionElement] - The accordion element in the DOM.
   * @param {string}             [options.accordionItemSelector = .accordion-item] - The query selector string for accordion items.
   * @param {string}             [options.accordionControllSelector = .accordion-toggle] - The query selector string for accordion controlls.
   * @param {?(string|string[])} [options.openClass = show] - The class to apply when a accordion is "open".
   * @param {?(string|string[])} [options.closeClass = hide] - The class to apply when a accordion is "closed".
   * @param {?(string|string[])} [options.transitionClass = transitioning] - The class to apply when a accordion is transitioning between "open" and "closed" states.
   * @param {boolean}            [options.initialize = true] - A flag to initialize the accordion immediately upon creation.
   * @param {number}             [options.transitionTimer = 150] - A timer to set how long a transition will last for.
   * @param {number}             [options.isHidden = false] - A flag to determine if the accordion items will start open or closed.
   * @param {boolean}            [options.optionalKeySupport = true] - A flag to determine if accordions can be navigated with arrows.
   */
  constructor({
    accordionElement,
    accordionItemSelector = ".accordion-item",
    accordionControllSelector = ".accordion-trigger",
    openClass = "show",
    closeClass = "hide",
    transitionClass = "transitioning",
    initialize = true,
    transitionTimer = 1500,
    optionalKeySupport = true,
  }) {

    // Set DOM elements.
    this._dom.accordionElement = accordionElement;

    // Set DOM selectors.
    this._selectors.accordionItemSelector = accordionItemSelector;
    this._selectors.accordionControllSelector = accordionControllSelector;

    // Set open/close classes.
    this._openClass = openClass || "";
    this._closeClass = closeClass || "";
    this._transitionClass = transitionClass || "";

    // Set values
    this._transitionTimer = transitionTimer;
    this._optionalKeySupport = optionalKeySupport;

    if (initialize) {
      this.initialize();
    }
  }

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
   * errors - The list of errors found during validation.
   *
   * @protected
   *
   * @type {string[]}
   */
  _errors = [];

  /**
   * The index of the curent child node.
   *
   * @protected
   *
   * @type {number}
   */
  _currentChild = 0;

  /**
   * The current state of the accordion's focus.
   *
   * @protected
   *
   * @type {string}
   */
  _focusState = "none";

  /**
    * The DOM elements within the accordion.
    *
    * @protected
    *
    * @type {Object<HTMLElement, HTMLElement[]>}
    *
    * @property {HTMLElement}   accordionElement           - The accordion element.
    */
  _dom = {
    accordionElement: null,
  };

  /**
   * The list of accordion items.
   *
   * @protected
   *
   * @type {AccordionItem[]}
  */
  _accordionItems = [];

  /**
   * The query selectors used by the accordion.
   *
   * @protected
   *
   * @type {Object<string>}
   *
   * @property {string} accordionItemSelector      - The query selector for accordion items.
   * @property {string} accordionControllSelector  - The query selector for accordion controls.
   */
  _selectors = {
    accordionItemSelector: "",
    accordionControllSelector: "",
  };

  /**
   * The timer for transitions.
   *
   * @protected
   *
   * @type {number}
   *
   */
  _transitionTimer = 150;

  /**
   * A flag to decide if the accordion items can be navigated by arrows.
   *
   * @protected
   *
   * @type {boolean}
   *
   */
  _optionalKeySupport = true;

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
   * The list of accordion items.
   *
   * @readonly
   *
   * @type {AccordionItem[]}
   *
   * @see _accordionItems
   */
  get accordionItems() {
    return this._accordionItems;
  }

  /**
   * The current state of the accordion's focus.
   *
   * @type {string}
   *
   * @see _focusState
   */
  get focusState() {
    return this._focusState;
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

    if (this._currentChild !== value &&
      value >= 0 && value < this._accordionItems.length) {
      this._currentChild = value;
    }
  }

  set accordionItems(value) {
    isValidType("object", { value });

    if (value?.isArray() && value.every((item) => item instanceof AccordionItem)) {
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

      this._populateAccordionItems();
      this._handleFocus();
      this._handleClick();
      this._handleKeydown();
      this._handleKeyup();

    } catch (error) {
      console.error(error);
    }
  }

  /**
  * Create accordion items based on the selectors.
  *
  * @protected
  */
  _populateAccordionItems() {
    const accordionItems = [];

    this.dom.accordionElement.querySelectorAll(this._selectors.accordionItemSelector)
      .forEach((accordionItemElement) => {
        const accordionItem = new AccordionItem({
          accordionItemElement,
          controllerElement: accordionItemElement.querySelector(this._selectors.accordionControllSelector) || null,
          showClass: this.openClass,
          hideClass: this.closeClass,
          transitionClass: this.transitionClass,
          transitionTimer: this.transitionTimer,
          isHidden: this.isHidden,
          optionalKeySupport: this.optionalKeySupport
        });

        accordionItems.push(accordionItem);
      });

    this._accordionItems = accordionItems;
  }

  /**
   * Handles focus events throughout the accordion for proper use.
   *
   * @protected
   */
  _handleFocus() {
    this._accordionItems.forEach((item, index) => {
      item.dom.controller.addEventListener("focus", () => {
        this._focusState = "self";
        this.currentChild = index;
      });
    });
  }

  /**
  * Validates all aspects of the accordion item to ensure proper functionality.
  *
  * @protected
  *
  * @return {boolean} - The result of the validation.
  */
  _validate() {
    let check = true;
    let htmlElementChecks;

    if (this.dom.accordionElement !== null) {
      htmlElementChecks = isValidInstance(HTMLElement, {
        accordionElement: this.dom.accordionElement,
      });
    }

    if (!htmlElementChecks.status) {
      this._errors.push(htmlElementChecks.error.message);
      check = false;
    }

    // Query selector checks.
    let querySelectorChecks;

    if (this._selectors._selectors !== "" && this._selectors.accordionControllSelector !== "") {
      querySelectorChecks = isQuerySelector({
        accordionItemSelector: this._selectors.accordionItemSelector,
        accordionControllSelector: this._selectors.accordionControllSelector,
      });
    } else {
      this._errors.push("Accordion selectors cannot be empty.");
      check = false;
    }

    if (!querySelectorChecks.status) {
      this._errors.push(querySelectorChecks.error.message);
      check = false;
    }

    // Class List Checks
    if (this._openClass !== "") {
      const openClassCheck = isValidClassList({ openClass: this._openClass });

      if (!openClassCheck.status) {
        this._errors.push(openClassCheck.error.message);
        check = false;
      }
    }

    if (this._closeClass !== "") {
      const closeClassCheck = isValidClassList({
        closeClass: this._closeClass,
      });

      if (!closeClassCheck.status) {
        this._errors.push(closeClassCheck.error.message);
        check = false;
      }
    }

    if (this._transitionClass !== "") {
      const transitionClassCheck = isValidClassList({
        transitionClass: this._transitionClass,
      });

      if (!transitionClassCheck.status) {
        this._errors.push(transitionClassCheck.error.message);
        check = false;
      }
    }

    return check;
  }

  /**
   * Handles click events throughout the accordion item for proper use.
   *
   * - Adds a `pointerup` listener to the controller that will hide the accordion item.
   *
   * @protected
   */
  _handleClick() {
    if (this._accordionItems === null) {
      return;
    }

    this._accordionItems.forEach((item, index) => {
      item.dom.controller.addEventListener("pointerup", () => {
        item.toggle();
      });
    });
  }

  /**
   * Handles keydown events throughout the accordion item for proper use.
   *
   * This method exists to assist the _handleKeyup method.
   *
   * - Adds a `keydown` listener to the controller (if it exists).
   *   - Blocks propagation on the following keys
   *   - "Space", "Enter", "ArrowDown", "ArrowUp", "Home", and "End".
   */
  _handleKeydown() {
    if (this.dom.accordionElement === null) {
      return;
    }

    this.dom.accordionElement.addEventListener("keydown", (event) => {
      const key = keyPress(event);
      const blockKeys = ["Space", "Enter", "ArrowDown", "ArrowUp", "Home", "End"];

      // Prevent default behavior for space and enter keys.
      if (blockKeys.includes(key)) {
        preventEvent(event);
      }
    });
  }

  /**
   * Handles keyup events throughout the accordion item for proper use.
   *
   * - Adds a `keyup` listener to the controller (if it exists).
   *   - Hides the accordion item when the user hits "Space" or "Enter".
   */
  _handleKeyup() {
    if (this.dom.accordionElement === null) {
      return;
    }

    this.dom.accordionElement.addEventListener("keyup", (event) => {
      const key = keyPress(event);

      switch (key) {
        case "Home":
          this.focusFirstChild();
          break;
        case "End":
          this.focusLastChild();
          break;
        case "Space":
        case "Enter":
          this.toggleCurrentChild();
          break;
        case "ArrowDown":
          this.optionalKeySupport && this.focusNextChild();
          break;
        case "ArrowUp":
          this.optionalKeySupport && this.focusPreviousChild();
          break;
      }
    });
  }

  /**
   * Focus the accordions first child.
   *
   * @public
   */
  focusFirstChild() {
    const firstAccordionItem = this._accordionItems[0];
    firstAccordionItem?.focus();
  }

  /**
   * Focus the accordions last child.
   *
   * @public
   */
  focusLastChild() {
    const accordionItemsLength = this._accordionItems.length;
    const accordionItem = this._accordionItems[accordionItemsLength - 1];
    accordionItem.focus();
  }

  /**
 * Focus the accordions next child.
 *
 * @public
 */
  focusNextChild() {
    const accordionItemsLength = this._accordionItems.length;
    if (this.currentChild < accordionItemsLength - 1) {
      this._accordionItems[this.currentChild + 1]?.focus();
    } else {
      this._accordionItems[this.currentChild]?.focus();
    }
  }

  /**
   * Focus the accordions previous child.
   *
   * @public
   */
  focusPreviousChild() {
    if (this.currentChild > 0) {
      this._accordionItems[this.currentChild - 1]?.focus();
    } else {
      this._accordionItems[this.currentChild]?.focus();
    }
  }

  /**
  * Blurs the accordions current child.
  *
  * @public
  */
  focusCurrentChild() {
    this.focusState = "self";

    if (this.currentChild !== -1) {
      this._accordionItems[this.currentChild]?.focus();
    }
  }

  /**
  * Blurs the accordions current child.
  *
  * @public
  */
  blurCurrentChild() {
    this.focusState = "none";

    if (this.currentChild !== -1) {
      this._accordionItems[this.currentChild]?.blur();
    }
  }

  /**
   * Blurs all children.
   *
   * @public
   */
  blurChildren() {
    this._accordionItems.forEach((accordionItem) => {
      accordionItem.blur();
    });
  }

  /**
   * Close all accordion items.
   *
   * @public
   */
  closeChildren() {
    this._accordionItems.forEach((accordionItem) => accordionItem.close());
  }

  /**
   * Close an accordion item by index.
   *
   * @public
   */
  closeChild(index) {
    this._accordionItems[index]?.close();
  }

  /**
   * Open an accordion item by index..
   *
   * @public
   */
  openChild(index) {
    this._accordionItems[index]?.open();
  }

  /**
   * Toggle current child.
   *
   * @public
   */
  toggleCurrentChild() {
    if (this.currentChild !== -1) {
      this._accordionItems[this.currentChild]?.toggle();
    }
  }
}

export default Accordion;

