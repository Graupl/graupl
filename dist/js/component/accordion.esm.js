var k = Object.defineProperty;
var T = (i, t, e) => t in i ? k(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var o = (i, t, e) => T(i, typeof t != "symbol" ? t + "" : t, e);
function $(i, t) {
  try {
    if (typeof t != "object") {
      const e = typeof t;
      throw new TypeError(
        `Elements given to isValidInstance() must be inside of an object. "${e}" given.`
      );
    }
    for (const e in t)
      if (!(t[e] instanceof i)) {
        const s = typeof t[e];
        throw new TypeError(
          `${e} must be an instance of ${i.name}. "${s}" given.`
        );
      }
    return {
      status: !0,
      error: null
    };
  } catch (e) {
    return {
      status: !1,
      error: e
    };
  }
}
function l(i, t) {
  try {
    if (typeof t != "object") {
      const e = typeof t;
      throw new TypeError(
        `Values given to isValidType() must be inside of an object. "${e}" given.`
      );
    }
    for (const e in t) {
      const s = typeof t[e];
      if (s !== i)
        throw new TypeError(`${e} must be a ${i}. "${s}" given.`);
    }
    return {
      status: !0,
      error: null
    };
  } catch (e) {
    return {
      status: !1,
      error: e
    };
  }
}
function D(i) {
  try {
    if (typeof i != "object") {
      const t = typeof i;
      throw new TypeError(
        `Values given to isQuerySelector() must be inside of an object. "${t}" given.`
      );
    }
    for (const t in i)
      try {
        if (i[t] === null)
          throw new Error();
        document.querySelector(i[t]);
      } catch {
        throw new TypeError(
          `${t} must be a valid query selector. "${i[t]}" given.`
        );
      }
    return {
      status: !0,
      error: null
    };
  } catch (t) {
    return {
      status: !1,
      error: t
    };
  }
}
function u(i) {
  try {
    if (typeof i != "object" || Array.isArray(i)) {
      const t = typeof i;
      throw new TypeError(
        `Values given to isValidClassList() must be inside of an object. "${t}" given.`
      );
    }
    for (const t in i) {
      const e = typeof i[t];
      if (e !== "string")
        if (Array.isArray(i[t]))
          i[t].forEach((s) => {
            if (typeof s != "string")
              throw new TypeError(
                `${t} must be a string or an array of strings. An array containing non-strings given.`
              );
          });
        else
          throw new TypeError(
            `${t} must be a string or an array of strings. "${e}" given.`
          );
      else {
        const s = {};
        s[t] = i[t], D(s);
      }
    }
    return {
      status: !0,
      error: null
    };
  } catch (t) {
    return {
      status: !1,
      error: t
    };
  }
}
function h(i, t) {
  i === "" || i.length === 0 || (typeof i == "string" ? t.classList.add(i) : t.classList.add(...i));
}
function a(i, t) {
  i === "" || i.length === 0 || (typeof i == "string" ? t.classList.remove(i) : t.classList.remove(...i));
}
class f {
  /**
   * Constructs a new Accordion item object.
   *
   * @class
   *
   * @param {object}               options                             - The options object.
   * @param {HTMLElement}          options.accordionItemElement        - The accordion item element.
   * @param {HTMLElement}          options.accordionItemToggleElement  - The toggle element.
   * @param {HTMLElement}          options.accordionItemContentElement - The content element.
   * @param {Accordion}            [options.parentAccordion = null]    - The accordion containing this item.
   */
  constructor({
    accordionItemElement: t,
    accordionItemToggleElement: e,
    accordionItemContentElement: s,
    parentAccordion: r = null
  }) {
    /**
     * The HTML elements for the accordion item in the DOM.
     *
     * @protected
     *
     * @type {Object<HTMLElement>}
     *
     * @property {HTMLElement} item    - The accordion item element.
     * @property {HTMLElement} toggle  - The controller element.
     * @property {HTMLElement} content - The content element.
     */
    o(this, "_dom", {
      item: null,
      toggle: null,
      content: null
    });
    /**
     * The declared graupl accordion elements within the accordion item.
     *
     * @protected
     *
     * @type {Object<Accordion>}
     *
     * @property {Accordion} parentAccordion - The parent accordion containing this item.
     */
    o(this, "_elements", {
      parentAccordion: null
    });
    /**
     * The open state of the accordion.
     *
     * @protected
     *
     * @type {boolean}
     */
    o(this, "_open", !1);
    /**
     * The event that is triggered when the accordion item is shown.
     *
     * @protected
     *
     * @event grauplAccordionItemShow
     *
     * @type {CustomEvent}
     *
     * @property {boolean}               bubbles - A flag to bubble the event.
     * @property {Object<AccordionItem>} detail  - The details object containing the Accordion item itself.
     */
    o(this, "_showEvent", new CustomEvent("grauplAccordionItemShow", {
      bubbles: !0,
      detail: { item: this }
    }));
    /**
     * The event that is triggered when the accordion item is hidden.
     *
     * @protected
     *
     * @event grauplAccordionItemHide
     *
     * @type {CustomEvent}
     *
     * @property {boolean}               bubbles - A flag to bubble the event.
     * @property {Object<AccordionItem>} detail  - The details object containing the Accordion item itself.
     */
    o(this, "_hideEvent", new CustomEvent("grauplAccordionItemHide", {
      bubbles: !0,
      detail: { item: this }
    }));
    this._dom.item = t, this._dom.toggle = e, this._dom.content = s, this._elements.parentAccordion = r;
  }
  /**
   * Initializes the accordion item.
   */
  initialize() {
    this._setIds(), this._setAriaAttributes(), this.dom.toggle.getAttribute("aria-expanded") === "true" ? this.show(!1) : this.hide(!1);
  }
  /**
   * The HTML elements for the accordion item in the DOM.
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
   * The declared graupl accordion elements within the accordion item.
   *
   * @readonly
   *
   * @type {Object<Accordion>}
   *
   * @see _elements
   */
  get elements() {
    return this._elements;
  }
  /**
   * The open state of the accordion.
   *
   * @readonly
   *
   * @type {object}
   *
   * @see _open
   */
  get isOpen() {
    return this._open;
  }
  set isOpen(t) {
    l("boolean", { value: t }), this._open !== t && (this._open = t);
  }
  _setIds() {
  }
  _setAriaAttributes() {
  }
  /**
   * Shows the accordion item.
   *
   * @public
   *
   * @fires grauplAccordionItemShow
   *
   * @param {boolean} [emit = true] - Emit the show event once shown.
   */
  show(t = !0) {
    if (this._open)
      return;
    const { closeClass: e, openClass: s, transitionClass: r, openDuration: n } = this.elements.parentAccordion;
    this.dom.toggle.setAttribute("aria-expanded", "true"), r !== "" ? (h(r, this.dom.item), requestAnimationFrame(() => {
      a(e, this.dom.item), this.dom.content.style.height = "0px", requestAnimationFrame(() => {
        h(s, this.dom.item), this.dom.content.style.height = `${this.dom.content.scrollHeight}px`, requestAnimationFrame(() => {
          setTimeout(() => {
            a(r, this.dom.item), this.dom.content.style.height = "";
          }, n);
        });
      });
    })) : (h(s, this.dom.item), a(e, this.dom.item)), this._open = !0, t && this.dom.item.dispatchEvent(this._showEvent);
  }
  /**
   * Hides the accordion item.
   *
   * @public
   *
   * @fires grauplAccordionItemHide
   *
   * @param {boolean} [emit = true] - Emit the hide event once hidden.
   */
  hide(t = !0) {
    if (!this._open)
      return;
    const { closeClass: e, openClass: s, transitionClass: r, closeDuration: n } = this.elements.parentAccordion;
    this.dom.toggle.setAttribute("aria-expanded", "false"), r !== "" ? (h(r, this.dom.item), this.dom.content.style.height = `${this.dom.content.getBoundingClientRect().height}px`, requestAnimationFrame(() => {
      a(s, this.dom.item), this.dom.content.style.height = "0px", requestAnimationFrame(() => {
        h(e, this.dom.item), requestAnimationFrame(() => {
          setTimeout(() => {
            a(r, this.dom.item), this.dom.content.style.height = "";
          });
        }, n);
      });
    })) : (h(e, this.dom.item), a(s, this.dom.item)), this._open = !1, t && this.dom.item.dispatchEvent(this._hideEvent);
  }
  /**
   * Toggle the accordion item.
   *
   * @public
   */
  toggle() {
    this.isOpen ? this.hide() : this.show();
  }
  /**
   * Focuses the accordion item.
   *
   * @public
   */
  focus() {
    this.dom.toggle.focus();
  }
  /**
   * Blurs the accordion item.
   *
   * @public
   */
  blur() {
    this.dom.toggle.blur();
  }
}
function p(i) {
  try {
    const t = i.key || i.keyCode, e = {
      Enter: t === "Enter" || t === 13,
      Space: t === " " || t === "Spacebar" || t === 32,
      Escape: t === "Escape" || t === "Esc" || t === 27,
      ArrowUp: t === "ArrowUp" || t === "Up" || t === 38,
      ArrowRight: t === "ArrowRight" || t === "Right" || t === 39,
      ArrowDown: t === "ArrowDown" || t === "Down" || t === 40,
      ArrowLeft: t === "ArrowLeft" || t === "Left" || t === 37,
      Home: t === "Home" || t === 36,
      End: t === "End" || t === 35,
      Tab: t === "Tab" || t === 9
    };
    return Object.keys(e).find((s) => e[s] === !0) || "";
  } catch {
    return "";
  }
}
function c(i) {
  i.preventDefault(), i.stopPropagation();
}
class L {
  /**
   * Constructs a new `Accordion`.
   *
   * @param {object}             options                                                          - The options for generating the accordion.
   * @param {HTMLElement}        [options.accordionElement]                                       - The accordion element in the DOM.
   * @param {string}             [options.accordionItemSelector = .accordion-item]                - The query selector string for accordion items.
   * @param {string}             [options.accordionItemToggleSelector = .accordion-item-toggle]   - The query selector string for accordion toggle.
   * @param {string}             [options.accordionItemContentSelector = .accordion-item-content] - The query selector string for accordion content.
   * @param {?(string|string[])} [options.openClass = show]                                       - The class to apply when a accordion is "open".
   * @param {?(string|string[])} [options.closeClass = hide]                                      - The class to apply when a accordion is "closed".
   * @param {?(string|string[])} [options.transitionClass = transitioning]                        - The class to apply when a accordion is transitioning between "open" and "closed" states.
   * @param {number}             [options.transitionDuration = 250]                               - The duration of the transition between "open" and "closed" states (in milliseconds).
   * @param {number}             [options.openDuration = -1]                                      - The duration of the transition from "closed" to "open" states (in milliseconds).
   * @param {number}             [options.closeDuration = -1]                                     - The duration of the transition from "open" to "closed" states (in milliseconds).
   * @param {boolean}            [options.optionalKeySupport = false]                             - A flag to determine if accordions can be navigated with arrows.
   * @param {boolean}            [options.allowMultipleExpand = true]                             - A flag to determine if multiple accordions can be open at the same time.
   * @param {boolean}            [options.allowNoExpand = true]                                   - A flag to determine if no accordions can be open at the same time.
   * @param {?string}            [options.prefix = graupl-]                                       - The prefix to use for CSS custom properties.
   * @param {?string}            [options.key = null]                                             - The key used to generate IDs throughout the accordion.
   * @param {boolean}            [options.initialize = false]                                     - A flag to initialize the accordion immediately upon creation.
   */
  constructor({
    accordionElement: t,
    accordionItemSelector: e = ".accordion-item",
    accordionItemToggleSelector: s = ".accordion-item-toggle",
    accordionItemContentSelector: r = ".accordion-item-content",
    openClass: n = "show",
    closeClass: d = "hide",
    transitionClass: m = "transitioning",
    transitionDuration: g = 250,
    openDuration: _ = -1,
    closeDuration: y = -1,
    optionalKeySupport: C = !1,
    allowMultipleExpand: E = !0,
    allowNoExpand: w = !0,
    key: A = null,
    initialize: b = !1,
    prefix: I = "am-"
  }) {
    /**
     * The DOM elements within the accordion.
     *
     * @protected
     *
     * @type {Object<HTMLElement, HTMLElement[]>}
     *
     * @property {HTMLElement}   accordion             - The accordion element.
     * @property {HTMLElement[]} accordionItems        - An array of accordion items.
     * @property {HTMLElement[]} accordionItemToggles  - An array of accordion item toggles.
     * @property {HTMLElement[]} accordionItemContents - An array of accordion item contents.
     */
    o(this, "_dom", {
      accordion: null,
      accordionItems: [],
      accordionItemToggles: [],
      accordionItemContents: []
    });
    /**
     * The DOM elements within the accordion that cannot be reset or generated by the accordion.
     *
     * @protected
     *
     * @type {string[]}
     */
    o(this, "_domLock", ["accordion"]);
    /**
     * The query selectors used by the accordion.
     *
     * @protected
     *
     * @type {Object<string>}
     *
     * @property {string} accordionItems        - The query selector for accordion items.
     * @property {string} accordionItemToggles  - The query selector for accordion toggles.
     * @property {string} accordionItemContents - The query selector for accordion contents.
     */
    o(this, "_selectors", {
      accordionItems: "",
      accordionItemToggles: "",
      accordionItemContents: ""
    });
    /**
     * The list of accordion items.
     *
     * @protected
     *
     * @type {Object<AccordionItem[]>}
     *
     * @property {AccordionItem[]} accordionItems - The list of accordion items.
     */
    o(this, "_elements", {
      accordionItems: []
    });
    /**
     * The class(es) to apply when the accordion is open.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    o(this, "_openClass", "show");
    /**
     * The class(es) to apply when the accordion is closed.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    o(this, "_closeClass", "hide");
    /**
     * The class(es) to apply when the accordion is transitioning between states.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    o(this, "_transitionClass", "transitioning");
    /**
     * The duration time (in milliseconds) for the transition between open and closed states.
     *
     * @protected
     *
     * @type {number}
     */
    o(this, "_transitionDuration", 250);
    /**
     * The duration time (in milliseconds) for the transition from closed to open states.
     *
     * @protected
     *
     * @type {number}
     */
    o(this, "_openDuration", -1);
    /**
     * The duration time (in milliseconds) for the transition from open to closed states.
     *
     * @protected
     *
     * @type {number}
     */
    o(this, "_closeDuration", -1);
    /**
     * A flag to decide if the accordion items can be navigated by arrows.
     *
     * @protected
     *
     * @type {boolean}
     */
    o(this, "_optionalKeySupport", !0);
    /**
     * A flag to decide if multiple accordions can be open at the same time.
     *
     * If set to false, only one accordion can be open at a time.
     *
     * @protected
     *
     * @type {boolean}
     */
    o(this, "_allowMultipleExpand", !0);
    /**
     * A flag to decide if no accordions can be opened at the same time.
     *
     * If set to false, at least one accordion must be open at all times.
     *
     * @protected
     *
     * @type {boolean}
     */
    o(this, "_allowNoExpand", !0);
    /**
     * The index of the current child node.
     *
     * @protected
     *
     * @type {number}
     */
    o(this, "_currentChild", 0);
    /**
     * The prefix to use for CSS custom properties.
     *
     * @protected
     *
     * @type {string}
     */
    o(this, "_prefix", "graupl-");
    /**
     * The key used to generate IDs throughout the accordion.
     *
     * @protected
     *
     * @type {string}
     */
    o(this, "_key", "");
    /**
     * errors - The list of errors found during validation.
     *
     * @protected
     *
     * @type {string[]}
     */
    o(this, "_errors", []);
    this._dom.accordion = t, this._selectors.accordionItems = e, this._selectors.accordionItemToggles = s, this._selectors.accordionItemContents = r, this._openClass = n || "", this._closeClass = d || "", this._transitionClass = m || "", this._transitionDuration = g, this._openDuration = _, this._closeDuration = y, this._optionalKeySupport = C, this._allowMultipleExpand = E, this._allowNoExpand = w, this._prefix = I || "", this._key = A || "", b && this.initialize();
  }
  /**
   * The class(es) to apply when the accordion is open.
   *
   * @type {string|string[]}
   *
   * @see _openClass
   */
  get openClass() {
    return this._openClass;
  }
  /**
   * The class(es) to apply when the accordion is closed.
   *
   * @type {string|string[]}
   *
   * @see _closeClass
   */
  get closeClass() {
    return this._closeClass;
  }
  /**
   * The class(es) to apply when the accordion is transitioning between open and closed.
   *
   * @type {string|string[]}
   *
   * @see _transitionClass
   */
  get transitionClass() {
    return this._transitionClass;
  }
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
    return this._currentChild;
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
   * The elements of the accordion.
   *
   * @readonly
   *
   * @type {object}
   *
   * @see _elements
   */
  get elements() {
    return this._elements;
  }
  /**
   * The selectors used for the accordion and accordion items.
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
   * The timer for transitions.
   *
   * @readonly
   *
   * @type {number}
   *
   * @see _transitionTimer
   */
  get transitionTimer() {
    return this._transitionTimer;
  }
  /**
   * A flag to decide if the accordion items can be navigated by arrows.
   *
   * @readonly
   *
   * @type {boolean}
   *
   * @see _optionalKeySupport
   */
  get optionalKeySupport() {
    return this._optionalKeySupport;
  }
  /**
   * The currently selected accordion item.
   *
   * @readonly
   *
   * @type {AccordionItem}
   */
  get currentAccordionItem() {
    return this.elements.accordionItems[this.currentChild];
  }
  /**
   * The prefix to use for CSS custom properties.
   *
   * @type {string}
   *
   * @see _prefix
   */
  get prefix() {
    return this._prefix;
  }
  /**
   * The key used to generate IDs throughout the accordion.
   *
   * @type {string}
   *
   * @see _key
   */
  get key() {
    return this._key;
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
  set openClass(t) {
    u({ openClass: t }), this._openClass !== t && (this._openClass = t);
  }
  set closeClass(t) {
    u({ closeClass: t }), this._closeClass !== t && (this._closeClass = t);
  }
  set transitionClass(t) {
    u({ transitionClass: t }), this._transitionClass !== t && (this._transitionClass = t);
  }
  set transitionTimer(t) {
    l("number", { value: t }), t >= 0 && this._transitionTimer !== t && (this._transitionTimer = t);
  }
  set currentChild(t) {
    l("number", { value: t }), this._currentChild !== t && t >= 0 && t < this.elements.accordionItems.length && (this._currentChild = t);
  }
  set accordionItems(t) {
    l("object", { value: t }), t != null && t.isArray() && t.every((e) => e instanceof f) && (this._accordionItems = t);
  }
  set prefix(t) {
    l("string", { value: t }), this._prefix !== t && (this._prefix = t);
  }
  set key(t) {
    l("string", { value: t }), this._key !== t && (this._key = t);
  }
  /**
   * Initializes the accordion.
   */
  initialize() {
    try {
      if (!this._validate())
        throw new Error(
          `Graupl Accordion: cannot initialize accordion. The following errors have been found:
 - ${this.errors.join(
            `
 - `
          )}`
        );
      this._generateKey(), this._setDOMElements(), this._createChildElements(), this._handleFocus(), this._handleClick(), this._handleKeydown(), this._handleKeyup();
    } catch (t) {
      console.error(t);
    }
  }
  /**
   * Sets DOM elements.
   *
   * Elements listed in _domLock cannot be set using this method.
   *
   * @protected
   *
   * @param {string}      elementType                 - The type of element to populate.
   * @param {HTMLElement} [base = this.dom.accordion] - The element used as the base for the querySelect.
   * @param {boolean}     [overwrite = true]          - A flag to set if the existing elements will be overwritten.
   * @param {boolean}     [strict = false]            - A flag to set if the elements must be direct children of the base.
   */
  _setDOMElementType(t, e = this.dom.accordion, s = !0, r = !1) {
    if (typeof this.selectors[t] == "string") {
      if (this._domLock.includes(t))
        throw new Error(
          `Graupl ${this.contructor.name}: "${t}" element cannot be set through _setDOMElementType.`
        );
      e !== this.dom.accordion && $(HTMLElement, { base: e });
      const d = Array.from(
        e.querySelectorAll(this.selectors[t])
      ).filter(
        (m) => r ? m.parentElement === e : !0
      );
      s ? this._dom[t] = d : this._dom[t] = [
        ...this._dom[t],
        ...d
      ];
    } else
      throw new Error(
        `Graupl ${this.contructor.name}: "${t}" is not a valid element type.`
      );
  }
  /**
   * Resets DOM elements.
   *
   * Elements listed in _domLock cannot be reset using this method.
   *
   * @protected
   *
   * @param {string} elementType - The type of element to clear.
   */
  _resetDOMElementType(t) {
    if (typeof this.selectors[t] == "string") {
      if (this._domLock.includes(t))
        throw new Error(
          `Graupl ${this.contructor.name}: "${t}" element cannot be reset through _resetDOMElementType.`
        );
      Array.isArray(this._dom[t]) ? this._dom[t] = [] : this._dom[t] = null;
    } else
      throw new Error(
        `Graupl ${this.contructor.name}: "${t}" is not a valid element type.`
      );
  }
  /**
   * Sets all DOM elements within the accordion.
   *
   * Utilizes _setDOMElementType and
   * _resetDOMElementType.
   *
   * @protected
   */
  _setDOMElements() {
    this._setDOMElementType("accordionItems"), this._resetDOMElementType("accordionItemToggles"), this.dom.accordionItems.forEach((t) => {
      this._setDOMElementType("accordionItemToggles", t, !1), this._setDOMElementType("accordionItemContents", t, !1);
    });
  }
  /**
   * Generates a key for the accordion.
   *
   * @param {boolean} [regenerate = false] - A flag to determine if the key should be regenerated.
   */
  _generateKey(t = !1) {
    (this.key === "" || t) && (this.key = Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 10));
  }
  /**
   * Creates and initializes all accordion items.
   *
   * @protected
   */
  _createChildElements() {
    this.dom.accordionItems.forEach((t, e) => {
      const s = new f({
        accordionItemElement: t,
        accordionItemToggleElement: this.dom.accordionItemToggles[e],
        accordionItemContentElement: this.dom.accordionItemContents[e],
        parentAccordion: this
      });
      s.initialize(), this.elements.accordionItems.push(s);
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
    return !0;
  }
  /**
   * Handles focus events throughout the accordion for proper use.
   *
   * - Adds a `focus` listener to every accordion item so when it gains focus,
   *   it will set the accordion's current child to the index of the item.
   *
   * @protected
   */
  _handleFocus() {
    this.elements.accordionItems.forEach((t, e) => {
      t.dom.toggle.addEventListener("focus", () => {
        this.currentChild = e;
      });
    });
  }
  /**
   * Handles click events throughout the accordion item for proper use.
   *
   * - Adds a `pointerup` listener to the accordion item toggles that will toggle each accordion item.
   *
   * @protected
   */
  _handleClick() {
    this.elements.accordionItems.forEach((t, e) => {
      t.dom.toggle.addEventListener("pointerup", () => {
        this.currentChild = e, t.toggle();
      });
    });
  }
  /**
   * Handles keydown events throughout the accordion item for proper use.
   *
   * This method exists to assist the _handleKeyup method.
   *
   * - Adds a `keydown` listener to all accordion item toggles.
   *   - Blocks propagation on "Space" and "Enter" keys.
   *   - _If_ optionalKeySupport is enabled, blocks propagation on the following keys:
   *     - "ArrowDown", "ArrowUp", "Home", and "End".
   */
  _handleKeydown() {
    this.dom.accordionItemToggles.forEach((t) => {
      t.addEventListener("keydown", (e) => {
        const s = p(e);
        (["Space", "Enter"].includes(s) || this.optionalKeySupport && ["ArrowDown", "ArrowUp", "Home", "End"].includes(s)) && c(e);
      });
    });
  }
  /**
   * Handles keyup events throughout the accordion item for proper use.
   *
   * Adds the follow keybindings (explanations are taken from the WAI ARIA Practices Guide Accordion Pattern):
   *
   * - `Enter` or `Space`:
   *   - When focus is on the accordion header for a collapsed panel, expands the associated panel. If the implementation allows only one panel to be expanded, and if another panel is expanded, collapses that panel.
   *   - When focus is on the accordion header for an expanded panel, collapses the panel if the implementation supports collapsing. Some implementations require one panel to be expanded at all times and allow only one panel to be expanded; so, they do not support a collapse function.
   * - `Tab`: Moves focus to the next focusable element; all focusable elements in the accordion are included in the page `Tab` sequence.
   * - `Shift + Tab`: Moves focus to the previous focusable element; all focusable elements in the accordion are included in the page `Tab` sequence.
   * - `Down Arrow` (Optional): If focus is on an accordion header, moves focus to the next accordion header. If focus is on the last accordion header, either does nothing or moves focus to the first accordion header.
   * - `Up Arrow` (Optional): If focus is on an accordion header, moves focus to the previous accordion header. If focus is on the first accordion header, either does nothing or moves focus to the last accordion header.
   * - `Home` (Optional): When focus is on an accordion header, moves focus to the first accordion header.
   * - `End` (Optional): When focus is on an accordion header, moves focus to the last accordion header.
   *
   * Note: When the above explanations mention "accordion header", they are referring to the accordion item toggle.
   */
  _handleKeyup() {
    this.dom.accordionItemToggles.forEach((t) => {
      t.addEventListener("keyup", (e) => {
        switch (p(e)) {
          case "Space":
          case "Enter":
            c(e), this.currentAccordionItem.toggle();
            break;
          case "Home":
            c(e), this.focusFirstChild();
            break;
          case "End":
            c(e), this.focusLastChild();
            break;
          case "ArrowDown":
            c(e), this.focusNextChild();
            break;
          case "ArrowUp":
            c(e), this.focusPreviousChild();
            break;
        }
      });
    });
  }
  /**
   * Sets the transition durations of the accordion as a CSS custom properties.
   *
   * The custom properties are:
   *   - `--graupl-accordion-transition-duration`,
   *   - `--graupl-accordion-open-transition-duration`, and
   *   - `--graupl-accordion-close-transition-duration`.
   *
   * The prefix of `graupl-` can be changed by setting the accordion's prefix value.
   *
   * @protected
   */
  _setTransitionDurations() {
    this.dom.accordion.style.setProperty(
      `--${this.prefix}accordion-transition-duration`,
      `${this.transitionDuration}ms`
    ), this.dom.accordion.style.setProperty(
      `--${this.prefix}accordion-open-transition-duration`,
      `${this.openDuration}ms`
    ), this.dom.accordion.style.setProperty(
      `--${this.prefix}accordion-close-transition-duration`,
      `${this.closeDuration}ms`
    );
  }
  /**
   * Focus the accordion's current child.
   *
   * @public
   */
  focusCurrentChild() {
    this.currentChild !== -1 && this.currentAccordionItem.focus();
  }
  /**
   * Focuses the accordion's child at a given index.
   *
   * @public
   *
   * @param {number} index - The index of the child to focus.
   */
  focusChild(t) {
    this.blurCurrentChild(), this.currentChild = t, this.focusCurrentChild();
  }
  /**
   * Focuses the accordion's first child.
   *
   * @public
   */
  focusFirstChild() {
    this.focusChild(0);
  }
  /**
   * Focus the accordion's last child.
   *
   * @public
   */
  focusLastChild() {
    this.focusChild(this.elements.accordionItems.length - 1);
  }
  /**
   * Focus the accordion's next child.
   *
   * @public
   */
  focusNextChild() {
    this.currentChild < this.elements.accordionItems.length - 1 ? this.focusChild(this.currentChild + 1) : this.focusCurrentChild();
  }
  /**
   * Focus the accordion's previous child.
   *
   * @public
   */
  focusPreviousChild() {
    this.currentChild > 0 ? this.focusChild(this.currentChild - 1) : this.focusCurrentChild();
  }
  /**
   * Blurs the accordion's current child.
   *
   * @public
   */
  blurCurrentChild() {
    this.currentChild !== -1 && this.currentAccordionItem.blur();
  }
}
export {
  L as default
};
