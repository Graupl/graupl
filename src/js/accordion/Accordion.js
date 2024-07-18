/**
 * @file
 * The Accordion class.
 */

import AccordionBase from "./AccordionBase.js";
import AccordionItem from "./AccordionItem.js";

class Accordion extends AccordionBase {
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
    super({
      accordionElement,
      accordionItemSelector,
      accordionControllSelector,
      openClass,
      closeClass,
      transitionClass,
      enterDelay,
      leaveDelay,
      initialize,
    });

    console.log('Accordion ctor');

    if (initialize) {
      // this.initialize();
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
      // this._handleFocus();
      // this._handleClick();
      // this._handleKeydown();
      // this._handleKeyup();

    } catch (error) {
      console.error(error);
    }

    // @todo: Add ability to move up or down an accordion item.
    // @todo: add a method to set focus on an accordion item.
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
  *
  * @return {AccordionItem[]} - The accordion items created.
  */
  _populateAccordionItems() {
    console.log('Populate accordion items');
    const accordionItems = [];
    // this.dom.accordionElement.querySelectorAll(this.selectors.accordionItemSelector)
    //   .forEach((accordionItemElement) => {
    //     // @todo: Create the accordion item here.
    //     // const accordionItem = new AccordionItem({
    //     //   accordionElement,
    //     //   controllerElement: accordionElement.querySelector(".accordion-toggle") || null,
    //     //   initialize: true,
    //     // });

    //     // accordionItems.push(accordionItem);
    //   });

    return accordionItems;
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
    console.log('Click event');
    // if (this.dom.controller === null) {
    //   return;
    // }

    // this.dom.controller.addEventListener("pointerup", () => this.hide());
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
    console.log('Keydown event');
    // if (this.dom.controller === null) {
    //   return;
    // }

    // this.dom.controller.addEventListener("keydown", (event) => {
    //   const key = keyPress(event);
    //   const blockKeys = ["Space", "Enter", "ArrowDown", "ArrowUp", "Home", "End"];

    //   // Prevent default behavior for space and enter keys.
    //   if (blockKeys.includes(key)) {
    //     console.log('Event prevented' + key);
    //     preventEvent(event);
    //   }
    // });
  }

  /**
   * Handles keyup events throughout the accordion item for proper use.
   *
   * - Adds a `keyup` listener to the controller (if it exists).
   *   - Hides the accordion item when the user hits "Space" or "Enter".
   */
  _handleKeyup() {
    console.log('Keyup event');
    // if (this.dom.controller === null) {
    //   return;
    // }

    // // @todo: Add the logic of when an accordion item should be shown or hidden.
    // this.dom.controller.addEventListener("keyup", (event) => {
    //   const key = keyPress(event);

    //   switch (key) {
    //     case "Space":
    //     case "Enter":
    //       // @todo: Add a toggle method.
    //       this._hidden ? this.show() : this.hide();
    //       break;
    //     case "ArrowDown":
    //       // Add an accordion item class to handle the focus changing.
    //       console.log('Arrow down: Move up an item');
    //       break;
    //     case "ArrowUp":
    //       console.log('Arrow up: Move down an item');
    //       break;
    //   }
    // });
  }
}

export default Accordion;

