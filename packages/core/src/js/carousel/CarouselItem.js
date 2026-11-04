/**
 * @file
 * The CarouselItem class.
 */

/* global Carousel */

import {
  addClass,
  removeClass,
} from "@accessible-ecosystem/core/domHelpers.js";
import Component from "@accessible-ecosystem/core/Component.js";

/**
 * The CarouselItem component.
 *
 * @extends Component
 */
class CarouselItem extends Component {
  _scope = "Graupl";
  _rootDOMElement = "carouselItem";
  _shouldStore = false;
  _storageKey = "carouselItems";
  _name = "CarouselItem";

  /**
   * The current activation or deactivation request.
   *
   * @protected
   *
   * @type {?{scroll: boolean, scrollOptions: ScrollToOptions}}
   */
  _pendingAction = null;

  /**
   * Constructs a new `CarouselItem`.
   *
   * @param {object}             options                                  - The options for the `CarouselItem`.
   * @param {HTMLElement}        options.carouselItemElement              - The DOM element for the carousel item.
   * @param {?HTMLElement}       [options.tabElement = null]              - The DOM element for the corresponding tab.
   * @param {?CarouselItem}      [options.clone = null]                   - An optional `CarouselItem` that the item was cloned from.
   * @param {Carousel}           options.parent                           - The parent `Carousel` instance.
   * @param {?string}            [options.prefix = graupl-]               - The prefix used for CSS custom properties and attributes.
   * @param {?string}            [options.key = null]                     - The key used to generate IDs throughout the carousel.
   * @param {?(string|string[])} [options.initializeClass = initializing] - The class(es) to apply when the carousel is initializing.
   * @param {boolean}            [options.initialize = false]             - A flag to initialize the carousel immediately upon creation.
   */
  constructor({
    carouselItemElement,
    tabElement = null,
    clone = null,
    parent,
    prefix = "graupl-",
    key = null,
    initializeClass = "initializing",
    initialize = false,
  }) {
    super({
      bootstrap: false,
      initialize: false,
      prefix,
      key,
      initializeClass,
    });

    // Set the DOM elements.
    this._dom.carouselItem = carouselItemElement;
    this._dom.tab = tabElement;

    // Set the elements.
    this._elements.clone = clone ?? null;
    this._elements.parent = parent;

    this._bootstrap();

    if (initialize) {
      this.initialize();
    }
  }

  /**
   * Registers the carousel item's lifecycle events and internal slide and tab listeners.
   *
   * Activation and deactivation update the slide in the first animation frame
   * and its optional tab in the next. Post events describe those DOM updates,
   * rather than completion of smooth scrolling. The activate event also provides
   * scroll and scrollOptions for the carousel's scrolling listener.
   *
   * @protected
   */
  _registerEvents() {
    super._registerEvents();

    this._registerEvent("preactivate");
    this._registerEvent("activate", {
      detail: { scroll: true, scrollOptions: {} },
    });
    this._registerEvent("postactivate");
    this._registerEvent("predeactivate");
    this._registerEvent("deactivate");
    this._registerEvent("postdeactivate");

    this._addInternalEventListener(this.getEventName("activate"), () => {
      addClass(this.elements.parent.activeClass, this.dom.carouselItem);
      // Loop copies stay inert because they are hidden from assistive technology.
      if (this.elements.clone === null) {
        this.dom.carouselItem.removeAttribute("inert");
      }
    });
    this._addInternalEventListener(this.getEventName("postactivate"), () => {
      if (this.dom.tab) {
        addClass(this.elements.parent.activeClass, this.dom.tab);
        this.dom.tab.setAttribute("aria-selected", true);
      }
    });
    this._addInternalEventListener(this.getEventName("deactivate"), () => {
      removeClass(this.elements.parent.activeClass, this.dom.carouselItem);
      this.dom.carouselItem.setAttribute("inert", true);
    });
    this._addInternalEventListener(this.getEventName("postdeactivate"), () => {
      if (this.dom.tab) {
        removeClass(this.elements.parent.activeClass, this.dom.tab);
        this.dom.tab.setAttribute("aria-selected", false);
      }
    });

    // Register scrolling after the listener that updates the slide's state.
    this.elements.parent._registerItemEvents(this);
  }

  /**
   * Activates the carousel item.
   *
   * @param {object}          [options = {}]                                         - Additional options for activating the item.
   * @param {boolean}         [options.scroll = true]                                - A flag to indicate if the carousel should scroll to the activated item.
   * @param {ScrollToOptions} [options.scrollOptions = {}]                           - Scroll option overrides.
   * @param {boolean}         [options.emit = this.isInitialized && this.shouldEmit] - Whether to emit public activation events.
   */
  activate({
    scroll = true,
    scrollOptions = {},
    emit = this.isInitialized && this.shouldEmit,
  } = {}) {
    this._cancelAnimationFrame("deactivate");
    const action = { scroll, scrollOptions };
    this._pendingAction = action;
    this._dispatchEvent("preactivate", this.rootDOMElement, { emit });

    // Pre-event listeners run before any frames are scheduled. If one replaces
    // the action or disposes this item, do not schedule work afterward.
    if (this._pendingAction !== action || !this.isBootstrapped) return;

    this._requestAnimationFrame(() => {
      // Schedule completion before dispatch so listeners can cancel it.
      this._requestAnimationFrame(() => {
        this._dispatchEvent("postactivate", this.rootDOMElement, { emit });
        if (this._pendingAction === action) this._pendingAction = null;
      }, "activate");

      // The carousel uses the activation request to coordinate scrolling.
      this.events.activate.detail.scroll = action.scroll;
      this.events.activate.detail.scrollOptions = action.scrollOptions;
      this._dispatchEvent("activate", this.rootDOMElement, { emit });
    }, "activate");
  }

  /**
   * Deactivates the carousel item.
   *
   * @param {Object<boolean>} [options = {}]                                         - Additional options for deactivating the item.
   * @param {boolean}         [options.emit = this.isInitialized && this.shouldEmit] - Whether to emit public deactivation events.
   */
  deactivate({ emit = this.isInitialized && this.shouldEmit } = {}) {
    this._cancelAnimationFrame("activate");
    const action = { scroll: false, scrollOptions: {} };
    this._pendingAction = action;
    this._dispatchEvent("predeactivate", this.rootDOMElement, { emit });

    // Pre-event listeners run before any frames are scheduled. If one replaces
    // the action or disposes this item, do not schedule work afterward.
    if (this._pendingAction !== action || !this.isBootstrapped) return;

    this._requestAnimationFrame(() => {
      this._requestAnimationFrame(() => {
        this._dispatchEvent("postdeactivate", this.rootDOMElement, { emit });
        if (this._pendingAction === action) this._pendingAction = null;
      }, "deactivate");

      this._dispatchEvent("deactivate", this.rootDOMElement, { emit });
    }, "deactivate");
  }
}

export default CarouselItem;
