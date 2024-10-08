/**
 * @file
 * The Accordion Item class.
 */

import { isTag, isValidType } from "../validate.js";
import { addClass, removeClass } from "../domHelpers.js";

/**
 * Creates a new accordion item.
 *
 * @class
 */
class AccordionItem {
  /**
   * The HTML elements for the accordion item in the DOM.
   *
   * @protected
   *
   * @type {Object<HTMLElement>}
   *
   * @property {HTMLElement} item    - The accordion item element.
   * @property {HTMLElement} toggle  - The controller element.
   * @property {HTMLElement} content - The content element.
   */
  _dom = {
    item: null,
    toggle: null,
    content: null,
  };

  /**
   * The declared graupl accordion elements within the accordion item.
   *
   * @protected
   *
   * @type {Object<Accordion>}
   *
   * @property {Accordion} parentAccordion - The parent accordion containing this item.
   */
  _elements = {
    parentAccordion: null,
  };

  /**
   * The open state of the accordion.
   *
   * @protected
   *
   * @type {boolean}
   */
  _open = false;

  /**
   * The locked state of the accordions item.
   *
   * If locked, the accordion item cannot be closed.
   *
   * @protected
   *
   * @type {boolean}
   */
  _locked = false;

  /**
   * The event that is triggered when the accordion item is shown.
   *
   * @protected
   *
   * @event grauplAccordionItemShow
   *
   * @type {CustomEvent}
   *
   * @property {boolean}               bubbles - A flag to bubble the event.
   * @property {Object<AccordionItem>} detail  - The details object containing the Accordion item itself.
   */
  _showEvent = new CustomEvent("grauplAccordionItemShow", {
    bubbles: true,
    detail: { item: this },
  });

  /**
   * The event that is triggered when the accordion item is hidden.
   *
   * @protected
   *
   * @event grauplAccordionItemHide
   *
   * @type {CustomEvent}
   *
   * @property {boolean}               bubbles - A flag to bubble the event.
   * @property {Object<AccordionItem>} detail  - The details object containing the Accordion item itself.
   */
  _hideEvent = new CustomEvent("grauplAccordionItemHide", {
    bubbles: true,
    detail: { item: this },
  });

  /**
   * Constructs a new Accordion item object.
   *
   * @class
   *
   * @param {object}               options                             - The options object.
   * @param {HTMLElement}          options.accordionItemElement        - The accordion item element.
   * @param {HTMLElement}          options.accordionItemToggleElement  - The toggle element.
   * @param {HTMLElement}          options.accordionItemContentElement - The content element.
   * @param {Accordion}            [options.parentAccordion = null]    - The accordion containing this item.
   */
  constructor({
    accordionItemElement,
    accordionItemToggleElement,
    accordionItemContentElement,
    parentAccordion = null,
  }) {
    // Set DOM elements.
    this._dom.item = accordionItemElement;
    this._dom.toggle = accordionItemToggleElement;
    this._dom.content = accordionItemContentElement;

    // Set the accordion elements.
    this._elements.parentAccordion = parentAccordion;
  }

  /**
   * Initializes the accordion item.
   */
  initialize() {
    // Set the IDs for the accordion item and it's elements if they don't exist.
    this._setIds();

    // Set the ARIA attributes for the accordion item and it's elements.
    this._setAriaAttributes();

    // Set the initial state of the accordion item.
    if (this.dom.toggle.getAttribute("aria-expanded") === "true") {
      this.show(false);
    } else {
      this.hide(false);
    }
  }

  /**
   * The HTML elements for the accordion item in the DOM.
   *
   * @readonly
   *
   * @type {object}
   *
   * @see _dom
   */
  get dom() {
    return this._dom;
  }

  /**
   * The declared graupl accordion elements within the accordion item.
   *
   * @readonly
   *
   * @type {Object<Accordion>}
   *
   * @see _elements
   */
  get elements() {
    return this._elements;
  }

  /**
   * The open state of the accordion.
   *
   * @readonly
   *
   * @type {object}
   *
   * @see _open
   */
  get isOpen() {
    return this._open;
  }

