import {
  isValidClassList,
  isValidType,
  isValidInstance,
  isValidState,
  isValidEvent,
} from "@graupl/core/src/validate.js";
import { isValidSideType } from "../validate.js";
import { keyPress, preventEvent } from "@graupl/core/src/eventHandlers.js";
import {
  addClass,
  removeClass,
  selectFirstFocusableElement,
} from "@graupl/core/src/domHelpers.js";
import storage from "@graupl/core/src/storage.js";
import { TransactionalValue } from "@graupl/core/src/TransactionalValue.js";

class NavigationShelf {
  /**
   * The DOM elements within the shelf.
   *
   * @protected
   *
   * @type {Object<HTMLElement,HTMLElement[]>}
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
   * The class(es) to apply to the shelf and dependent elements in various scenarios.
   *
   * @protected
   *
   * @type {Object<string,string[]>}
   *
   * @property {string|string[]} locked     - The class(es) to apply to the shelf and dependent elements when the shelf is locked.
   * @property {string|string[]} unlocked   - The class(es) to apply to the shelf and dependent elements when the shelf is unlocked.
   * @property {string|string[]} hover      - The class(es) to apply to the shelf element when the shelf is hoverable.
   * @property {string|string[]} noHover    - The class(es) to apply to the shelf element when the shelf is not hoverable.
   * @property {string|string[]} left       - The class(es) to apply to the shelf and dependent elements when the shelf is on the left side.
   * @property {string|string[]} right      - The class(es) to apply to the shelf and dependent elements when the shelf is on the right side.
   * @property {string|string[]} open       - The class(es) to apply to the shelf when the shelf is open.
   * @property {string|string[]} close      - The class(es) to apply to the shelf when the shelf is closed.
   * @property {string|string[]} transition - The class(es) to apply to the shelf and dependent elements when the shelf is transitioning between states.
   * @property {string|string[]} initialize - The class(es) to apply to the shelf when the shelf is initializing.
   */
  _classes = {
    locked: "locked",
    unlocked: "unlocked",
    hover: "hoverable",
    noHover: "not-hoverable",
    left: "left-side",
    right: "right-side",
    open: "show",
    close: "hide",
    transistion: "transitioning",
    initialize: "initializing",
  };

  /**
   * The duration times (in milliseconds) for various things throughout the navigation shelf.
   *
   * @protected
   *
   * @type {Object<number>}
   *
   * @property {number} transition - The duration time (in milliseconds) for the transition between open and closed states.
   * @property {number} open       - The duration time (in milliseconds) for the transition from closed to open states.
   * @property {number} close      - The duration time (in milliseconds) for the transition from open to closed states.
   */
  _durations = {
    transition: 250,
    open: -1,
    close: -1,
  };

  /**
   * The delay times (in milliseconds) for various things throughout the navigation shelf.
   *
   * @protected
   *
   * @type {Object<number>}
   *
   * @property {number} hover - The delay time (in milliseconds) used for pointerenter/pointerleave events to take place.
   * @property {number} enter - The delay time (in milliseconds) used for pointerenter events to take place.
   * @property {number} leave - The delay time (in milliseconds) used for pointerleave events to take place.
   */
  _delays = {
    hover: 250,
    enter: -1,
    leave: -1,
  };

  /**
   * The current state of the shelf's focus.
   *
   * @protected
   *
   * @type {string}
   */
  _focusState = "none";

  /**
   * This last event triggered on the shelf.
   *
   * @protected
   *
   * @type {string}
   */
  _currentEvent = "none";

  /**
   * A flag to indicate if the shelf is hoverable.
   *
   * @protected
   *
   * @type {boolean}
   */
  _hover = false;

  /**
   * A variable to hold the hover timeout function.
   *
   * @protected
   *
   * @type {?Function}
   */
  _hoverTimeout = null;

  /**
   * A flag to indicate if the navigation shelf is locked.
   *
   * @protected
   *
   * @type {TransactionalValue<boolean>}
   */
  _locked = new TransactionalValue(false);

  /**
   * A flag to check in the navigation shelf can dynamically close based on if the shelf has been manually interacted with already.
   *
   * @protected
   *
   * @type {boolean}
   */
  _softLocked = false;

  /**
   * The side of the screen the navigation shelf is on.
   *
   * @protected
   *
   * @type {string}
   */
  _side = "left";

  /**
   * The opposite side of the screen the naigation shelf is on.
   *
   * @protected
   *
   * @type {string}
   */
  _otherSide = "right";

  /**
   * The open state of the shelf.
   *
   * @protected
   *
   * @type {boolean}
   */
  _open = false;

  /**
   * The width of the screen that the menu will automatically open/close itself.
   *
   * @protected
   *
   * @type {string}
   */
  _breakpointWidth = "1023px";

  /**
   * This MediaQueryList for the disclosure.
   *
   * @protected
   *
   * @type {MediaQueryList|null}
   */
  _mediaQueryList = null;

  /**
   * The event that is triggered when the shelf expands.
   *
   * @protected
   *
   * @event grauplNavigationShelfExpand
   *
   * @type {CustomEvent}
   *
   * @property {boolean}                 bubbles - A flag to bubble the event.
   * @property {Object<NavigationShelf>} detail  - The details object containing the NavigationShelf itself.
   */
  _expandEvent = new CustomEvent("grauplNavigationShelfExpand", {
    bubbles: true,
    detail: { shelf: this },
  });

