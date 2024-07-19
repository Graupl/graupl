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
  isValidState,
  isValidEvent,
  isValidHoverType,
} from "../validate.js";

class Accordion {
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
   * The curent state of the accordion.
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
   * The current index of the accordion item.
   *
   * @readonly
   *
   * @type {number}
   *
   * @see _currentChild
   */
  get currentChild() {
    return _currentChild;
  }

  /**
   * The current state of the accordion.
   *
   * - "none" - No focus is present.
   * - "self" - The accordion has focus.
   *
   * @readonly
   *
   * @type {string}
   *
   * @see _focusState
   */
  get focusState() {
    return this._focusState;
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
   * A flag marking a submenu item.
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
   * @param {number}             [options.enterDelay = -1] - The delay for opening a accordion if the accordion is focusable (in miliseconds).
   * @param {number}             [options.leaveDelay = -1] - The delay for closing a accordion if the accordion is focusable (in miliseconds).
   * @param {boolean}            [options.initialize = true] - A flag to initialize the accordion immediately upon creation.
   */
  constructor({
    accordionElement,
    accordionItemSelector = ".accordion-item",
    accordionControllSelector = ".accordion-toggle",
    openClass = "show",
    closeClass = "hide",
    transitionClass = "transitioning",
    enterDelay = -1,
    leaveDelay = -1,
    initialize = true,
  }) {
    // Set DOM elements.
    this._dom.accordionElement = accordionElement;

    // Set DOM selectors.
    this._selectors.accordionItemSelector = accordionItemSelector;
    this._selectors.accordionControllSelector = accordionControllSelector;

    // Set open/close classes.
    this._openClass = openClass || "";
    this.closeClass = closeClass || "";
    this._transitionClass = transitionClass || "";

    // Set focus settings.
    this._enterDelay = enterDelay;
    this._leaveDelay = leaveDelay;

    if (initialize) {
      this.initialize();
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
  * The HTML elements for the accordion item in the DOM.
  *
  * @readonly
  *
  * @see _dom
  *
  * @type {object}
  */
  get dom() {
    return this._dom;
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
          initialize: true,
        });

        accordionItems.push(accordionItem);
      });

    this._accordionItems = accordionItems;
  }

  /**
   * Handles focus events throughout the menu for proper menu use.
   *
   * - Adds a `focus` listener to every menu item so when it gains focus,
   *   it will set the item's containing menu's focus state
   *   to "self".
   *
   * @protected
   */
  _handleFocus() {
    this._accordionItems.forEach((item, index) => {
      item.dom.controller.addEventListener("focus", () => {
        this.focusState = "self";
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
    // @todo: Add validation for the accordion item.
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
    // accordionElement,
    // accordionItemSelector = ".accordion-item",
    // accordionControllSelector = ".accordion-toggle",
    // openClass = "show",
    // closeClass = "hide",
    // transitionClass = "transitioning",
    // enterDelay = -1,
    // leaveDelay = -1,
    // initialize = true,
    // todo: Add checks here.
    // HTML element checks.
    // Query selector checks.
    // Class list checks.
    // Enter and leave delay check
    if (false) {
      this._errors.push(htmlElementChecks.error.message);
      check = false;
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

    // @todo: Add the logic of when an accordion item should be shown or hidden.
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
          this.focusNextChild();
          break;
        case "ArrowUp":
          console.log('Arrow up: Move down an item');
          this.focusPreviousChild();
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
    console.log(accordionItem);
    accordionItem?.focus();
  }

  /**
 * Focus the menu's next child.
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
   * Close all submenu children.
   *
   * @public
   */
  closeChildren() {
    this._accordionItems.forEach((accordionItem) => accordionItem.close());
  }

  /**
   * Close all submenu children.
   *
   * @public
   */
  closeChild(index) {
    this._accordionItems[index]?.close();
  }

  /**
   * Close all submenu children.
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