  /**
   * The locked state of the accordions item.
   *
   * If locked, the accordion item cannot be closed.
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

  set isOpen(value) {
    isValidType("boolean", { value });

    if (this._open !== value) {
      this._open = value;
    }
  }

  /**
   * Sets the IDs for the accordion item and it's elements if they don't exist.
   *
   * The generated IDs use the parent accordion's key and follows the pattern:
   *  - Accordion item: `accordion-item-{key}-{index}`
   *  - Accordion item toggle: `accordion-item-toggle-{key}-{index}`
   *  - Accordion item content: `accordion-item-content-{key}-{index}`
   */
  _setIds() {
    // Get the required information for IDs.
    const { key } = this.elements.parentAccordion;
    const index = this.elements.parentAccordion.dom.accordionItems.indexOf(
      this.dom.item
    );

    // Set the ID values.
    const itemID = this.dom.item.id || `accordion-item-${key}-${index}`;
    const toggleID =
      this.dom.toggle.id || `accordion-item-toggle-${key}-${index}`;
    const contentID =
      this.dom.content.id || `accordion-item-content-${key}-${index}`;

    // Set the IDs.
    this.dom.item.id = itemID;
    this.dom.toggle.id = toggleID;
    this.dom.content.id = contentID;
  }

  /**
   * Sets the ARIA attributes for the accordion item and it's elements.
   */
  _setAriaAttributes() {
    // Set the ARIA attributes for the accordion item toggle.
    // If the toggle is not a button, then set the role to "button".
    if (!isTag("button", { toggle: this.dom.toggle })) {
      this.dom.toggle.setAttribute("role", "button");
    }

    // If aria-expanded is not explicitly set to "true", then set it to "false".
    if (this.dom.toggle.getAttribute("aria-expanded") !== "true") {
      this.dom.toggle.setAttribute("aria-expanded", "false");
    }

    // Set the aria-controls attribute for the toggle.
    this.dom.toggle.setAttribute("aria-controls", this.dom.content.id);

    // Set the ARIA attributes for the accordion item content.
    // If the content is not a section, then set the role to "region".
    if (!isTag("section", { content: this.dom.content })) {
      this.dom.content.setAttribute("role", "region");
    }

    // Set the aria-labelledby attribute for the content.
    this.dom.content.setAttribute("aria-labelledby", this.dom.toggle.id);
  }

  /**
   * Shows the accordion item.
   *
   * @public
   *
   * @fires grauplAccordionItemShow
   *
   * @param {boolean} [emit = true] - Emit the show event once shown.
   */
  show(emit = true) {
    if (this._open) {
      return;
    }

    const { closeClass, openClass, transitionClass, openDuration } =
      this.elements.parentAccordion;

    // Set aria-expanded to true when hiding accordion item.
    this.dom.toggle.setAttribute("aria-expanded", "true");

    // If we're dealing with transition classes, then we need to utilize
    // requestAnimationFrame to add the transition class, remove the hide class,
    // add the show class, and finally remove the transition class.
    if (transitionClass !== "") {
      addClass(transitionClass, this.dom.item);

      requestAnimationFrame(() => {
        removeClass(closeClass, this.dom.item);

        this.dom.item.style.height = `${this.dom.toggle.getBoundingClientRect().height}px`;

        requestAnimationFrame(() => {
          addClass(openClass, this.dom.item);

          this.dom.item.style.height = `${this.dom.toggle.getBoundingClientRect().height + this.dom.content.getBoundingClientRect().height}px`;

          requestAnimationFrame(() => {
            setTimeout(() => {
              removeClass(transitionClass, this.dom.item);

              this.dom.item.style.height = "";
            }, openDuration);
          });
        });
      });
    } else {
      // Add the show class
      addClass(openClass, this.dom.item);

      // Remove the hide class.
      removeClass(closeClass, this.dom.item);
    }

    this._open = true;

    // If the parent accordion only allows a single item to be open at a time,
    // then close all other items.
    if (!this.elements.parentAccordion.allowMultipleExpand) {
      this.unlockSiblings();
      this.closeSiblings();
    }

    // If the parent accordion requires at least one item to be open, and this
    // is the only open item, then lock it. Otherwise, unlock all siblings.
    if (!this.elements.parentAccordion.allowNoExpand) {
      if (this.elements.parentAccordion.openAccordionItems.length <= 1) {
        this.lock();
      } else {
        this.unlockSiblings();
      }
    }

    if (emit) {
      this.dom.item.dispatchEvent(this._showEvent);
    }
  }

