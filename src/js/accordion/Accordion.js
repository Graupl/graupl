/**
 * @file
 * The Accordion class.
 */

import AccordionItem from "./AccordionItem.js";

class Accordion {
  /**
   * The HTML elements for the accordion in the DOM.
   *
   * @protected
   *
   * @type {Object<HTMLElement>}
   */
  _dom = {
    accordionItems: null,
    controller: null,
  };

  /**
   * A flag to determine if the accordion item is hidden.
   *
   * @protected
   *
   * @type {Int16Array}
   */
  _activeAccordionIndex = 0;

  /**
   * Constructs a new Accordion object.
   *
   * @param {HTMLDivElement[]} controllerElement - The accordion element.
   * @param {AccordionItem[]}  accordionItems    - The array of accordion elements.
   */
  constructor(accordionItems) {
    this.dom.accordionItems = accordionItems;
    this.dom.controller = controllerElement;

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
  * The HTML elements for the accordion item in the DOM.
  *
  * @readonly
  *
  * @see _activeAccordionIndex
  *
  * @type {Int16Array}
  */
  get activeAccordionIndex() {
    return this._activeAccordionIndex;
  }

  set activeAccordionIndex(value) {
    isValidType("number", { _activeAccordionIndex: value });

    if (this._activeAccordionIndex !== value) {
      this._activeAccordionIndex = value;
    }
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
}

export default Accordion;

