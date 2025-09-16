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
   * @type {boolean}
   */
  _locked = false;

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
  }) {
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
    this._hover = hover;
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
   * The current state of the shelf's focus.
   *
   * @type {string}
   *
   * @see _focusState
   */
  get focusState() {
    return this._focusState;
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
   * @readonly
   *
   * @type {boolean}
   *
   * @see _locked
   */
  get isLocked() {
    return this._locked;
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

  /**
   * The open state on the shelf.
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

  set dependentLockedClass(value) {
    isValidClassList({ dependentLockedClass: value });
    if (this._classes.dependentLocked !== value) {
      this._classes.dependentLocked = value;
    }
  }

  set dependentUnlockedClass(value) {
    isValidClassList({ dependentUnlockedClass: value });
    if (this._classes.dependentUnlocked !== value) {
      this._classes.dependentUnlocked = value;
    }
  }

  set openClass(value) {
    isValidClassList({ openClass: value });

    if (this._classes.open !== value) {
      this._classes.open = value;
    }
  }

  set closeClass(value) {
    isValidClassList({ closeClass: value });

    if (this._classes.close !== value) {
      this._classes.close = value;
    }
  }

  set transitionClass(value) {
    isValidClassList({ transitionClass: value });

    if (this._classes.transition !== value) {
      this._classes.transition = value;
    }
  }

  set initializeClass(value) {
    isValidClassList({ initializeClass: value });

    if (this._classes.initialize !== value) {
      this._classes.initialize = value;
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

  set focusState(value) {
    isValidState({ value });

    if (this._focusState !== value) {
      this._focusState = value;
    }
  }

  set currentEvent(value) {
    isValidEvent({ value });

    if (this._currentEvent !== value) {
      this._currentEvent = value;
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

  set key(value) {
    isValidType("string", { value });

    if (this._key !== value) {
      this._key = value;
    }
  }

  set isSoftLocked(value) {
    isValidType("boolean", { value });

    if (this._softLocked !== value) {
      this._softLocked = value;
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

    // Hover check.
    const hoverCheck = isValidType("boolean", { hover: this._hover });

    if (!hoverCheck.status) {
      this._errors.push(hoverCheck.error.message);
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
        this._locked ? "true" : "false"
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
      this.close();
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
        this.toggle();

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

  _expand(emit = true, transition = true) {
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

  _lock(emit = true) {
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

  _unlock(emit = true) {
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

  _shiftSide(emit = true) {
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

  _enableHover(emit = true) {
    if (this.dom.hoverController) {
      this.dom.hoverController.setAttribute("aria-pressed", "true");
    }

    addClass(this.hoverClass, this.dom.shelf);

    removeClass(this.noHoverClass, this.dom.shelf);

    if (emit) {
      this.dom.shelf.dispatchEvent(this._enableHoverEvent);
    }
  }

  _disableHover(emit = true) {
    if (this.dom.hoverController) {
      this.dom.hoverController.setAttribute("aria-pressed", "false");
    }

    addClass(this.noHoverClass, this.dom.shelf);

    removeClass(this.hoverClass, this.dom.shelf);

    if (emit) {
      this.dom.shelf.dispatchEvent(this._disableHoverEvent);
    }
  }

  open(force = false) {
    // Only open if the shelf is closed.
    if (this.isOpen && !force) return;

    this._expand();

    // Set the open flag.
    this._open = true;
  }

  close(force = false) {
    // Only close if the shelf is open.
    if (!this.isOpen && !force) return;

    this.unlock();
    this._collapse();

    // Set the open flag.
    this._open = false;
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  lock() {
    // Only lock if the shelf is unlocked.
    if (this.isLocked) return;

    this._lock();

    // Set the locked flag.
    this._locked = true;

    // Open the shelf.
    this.open(true);
  }

  unlock() {
    // Only unlock if the shelf is locked.
    if (!this.isLocked) return;

    this._unlock();

    // Set the locked flag.
    this._locked = false;
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