  /**
   * Hides the accordion item.
   *
   * @public
   *
   * @fires grauplAccordionItemHide
   *
   * @param {boolean} [emit = true] - Emit the hide event once hidden.
   */
  hide(emit = true) {
    if (!this._open) {
      return;
    }

    if (
      !this.elements.parentAccordion.allowNoExpand &&
      this.elements.parentAccordion.openAccordionItems.length <= 1
    ) {
      return;
    }

    const { closeClass, openClass, transitionClass, closeDuration } =
      this.elements.parentAccordion;

    // Set aria-expanded to false when hiding accordion item.
    this.dom.toggle.setAttribute("aria-expanded", "false");

    // If we're dealing with transition classes, then we need to utilize
    // requestAnimationFrame to add the transition class, remove the show class,
    // add the hide class, and finally remove the transition class.
    if (transitionClass !== "") {
      addClass(transitionClass, this.dom.item);
      this.dom.item.style.height = `${this.dom.item.getBoundingClientRect().height}px`;

      requestAnimationFrame(() => {
        removeClass(openClass, this.dom.item);
        this.dom.item.style.height = `${this.dom.toggle.getBoundingClientRect().height}px`;

        requestAnimationFrame(() => {
          addClass(closeClass, this.dom.item);

          requestAnimationFrame(() => {
            setTimeout(() => {
              removeClass(transitionClass, this.dom.item);

              this.dom.item.style.height = "";
            }, closeDuration);
          });
        });
      });
    } else {
      // Add the hide class
      addClass(closeClass, this.dom.item);

      // Remove the show class.
      removeClass(openClass, this.dom.item);
    }

    this._open = false;

    // If the parent accordion requires at least one item to be open, and this was
    // the second to last open item, then lock to last open item.
    if (
      !this.elements.parentAccordion.allowNoExpand &&
      this.elements.parentAccordion.openAccordionItems.length === 1
    ) {
      this.elements.parentAccordion.openAccordionItems[0].lock();
    }

    if (emit) {
      this.dom.item.dispatchEvent(this._hideEvent);
    }
  }

  /**
   * Toggle the accordion item.
   *
   * @public
   */
  toggle() {
    this.isOpen ? this.hide() : this.show();
  }

  /**
   * Focuses the accordion item.
   *
   * @public
   */
  focus() {
    this.dom.toggle.focus();
  }

  /**
   * Blurs the accordion item.
   *
   * @public
   */
  blur() {
    this.dom.toggle.blur();
  }

  /**
   * Locks the accordion item.
   *
   * @public
   */
  lock() {
    this._locked = true;
    this.dom.toggle.setAttribute("disabled", "true");
  }

  /**
   * Unlocks the accordion item.
   *
   * @public
   */
  unlock() {
    this._locked = false;
    this.dom.toggle.removeAttribute("disabled");
  }

  closeSiblings() {
    if (this.elements.parentAccordion) {
      this.elements.parentAccordion.elements.accordionItems.forEach((item) => {
        if (item !== this) {
          item.hide();
        }
      });
    }
  }

  /**
   * Unlocks the siblings of the accordion item.
   *
   * @public
   */
  unlockSiblings() {
    if (this.elements.parentAccordion) {
      this.elements.parentAccordion.elements.accordionItems.forEach((item) => {
        if (item !== this) {
          item.unlock();
        }
      });
    }
  }
}

export default AccordionItem;
