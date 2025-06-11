import {
  isValidClassList,
  isValidType,
  isValidHoverType,
  isValidInstance,
  isValidSideType,
} from "../validate.js";
import { preventEvent, keyPress } from "../eventHandlers.js";
import storage from "../storage.js";

class NavigationShelf {
  /**
   * The DOM elements within the shelf.
   *
   * @protected
   *
   * @type {Object<HTMLElement>}
   *
   * @property {HTMLElement} shelf - The shelf element.
   * @property {HTMLElement} controller - The toggle for this shelf.
   * @property {HTMLElement} lockController - The toggle for locking this shelf.
   * @property {HTMLElement} hoverController - The toggle for hoverability of this shelf.
   * @property {HTMLElement} sideController - The toggle for the side controller of this shelf.
   * @property {HTMLElement[]} dependents - The list of dependent elements that should be updated when the shelf is opened or closed.
   */
  _dom = {
    shelf: null,
    controller: null,
    lockController: null,
    hoverController: null,
    sideController: null,
    dependents: [],
  };

  /**
   * The query selectors used by the shelf to populate the dom.
   *
   * @protected
   *
   * @type {Object<string>}
   *
   * @property {string} dependents - The query selector for dependent elements.
   */
  _selectors = {
    dependents: "",
  };

  /**
   * The class(es) to apply to dependent elements when the shelf is open.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _dependentOpenClass = "shelf-show";

  /**
   * The class(es) to apply to dependent elements when the shelf is closed.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _dependentCloseClass = "shelf-hide";

  /**
   * The class(es) to apply when the shelf is open.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _openClass = "show";

  /**
   * The class(es) to apply when the shelf is closed.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _closeClass = "hide";

  /**
   * The class(es) to apply when the shelf is transitioning between states.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _transitionClass = "transitioning";

  /**
   * The duration time (in milliseconds) for the transition between open and closed states.
   *
   * @protected
   *
   * @type {number}
   */
  _transitionDuration = 250;

  /**
   * The duration time (in milliseconds) for the transition from closed to open states.
   *
   * @protected
   *
   * @type {number}
   */
  _openDuration = -1;

  /**
   * The duration time (in milliseconds) for the transition from open to closed states.
   *
   * @protected
   *
   * @type {number}
   */
  _closeDuration = -1;

  /**
   * The type of hoverability for the shelf.
   *
   * @protected
   *
   * @type {string}
   */
  _hoverType = "off";

  /**
   * The delay time (in milliseconds) used for pointerenter/pointerleave events to take place.
   *
   * @protected
   *
   * @type {number}
   */
  _hoverDelay = 250;

  /**
   * The delay time (in milliseconds) used for pointerenter events to take place.
   *
   * @protected
   *
   * @type {number}
   */
  _enterDelay = -1;

  /**
   * The delay time (in milliseconds) used for pointerleave events to take place.
   *
   * @protected
   *
   * @type {number}
   */
  _leaveDelay = -1;

  /**
   * A flag to indicate if the navigation shelf is locked.
   *
   * @protected
   *
   * @type {boolean}
   */
  _locked = false;

  /**
   * A flag to check in the navigation shelf can dynamically close based on if the shelf has been opened already.
   *
   * @protected
   *
   * @type {boolean}
   */
  _hasOpened = false;

  /**
   * The side of the screen the navigation shelf is on.
   *
   * @protected
   *
   * @type {string}
   */
  _side = "left";

  /**
   * The prefix to use for CSS custom properties.
   *
   * @protected
   *
   * @type {string}
   */
  _prefix = "graupl-";

  /**
   * The key used to generate IDs throughout the navigation shelf.
   *
   * @protected
   *
   * @type {string}
   */
  _key = "";

  /**
   * errors - The list of errors found during validation.
   *
   * @protected
   *
   * @type {string[]}
   */
  _errors = [];

