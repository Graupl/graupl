/**
 * @file
 * The Accordion class.
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
   * @property {boolean}       bubbles - A flag to bubble the event.
   * @property {Object<Accordion>} detail  - The details object containing the Accordion itself.
   */
  _showEvent = new CustomEvent("grauplAccordionShow", {
    bubbles: true,
    detail: { accordion: this },
  });

  /**
   * The event that is triggered when the accordion is hidden.
   *
   * @protected
   *
   * @event grauplAccordionHide
   *
   * @type {CustomEvent}
   *
   * @property {boolean}       bubbles - A flag to bubble the event.
   * @property {Object<Accordion>} detail  - The details object containing the Accordion itself.
   */
  _hideEvent = new CustomEvent("grauplAccordionHide", {
    bubbles: true,
    detail: { accordion: this },
  });

  /**
   * Decide if an accordion can be navigated, with up or down arrows when focused.
   *
   * @protected
   *
   * @type {boolean}
   */
  _focusOnArrow = false;


  /**
   * Constructs a new Accordion object.
   *
   * @param {object}               options                                   - The options object.
   * @param {HTMLElement}          options.accordionElement                  - The accordion element.
   * @param {?HTMLElement}         [options.controllerElement = null]        - The controller element.
   * @param {string|string[]|null} [options.showClass = show]                - The class to add when the accordion is shown.
   * @param {string|string[]|null} [options.hideClass = hide]                - The class to add when the accordion is hidden.
   * @param {string|string[]|null} [options.transitionClass = transitioning] - The class to add when the accordion is transitioning between shown and hidden.
   * @param {number}               [options.transitionTimer = 150]           - The time in milliseconds the transition will take.
   * @param {boolean}              [options.isHidden = false]                - A flag to determine the initial state of the accordion.
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
    this.dom.accordion = accordionElement;
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

      this._handleClick();
      this._handleKeydown();
      this._handleKeyup();
    } catch (error) {
      console.error(error);
    }
  }

  /**
  * The HTML elements for the accordion in the DOM.
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
   * The class to use the show the accordion.
   *
   * @type {string|string[]}
   *
   * @see _showClass
   */
  get showClass() {
    return this._showClass;
  }

  /**
   * The class to use to hide the accordion.
   *
   * @type {string|string[]}
   *
   * @see _hideClass
   */
  get hideClass() {
    return this._hideClass;
  }

  /**
   * The class to use when transitioning the accordion.
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
   * Decide if an accordion can be navigated, with up or down arrows when focused.
   *
   * @type {boolean}
   *
   * @see _focusOnArrow
   */
  get focusOnArrow() {
    return this._focusOnArrow;
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

  set focusOnArrow(value) {
    isValidType("boolean", { focusOnArrow: value });

    if (this._focusOnArrow !== value) {
      this._focusOnArrow = value;
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
 * Shows the accordion.
 *
 * @fires grauplAccordionShow
 *
 * @param {boolean} [emit = true] - A toggle to emit the show event once shown.
 */
  show(emit = true) {
    if (!this._hidden) {
      return;
    }

    // If we're dealing with transition classes, then we need to utilize
    // requestAnimationFrame to add the transition class, remove the hide class,
    // add the show class, and finally remove the transition class.
    if (this.transitionClass !== "") {
      addClass(this.transitionClass, this.dom.accordion);

      requestAnimationFrame(() => {
        if (this.hideClass !== "") {
          removeClass(this.hideClass, this.dom.accordion);
        }

        requestAnimationFrame(() => {
          if (this.showClass !== "") {
            addClass(this.showClass, this.dom.accordion);
          }

          requestAnimationFrame(() => {
            removeClass(this.transitionClass, this.dom.accordion);
          });
        });
      });
    } else {
      // Add the show class
      if (this.showClass !== "") {
        addClass(this.showClass, this.dom.accordion);
      }

      // Remove the hide class.
      if (this.hideClass !== "") {
        removeClass(this.hideClass, this.dom.accordion);
      }
    }

    this._hidden = false;

    if (emit) {
      this.dom.accordion.dispatchEvent(this._hideEvent);
    }
  }

  /**
   * Hides the accordion.
   *
   * @fires grauplAccordionHide
   *
   * @param {boolean} [emit = true] - A toggle to emit the hide event once shown.
   */
  hide(emit = true) {
    if (this._hidden) {
      return;
    }
    // If we're dealing with transition classes, then we need to utilize
    // requestAnimationFrame to add the transition class, remove the show class,
    // add the hide class, and finally remove the transition class.
    if (this.transitionClass !== "") {
      addClass(this.transitionClass, this.dom.accordion);

      requestAnimationFrame(() => {
        if (this.showClass !== "") {
          removeClass(this.showClass, this.dom.accordion);
        }

        requestAnimationFrame(() => {
          if (this.transitionTimer > 0) {
            setTimeout(() => {
              if (this.hideClass !== "") {
                addClass(this.hideClass, this.dom.accordion);
              }

              requestAnimationFrame(() => {
                removeClass(this.transitionClass, this.dom.accordion);
              });
            }, this.transitionTimer);
          } else {
            if (this.hideClass !== "") {
              addClass(this.hideClass, this.dom.accordion);
            }

            requestAnimationFrame(() => {
              removeClass(this.transitionClass, this.dom.accordion);
            });
          }
        });
      });
    } else {
      // Add the hide class
      if (this.hideClass !== "") {
        addClass(this.hideClass, this.dom.accordion);
      }

      // Remove the show class.
      if (this.showClass !== "") {
        removeClass(this.showClass, this.dom.accordion);
      }
    }

    this._hidden = true;

    if (emit) {
      this.dom.accordion.dispatchEvent(this._hideEvent);
    }
  }

  /**
   * Handles click events throughout the accordion for proper use.
   *
   * - Adds a `pointerup` listener to the controller that will hide the accordion.
   *
   * @protected
   */
  _handleClick() {
    if (this.dom.controller === null) {
      return;
    }

    this.dom.controller.addEventListener("pointerup", () => this.hide());
  }

  /**
   * Handles keydown events throughout the accordion for proper use.
   *
   * This method exists to assist the _handleKeyup method.
   *
   * - Adds a `keydown` listener to the controller (if it exists).
   *   - Blocks propagation on the following keys
   *   - "Space", "Enter", "ArrowDown", "ArrowUp", "Home", and "End".
   */
  _handleKeydown() {
    if (this.dom.controller === null) {
      return;
    }

    this.dom.controller.addEventListener("keydown", (event) => {
      const key = keyPress(event);
      const blockKeys = ["Space", "Enter", "ArrowDown", "ArrowUp", "Home", "End"];

      // Prevent default behavior for space and enter keys.
      if (blockKeys.includes(key)) {
        console.log('Event prevented' + key);
        preventEvent(event);
      }
    });
  }

  /**
   * Handles keyup events throughout the accordion for proper use.
   *
   * - Adds a `keyup` listener to the controller (if it exists).
   *   - Hides the accordion when the user hits "Space" or "Enter".
   */
  _handleKeyup() {
    if (this.dom.controller === null) {
      return;
    }

    // @todo: Add the logic of when an accordion should be shown or hidden.
    this.dom.controller.addEventListener("keyup", (event) => {
      const blockKeys = ["Space", "Enter"];
      const key = keyPress(event);

      // @todo: If option is selected allow the following,
      // - On down arrow move to the next panel and optionaly wrap arround.
      // - On arrow up move to the previous panel and optionaly wrap arround.

      if (blockKeys.includes(key)) {
        this._hidden ? this.show() : this.hide();
      }
    });
  }
}

export default Accordion;