  /**
   * The event that is triggered when the shelf collapses.
   *
   * @protected
   *
   * @event grauplNavigationShelfCollapse
   *
   * @type {CustomEvent}
   *
   * @property {boolean}                 bubbles - A flag to bubble the event.
   * @property {Object<NavigationShelf>} detail  - The details object containing the NavigationShelf itself.
   */
  _collapseEvent = new CustomEvent("grauplNavigationShelfCollapse", {
    bubbles: true,
    detail: { shelf: this },
  });

  /**
   * The event that is triggered when the shelf is locked.
   *
   * @protected
   *
   * @event grauplNavigationShelfLock
   *
   * @type {CustomEvent}
   *
   * @property {boolean}                 bubbles - A flag to bubble the event.
   * @property {Object<NavigationShelf>} detail  - The details object containing the NavigationShelf itself.
   */
  _lockEvent = new CustomEvent("grauplNavigationShelfLock", {
    bubbles: true,
    detail: { shelf: this },
  });

  /**
   * The event that is triggered when the shelf is unlocked.
   *
   * @protected
   *
   * @event grauplNavigationShelfUnlock
   *
   * @type {CustomEvent}
   *
   * @property {boolean}                 bubbles - A flag to bubble the event.
   * @property {Object<NavigationShelf>} detail  - The details object containing the NavigationShelf itself.
   */
  _unlockEvent = new CustomEvent("grauplNavigationShelfUnlock", {
    bubbles: true,
    detail: { shelf: this },
  });

  /**
   * The event that is triggered when the shelf has shifted sides.
   *
   * @protected
   *
   * @event grauplNavigationShelfShift
   *
   * @type {CustomEvent}
   *
   * @property {boolean}                 bubbles - A flag to bubble the event.
   * @property {Object<NavigationShelf>} detail  - The details object containing the NavigationShelf itself.
   */
  _shiftEvent = new CustomEvent("grauplNavigationShelfShift", {
    bubbles: true,
    detail: {
      shelf: this,
    },
  });

  /**
   * The event that is triggered when the shelf's hoverability is enabled.
   *
   * @protected
   *
   * @event grauplNavigationShelfEnableHoverable
   *
   * @type {CustomEvent}
   *
   * @property {boolean}                 bubbles - A flag to bubble the event.
   * @property {Object<NavigationShelf>} detail  - The details object containing the NavigationShelf itself.
   */
  _enableHoverEvent = new CustomEvent("grauplNavigationShelfEnableHoverable", {
    bubbles: true,
    detail: {
      shelf: this,
    },
  });

  /**
   * The event that is triggered when the shelf's hoverability is disabled.
   *
   * @protected
   *
   * @event grauplNavigationShelfDisableHover
   *
   * @type {CustomEvent}
   *
   * @property {boolean}                 bubbles - A flag to bubble the event.
   * @property {Object<NavigationShelf>} detail  - The details object containing the NavigationShelf itself.
   */
  _disableHoverEvent = new CustomEvent("grauplNavigationShelfDisableHover", {
    bubbles: true,
    detail: {
      shelf: this,
    },
  });

