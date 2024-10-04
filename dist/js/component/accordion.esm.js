var b = Object.defineProperty;
var I = (i, t, s) => t in i ? b(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var e = (i, t, s) => I(i, typeof t != "symbol" ? t + "" : t, s);
function T(i, t) {
  try {
    if (typeof t != "object") {
      const s = typeof t;
      throw new TypeError(
        `Elements given to isValidInstance() must be inside of an object. "${s}" given.`
      );
    }
    for (const s in t)
      if (!(t[s] instanceof i)) {
        const o = typeof t[s];
        throw new TypeError(
          `${s} must be an instance of ${i.name}. "${o}" given.`
        );
      }
    return {
      status: !0,
      error: null
    };
  } catch (s) {
    return {
      status: !1,
      error: s
    };
  }
}
function n(i, t) {
  try {
    if (typeof t != "object") {
      const s = typeof t;
      throw new TypeError(
        `Values given to isValidType() must be inside of an object. "${s}" given.`
      );
    }
    for (const s in t) {
      const o = typeof t[s];
      if (o !== i)
        throw new TypeError(`${s} must be a ${i}. "${o}" given.`);
    }
    return {
      status: !0,
      error: null
    };
  } catch (s) {
    return {
      status: !1,
      error: s
    };
  }
}
function A(i) {
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
function d(i) {
  try {
    if (typeof i != "object" || Array.isArray(i)) {
      const t = typeof i;
      throw new TypeError(
        `Values given to isValidClassList() must be inside of an object. "${t}" given.`
      );
    }
    for (const t in i) {
      const s = typeof i[t];
      if (s !== "string")
        if (Array.isArray(i[t]))
          i[t].forEach((o) => {
            if (typeof o != "string")
              throw new TypeError(
                `${t} must be a string or an array of strings. An array containing non-strings given.`
              );
          });
        else
          throw new TypeError(
            `${t} must be a string or an array of strings. "${s}" given.`
          );
      else {
        const o = {};
        o[t] = i[t], A(o);
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
function c(i, t) {
  i === "" || i.length === 0 || (typeof i == "string" ? t.classList.remove(i) : t.classList.remove(...i));
}
class k {
  /**
   * Constructs a new Accordion item object.
   *
   * @class
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
    accordionItemElement: t,
    controllerElement: s = null,
    showClass: o = "show",
    hideClass: r = "hide",
    transitionClass: a = "transitioning",
    transitionTimer: u = 150,
    isHidden: m = !1,
    initialize: f = !1,
    optionalKeySupport: p = !1
  }) {
    /**
     * The HTML elements for the accordion item in the DOM.
     *
     * @protected
     *
     * @type {Object<HTMLElement>}
     */
    e(this, "_dom", {
      accordionItem: null,
      controller: null
    });
    /**
     * A flag to determine if the accordion item is hidden.
     *
     * @protected
     *
     * @type {boolean}
     */
    e(this, "_hidden", !1);
    /**
     * The class to use to show the accordion item.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    e(this, "_showClass", "");
    /**
     * The class to use to hide the accordion item.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    e(this, "_hideClass", "");
    /**
     * The class to use when transitioning the accordion item.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    e(this, "_transitionClass", "");
    /**
     * The time in milliseconds the transition will take.
     *
     * @protected
     *
     * @type {number}
     */
    e(this, "_transitionTimer", 150);
    /**
     * A flag to allow focus on up or down arrows.
     *
     * @protected
     *
     * @type {boolean}
     */
    e(this, "_optionalKeySupport", !1);
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
    e(this, "_showEvent", new CustomEvent("grauplAccordionItemShow", {
      bubbles: !0,
      detail: { accordionItem: this }
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
     * @property {boolean}       bubbles - A flag to bubble the event.
     * @property {Object<AccordionItem>} detail  - The details object containing the Accordion item itself.
     */
    e(this, "_hideEvent", new CustomEvent("grauplAccordionItemHide", {
      bubbles: !0,
      detail: { accordionItem: this }
    }));
    /**
     * An array of error messages generated by the accordion item.
     *
     * @protected
     *
     * @type {string[]}
     */
    e(this, "_errors", []);
    this._dom = {
      accordionItem: null,
      controller: null
    }, this._dom.accordionItem = t, this._dom.controller = s, this._showClass = o, this._hideClass = r, this._transitionClass = a, this._transitionTimer = u, this._hidden = m, this._optionalKeySupport = p, f && this.initialize();
  }
  /**
   * Initializes the accordion item.
   */
  initialize() {
    try {
      if (!this._validate())
        throw new Error(
          `Graupl Accordion item: cannot initialize accordion item. The following errors have been found:
 - ${this.errors.join(
            `
 - `
          )}`
        );
    } catch (t) {
      console.error(t);
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
  set isHidden(t) {
    n("boolean", { isHidden: t }), this._hidden !== t && (this._hidden = t);
  }
  set showClass(t) {
    d({ showClass: t }), this._showClass !== t && (this._showClass = t);
  }
  set hideClass(t) {
    d({ hideClass: t }), this._hideClass !== t && (this._hideClass = t);
  }
  set transitionClass(t) {
    d({ transitionClass: t }), this._transitionClass !== t && (this._transitionClass = t);
  }
  set transitionTimer(t) {
    n("number", { transitionTimer: t }), this._transitionTimer !== t && (this._transitionTimer = t);
  }
  set optionalKeySupport(t) {
    n("boolean", { optionalKeySupport: t }), this._optionalKeySupport !== t && (this._optionalKeySupport = t);
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
    let t = !0;
    const s = n("boolean", {
      isHidden: this._hidden
    });
    s.status || (this._errors.push(s.error.message), t = !1);
    const o = n("number", {
      transitionTimer: this._transitionTimer
    });
    o.status || (this._errors.push(o.error.message), t = !1);
    const r = n("boolean", {
      optionalKeySupport: this._optionalKeySupport
    });
    r.status || (this._errors.push(r.error.message), t = !1);
    const a = d({
      showClass: this._showClass,
      hideClass: this._hideClass,
      transitionClass: this._transitionClass
    });
    return a.status || (this._errors.push(a.error.message), t = !1), t;
  }
  /**
   * Shows the accordion item.
   *
   * @fires grauplAccordionItemShow
   *
   * @param {boolean} [emit = true] - Emit the show event once shown.
   */
  show(t = !0) {
    this._hidden && (this.transitionClass !== "" ? (h(this.transitionClass, this.dom.accordionItem), requestAnimationFrame(() => {
      this.hideClass !== "" && c(this.hideClass, this.dom.accordionItem), requestAnimationFrame(() => {
        this.showClass !== "" && h(this.showClass, this.dom.accordionItem), requestAnimationFrame(() => {
          c(this.transitionClass, this.dom.accordionItem);
        });
      });
    })) : (this.showClass !== "" && h(this.showClass, this.dom.accordionItem), this.hideClass !== "" && c(this.hideClass, this.dom.accordionItem)), this._hidden = !1, this.dom.controller.setAttribute("aria-expanded", "true"), t && this.dom.accordionItem.dispatchEvent(this._showEvent));
  }
  /**
   * Hides the accordion item.
   *
   * @fires grauplAccordionItemHide
   *
   * @param {boolean} [emit = true] - Emit the hide event once hidden.
   */
  hide(t = !0) {
    this._hidden || (this.transitionClass !== "" ? (h(this.transitionClass, this.dom.accordionItem), requestAnimationFrame(() => {
      this.showClass !== "" && c(this.showClass, this.dom.accordionItem), requestAnimationFrame(() => {
        this.transitionTimer > 0 ? setTimeout(() => {
          this.hideClass !== "" && h(this.hideClass, this.dom.accordionItem), requestAnimationFrame(() => {
            c(this.transitionClass, this.dom.accordionItem);
          });
        }, this.transitionTimer) : (this.hideClass !== "" && h(this.hideClass, this.dom.accordionItem), requestAnimationFrame(() => {
          c(this.transitionClass, this.dom.accordionItem);
        }));
      });
    })) : (this.hideClass !== "" && h(this.hideClass, this.dom.accordionItem), this.showClass !== "" && c(this.showClass, this.dom.accordionItem)), this.dom.controller.setAttribute("aria-expanded", "false"), this._hidden = !0, t && this.dom.accordionItem.dispatchEvent(this._hideEvent));
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
function _(i) {
  try {
    const t = i.key || i.keyCode, s = {
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
    return Object.keys(s).find((o) => s[o] === !0) || "";
  } catch {
    return "";
  }
}
function l(i) {
  i.preventDefault(), i.stopPropagation();
}
class D {
  /**
   * Constructs a new `Accordion`.
   *
   * @param {object}             options                                                          - The options for generating the accordion.
   * @param {HTMLElement}        [options.accordionElement]                                       - The accordion element in the DOM.
   * @param {string}             [options.accordionItemSelector = .accordion-item]                - The query selector string for accordion items.
   * @param {string}             [options.accordionItemToggleSelector = .accordion-item-toggle]   - The query selector string for accordion toggle.
   * @param {?(string|string[])} [options.openClass = show]                                       - The class to apply when a accordion is "open".
   * @param {?(string|string[])} [options.closeClass = hide]                                      - The class to apply when a accordion is "closed".
   * @param {?(string|string[])} [options.transitionClass = transitioning]                        - The class to apply when a accordion is transitioning between "open" and "closed" states.
   * @param {number}             [options.transitionDuration = 250]                               - The duration of the transition between "open" and "closed" states (in milliseconds).
   * @param {number}             [options.openDuration = -1]                                      - The duration of the transition from "closed" to "open" states (in milliseconds).
   * @param {number}             [options.closeDuration = -1]                                     - The duration of the transition from "open" to "closed" states (in milliseconds).
   * @param {boolean}            [options.optionalKeySupport = false]                             - A flag to determine if accordions can be navigated with arrows.
   * @param {boolean}            [options.allowMultipleExpand = true]                             - A flag to determine if multiple accordions can be open at the same time.
   * @param {boolean}            [options.allowNoExpand = true]                                   - A flag to determine if no accordions can be open at the same time.
   * @param {boolean}            [options.initialize = false]                                     - A flag to initialize the accordion immediately upon creation.
   * @param {?string}            [options.prefix = graupl-]                                           - The prefix to use for CSS custom properties.
   */
  constructor({
    accordionElement: t,
    accordionItemSelector: s = ".accordion-item",
    accordionItemToggleSelector: o = ".accordion-item-toggle",
    openClass: r = "show",
    closeClass: a = "hide",
    transitionClass: u = "transitioning",
    transitionDuration: m = 250,
    openDuration: f = -1,
    closeDuration: p = -1,
    optionalKeySupport: C = !1,
    allowMultipleExpand: y = !0,
    allowNoExpand: g = !0,
    initialize: w = !1,
    prefix: E = "am-"
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
     */
    e(this, "_dom", {
      accordion: null,
      accordionItems: [],
      accordionItemToggles: []
    });
    /**
     * The DOM elements within the accordion that cannot be reset or generated by the accordion.
     *
     * @protected
     *
     * @type {string[]}
     */
    e(this, "_domLock", ["accordion"]);
    /**
     * The query selectors used by the accordion.
     *
     * @protected
     *
     * @type {Object<string>}
     *
     * @property {string} accordionItems        - The query selector for accordion items.
     * @property {string} accordionItemToggles  - The query selector for accordion toggle.
     */
    e(this, "_selectors", {
      accordionItems: "",
      accordionItemToggles: ""
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
    e(this, "_elements", {
      accordionItems: []
    });
    /**
     * The class(es) to apply when the accordion is open.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    e(this, "_openClass", "show");
    /**
     * The class(es) to apply when the accordion is closed.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    e(this, "_closeClass", "hide");
    /**
     * The class(es) to apply when the accordion is transitioning between states.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    e(this, "_transitionClass", "transitioning");
    /**
     * The duration time (in milliseconds) for the transition between open and closed states.
     *
     * @protected
     *
     * @type {number}
     */
    e(this, "_transitionDuration", 250);
    /**
     * The duration time (in milliseconds) for the transition from closed to open states.
     *
     * @protected
     *
     * @type {number}
     */
    e(this, "_openDuration", -1);
    /**
     * The duration time (in milliseconds) for the transition from open to closed states.
     *
     * @protected
     *
     * @type {number}
     */
    e(this, "_closeDuration", -1);
    /**
     * A flag to decide if the accordion items can be navigated by arrows.
     *
     * @protected
     *
     * @type {boolean}
     */
    e(this, "_optionalKeySupport", !0);
    /**
     * A flag to decide if multiple accordions can be open at the same time.
     *
     * If set to false, only one accordion can be open at a time.
     *
     * @protected
     *
     * @type {boolean}
     */
    e(this, "_allowMultipleExpand", !0);
    /**
     * A flag to decide if no accordions can be opened at the same time.
     *
     * If set to false, at least one accordion must be open at all times.
     *
     * @protected
     *
     * @type {boolean}
     */
    e(this, "_allowNoExpand", !0);
    /**
     * The index of the current child node.
     *
     * @protected
     *
     * @type {number}
     */
    e(this, "_currentChild", 0);
    /**
     * errors - The list of errors found during validation.
     *
     * @protected
     *
     * @type {string[]}
     */
    e(this, "_errors", []);
    this._dom.accordion = t, this._selectors.accordionItems = s, this._selectors.accordionItemToggles = o, this._openClass = r || "", this._closeClass = a || "", this._transitionClass = u || "", this._transitionDuration = m, this._openDuration = f, this._closeDuration = p, this._optionalKeySupport = C, this._allowMultipleExpand = y, this._allowNoExpand = g, this._prefix = E || "", w && this.initialize();
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
    d({ openClass: t }), this._openClass !== t && (this._openClass = t);
  }
  set closeClass(t) {
    d({ closeClass: t }), this._closeClass !== t && (this._closeClass = t);
  }
  set transitionClass(t) {
    d({ transitionClass: t }), this._transitionClass !== t && (this._transitionClass = t);
  }
  set transitionTimer(t) {
    n("number", { value: t }), t >= 0 && this._transitionTimer !== t && (this._transitionTimer = t);
  }
  set currentChild(t) {
    n("number", { value: t }), this._currentChild !== t && t >= 0 && t < this._accordionItems.length && (this._currentChild = t);
  }
  set accordionItems(t) {
    n("object", { value: t }), t != null && t.isArray() && t.every((s) => s instanceof k) && (this._accordionItems = t);
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
      this._setDOMElements(), this._createChildElements(), this._handleFocus(), this._handleClick(), this._handleKeydown(), this._handleKeyup();
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
  _setDOMElementType(t, s = this.dom.accordion, o = !0, r = !1) {
    if (typeof this.selectors[t] == "string") {
      if (this._domLock.includes(t))
        throw new Error(
          `Graupl ${this.contructor.name}: "${t}" element cannot be set through _setDOMElementType.`
        );
      s !== this.dom.accordion && T(HTMLElement, { base: s });
      const u = Array.from(
        s.querySelectorAll(this.selectors[t])
      ).filter(
        (m) => r ? m.parentElement === s : !0
      );
      o ? this._dom[t] = u : this._dom[t] = [
        ...this._dom[t],
        ...u
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
      this._setDOMElementType("accordionItemToggles", t, !1);
    });
  }
  /**
   * Creates and initializes all accordion items.
   *
   * @protected
   */
  _createChildElements() {
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
    this.elements.accordionItems.forEach((t, s) => {
      t.dom.toggle.addEventListener("focus", () => {
        this.currentChild = s;
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
    this.elements.accordionItems.forEach((t, s) => {
      t.dom.toggle.addEventListener("pointerup", () => {
        this.currentChild = s, t.toggle();
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
      t.addEventListener("keydown", (s) => {
        const o = _(s);
        (["Space", "Enter"].includes(o) || this.optionalKeySupport && ["ArrowDown", "ArrowUp", "Home", "End"].includes(o)) && l(s);
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
      t.addEventListener("keyup", (s) => {
        switch (_(s)) {
          case "Space":
          case "Enter":
            l(s), this.currentAccordionItem.toggle();
            break;
          case "Home":
            l(s), this.focusFirstChild();
            break;
          case "End":
            l(s), this.focusLastChild();
            break;
          case "ArrowDown":
            l(s), this.focusNextChild();
            break;
          case "ArrowUp":
            l(s), this.focusPreviousChild();
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
  D as default
};
