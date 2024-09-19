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
   * @param {?(string|string[])} [options.playClass = play]                                               - The class(es) to apply to the autoplay button when the carousel is paused.
   * @param {?(string|string[])} [options.pauseClass = pause]                                             - The class(es) to apply to the autoplay button when the carousel is playing.
   * @param {boolean}            [options.autoplay = true]                                                - A flag to indicate if the carousel should autoplay.
   * @param {number}             [options.transitionDelay = 10000]                                        - A flag to initialize the carousel immediately upon creation.
   * @param {?string}            [options.playText = Play]                                                - The text to use for the play button.
   * @param {?string}            [options.pauseText = Pause]                                              - The text to use for the pause button.
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
    playClass = "play",
    pauseClass = "pause",
    autoplay = true,
    initialize = false,
    transitionDelay = 10000,
    playText = "Play",
    pauseText = "Pause",
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
    this._playClass = playClass || "";
    this._pauseClass = pauseClass || "";

    // Set flags.
    this._autoplay = autoplay;

    // Set delay.
    this._transitionDelay = transitionDelay;

    // Set labels.
    this._playText = playText || "";
    this._pauseText = pauseText || "";

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

      console.log(this);

      // Set aria attributes.
      this._setAriaAttributes();

      // Handle events.
      this._handleClick();
      this._handleFocus();
      this._handleAutoplay();
      this._handleKeyup();
    } catch (error) {
      console.error(error);
    }
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

    // Ensure the autoplay button has the appropriate label.
    if (this.dom.autoplay) {
      if (this.autoplay) {
        this.dom.autoplay.setAttribute("aria-label", this.pauseText);
      } else {
        this.dom.autoplay.setAttribute("aria-label", this.playText);
      }
    }

    const tabList = this._dom.carousel.querySelector(
      this.selectors.carouselTabList
    );
    tabList?.setAttribute("aria-label", "Slides");
    tabList?.setAttribute("role", "tablist");

    const tabs = this._dom.carousel.querySelectorAll(
      this.selectors.carouselTab
    );

    if (tabs) {
      tabs.forEach((tab, index) => {
        tab.setAttribute("role", "button");
        tab.setAttribute("aria-selected", index === 0);
        tab.setAttribute("aria-controls", `carousel-item-${index}`);
      });
    }

    this._dom.carouselItems.forEach((item, index) => {
      // TODO: I probably need a better way to get the ids for the carousel items.
      item.setAttribute("id", `carousel-item-${index}`);
    });

    const carouselItemContainer = this._dom.carousel.querySelector(
      this.selectors.carouselItemContainer
    );
    if (carouselItemContainer) {
      carouselItemContainer.setAttribute("aria-live", "off");
      carouselItemContainer.setAttribute("aria-atomic", "false");
      carouselItemContainer.setAttribute("tabindex", "0");
    }

    this._dom.carouselItems.forEach((item, index) => {
      item.setAttribute(
        "aria-label",
        `${index + 1} of ${this.dom.carouselItems.length}`
      );
      if (index === 0) {
        addClass(this.activeClass, item);
      }
    });
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

    if (value === this.transitionDelay) {
      return;
    }

    if (value >= 0) {
      this._currentItem = value;
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

  _setInterval() {
    this._autoplayInterval = setInterval(() => {
      this.activateNextItem();
    }, this.transitionDelay);
  }

  _clearInterval() {
    clearInterval(this._autoplayInterval);
  }

  /**
   * Handles the click events throughout the carousel.
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

    const tabs = this._dom.carousel.querySelectorAll(
      this.selectors.carouselTab
    );

    if (tabs) {
      tabs.forEach((tab, index) => {
        tab.addEventListener("pointerup", () => {
          this.activateItem(index);
        });
      });
    }
  }

  /**
   * Handles keyup events throughout the carousel item for proper use.
   *
   * - Adds a `keyup` listener to the buttons (if it exists).
   *   - Clicks the button on "Space" or "Enter".
   */
  _handleKeyup() {
    // TODO: Implement the tab pattern for the tab indicators.
    const buttons = [this.dom.next, this.dom.previous, this.dom.autoplay];

    buttons.forEach((button) =>
      button.addEventListener("keyup", (event) => {
        const key = keyPress(event);

        switch (key) {
          case "Space":
          case "Enter":
            // Cause a pointer up event on a button if it is focused and has space or enter pressed.
            event.target.dispatchEvent(new PointerEvent("pointerup"));
            break;
        }
      })
    );
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

  _handleFocus() {
    // Pause autoplay when a button is focused.
    const buttons = [this.dom.next, this.dom.previous, this.dom.autoplay];

    // TODO: This needs to happen on hover as well.
    buttons.forEach((button) =>
      button.addEventListener("focus", () => {
        this._clearInterval();
      })
    );

    buttons.forEach((button) =>
      button.addEventListener("focusout", () => {
        this._setInterval();
      })
    );

    const tabs = this._dom.carousel.querySelectorAll(
      this.selectors.carouselTab
    );

    if (tabs) {
      tabs.forEach((tab, index) => {
        tab.addEventListener("focus", () => {
          this._clearInterval();
          // TODO: It is optional to set the active panel based on focus.
          this.activateItem(index);
        });

        tab.addEventListener("focusout", () => {
          this._handleAutoplay();
        });
      });
    }
  }

  /**
   * Activates the current carousel item.
   *
   * @public
   */
  activateCurrentItem() {
    addClass(this.activeClass, this.currentCarouselItem);
  }

  /**
   * Deactivates the current carousel item.
   *
   * @public
   */
  deactivateCurrentItem() {
    removeClass(this.activeClass, this.currentCarouselItem);
  }

  /**
   * Activates the carousel item at a given index.
   *
   * @public
   *
   * @param {number} index - The index of the carousel item to activate.
   */
  activateItem(index) {
    this.dom.carousel.dataset.grauplAction = this._currentAction;

    if (this.autoplay) {
      this._clearInterval();
    }

    this.deactivateCurrentItem();
    this.currentItem = index;
    this.activateCurrentItem();

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
    this._handleAutoplay();
    this.autoplay = !this.autoplay;
  }
}

export default Carousel;
