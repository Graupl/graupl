/**
 * @file
 * The carousel class.
 */

import { addClass, removeClass } from "../domHelpers.js";
import { preventEvent, keyPress } from "../eventHandlers.js";
import {
  isQuerySelector,
  isTag,
  isValidClassList,
  isValidInstance,
  isValidType,
} from "../validate.js";

class Carousel {
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
  _dom = {
    carousel: null,
    carouselItems: [],
    carouselItemContainer: null,
    carouselControls: [],
    carouselControlContainer: null,
    carouselTabs: [],
    carouselTabContainer: null,
    autoplay: null,
    next: null,
    previous: null,
  };

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
  _selectors = {
    carouselItems: "",
    carouselItemContainer: "",
    carouselControls: "",
    carouselControlContainer: "",
    carouselTabs: "",
    carouselTabContainer: "",
    autoplay: "",
    next: "",
    previous: "",
  };

  /**
   * The class(es) to apply when a carousel item is active.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _activeClass = "active";

  /**
   * The class(es) to apply to a carousel item that is the previously active item.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _previousClass = "previous";

  /**
   * The class(es) to apply to a carousel item that is the next active item.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _nextClass = "next";

  /**
   * The class(es) to apply to the autoplay button when the carousel is paused.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _playClass = "play";

  /**
   * The class(es) to apply to the autoplay button when the carousel is playing.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _pauseClass = "pause";

  /**
   * The index of the currently active carousel item.
   *
   * @protected
   *
   * @type {number}
   */
  _currentItem = 0;

  /**
   * A flag to indicate if the carousel is currently playing.
   *
   * @protected
   *
   * @type {boolean}
   */
  _autoplay = true;

  /**
   * A variable to delay transition slides in milliseconds.
   *
   * @protected
   *
   * @type {number}
   */
  _transitionDelay = 10000;

  /**
   * The duration time (in milliseconds) for the transition between carousel items.
   *
   * @protected
   *
   * @type {number}
   */
  _transitionDuration = 500;

  /**
   * The label for the autoplay button when the carousel is paused.
   *
   * @protected
   *
   * @type {string}
   */
  _playText = "Play";

  /**
   * The label for the autoplay button when the carousel is playing.
   *
   * @protected
   *
   * @type {string}
   */
  _pauseText = "Pause";

  /**
   * The current action being performed by the carousel.
   *
   * @protected
   *
   * @type {string}
   */
  _currentAction = "next";

  /**
   * The stored interval callback for autoplaying the carousel.
   *
   * @protected
   *
   * @type {?Function}
   */
  _autoplayInterval = null;

  /**
   * The prefix to use for CSS custom properties.
   *
   * @protected
   *
   * @type {string}
   */
  _prefix = "graupl-";

