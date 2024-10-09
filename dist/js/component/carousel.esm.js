var O = Object.defineProperty;
var j = (e, t, s) => t in e ? O(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var o = (e, t, s) => j(e, typeof t != "symbol" ? t + "" : t, s);
function h(e, t) {
  e === "" || e.length === 0 || (typeof e == "string" ? t.classList.add(e) : t.classList.add(...e));
}
function p(e, t) {
  e === "" || e.length === 0 || (typeof e == "string" ? t.classList.remove(e) : t.classList.remove(...e));
}
function m(e) {
  try {
    const t = e.key || e.keyCode, s = {
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
    return Object.keys(s).find((r) => s[r] === !0) || "";
  } catch {
    return "";
  }
}
function f(e) {
  e.preventDefault(), e.stopPropagation();
}
function y(e, t) {
  try {
    if (typeof t != "object") {
      const s = typeof t;
      throw new TypeError(
        `Elements given to isValidInstance() must be inside of an object. "${s}" given.`
      );
    }
    for (const s in t)
      if (!(t[s] instanceof e)) {
        const r = typeof t[s];
        throw new TypeError(
          `${s} must be an instance of ${e.name}. "${r}" given.`
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
function i(e, t) {
  try {
    if (typeof t != "object") {
      const s = typeof t;
      throw new TypeError(
        `Values given to isValidType() must be inside of an object. "${s}" given.`
      );
    }
    for (const s in t) {
      const r = typeof t[s];
      if (r !== e)
        throw new TypeError(`${s} must be a ${e}. "${r}" given.`);
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
function g(e) {
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
function l(e) {
  try {
    if (typeof e != "object" || Array.isArray(e)) {
      const t = typeof e;
      throw new TypeError(
        `Values given to isValidClassList() must be inside of an object. "${t}" given.`
      );
    }
    for (const t in e) {
      const s = typeof e[t];
      if (s !== "string")
        if (Array.isArray(e[t]))
          e[t].forEach((r) => {
            if (typeof r != "string")
              throw new TypeError(
                `${t} must be a string or an array of strings. An array containing non-strings given.`
              );
          });
        else
          throw new TypeError(
            `${t} must be a string or an array of strings. "${s}" given.`
          );
      else {
        const r = {};
        r[t] = e[t], g(r);
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
function d(e, t) {
  if (i("string", { tagName: e }).status && y(HTMLElement, t).status) {
    const s = e.toLowerCase();
    let r = !0;
    for (const n in t)
      t[n].tagName.toLowerCase() !== s && (r = !1);
    return r;
  } else
    return !1;
}
function P(e = null) {
  window.Graupl = window.Graupl || {}, i("string", { type: e }) && (window.Graupl[e] = window.Graupl[e] || {});
}
function F(e = null) {
  return i("string", { type: e }) ? window.Graupl[e] : window.Graupl;
}
function V(e, t = {}) {
  i("string", { type: e }) && i("object", { data: t }) && (window.Graupl[e] = t);
}
function q(e) {
  i("string", { type: e }) && (window.Graupl[e] = {});
}
function H(e, t, s) {
  i("string", { type: e, key: t }) && (window.Graupl[e][t] = s);
}
function z(e, t) {
  return i("string", { type: e, key: t }) ? window.Graupl[e][t] : null;
}
function K(e, t) {
  i("string", { type: e, key: t }) && delete window.Graupl[e][t];
}
const C = {
  initializeStorage: P,
  getStorage: F,
  setStorage: V,
  clearStorage: q,
  pushToStorage: H,
  getFromStorage: z,
  removeFromStorage: K
};
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
    carouselItemSelector: s = ".carousel-item",
    carouselItemContainerSelector: r = ".carousel-item-container",
    carouselControlSelector: n = ".carousel-control",
    carouselControlContainerSelector: u = ".carousel-control-container",
    carouselTabSelector: c = ".carousel-tab",
    carouselTabContainerSelector: _ = ".carousel-tab-container",
    autoplaySelector: a = ".autoplay",
    nextSelector: I = ".next",
    previousSelector: b = ".previous",
    activeClass: v = "active",
    previousClass: T = "previous",
    nextClass: E = "next",
    playClass: w = "play",
    pauseClass: x = "pause",
    autoplay: k = !0,
    transitionDelay: A = 1e4,
    transitionDuration: D = 500,
    playText: S = "Play",
    pauseText: L = "Pause",
    prefix: $ = "graupl-",
    key: M = null,
    initialize: G = !1
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
    o(this, "_dom", {
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
    o(this, "_selectors", {
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
    o(this, "_activeClass", "active");
    /**
     * The class(es) to apply to a carousel item that is the previously active item.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    o(this, "_previousClass", "previous");
    /**
     * The class(es) to apply to a carousel item that is the next active item.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    o(this, "_nextClass", "next");
    /**
     * The class(es) to apply to the autoplay button when the carousel is paused.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    o(this, "_playClass", "play");
    /**
     * The class(es) to apply to the autoplay button when the carousel is playing.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    o(this, "_pauseClass", "pause");
    /**
     * The index of the currently active carousel item.
     *
     * @protected
     *
     * @type {number}
     */
    o(this, "_currentItem", 0);
    /**
     * A flag to indicate if the carousel is currently playing.
     *
     * @protected
     *
     * @type {boolean}
     */
    o(this, "_autoplay", !0);
    /**
     * A variable to delay transition slides in milliseconds.
     *
     * @protected
     *
     * @type {number}
     */
    o(this, "_transitionDelay", 1e4);
    /**
     * The duration time (in milliseconds) for the transition between carousel items.
     *
     * @protected
     *
     * @type {number}
     */
    o(this, "_transitionDuration", 500);
    /**
     * The label for the autoplay button when the carousel is paused.
     *
     * @protected
     *
     * @type {string}
     */
    o(this, "_playText", "Play");
    /**
     * The label for the autoplay button when the carousel is playing.
     *
     * @protected
     *
     * @type {string}
     */
    o(this, "_pauseText", "Pause");
    /**
     * The current action being performed by the carousel.
     *
     * @protected
     *
     * @type {string}
     */
    o(this, "_currentAction", "next");
    /**
     * The stored interval callback for autoplaying the carousel.
     *
     * @protected
     *
     * @type {?Function}
     */
    o(this, "_autoplayInterval", null);
    /**
     * The prefix to use for CSS custom properties.
     *
     * @protected
     *
     * @type {string}
     */
    o(this, "_prefix", "graupl-");
    /**
     * The key used to generate IDs throughout the carousel.
     *
     * @protected
     *
     * @type {string}
     */
    o(this, "_key", "");
    /**
     * An array of error messages generated by the carousel.
     *
     * @protected
     *
     * @type {string[]}
     */
    o(this, "_errors", []);
    this._dom.carousel = t, this._selectors.carouselItems = s, this._selectors.carouselItemContainer = r, this._selectors.carouselControls = n, this._selectors.carouselControlContainer = u, this._selectors.carouselTabs = c, this._selectors.carouselTabContainer = _, this._selectors.autoplay = a, this._selectors.next = I, this._selectors.previous = b, this._activeClass = v || "", this._previousClass = T || "", this._nextClass = E || "", this._playClass = w || "", this._pauseClass = x || "", this._autoplay = k, this._transitionDelay = A, this._transitionDuration = D, this._playText = S || "", this._pauseText = L || "", this._prefix = $ || "", this._key = M || "", G && this.initialize();
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
      this._generateKey(), this._setDOMElements(), this._setIds(), this._setAriaAttributes(), this.activateFirstItem(), this._handleAutoplay(), this._handleFocus(), this._handleClick(), this._handleHover(), this._handleKeydown(), this._handleKeyup(), this._setTransitionDuration(), C.initializeStorage("carousels"), C.pushToStorage("carousels", this.dom.carousel.id, this);
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
    if (i("number", { value: t }), t === this.currentItem)
      return;
    t < 0 ? this._currentItem = 0 : t >= this.dom.carouselItems.length ? this._currentItem = this.dom.carouselItems.length - 1 : this._currentItem = t, this._dom.carousel.querySelectorAll(
      this.selectors.carouselTab
    ) && this.dom.carouselItems.forEach((r, n) => {
      r.setAttribute("aria-selected", n === this._currentItem);
    });
  }
  set autoplay(t) {
    i("boolean", { value: t }), this._autoplay !== t && (this._autoplay = t);
  }
  set activeClass(t) {
    l({ activeClass: t }), this._activeClass !== t && (this._activeClass = t);
  }
  set previousClass(t) {
    l({ previousClass: t }), this._previousClass !== t && (this._previousClass = t);
  }
  set nextClass(t) {
    l({ nextClass: t }), this._nextClass !== t && (this._nextClass = t);
  }
  set playClass(t) {
    l({ playClass: t }), this._playClass !== t && (this._playClass = t);
  }
  set pauseClass(t) {
    l({ pauseClass: t }), this._pauseClass !== t && (this._pauseClass = t);
  }
  set transitionDelay(t) {
    i("number", { value: t }), t !== this.transitionDelay && t >= 0 && (this._currentItem = t);
  }
  set transitionDuration(t) {
    i("number", { value: t }), this._transitionDuration !== t && t >= 0 && (this._transitionDuration = t, this._setTransitionDuration());
  }
  set playText(t) {
    i("string", { value: t }), this._playText !== t && (this._playText = t);
  }
  set pauseText(t) {
    i("string", { value: t }), this._pauseText !== t && (this._pauseText = t);
  }
  set prefix(t) {
    i("string", { value: t }), this._prefix !== t && (this._prefix = t);
  }
  set key(t) {
    i("string", { value: t }), this._key !== t && (this._key = t);
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
    const s = y(HTMLElement, {
      carousel: this.dom.carousel
    });
    s || (this._errors.push(s.message), t = !1);
    const r = g({
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
    r || (this._errors.push(r.message), t = !1);
    const n = i("boolean", { autoplay: this.autoplay });
    n || (this._errors.push(n.message), t = !1);
    const u = i("number", {
      transitionDelay: this._transitionDelay
    });
    u || (this._errors.push(u.message), t = !1);
    const c = i("number", {
      transitionDuration: this._transitionDuration
    });
    if (c || (this._errors.push(c.message), t = !1), this._activeClass !== "") {
      const a = l({
        activeClass: this._activeClass
      });
      a || (this._errors.push(a.message), t = !1);
    }
    if (this._previousClass !== "") {
      const a = l({
        previousClass: this._previousClass
      });
      a || (this._errors.push(a.message), t = !1);
    }
    if (this._nextClass !== "") {
      const a = l({
        nextClass: this._nextClass
      });
      a || (this._errors.push(a.message), t = !1);
    }
    if (this._playClass !== "") {
      const a = l({
        playClass: this._playClass
      });
      a || (this._errors.push(a.message), t = !1);
    }
    if (this._pauseClass !== "") {
      const a = l({
        pauseClass: this._pauseClass
      });
      a || (this._errors.push(a.message), t = !1);
    }
    if (this._playText !== "") {
      const a = i("string", {
        playText: this._playText
      });
      a || (this._errors.push(a.message), t = !1);
    }
    if (this._pauseText !== "") {
      const a = i("string", {
        pauseText: this._pauseText
      });
      a || (this._errors.push(a.message), t = !1);
    }
    const _ = i("string", { prefix: this._prefix });
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
  _setDOMElementType(t, s = this.dom.carousel, r = !0) {
    if (typeof this.selectors[t] == "string") {
      if (t === "carousel")
        throw new Error(
          `Graupl Carousel: "${t}" element cannot be set through _setDOMElementType.`
        );
      if (s !== this.dom.carousel && y(HTMLElement, { base: s }), Array.isArray(this._dom[t])) {
        const u = Array.from(
          s.querySelectorAll(this.selectors[t])
        ).filter(
          (c) => c.parentElement === s
        );
        r ? this._dom[t] = u : this._dom[t] = [
          ...this._dom[t],
          ...u
        ];
      } else {
        const n = s.querySelector(this.selectors[t]);
        if (n && n.parentElement !== s)
          return;
        r && (this._dom[t] = n);
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
    this.dom.carousel.id = this.dom.carousel.id || `carousel-${this.key}`, this.dom.carouselItems.forEach((t, s) => {
      t.id = t.id || `carousel-item-${this.key}-${s}`;
    }), this.dom.carouselTabs.forEach((t, s) => {
      t.id = t.id || `carousel-tab-${this.key}-${s}`;
    });
  }
  /**
   * Sets the aria attributes for the carousel.
   */
  _setAriaAttributes() {
    !d("section", { carousel: this.dom.carousel }) && !this.dom.carousel.getAttribute("role") !== "region" && this.dom.carousel.setAttribute("role", "group"), this._dom.carousel.setAttribute("aria-roledescription", "carousel"), this.dom.carouselTabContainer && this.dom.carouselTabContainer.setAttribute("role", "tablist"), this.dom.carouselTabs.forEach((t, s) => {
      d("button", { tab: t }) || t.setAttribute("role", "button"), t.setAttribute("aria-selected", s === 0), t.setAttribute("aria-controls", this.dom.carouselItems[s].id);
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
    this.autoplay ? (h(this.pauseClass, this.dom.autoplay), p(this.playClass, this.dom.autoplay), this.dom.autoplay.setAttribute("aria-label", this.pauseText), this.dom.carousel.setAttribute("aria-live", "off"), this._setInterval()) : (h(this.playClass, this.dom.autoplay), p(this.pauseClass, this.dom.autoplay), this.dom.autoplay.setAttribute("aria-label", this.playText), this.dom.carousel.setAttribute("aria-live", "polite"), this._clearInterval());
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
    }), this.dom.carouselTabs.forEach((t, s) => {
      t.addEventListener("pointerup", () => {
        this.currentItem > s ? this._currentAction = "previous" : this._currentAction = "next", this.activateItem(s);
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
      t.addEventListener("keydown", (s) => {
        switch (m(s)) {
          case "Space":
          case "Enter":
            f(s);
            break;
        }
      });
    }), this.dom.carouselTabs.forEach((t) => {
      t.addEventListener("keydown", (s) => {
        switch (m(s)) {
          case "Space":
          case "Enter":
            f(s);
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
      switch (m(t)) {
        case "Space":
        case "Enter":
          this.activateNextItem(), f(t);
          break;
      }
    }), this.dom.previous.addEventListener("keyup", (t) => {
      switch (m(t)) {
        case "Space":
        case "Enter":
          this.activatePreviousItem(), f(t);
          break;
      }
    }), this.dom.autoplay.addEventListener("keyup", (t) => {
      switch (m(t)) {
        case "Space":
        case "Enter":
          this.toggleAutoplay(), f(t);
          break;
      }
    }), this.dom.carouselTabs.forEach((t, s) => {
      t.addEventListener("keyup", (r) => {
        switch (m(r)) {
          case "Space":
          case "Enter":
            this.activateItem(s), f(r);
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
    h(this.activeClass, this.currentCarouselItem), this.currentCarouselTab && (this.currentCarouselTab.setAttribute("aria-selected", !0), h(this.activeClass, this.currentCarouselTab));
  }
  /**
   * Deactivates the current carousel item.
   *
   * @public
   */
  deactivateCurrentItem() {
    p(this.activeClass, this.currentCarouselItem), this.currentCarouselTab && (this.currentCarouselTab.setAttribute("aria-selected", !1), p(this.activeClass, this.currentCarouselTab));
  }
  /**
   * Activates the carousel item at a given index.
   *
   * @public
   *
   * @param {number} index - The index of the carousel item to activate.
   */
  activateItem(t) {
    const s = this.currentItem;
    this.dom.carousel.dataset.grauplAction = this._currentAction, this.autoplay && this._clearInterval(), h(this.previousClass, this.currentCarouselItem), h(this.nextClass, this.dom.carouselItems[t]), requestAnimationFrame(() => {
      this.deactivateCurrentItem(), this.currentItem = t, this.activateCurrentItem(), requestAnimationFrame(() => {
        setTimeout(() => {
          p(this.previousClass, this.dom.carouselItems[s]), p(this.nextClass, this.currentCarouselItem);
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
export {
  U as default
};
