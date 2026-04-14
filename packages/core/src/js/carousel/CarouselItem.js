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
    if (this.elements.clone) {
      if (scroll) {
        this.dom.carouselItem.scrollIntoView({
          block: "nearest",
          inline: "center",
          behavior: scrollBehavior,
        });
      }

      this.elements.clone.activate({ scroll, scrollBehavior: "auto" });
    } else {
      addClass(this.elements.parent.activeClass, this.dom.carouselItem);
      this.dom.carouselItem.removeAttribute("inert");

      if (scroll) {
        this.dom.carouselItem.scrollIntoView({
          block: "nearest",
          inline: "center",
          behavior: scrollBehavior,
        });
      }

      if (this.dom.tab) {
        addClass(this.elements.parent.activeClass, this.dom.tab);
        this.dom.tab.setAttribute("aria-selected", "true");
      }
    }
  }

  deactivate() {
    if (this.elements.clone) {
      this.elements.clone.deactivate();
    } else {
      removeClass(this.elements.parent.activeClass, this.dom.carouselItem);
      this.dom.carouselItem.setAttribute("inert", true);

      if (this.dom.tab) {
        removeClass(this.elements.parent.activeClass, this.dom.tab);
        this.dom.tab.setAttribute("aria-selected", false);
      }
    }
  }

  deactivateSiblings() {
    this.elements.parent.elements.carouselItems.forEach((item) => {
      if (item !== this) {
        item.deactivate();
      }
    });
  }
}

export default CarouselItem;