  /**
   * A flag to indicate if the shelf has been initialized.
   *
   * @protected
   *
   * @type {boolean}
   */
  _initialized = false;

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
    sideControllerElement,
    dependentSelector = ".shelf-aware",
    lockedClass = "locked",
    unlockedClass = "unlocked",
    hoverClass = "hoverable",
    noHoverClass = "not-hoverable",
    leftClass = "left-side",
    rightClass = "right-side",
    openClass = "show",
    closeClass = "hide",
    transitionClass = "transitioning",
    transitionDuration = 250,
    openDuration = -1,
    closeDuration = -1,
    hover = false,
    hoverDelay = 250,
    enterDelay = -1,
    leaveDelay = -1,
    locked = false,
    side = "left",
    prefix = "graupl-",
    initializeClass = "initializing",
    initialize = false,
  } = {}) {
    // Set DOM elements.
    this._dom.shelf = shelfElement;
    this._dom.controller = controllerElement || null;
    this._dom.lockController = lockControllerElement || null;
    this._dom.hoverController = hoverControllerElement || null;
    this._dom.sideController = sideControllerElement || null;

    // Set DOM selectors.
    this._selectors.dependents = dependentSelector;

    // Set classes.
    this._classes.locked = lockedClass || "";
    this._classes.unlocked = unlockedClass || "";
    this._classes.hover = hoverClass || "";
    this._classes.noHover = noHoverClass || "";
    this._classes.left = leftClass || "";
    this._classes.right = rightClass || "";
    this._classes.open = openClass || "";
    this._classes.close = closeClass || "";
    this._classes.transition = transitionClass || "";
    this._classes.initialize = initializeClass || "";

    // Set transition duration.
    this._durations.transition = transitionDuration;
    this._durations.open = openDuration;
    this._durations.close = closeDuration;

    // Set locked state.
    this._locked = new TransactionalValue(locked);

    // Set side.
    this._side = side;

    // Set prefix.
    this._prefix = prefix || "";

    // Set hover settings.
    this._hover = hover;
    this._delays.hover = hoverDelay;
    this._delays.enter = enterDelay;
    this._delays.leave = leaveDelay;

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

      this._setTransitionDurations();

      // Set up the DOM.
      this._generateKey();
      this._setDOMElements();
      this._setIds();
      this._setAriaAttributes();

      // Set up the event listeners.
      this._handleFocus();
      this._handleClick();
      this._handleHover();
      this._handleKeydown();
      this._handleKeyup();
      this._handleResize();

      // Ensure the initial open state of the shelf.
      if (
        this.dom.controller.getAttribute("aria-expanded") === "true" ||
        this.isLocked
      ) {
        this._expand(false, false);

        if (this.isLocked) {
          this._lock(false);
        }
      } else {
        this._collapse(false, false);
      }

      // Ensure the initial hoverability of the shelf.
      if (this.hover) {
        this._enableHover(false);
      } else {
        this._disableHover(false);
      }

      // Ensure the initial side of the shelf.
      this._shiftSide(false);

      // Set up the storage.
      storage.initializeStorage("navigation-shelves");
      storage.pushToStorage("navigation-shelves", this.dom.shelf.id, this);

      // Set the initialized flag to true.
      this._initialized = true;
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
   * The class(es) to apply to the shelf and dependent elements when the shelf is locked.
   *
   * @type {string|string[]}
   *
   * @see _classes
   */
  get lockedClass() {
    return this._classes.locked;
  }

  set lockedClass(value) {
    isValidClassList({ lockedClass: value });

    if (this._classes.locked !== value) {
      this._classes.locked = value;
    }
  }

  /**
   * The class(es) to apply to the shelf and dependent elements when the shelf is unlocked.
   *
   * @type {string|string[]}
   *
   * @see _classes
   */
  get unlockedClass() {
    return this._classes.unlocked;
  }

  set unlockedClass(value) {
    isValidClassList({ unlockedClass: value });

    if (this._classes.unlocked !== value) {
      this._classes.unlocked = value;
    }
  }

  /**
   * The class(es) to apply to the shelf element when the shelf is hoverable.
   *
   * @type {string|string[]}
   *
   * @see _classes
   */
  get hoverClass() {
    return this._classes.hover;
  }

  set hoverClass(value) {
    isValidClassList({ hoverClass: value });

    if (this._classes.hover !== value) {
      this._classes.hover = value;
    }
  }

  /**
   * The class(es) to apply to the shelf element when the shelf is not hoverable.
   *
   * @type {string|string[]}
   *
   * @see _classes
   */
  get noHoverClass() {
    return this._classes.noHover;
  }

  set noHoverClass(value) {
    isValidClassList({ noHoverClass: value });

    if (this._classes.noHover !== value) {
      this._classes.noHover = value;
    }
  }

  /**
   * The class(es) to apply to the shelf and dependent elements when the shelf is on the left side.
   *
   * @type {string|string[]}
   *
   * @see _classes
   */
  get leftClass() {
    return this._classes.left;
  }

  set leftClass(value) {
    isValidClassList({ leftClass: value });

    if (this._classes.left !== value) {
      this._classes.left = value;
    }
  }

  /**
   * The class(es) to apply to the shelf and dependent elements when the shelf is on the right side.
   *
   * @type {string|string[]}
   *
   * @see _classes
   */
  get rightClass() {
    return this._classes.right;
  }

  set rightClass(value) {
    isValidClassList({ rightClass: value });

    if (this._classes.right !== value) {
      this._classes.right = value;
    }
  }

  /**
   * The class(es) to apply to the shelf when the shelf is open.
   *
   * @type {string|string[]}
   *
   * @see _classes
   */
  get openClass() {
    return this._classes.open;
  }

  set openClass(value) {
    isValidClassList({ openClass: value });

    if (this._classes.open !== value) {
      this._classes.open = value;
    }
  }

  /**
   * The class(es) to apply to the shelf when the shelf is closed.
   *
   * @type {string|string[]}
   *
   * @see _classes
   */
  get closeClass() {
    return this._classes.close;
  }

  set closeClass(value) {
    isValidClassList({ closeClass: value });

    if (this._classes.close !== value) {
      this._classes.close = value;
    }
  }

  /**
   * The class(es) to apply to the shelf and dependent elements when the shelf is transitioning between states.
   *
   * @type {string|string[]}
   *
   * @see _classes
   */
  get transitionClass() {
    return this._classes.transition;
  }

  set transitionClass(value) {
    isValidClassList({ transitionClass: value });

    if (this._classes.transition !== value) {
      this._classes.transition = value;
    }
  }

  /**
   * The class(es) to apply to the shelf when the shelf is initializing.
   *
   * @type {string|string[]}
   *
   * @see _classes
   */
  get initializeClass() {
    return this._classes.initialize;
  }

  set initializeClass(value) {
    isValidClassList({ initializeClass: value });

    if (this._classes.initialize !== value) {
      this._classes.initialize = value;
    }
  }

  /**
   * The duration time (in milliseconds) for the transition between open and closed states.
   *
   * Setting this value will also set the --am-transition-duration CSS custom property on the shelf.
   *
   * @type {number}
   *
   * @see _durations
   */
  get transitionDuration() {
    return this._durations.transition;
  }

  set transitionDuration(value) {
    isValidType("number", { value });

    if (this._durations.transition !== value) {
      this._durations.transition = value;
      this._setTransitionDurations();
    }
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
   * @see _durations
   */
  get openDuration() {
    if (this._durations.open === -1) return this.transitionDuration;

    return this._durations.open;
  }

  set openDuration(value) {
    isValidType("number", { value });

    if (this._durations.open !== value) {
      this._durations.open = value;
      this._setTransitionDurations();
    }
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
   * @see _durations
   */
  get closeDuration() {
    if (this._durations.close === -1) return this.transitionDuration;

    return this._durations.close;
  }

  set closeDuration(value) {
    isValidType("number", { value });

    if (this._durations.close !== value) {
      this._durations.close = value;
      this._setTransitionDurations();
    }
  }

  /**
   * The current state of the shelf's focus.
   *
   * @type {string}
   *
   * @see _focusState
   */
  get focusState() {
    return this._focusState;
  }

  set focusState(value) {
    isValidState({ value });

    if (this._focusState !== value) {
      this._focusState = value;
    }
  }

  /**
   * The last event triggered on the shelf.
   *
   * @type {string}
   *
   * @see _currentEvent
   */
  get currentEvent() {
    return this._currentEvent;
  }

  set currentEvent(value) {
    isValidEvent({ value });

    if (this._currentEvent !== value) {
      this._currentEvent = value;
    }
  }

  /**
   * A flag to indicate if the shelf is hoverable.
   *
   * @readonly
   *
   * @type {boolean}
   *
   * @see _hover
   */
  get hover() {
    return this._hover;
  }

  /**
   * The delay time (in milliseconds) used for pointerenter/pointerleave events to take place.
   *
   * @type {number}
   *
   * @see _delays
   */
  get hoverDelay() {
    return this._delays.hover;
  }

  set hoverDelay(value) {
    isValidType("number", { value });

    if (this._delays.hover !== value) {
      this._delays.hover = value;
    }
  }

  /**
   * The delay time (in milliseconds) used for pointerenter events to take place.
   *
   * If enterDelay is set to -1, the hoverDelay value will be used instead.
   *
   * @type {number}
   *
   * @see _delays
   */
  get enterDelay() {
    if (this._delays.enter === -1) return this.hoverDelay;

    return this._delays.enter;
  }

  set enterDelay(value) {
    isValidType("number", { value });

    if (this._delays.enter !== value) {
      this._delays.enter = value;
    }
  }

  /**
   * The delay time (in milliseconds) used for pointerleave events to take place.
   *
   * If leaveDelay is set to -1, the hoverDelay value will be used instead.
   *
   * @type {number}
   *
   * @see _delays
   */
  get leaveDelay() {
    if (this._delays.leave === -1) return this.hoverDelay;

    return this._delays.leave;
  }

  set leaveDelay(value) {
    isValidType("number", { value });

    if (this._delays.leave !== value) {
      this._delays.leave = value;
    }
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

  set prefix(value) {
    isValidType("string", { value });

    if (this._prefix !== value) {
      this._prefix = value;
    }
  }

  /**
   * A flag to indicate if the navigation shelf is locked.
   *
   * @readonly
   *
   * @type {boolean}
   *
   * @see _locked
   */
  get isLocked() {
    return this._locked.value;
  }

  /**
   * The committed lock preference for the navigation shelf.
   *
   * @readonly
   *
   * @type {boolean}
   *
   * @see _locked
   */
  get shouldBeLocked() {
    return this._locked.committed;
  }

  /**
   * The side of the screen the navigation shelf is on.
   *
   * @readonly
   *
   * @type {string}
   *
   * @see _side
   */
  get side() {
    return this._side;
  }

  /**
   * The opposite side of the screen the navigation shelf is on.
   *
   * @readonly
   *
   * @type {string}
   *
   * @see _otherSide
   */
  get otherSide() {
    return this._otherSide;
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

  set key(value) {
    isValidType("string", { value });

    if (this._key !== value) {
      this._key = value;
    }
  }

  /**
   * A flag to check if the shelf can dynamically hover.
   *
   * @type {boolean}
   *
   * @see _softLocked
   */
  get isSoftLocked() {
    return this._softLocked;
  }

  set isSoftLocked(value) {
    isValidType("boolean", { value });

    if (this._softLocked !== value) {
      this._softLocked = value;
    }
  }

  /**
   * The open state on the shelf.
   *
   * @readonly
   *
   * @type {boolean}
   *
   * @see _open
   */
  get isOpen() {
    return this._open;
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

    if (this._dom.lockController) {
      htmlElements.lockControllerElement = this._dom.lockController;
    }
    if (this._dom.hoverController) {
      htmlElements.hoverControllerElement = this._dom.hoverController;
    }
    if (this._dom.sideController) {
      htmlElements.sideControllerElement = this._dom.sideController;
    }

    const htmlElementChecks = isValidInstance(HTMLElement, htmlElements);

    if (!htmlElementChecks.status) {
      this._errors.push(htmlElementChecks.error.message);
      check = false;
    }

    // Class list checks.
    const classes = {};
    for (const key of Object.keys(this._classes)) {
      if (this._classes[key] === "") continue;

      classes[`${key}Class`] = this._classes[key];
    }
    const classChecks = isValidClassList(classes);

    if (!classChecks.status) {
      this._errors.push(classChecks.error.message);
      check = false;
    }

    // Duration checks.
    const durations = {};
    for (const key of Object.keys(this._durations)) {
      if (this._durations[key] === "") continue;

      durations[`${key}Duration`] = this._durations[key];
    }
    const durationChecks = isValidType("number", durations);

    if (!durationChecks.status) {
      this._errors.push(durationChecks.error.message);
      check = false;
    }

    // Hover check.
    const hoverCheck = isValidType("boolean", { hover: this._hover });

    if (!hoverCheck.status) {
      this._errors.push(hoverCheck.error.message);
      check = false;
    }

    // Delay checks.
    const delays = {};
    for (const key of Object.keys(this._delays)) {
      if (this._delays[key] === "") continue;

      delays[`${key}Delay`] = this._delays[key];
    }
    const delayChecks = isValidType("number", delays);

    if (!delayChecks.status) {
      this._errors.push(delayChecks.error.message);
      check = false;
    }

    // Prefix check.
    const prefixCheck = isValidType("string", { prefix: this._prefix });

    if (!prefixCheck.status) {
      this._errors.push(prefixCheck.error.message);
      check = false;
    }

    // Locked check.
    const lockedCheck = isValidType("boolean", { locked: this._locked.value });
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
   * @param {string}                      elementType                     - The type of element to populate.
   * @param {Object<HTMLElement,boolean>} [options = {}]                  - The options for setting the DOM element type.
   * @param {HTMLElement}                 [options.base = this.dom.shelf] - The element used as the base for the querySelector.
   * @param {boolean}                     [options.overwrite = true]      - A flag to set if the existing elements will be overwritten.
   * @param {boolean}                     [options.strict = true]         - A flag to set if the elements must be direct children of the base.
   */
  _setDOMElementType(
    elementType,
    { base = this.dom.shelf, overwrite = true, strict = true } = {}
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
    this._setDOMElementType("dependents", { base: document, strict: false });
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
    if (this.dom.controller) {
      this.dom.controller.id =
        this.dom.controller.id || `navigation-shelf-toggle-${this.key}`;
    }
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
    if (this.dom.controller) {
      this.dom.controller.setAttribute("aria-controls", this.dom.shelf.id);

      if (this.dom.controller.getAttribute("aria-expanded") !== "true") {
        this.dom.controller.setAttribute("aria-expanded", "false");
      }
    }

    if (this.dom.lockController) {
      this.dom.lockController.setAttribute("aria-controls", this.dom.shelf.id);
      this.dom.lockController.setAttribute(
        "aria-pressed",
        this.isLocked ? "true" : "false"
      );
    }

    if (this.dom.hoverController) {
      this.dom.hoverController.setAttribute("aria-controls", this.dom.shelf.id);
      this.dom.hoverController.setAttribute(
        "aria-pressed",
        this._hoverType === "on" ? "true" : "false"
      );
    }

    if (this.dom.sideController) {
      this.dom.sideController.setAttribute("aria-controls", this.dom.shelf.id);
    }
  }

  /**
   * Clears the hover timeout.
   *
   * @protected
   */
  _clearTimeout() {
    clearTimeout(this._hoverTimeout);
  }

  /**
   * Sets the hover timeout.
   *
   * @protected
   *
   * @param {Function} callback - The callback function to execute.
   * @param {number}   delay    - The delay time in milliseconds.
   */
  _setTimeout(callback, delay) {
    isValidType("function", { callback });
    isValidType("number", { delay });

    this._hoverTimeout = setTimeout(callback, delay);
  }

  /**
   * Observes body size changes and keeps the shelf aligned with the configured breakpoint.
   *
   * @protected
   */
  _handleResize() {
    if (this._breakpointWidth === "") {
      return;
    }

    this._mediaQueryList = window.matchMedia(
      `(width <= ${this._breakpointWidth})`
    );

    this._mediaQueryList.addEventListener("change", (event) => {
      if (event.matches && this.isOpen) {
        this.close({
          preserveLock: this.shouldBeLocked,
        });
      } else if (!event.matches && this.shouldBeLocked && !this.isOpen) {
        this._locked.reset();
        this.lock({ force: true });
      }
    });
  }

  _handleFocus() {
    this.dom.shelf.addEventListener("focusin", () => {
      this.focusState = "self";
      this.open();
    });

    this.dom.shelf.addEventListener("focusout", (event) => {
      if (
        event.relatedTarget === null ||
        this.dom.shelf.contains(event.relatedTarget)
      )
        return;

      this.focusState = "none";

      if (!this.isLocked) {
        this.close();
      }
    });
  }

  _handleClick() {
    // Prevent pointer down events on all controlled elements.
    for (const element of Object.values(this.dom)) {
      if (!element) continue;
      if (Array.isArray(element)) continue;

      element.addEventListener(
        "pointerdown",
        () => {
          this.currentEvent = "mouse";
          this._clearTimeout();
        },
        { passive: true }
      );
    }

    // Toggle the shelf when the controlled is clicked.
    if (this.dom.controller) {
      this.dom.controller.addEventListener("pointerup", (event) => {
        if (event.button !== 0) return;

        this.currentEvent = "mouse";
        preventEvent(event);
        this.toggle({ preserveLock: false });

        if (this.isOpen) {
          this.focusState = "self";
          this.isSoftLocked = true;
        }
      });
    }

    // Toggle hoverability when the hover controller is clicked.
    if (this.dom.hoverController) {
      this.dom.hoverController.addEventListener("pointerup", (event) => {
        if (event.button !== 0) return;

        this.currentEvent = "mouse";
        preventEvent(event);
        this.focusState = "self";
        this.toggleHover();

        if (this.hover) {
          this.open();
        }
      });
    }

    // Toggle shelf lock when the lock controller is clicked.
    if (this.dom.lockController) {
      this.dom.lockController.addEventListener("pointerup", (event) => {
        if (event.button !== 0) return;

        this.currentEvent = "mouse";
        preventEvent(event);
        this.focusState = "self";
        this.toggleLock();
      });
    }

    // Toggle shifting sides when the side controller is clicked.
    if (this.dom.sideController) {
      this.dom.sideController.addEventListener("pointerup", (event) => {
        if (event.button !== 0) return;

        this.currentEvent = "mouse";
        preventEvent(event);
        this.focusState = "self";
        this.toggleSide();
      });
    }

    // Catch all to open if shelf if there is a click inside of it.
    this.dom.shelf.addEventListener("pointerup", (event) => {
      if (event.button !== 0) return;

      this.currentEvent = "mouse";
      this.focusState = "self";
      this.isSoftLocked = true;
      this.open();
    });

    // Close the shelf if a click happens outside of it.
    document.addEventListener("pointerup", (event) => {
      if (this.focusState === "none") return;
      if (this.isLocked) return;
      if (
        this.dom.shelf === event.target ||
        this.dom.shelf.contains(event.target)
      )
        return;

      this.currentEvent = "mouse";
      this.close();
    });
  }

  _handleHover() {
    this.dom.shelf.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "pen" || event.pointerType === "touch") return;
      if (this.isLocked || this.isSoftLocked) return;
      if (!this.hover) return;

      this.currentEvent = "mouse";

      if (this.enterDelay > 0) {
        this._clearTimeout();
        this._setTimeout(() => {
          if (!this.isOpen) {
            this.open();
          }
        }, this.enterDelay);
      } else {
        this.open();
      }
    });

    this.dom.shelf.addEventListener("pointerleave", (event) => {
      if (event.pointerType === "pen" || event.pointerType === "touch") return;
      if (this.isLocked || this.isSoftLocked) return;
      if (!this.hover) return;

      this.currentEvent = "mouse";

      if (this.leaveDelay > 0) {
        this._clearTimeout();
        this._setTimeout(() => {
          if (this.isOpen) {
            this.close();
          }
        }, this.leaveDelay);
      } else {
        this.close();
      }
    });
  }

  _handleKeydown() {
    // Prevent keydown events on the shelf if they are `Escape`.
    this.dom.shelf.addEventListener("keydown", (event) => {
      const key = keyPress(event);

      if (key === "Escape") {
        preventEvent(event);
      }
    });

    // Prevent keydown events on all controller elements if they are `Space` or `Enter`.
    for (const element of Object.values(this.dom)) {
      if (!element) continue;
      if (Array.isArray(element)) continue;
      if (element === this.dom.shelf) continue;

      element.addEventListener("keydown", (event) => {
        this.currentEvent = "keyboard";

        const key = keyPress(event);

        if (key === "Space" || key === "Enter") {
          preventEvent(event);
        }
      });
    }
  }

  _handleKeyup() {
    // Close the shelf on `Escape`.
    this.dom.shelf.addEventListener("keyup", (event) => {
      this.currentEvent = "keyboard";

      const key = keyPress(event);

      if (key === "Escape") {
        this.close();
      }
    });

    // Toggle the shelf on `Space` or `Enter` on the controller.
    if (this.dom.controller) {
      this.dom.controller.addEventListener("keyup", (event) => {
        this.currentEvent = "keyboard";

        const key = keyPress(event);

        if (key === "Space" || key === "Enter") {
          preventEvent(event);
          this.toggle();

          if (this.isOpen) {
            const element = selectFirstFocusableElement(this.dom.shelf);
            element.focus();
          }
        }
      });
    }

    // Toggle hover on `Space` or `Enter` on the hover controller.
    if (this.dom.hoverController) {
      this.dom.hoverController.addEventListener("keyup", (event) => {
        this.currentEvent = "keyboard";

        const key = keyPress(event);

        if (key === "Space" || key === "Enter") {
          preventEvent(event);
          this.toggleHover();
        }
      });
    }

    // Toggle lock on `Space` or `Enter` on the lock controller.
    if (this.dom.lockController) {
      this.dom.lockController.addEventListener("keyup", (event) => {
        this.currentEvent = "keyboard";

        const key = keyPress(event);

        if (key === "Space" || key === "Enter") {
          preventEvent(event);
          this.toggleLock();
        }
      });
    }

    // Shift sides on `Space` or `Enter` on the side controller.
    if (this.dom.sideController) {
      this.dom.sideController.addEventListener("keyup", (event) => {
        this.currentEvent = "keyboard";

        const key = keyPress(event);

        if (key === "Space" || key === "Enter") {
          preventEvent(event);
          this.toggleSide();
        }
      });
    }
  }

  /**
   * Sets the transition durations of the shelf as a CSS custom properties.
   *
   * The custom properties are:
   *   - `--graupl-transition-duration`,
   *   - `--graupl-open-transition-duration`, and
   *   - `--graupl-close-transition-duration`.
   *
   * The prefix of `graupl-` can be changed by setting the shelf's prefix value.
   *
   * @protected
   */
  _setTransitionDurations() {
    this.dom.shelf.style.setProperty(
      `--${this.prefix}navigation-shelf-transition-duration`,
      `${this.transitionDuration}ms`
    );

    this.dom.shelf.style.setProperty(
      `--${this.prefix}navigation-shelf-open-transition-duration`,
      `${this.openDuration}ms`
    );

    this.dom.shelf.style.setProperty(
      `--${this.prefix}navigation-shelf-close-transition-duration`,
      `${this.closeDuration}ms`
    );
  }

  _expand({ emit = true, transition = true } = {}) {
    if (this.dom.controller) {
      this.dom.controller.setAttribute("aria-expanded", "true");
    }

    // If the shelf hasn't been initialized, we need to add the initialize class
    // before opening the shelf for the first time.
    //
    // If we're dealing with transition classes, then we need to utilize
    // requestAnimationFrame to add the transition class, remove the close class,
    // add the open class, and finally remove the transition class.
    if (!this._initialized) {
      addClass(this.initializeClass, this.dom.shelf);

      requestAnimationFrame(() => {
        addClass(this.openClass, this.dom.shelf);

        removeClass(this.closeClass, this.dom.shelf);

        requestAnimationFrame(() => {
          removeClass(this.initializeClass, this.dom.shelf);
        });
      });
    } else if (transition && this.transitionClass !== "") {
      addClass(this.transitionClass, this.dom.shelf);

      requestAnimationFrame(() => {
        removeClass(this.closeClass, this.dom.shelf);

        requestAnimationFrame(() => {
          addClass(this.openClass, this.dom.shelf);

          requestAnimationFrame(() => {
            setTimeout(() => {
              removeClass(this.transitionClass, this.dom.shelf);
            }, this.openDuration);
          });
        });
      });
    } else {
      // Add the open class
      addClass(this.openClass, this.dom.shelf);

      // Remove the close class.
      removeClass(this.closeClass, this.dom.shelf);
    }

    if (emit) {
      this.dom.shelf.dispatchEvent(this._expandEvent);
    }
  }

  _collapse(emit = true, transition = true) {
    if (this.dom.controller) {
      this.dom.controller.setAttribute("aria-expanded", "false");
    }
    this.isSoftLocked = false;

    // If the shelf hasn't been initialized, we need to add the initialize class
    // before closing the shelf for the first time.
    //
    // If we're dealing with transition classes, then we need to utilize
    // requestAnimationFrame to add the transition class, remove the open class,
    // add the close class, and finally remove the transition class.
    if (!this._initialized) {
      addClass(this.initializeClass, this.dom.shelf);

      requestAnimationFrame(() => {
        addClass(this.closeClass, this.dom.shelf);

        removeClass(this.openClass, this.dom.shelf);

        requestAnimationFrame(() => {
          removeClass(this.initializeClass, this.dom.shelf);
        });
      });
    } else if (transition && this.transitionClass !== "") {
      addClass(this.transitionClass, this.dom.shelf);

      requestAnimationFrame(() => {
        removeClass(this.openClass, this.dom.shelf);

        requestAnimationFrame(() => {
          addClass(this.closeClass, this.dom.shelf);

          requestAnimationFrame(() => {
            setTimeout(() => {
              removeClass(this.transitionClass, this.dom.shelf);
            }, this.closeDuration);
          });
        });
      });
    } else {
      // Add the close class
      addClass(this.closeClass, this.dom.shelf);

      // Remove the open class.
      removeClass(this.openClass, this.dom.shelf);
    }

    if (emit) {
      this.dom.shelf.dispatchEvent(this._collapseEvent);
    }
  }

  /**
   * Applies the locked state styling and dispatches the lock event.
   *
   * @protected
   *
   * @param {Object<boolean>} [options = {}]        - Options for the lock side effects.
   * @param {boolean}         [options.emit = true] - Whether to emit the lock event.
   */
  _lock({ emit = true } = {}) {
    if (this.dom.lockController) {
      this.dom.lockController.setAttribute("aria-pressed", "true");
    }

    // Add the locked class
    addClass(this.lockedClass, this.dom.shelf);

    // Add the locked class to dependent elements.
    this.dom.dependents.forEach((dependent) => {
      addClass(this.lockedClass, dependent);
    });

    // Remove the unlocked class.
    removeClass(this.unlockedClass, this.dom.shelf);

    // Remove the unlocked class from dependent elements.
    this.dom.dependents.forEach((dependent) => {
      removeClass(this.unlockedClass, dependent);
    });

    if (emit) {
      this.dom.shelf.dispatchEvent(this._lockEvent);
    }
  }

  /**
   * Applies the unlocked state styling and dispatches the unlock event.
   *
   * @protected
   *
   * @param {Object<boolean>} [options = {}]        - Options for the unlock side effects.
   * @param {boolean}         [options.emit = true] - Whether to emit the unlock event.
   */
  _unlock({ emit = true } = {}) {
    if (this.dom.lockController) {
      this.dom.lockController.setAttribute("aria-pressed", "false");
    }

    // Add the unlocked class
    addClass(this.unlockedClass, this.dom.shelf);

    // Add the unlocked class to dependent elements.
    this.dom.dependents.forEach((dependent) => {
      addClass(this.unlockedClass, dependent);
    });

    // Remove the locked class.
    removeClass(this.lockedClass, this.dom.shelf);

    // Remove the locked class from dependent elements.
    this.dom.dependents.forEach((dependent) => {
      removeClass(this.lockedClass, dependent);
    });

    if (emit) {
      this.dom.shelf.dispatchEvent(this._unlockEvent);
    }
  }

  /**
   * Updates all dependent elements to reflect the shelf side.
   *
   * @protected
   *
   * @param {Object<boolean>} [options = {}]      - Options for shifting side.
   * @param {boolean}         [options.emit=true] - Whether to emit the shift event.
   */
  _shiftSide({ emit = true } = {}) {
    const toClass = this._classes[this.side];
    const fromClass = this._classes[this.otherSide];

    // Add the to class
    addClass(toClass, this.dom.shelf);

    // Add the to class to dependent elements.
    this.dom.dependents.forEach((dependent) => {
      addClass(toClass, dependent);
    });

    // Remove the from class.
    removeClass(fromClass, this.dom.shelf);

    // Remove the from class from dependent elements.
    this.dom.dependents.forEach((dependent) => {
      removeClass(fromClass, dependent);
    });

    if (emit) {
      this.dom.shelf.dispatchEvent(this._shiftEvent);
    }
  }

  /**
   * Enables hover mode on the shelf.
   *
   * @protected
   *
   * @param {Object<boolean>} [options = {}]        - Options for enabling hoverability.
   * @param {boolean}         [options.emit = true] - Whether to emit the enable hover event.
   */
  _enableHover({ emit = true } = {}) {
    if (this.dom.hoverController) {
      this.dom.hoverController.setAttribute("aria-pressed", "true");
    }

    addClass(this.hoverClass, this.dom.shelf);

    removeClass(this.noHoverClass, this.dom.shelf);

    if (emit) {
      this.dom.shelf.dispatchEvent(this._enableHoverEvent);
    }
  }

  /**
   * Disables hover mode on the shelf.
   *
   * @protected
   *
   * @param {Object<boolean>} [options = {}]        - Options for disabling hoverability.
   * @param {boolean}         [options.emit = true] - Whether to emit the disable hover event.
   */
  _disableHover({ emit = true } = {}) {
    if (this.dom.hoverController) {
      this.dom.hoverController.setAttribute("aria-pressed", "false");
    }

    addClass(this.noHoverClass, this.dom.shelf);

    removeClass(this.hoverClass, this.dom.shelf);

    if (emit) {
      this.dom.shelf.dispatchEvent(this._disableHoverEvent);
    }
  }

  /**
   * Opens the shelf.
   *
   * @param {Object<boolean>} [options = {}]          - Options for opening the shelf.
   * @param {boolean}         [options.force = false] - Whether to force the open action.
   */
  open({ force = false } = {}) {
    // Only open if the shelf is closed.
    if (this.isOpen && !force) return;

    this._expand();

    // Set the open flag.
    this._open = true;
  }

  /**
   * Closes the shelf and optionally preserves the committed lock state.
   *
   * @param {Object<boolean>} [options = {}]                - Options for closing the shelf.
   * @param {boolean}         [options.force = false]       - Whether to force the close action.
   * @param {boolean}         [options.preserveLock = true] - Whether to keep the current lock preference unchanged.
   */
  close({ force = false, preserveLock = true } = {}) {
    // Only close if the shelf is open.
    if (!this.isOpen && !force) return;

    this.unlock({ updateLock: !preserveLock });
    this._collapse();

    // Set the open flag.
    this._open = false;
  }

  /**
   * Toggles the shelf open or closed.
   *
   * @param {Object<boolean>} [options = {}]                - Options for toggling the shelf.
   * @param {boolean}         [options.force = false]       - Whether to force the transition.
   * @param {boolean}         [options.preserveLock = true] - Whether to keep the current lock preference unchanged when closing.
   */
  toggle({ force = false, preserveLock = true } = {}) {
    if (this.isOpen) {
      this.close({ force, preserveLock });
    } else {
      this.open({ force });
    }
  }

  /**
   * Locks the shelf and ensures it remains open.
   *
   * @param {Object<boolean>} [options = {}]        - Options for locking the shelf.
   * @param {boolean}         [options.emit = true] - Whether to force the lock even if already locked.
   */
  lock({ force = false } = {}) {
    // Only lock if the shelf is unlocked.
    if (this.isLocked && !force) return;

    this._locked.value = true;
    this._lock();

    // Commit the locked preference.
    this._locked.commit();

    // Open the shelf.
    this.open({ force: true });
  }

  /**
   * Unlocks the shelf.
   *
   * @param {Object<boolean>} [options = {}]              - Options for unlocking the shelf.
   * @param {boolean}         [options.updateLock = true] - Whether to commit the unlocked state as the new preference.
   */
  unlock({ updateLock = true } = {}) {
    // Only unlock if the shelf is locked.
    if (!this.isLocked) {
      this._locked.value = false;

      if (updateLock) {
        this._locked.commit();
      }

      return;
    }

    this._locked.value = false;
    this._unlock();

    if (updateLock) {
      this._locked.commit();
    }
  }

  toggleLock() {
    if (this.isLocked) {
      this.unlock();
    } else {
      this.lock();
    }
  }

  toLeft() {
    if (this.side === "left") return;

    this._side = "left";
    this._otherSide = "right";
    this._shiftSide();
  }

  toRight() {
    if (this.side === "right") return;

    this._side = "right";
    this._otherSide = "left";
    this._shiftSide();
  }

  toggleSide() {
    if (this.side === "left") {
      this.toRight();
    } else {
      this.toLeft();
    }
  }

  enableHover() {
    if (this.hover) return;

    this._enableHover();

    this._hover = true;
  }

  disableHover() {
    if (!this.hover) return;

    this._disableHover();

    this._hover = false;
  }

  toggleHover() {
    if (this.hover) {
      this.disableHover();
    } else {
      this.enableHover();
    }
  }
}

export default NavigationShelf;
