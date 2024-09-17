/**
 * @file
 * The carousel class.
 */

import { addClass, removeClass } from "../domHelpers.js";
import { preventEvent, keyPress } from "../eventHandlers.js";
import {
  isQuerySelector,
  isValidClassList,
  isValidInstance,
  isValidType,
} from "../validate.js";

class Carousel {
  /**
   * Contructs a new `Carousel`.
   *
   * @param {object}          options                                         - The options for the generated carousel.
   * @param {HTMLElement}     options.carouselElement                         - The carousel element in the DOM.
   * @param {HTMLElement[]}   [options.carouselItems = []]                     - The carousel items in the DOM.
   * @param {?HTMLElement}    [options.autoplayButton = null]                 - The autoplay button for the carousel in the DOM.
   * @param {?HTMLElement}    [options.nextButton = null]                     - The next button for the carousel in the DOM.
   * @param {?HTMLElement}    [options.previousButton = null]                 - The previous button for the carousel in the DOM.
   * @param {string}          [options.carouselControlContainerSelector = .carousel-control-container] - The query selector string for carousel items.
   * @param {string}          [options.carouselControlSelector = .carousel-control] - The query selector string for carousel items.
   * @param {string}          [options.carouselTabContainerSelector = .carousel-tab-container] - The query selector string for carousel items.
   * @param {string}          [options.carouselTabListSelector = .carousel-tab-list] - The query selector string for carousel items.
   * @param {string}          [options.carouselTabSelector = .carousel-tab] - The query selector string for carousel items.
   * @param {string}          [options.carouselItemsContainerSelector = .carousel-item-container] - The query selector string for carousel items.
   * @param {string|string[]} [options.activeClass = active]                  - The class(es) to apply when a carousel item is active.
   * @param {string|string[]} [options.playClass = play]                      - The class(es) to apply to the autoplay button when the carousel is paused.
   * @param {string|string[]} [options.pauseClass = pause]                    - The class(es) to apply to the autoplay button when the carousel is playing.
   * @param {boolean}         [options.autoplay = true]                       - A flag to indicate if the carousel should autoplay.
   * @param {boolean}         [options.initialize = false]                    - A flag to initialize the carousel immediately upon creation.
   * @param {Number}          [options.transitionDelay = 10000]                    - A flag to initialize the carousel immediately upon creation.
   */
  constructor({
    carouselElement,
    carouselItems = [],
    autoplayButton = null,
    nextButton = null,
    previousButton = null,
    carouselControlContainerSelector = ".carousel-control-container",
    carouselControlSelector = ".carousel-control",
    carouselTabContainerSelector = ".carousel-tab-container",
    carouselTabListSelector = ".carousel-tab-list",
    carouselTabSelector = ".carousel-tab",
    carouselItemsContainerSelector = ".carousel-item-container",
    activeClass = "active",
    playClass = "play",
    pauseClass = "pause",
    autoplay = true,
    initialize = false,
    transitionDelay = 10000,
    autoPlayButtonLabel = "Auto Play",
    nextButtonLabel = "Next",
    prevButtonLabel = "Prev",
  }) {
    // Set DOM elements.
    this._dom.carousel = carouselElement;
    this._dom.carouselItems = carouselItems;
    this._dom.autoplayButton = autoplayButton;
    this._dom.nextButton = nextButton;
    this._dom.previousButton = previousButton;

    // Set query selectors.
    this._selectors.carouselControlContainer = carouselControlContainerSelector;
    this._selectors.carouselControl = carouselControlSelector;
    this._selectors.carouselTabContainer = carouselTabContainerSelector;
    this._selectors.carouselTabList = carouselTabListSelector;
    this._selectors.carouselTab = carouselTabSelector;
    this._selectors.carouselItemsContainer = carouselItemsContainerSelector;

    // Set class names.
    this._activeClass = activeClass;
    this._playClass = playClass;
    this._pauseClass = pauseClass;

    // Set flags.
    this._autoplay = autoplay;

    // Set delay.
    this._transitionDelay = transitionDelay;

    // Set aria labels.
    this._autoPlayButtonLabel = autoPlayButtonLabel;
    this._nextButtonLabel = nextButtonLabel;
    this._prevButtonLabel = prevButtonLabel;

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

      this._handleClick();
      this._handleCarouselItemsInit();

      // Add initial class to play button.
      addClass(this.autoplay ? this.pauseClass : this.playClass, this.dom.autoplayButton);
      this._handleFocus();
      this._handleAutoplay();
      this._handleKeyup();
    } catch (error) {
      console.error(error);
    }
  }

  _handleCarouselItemsInit() {
    const carouselTagName = this._dom.carousel.tagName;

    if (carouselTagName !== "SECTION" && !this.carousel.getAttribute("role")) {
      this.carousel.setAttribute("role", "group");
    }

    this._dom.carousel.setAttribute("aria-label", "Tabbed Carousel");
    this._dom.carousel.setAttribute("aria-roledescription", "carousel");

    if (this.autoplay) {
      this._dom.autoplayButton.setAttribute("aria-label", this.autoPlayButtonLabel);
    }

    this._dom.nextButton.setAttribute("aria-label", this.nextButtonLabel);
    this._dom.previousButton.setAttribute("aria-label", this.prevButtonLabel);

    const tabList = this._dom.carousel.querySelector(this.selectors.carouselTabList);
    tabList?.setAttribute("aria-label", "Slides");
    tabList?.setAttribute("role", "tablist");

    const tabs = this._dom.carousel.querySelectorAll(this.selectors.carouselTab);

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

    const carouselItemContainer = this._dom.carousel.querySelector(this.selectors.carouselItemsContainer);
    if (carouselItemContainer) {
      carouselItemContainer.setAttribute("aria-live", "off");
      carouselItemContainer.setAttribute("aria-atomic", "false");
    }

    this._dom.carouselItems.forEach((item, index) => {
      item.setAttribute("aria-label", `${index + 1} of ${this.dom.carouselItems.length}`);
      if (index === 0) {
        addClass(this.activeClass, item);
      }
    });
  }

  /**
   * The HTML elements for the carousel in the DOM.
   *
   * @protected
   *
   * @type {Object<HTMLElement>}
   */
  _dom = {
    carousel: null,
    carouselItems: [],
    autoplayButton: null,
    nextButton: null,
    previousButton: null,
  };

  /**
   * The query selectors used by the carousel to populate the dom.
   *
   * @protected
   *
   * @property {string} carouselItems - The query selector string for carousel items.
   */
  _selectors = {
    carouselControlContainer: ".carousel-control-container",
    carouselControl: ".carousel-control",
    carouselTabContainer: ".carousel-tab-container",
    carouselTabList: ".carousel-tab-list",
    carouselTab: ".carousel-tab",
    carouselItemsContainer: ".carousel-item-container",
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
   * A variable to delay transiton slides in milla seconds.
   *
   * @protected
   *
   * @type {Number}
   */
  _transitionDelay = 10000;

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
   * The stored interval callback for autoplaying the carousel.
   *
   * @protected
   *
   * @type {String}
   */
  _autoPlayButtonLabel = "Auto Play";

  /**
   * The stored interval callback for autoplaying the carousel.
   *
   * @protected
   *
   * @type {String}
   */
  _nextButtonLabel = "Next";

  /**
   * The stored interval callback for autoplaying the carousel.
   *
   * @protected
   *
   * @type {String}
   */
  _prevButtonLabel = "Prev";


  /**
   * An array of error messages generated by the carousel.
   *
   * @protected
   *
   * @type {string[]}
   */
  _errors = [];

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
   * The delay in millaseconds before transitioning slides.
   *
   * @type {Number}
   *
   * @see _transitionDelay
   */
  get transitionDelay() {
    return this._transitionDelay;
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
   * The aria label for the auto play button.
   *
   * @protected
   *
   * @type {String}
   *
   * @see _autoPlayButtonLabel
   */
  get autoPlayButtonLabel() {
    return this._autoPlayButtonLabel;
  }

  /**
   * The aria label for the next play button.
   *
   * @protected
   *
   * @type {String}
   *
   * @see _nextButtonLabel
   */
  get nextButtonLabel() {
    return this._nextButtonLabel;
  }

  /**
   * The aria label for the pev play button.
   *
   * @protected
   *
   * @type {String}
   *
   * @see _prevButtonLabel
   */
  get prevButtonLabel() {
    return this._prevButtonLabel;
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

  set autoPlayButtonLabel(value) {
    isValidType("string", { value });

    if (value === this.autoPlayButtonLabel) {
      return;
    }

    this._autoPlayButtonLabel = value;


    if (this.autoplay) {
      this._dom.autoplayButton.setAttribute("aria-label", this.autoPlayButtonLabel);
    }
  }

  set nextButtonLabel(value) {
    isValidType("string", { value });

    if (value === this.nextButtonLabel) {
      return;
    }

    this._nextButtonLabel = value;
    this._dom.nextButton.setAttribute("aria-label", this.nextButtonLabel);
  }

  set prevButtonLabel(value) {
    isValidType("string", { value });

    if (value === this.prevButtonLabel) {
      return;
    }

    this._prevButtonLabel = value;
    this._dom.previousButton.setAttribute("aria-label", this.prevButtonLabel);
  }

  set activeClass(value) {
    isValidClassList({ activeClass: value });

    if (this._activeClass !== value) {
      this._activeClass = value;
    }
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

    if (transitionDelay >= 0) {
      this._currentItem = value;
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

    // Autoplay checks.
    const autoplayChecks = isValidType("boolean", { autoplay: this.autoplay });

    if (!autoplayChecks) {
      this._errors.push(autoplayChecks.message);
      check = false;
    }

    // Check flags are valid values.
    let flagChecks = isValidInstance(Boolean, {
      autoplay: this._autoplay,
    });

    if (!flagChecks) {
      this._errors.push(flagChecks.message);
      check = false;
    }

    // Check delay is a valid value.
    let delayCheck = isValidInstance(Number, {
      transitionDelay: this._transitionDelay,
    });

    if (!delayCheck) {
      this._errors.push(delayCheck.message);
      check = false;
    }

    // TODO: How do I check carouselItems in this function.
    // HTML element checks.
    let htmlElementChecks = isValidInstance(HTMLElement, {
      carousel: this.dom.carousel,
      nextButton: this.dom.nextButton,
      previousButton: this.dom.previousButton,
    });

    if (!htmlElementChecks) {
      this._errors.push(htmlElementChecks.message);
      check = false;
    }

    // If autoplay is set then the autioplay button is required.
    if (this.autoplay) {
      htmlElementChecks = isValidInstance(HTMLElement, {
        autoplayButton: this.dom.autoplayButton,
      });

      if (!htmlElementChecks) {
        this._errors.push(htmlElementChecks.message);
        check = false;
      }
    }

    // Query selector checks.
    const querySelectorChecks = isQuerySelector({
      carouselControlContainer: this._selectors.carouselControlContainerSelector,
      carouselControl: this._selectors.carouselControlSelector,
      carouselTabContainer: this._selectors.carouselTabContainerSelector,
      carouselTabList: this._selectors.carouselTabListSelector,
      carouselTab: this._selectors.carouselTabSelector,
      carouselItemsContainer: this._selectors.carouselItemsContainerSelector,
    });

    if (!querySelectorChecks) {
      this._errors.push(querySelectorChecks.message);
      check = false;
    }

    // Class list checks.
    const classListChecks = isValidClassList({
      activeClass: this._activeClass,
      playClass: this._playClass,
      pauseClass: this._pauseClass,
    });

    if (!classListChecks) {
      this._errors.push(classListChecks.message);
      check = false;
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
    this.dom.nextButton.addEventListener("pointerup", () => {
      this.activateNextItem();
    });

    this.dom.previousButton.addEventListener("pointerup", () => {
      this.activatePreviousItem();
    });

    this.dom.autoplayButton.addEventListener("pointerup", () => {
      this.toggleAutoplay();
    });
  }

  /**
   * Handles keyup events throughout the carousel item for proper use.
   *
   * - Adds a `keyup` listener to the buttons (if it exists).
   *   - Clicks the button on "Space" or "Enter".
   */
  _handleKeyup() {
    const buttons = [this.dom.nextButton, this.dom.previousButton, this.dom.autoplayButton];

    buttons.forEach(button => button.addEventListener("keyup", (event) => {
      const key = keyPress(event);

      switch (key) {
        case "Space":
        case "Enter":
          // Cause a pointer up event on a button if it is focused and has space or enter pressed.
          event.target.dispatchEvent(new PointerEvent("pointerup"));
          break;
      }
    }));
  }

  _handleAutoplay() {
    if (this.autoplay) {
      this._setInterval();
    } else {
      this._clearInterval();
    }

    this.dom.carousel.setAttribute("aria-live", this.autoplay ? "off" : "polite");
    this.autoplay = !this.autoplay;
  }

  _handleFocus() {
    // Pause autoplay when a button is focused.
    const buttons = [this.dom.nextButton, this.dom.previousButton, this.dom.autoplayButton];

    // TODO: This needs to happen on hover as well.
    buttons.forEach(button => button.addEventListener("focus", () => {
      this._clearInterval();
    }));

    buttons.forEach(button => button.addEventListener("focusout", () => {
      this._handleAutoplay();
    }));
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
   * Activates the current carousel item.
   *
   * @public
   */
  toggleAutoplay() {
    if (this.autoplay) {
      addClass(this.pauseClass, this.dom.autoplayButton);
      removeClass(this.playClass, this.dom.autoplayButton);
    } else {
      addClass(this.playClass, this.dom.autoplayButton);
      removeClass(this.pauseClass, this.dom.autoplayButton);
    }

    this._handleAutoplay();
  }
}

export default Carousel;
