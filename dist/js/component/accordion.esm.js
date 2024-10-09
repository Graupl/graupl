var T = Object.defineProperty;
var S = (e, t, i) => t in e ? T(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var r = (e, t, i) => S(e, typeof t != "symbol" ? t + "" : t, i);
function g(e, t) {
  try {
    if (typeof t != "object") {
      const i = typeof t;
      throw new TypeError(
        `Elements given to isValidInstance() must be inside of an object. "${i}" given.`
      );
    }
    for (const i in t)
      if (!(t[i] instanceof e)) {
        const s = typeof t[i];
        throw new TypeError(
          `${i} must be an instance of ${e.name}. "${s}" given.`
        );
      }
    return {
      status: !0,
      error: null
    };
  } catch (i) {
    return {
      status: !1,
      error: i
    };
  }
}
function o(e, t) {
  try {
    if (typeof t != "object") {
      const i = typeof t;
      throw new TypeError(
        `Values given to isValidType() must be inside of an object. "${i}" given.`
      );
    }
    for (const i in t) {
      const s = typeof t[i];
      if (s !== e)
        throw new TypeError(`${i} must be a ${e}. "${s}" given.`);
    }
    return {
      status: !0,
      error: null
    };
  } catch (i) {
    return {
      status: !1,
      error: i
    };
  }
}
function E(e) {
  try {
    if (typeof e != "object") {
      const t = typeof e;
      throw new TypeError(
        `Values given to isQuerySelector() must be inside of an object. "${t}" given.`
      );
    }
    for (const t in e)
      try {
        if (e[t] === null)
          throw new Error();
        document.querySelector(e[t]);
      } catch {
        throw new TypeError(
          `${t} must be a valid query selector. "${e[t]}" given.`
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
function u(e) {
  try {
    if (typeof e != "object" || Array.isArray(e)) {
      const t = typeof e;
      throw new TypeError(
        `Values given to isValidClassList() must be inside of an object. "${t}" given.`
      );
    }
    for (const t in e) {
      const i = typeof e[t];
      if (i !== "string")
        if (Array.isArray(e[t]))
          e[t].forEach((s) => {
            if (typeof s != "string")
              throw new TypeError(
                `${t} must be a string or an array of strings. An array containing non-strings given.`
              );
          });
        else
          throw new TypeError(
            `${t} must be a string or an array of strings. "${i}" given.`
          );
      else {
        const s = {};
        s[t] = e[t], E(s);
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
function _(e, t) {
  if (o("string", { tagName: e }).status && g(HTMLElement, t).status) {
    const i = e.toLowerCase();
    let s = !0;
    for (const n in t)
      t[n].tagName.toLowerCase() !== i && (s = !1);
    return s;
  } else
    return !1;
}
function m(e, t) {
  e === "" || e.length === 0 || (typeof e == "string" ? t.classList.add(e) : t.classList.add(...e));
}
function p(e, t) {
  e === "" || e.length === 0 || (typeof e == "string" ? t.classList.remove(e) : t.classList.remove(...e));
}
class C {
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
    accordionItemToggleElement: i,
    accordionItemContentElement: s,
    parentAccordion: n = null
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
    r(this, "_dom", {
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
     * @event grauplAccordionItemShow
     *
     * @type {CustomEvent}
     *
     * @property {boolean}               bubbles - A flag to bubble the event.
     * @property {Object<AccordionItem>} detail  - The details object containing the Accordion item itself.
     */
    r(this, "_showEvent", new CustomEvent("grauplAccordionItemShow", {
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
    r(this, "_hideEvent", new CustomEvent("grauplAccordionItemHide", {
      bubbles: !0,
      detail: { item: this }
    }));
    this._dom.item = t, this._dom.toggle = i, this._dom.content = s, this._elements.parentAccordion = n;
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
    const { key: t } = this.elements.parentAccordion, i = this.elements.parentAccordion.dom.accordionItems.indexOf(
      this.dom.item
    );
    this.dom.item.id = this.dom.item.id || `accordion-item-${t}-${i}`, this.dom.toggle.id = this.dom.toggle.id || `accordion-item-toggle-${t}-${i}`, this.dom.content.id = this.dom.content.id || `accordion-item-content-${t}-${i}`;
  }
  /**
   * Sets the ARIA attributes for the accordion item and it's elements.
   */
  _setAriaAttributes() {
    _("button", { toggle: this.dom.toggle }) || this.dom.toggle.setAttribute("role", "button"), this.dom.toggle.getAttribute("aria-expanded") !== "true" && this.dom.toggle.setAttribute("aria-expanded", "false"), this.dom.toggle.setAttribute("aria-controls", this.dom.content.id), _("section", { content: this.dom.content }) || this.dom.content.setAttribute("role", "region"), this.dom.content.setAttribute("aria-labelledby", this.dom.toggle.id);
  }
  /**
   * Shows the accordion item.
   *
   * @public
   *
   * @fires grauplAccordionItemShow
   *
   * @param {boolean} [emit = true]       - Emit the show event once shown.
   * @param {boolean} [transition = true] - Respect the transition class.
   */
  show(t = !0, i = !0) {
    if (this._open)
      return;
    const { closeClass: s, openClass: n, transitionClass: a, openDuration: l } = this.elements.parentAccordion;
    this.dom.toggle.setAttribute("aria-expanded", "true"), i && a !== "" ? (m(a, this.dom.item), requestAnimationFrame(() => {
      p(s, this.dom.item), this.dom.item.style.height = `${this.dom.toggle.getBoundingClientRect().height}px`, requestAnimationFrame(() => {
        m(n, this.dom.item), this.dom.item.style.height = `${this.dom.toggle.getBoundingClientRect().height + this.dom.content.getBoundingClientRect().height}px`, requestAnimationFrame(() => {
          setTimeout(() => {
            p(a, this.dom.item), this.dom.item.style.height = "";
          }, l);
        });
      });
    })) : (m(n, this.dom.item), p(s, this.dom.item)), this._open = !0, this.elements.parentAccordion.allowMultipleExpand || (this.unlockSiblings(), this.closeSiblings()), this.elements.parentAccordion.allowNoExpand || (this.elements.parentAccordion.openAccordionItems.length <= 1 ? this.lock() : this.unlockSiblings()), t && this.dom.item.dispatchEvent(this._showEvent);
  }
  /**
   * Hides the accordion item.
   *
   * @public
   *
   * @fires grauplAccordionItemHide
   *
   * @param {boolean} [emit = true]       - Emit the show event once shown.
   * @param {boolean} [transition = true] - Respect the transition class.
   */
  hide(t = !0, i = !0) {
    if (!this._open || !this.elements.parentAccordion.allowNoExpand && this.elements.parentAccordion.openAccordionItems.length <= 1)
      return;
    const { closeClass: s, openClass: n, transitionClass: a, closeDuration: l } = this.elements.parentAccordion;
    this.dom.toggle.setAttribute("aria-expanded", "false"), i && a !== "" ? (m(a, this.dom.item), this.dom.item.style.height = `${this.dom.item.getBoundingClientRect().height}px`, requestAnimationFrame(() => {
      p(n, this.dom.item), this.dom.item.style.height = `${this.dom.toggle.getBoundingClientRect().height}px`, requestAnimationFrame(() => {
        m(s, this.dom.item), requestAnimationFrame(() => {
          setTimeout(() => {
            p(a, this.dom.item), this.dom.item.style.height = "";
          }, l);
        });
      });
    })) : (m(s, this.dom.item), p(n, this.dom.item)), this._open = !1, !this.elements.parentAccordion.allowNoExpand && this.elements.parentAccordion.openAccordionItems.length === 1 && this.elements.parentAccordion.openAccordionItems[0].lock(), t && this.dom.item.dispatchEvent(this._hideEvent);
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
function w(e) {
  try {
    const t = e.key || e.keyCode, i = {
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
    return Object.keys(i).find((s) => i[s] === !0) || "";
  } catch {
    return "";
  }
}
function h(e) {
  e.preventDefault(), e.stopPropagation();
}
function L(e = null) {
  window.Graupl = window.Graupl || {}, o("string", { type: e }) && (window.Graupl[e] = window.Graupl[e] || {});
}
function M(e = null) {
  return o("string", { type: e }) ? window.Graupl[e] : window.Graupl;
}
function K(e, t = {}) {
  o("string", { type: e }) && o("object", { data: t }) && (window.Graupl[e] = t);
}
function G(e) {
  o("string", { type: e }) && (window.Graupl[e] = {});
}
function O(e, t, i) {
  o("string", { type: e, key: t }) && (window.Graupl[e][t] = i);
}
function j(e, t) {
  return o("string", { type: e, key: t }) ? window.Graupl[e][t] : null;
}
function F(e, t) {
  o("string", { type: e, key: t }) && delete window.Graupl[e][t];
}
const y = {
  initializeStorage: L,
  getStorage: M,
  setStorage: K,
  clearStorage: G,
  pushToStorage: O,
  getFromStorage: j,
  removeFromStorage: F
};
class V {
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
    accordionItemSelector: i = ".accordion-item",
    accordionItemToggleSelector: s = ".accordion-item-toggle",
    accordionItemContentSelector: n = ".accordion-item-content",
    openClass: a = "show",
    closeClass: l = "hide",
    transitionClass: d = "transitioning",
    transitionDuration: f = 300,
    openDuration: c = -1,
    closeDuration: b = -1,
    optionalKeySupport: A = !1,
    allowMultipleExpand: k = !0,
    allowNoExpand: D = !0,
    prefix: I = "am-",
    key: x = null,
    initialize: $ = !1
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
    r(this, "_dom", {
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
     * @property {string} accordionItemContents - The query selector for accordion contents.
     */
    r(this, "_selectors", {
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
    this._dom.accordion = t, this._selectors.accordionItems = i, this._selectors.accordionItemToggles = s, this._selectors.accordionItemContents = n, this._openClass = a || "", this._closeClass = l || "", this._transitionClass = d || "", this._transitionDuration = f, this._openDuration = c, this._closeDuration = b, this._optionalKeySupport = A, this._allowMultipleExpand = k, this._allowNoExpand = D, this._prefix = I || "", this._key = x || "", $ && this.initialize();
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
      this._generateKey(), this._setDOMElements(), this._setIds(), this._createChildElements(), this._handleFocus(), this._handleClick(), this._handleKeydown(), this._handleKeyup(), this._setTransitionDurations(), y.initializeStorage("accordions"), y.pushToStorage("accordions", this.dom.accordion.id, this);
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
    u({ openClass: t }), this._openClass !== t && (this._openClass = t);
  }
  set closeClass(t) {
    u({ closeClass: t }), this._closeClass !== t && (this._closeClass = t);
  }
  set transitionClass(t) {
    u({ transitionClass: t }), this._transitionClass !== t && (this._transitionClass = t);
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
    o("object", { value: t }), t != null && t.isArray() && t.every((i) => i instanceof C) && (this._accordionItems = t);
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
  _setDOMElementType(t, i = this.dom.accordion, s = !0, n = !1) {
    if (typeof this.selectors[t] == "string") {
      if (this._domLock.includes(t))
        throw new Error(
          `Graupl ${this.contructor.name}: "${t}" element cannot be set through _setDOMElementType.`
        );
      i !== this.dom.accordion && g(HTMLElement, { base: i });
      const l = Array.from(
        i.querySelectorAll(this.selectors[t])
      ).filter(
        (d) => n ? d.parentElement === i : !0
      );
      s ? this._dom[t] = l : this._dom[t] = [
        ...this._dom[t],
        ...l
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
    this.dom.accordionItems.forEach((t, i) => {
      const s = new C({
        accordionItemElement: t,
        accordionItemToggleElement: this.dom.accordionItemToggles[i],
        accordionItemContentElement: this.dom.accordionItemContents[i],
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
    let t = !0;
    const i = g(HTMLElement, {
      accordionElement: this.dom.accordion
    });
    i || (this._errors.push(i.message), t = !1);
    const s = E({
      accordionItemSelector: this._selectors.accordionItems,
      accordionItemToggleSelector: this._selectors.accordionItemToggles,
      accordionItemContentSelector: this._selectors.accordionItemContents
    });
    if (s || (this._errors.push(s.message), t = !1), this._openClass !== "") {
      const c = u({ openClass: this._openClass });
      c.status || (this._errors.push(c.error.message), t = !1);
    }
    if (this._closeClass !== "") {
      const c = u({
        closeClass: this._closeClass
      });
      c.status || (this._errors.push(c.error.message), t = !1);
    }
    if (this._transitionClass !== "") {
      const c = u({
        transitionClass: this._transitionClass
      });
      c.status || (this._errors.push(c.error.message), t = !1);
    }
    const n = o("number", {
      transitionDuration: this._transitionDuration
    });
    n.status || (this._errors.push(n.error.message), t = !1);
    const a = o("number", {
      openDuration: this._openDuration
    });
    a.status || (this._errors.push(a.error.message), t = !1);
    const l = o("number", {
      closeDuration: this._closeDuration
    });
    l.status || (this._errors.push(l.error.message), t = !1);
    const d = o("boolean", {
      optionalKeySupport: this._optionalSupport,
      allowMultipleExpand: this._allowMultipleExpand,
      allowNoExpand: this._allowNoExpand
    });
    if (d.status || (this._errors.push(d.error.message), t = !1), this._key !== "") {
      const c = o("string", { key: this._key });
      c.status || (this._errors.push(c.error.message), t = !1);
    }
    const f = o("string", { prefix: this._prefix });
    return f.status || (this._errors.push(f.error.message), t = !1), t;
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
    this.elements.accordionItems.forEach((t, i) => {
      t.dom.toggle.addEventListener("focus", () => {
        this.currentChild = i;
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
    this.elements.accordionItems.forEach((t, i) => {
      t.dom.toggle.addEventListener("pointerup", () => {
        this.currentChild = i, t.toggle();
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
      t.addEventListener("keydown", (i) => {
        const s = w(i);
        (["Space", "Enter"].includes(s) || this.optionalKeySupport && ["ArrowDown", "ArrowUp", "Home", "End"].includes(s)) && h(i);
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
      t.addEventListener("keyup", (i) => {
        const s = w(i);
        switch (s) {
          case "Space":
          case "Enter":
            h(i), this.currentAccordionItem.toggle();
            break;
        }
        if (this.optionalKeySupport)
          switch (s) {
            case "Home":
              h(i), this.focusFirstChild();
              break;
            case "End":
              h(i), this.focusLastChild();
              break;
            case "ArrowDown":
              h(i), this.focusNextChild();
              break;
            case "ArrowUp":
              h(i), this.focusPreviousChild();
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
  V as default
};
