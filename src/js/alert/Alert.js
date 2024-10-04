/**
 * @file
 * The alert class.
 */

import { isValidClassList, isValidInstance, isValidType } from "../validate.js";
import { addClass, removeClass } from "../domHelpers.js";
import { keyPress, preventEvent } from "../eventHandlers.js";

class Alert {
  /**
   * The HTML elements for the alert in the DOM.
   *
   * @protected
   *
   * @type {Object<HTMLElement>}
   */
  _dom = {
    alert: null,
    controller: null,
  };

  /**
   * A flag to determine if the alert is hidden.
   *
   * @protected
   *
   * @type {boolean}
   */
  _hidden = false;

  /**
   * The class to use to show the alert.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _showClass = "";

  /**
   * The class to use to hide the alert.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _hideClass = "";

  /**
   * The class to use when transitioning the alert.
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
   * An array of error messages generated by the alert.
   *
   * @protected
   *
   * @type {string[]}
   */
  _errors = [];

  /**
   * The event that is triggered when the alert is shown.
   *
   * @protected
   *
   * @event grauplAlertShow
   *
   * @type {CustomEvent}
   *
   * @property {boolean}       bubbles - A flag to buggle the event.
   * @property {Object<Alert>} detail  - The details object container the Alert itself.
   */
  _showEvent = new CustomEvent("grauplAlertShow", {
    bubbles: true,
    detail: { alert: this },
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
  _hideEvent = new CustomEvent("grauplAlertHide", {
    bubbles: true,
    detail: { alert: this },
  });

  /**
   * Constructs a new `Alert`.
   *
   * @param {object}               options                                   - The options object.
   * @param {HTMLElement}          options.alertElement                      - The alert element.
   * @param {?HTMLElement}         [options.controllerElement = null]        - The controller element.
   * @param {string|string[]|null} [options.showClass = show]                - The class to add when the alert is shown.
   * @param {string|string[]|null} [options.hideClass = hide]                - The class to add when
   * @param {string|string[]|null} [options.transitionClass = transitioning] - The class to add when the alert is transitioning between shown and hidden.
   * @param {number}               [options.transitionTimer = 150]           - The time in milliseconds the transition will take.
   * @param {boolean}              [options.isHidden = false]                - A flag to determine the initial state of the alert.
   * @param {boolean}              [options.initialize = false]              - AA flag to initialize the alert immediately upon creation.
   */
  constructor({
    alertElement,
    controllerElement = null,
    showClass = "show",
    hideClass = "hide",
    transitionClass = "transitioning",
    transitionTimer = 150,
    isHidden = false,
    initialize = false,
  }) {
    this._dom.alert = alertElement;
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
   * Initializes the alert.
   */
  initialize() {
    try {
      if (!this._validate()) {
        throw new Error(
          `Graupl Alert: cannot initialize alert. The following errors have been found:\n - ${this.errors.join(
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
   * Validates all aspects of the alert to ensure proper functionality.
   *
   * @protected
   *
   * @return {boolean} - The result of the validation.
   */
  _validate() {
    let check = true;

    // HTML element checks.
    let htmlElementChecks;

    if (this._dom.controller !== null) {
      htmlElementChecks = isValidInstance(HTMLElement, {
        alertElement: this._dom.alert,
        controllerElement: this._dom.controller,
      });
    } else {
      htmlElementChecks = isValidInstance(HTMLElement, {
        alertElement: this._dom.alert,
      });
    }

    if (!htmlElementChecks.status) {
      this._errors.push(htmlElementChecks.message);
      check = false;
    }

    // Class list checks.
    if (this._showClass !== "") {
      const showClassCheck = isValidClassList({ showClass: this._showClass });

      if (!showClassCheck.status) {
        this._errors.push(showClassCheck.message);
        check = false;
      }
    }

    if (this._hideClass !== "") {
      const hideClassCheck = isValidClassList({ hideClass: this._hideClass });

      if (!hideClassCheck.status) {
        this._errors.push(hideClassCheck.message);
        check = false;
      }
    }

    if (this._transitionClass !== "") {
      const transitionClassCheck = isValidClassList({
        transitionClass: this._transitionClass,
      });

      if (!transitionClassCheck.status) {
        this._errors.push(transitionClassCheck.message);
        check = false;
      }
    }

    // Transition timer check.
    const transitionTimerCheck = isValidType("number", {
      transitionTimer: this._transitionTimer,
    });

    if (!transitionTimerCheck.status) {
      this._errors.push(transitionTimerCheck.message);
      check = false;
    }

    // Hidden check.
    const hiddenCheck = isValidType("boolean", { isHidden: this._hidden });

    if (!hiddenCheck.status) {
      this._errors.push(hiddenCheck.message);
      check = false;
    }

    return check;
  }

  /**
   * Shows the alert.
   *
   * @fires grauplAlertShow
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
      addClass(this.transitionClass, this.dom.alert);

      requestAnimationFrame(() => {
        if (this.hideClass !== "") {
          removeClass(this.hideClass, this.dom.alert);
        }

        requestAnimationFrame(() => {
          if (this.showClass !== "") {
            addClass(this.showClass, this.dom.alert);
          }

          requestAnimationFrame(() => {
            removeClass(this.transitionClass, this.dom.alert);
          });
        });
      });
    } else {
      // Add the show class
      if (this.showClass !== "") {
        addClass(this.showClass, this.dom.alert);
      }

      // Remove the hide class.
      if (this.hideClass !== "") {
        removeClass(this.hideClass, this.dom.alert);
      }
    }

    this._hidden = false;

    if (emit) {
      this.dom.alert.dispatchEvent(this._hideEvent);
    }
  }

  /**
   * Hides the alert.
   *
   * @fires grauplAlertHide
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
      addClass(this.transitionClass, this.dom.alert);

      requestAnimationFrame(() => {
        if (this.showClass !== "") {
          removeClass(this.showClass, this.dom.alert);
        }

        requestAnimationFrame(() => {
          if (this.transitionTimer > 0) {
            setTimeout(() => {
              if (this.hideClass !== "") {
                addClass(this.hideClass, this.dom.alert);
              }

              requestAnimationFrame(() => {
                removeClass(this.transitionClass, this.dom.alert);
              });
            }, this.transitionTimer);
          } else {
            if (this.hideClass !== "") {
              addClass(this.hideClass, this.dom.alert);
            }

            requestAnimationFrame(() => {
              removeClass(this.transitionClass, this.dom.alert);
            });
          }
        });
      });
    } else {
      // Add the hide class
      if (this.hideClass !== "") {
        addClass(this.hideClass, this.dom.alert);
      }

      // Remove the show class.
      if (this.showClass !== "") {
        removeClass(this.showClass, this.dom.alert);
      }
    }

    this._hidden = true;

    if (emit) {
      this.dom.alert.dispatchEvent(this._hideEvent);
    }
  }

  /**
   * Handles click events throughout the alert for proper use.
   *
   * - Adds a `pointerup` listener to the controller that will hide the alert.
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
   * Handles keydown events throughout the alert for proper use.
   *
   * This method exists to assist the _handleKeyup method.
   *
   * - Adds a `keydown` listener to the controller (if it exists).
   *   - Blocks propagation on "Space" and "Enter" keys.
   */
  _handleKeydown() {
    if (this.dom.controller === null) {
      return;
    }

    this.dom.controller.addEventListener("keydown", (event) => {
      const key = keyPress(event);

      // Prevent default behavior for space and enter keys.
      if (key === "Space" || key === "Enter") {
        preventEvent(event);
      }
    });
  }

  /**
   * Handles keyup events throughout the alert for proper use.
   *
   * - Adds a `keyup` listener to the controller (if it exists).
   *   - Hides the alert when the user hits "Space" or "Enter".
   */
  _handleKeyup() {
    if (this.dom.controller === null) {
      return;
    }

    this.dom.controller.addEventListener("keyup", (event) => {
      const key = keyPress(event);

      if (key === "Space" || key === "Enter") {
        this.hide();
      }
    });
  }
}

export default Alert;
