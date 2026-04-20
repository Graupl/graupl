/**
 * @file
 * The CarouselItem class.
 */

import { addClass, removeClass } from "../domHelpers.js";
import Component from "../Component.js";

/**
 * The CarouselItem component.
 *
 * @extends Component
 */
class CarouselItem extends Component {
  _rootDOMElement = "carouselItem";
  _shouldStore = false;
  _storageKey = "carouselItems";
  _name = "CarouselItem";
  _busy = false;

  /**
   * Constructs a new `CarouselItem`.
   *
   * @param {object}             options                                  - The options for the `CarouselItem`.
   * @param {?HTMLElement}       options.carouselItemElement              - The DOM element for the carousel item.
   * @param {?HTMLElement}       [options.tabElement = null]              - The DOM element for the corresponding tab.
   * @param {CarouselItem}       [options.clone = null]                   - An optional `CarouselItem` that the item was cloned from.
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

    if (initialize) {
      this.initialize();
    }
  }

  activate({ scroll = true, scrollBehavior = "smooth" } = {}) {
    requestAnimationFrame(() => {
      addClass(this.elements.parent.activeClass, this.dom.carouselItem);
      this.dom.carouselItem.removeAttribute("inert");

      if (scroll) {
        this.elements.parent.dom.carouselItemContainer.scrollTo({
          left: this.dom.carouselItem.offsetLeft,
          top: this.dom.carouselItem.offsetTop,
          behavior: scrollBehavior,
        });
      }

      if (this.dom.tab) {
        requestAnimationFrame(() => {
          addClass(this.elements.parent.activeClass, this.dom.tab);
          this.dom.tab.setAttribute("aria-selected", "true");
        });
      }
    });
  }

  deactivate() {
    requestAnimationFrame(() => {
      removeClass(this.elements.parent.activeClass, this.dom.carouselItem);
      this.dom.carouselItem.setAttribute("inert", true);

      requestAnimationFrame(() => {
        if (this.dom.tab) {
          removeClass(this.elements.parent.activeClass, this.dom.tab);
          this.dom.tab.setAttribute("aria-selected", false);
        }
      });
    });
  }
}

export default CarouselItem;
