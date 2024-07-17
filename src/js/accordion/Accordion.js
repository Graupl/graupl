/**
 * @file
 * The Accordion class.
 */

import AccordionItem from "./AccordionItem.js";

class Accordion {
  // @todo: Take in the accordion items as an array of objects.
  /**
 * Constructs a new Accordion item object.
 *
 * @param {AccordionItem[]}      AccordionItems                                   - The options object.
 * @param {HTMLElement}          options.accordionItemElement              - The accordion item element.
 * @param {?HTMLElement}         [options.controllerElement = null]        - The controller element.
 * @param {string|string[]|null} [options.showClass = show]                - The class to add when the accordion item is shown.
 * @param {string|string[]|null} [options.hideClass = hide]                - The class to add when the accordion item is hidden.
 * @param {string|string[]|null} [options.transitionClass = transitioning] - The class to add when the accordion item is transitioning between shown and hidden.
 * @param {number}               [options.transitionTimer = 150]           - The time in milliseconds the transition will take.
 * @param {boolean}              [options.isHidden = false]                - A flag to determine the initial state of the accordion item.
 * @param {boolean}              [options.initialize = false]              - A flag to auto-initialize.
 * @param {boolean}              [options.focusOnArrow = false]            - A flag to allow focus on up or down arrows.
 */
  constructor({
    accordionItemElement,
    controllerElement = null,
    showClass = "show",
    hideClass = "hide",
    transitionClass = "transitioning",
    transitionTimer = 150,
    isHidden = false,
    initialize = false,
    focusOnArrow = false,
  }) {
    this.dom.accordionItem = accordionItemElement;
    this.dom.controller = controllerElement;
    this._showClass = showClass || "";
    this._hideClass = hideClass || "";
    this._transitionClass = transitionClass || "";
    this._transitionTimer = transitionTimer;
    this._hidden = isHidden;
    this._focusOnArrow = focusOnArrow;

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

      const accordions = [];

      const accordion = new Accordion({
        accordionElement,
        controllerElement: accordionElement.querySelector(".accordion-toggle") || null,
        initialize: true,
      });

      accordions.push(accordion);

    } catch (error) {
      console.error(error);
    }
  }
}

export default Accordion;