  constructor({
    shelfElement,
    controllerElement,
    lockControllerElement,
    hoverControllerElement,
    dependentSelector = ".shelf-aware",
    dependentOpenClass = "shelf-show",
    dependentCloseClass = "shelf-hide",
    openClass = "show",
    closeClass = "hide",
    transitionClass = "transitioning",
    transitionDuration = 250,
    openDuration = -1,
    closeDuration = -1,
    hoverType = "off",
    hoverDelay = 250,
    enterDelay = -1,
    leaveDelay = -1,
    locked = false,
    side = "left",
    prefix = "graupl-",
    initialize = false,
  }) {
    // Set DOM elements.
    this._dom.shelf = shelfElement;
    this._dom.controller = controllerElement;
    this._dom.lockController = lockControllerElement;
    this._dom.hoverController = hoverControllerElement;

    // Set DOM selectors.
    this._selectors.dependents = dependentSelector;

    // Set dependent open/close classes.
    this._dependentOpenClass = dependentOpenClass || "";
    this._dependentCloseClass = dependentCloseClass || "";

    // Set open/close classes.
    this._openClass = openClass || "";
    this._closeClass = closeClass || "";
    this._transitionClass = transitionClass || "";

    // Set transition duration.
    this._transitionDuration = transitionDuration;
    this._openDuration = openDuration;
    this._closeDuration = closeDuration;

    // Set locked state.
    this._locked = locked;

    // Set side.
    this._side = side;

    // Set prefix.
    this._prefix = prefix || "";

    // Set hover settings.
    this._hoverType = hoverType;
    this._hoverDelay = hoverDelay;
    this._enterDelay = enterDelay;
    this._leaveDelay = leaveDelay;

    if (initialize) {
      this.initialize();
    }
  }