  /**
   * An array of error messages generated by the carousel.
   *
   * @protected
   *
   * @type {string[]}
   */
  _errors = [];

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
    carouselElement,
    carouselItemSelector = ".carousel-item",
    carouselItemContainerSelector = ".carousel-item-container",
    carouselControlSelector = ".carousel-control",
    carouselControlContainerSelector = ".carousel-control-container",
    carouselTabSelector = ".carousel-tab",
    carouselTabContainerSelector = ".carousel-tab-container",
    autoplaySelector = ".autoplay",
    nextSelector = ".next",
    previousSelector = ".previous",
    activeClass = "active",
    previousClass = "previous",
    nextClass = "next",
    playClass = "play",
    pauseClass = "pause",
    autoplay = true,
    transitionDelay = 10000,
    transitionDuration = 500,
    playText = "Play",
    pauseText = "Pause",
    prefix = "graupl-",
    initialize = false,
  }) {
    // Set DOM elements.
    this._dom.carousel = carouselElement;

    // Set query selectors.
    this._selectors.carouselItems = carouselItemSelector;
    this._selectors.carouselItemContainer = carouselItemContainerSelector;
    this._selectors.carouselControls = carouselControlSelector;
    this._selectors.carouselControlContainer = carouselControlContainerSelector;
    this._selectors.carouselTabs = carouselTabSelector;
    this._selectors.carouselTabContainer = carouselTabContainerSelector;
    this._selectors.autoplay = autoplaySelector;
    this._selectors.next = nextSelector;
    this._selectors.previous = previousSelector;

    // Set class names.
    this._activeClass = activeClass || "";
    this._previousClass = previousClass || "";
    this._nextClass = nextClass || "";
    this._playClass = playClass || "";
    this._pauseClass = pauseClass || "";

    // Set flags.
    this._autoplay = autoplay;

    // Set transition options.
    this._transitionDelay = transitionDelay;
    this._transitionDuration = transitionDuration;

    // Set labels.
    this._playText = playText || "";
    this._pauseText = pauseText || "";

    // Set prefix.
    this._prefix = prefix || "";

    if (initialize) {
      this.initialize();
    }
  }

  /**
   * Initializes the carousel.
   */
  initialize() {
    try {
      if (!this._validate()) {
        throw new Error(
          `Graupl Carousel: cannot initialize carousel. The following errors have been found:\n - ${this.errors.join(
            "\n - "
          )}`
        );
      }

      // Set DOM elements.
      this._setDOMElements();

      // Set ids.
      this._setIds();

      // Set aria attributes.
      this._setAriaAttributes();

      // Activate the first item.
      this.activateFirstItem();

      // Set the custom props.
      this._setTransitionDuration();

      // Handle events.
      this._handleAutoplay();
      this._handleFocus();
      this._handleClick();
      this._handleHover();
      this._handleKeydown();
      this._handleKeyup();
    } catch (error) {
      console.error(error);
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

  set currentItem(value) {
    isValidType("number", { value });

    if (value === this.currentItem) {
      return;
    }

    if (value < 0) {
      this._currentItem = 0;
    } else if (value >= this.dom.carouselItems.length) {
      this._currentItem = this.dom.carouselItems.length - 1;
    } else {
      this._currentItem = value;
    }

    // Keep the aria selected in sync with the current item.
    const tabs = this._dom.carousel.querySelectorAll(
      this.selectors.carouselTab
    );
    if (tabs) {
      this.dom.carouselItems.forEach((item, index) => {
        item.setAttribute("aria-selected", index === this._currentItem);
      });
    }
  }

  set autoplay(value) {
    isValidType("boolean", { value });

    if (this._autoplay !== value) {
      this._autoplay = value;
    }
  }

  set activeClass(value) {
    isValidClassList({ activeClass: value });

    if (this._activeClass !== value) {
      this._activeClass = value;
    }
  }

  set previousClass(value) {
    isValidClassList({ previousClass: value });

    if (this._previousClass !== value) {
      this._previousClass = value;
    }
  }

  set nextClass(value) {
    isValidClassList({ nextClass: value });

    if (this._nextClass !== value) {
      this._nextClass = value;
    }
  }

  set playClass(value) {
    isValidClassList({ playClass: value });

    if (this._playClass !== value) {
      this._playClass = value;
    }
  }

  set pauseClass(value) {
    isValidClassList({ pauseClass: value });

    if (this._pauseClass !== value) {
      this._pauseClass = value;
    }
  }

  set transitionDelay(value) {
    isValidType("number", { value });

    if (value !== this.transitionDelay && value >= 0) {
      this._currentItem = value;
    }
  }

  set transitionDuration(value) {
    isValidType("number", { value });

    if (this._transitionDuration !== value && value >= 0) {
      this._transitionDuration = value;
    }
  }

  set playText(value) {
    isValidType("string", { value });

    if (this._playText !== value) {
      this._playText = value;
    }
  }

  set pauseText(value) {
    isValidType("string", { value });

    if (this._pauseText !== value) {
      this._pauseText = value;
    }
  }

  set prefix(value) {
    isValidType("string", { value });

    if (this._prefix !== value) {
      this._prefix = value;
    }
  }

  /**
   * Validates all aspects of the carousel to ensure proper functionality.
   *
   * @protected
   *
   * @return {boolean} - The results of the validation.
   */
  _validate() {
    let check = true;

    // HTML element checks.
    const htmlElementChecks = isValidInstance(HTMLElement, {
      carousel: this.dom.carousel,
    });

    if (!htmlElementChecks) {
      this._errors.push(htmlElementChecks.message);
      check = false;
    }

    // Query selector checks.
    const querySelectorChecks = isQuerySelector({
      carouselItemsSelector: this._selectors.carouselItems,
      carouselItemContainerSelector: this._selectors.carouselItemContainer,
      carouselControlsSelector: this._selectors.carouselControls,
      carouselControlContainerSelector:
        this._selectors.carouselControlContainer,
      carouselTabsSelector: this._selectors.carouselTabs,
      carouselTabContainerSelector: this._selectors.carouselTabContainer,
      autoplaySelector: this._selectors.autoplay,
      nextSelector: this._selectors.next,
      previousSelector: this._selectors.previous,
    });

    if (!querySelectorChecks) {
      this._errors.push(querySelectorChecks.message);
      check = false;
    }

    // Autoplay checks.
    const autoplayChecks = isValidType("boolean", { autoplay: this.autoplay });

    if (!autoplayChecks) {
      this._errors.push(autoplayChecks.message);
      check = false;
    }

    // Check delay is a valid value.
    const delayCheck = isValidType("number", {
      transitionDelay: this._transitionDelay,
    });

    if (!delayCheck) {
      this._errors.push(delayCheck.message);
      check = false;
    }

    // Check duration is a valid value.
    const durationCheck = isValidType("number", {
      transitionDuration: this._transitionDuration,
    });

    if (!durationCheck) {
      this._errors.push(durationCheck.message);
      check = false;
    }

    // Active class checks.
    if (this._activeClass !== "") {
      const activeClassChecks = isValidClassList({
        activeClass: this._activeClass,
      });

      if (!activeClassChecks) {
        this._errors.push(activeClassChecks.message);
        check = false;
      }
    }

    // Previous class checks.
    if (this._previousClass !== "") {
      const previousClassChecks = isValidClassList({
        previousClass: this._previousClass,
      });

      if (!previousClassChecks) {
        this._errors.push(previousClassChecks.message);
        check = false;
      }
    }

    // Next class checks.
    if (this._nextClass !== "") {
      const nextClassChecks = isValidClassList({
        nextClass: this._nextClass,
      });

      if (!nextClassChecks) {
        this._errors.push(nextClassChecks.message);
        check = false;
      }
    }

    // Play class checks.
    if (this._playClass !== "") {
      const playClassChecks = isValidClassList({
        playClass: this._playClass,
      });

      if (!playClassChecks) {
        this._errors.push(playClassChecks.message);
        check = false;
      }
    }

    // Pause class checks.
    if (this._pauseClass !== "") {
      const pauseClassChecks = isValidClassList({
        pauseClass: this._pauseClass,
      });

      if (!pauseClassChecks) {
        this._errors.push(pauseClassChecks.message);
        check = false;
      }
    }

    // Play text checks.
    if (this._playText !== "") {
      const playTextChecks = isValidType("string", {
        playText: this._playText,
      });

      if (!playTextChecks) {
        this._errors.push(playTextChecks.message);
        check = false;
      }
    }

    // Pause text checks.
    if (this._pauseText !== "") {
      const pauseTextChecks = isValidType("string", {
        pauseText: this._pauseText,
      });

      if (!pauseTextChecks) {
        this._errors.push(pauseTextChecks.message);
        check = false;
      }
    }

    return check;
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
  _setDOMElementType(elementType, base = this.dom.carousel, overwrite = true) {
    if (typeof this.selectors[elementType] === "string") {
      if (elementType === "carousel") {
        throw new Error(
          `Graupl Carousel: "${elementType}" element cannot be set through _setDOMElementType.`
        );
      }

      if (base !== this.dom.carousel) isValidInstance(HTMLElement, { base });

      if (Array.isArray(this._dom[elementType])) {
        // Get all the elements matching the selector in the base.
        const domElements = Array.from(
          base.querySelectorAll(this.selectors[elementType])
        );

        // Filter the elements so only direct children of the base are kept.
        const filteredElements = domElements.filter(
          (item) => item.parentElement === base
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
        `Graupl Carousel: "${elementType}" is not a valid element type within the carousel.`
      );
    }
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
  _resetDOMElementType(elementType) {
    if (typeof this.selectors[elementType] === "string") {
      if (elementType === "carousel") {
        throw new Error(
          `Graupl Carousel: "${elementType}" element cannot be reset through _resetDOMElementType.`
        );
      }

      if (Array.isArray(this._dom[elementType])) {
        this._dom[elementType] = [];
      } else {
        this._dom[elementType] = null;
      }
    } else {
      throw new Error(
        `Graupl Carousel: "${elementType}" is not a valid element type within the carousel.`
      );
    }
  }

  /**
   * Sets all DOM elements within the carousel.
   *
   * Utilizes _setDOMElementType and _resetDOMElementType.
   *
   * @protected
   */
  _setDOMElements() {
    this._setDOMElementType("carouselItemContainer");
    this._setDOMElementType("carouselControlContainer");
    this._setDOMElementType("carouselTabContainer");

    if (this.dom.carouselItemContainer) {
      this._setDOMElementType("carouselItems", this.dom.carouselItemContainer);
    }
    if (this.dom.carouselControlContainer) {
      this._setDOMElementType(
        "carouselControls",
        this.dom.carouselControlContainer
      );
      this._setDOMElementType("autoplay", this.dom.carouselControlContainer);
      this._setDOMElementType("next", this.dom.carouselControlContainer);
      this._setDOMElementType("previous", this.dom.carouselControlContainer);
    }

    if (this._dom.carouselTabContainer) {
      this._setDOMElementType("carouselTabs", this.dom.carouselTabContainer);
    }
  }

  /**
   * Sets the ids for the carousel items and tabs.
   */
  _setIds() {
    const randomString = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substring(0, 10);

    this.dom.carouselItems.forEach((item, index) => {
      item.id = item.id || `carousel-item-${randomString}-${index}`;
    });

    this.dom.carouselTabs.forEach((tab, index) => {
      tab.id = tab.id || `carousel-tab-${randomString}-${index}`;
    });
  }

  /**
   * Sets the aria attributes for the carousel.
   */
  _setAriaAttributes() {
    // Make sure the carousel has a proper role.
    // Sections and role="region" are acceptable in certain cases, so
    // we only need to fallback to role="group" if neither of those are present.
    if (
      !isTag("section", { carousel: this.dom.carousel }) &&
      !this.dom.carousel.getAttribute("role") !== "region"
    ) {
      this.dom.carousel.setAttribute("role", "group");
    }

    // Set the role description for the carousel.
    this._dom.carousel.setAttribute("aria-roledescription", "carousel");

    if (this.dom.carouselTabContainer) {
      this.dom.carouselTabContainer.setAttribute("role", "tablist");
    }

    this.dom.carouselTabs.forEach((tab, index) => {
      if (!isTag("button", { tab: tab })) {
        tab.setAttribute("role", "button");
      }

      tab.setAttribute("aria-selected", index === 0);
      tab.setAttribute("aria-controls", this.dom.carouselItems[index].id);
    });
  }

  /**
   * Sets the interval for autoplaying the carousel.
   *
   * @protected
   */
  _setInterval() {
    this._clearInterval();

    this._autoplayInterval = setInterval(() => {
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
    if (this.autoplay) {
      addClass(this.pauseClass, this.dom.autoplay);
      removeClass(this.playClass, this.dom.autoplay);

      this.dom.autoplay.setAttribute("aria-label", this.pauseText);
      this.dom.carousel.setAttribute("aria-live", "off");

      this._setInterval();
    } else {
      addClass(this.playClass, this.dom.autoplay);
      removeClass(this.pauseClass, this.dom.autoplay);

      this.dom.autoplay.setAttribute("aria-label", this.playText);
      this.dom.carousel.setAttribute("aria-live", "polite");

      this._clearInterval();
    }
  }

  /**
   * Handles the focus events throughout the carousel for proper use.
   *
   * - Adds a `focusin` listener to the carousel element to pause autoplay.
   * - Adds a `focusout` listener to the carousel element to resume autoplay.
   */
  _handleFocus() {
    // Pause autoplay when anything in the carousel is focused.
    this.dom.carousel.addEventListener("focusin", () => {
      if (this.autoplay) {
        this._clearInterval();
      }
    });

    this.dom.carousel.addEventListener("focusout", () => {
      if (this.autoplay) {
        this._setInterval();
      }
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
    });

    this.dom.previous.addEventListener("pointerup", () => {
      this.activatePreviousItem();
    });

    this.dom.autoplay.addEventListener("pointerup", () => {
      this.toggleAutoplay();
    });

    this.dom.carouselTabs.forEach((tab, index) => {
      tab.addEventListener("pointerup", () => {
        if (this.currentItem > index) {
          this._currentAction = "previous";
        }

        this.activateItem(index);
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
    // Pause autoplay when anything in the carousel is hovered.
    this.dom.carousel.addEventListener("pointerover", () => {
      if (this.autoplay) {
        this._clearInterval();
      }
    });

    this.dom.carousel.addEventListener("pointerleave", () => {
      if (this.autoplay) {
        this._setInterval();
      }
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
    this.dom.carouselControls.forEach((control) => {
      control.addEventListener("keydown", (event) => {
        const key = keyPress(event);

        switch (key) {
          case "Space":
          case "Enter":
            // Prevent the default action of the event.
            preventEvent(event);

            break;
        }
      });
    });

    this.dom.carouselTabs.forEach((tab) => {
      tab.addEventListener("keydown", (event) => {
        const key = keyPress(event);

        switch (key) {
          case "Space":
          case "Enter":
            // Prevent the default action of the event.
            preventEvent(event);

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
    // Activate the next item if the space or enter key on the next control.
    this.dom.next.addEventListener("keyup", (event) => {
      const key = keyPress(event);

      switch (key) {
        case "Space":
        case "Enter":
          this.activateNextItem();

          // Prevent the default action of the event.
          preventEvent(event);

          break;
      }
    });

    // Activate the previous item if the space or enter key on the previous control.
    this.dom.previous.addEventListener("keyup", (event) => {
      const key = keyPress(event);

      switch (key) {
        case "Space":
        case "Enter":
          this.activatePreviousItem();

          // Prevent the default action of the event.
          preventEvent(event);

          break;
      }
    });

    // Toggle autoplay if the space or enter key on the autoplay control.
    this.dom.autoplay.addEventListener("keyup", (event) => {
      const key = keyPress(event);

      switch (key) {
        case "Space":
        case "Enter":
          this.toggleAutoplay();

          // Prevent the default action of the event.
          preventEvent(event);

          break;
      }
    });

    // Activate the item if the space or enter key on the tab control.
    this.dom.carouselTabs.forEach((tab, index) => {
      tab.addEventListener("keyup", (event) => {
        const key = keyPress(event);

        switch (key) {
          case "Space":
          case "Enter":
            this.activateItem(index);

            // Prevent the default action of the event.
            preventEvent(event);

            break;
        }
      });
    });
  }

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
    addClass(this.activeClass, this.currentCarouselItem);

    if (this.currentCarouselTab) {
      this.currentCarouselTab.setAttribute("aria-selected", true);
      addClass(this.activeClass, this.currentCarouselTab);
    }
  }

  /**
   * Deactivates the current carousel item.
   *
   * @public
   */
  deactivateCurrentItem() {
    removeClass(this.activeClass, this.currentCarouselItem);

    if (this.currentCarouselTab) {
      this.currentCarouselTab.setAttribute("aria-selected", false);
      removeClass(this.activeClass, this.currentCarouselTab);
    }
  }

  /**
   * Activates the carousel item at a given index.
   *
   * @public
   *
   * @param {number} index - The index of the carousel item to activate.
   */
  activateItem(index) {
    const currentIndex = this.currentItem;

    this.dom.carousel.dataset.grauplAction = this._currentAction;

    if (this.autoplay) {
      this._clearInterval();
    }

    addClass(this.previousClass, this.currentCarouselItem);
    addClass(this.nextClass, this.dom.carouselItems[index]);

    requestAnimationFrame(() => {
      this.deactivateCurrentItem();
      this.currentItem = index;
      this.activateCurrentItem();

      requestAnimationFrame(() => {
        setTimeout(() => {
          removeClass(this.previousClass, this.dom.carouselItems[currentIndex]);
          removeClass(this.nextClass, this.currentCarouselItem);
        }, this.transitionDuration);
      });
    });

    if (this.autoplay) {
      this._setInterval();
    }
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
    this._currentAction = "next";

    if (this.currentItem + 1 >= this.dom.carouselItems.length) {
      this.activateFirstItem();
    } else {
      this.activateItem(this.currentItem + 1);
    }
  }

  /**
   * Activates the previous carousel item.
   *
   * @public
   */
  activatePreviousItem() {
    this._currentAction = "previous";

    if (this.currentItem - 1 < 0) {
      this.activateLastItem();
    } else {
      this.activateItem(this.currentItem - 1);
    }
  }

  /**
   * Toggles autoplay on the carousel.
   *
   * @public
   */
  toggleAutoplay() {
    this.autoplay = !this.autoplay;

    this._handleAutoplay();
  }
}

export default Carousel;
