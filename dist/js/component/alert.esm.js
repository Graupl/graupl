var y = Object.defineProperty;
var w = (s, t, i) => t in s ? y(s, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[t] = i;
var n = (s, t, i) => w(s, typeof t != "symbol" ? t + "" : t, i);
function f(s, t) {
  try {
    if (typeof t != "object") {
      const i = typeof t;
      throw new TypeError(
        `Elements given to isValidInstance() must be inside of an object. "${i}" given.`
      );
    }
    for (const i in t)
      if (!(t[i] instanceof s)) {
        const e = typeof t[i];
        throw new TypeError(
          `${i} must be an instance of ${s.name}. "${e}" given.`
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
function d(s, t) {
  try {
    if (typeof t != "object") {
      const i = typeof t;
      throw new TypeError(
        `Values given to isValidType() must be inside of an object. "${i}" given.`
      );
    }
    for (const i in t) {
      const e = typeof t[i];
      if (e !== s)
        throw new TypeError(`${i} must be a ${s}. "${e}" given.`);
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
function p(s) {
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
      const i = typeof s[t];
      if (i !== "string")
        if (Array.isArray(s[t]))
          s[t].forEach((e) => {
            if (typeof e != "string")
              throw new TypeError(
                `${t} must be a string or an array of strings. An array containing non-strings given.`
              );
          });
        else
          throw new TypeError(
            `${t} must be a string or an array of strings. "${i}" given.`
          );
      else {
        const e = {};
        e[t] = s[t], p(e);
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
function o(s, t) {
  s === "" || s.length === 0 || (typeof s == "string" ? t.classList.add(s) : t.classList.add(...s));
}
function a(s, t) {
  s === "" || s.length === 0 || (typeof s == "string" ? t.classList.remove(s) : t.classList.remove(...s));
}
function u(s) {
  try {
    const t = s.key || s.keyCode, i = {
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
    return Object.keys(i).find((e) => i[e] === !0) || "";
  } catch {
    return "";
  }
}
function _(s) {
  s.preventDefault(), s.stopPropagation();
}
class E {
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
    controllerElement: i = null,
    showClass: e = "show",
    hideClass: l = "hide",
    transitionClass: r = "transitioning",
    transitionTimer: c = 150,
    isHidden: m = !1,
    initialize: C = !1
  }) {
    /**
     * The HTML elements for the alert in the DOM.
     *
     * @protected
     *
     * @type {Object<HTMLElement>}
     */
    n(this, "_dom", {
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
    n(this, "_hidden", !1);
    /**
     * The class to use to show the alert.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    n(this, "_showClass", "");
    /**
     * The class to use to hide the alert.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    n(this, "_hideClass", "");
    /**
     * The class to use when transitioning the alert.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    n(this, "_transitionClass", "");
    /**
     * The time in milliseconds the transition will take.
     *
     * @protected
     *
     * @type {number}
     */
    n(this, "_transitionTimer", 150);
    /**
     * An array of error messages generated by the alert.
     *
     * @protected
     *
     * @type {string[]}
     */
    n(this, "_errors", []);
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
    n(this, "_showEvent", new CustomEvent("grauplAlertShow", {
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
    n(this, "_hideEvent", new CustomEvent("grauplAlertHide", {
      bubbles: !0,
      detail: { alert: this }
    }));
    this._dom.alert = t, this._dom.controller = i, this._showClass = e || "", this._hideClass = l || "", this._transitionClass = r || "", this._transitionTimer = c, this._hidden = m, C && this.initialize();
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
    d("number", { transitionTimer: t }), this._transitionTimer !== t && (this._transitionTimer = t);
  }
  /**
   * Validates all aspects of the alert to ensure proper functionality.
   *
   * @protected
   *
   * @return {boolean} - The result of the validation.
   */
  _validate() {
    let t = !0, i;
    if (this._dom.controller !== null ? i = f(HTMLElement, {
      alertElement: this._dom.alert,
      controllerElement: this._dom.controller
    }) : i = f(HTMLElement, {
      alertElement: this._dom.alert
    }), i.status || (this._errors.push(i.message), t = !1), this._showClass !== "") {
      const r = h({ showClass: this._showClass });
      r.status || (this._errors.push(r.message), t = !1);
    }
    if (this._hideClass !== "") {
      const r = h({ hideClass: this._hideClass });
      r.status || (this._errors.push(r.message), t = !1);
    }
    if (this._transitionClass !== "") {
      const r = h({
        transitionClass: this._transitionClass
      });
      r.status || (this._errors.push(r.message), t = !1);
    }
    const e = d("number", {
      transitionTimer: this._transitionTimer
    });
    e.status || (this._errors.push(e.message), t = !1);
    const l = d("boolean", { isHidden: this._hidden });
    return l.status || (this._errors.push(l.message), t = !1), t;
  }
  /**
   * Shows the alert.
   *
   * @fires grauplAlertShow
   *
   * @param {boolean} [emit = true] - A toggle to emit the show event once shown.
   */
  show(t = !0) {
    this._hidden && (this.transitionClass !== "" ? (o(this.transitionClass, this.dom.alert), requestAnimationFrame(() => {
      this.hideClass !== "" && a(this.hideClass, this.dom.alert), requestAnimationFrame(() => {
        this.showClass !== "" && o(this.showClass, this.dom.alert), requestAnimationFrame(() => {
          a(this.transitionClass, this.dom.alert);
        });
      });
    })) : (this.showClass !== "" && o(this.showClass, this.dom.alert), this.hideClass !== "" && a(this.hideClass, this.dom.alert)), this._hidden = !1, t && this.dom.alert.dispatchEvent(this._hideEvent));
  }
  /**
   * Hides the alert.
   *
   * @fires grauplAlertHide
   *
   * @param {boolean} [emit = true] - A toggle to emit the hide event once shown.
   */
  hide(t = !0) {
    this._hidden || (this.transitionClass !== "" ? (o(this.transitionClass, this.dom.alert), requestAnimationFrame(() => {
      this.showClass !== "" && a(this.showClass, this.dom.alert), requestAnimationFrame(() => {
        this.transitionTimer > 0 ? setTimeout(() => {
          this.hideClass !== "" && o(this.hideClass, this.dom.alert), requestAnimationFrame(() => {
            a(this.transitionClass, this.dom.alert);
          });
        }, this.transitionTimer) : (this.hideClass !== "" && o(this.hideClass, this.dom.alert), requestAnimationFrame(() => {
          a(this.transitionClass, this.dom.alert);
        }));
      });
    })) : (this.hideClass !== "" && o(this.hideClass, this.dom.alert), this.showClass !== "" && a(this.showClass, this.dom.alert)), this._hidden = !0, t && this.dom.alert.dispatchEvent(this._hideEvent));
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
      const i = u(t);
      (i === "Space" || i === "Enter") && _(t);
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
      const i = u(t);
      (i === "Space" || i === "Enter") && this.hide();
    });
  }
}
export {
  E as default
};