  /**
   * Initialize the navigation shelf.
   */
  initialize() {
    try {
      if (!this._validate()) {
        throw new Error(
          `Graupl Navigation Shelf: cannot initialize navigation shelf. The following errors have been found:\n - ${this.errors.join(
            "\n - "
          )}`
        );
      }

      // Set up the DOM.
      this._generateKey();
      this._setDOMElements();
      this._setIds();
      this._setAriaAttributes();

      // Set up the storage.
      storage.initializeStorage("navigation-shelves");
      storage.pushToStorage("navigation-shelves", this.dom.shelf.id, this);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * The DOM elements within the shelf.
   *
   * @readonly
   *
   * @type {Object<HTMLElement, HTMLElement[]>}
   *
   * @see _dom
   */
  get dom() {
    return this._dom;
  }

  /**
   * The query selectors used by the shelf to populate the DOM.
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
   * The class(es) to apply to dependent elements when the shelf is open.
   *
   * @type {string|string[]}
   *
   * @see _dependentOpenClass
   */
  get dependentOpenClass() {
    return this._dependentOpenClass;
  }

  /**
   * The class(es) to apply to dependent elements when the shelf is closed.
   *
   * @type {string|string[]}
   *
   * @see _dependentCloseClass
   */
  get dependentCloseClass() {
    return this._dependentCloseClass;
  }

  /**
   * The class(es) to apply when the shelf is open.
   *
   * @type {string|string[]}
   *
   * @see _openClass
   */
  get openClass() {
    return this._openClass;
  }

  /**
   * The class(es) to apply when the shelf is closed.
   *
   * @type {string|string[]}
   *
   * @see _closeClass
   */
  get closeClass() {
    return this._closeClass;
  }

  /**
   * The class(es) to apply when the shelf is transitioning between open and closed.
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
   * Setting this value will also set the --am-transition-duration CSS custom property on the shelf.
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
   * If openDuration is set to -1, the transitionDuration value will be used instead.
   *
   * Setting this value will also set the --am-open-transition-duration CSS custom property on the shelf.
   *
   * @type {number}
   *
   * @see _openDuration
   */
  get openDuration() {
    if (this._openDuration === -1) return this.transitionDuration;

    return this._openDuration;
  }

  /**
   * The duration time (in milliseconds) for the transition from open to closed states.
   *
   * If closeDuration is set to -1, the transitionDuration value will be used instead.
   *
   * Setting this value will also set the --am-close-transition-duration CSS custom property on the shelf.
   *
   * @type {number}
   *
   * @see _closeDuration
   */
  get closeDuration() {
    if (this._closeDuration === -1) return this.transitionDuration;

    return this._closeDuration;
  }

  /**
   * The type of hoverability for the shelf.
   *
   * @type {string}
   *
   * @see _hoverType
   */
  get hoverType() {
    return this._hoverType;
  }

  /**
   * The delay time (in milliseconds) used for pointerenter/pointerleave events to take place.
   *
   * @type {number}
   *
   * @see _hoverDelay
   */
  get hoverDelay() {
    return this._hoverDelay;
  }

  /**
   * The delay time (in milliseconds) used for pointerenter events to take place.
   *
   * If enterDelay is set to -1, the hoverDelay value will be used instead.
   *
   * @type {number}
   *
   * @see _enterDelay
   */
  get enterDelay() {
    if (this._enterDelay === -1) return this.hoverDelay;

    return this._enterDelay;
  }

  /**
   * The delay time (in milliseconds) used for pointerleave events to take place.
   *
   * If leaveDelay is set to -1, the hoverDelay value will be used instead.
   *
   * @type {number}
   *
   * @see _leaveDelay
   */
  get leaveDelay() {
    if (this._leaveDelay === -1) return this.hoverDelay;

    return this._leaveDelay;
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
   * A flag to indicate if the navigation shelf is locked.
   *
   * @type {boolean}
   *
   * @see _locked
   */
  get locked() {
    return this._locked;
  }

  /**
   * The side of the screen the navigation shelf is on.
   *
   * @type {string}
   *
   * @see _side
   */
  get side() {
    return this._side;
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
   * A flag to check if the shelf can dynamically hover.
   *
   * @type {boolean}
   *
   * @see _hasOpened
   */
  get hasOpened() {
    return this._hasOpened;
  }

  /**
   * An array of error messages generated by the shelf.
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

  set dependentOpenClass(value) {
    isValidClassList({ dependentOpenClass: value });
    if (this._dependentOpenClass !== value) {
      this._dependentOpenClass = value;
    }
  }

  set dependentCloseClass(value) {
    isValidClassList({ dependentCloseClass: value });
    if (this._dependentCloseClass !== value) {
      this._dependentCloseClass = value;
    }
  }

  set openClass(value) {
    isValidClassList({ openClass: value });

    if (this._openClass !== value) {
      this._openClass = value;
    }
  }

  set closeClass(value) {
    isValidClassList({ closeClass: value });

    if (this._closeClass !== value) {
      this._closeClass = value;
    }
  }

  set transitionClass(value) {
    isValidClassList({ transitionClass: value });

    if (this._transitionClass !== value) {
      this._transitionClass = value;
    }
  }

  set transitionDuration(value) {
    isValidType("number", { value });

    if (this._transitionDuration !== value) {
      this._transitionDuration = value;
      this._setTransitionDurations();
    }
  }

  set openDuration(value) {
    isValidType("number", { value });

    if (this._openDuration !== value) {
      this._openDuration = value;
      this._setTransitionDurations();
    }
  }

  set closeDuration(value) {
    isValidType("number", { value });

    if (this._closeDuration !== value) {
      this._closeDuration = value;
      this._setTransitionDurations();
    }
  }

  set hoverType(value) {
    isValidHoverType({ value });

    if (this._hoverType !== value) {
      this._hoverType = value;
    }
  }

  set hoverDelay(value) {
    isValidType("number", { value });

    if (this._hoverDelay !== value) {
      this._hoverDelay = value;
    }
  }

  set enterDelay(value) {
    isValidType("number", { value });

    if (this._enterDelay !== value) {
      this._enterDelay = value;
    }
  }

  set leaveDelay(value) {
    isValidType("number", { value });

    if (this._leaveDelay !== value) {
      this._leaveDelay = value;
    }
  }

  set prefix(value) {
    isValidType("string", { value });

    if (this._prefix !== value) {
      this._prefix = value;
    }
  }

  set locked(value) {
    isValidType("boolean", { value });

    if (this._locked !== value) {
      this._locked = value;
    }
  }

  set side(value) {
    isValidType("string", { value });

    if (this._side !== value) {
      this._side = value;
    }
  }

  set key(value) {
    isValidType("string", { value });

    if (this._key !== value) {
      this._key = value;
    }
  }

  set hasOpened(value) {
    isValidType("boolean", { value });

    if (this._hasOpened !== value) {
      this._hasOpened = value;
    }
  }

  /**
   * Validates all aspects of the shelf to ensure proper functionality.
   *
   * @protected
   *
   * @return {boolean} - The result of the validation.
   */
  _validate() {
    let check = true;

    // HTML element checks.
    const htmlElements = {
      shelfElement: this._dom.shelf,
      controllerElement: this._dom.controller,
    };

    if (this._dom.lockController.length > 0) {
      htmlElements.lockControllerElement = this._dom.lockController;
    }
    if (this._dom.hoverController.length > 0) {
      htmlElements.hoverControllerElement = this._dom.hoverController;
    }

    const htmlElementChecks = isValidInstance(HTMLElement, htmlElements);

    if (!htmlElementChecks.status) {
      this._errors.push(htmlElementChecks.error.message);
      check = false;
    }

    // Class list checks.
    if (this._dependentOpenClass !== "") {
      const dependentOpenClassCheck = isValidClassList({
        dependentOpenClass: this._dependentOpenClass,
      });
      if (!dependentOpenClassCheck.status) {
        this._errors.push(dependentOpenClassCheck.error.message);
        check = false;
      }
    }

    if (this._dependentCloseClass !== "") {
      const dependentCloseClassCheck = isValidClassList({
        dependentCloseClass: this._dependentCloseClass,
      });
      if (!dependentCloseClassCheck.status) {
        this._errors.push(dependentCloseClassCheck.error.message);
        check = false;
      }
    }

    if (this._openClass !== "") {
      const openClassCheck = isValidClassList({ openClass: this._openClass });

      if (!openClassCheck.status) {
        this._errors.push(openClassCheck.error.message);
        check = false;
      }
    }

    if (this._closeClass !== "") {
      const closeClassCheck = isValidClassList({
        closeClass: this._closeClass,
      });

      if (!closeClassCheck.status) {
        this._errors.push(closeClassCheck.error.message);
        check = false;
      }
    }

    if (this._transitionClass !== "") {
      const transitionClassCheck = isValidClassList({
        transitionClass: this._transitionClass,
      });

      if (!transitionClassCheck.status) {
        this._errors.push(transitionClassCheck.error.message);
        check = false;
      }
    }

    // Transition duration check.
    const transitionDurationCheck = isValidType("number", {
      transitionDuration: this._transitionDuration,
    });

    if (!transitionDurationCheck.status) {
      this._errors.push(transitionDurationCheck.error.message);
      check = false;
    }

    // Open duration check.
    const openDurationCheck = isValidType("number", {
      openDuration: this._openDuration,
    });

    if (!openDurationCheck.status) {
      this._errors.push(openDurationCheck.error.message);
      check = false;
    }

    // Close duration check.
    const closeDurationCheck = isValidType("number", {
      closeDuration: this._closeDuration,
    });

    if (!closeDurationCheck.status) {
      this._errors.push(closeDurationCheck.error.message);
      check = false;
    }

    // Hover type check.
    const hoverTypeCheck = isValidHoverType({ hoverType: this._hoverType });

    if (!hoverTypeCheck.status) {
      this._errors.push(hoverTypeCheck.error.message);
      check = false;
    }

    // Hover delay check.
    const hoverDelayCheck = isValidType("number", {
      hoverDelay: this._hoverDelay,
    });

    if (!hoverDelayCheck.status) {
      this._errors.push(hoverDelayCheck.error.message);
      check = false;
    }

    // Enter delay check.
    const enterDelayCheck = isValidType("number", {
      enterDelay: this._enterDelay,
    });

    if (!enterDelayCheck.status) {
      this._errors.push(enterDelayCheck.error.message);
      check = false;
    }

    // Leave delay check.
    const leaveDelayCheck = isValidType("number", {
      leaveDelay: this._leaveDelay,
    });

    if (!leaveDelayCheck.status) {
      this._errors.push(leaveDelayCheck.error.message);
      check = false;
    }

    // Prefix check.
    const prefixCheck = isValidType("string", { prefix: this._prefix });

    if (!prefixCheck.status) {
      this._errors.push(prefixCheck.error.message);
      check = false;
    }

    // Locked check.
    const lockedCheck = isValidType("boolean", { locked: this._locked });
    if (!lockedCheck.status) {
      this._errors.push(lockedCheck.error.message);
      check = false;
    }

    // Side check.
    const sideCheck = isValidSideType({ side: this._side });
    if (!sideCheck.status) {
      this._errors.push(sideCheck.error.message);
      check = false;
    }

    return check;
  }

  /**
   * Sets DOM elements within the shelf.
   *
   * The shelf, controller, lockController, and hoverController elements _cannot_ be set through this method.
   *
   * @protected
   *
   * @param {string}      elementType                - The type of element to populate.
   * @param {HTMLElement} [base = this.dom.shelf] - The element used as the base for the querySelector.
   * @param {boolean}     [overwrite = true]         - A flag to set if the existing elements will be overwritten.
   * @param {boolean}     [strict = true]           - A flag to set if the elements must be direct children of the base.
   */
  _setDOMElementType(
    elementType,
    base = this.dom.shelf,
    overwrite = true,
    strict = true
  ) {
    if (typeof this.selectors[elementType] === "string") {
      if (
        elementType === "shelf" ||
        elementType === "controller" ||
        elementType === "lockController" ||
        elementType === "hoverController"
      ) {
        throw new Error(
          `Graupl Navigation Shelf: "${elementType}" element cannot be set through _setDOMElementType.`
        );
      }

      if (base !== this.dom.shelf) isValidInstance(HTMLElement, { base });

      if (Array.isArray(this._dom[elementType])) {
        // Get all the elements matching the selector in the base.
        const domElements = Array.from(
          base.querySelectorAll(this.selectors[elementType])
        );

        // Filter the elements so only direct children of the base are kept.
        const filteredElements = domElements.filter((item) =>
          strict ? item.parentElement === base : true
        );

        if (overwrite) {
          this._dom[elementType] = filteredElements;
        } else {
          this._dom[elementType] = [
            ...this._dom[elementType],
            ...filteredElements,
          ];
        }
      } else {
        // Get the single element matching the selector in the base.
        const domElement = base.querySelector(this.selectors[elementType]);

        // Ensure the element is a direct child of the base.
        if (domElement && domElement.parentElement !== base) {
          return;
        }

        if (overwrite) {
          this._dom[elementType] = domElement;
        }
      }
    } else {
      throw new Error(
        `Graupl Navigation Shelf: "${elementType}" is not a valid element type within the navigation shelf.`
      );
    }
  }

  /**
   * Resets DOM elements within the menu.
   *
   * The shelf, controller, lockController, and hoverController elements _cannot_ be set through this method.
   *
   * @protected
   *
   * @param {string} elementType - The type of element to clear.
   */
  _resetDOMElementType(elementType) {
    if (typeof this.selectors[elementType] === "string") {
      if (
        elementType === "shelf" ||
        elementType === "controller" ||
        elementType === "lockController" ||
        elementType === "hoverController"
      ) {
        throw new Error(
          `Graupl Navigation Shelf: "${elementType}" element cannot be reset through _resetDOMElementType.`
        );
      }

      if (Array.isArray(this._dom[elementType])) {
        this._dom[elementType] = [];
      } else {
        this._dom[elementType] = null;
      }
    } else {
      throw new Error(
        `Graupl Navigation Shelf: "${elementType}" is not a valid element type within the navigation shelf.`
      );
    }
  }

  /**
   * Sets all DOM elements within the shelf.
   *
   * Utilizes _setDOMElementType and _resetDOMElementType.
   *
   * @protected
   */
  _setDOMElements() {
    this._setDOMElementType("dependents", document, true, false);
  }

  /**
   * Generates a key for the navigation shelf.
   *
   * @param {boolean} [regenerate = false] - A flag to determine if the key should be regenerated.
   */
  _generateKey(regenerate = false) {
    if (this.key === "" || regenerate) {
      this.key = Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 10);
    }
  }

  /**
   * Sets the IDs of the navigation shelf and it's elements if they do not already exist.
   *
   * The generated IDs use the key and follow the format:
   *  - navigation shelf: `navigation-shelf-${key}`
   *  - navigation shelf toggle: `navigation-shelf-toggle-${key}`
   *  - navigation shelf lock toggle: `navigation-shelf-lock-toggle-${key}`
   *  - navigation shelf hover toggle: `navigation-shelf-hover-toggle-${key}`
   */
  _setIds() {
    this.dom.shelf.id = this.dom.shelf.id || `navigation-shelf-${this.key}`;
    this.dom.controller.id =
      this.dom.controller.id || `navigation-shelf-toggle-${this.key}`;
    if (this.dom.lockController) {
      this.dom.lockController.id =
        this.dom.lockController.id ||
        `navigation-shelf-lock-toggle-${this.key}`;
    }
    if (this.dom.hoverController) {
      this.dom.hoverController.id =
        this.dom.hoverController.id ||
        `navigation-shelf-hover-toggle-${this.key}`;
    }
  }

  /**
   * Sets the aria attributes for the navigation shelf.
   */
  _setAriaAttributes() {
    this.dom.controller.setAttribute("aria-controls", this.dom.shelf.id);
    this.dom.controller.setAttribute("aria-expanded", "false");

    this.dom.lockController.setAttribute("aria-controls", this.dom.shelf.id);
    this.dom.lockController.setAttribute(
      "aria-pressed",
      this._locked ? "true" : "false"
    );

    this.dom.hoverController.setAttribute("aria-controls", this.dom.shelf.id);
    this.dom.hoverController.setAttribute(
      "aria-pressed",
      this._hoverType === "on" ? "true" : "false"
    );
  }
}

export default NavigationShelf;
