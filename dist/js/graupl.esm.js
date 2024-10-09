var M = Object.defineProperty;
var O = (e, t, s) => t in e ? M(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var r = (e, t, s) => O(e, typeof t != "symbol" ? t + "" : t, s);
function C(e, t) {
  try {
    if (typeof t != "object") {
      const s = typeof t;
      throw new TypeError(
        `Elements given to isValidInstance() must be inside of an object. "${s}" given.`
      );
    }
    for (const s in t)
      if (!(t[s] instanceof e)) {
        const i = typeof t[s];
        throw new TypeError(
          `${s} must be an instance of ${e.name}. "${i}" given.`
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
function l(e, t) {
  try {
    if (typeof t != "object") {
      const s = typeof t;
      throw new TypeError(
        `Values given to isValidType() must be inside of an object. "${s}" given.`
      );
    }
    for (const s in t) {
      const i = typeof t[s];
      if (i !== e)
        throw new TypeError(`${s} must be a ${e}. "${i}" given.`);
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
function y(e) {
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
function h(e) {
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
          e[t].forEach((i) => {
            if (typeof i != "string")
              throw new TypeError(
                `${t} must be a string or an array of strings. An array containing non-strings given.`
              );
          });
        else
          throw new TypeError(
            `${t} must be a string or an array of strings. "${s}" given.`
          );
      else {
        const i = {};
        i[t] = e[t], y(i);
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
function f(e, t) {
  if (l("string", { tagName: e }).status && C(HTMLElement, t).status) {
    const s = e.toLowerCase();
    let i = !0;
    for (const o in t)
      t[o].tagName.toLowerCase() !== s && (i = !1);
    return i;
  } else
    return !1;
}
function u(e, t) {
  e === "" || e.length === 0 || (typeof e == "string" ? t.classList.add(e) : t.classList.add(...e));
}
function c(e, t) {
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
    return Object.keys(s).find((i) => s[i] === !0) || "";
  } catch {
    return "";
  }
}
function p(e) {
  e.preventDefault(), e.stopPropagation();
}
class q {
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
    alertElement: t,
    controllerElement: s = null,
    showClass: i = "show",
    hideClass: o = "hide",
    transitionClass: n = "transitioning",
    transitionTimer: d = 150,
    isHidden: _ = !1,
    initialize: a = !1
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
     * @property {boolean}       bubbles - A flag to buggle the event.
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
    this._dom.alert = t, this._dom.controller = s, this._showClass = i || "", this._hideClass = o || "", this._transitionClass = n || "", this._transitionTimer = d, this._hidden = _, a && this.initialize();
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
      this._handleClick(), this._handleKeydown(), this._handleKeyup();
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
    l("number", { transitionTimer: t }), this._transitionTimer !== t && (this._transitionTimer = t);
  }
  /**
   * Validates all aspects of the alert to ensure proper functionality.
   *
   * @protected
   *
   * @return {boolean} - The result of the validation.
   */
  _validate() {
    let t = !0, s;
    if (this._dom.controller !== null ? s = C(HTMLElement, {
      alertElement: this._dom.alert,
      controllerElement: this._dom.controller
    }) : s = C(HTMLElement, {
      alertElement: this._dom.alert
    }), s.status || (this._errors.push(s.message), t = !1), this._showClass !== "") {
      const n = h({ showClass: this._showClass });
      n.status || (this._errors.push(n.message), t = !1);
    }
    if (this._hideClass !== "") {
      const n = h({ hideClass: this._hideClass });
      n.status || (this._errors.push(n.message), t = !1);
    }
    if (this._transitionClass !== "") {
      const n = h({
        transitionClass: this._transitionClass
      });
      n.status || (this._errors.push(n.message), t = !1);
    }
    const i = l("number", {
      transitionTimer: this._transitionTimer
    });
    i.status || (this._errors.push(i.message), t = !1);
    const o = l("boolean", { isHidden: this._hidden });
    return o.status || (this._errors.push(o.message), t = !1), t;
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
      this.hideClass !== "" && c(this.hideClass, this.dom.alert), requestAnimationFrame(() => {
        this.showClass !== "" && u(this.showClass, this.dom.alert), requestAnimationFrame(() => {
          c(this.transitionClass, this.dom.alert);
        });
      });
    })) : (this.showClass !== "" && u(this.showClass, this.dom.alert), this.hideClass !== "" && c(this.hideClass, this.dom.alert)), this._hidden = !1, t && this.dom.alert.dispatchEvent(this._hideEvent));
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
      this.showClass !== "" && c(this.showClass, this.dom.alert), requestAnimationFrame(() => {
        this.transitionTimer > 0 ? setTimeout(() => {
          this.hideClass !== "" && u(this.hideClass, this.dom.alert), requestAnimationFrame(() => {
            c(this.transitionClass, this.dom.alert);
          });
        }, this.transitionTimer) : (this.hideClass !== "" && u(this.hideClass, this.dom.alert), requestAnimationFrame(() => {
          c(this.transitionClass, this.dom.alert);
        }));
      });
    })) : (this.hideClass !== "" && u(this.hideClass, this.dom.alert), this.showClass !== "" && c(this.showClass, this.dom.alert)), this._hidden = !0, t && this.dom.alert.dispatchEvent(this._hideEvent));
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
      const s = m(t);
      (s === "Space" || s === "Enter") && p(t);
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
      const s = m(t);
      (s === "Space" || s === "Enter") && this.hide();
    });
  }
}
class F {
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
    carouselItemSelector: s = ".carousel-item",
    carouselItemContainerSelector: i = ".carousel-item-container",
    carouselControlSelector: o = ".carousel-control",
    carouselControlContainerSelector: n = ".carousel-control-container",
    carouselTabSelector: d = ".carousel-tab",
    carouselTabContainerSelector: _ = ".carousel-tab-container",
    autoplaySelector: a = ".autoplay",
    nextSelector: g = ".next",
    previousSelector: b = ".previous",
    activeClass: E = "active",
    previousClass: T = "previous",
    nextClass: I = "next",
    playClass: v = "play",
    pauseClass: w = "pause",
    autoplay: x = !0,
    transitionDelay: A = 1e4,
    transitionDuration: k = 500,
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
     * An array of error messages generated by the carousel.
     *
     * @protected
     *
     * @type {string[]}
     */
    r(this, "_errors", []);
    this._dom.carousel = t, this._selectors.carouselItems = s, this._selectors.carouselItemContainer = i, this._selectors.carouselControls = o, this._selectors.carouselControlContainer = n, this._selectors.carouselTabs = d, this._selectors.carouselTabContainer = _, this._selectors.autoplay = a, this._selectors.next = g, this._selectors.previous = b, this._activeClass = E || "", this._previousClass = T || "", this._nextClass = I || "", this._playClass = v || "", this._pauseClass = w || "", this._autoplay = x, this._transitionDelay = A, this._transitionDuration = k, this._playText = D || "", this._pauseText = L || "", this._prefix = S || "", $ && this.initialize();
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
    if (l("number", { value: t }), t === this.currentItem)
      return;
    t < 0 ? this._currentItem = 0 : t >= this.dom.carouselItems.length ? this._currentItem = this.dom.carouselItems.length - 1 : this._currentItem = t, this._dom.carousel.querySelectorAll(
      this.selectors.carouselTab
    ) && this.dom.carouselItems.forEach((i, o) => {
      i.setAttribute("aria-selected", o === this._currentItem);
    });
  }
  set autoplay(t) {
    l("boolean", { value: t }), this._autoplay !== t && (this._autoplay = t);
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
    l("number", { value: t }), t !== this.transitionDelay && t >= 0 && (this._currentItem = t);
  }
  set transitionDuration(t) {
    l("number", { value: t }), this._transitionDuration !== t && t >= 0 && (this._transitionDuration = t, this._setTransitionDuration());
  }
  set playText(t) {
    l("string", { value: t }), this._playText !== t && (this._playText = t);
  }
  set pauseText(t) {
    l("string", { value: t }), this._pauseText !== t && (this._pauseText = t);
  }
  set prefix(t) {
    l("string", { value: t }), this._prefix !== t && (this._prefix = t);
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
    const s = C(HTMLElement, {
      carousel: this.dom.carousel
    });
    s || (this._errors.push(s.message), t = !1);
    const i = y({
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
    const o = l("boolean", { autoplay: this.autoplay });
    o || (this._errors.push(o.message), t = !1);
    const n = l("number", {
      transitionDelay: this._transitionDelay
    });
    n || (this._errors.push(n.message), t = !1);
    const d = l("number", {
      transitionDuration: this._transitionDuration
    });
    if (d || (this._errors.push(d.message), t = !1), this._activeClass !== "") {
      const a = h({
        activeClass: this._activeClass
      });
      a || (this._errors.push(a.message), t = !1);
    }
    if (this._previousClass !== "") {
      const a = h({
        previousClass: this._previousClass
      });
      a || (this._errors.push(a.message), t = !1);
    }
    if (this._nextClass !== "") {
      const a = h({
        nextClass: this._nextClass
      });
      a || (this._errors.push(a.message), t = !1);
    }
    if (this._playClass !== "") {
      const a = h({
        playClass: this._playClass
      });
      a || (this._errors.push(a.message), t = !1);
    }
    if (this._pauseClass !== "") {
      const a = h({
        pauseClass: this._pauseClass
      });
      a || (this._errors.push(a.message), t = !1);
    }
    if (this._playText !== "") {
      const a = l("string", {
        playText: this._playText
      });
      a || (this._errors.push(a.message), t = !1);
    }
    if (this._pauseText !== "") {
      const a = l("string", {
        pauseText: this._pauseText
      });
      a || (this._errors.push(a.message), t = !1);
    }
    const _ = l("string", { prefix: this._prefix });
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
  _setDOMElementType(t, s = this.dom.carousel, i = !0) {
    if (typeof this.selectors[t] == "string") {
      if (t === "carousel")
        throw new Error(
          `Graupl Carousel: "${t}" element cannot be set through _setDOMElementType.`
        );
      if (s !== this.dom.carousel && C(HTMLElement, { base: s }), Array.isArray(this._dom[t])) {
        const n = Array.from(
          s.querySelectorAll(this.selectors[t])
        ).filter(
          (d) => d.parentElement === s
        );
        i ? this._dom[t] = n : this._dom[t] = [
          ...this._dom[t],
          ...n
        ];
      } else {
        const o = s.querySelector(this.selectors[t]);
        if (o && o.parentElement !== s)
          return;
        i && (this._dom[t] = o);
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
    this.dom.carouselItems.forEach((s, i) => {
      s.id = s.id || `carousel-item-${t}-${i}`;
    }), this.dom.carouselTabs.forEach((s, i) => {
      s.id = s.id || `carousel-tab-${t}-${i}`;
    });
  }
  /**
   * Sets the aria attributes for the carousel.
   */
  _setAriaAttributes() {
    !f("section", { carousel: this.dom.carousel }) && !this.dom.carousel.getAttribute("role") !== "region" && this.dom.carousel.setAttribute("role", "group"), this._dom.carousel.setAttribute("aria-roledescription", "carousel"), this.dom.carouselTabContainer && this.dom.carouselTabContainer.setAttribute("role", "tablist"), this.dom.carouselTabs.forEach((t, s) => {
      f("button", { tab: t }) || t.setAttribute("role", "button"), t.setAttribute("aria-selected", s === 0), t.setAttribute("aria-controls", this.dom.carouselItems[s].id);
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
    this.autoplay ? (u(this.pauseClass, this.dom.autoplay), c(this.playClass, this.dom.autoplay), this.dom.autoplay.setAttribute("aria-label", this.pauseText), this.dom.carousel.setAttribute("aria-live", "off"), this._setInterval()) : (u(this.playClass, this.dom.autoplay), c(this.pauseClass, this.dom.autoplay), this.dom.autoplay.setAttribute("aria-label", this.playText), this.dom.carousel.setAttribute("aria-live", "polite"), this._clearInterval());
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
            p(s);
            break;
        }
      });
    }), this.dom.carouselTabs.forEach((t) => {
      t.addEventListener("keydown", (s) => {
        switch (m(s)) {
          case "Space":
          case "Enter":
            p(s);
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
          this.activateNextItem(), p(t);
          break;
      }
    }), this.dom.previous.addEventListener("keyup", (t) => {
      switch (m(t)) {
        case "Space":
        case "Enter":
          this.activatePreviousItem(), p(t);
          break;
      }
    }), this.dom.autoplay.addEventListener("keyup", (t) => {
      switch (m(t)) {
        case "Space":
        case "Enter":
          this.toggleAutoplay(), p(t);
          break;
      }
    }), this.dom.carouselTabs.forEach((t, s) => {
      t.addEventListener("keyup", (i) => {
        switch (m(i)) {
          case "Space":
          case "Enter":
            this.activateItem(s), p(i);
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
    c(this.activeClass, this.currentCarouselItem), this.currentCarouselTab && (this.currentCarouselTab.setAttribute("aria-selected", !1), c(this.activeClass, this.currentCarouselTab));
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
    this.dom.carousel.dataset.grauplAction = this._currentAction, this.autoplay && this._clearInterval(), u(this.previousClass, this.currentCarouselItem), u(this.nextClass, this.dom.carouselItems[t]), requestAnimationFrame(() => {
      this.deactivateCurrentItem(), this.currentItem = t, this.activateCurrentItem(), requestAnimationFrame(() => {
        setTimeout(() => {
          c(this.previousClass, this.dom.carouselItems[s]), c(this.nextClass, this.currentCarouselItem);
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
const H = {
  Alert: q,
  Carousel: F
};
export {
  H as default
};
