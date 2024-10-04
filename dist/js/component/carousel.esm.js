var M = Object.defineProperty;
var O = (s, t, e) => t in s ? M(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var a = (s, t, e) => O(s, typeof t != "symbol" ? t + "" : t, e);
function h(s, t) {
  s === "" || s.length === 0 || (typeof s == "string" ? t.classList.add(s) : t.classList.add(...s));
}
function p(s, t) {
  s === "" || s.length === 0 || (typeof s == "string" ? t.classList.remove(s) : t.classList.remove(...s));
}
function m(s) {
  try {
    const t = s.key || s.keyCode, e = {
      Enter: t === "Enter" || t === 13,
      Space: t === " " || t === "Spacebar" || t === 32,
      Escape: t === "Escape" || t === "Esc" || t === 27,
      ArrowDown: t === "ArrowDown" || t === 40,
      ArrowUp: t === "ArrowUp" || t === 38,
      Home: t === "Home" || t === 36,
      End: t === "End" || t === 35
    };
    return Object.keys(e).find((r) => e[r] === !0) || "";
  } catch {
    return "";
  }
}
function _(s) {
  s.preventDefault(), s.stopPropagation();
}
function f(s, t) {
  try {
    if (typeof t != "object") {
      const e = typeof t;
      throw new TypeError(
        `Elements given to isValidInstance() must be inside of an object. "${e}" given.`
      );
    }
    for (const e in t)
      if (!(t[e] instanceof s)) {
        const r = typeof t[e];
        throw new TypeError(
          `${e} must be an instance of ${s.name}. "${r}" given.`
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
function n(s, t) {
  try {
    if (typeof t != "object") {
      const e = typeof t;
      throw new TypeError(
        `Values given to isValidType() must be inside of an object. "${e}" given.`
      );
    }
    for (const e in t) {
      const r = typeof t[e];
      if (r !== s)
        throw new TypeError(`${e} must be a ${s}. "${r}" given.`);
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
function C(s) {
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
function l(s) {
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
          s[t].forEach((r) => {
            if (typeof r != "string")
              throw new TypeError(
                `${t} must be a string or an array of strings. An array containing non-strings given.`
              );
          });
        else
          throw new TypeError(
            `${t} must be a string or an array of strings. "${e}" given.`
          );
      else {
        const r = {};
        r[t] = s[t], C(r);
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
function d(s, t) {
  if (n("string", { tagName: s }).status && f(HTMLElement, t).status) {
    const e = s.toLowerCase();
    let r = !0;
    for (const o in t)
      t[o].tagName.toLowerCase() !== e && (r = !1);
    return r;
  } else
    return !1;
}
class P {
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
   * @param {?string}             [options.prefix = graupl-]                                              - The prefix to use for CSS custom properties.
   * @param {boolean}            [options.initialize = false]                                             - A flag to initialize the carousel immediately upon creation.
   */
  constructor({
    carouselElement: t,
    carouselItemSelector: e = ".carousel-item",
    carouselItemContainerSelector: r = ".carousel-item-container",
    carouselControlSelector: o = ".carousel-control",
    carouselControlContainerSelector: u = ".carousel-control-container",
    carouselTabSelector: c = ".carousel-tab",
    carouselTabContainerSelector: y = ".carousel-tab-container",
    autoplaySelector: i = ".autoplay",
    nextSelector: I = ".next",
    previousSelector: g = ".previous",
    activeClass: b = "active",
    previousClass: v = "previous",
    nextClass: E = "next",
    playClass: T = "play",
    pauseClass: x = "pause",
    autoplay: k = !0,
    transitionDelay: A = 1e4,
    transitionDuration: w = 500,
    playText: D = "Play",
    pauseText: L = "Pause",
    prefix: S = "graupl-",
    initialize: $ = !1
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
    a(this, "_dom", {
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
    a(this, "_selectors", {
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
    a(this, "_activeClass", "active");
    /**
     * The class(es) to apply to a carousel item that is the previously active item.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    a(this, "_previousClass", "previous");
    /**
     * The class(es) to apply to a carousel item that is the next active item.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    a(this, "_nextClass", "next");
    /**
     * The class(es) to apply to the autoplay button when the carousel is paused.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    a(this, "_playClass", "play");
    /**
     * The class(es) to apply to the autoplay button when the carousel is playing.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    a(this, "_pauseClass", "pause");
    /**
     * The index of the currently active carousel item.
     *
     * @protected
     *
     * @type {number}
     */
    a(this, "_currentItem", 0);
    /**
     * A flag to indicate if the carousel is currently playing.
     *
     * @protected
     *
     * @type {boolean}
     */
    a(this, "_autoplay", !0);
    /**
     * A variable to delay transition slides in milliseconds.
     *
     * @protected
     *
     * @type {number}
     */
    a(this, "_transitionDelay", 1e4);
    /**
     * The duration time (in milliseconds) for the transition between carousel items.
     *
     * @protected
     *
     * @type {number}
     */
    a(this, "_transitionDuration", 500);
    /**
     * The label for the autoplay button when the carousel is paused.
     *
     * @protected
     *
     * @type {string}
     */
    a(this, "_playText", "Play");
    /**
     * The label for the autoplay button when the carousel is playing.
     *
     * @protected
     *
     * @type {string}
     */
    a(this, "_pauseText", "Pause");
    /**
     * The current action being performed by the carousel.
     *
     * @protected
     *
     * @type {string}
     */
    a(this, "_currentAction", "next");
    /**
     * The stored interval callback for autoplaying the carousel.
     *
     * @protected
     *
     * @type {?Function}
     */
    a(this, "_autoplayInterval", null);
    /**
     * The prefix to use for CSS custom properties.
     *
     * @protected
     *
     * @type {string}
     */
    a(this, "_prefix", "graupl-");
    /**
     * An array of error messages generated by the carousel.
     *
     * @protected
     *
     * @type {string[]}
     */
    a(this, "_errors", []);
    this._dom.carousel = t, this._selectors.carouselItems = e, this._selectors.carouselItemContainer = r, this._selectors.carouselControls = o, this._selectors.carouselControlContainer = u, this._selectors.carouselTabs = c, this._selectors.carouselTabContainer = y, this._selectors.autoplay = i, this._selectors.next = I, this._selectors.previous = g, this._activeClass = b || "", this._previousClass = v || "", this._nextClass = E || "", this._playClass = T || "", this._pauseClass = x || "", this._autoplay = k, this._transitionDelay = A, this._transitionDuration = w, this._playText = D || "", this._pauseText = L || "", this._prefix = S || "", $ && this.initialize();
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
      this._setDOMElements(), this._setIds(), this._setAriaAttributes(), this.activateFirstItem(), this._setTransitionDuration(), this._handleAutoplay(), this._handleFocus(), this._handleClick(), this._handleHover(), this._handleKeydown(), this._handleKeyup();
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
    if (n("number", { value: t }), t === this.currentItem)
      return;
    t < 0 ? this._currentItem = 0 : t >= this.dom.carouselItems.length ? this._currentItem = this.dom.carouselItems.length - 1 : this._currentItem = t, this._dom.carousel.querySelectorAll(
      this.selectors.carouselTab
    ) && this.dom.carouselItems.forEach((r, o) => {
      r.setAttribute("aria-selected", o === this._currentItem);
    });
  }
  set autoplay(t) {
    n("boolean", { value: t }), this._autoplay !== t && (this._autoplay = t);
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
    n("number", { value: t }), t !== this.transitionDelay && t >= 0 && (this._currentItem = t);
  }
  set transitionDuration(t) {
    n("number", { value: t }), this._transitionDuration !== t && t >= 0 && (this._transitionDuration = t, this._setTransitionDuration());
  }
  set playText(t) {
    n("string", { value: t }), this._playText !== t && (this._playText = t);
  }
  set pauseText(t) {
    n("string", { value: t }), this._pauseText !== t && (this._pauseText = t);
  }
  set prefix(t) {
    n("string", { value: t }), this._prefix !== t && (this._prefix = t);
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
    const e = f(HTMLElement, {
      carousel: this.dom.carousel
    });
    e || (this._errors.push(e.message), t = !1);
    const r = C({
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
    const o = n("boolean", { autoplay: this.autoplay });
    o || (this._errors.push(o.message), t = !1);
    const u = n("number", {
      transitionDelay: this._transitionDelay
    });
    u || (this._errors.push(u.message), t = !1);
    const c = n("number", {
      transitionDuration: this._transitionDuration
    });
    if (c || (this._errors.push(c.message), t = !1), this._activeClass !== "") {
      const i = l({
        activeClass: this._activeClass
      });
      i || (this._errors.push(i.message), t = !1);
    }
    if (this._previousClass !== "") {
      const i = l({
        previousClass: this._previousClass
      });
      i || (this._errors.push(i.message), t = !1);
    }
    if (this._nextClass !== "") {
      const i = l({
        nextClass: this._nextClass
      });
      i || (this._errors.push(i.message), t = !1);
    }
    if (this._playClass !== "") {
      const i = l({
        playClass: this._playClass
      });
      i || (this._errors.push(i.message), t = !1);
    }
    if (this._pauseClass !== "") {
      const i = l({
        pauseClass: this._pauseClass
      });
      i || (this._errors.push(i.message), t = !1);
    }
    if (this._playText !== "") {
      const i = n("string", {
        playText: this._playText
      });
      i || (this._errors.push(i.message), t = !1);
    }
    if (this._pauseText !== "") {
      const i = n("string", {
        pauseText: this._pauseText
      });
      i || (this._errors.push(i.message), t = !1);
    }
    const y = n("string", { prefix: this._prefix });
    return y || (this._errors.push(y.message), t = !1), t;
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
  _setDOMElementType(t, e = this.dom.carousel, r = !0) {
    if (typeof this.selectors[t] == "string") {
      if (t === "carousel")
        throw new Error(
          `Graupl Carousel: "${t}" element cannot be set through _setDOMElementType.`
        );
      if (e !== this.dom.carousel && f(HTMLElement, { base: e }), Array.isArray(this._dom[t])) {
        const u = Array.from(
          e.querySelectorAll(this.selectors[t])
        ).filter(
          (c) => c.parentElement === e
        );
        r ? this._dom[t] = u : this._dom[t] = [
          ...this._dom[t],
          ...u
        ];
      } else {
        const o = e.querySelector(this.selectors[t]);
        if (o && o.parentElement !== e)
          return;
        r && (this._dom[t] = o);
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
   * Sets the ids for the carousel items and tabs.
   */
  _setIds() {
    const t = Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 10);
    this.dom.carouselItems.forEach((e, r) => {
      e.id = e.id || `carousel-item-${t}-${r}`;
    }), this.dom.carouselTabs.forEach((e, r) => {
      e.id = e.id || `carousel-tab-${t}-${r}`;
    });
  }
  /**
   * Sets the aria attributes for the carousel.
   */
  _setAriaAttributes() {
    !d("section", { carousel: this.dom.carousel }) && !this.dom.carousel.getAttribute("role") !== "region" && this.dom.carousel.setAttribute("role", "group"), this._dom.carousel.setAttribute("aria-roledescription", "carousel"), this.dom.carouselTabContainer && this.dom.carouselTabContainer.setAttribute("role", "tablist"), this.dom.carouselTabs.forEach((t, e) => {
      d("button", { tab: t }) || t.setAttribute("role", "button"), t.setAttribute("aria-selected", e === 0), t.setAttribute("aria-controls", this.dom.carouselItems[e].id);
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
        switch (m(e)) {
          case "Space":
          case "Enter":
            _(e);
            break;
        }
      });
    }), this.dom.carouselTabs.forEach((t) => {
      t.addEventListener("keydown", (e) => {
        switch (m(e)) {
          case "Space":
          case "Enter":
            _(e);
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
          this.activateNextItem(), _(t);
          break;
      }
    }), this.dom.previous.addEventListener("keyup", (t) => {
      switch (m(t)) {
        case "Space":
        case "Enter":
          this.activatePreviousItem(), _(t);
          break;
      }
    }), this.dom.autoplay.addEventListener("keyup", (t) => {
      switch (m(t)) {
        case "Space":
        case "Enter":
          this.toggleAutoplay(), _(t);
          break;
      }
    }), this.dom.carouselTabs.forEach((t, e) => {
      t.addEventListener("keyup", (r) => {
        switch (m(r)) {
          case "Space":
          case "Enter":
            this.activateItem(e), _(r);
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
    const e = this.currentItem;
    this.dom.carousel.dataset.grauplAction = this._currentAction, this.autoplay && this._clearInterval(), h(this.previousClass, this.currentCarouselItem), h(this.nextClass, this.dom.carouselItems[t]), requestAnimationFrame(() => {
      this.deactivateCurrentItem(), this.currentItem = t, this.activateCurrentItem(), requestAnimationFrame(() => {
        setTimeout(() => {
          p(this.previousClass, this.dom.carouselItems[e]), p(this.nextClass, this.currentCarouselItem);
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
  P as default
};
