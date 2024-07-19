import { isValidClassList, isValidType } from "../validate.js";

/**
 * An accessible navigation element in the DOM.
 *
 * This is intended to be used as a "base" for an accordion item to clean
 * up the accordion item class.
 */
class AccordionItemBase {
  _showClass;
  _hideClass;
  _transitionClass;
  _transitionTimer;
  _isHidden;
  _focusOnArrow;
  //#region Declare variables.
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

  //#endregion

  //#region Getters and Setters.
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
  //#endregion

  //#region Events

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
   * The event that is triggered when the accordion item is toggled.
   *
   * @protected
   *
   * @event grauplAccordionItemToggle
   *
   * @type {CustomEvent}
   *
   * @property {boolean}           bubbles - A flag to bubble the event.
   * @property {Object<AccordionItem>} detail  - The details object containing the Accordion item itself.
   */
  _toggleEvent = new CustomEvent("grauplAccordionItemToggle", {
    bubbles: true,
    detail: { accordionItem: this },
  });

  //#endregion

  // #region Constructor
  /**
 * Constructs a new Accordion item object.
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
    this._dom.accordionItem = accordionItemElement;
    this._dom.controller = controllerElement;
    this._showClass = showClass;
    this._hideClass = hideClass;
    this._transitionClass = transitionClass;
    this._transitionTimer = transitionTimer
    this._isHidden = isHidden;
    this._focusOnArrow = focusOnArrow
  }
  // #endregion
}

export default AccordionItemBase;
