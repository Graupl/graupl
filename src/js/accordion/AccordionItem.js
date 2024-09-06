/**
 * @file
 * The Accordion Item class.
 */

import { isValidClassList, isValidType } from "../validate.js";
import { addClass, removeClass } from "../domHelpers.js";

/**
 * Creates a new accordion item.
 * @class
 */
class AccordionItem {
  /**
   * Constructs a new Accordion item object.
   * @constructor
   *
   * @param {object}               options                                   - The options object.
   * @param {HTMLElement}          options.accordionItemElement              - The accordion item element.
   * @param {?HTMLElement}         [options.controllerElement = null]        - The controller element.
   * @param {string|string[]|null} [options.showClass = show]                - The class to add when the accordion item is shown.
   * @param {string|string[]|null} [options.hideClass = hide]                - The class to add when the accordion item is hidden.
   * @param {string|string[]|null} [options.transitionClass = transitioning] - The class to add when the accordion item is transitioning between shown and hidden.
   * @param {number}               [options.transitionTimer = 150]           - The time in milliseconds the transition will take.
   * @param {boolean}              [options.isHidden = false]                - A flag to determine the initial state of the accordion item.
   * @param {boolean}              [options.initialize = false]              - A flag to auto-initialize.
   * @param {boolean}              [options.optionalKeySupport = false]      - A flag to allow focus on up or down arrows.
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
    optionalKeySupport = false,
  }) {
    this._dom = {
      accordionItem: null,
      controller: null,
    };
    this._dom.accordionItem = accordionItemElement;
    this._dom.controller = controllerElement;
    this._showClass = showClass;
    this._hideClass = hideClass;
    this._transitionClass = transitionClass;
    this._transitionTimer = transitionTimer;
    this._hidden = isHidden;
    this._optionalKeySupport = optionalKeySupport;

    if (initialize) {
      this.initialize();
    }
  }

  /**
   * The HTML elements for the accordion item in the DOM.
   *
   * @protected
   *
   * @type {Object<HTMLElement>}
   */
  _dom = {
    accordionItem: null,
    controller: null,
  };

  /**
   * A flag to determine if the accordion item is hidden.
   *
   * @protected
   *
   * @type {boolean}
   */
  _hidden = false;

  /**
   * The class to use to show the accordion item.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _showClass = "";

  /**
   * The class to use to hide the accordion item.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _hideClass = "";

  /**
   * The class to use when transitioning the accordion item.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _transitionClass = "";

  /**
   * The time in milliseconds the transition will take.
   *
   * @protected
   *
   * @type {number}
   */
  _transitionTimer = 150;

  /**
   * A flag to allow focus on up or down arrows.
   *
   * @protected
   *
   * @type {boolean}
   */
  _optionalKeySupport = false;

  /**
     * The event that is triggered when the accordion item is shown.
     *
     * @protected
     *
     * @event grauplAccordionItemShow
     *
     * @type {CustomEvent}
     *
     * @property {boolean}       bubbles - A flag to bubble the event.
     * @property {Object<AccordionItem>} detail  - The details object containing the Accordion item itself.
     */
  _showEvent = new CustomEvent("grauplAccordionItemShow", {
    bubbles: true,
    detail: { accordionItem: this },
  });

  /**
   * The event that is triggered when the accordion item is hidden.
   *
   * @protected
   *
   * @event grauplAccordionItemHide
   *
   * @type {CustomEvent}
   *
   * @property {boolean}       bubbles - A flag to bubble the event.
   * @property {Object<AccordionItem>} detail  - The details object containing the Accordion item itself.
   */
  _hideEvent = new CustomEvent("grauplAccordionItemHide", {
    bubbles: true,
    detail: { accordionItem: this },
  });

  /**
   * An array of error messages generated by the accordion item.
   *
   * @protected
   *
   * @type {string[]}
   */
  _errors = [];

