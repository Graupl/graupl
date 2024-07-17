/**
 * @file
 * The alert class.
 */

import { isValidClassList, isValidInstance, isValidType } from "../validate.js";
import { addClass, removeClass } from "../domHelpers.js";
import { keyPress, preventEvent } from "../eventHandlers.js";

class Accordion {
  /**
   * The HTML elements for the accordion in the DOM.
   *
   * @protected
   *
   * @type {Object<HTMLElement>}
   */
  _dom = {
    accordion: null,
    controller: null,
  };

  /**
   * A flag to determine if the accordion is hidden.
   *
   * @protected
   *
   * @type {boolean}
   */
  _hidden = false;

  /**
   * The class to use to show the accordion.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _showClass = "";

  /**
   * The class to use to hide the accordion.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _hideClass = "";

  /**
   * The class to use when transitioning the accordion.
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
   * The event that is triggered when the accordion is shown.
   *
   * @protected
   *
   * @event grauplAccordionShow
   *
   * @type {CustomEvent}
   *
   * @property {boolean}       bubbles - A flag to buggle the event.
   * @property {Object<Alert>} detail  - The details object container the Alert itself.
   */
  _showEvent = new CustomEvent("grauplAccordionShow", {
    bubbles: true,
    detail: { accordion: this },
  });

  /**
   * The event that is triggered when the alert is hidden.
   *
   * @protected
   *
   * @event grauplAlertHide
   *
   * @type {CustomEvent}
   *
   * @property {boolean}       bubbles - A flag to bubble the event.
   * @property {Object<Alert>} detail  - The details object containing the Alert itself.
   */
  _hideEvent = new CustomEvent("grauplAccordionHide", {
    bubbles: true,
    detail: { accordion: this },
  });

  /**
   * Constructs a new Accordion object.
   *
   * @param {object}               options                                   - The options object.
   * @param {HTMLElement}          options.accordionElement                      - The alert element.
   * @param {?HTMLElement}         [options.controllerElement = null]        - The controller element.
   * @param {string|string[]|null} [options.showClass = show]                - The class to add when the alert is shown.
   * @param {string|string[]|null} [options.hideClass = hide]                - The class to add when
   * @param {string|string[]|null} [options.transitionClass = transitioning] - The class to add when the alert is transitioning between shown and hidden.
   * @param {number}               [options.transitionTimer = 150]           - The time in milliseconds the transition will take.
   * @param {boolean}              [options.isHidden = false]                - A flag to determine the initial state of the alert.
   * @param {boolean}              [options.initialize = false]              - A flag to auto-initialize.
   * @param {boolean}              [options.focusOnArrow = false]            - A flag to allow focus on up or down arrows.
   */
  constructor({
    accordionElement,
    controllerElement = null,
    showClass = "show",
    hideClass = "hide",
    transitionClass = "transitioning",
    transitionTimer = 150,
    isHidden = false,
    initialize = false,
    focusOnArrow = false,
  }) {
    this._dom.alert = accordionElement;
    this._dom.controller = controllerElement;
    this._showClass = showClass || "";
    this._hideClass = hideClass || "";
    this._transitionClass = transitionClass || "";
    this._transitionTimer = transitionTimer;
    this._hidden = isHidden;

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

      this._handleClick();
      this._handleKeydown();
      // this._handleKeyup();
    } catch (error) {
      console.error(error);
    }
  }

  /**
  * The HTML elements for the alert in the DOM.
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
   * The class to use the show the alert.
   *
   * @type {string|string[]}
   *
   * @see _showClass
   */
  get showClass() {
    return this._showClass;
  }

  /**
   * The class to use to hide the alert.
   *
   * @type {string|string[]}
   *
   * @see _hideClass
   */
  get hideClass() {
    return this._hideClass;
  }

  /**
   * The class to use when transitioning the alert.
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

  /**
 * Validates all aspects of the accordion to ensure proper functionality.
 *
 * @protected
 *
 * @return {boolean} - The result of the validation.
 */
  _validate() {
    // @todo: Add validation for the accordion.
    let check = true;
    return check;
  }

  /**
   * Handles click events throughout the alert for proper use.
   *
   * - Adds a `pointerup` listener to the controller that will hide the alert.
   *
   * @protected
   */
  _handleClick() {
    if (this._dom.controller === null) {
      return;
    }

    this._dom.controller.addEventListener("pointerup", () => this.hide());
  }

  /**
   * Handles keydown events throughout the alert for proper use.
   *
   * This method exists to assist the _handleKeyup method.
   *
   * - Adds a `keydown` listener to the controller (if it exists).
   *   - Blocks propagation on "Space" and "Enter" keys.
   */
  _handleKeydown() {
    if (this._dom.controller === null) {
      return;
    }

    this._dom.controller.addEventListener("keydown", (event) => {
      const key = keyPress(event);
      const blockKeys = ["Space", "Enter", "ArrowDown", "ArrowUp", "Home", "End"];

      // Prevent default behavior for space and enter keys.
      if (blockKeys.includes(key)) {
        console.log('Event prevented' + key);
        preventEvent(event);
      }
    });
  }
}

export default Accordion;
