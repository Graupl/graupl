var F = Object.defineProperty;
var q = (s, t, e) => t in s ? F(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var r = (s, t, e) => q(s, typeof t != "symbol" ? t + "" : t, e);
function C(s, t) {
  try {
    if (typeof t != "object") {
      const e = typeof t;
      throw new TypeError(
        `Elements given to isValidInstance() must be inside of an object. "${e}" given.`
      );
    }
    for (const e in t)
      if (!(t[e] instanceof s)) {
        const i = typeof t[e];
        throw new TypeError(
          `${e} must be an instance of ${s.name}. "${i}" given.`
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
function o(s, t) {
  try {
    if (typeof t != "object") {
      const e = typeof t;
      throw new TypeError(
        `Values given to isValidType() must be inside of an object. "${e}" given.`
      );
    }
    for (const e in t) {
      const i = typeof t[e];
      if (i !== s)
        throw new TypeError(`${e} must be a ${s}. "${i}" given.`);
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
function D(s) {
  try {
    if (typeof s != "object") {
      const t = typeof s;
      throw new TypeError(
        `Values given to isQuerySelector() must be inside of an object. "${t}" given.`
      );
    }
    for (const t in s)
      try {
        if (s[t] === null)
          throw new Error();
        document.querySelector(s[t]);
      } catch {
        throw new TypeError(
          `${t} must be a valid query selector. "${s[t]}" given.`
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
function h(s) {
  try {
    if (typeof s != "object" || Array.isArray(s)) {
      const t = typeof s;
      throw new TypeError(
        `Values given to isValidClassList() must be inside of an object. "${t}" given.`
      );
    }
    for (const t in s) {
      const e = typeof s[t];
      if (e !== "string")
        if (Array.isArray(s[t]))
          s[t].forEach((i) => {
            if (typeof i != "string")
              throw new TypeError(
                `${t} must be a string or an array of strings. An array containing non-strings given.`
              );
          });
        else
          throw new TypeError(
            `${t} must be a string or an array of strings. "${e}" given.`
          );
      else {
        const i = {};
        i[t] = s[t], D(i);
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
function y(s, t) {
  if (o("string", { tagName: s }).status && C(HTMLElement, t).status) {
    const e = s.toLowerCase();
    let i = !0;
    for (const n in t)
      t[n].tagName.toLowerCase() !== e && (i = !1);
    return i;
  } else
    return !1;
}
function u(s, t) {
  s === "" || s.length === 0 || (typeof s == "string" ? t.classList.add(s) : t.classList.add(...s));
}
function d(s, t) {
  s === "" || s.length === 0 || (typeof s == "string" ? t.classList.remove(s) : t.classList.remove(...s));
}
class v {
  /**
   * Constructs a new Accordion item object.
   *
   * @class
   *
   * @param {object}               options                             - The options object.
   * @param {HTMLElement}          options.accordionItemElement        - The accordion item element.
   * @param {HTMLElement}          options.accordionItemToggleElement  - The toggle element.
   * @param {HTMLElement}          options.accordionItemHeaderElement  - The header element.
   * @param {HTMLElement}          options.accordionItemContentElement - The content element.
   * @param {Accordion}            [options.parentAccordion = null]    - The accordion containing this item.
   */
  constructor({
    accordionItemElement: t,
    accordionItemToggleElement: e,
    accordionItemHeaderElement: i,
    accordionItemContentElement: n,
    parentAccordion: a = null
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
     * @property {HTMLElement} header  - The header element.
     * @property {HTMLElement} content - The content element.
     */
    r(this, "_dom", {
      item: null,
      toggle: null,
      header: null,
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
    r(this, "_elements", {
      parentAccordion: null
    });
    /**
     * The open state of the accordion.
     *
     * @protected
     *
     * @type {boolean}
     */
    r(this, "_open", !1);
    /**
     * The locked state of the accordions item.
     *
     * If locked, the accordion item cannot be closed.
     *
     * @protected
     *
     * @type {boolean}
     */
    r(this, "_locked", !1);
    /**
     * The event that is triggered when the accordion item is shown.
     *
     * @protected
     *
     * @event grauplAccordionItemExpand
     *
     * @type {CustomEvent}
     *
     * @property {boolean}               bubbles - A flag to bubble the event.
     * @property {Object<AccordionItem>} detail  - The details object containing the Accordion item itself.
     */
    r(this, "_expandEvent", new CustomEvent("grauplAccordionItemExpand", {
      bubbles: !0,
      detail: { item: this }
    }));
    /**
     * The event that is triggered when the accordion item is hidden.
     *
     * @protected
     *
     * @event grauplAccordionItemCollapse
     *
     * @type {CustomEvent}
     *
     * @property {boolean}               bubbles - A flag to bubble the event.
     * @property {Object<AccordionItem>} detail  - The details object containing the Accordion item itself.
     */
    r(this, "_collapseEvent", new CustomEvent("grauplAccordionItemCollapse", {
      bubbles: !0,
      detail: { item: this }
    }));
    this._dom.item = t, this._dom.toggle = e, this._dom.header = i, this._dom.content = n, this._elements.parentAccordion = a;
  }
  /**
   * Initializes the accordion item.
   */
  initialize() {
    this._setIds(), this._setAriaAttributes(), this.dom.toggle.getAttribute("aria-expanded") === "true" ? this.show(!1, !1) : this.hide(!1, !1);
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
  /**
   * The locked state of the accordions item.
   *
   * If locked, the accordion item cannot be closed.
   *
   * @readonly
   *
   * @type {boolean}
   *
   * @see _locked
   */
  get isLocked() {
    return this._locked;
  }
  set isOpen(t) {
    o("boolean", { value: t }), this._open !== t && (this._open = t);
  }
  /**
   * Sets the IDs for the accordion item and it's elements if they don't exist.
   *
   * The generated IDs use the parent accordion's key and follows the pattern:
   *  - Accordion item: `accordion-item-{key}-{index}`
   *  - Accordion item toggle: `accordion-item-toggle-{key}-{index}`
   *  - Accordion item content: `accordion-item-content-{key}-{index}`
   */
  _setIds() {
    const { key: t } = this.elements.parentAccordion, e = this.elements.parentAccordion.dom.accordionItems.indexOf(
      this.dom.item
    );
    this.dom.item.id = this.dom.item.id || `accordion-item-${t}-${e}`, this.dom.toggle.id = this.dom.toggle.id || `accordion-item-toggle-${t}-${e}`, this.dom.header.id = this.dom.header.id || `accordion-item-header-${t}-${e}`, this.dom.content.id = this.dom.content.id || `accordion-item-content-${t}-${e}`;
  }
  /**
   * Sets the ARIA attributes for the accordion item and it's elements.
   */
  _setAriaAttributes() {
    y("button", { toggle: this.dom.toggle }) || this.dom.toggle.setAttribute("role", "button"), this.dom.toggle.getAttribute("aria-expanded") !== "true" && this.dom.toggle.setAttribute("aria-expanded", "false"), this.dom.toggle.setAttribute("aria-controls", this.dom.content.id), y("section", { content: this.dom.content }) || this.dom.content.setAttribute("role", "region"), this.dom.content.setAttribute("aria-labelledby", this.dom.toggle.id);
  }
  /**
   * Shows the accordion item.
   *
   * @public
   *
   * @fires grauplAccordionItemExpand
   *
   * @param {boolean} [emit = true]       - Emit the show event once shown.
   * @param {boolean} [transition = true] - Respect the transition class.
   */
  show(t = !0, e = !0) {
    if (this._open)
      return;
    const { closeClass: i, openClass: n, transitionClass: a, openDuration: c } = this.elements.parentAccordion;
    this.dom.toggle.setAttribute("aria-expanded", "true"), e && a !== "" ? (u(a, this.dom.item), requestAnimationFrame(() => {
      d(i, this.dom.item), this.dom.item.style.height = `${this.dom.header.getBoundingClientRect().height}px`, requestAnimationFrame(() => {
        u(n, this.dom.item), this.dom.item.style.height = `${this.dom.header.getBoundingClientRect().height + this.dom.content.getBoundingClientRect().height}px`, requestAnimationFrame(() => {
          setTimeout(() => {
            d(a, this.dom.item), this.dom.item.style.height = "";
          }, c);
        });
      });
    })) : (u(n, this.dom.item), d(i, this.dom.item)), this._open = !0, this.elements.parentAccordion.allowMultipleExpand || (this.unlockSiblings(), this.closeSiblings()), this.elements.parentAccordion.allowNoExpand || (this.elements.parentAccordion.openAccordionItems.length <= 1 ? this.lock() : this.unlockSiblings()), t && this.dom.item.dispatchEvent(this._expandEvent);
  }
  /**
   * Hides the accordion item.
   *
   * @public
   *
   * @fires grauplAccordionItemCollapse
   *
   * @param {boolean} [emit = true]       - Emit the show event once shown.
   * @param {boolean} [transition = true] - Respect the transition class.
   */
  hide(t = !0, e = !0) {
    if (!this._open || !this.elements.parentAccordion.allowNoExpand && this.elements.parentAccordion.openAccordionItems.length <= 1)
      return;
    const { closeClass: i, openClass: n, transitionClass: a, closeDuration: c } = this.elements.parentAccordion;
    this.dom.toggle.setAttribute("aria-expanded", "false"), e && a !== "" ? (u(a, this.dom.item), this.dom.item.style.height = `${this.dom.item.getBoundingClientRect().height}px`, requestAnimationFrame(() => {
      d(n, this.dom.item), this.dom.item.style.height = `${this.dom.header.getBoundingClientRect().height}px`, requestAnimationFrame(() => {
        u(i, this.dom.item), requestAnimationFrame(() => {
          setTimeout(() => {
            d(a, this.dom.item), this.dom.item.style.height = "";
          }, c);
        });
      });
    })) : (u(i, this.dom.item), d(n, this.dom.item)), this._open = !1, !this.elements.parentAccordion.allowNoExpand && this.elements.parentAccordion.openAccordionItems.length === 1 && this.elements.parentAccordion.openAccordionItems[0].lock(), t && this.dom.item.dispatchEvent(this._collapseEvent);
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
  /**
   * Locks the accordion item.
   *
   * @public
   */
  lock() {
    this._locked = !0, this.dom.toggle.setAttribute("disabled", "true");
  }
  /**
   * Unlocks the accordion item.
   *
   * @public
   */
  unlock() {
    this._locked = !1, this.dom.toggle.removeAttribute("disabled");
  }
  closeSiblings() {
    this.elements.parentAccordion && this.elements.parentAccordion.elements.accordionItems.forEach((t) => {
      t !== this && t.hide();
    });
  }
  /**
   * Unlocks the siblings of the accordion item.
   *
   * @public
   */
  unlockSiblings() {
    this.elements.parentAccordion && this.elements.parentAccordion.elements.accordionItems.forEach((t) => {
      t !== this && t.unlock();
    });
  }
}
function f(s) {
  try {
    const t = s.key || s.keyCode, e = {
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
    return Object.keys(e).find((i) => e[i] === !0) || "";
  } catch {
    return "";
  }
}
function p(s) {
  s.preventDefault(), s.stopPropagation();
}
function H(s = null) {
  window.Graupl = window.Graupl || {}, o("string", { type: s }) && (window.Graupl[s] = window.Graupl[s] || {});
}
function G(s = null) {
  return o("string", { type: s }) ? window.Graupl[s] : window.Graupl;
}
function z(s, t = {}) {
  o("string", { type: s }) && o("object", { data: t }) && (window.Graupl[s] = t);
}
function j(s) {
  o("string", { type: s }) && (window.Graupl[s] = {});
}
function P(s, t, e) {
  o("string", { type: s, key: t }) && (window.Graupl[s][t] = e);
}
function N(s, t) {
  return o("string", { type: s, key: t }) ? window.Graupl[s][t] : null;
}
function V(s, t) {
  o("string", { type: s, key: t }) && delete window.Graupl[s][t];
}
const g = {
  initializeStorage: H,
  getStorage: G,
  setStorage: z,
  clearStorage: j,
  pushToStorage: P,
  getFromStorage: N,
  removeFromStorage: V
};
class R {
  /**
   * Constructs a new `Accordion`.
   *
   * @param {object}             options                                                          - The options for generating the accordion.
   * @param {HTMLElement}        [options.accordionElement]                                       - The accordion element in the DOM.
   * @param {string}             [options.accordionItemSelector = .accordion-item]                - The query selector string for accordion items.
   * @param {string}             [options.accordionItemToggleSelector = .accordion-item-toggle]   - The query selector string for accordion toggle.
   * @param {string}             [options.accordionItemHeaderSelector = .accordion-item-header]   - The query selector string for accordion header.
   * @param {string}             [options.accordionItemContentSelector = .accordion-item-content] - The query selector string for accordion content.
   * @param {?(string|string[])} [options.openClass = show]                                       - The class to apply when a accordion is "open".
   * @param {?(string|string[])} [options.closeClass = hide]                                      - The class to apply when a accordion is "closed".
   * @param {?(string|string[])} [options.transitionClass = transitioning]                        - The class to apply when a accordion is transitioning between "open" and "closed" states.
   * @param {number}             [options.transitionDuration = 300]                               - The duration of the transition between "open" and "closed" states (in milliseconds).
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
    accordionItemToggleSelector: i = ".accordion-item-toggle",
    accordionItemHeaderSelector: n = ".accordion-item-header",
    accordionItemContentSelector: a = ".accordion-item-content",
    openClass: c = "show",
    closeClass: _ = "hide",
    transitionClass: l = "transitioning",
    transitionDuration: m = 300,
    openDuration: E = -1,
    closeDuration: w = -1,
    optionalKeySupport: I = !1,
    allowMultipleExpand: b = !0,
    allowNoExpand: k = !0,
    prefix: A = "am-",
    key: T = null,
    initialize: x = !1
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
     * @property {HTMLElement[]} accordionItemHeaders  - An array of accordion headers.
     * @property {HTMLElement[]} accordionItemContents - An array of accordion item contents.
     */
    r(this, "_dom", {
      accordion: null,
      accordionItems: [],
      accordionItemToggles: [],
      accordionItemHeaders: [],
      accordionItemContents: []
    });
    /**
     * The DOM elements within the accordion that cannot be reset or generated by the accordion.
     *
     * @protected
     *
     * @type {string[]}
     */
    r(this, "_domLock", ["accordion"]);
    /**
     * The query selectors used by the accordion.
     *
     * @protected
     *
     * @type {Object<string>}
     *
     * @property {string} accordionItems        - The query selector for accordion items.
     * @property {string} accordionItemToggles  - The query selector for accordion toggles.
     * @property {string} accordionItemHeaders  - The query selector for accordion headers.
     * @property {string} accordionItemContents - The query selector for accordion contents.
     */
    r(this, "_selectors", {
      accordionItems: "",
      accordionItemToggles: "",
      accordionItemHeaders: "",
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
    r(this, "_elements", {
      accordionItems: []
    });
    /**
     * The class(es) to apply when the accordion is open.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    r(this, "_openClass", "show");
    /**
     * The class(es) to apply when the accordion is closed.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    r(this, "_closeClass", "hide");
    /**
     * The class(es) to apply when the accordion is transitioning between states.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    r(this, "_transitionClass", "transitioning");
    /**
     * The duration time (in milliseconds) for the transition between open and closed states.
     *
     * @protected
     *
     * @type {number}
     */
    r(this, "_transitionDuration", 300);
    /**
     * The duration time (in milliseconds) for the transition from closed to open states.
     *
     * @protected
     *
     * @type {number}
     */
    r(this, "_openDuration", -1);
    /**
     * The duration time (in milliseconds) for the transition from open to closed states.
     *
     * @protected
     *
     * @type {number}
     */
    r(this, "_closeDuration", -1);
    /**
     * A flag to decide if the accordion items can be navigated by arrows.
     *
     * @protected
     *
     * @type {boolean}
     */
    r(this, "_optionalKeySupport", !0);
    /**
     * A flag to decide if multiple accordions can be open at the same time.
     *
     * If set to false, only one accordion can be open at a time.
     *
     * @protected
     *
     * @type {boolean}
     */
    r(this, "_allowMultipleExpand", !0);
    /**
     * A flag to decide if no accordions can be opened at the same time.
     *
     * If set to false, at least one accordion must be open at all times.
     *
     * @protected
     *
     * @type {boolean}
     */
    r(this, "_allowNoExpand", !0);
    /**
     * The index of the current child node.
     *
     * @protected
     *
     * @type {number}
     */
    r(this, "_currentChild", 0);
    /**
     * The prefix to use for CSS custom properties.
     *
     * @protected
     *
     * @type {string}
     */
    r(this, "_prefix", "graupl-");
    /**
     * The key used to generate IDs throughout the accordion.
     *
     * @protected
     *
     * @type {string}
     */
    r(this, "_key", "");
    /**
     * errors - The list of errors found during validation.
     *
     * @protected
     *
     * @type {string[]}
     */
    r(this, "_errors", []);
    this._dom.accordion = t, this._selectors.accordionItems = e, this._selectors.accordionItemToggles = i, this._selectors.accordionItemHeaders = n, this._selectors.accordionItemContents = a, this._openClass = c || "", this._closeClass = _ || "", this._transitionClass = l || "", this._transitionDuration = m, this._openDuration = E, this._closeDuration = w, this._optionalKeySupport = I, this._allowMultipleExpand = b, this._allowNoExpand = k, this._prefix = A || "", this._key = T || "", x && this.initialize();
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
      this._generateKey(), this._setDOMElements(), this._setIds(), this._createChildElements(), this._handleFocus(), this._handleClick(), this._handleKeydown(), this._handleKeyup(), this._setTransitionDurations(), g.initializeStorage("accordions"), g.pushToStorage("accordions", this.dom.accordion.id, this);
    } catch (t) {
      console.error(t);
    }
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
   * The duration time (in milliseconds) for the transition between open and closed states.
   *
   * @type {number}
   *
   * @see _transitionDuration
   */
  get transitionDuration() {
    return this._transitionDuration;
  }
  /**
   * The duration time (in milliseconds) for the transition from closed to open states.
   *
   * If openDuration is set to -1, the transitionDuration will be used instead.
   *
   * @type {number}
   *
   * @see _openDuration
   */
  get openDuration() {
    return this._openDuration === -1 ? this.transitionDuration : this._openDuration;
  }
  /**
   * The duration time (in milliseconds) for the transition from open to closed states.
   *
   * If closeDuration is set to -1, the transitionDuration will be used instead.
   *
   * @type {number}
   *
   * @see _closeDuration
   */
  get closeDuration() {
    return this._closeDuration === -1 ? this.transitionDuration : this._closeDuration;
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
   * The currently open accordion items.
   *
   * @readonly
   *
   * @type {AccordionItem[]}
   */
  get openAccordionItems() {
    return this.elements.accordionItems.filter((t) => t.isOpen);
  }
  /**
   * A flag to decide if multiple accordions can be open at the same time.
   *
   * @type {boolean}
   *
   * @see _allowMultipleExpand
   */
  get allowMultipleExpand() {
    return this._allowMultipleExpand;
  }
  /**
   * A flag to decide if no accordions can be opened at the same time.
   *
   * @type {boolean}
   *
   * @see _allowNoExpand
   */
  get allowNoExpand() {
    return this._allowNoExpand;
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
    h({ openClass: t }), this._openClass !== t && (this._openClass = t);
  }
  set closeClass(t) {
    h({ closeClass: t }), this._closeClass !== t && (this._closeClass = t);
  }
  set transitionClass(t) {
    h({ transitionClass: t }), this._transitionClass !== t && (this._transitionClass = t);
  }
  set transitionDuration(t) {
    o("number", { value: t }), this._transitionDuration !== t && (this._transitionDuration = t, this._setTransitionDurations());
  }
  set openDuration(t) {
    o("number", { value: t }), this._openDuration !== t && (this._openDuration = t, this._setTransitionDurations());
  }
  set closeDuration(t) {
    o("number", { value: t }), this._closeDuration !== t && (this._closeDuration = t, this._setTransitionDurations());
  }
  set currentChild(t) {
    o("number", { value: t }), this._currentChild !== t && t >= 0 && t < this.elements.accordionItems.length && (this._currentChild = t);
  }
  set accordionItems(t) {
    o("object", { value: t }), t != null && t.isArray() && t.every((e) => e instanceof v) && (this._accordionItems = t);
  }
  set allowMultipleExpand(t) {
    o("boolean", { value: t }), this._allowMultipleExpand !== t && (this._allowMultipleExpand = t);
  }
  set allowNoExpand(t) {
    o("boolean", { value: t }), this._allowNoExpand !== t && (this._allowNoExpand = t);
  }
  set prefix(t) {
    o("string", { value: t }), this._prefix !== t && (this._prefix = t);
  }
  set key(t) {
    o("string", { value: t }), this._key !== t && (this._key = t);
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
  _setDOMElementType(t, e = this.dom.accordion, i = !0, n = !1) {
    if (typeof this.selectors[t] == "string") {
      if (this._domLock.includes(t))
        throw new Error(
          `Graupl ${this.contructor.name}: "${t}" element cannot be set through _setDOMElementType.`
        );
      e !== this.dom.accordion && C(HTMLElement, { base: e });
      const c = Array.from(
        e.querySelectorAll(this.selectors[t])
      ).filter(
        (_) => n ? _.parentElement === e : !0
      );
      i ? this._dom[t] = c : this._dom[t] = [
        ...this._dom[t],
        ...c
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
      this._setDOMElementType("accordionItemToggles", t, !1), this._setDOMElementType("accordionItemHeaders", t, !1), this._setDOMElementType("accordionItemContents", t, !1);
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
   * Sets the IDs of the accordion and it's children if they do not already exist.
   *
   * The generated IDs use the key and follow the format:
   *  - accordion: `accordion-${key}`
   *
   * @protected
   */
  _setIds() {
    this.dom.accordion.id = this.dom.accordion.id || `accordion-${this.key}`;
  }
  /**
   * Creates and initializes all accordion items.
   *
   * @protected
   */
  _createChildElements() {
    this.dom.accordionItems.forEach((t, e) => {
      const i = new v({
        accordionItemElement: t,
        accordionItemToggleElement: this.dom.accordionItemToggles[e],
        accordionItemHeaderElement: this.dom.accordionItemHeaders[e],
        accordionItemContentElement: this.dom.accordionItemContents[e],
        parentAccordion: this
      });
      i.initialize(), this.elements.accordionItems.push(i);
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
    let t = !0;
    const e = C(HTMLElement, {
      accordionElement: this.dom.accordion
    });
    e || (this._errors.push(e.message), t = !1);
    const i = D({
      accordionItemSelector: this._selectors.accordionItems,
      accordionItemToggleSelector: this._selectors.accordionItemToggles,
      accordionItemHeaderSelector: this._selectors.accordionItemHeaders,
      accordionItemContentSelector: this._selectors.accordionItemContents
    });
    if (i || (this._errors.push(i.message), t = !1), this._openClass !== "") {
      const m = h({ openClass: this._openClass });
      m.status || (this._errors.push(m.error.message), t = !1);
    }
    if (this._closeClass !== "") {
      const m = h({
        closeClass: this._closeClass
      });
      m.status || (this._errors.push(m.error.message), t = !1);
    }
    if (this._transitionClass !== "") {
      const m = h({
        transitionClass: this._transitionClass
      });
      m.status || (this._errors.push(m.error.message), t = !1);
    }
    const n = o("number", {
      transitionDuration: this._transitionDuration
    });
    n.status || (this._errors.push(n.error.message), t = !1);
    const a = o("number", {
      openDuration: this._openDuration
    });
    a.status || (this._errors.push(a.error.message), t = !1);
    const c = o("number", {
      closeDuration: this._closeDuration
    });
    c.status || (this._errors.push(c.error.message), t = !1);
    const _ = o("boolean", {
      optionalKeySupport: this._optionalKeySupport,
      allowMultipleExpand: this._allowMultipleExpand,
      allowNoExpand: this._allowNoExpand
    });
    if (_.status || (this._errors.push(_.error.message), t = !1), this._key !== "") {
      const m = o("string", { key: this._key });
      m.status || (this._errors.push(m.error.message), t = !1);
    }
    const l = o("string", { prefix: this._prefix });
    return l.status || (this._errors.push(l.error.message), t = !1), t;
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
        const i = f(e);
        (["Space", "Enter"].includes(i) || this.optionalKeySupport && ["ArrowDown", "ArrowUp", "Home", "End"].includes(i)) && p(e);
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
        const i = f(e);
        switch (i) {
          case "Space":
          case "Enter":
            p(e), this.currentAccordionItem.toggle();
            break;
        }
        if (this.optionalKeySupport)
          switch (i) {
            case "Home":
              p(e), this.focusFirstChild();
              break;
            case "End":
              p(e), this.focusLastChild();
              break;
            case "ArrowDown":
              p(e), this.focusNextChild();
              break;
            case "ArrowUp":
              p(e), this.focusPreviousChild();
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
  /**
   * Open all accordion items.
   *
   * @public
   */
  openChildren() {
    this.elements.accordionItems.forEach((t) => t.show());
  }
  /**
   * Close all accordion items.
   *
   * @public
   */
  closeChildren() {
    this.elements.accordionItems.forEach((t) => t.hide());
  }
}
class B {
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
   * @param {?string}              [options.key = null]                      - The key used to generate IDs throughout the alert.
   * @param {boolean}              [options.initialize = false]              - AA flag to initialize the alert immediately upon creation.
   */
  constructor({
    alertElement: t,
    controllerElement: e = null,
    showClass: i = "show",
    hideClass: n = "hide",
    transitionClass: a = "transitioning",
    transitionTimer: c = 150,
    isHidden: _ = !1,
    key: l = null,
    initialize: m = !1
  }) {
    /**
     * The HTML elements for the alert in the DOM.
     *
     * @protected
     *
     * @type {Object<HTMLElement>}
     */
    r(this, "_dom", {
      alert: null,
      controller: null
    });
    /**
     * A flag to determine if the alert is hidden.
     *
     * @protected
     *
     * @type {boolean}
     */
    r(this, "_hidden", !1);
    /**
     * The class to use to show the alert.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    r(this, "_showClass", "");
    /**
     * The class to use to hide the alert.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    r(this, "_hideClass", "");
    /**
     * The class to use when transitioning the alert.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    r(this, "_transitionClass", "");
    /**
     * The time in milliseconds the transition will take.
     *
     * @protected
     *
     * @type {number}
     */
    r(this, "_transitionTimer", 150);
    /**
     * The key used to generate IDs throughout the carousel.
     *
     * @protected
     *
     * @type {string}
     */
    r(this, "_key", "");
    /**
     * An array of error messages generated by the alert.
     *
     * @protected
     *
     * @type {string[]}
     */
    r(this, "_errors", []);
    /**
     * The event that is triggered when the alert is shown.
     *
     * @protected
     *
     * @event grauplAlertShow
     *
     * @type {CustomEvent}
     *
     * @property {boolean}       bubbles - A flag to bubble the event.
     * @property {Object<Alert>} detail  - The details object container the Alert itself.
     */
    r(this, "_showEvent", new CustomEvent("grauplAlertShow", {
      bubbles: !0,
      detail: { alert: this }
    }));
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
    r(this, "_hideEvent", new CustomEvent("grauplAlertHide", {
      bubbles: !0,
      detail: { alert: this }
    }));
    this._dom.alert = t, this._dom.controller = e, this._showClass = i || "", this._hideClass = n || "", this._transitionClass = a || "", this._transitionTimer = c, this._hidden = _, this._key = l || "", m && this.initialize();
  }
  /**
   * Initializes the alert.
   */
  initialize() {
    try {
      if (!this._validate())
        throw new Error(
          `Graupl Alert: cannot initialize alert. The following errors have been found:
 - ${this.errors.join(
            `
 - `
          )}`
        );
      this._generateKey(), this._setIds(), this._handleClick(), this._handleKeydown(), this._handleKeyup(), g.initializeStorage("alerts"), g.pushToStorage("alerts", this.dom.alert.id, this);
    } catch (t) {
      console.error(t);
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
  set showClass(t) {
    h({ showClass: t }), this._showClass !== t && (this._showClass = t);
  }
  set hideClass(t) {
    h({ hideClass: t }), this._hideClass !== t && (this._hideClass = t);
  }
  set transitionClass(t) {
    h({ transitionClass: t }), this._transitionClass !== t && (this._transitionClass = t);
  }
  set transitionTimer(t) {
    o("number", { transitionTimer: t }), this._transitionTimer !== t && (this._transitionTimer = t);
  }
  set key(t) {
    o("string", { value: t }), this._key !== t && (this._key = t);
  }
  /**
   * Validates all aspects of the alert to ensure proper functionality.
   *
   * @protected
   *
   * @return {boolean} - The result of the validation.
   */
  _validate() {
    let t = !0, e;
    if (this._dom.controller !== null ? e = C(HTMLElement, {
      alertElement: this._dom.alert,
      controllerElement: this._dom.controller
    }) : e = C(HTMLElement, {
      alertElement: this._dom.alert
    }), e.status || (this._errors.push(e.message), t = !1), this._showClass !== "") {
      const a = h({ showClass: this._showClass });
      a.status || (this._errors.push(a.message), t = !1);
    }
    if (this._hideClass !== "") {
      const a = h({ hideClass: this._hideClass });
      a.status || (this._errors.push(a.message), t = !1);
    }
    if (this._transitionClass !== "") {
      const a = h({
        transitionClass: this._transitionClass
      });
      a.status || (this._errors.push(a.message), t = !1);
    }
    const i = o("number", {
      transitionTimer: this._transitionTimer
    });
    i.status || (this._errors.push(i.message), t = !1);
    const n = o("boolean", { isHidden: this._hidden });
    return n.status || (this._errors.push(n.message), t = !1), t;
  }
  /**
   * Generates a key for the alert.
   *
   * @param {boolean} [regenerate = false] - A flag to determine if the key should be regenerated.
   */
  _generateKey(t = !1) {
    (this.key === "" || t) && (this.key = Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 10));
  }
  /**
   * Sets the IDs of the alert and it's children if they do not already exist.
   *
   * The generated IDs use the key and follow the format:
   *  - alert: `alert-${key}`
   *  - controller: `alert-controller-${key}`
   */
  _setIds() {
    this.dom.alert.id = this.dom.alert.id || `alert-${this.key}`, this.dom.controller.id = this.dom.controller.id || `alert-controller-${this.key}`;
  }
  /**
   * Shows the alert.
   *
   * @fires grauplAlertShow
   *
   * @param {boolean} [emit = true] - A toggle to emit the show event once shown.
   */
  show(t = !0) {
    this._hidden && (this.transitionClass !== "" ? (u(this.transitionClass, this.dom.alert), requestAnimationFrame(() => {
      this.hideClass !== "" && d(this.hideClass, this.dom.alert), requestAnimationFrame(() => {
        this.showClass !== "" && u(this.showClass, this.dom.alert), requestAnimationFrame(() => {
          d(this.transitionClass, this.dom.alert);
        });
      });
    })) : (this.showClass !== "" && u(this.showClass, this.dom.alert), this.hideClass !== "" && d(this.hideClass, this.dom.alert)), this._hidden = !1, t && this.dom.alert.dispatchEvent(this._hideEvent));
  }
  /**
   * Hides the alert.
   *
   * @fires grauplAlertHide
   *
   * @param {boolean} [emit = true] - A toggle to emit the hide event once shown.
   */
  hide(t = !0) {
    this._hidden || (this.transitionClass !== "" ? (u(this.transitionClass, this.dom.alert), requestAnimationFrame(() => {
      this.showClass !== "" && d(this.showClass, this.dom.alert), requestAnimationFrame(() => {
        this.transitionTimer > 0 ? setTimeout(() => {
          this.hideClass !== "" && u(this.hideClass, this.dom.alert), requestAnimationFrame(() => {
            d(this.transitionClass, this.dom.alert);
          });
        }, this.transitionTimer) : (this.hideClass !== "" && u(this.hideClass, this.dom.alert), requestAnimationFrame(() => {
          d(this.transitionClass, this.dom.alert);
        }));
      });
    })) : (this.hideClass !== "" && u(this.hideClass, this.dom.alert), this.showClass !== "" && d(this.showClass, this.dom.alert)), this._hidden = !0, t && this.dom.alert.dispatchEvent(this._hideEvent));
  }
  /**
   * Handles click events throughout the alert for proper use.
   *
   * - Adds a `pointerup` listener to the controller that will hide the alert.
   *
   * @protected
   */
  _handleClick() {
    this.dom.controller !== null && this.dom.controller.addEventListener("pointerup", () => this.hide());
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
    this.dom.controller !== null && this.dom.controller.addEventListener("keydown", (t) => {
      const e = f(t);
      (e === "Space" || e === "Enter") && p(t);
    });
  }
  /**
   * Handles keyup events throughout the alert for proper use.
   *
   * - Adds a `keyup` listener to the controller (if it exists).
   *   - Hides the alert when the user hits "Space" or "Enter".
   */
  _handleKeyup() {
    this.dom.controller !== null && this.dom.controller.addEventListener("keyup", (t) => {
      const e = f(t);
      (e === "Space" || e === "Enter") && this.hide();
    });
  }
}
class U {
  /**
   * Contructs a new `Carousel`.
   *
   * @param {object}             options                                                                  - The options for the generated carousel.
   * @param {HTMLElement}        options.carouselElement                                                  - The carousel element in the DOM.
   * @param {string}             [options.carouselItemSelector = .carousel-item]                          - The query selector string for carousel items.
   * @param {string}             [options.carouselItemContainerSelector = .carousel-item-container]       - The query selector string for the carousel item container.
   * @param {string}             [options.carouselControlSelector = .carousel-control]                    - The query selector string for carousel controls.
   * @param {string}             [options.carouselControlContainerSelector = .carousel-control-container] - The query selector string for carousel control container.
   * @param {string}             [options.carouselTabSelector = .carousel-tab]                            - The query selector string for carousel tabs.
   * @param {string}             [options.carouselTabContainerSelector = .carousel-tab-container]         - The query selector string for the carousel tab container.
   * @param {string}             [options.autoplaySelector = .autoplay]                                   - The query selector string for the autoplay button.
   * @param {string}             [options.nextSelector = .next]                                           - The query selector string for the next button.
   * @param {string}             [options.previousSelector = .previous]                                   - The query selector string for the previous button.
   * @param {?(string|string[])} [options.activeClass = active]                                           - The class(es) to apply when a carousel item is active.
   * @param {?(string|string[])} [options.previousClass = previous]                                       - The class(es) to apply to a carousel item that is the previously active item.
   * @param {?(string|string[])} [options.nextClass = next]                                               - The class(es) to apply to a carousel item that is the next active item.
   * @param {?(string|string[])} [options.playClass = play]                                               - The class(es) to apply to the autoplay button when the carousel is paused.
   * @param {?(string|string[])} [options.pauseClass = pause]                                             - The class(es) to apply to the autoplay button when the carousel is playing.
   * @param {boolean}            [options.autoplay = true]                                                - A flag to indicate if the carousel should autoplay.
   * @param {number}             [options.transitionDelay = 10000]                                        - A flag to initialize the carousel immediately upon creation.
   * @param {number}             [options.transitionDuration = 500]                                       - The duration time (in milliseconds) for the transition between carousel items.
   * @param {?string}            [options.playText = Play]                                                - The text to use for the play button.
   * @param {?string}            [options.pauseText = Pause]                                              - The text to use for the pause button.
   * @param {?string}            [options.prefix = graupl-]                                               - The prefix to use for CSS custom properties.
   * @param {?string}            [options.key = null]                                                     - The key used to generate IDs throughout the carousel.
   * @param {boolean}            [options.initialize = false]                                             - A flag to initialize the carousel immediately upon creation.
   */
  constructor({
    carouselElement: t,
    carouselItemSelector: e = ".carousel-item",
    carouselItemContainerSelector: i = ".carousel-item-container",
    carouselControlSelector: n = ".carousel-control",
    carouselControlContainerSelector: a = ".carousel-control-container",
    carouselTabSelector: c = ".carousel-tab",
    carouselTabContainerSelector: _ = ".carousel-tab-container",
    autoplaySelector: l = ".autoplay",
    nextSelector: m = ".next",
    previousSelector: E = ".previous",
    activeClass: w = "active",
    previousClass: I = "previous",
    nextClass: b = "next",
    playClass: k = "play",
    pauseClass: A = "pause",
    autoplay: T = !0,
    transitionDelay: x = 1e4,
    transitionDuration: S = 500,
    playText: $ = "Play",
    pauseText: L = "Pause",
    prefix: M = "graupl-",
    key: O = null,
    initialize: K = !1
  }) {
    /**
     * The DOM elements within the carousel.
     *
     * @protected
     *
     * @type {Object<HTMLElement, HTMLElement[]>}
     *
     * @property {HTMLElement}   carousel                 - The carousel element.
     * @property {HTMLElement[]} carouselItems            - The carousel items.
     * @property {HTMLElement}   carouselItemContainer    - The carousel item container.
     * @property {HTMLElement[]} carouselControls         - The carousel controls.
     * @property {HTMLElement}   carouselControlContainer - The carousel control container.
     * @property {HTMLElement[]} carouselTabs             - The carousel tabs.
     * @property {HTMLElement}   carouselTabContainer     - The carousel tab container.
     * @property {HTMLElement}   autoplay           - The autoplay button.
     * @property {HTMLElement}   next               - The next button.
     * @property {HTMLElement}   previous           - The previous button.
     */
    r(this, "_dom", {
      carousel: null,
      carouselItems: [],
      carouselItemContainer: null,
      carouselControls: [],
      carouselControlContainer: null,
      carouselTabs: [],
      carouselTabContainer: null,
      autoplay: null,
      next: null,
      previous: null
    });
    /**
     * The query selectors used by the carousel to populate the dom.
     *
     * @protected
     *
     * @type {Object<string>}
     *
     * @property {string} carouselItems            - The query selector string for carousel items.
     * @property {string} carouselItemContainer    - The query selector string for the carousel item container.
     * @property {string} carouselControls         - The query selector string for carousel controls.
     * @property {string} carouselControlContainer - The query selector string for carousel control container.
     * @property {string} carouselTabs             - The query selector string for the carousel tabs.
     * @property {string} carouselTabContainer     - The query selector string for the carousel tab container.
     * @property {string} autoplay                 - The query selector string for the autoplay button.
     * @property {string} next                     - The query selector string for the next button.
     * @property {string} previous                 - The query selector string for the previous button.
     */
    r(this, "_selectors", {
      carouselItems: "",
      carouselItemContainer: "",
      carouselControls: "",
      carouselControlContainer: "",
      carouselTabs: "",
      carouselTabContainer: "",
      autoplay: "",
      next: "",
      previous: ""
    });
    /**
     * The class(es) to apply when a carousel item is active.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    r(this, "_activeClass", "active");
    /**
     * The class(es) to apply to a carousel item that is the previously active item.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    r(this, "_previousClass", "previous");
    /**
     * The class(es) to apply to a carousel item that is the next active item.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    r(this, "_nextClass", "next");
    /**
     * The class(es) to apply to the autoplay button when the carousel is paused.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    r(this, "_playClass", "play");
    /**
     * The class(es) to apply to the autoplay button when the carousel is playing.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    r(this, "_pauseClass", "pause");
    /**
     * The index of the currently active carousel item.
     *
     * @protected
     *
     * @type {number}
     */
    r(this, "_currentItem", 0);
    /**
     * A flag to indicate if the carousel is currently playing.
     *
     * @protected
     *
     * @type {boolean}
     */
    r(this, "_autoplay", !0);
    /**
     * A variable to delay transition slides in milliseconds.
     *
     * @protected
     *
     * @type {number}
     */
    r(this, "_transitionDelay", 1e4);
    /**
     * The duration time (in milliseconds) for the transition between carousel items.
     *
     * @protected
     *
     * @type {number}
     */
    r(this, "_transitionDuration", 500);
    /**
     * The label for the autoplay button when the carousel is paused.
     *
     * @protected
     *
     * @type {string}
     */
    r(this, "_playText", "Play");
    /**
     * The label for the autoplay button when the carousel is playing.
     *
     * @protected
     *
     * @type {string}
     */
    r(this, "_pauseText", "Pause");
    /**
     * The current action being performed by the carousel.
     *
     * @protected
     *
     * @type {string}
     */
    r(this, "_currentAction", "next");
    /**
     * The stored interval callback for autoplaying the carousel.
     *
     * @protected
     *
     * @type {?Function}
     */
    r(this, "_autoplayInterval", null);
    /**
     * The prefix to use for CSS custom properties.
     *
     * @protected
     *
     * @type {string}
     */
    r(this, "_prefix", "graupl-");
    /**
     * The key used to generate IDs throughout the carousel.
     *
     * @protected
     *
     * @type {string}
     */
    r(this, "_key", "");
    /**
     * An array of error messages generated by the carousel.
     *
     * @protected
     *
     * @type {string[]}
     */
    r(this, "_errors", []);
    this._dom.carousel = t, this._selectors.carouselItems = e, this._selectors.carouselItemContainer = i, this._selectors.carouselControls = n, this._selectors.carouselControlContainer = a, this._selectors.carouselTabs = c, this._selectors.carouselTabContainer = _, this._selectors.autoplay = l, this._selectors.next = m, this._selectors.previous = E, this._activeClass = w || "", this._previousClass = I || "", this._nextClass = b || "", this._playClass = k || "", this._pauseClass = A || "", this._autoplay = T, this._transitionDelay = x, this._transitionDuration = S, this._playText = $ || "", this._pauseText = L || "", this._prefix = M || "", this._key = O || "", K && this.initialize();
  }
  /**
   * Initializes the carousel.
   */
  initialize() {
    try {
      if (!this._validate())
        throw new Error(
          `Graupl Carousel: cannot initialize carousel. The following errors have been found:
 - ${this.errors.join(
            `
 - `
          )}`
        );
      this._generateKey(), this._setDOMElements(), this._setIds(), this._setAriaAttributes(), this.activateFirstItem(), this._handleAutoplay(), this._handleFocus(), this._handleClick(), this._handleHover(), this._handleKeydown(), this._handleKeyup(), this._setTransitionDuration(), g.initializeStorage("carousels"), g.pushToStorage("carousels", this.dom.carousel.id, this);
    } catch (t) {
      console.error(t);
    }
  }
  /**
   * The HTML elements for the carousel in the DOM.
   *
   * @readonly
   *
   * @type {Object<HTMLElement>}
   *
   * @see _dom
   */
  get dom() {
    return this._dom;
  }
  /**
   * The query selectors used by the carousel to populate the dom.
   *
   * @readonly
   *
   * @type {Object<string>}
   *
   * @see _selectors
   */
  get selectors() {
    return this._selectors;
  }
  /**
   * The class(es) to apply when a carousel item is active.
   *
   * @type {string|string[]}
   *
   * @see _activeClass
   */
  get activeClass() {
    return this._activeClass;
  }
  /**
   * The class(es) to apply to a carousel item that is the next active item.
   *
   * @type {string|string[]}
   *
   * @see _previousClass
   */
  get previousClass() {
    return this._previousClass;
  }
  /**
   * The class(es) to apply to a carousel item that is the next active item.
   *
   * @type {string|string[]}
   *
   * @see _nextClass
   */
  get nextClass() {
    return this._nextClass;
  }
  /**
   * The class(es) to apply to the autoplay button when the carousel is paused.
   *
   * @type {string|string[]}
   *
   * @see _playClass
   */
  get playClass() {
    return this._playClass;
  }
  /**
   * The class(es) to apply to the autoplay button when the carousel is playing.
   *
   * @type {string|string[]}
   *
   * @see _pauseClass
   */
  get pauseClass() {
    return this._pauseClass;
  }
  /**
   * The index of the currently active carousel item.
   *
   * @type {number}
   *
   * @see _currentItem
   */
  get currentItem() {
    return this._currentItem;
  }
  /**
   * The currently active carousel item.
   *
   * @readonly
   *
   * @type {HTMLElement}
   */
  get currentCarouselItem() {
    return this.dom.carouselItems[this.currentItem];
  }
  /**
   * The currently active carousel tab.
   *
   * @readonly
   *
   * @type {HTMLElement}
   */
  get currentCarouselTab() {
    return this.dom.carouselTabs[this.currentItem];
  }
  /**
   * A flag to indicate if the carousel is currently playing.
   *
   * @type {boolean}
   *
   * @see _autoplay
   */
  get autoplay() {
    return this._autoplay;
  }
  /**
   * The delay in milliseconds before transitioning slides.
   *
   * @type {number}
   *
   * @see _transitionDelay
   */
  get transitionDelay() {
    return this._transitionDelay;
  }
  /**
   * The duration time (in milliseconds) for the transition between carousel items.
   *
   * @type {number}
   *
   * @see _transitionDuration
   */
  get transitionDuration() {
    return this._transitionDuration;
  }
  /**
   * The label for the autoplay button when the carousel is paused.
   *
   * @type {string}
   *
   * @see _playText
   */
  get playText() {
    return this._playText;
  }
  /**
   * The label for the autoplay button when the carousel is playing.
   *
   * @type {string}
   *
   * @see _pauseText
   */
  get pauseText() {
    return this._pauseText;
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
   * The current action being performed by the carousel.
   *
   * @type {string}
   *
   * @see _currentAction
   */
  get currentAction() {
    return this._currentAction;
  }
  /**
   * An array of error messages generated by the carousel.
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
  set currentItem(t) {
    if (o("number", { value: t }), t === this.currentItem)
      return;
    t < 0 ? this._currentItem = 0 : t >= this.dom.carouselItems.length ? this._currentItem = this.dom.carouselItems.length - 1 : this._currentItem = t, this._dom.carousel.querySelectorAll(
      this.selectors.carouselTab
    ) && this.dom.carouselItems.forEach((i, n) => {
      i.setAttribute("aria-selected", n === this._currentItem);
    });
  }
  set autoplay(t) {
    o("boolean", { value: t }), this._autoplay !== t && (this._autoplay = t);
  }
  set activeClass(t) {
    h({ activeClass: t }), this._activeClass !== t && (this._activeClass = t);
  }
  set previousClass(t) {
    h({ previousClass: t }), this._previousClass !== t && (this._previousClass = t);
  }
  set nextClass(t) {
    h({ nextClass: t }), this._nextClass !== t && (this._nextClass = t);
  }
  set playClass(t) {
    h({ playClass: t }), this._playClass !== t && (this._playClass = t);
  }
  set pauseClass(t) {
    h({ pauseClass: t }), this._pauseClass !== t && (this._pauseClass = t);
  }
  set transitionDelay(t) {
    o("number", { value: t }), t !== this.transitionDelay && t >= 0 && (this._currentItem = t);
  }
  set transitionDuration(t) {
    o("number", { value: t }), this._transitionDuration !== t && t >= 0 && (this._transitionDuration = t, this._setTransitionDuration());
  }
  set playText(t) {
    o("string", { value: t }), this._playText !== t && (this._playText = t);
  }
  set pauseText(t) {
    o("string", { value: t }), this._pauseText !== t && (this._pauseText = t);
  }
  set prefix(t) {
    o("string", { value: t }), this._prefix !== t && (this._prefix = t);
  }
  set key(t) {
    o("string", { value: t }), this._key !== t && (this._key = t);
  }
  /**
   * Validates all aspects of the carousel to ensure proper functionality.
   *
   * @protected
   *
   * @return {boolean} - The results of the validation.
   */
  _validate() {
    let t = !0;
    const e = C(HTMLElement, {
      carousel: this.dom.carousel
    });
    e || (this._errors.push(e.message), t = !1);
    const i = D({
      carouselItemsSelector: this._selectors.carouselItems,
      carouselItemContainerSelector: this._selectors.carouselItemContainer,
      carouselControlsSelector: this._selectors.carouselControls,
      carouselControlContainerSelector: this._selectors.carouselControlContainer,
      carouselTabsSelector: this._selectors.carouselTabs,
      carouselTabContainerSelector: this._selectors.carouselTabContainer,
      autoplaySelector: this._selectors.autoplay,
      nextSelector: this._selectors.next,
      previousSelector: this._selectors.previous
    });
    i || (this._errors.push(i.message), t = !1);
    const n = o("boolean", { autoplay: this.autoplay });
    n || (this._errors.push(n.message), t = !1);
    const a = o("number", {
      transitionDelay: this._transitionDelay
    });
    a || (this._errors.push(a.message), t = !1);
    const c = o("number", {
      transitionDuration: this._transitionDuration
    });
    if (c || (this._errors.push(c.message), t = !1), this._activeClass !== "") {
      const l = h({
        activeClass: this._activeClass
      });
      l || (this._errors.push(l.message), t = !1);
    }
    if (this._previousClass !== "") {
      const l = h({
        previousClass: this._previousClass
      });
      l || (this._errors.push(l.message), t = !1);
    }
    if (this._nextClass !== "") {
      const l = h({
        nextClass: this._nextClass
      });
      l || (this._errors.push(l.message), t = !1);
    }
    if (this._playClass !== "") {
      const l = h({
        playClass: this._playClass
      });
      l || (this._errors.push(l.message), t = !1);
    }
    if (this._pauseClass !== "") {
      const l = h({
        pauseClass: this._pauseClass
      });
      l || (this._errors.push(l.message), t = !1);
    }
    if (this._playText !== "") {
      const l = o("string", {
        playText: this._playText
      });
      l || (this._errors.push(l.message), t = !1);
    }
    if (this._pauseText !== "") {
      const l = o("string", {
        pauseText: this._pauseText
      });
      l || (this._errors.push(l.message), t = !1);
    }
    const _ = o("string", { prefix: this._prefix });
    return _ || (this._errors.push(_.message), t = !1), t;
  }
  /**
   * Sets DOM elements within the carousel.
   *
   * The carousel element _cannot_ be set through this method.
   *
   * @protected
   *
   * @param {string}      elementType                - The type of element to populate.
   * @param {HTMLElement} [base = this.dom.carousel] - The element used as the base for the querySelector.
   * @param {boolean}     [overwrite = true]         - A flag to set if the existing elements will be overwritten.
   */
  _setDOMElementType(t, e = this.dom.carousel, i = !0) {
    if (typeof this.selectors[t] == "string") {
      if (t === "carousel")
        throw new Error(
          `Graupl Carousel: "${t}" element cannot be set through _setDOMElementType.`
        );
      if (e !== this.dom.carousel && C(HTMLElement, { base: e }), Array.isArray(this._dom[t])) {
        const a = Array.from(
          e.querySelectorAll(this.selectors[t])
        ).filter(
          (c) => c.parentElement === e
        );
        i ? this._dom[t] = a : this._dom[t] = [
          ...this._dom[t],
          ...a
        ];
      } else {
        const n = e.querySelector(this.selectors[t]);
        if (n && n.parentElement !== e)
          return;
        i && (this._dom[t] = n);
      }
    } else
      throw new Error(
        `Graupl Carousel: "${t}" is not a valid element type within the carousel.`
      );
  }
  /**
   * Resets DOM elements within the menu.
   *
   * The carousel element _cannot_ be reset through this method.
   *
   * @protected
   *
   * @param {string} elementType - The type of element to clear.
   */
  _resetDOMElementType(t) {
    if (typeof this.selectors[t] == "string") {
      if (t === "carousel")
        throw new Error(
          `Graupl Carousel: "${t}" element cannot be reset through _resetDOMElementType.`
        );
      Array.isArray(this._dom[t]) ? this._dom[t] = [] : this._dom[t] = null;
    } else
      throw new Error(
        `Graupl Carousel: "${t}" is not a valid element type within the carousel.`
      );
  }
  /**
   * Sets all DOM elements within the carousel.
   *
   * Utilizes _setDOMElementType and _resetDOMElementType.
   *
   * @protected
   */
  _setDOMElements() {
    this._setDOMElementType("carouselItemContainer"), this._setDOMElementType("carouselControlContainer"), this._setDOMElementType("carouselTabContainer"), this.dom.carouselItemContainer && this._setDOMElementType("carouselItems", this.dom.carouselItemContainer), this.dom.carouselControlContainer && (this._setDOMElementType(
      "carouselControls",
      this.dom.carouselControlContainer
    ), this._setDOMElementType("autoplay", this.dom.carouselControlContainer), this._setDOMElementType("next", this.dom.carouselControlContainer), this._setDOMElementType("previous", this.dom.carouselControlContainer)), this._dom.carouselTabContainer && this._setDOMElementType("carouselTabs", this.dom.carouselTabContainer);
  }
  /**
   * Generates a key for the carousel.
   *
   * @param {boolean} [regenerate = false] - A flag to determine if the key should be regenerated.
   */
  _generateKey(t = !1) {
    (this.key === "" || t) && (this.key = Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 10));
  }
  /**
   * Sets the IDs of the carousel and it's children if they do not already exist.
   *
   * The generated IDs use the key and follow the format:
   *  - carousel: `carousel-${key}`
   *  - carousel items: `carousel-item-${key}-${index}`
   *  - carousel tabs: `carousel-tab-${key}-${index}`
   */
  _setIds() {
    this.dom.carousel.id = this.dom.carousel.id || `carousel-${this.key}`, this.dom.carouselItems.forEach((t, e) => {
      t.id = t.id || `carousel-item-${this.key}-${e}`;
    }), this.dom.carouselTabs.forEach((t, e) => {
      t.id = t.id || `carousel-tab-${this.key}-${e}`;
    });
  }
  /**
   * Sets the aria attributes for the carousel.
   */
  _setAriaAttributes() {
    !y("section", { carousel: this.dom.carousel }) && !this.dom.carousel.getAttribute("role") !== "region" && this.dom.carousel.setAttribute("role", "group"), this._dom.carousel.setAttribute("aria-roledescription", "carousel"), this.dom.carouselTabContainer && this.dom.carouselTabContainer.setAttribute("role", "tablist"), this.dom.carouselTabs.forEach((t, e) => {
      y("button", { tab: t }) || t.setAttribute("role", "button"), t.setAttribute("aria-selected", e === 0), t.setAttribute("aria-controls", this.dom.carouselItems[e].id);
    });
  }
  /**
   * Sets the interval for autoplaying the carousel.
   *
   * @protected
   */
  _setInterval() {
    this._clearInterval(), this._autoplayInterval = setInterval(() => {
      this.activateNextItem();
    }, this.transitionDelay);
  }
  /**
   * Clears the interval for autoplaying the carousel.
   *
   * @protected
   */
  _clearInterval() {
    clearInterval(this._autoplayInterval);
  }
  /**
   * Handles the autoplay functionality of the carousel.
   *
   * - Adds the appropriate class to the autoplay button.
   * - Removes the appropriate class from the autoplay button.
   * - Sets the appropriate aria-label for the autoplay button.
   * - Sets the appropriate aria-live for the carousel.
   * - Sets/clears the interval for autoplaying the carousel.
   *
   * @protected
   */
  _handleAutoplay() {
    this.autoplay ? (u(this.pauseClass, this.dom.autoplay), d(this.playClass, this.dom.autoplay), this.dom.autoplay.setAttribute("aria-label", this.pauseText), this.dom.carousel.setAttribute("aria-live", "off"), this._setInterval()) : (u(this.playClass, this.dom.autoplay), d(this.pauseClass, this.dom.autoplay), this.dom.autoplay.setAttribute("aria-label", this.playText), this.dom.carousel.setAttribute("aria-live", "polite"), this._clearInterval());
  }
  /**
   * Handles the focus events throughout the carousel for proper use.
   *
   * - Adds a `focusin` listener to the carousel element to pause autoplay.
   * - Adds a `focusout` listener to the carousel element to resume autoplay.
   */
  _handleFocus() {
    this.dom.carousel.addEventListener("focusin", () => {
      this.autoplay && this._clearInterval();
    }), this.dom.carousel.addEventListener("focusout", () => {
      this.autoplay && this._setInterval();
    });
  }
  /**
   * Handles the click events throughout the carousel.
   *
   * - Adds a `pointerup` listener to the next control to activate the next item.
   * - Adds a `pointerup` listener to the previous control to activate the previous item.
   * - Adds a `pointerup` listener to the autoplay control to toggle autoplay.
   * - Adds a `pointerup` listener to each tab control to activate the corresponding item.
   */
  _handleClick() {
    this.dom.next.addEventListener("pointerup", () => {
      this.activateNextItem();
    }), this.dom.previous.addEventListener("pointerup", () => {
      this.activatePreviousItem();
    }), this.dom.autoplay.addEventListener("pointerup", () => {
      this.toggleAutoplay();
    }), this.dom.carouselTabs.forEach((t, e) => {
      t.addEventListener("pointerup", () => {
        this.currentItem > e ? this._currentAction = "previous" : this._currentAction = "next", this.activateItem(e);
      });
    });
  }
  /**
   * Handles the hover events throughout the carousel for proper use.
   *
   * - Adds a `pointerover` listener to the carousel to pause autoplay.
   * - Adds a `pointerleave` listener to the carousel to resume autoplay.
   */
  _handleHover() {
    this.dom.carousel.addEventListener("pointerover", () => {
      this.autoplay && this._clearInterval();
    }), this.dom.carousel.addEventListener("pointerleave", () => {
      this.autoplay && this._setInterval();
    });
  }
  /**
   * Handles keydown events throughout the carousel item for proper use.
   *
   * - Adds a `keydown` listener to all control elements.
   *   - Prevents Space and Enter key events.
   * - Adds a `keydown` listener to all tab elements.
   *   - Prevents Space and Enter key events.
   */
  _handleKeydown() {
    this.dom.carouselControls.forEach((t) => {
      t.addEventListener("keydown", (e) => {
        switch (f(e)) {
          case "Space":
          case "Enter":
            p(e);
            break;
        }
      });
    }), this.dom.carouselTabs.forEach((t) => {
      t.addEventListener("keydown", (e) => {
        switch (f(e)) {
          case "Space":
          case "Enter":
            p(e);
            break;
        }
      });
    });
  }
  /**
   * Handles keyup events throughout the carousel item for proper use.
   *
   * - Adds a `keyup` listener to all control elements.
   *   - Activates the next/previous item depending on which control is pressed.
   *   - Toggles autoplay if the autoplay control is pressed.
   *
   */
  _handleKeyup() {
    this.dom.next.addEventListener("keyup", (t) => {
      switch (f(t)) {
        case "Space":
        case "Enter":
          this.activateNextItem(), p(t);
          break;
      }
    }), this.dom.previous.addEventListener("keyup", (t) => {
      switch (f(t)) {
        case "Space":
        case "Enter":
          this.activatePreviousItem(), p(t);
          break;
      }
    }), this.dom.autoplay.addEventListener("keyup", (t) => {
      switch (f(t)) {
        case "Space":
        case "Enter":
          this.toggleAutoplay(), p(t);
          break;
      }
    }), this.dom.carouselTabs.forEach((t, e) => {
      t.addEventListener("keyup", (i) => {
        switch (f(i)) {
          case "Space":
          case "Enter":
            this.activateItem(e), p(i);
            break;
        }
      });
    });
  }
  /**
   * Sets the transition duration for the carousel as a CSS custom property.
   *
   * The custom property is set as `--graupl-carousel-transition-duration`.
   *
   * @protected
   */
  _setTransitionDuration() {
    this.dom.carousel.style.setProperty(
      `--${this.prefix}carousel-transition-duration`,
      `${this.transitionDuration}ms`
    );
  }
  /**
   * Activates the current carousel item.
   *
   * @public
   */
  activateCurrentItem() {
    u(this.activeClass, this.currentCarouselItem), this.currentCarouselTab && (this.currentCarouselTab.setAttribute("aria-selected", !0), u(this.activeClass, this.currentCarouselTab));
  }
  /**
   * Deactivates the current carousel item.
   *
   * @public
   */
  deactivateCurrentItem() {
    d(this.activeClass, this.currentCarouselItem), this.currentCarouselTab && (this.currentCarouselTab.setAttribute("aria-selected", !1), d(this.activeClass, this.currentCarouselTab));
  }
  /**
   * Activates the carousel item at a given index.
   *
   * @public
   *
   * @param {number} index - The index of the carousel item to activate.
   */
  activateItem(t) {
    const e = this.currentItem;
    this.dom.carousel.dataset.grauplAction = this._currentAction, this.autoplay && this._clearInterval(), u(this.previousClass, this.currentCarouselItem), u(this.nextClass, this.dom.carouselItems[t]), requestAnimationFrame(() => {
      this.deactivateCurrentItem(), this.currentItem = t, this.activateCurrentItem(), requestAnimationFrame(() => {
        setTimeout(() => {
          d(this.previousClass, this.dom.carouselItems[e]), d(this.nextClass, this.currentCarouselItem);
        }, this.transitionDuration);
      });
    }), this.autoplay && this._setInterval();
  }
  /**
   * Activates the first carousel item.
   *
   * @public
   */
  activateFirstItem() {
    this.activateItem(0);
  }
  /**
   * Activates the last carousel item.
   *
   * @public
   */
  activateLastItem() {
    this.activateItem(this.dom.carouselItems.length - 1);
  }
  /**
   * Activates the next carousel item.
   *
   * @public
   */
  activateNextItem() {
    this._currentAction = "next", this.currentItem + 1 >= this.dom.carouselItems.length ? this.activateFirstItem() : this.activateItem(this.currentItem + 1);
  }
  /**
   * Activates the previous carousel item.
   *
   * @public
   */
  activatePreviousItem() {
    this._currentAction = "previous", this.currentItem - 1 < 0 ? this.activateLastItem() : this.activateItem(this.currentItem - 1);
  }
  /**
   * Toggles autoplay on the carousel.
   *
   * @public
   */
  toggleAutoplay() {
    this.autoplay = !this.autoplay, this._handleAutoplay();
  }
}
const J = {
  Accordion: R,
  Alert: B,
  Carousel: U
};
export {
  J as default
};
