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
   * @param {string}          [options.carouselItemSelector = .carousel-item] - The query selector string for carousel items.
   * @param {string|string[]} [options.activeClass = active]                  - The class(es) to apply when a carousel item is active.
   * @param {string|string[]} [options.playClass = play]                      - The class(es) to apply to the autoplay button when the carousel is paused.
   * @param {string|string[]} [options.pauseClass = pause]                    - The class(es) to apply to the autoplay button when the carousel is playing.
   * @param {?HTMLElement}    [options.autoplayButton = null]                 - The autoplay button for the carousel in the DOM.
   * @param {?HTMLElement}    [options.nextButton = null]                     - The next button for the carousel in the DOM.
   * @param {?HTMLElement}    [options.previousButton = null]                 - The previous button for the carousel in the DOM.
   * @param {boolean}         [options.autoplay = true]                       - A flag to indicate if the carousel should autoplay.
   * @param {boolean}         [options.initialize = false]                    - A flag to initialize the carousel immediately upon creation.
   */
  constructor({
    carouselElement,
    carouselItemSelector = ".carousel-item",
    activeClass = "active",
    playClass = "play",
    pauseClass = "pause",
    autoplayButton = null,
    nextButton = null,
    previousButton = null,
    autoplay = true,
    initialize = false,
  }) {
    this._dom.carousel = carouselElement;
    this._dom.autoplayButton = autoplayButton;
    this._dom.nextButton = nextButton;
    this._dom.previousButton = previousButton;
    this._activeClass = activeClass;
    this._playClass = playClass;
    this._pauseClass = pauseClass;
    this._selectors.carouselItems = carouselItemSelector;
    this._autoplay = autoplay;

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

      this.dom.carouselItems = this.dom.carousel.querySelectorAll(
        this.selectors.carouselItems
      );

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
    this.dom.carouselItems.forEach((item, index) => {
      item.setAttribute("aria-label", `${index + 1} of ${this.dom.carouselItems.length}`);
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
    carouseItems: [],
    autoplayButton: null,
    nextButton: null,
    previousButton: null,
  };
  // TODO: Add items to the dom object as needed.

  /**
   * The query selectors used by the carousel to populate the dom.
   *
   * @protected
   *
   * @property {string} carouselItems - The query selector string for carousel items.
   */
  _selectors = {
    carousel: ".carousel",
    carouselControlContainer: ".carousel-control-container",
    carouselControl: ".carousel-control",
    carouselAutoplay: ".autoplay",
    carouselTabContainer: ".carousel-tab-container",
    carouselTabList: ".carousel-tab-list",
    carouselTab: ".carousel-tab",
    carouselItemsContainer: ".carousel-item-container",
    carouselItems: ".carousel-item",
  };
  // TODO: Do I need all of these? I find the naming isn't descriptive.

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
    let htmlElementChecks = isValidInstance(HTMLElement, {
      carouselElement: this.dom.carousel,
    });

    if (!htmlElementChecks) {
      this._errors.push(htmlElementChecks.message);
      check = false;
    }

    if (this._dom.autoplayButton !== null) {
      htmlElementChecks = isValidInstance(HTMLElement, {
        autoplayButton: this.dom.autoplayButton,
      });

      if (!htmlElementChecks) {
        this._errors.push(htmlElementChecks.message);
        check = false;
      }
    }

    if (this._dom.nextButton !== null || this._dom.previousButton !== null) {
      htmlElementChecks = isValidInstance(HTMLElement, {
        nextButton: this.dom.nextButton,
        previousButton: this.dom.previousButton,
      });

      if (!htmlElementChecks) {
        this._errors.push(htmlElementChecks.message);
        check = false;
      }
    }

    // Query selector checks.
    const querySelectorChecks = isQuerySelector({
      carouselItemsSelector: this.selectors.carouselItems,
    });

    if (!querySelectorChecks) {
      this._errors.push(querySelectorChecks.message);
      check = false;
    }

    // Class list checks.
    if (this._activeClass !== "") {
      const classListChecks = isValidClassList({
        activeClass: this.activeClass,
      });

      if (!classListChecks) {
        this._errors.push(classListChecks.message);
        check = false;
      }
    }

    // Autoplay checks.
    const autoplayChecks = isValidType("boolean", { autoplay: this.autoplay });

    if (!autoplayChecks) {
      this._errors.push(autoplayChecks.message);
      check = false;
    }

    return check;
  }

  _setInterval() {
    this._autoplayInterval = setInterval(() => {
      this.activateNextItem();
    }, 10000);
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

    // TODO: This needs to be added to the carousel item container.
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