  /**
   * Initializes the accordion item.
   */
  initialize() {
    try {
      if (!this._validate()) {
        throw new Error(
          `Graupl Accordion item: cannot initialize accordion item. The following errors have been found:\n - ${this.errors.join(
            "\n - "
          )}`
        );
      }
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
  * A flag to determine if the accordion item is hidden.
  *
  * @readonly
  *
  * @see _hidden
  *
  * @type {object}
  */
  get isHidden() {
    return this._hidden;
  }

  /**
   * The class to use the show the accordion item.
   *
   * @type {string|string[]}
   *
   * @see _showClass
   */
  get showClass() {
    return this._showClass;
  }

  /**
   * The class to use to hide the accordion item.
   *
   * @type {string|string[]}
   *
   * @see _hideClass
   */
  get hideClass() {
    return this._hideClass;
  }

  /**
   * The class to use when transitioning the accordion item.
   *
   * @type {string|string[]}
   *
   * @see _transitionClass
   */
  get transitionClass() {
    return this._transitionClass;
  }

  /**
   * The time in milliseconds the transition will take.
   *
   * @type {number}
   *
   * @see _transitionTimer
   */
  get transitionTimer() {
    return this._transitionTimer;
  }

  /**
   * A flag to allow focus on up or down arrows.
   *
   * @type {boolean}
   *
   * @see _optionalKeySupport
   */
  get optionalKeySupport() {
    return this._optionalKeySupport;
  }

  /**
 * An array of error messages generated by the accordion item.
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

  set isHidden(value) {
    isValidType('boolean', { isHidden: value });

    if (this._hidden !== value) {
      this._hidden = value;
    }
  }

  set showClass(value) {
    isValidClassList({ showClass: value });

    if (this._showClass !== value) {
      this._showClass = value;
    }
  }

  set hideClass(value) {
    isValidClassList({ hideClass: value });

    if (this._hideClass !== value) {
      this._hideClass = value;
    }
  }

  set transitionClass(value) {
    isValidClassList({ transitionClass: value });

    if (this._transitionClass !== value) {
      this._transitionClass = value;
    }
  }

  set transitionTimer(value) {
    isValidType("number", { transitionTimer: value });

    if (this._transitionTimer !== value) {
      this._transitionTimer = value;
    }
  }

  set optionalKeySupport(value) {
    isValidType("boolean", { optionalKeySupport: value });

    if (this._optionalKeySupport !== value) {
      this._optionalKeySupport = value;
    }
  }

  /**
   * Toggle the accordion item.
   */
  toggle() {
    this._hidden ? this.show() : this.hide();
  }

  /**
  * Validates all aspects of the accordion item to ensure proper functionality.
  *
  * @protected
  *
  * @return {boolean} - The result of the validation.
  */
  _validate() {
    // Value Type Checks
    let check = true;

    const isHiddenCheck = isValidType("boolean", {
      isHidden: this._hidden,
    });

    if (!isHiddenCheck.status) {
      this._errors.push(isHiddenCheck.error.message);
      check = false;
    }

    const transitionTimerCheck = isValidType("number", {
      transitionTimer: this._transitionTimer,
    });

    if (!transitionTimerCheck.status) {
      this._errors.push(transitionTimerCheck.error.message);
      check = false;
    }

    const optionalKeySupportCheck = isValidType("boolean", {
      optionalKeySupport: this._optionalKeySupport,
    });

    if (!optionalKeySupportCheck.status) {
      this._errors.push(optionalKeySupportCheck.error.message);
      check = false;
    }

    // Class List Checks
    const isClassListValidCheck = isValidClassList({
      showClass: this._showClass,
      hideClass: this._hideClass,
      transitionClass: this._transitionClass,
    });

    if (!isClassListValidCheck.status) {
      this._errors.push(isClassListValidCheck.error.message);
      check = false;
    }

    return check;
  }

  /**
  * Shows the accordion item.
  *
  * @fires grauplAccordionItemShow
  *
  * @param {boolean} [emit = true] - Emit the show event once shown.
  */
  show(emit = true) {
    if (!this._hidden) {
      return;
    }

    // If we're dealing with transition classes, then we need to utilize
    // requestAnimationFrame to add the transition class, remove the hide class,
    // add the show class, and finally remove the transition class.
    if (this.transitionClass !== "") {
      addClass(this.transitionClass, this.dom.accordionItem);

      requestAnimationFrame(() => {
        if (this.hideClass !== "") {
          removeClass(this.hideClass, this.dom.accordionItem);
        }

        requestAnimationFrame(() => {
          if (this.showClass !== "") {
            addClass(this.showClass, this.dom.accordionItem);
          }

          requestAnimationFrame(() => {
            removeClass(this.transitionClass, this.dom.accordionItem);
          });
        });
      });
    } else {
      // Add the show class
      if (this.showClass !== "") {
        addClass(this.showClass, this.dom.accordionItem);
      }

      // Remove the hide class.
      if (this.hideClass !== "") {
        removeClass(this.hideClass, this.dom.accordionItem);
      }
    }

    this._hidden = false;

    // Set aria-expanded to true when hiding accordion item.
    this.dom.controller.setAttribute("aria-expanded", "true");

    if (emit) {
      this.dom.accordionItem.dispatchEvent(this._showEvent);
    }
  }

  /**
   * Hides the accordion item.
   *
   * @fires grauplAccordionItemHide
   *
   * @param {boolean} [emit = true] - Emit the hide event once hidden.
   */
  hide(emit = true) {
    if (this._hidden) {
      return;
    }
    // If we're dealing with transition classes, then we need to utilize
    // requestAnimationFrame to add the transition class, remove the show class,
    // add the hide class, and finally remove the transition class.
    if (this.transitionClass !== "") {
      addClass(this.transitionClass, this.dom.accordionItem);

      requestAnimationFrame(() => {
        if (this.showClass !== "") {
          removeClass(this.showClass, this.dom.accordionItem);
        }

        requestAnimationFrame(() => {
          if (this.transitionTimer > 0) {
            setTimeout(() => {
              if (this.hideClass !== "") {
                addClass(this.hideClass, this.dom.accordionItem);
              }

              requestAnimationFrame(() => {
                removeClass(this.transitionClass, this.dom.accordionItem);
              });
            }, this.transitionTimer);
          } else {
            if (this.hideClass !== "") {
              addClass(this.hideClass, this.dom.accordionItem);
            }

            requestAnimationFrame(() => {
              removeClass(this.transitionClass, this.dom.accordionItem);
            });
          }
        });
      });
    } else {
      // Add the hide class
      if (this.hideClass !== "") {
        addClass(this.hideClass, this.dom.accordionItem);
      }

      // Remove the show class.
      if (this.showClass !== "") {
        removeClass(this.showClass, this.dom.accordionItem);
      }
    }

    // Set aria-expanded to false when hiding accordion item.
    this.dom.controller.setAttribute("aria-expanded", "false");

    this._hidden = true;

    if (emit) {
      this.dom.accordionItem.dispatchEvent(this._hideEvent);
    }
  }

  /**
   * Focuses the accordion item.
   */
  focus() {
    this.dom.controller.focus();
  }

  /**
   * Blurs the accordion item.
   */
  blur() {
    this.dom.controller.focus();
  }
}

export default AccordionItem;
