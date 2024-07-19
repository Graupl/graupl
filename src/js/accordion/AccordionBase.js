class AccordionBase {
  // #region Variables
  currentChild = 0;
  focusState = "none";

  /**
    * The DOM elements within the accordion.
    *
    * @protected
    *
    * @type {Object<HTMLElement, HTMLElement[]>}
    *
    * @property {HTMLElement}   accordion           - The accordion element.
    */
  _dom = {
    accordionElement: null,
  };

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
  // #endregion
  // #region Constructor

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
  }
}

export default AccordionBase;
