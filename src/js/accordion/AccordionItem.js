/**
 * @file
 * The Accordion Item class.
 */

import { isValidClassList, isValidInstance, isValidType } from "../validate.js";
import { addClass, removeClass } from "../domHelpers.js";
import { keyPress, preventEvent } from "../eventHandlers.js";

class AccordionItem {
  /**
   * Constructs a new Accordion item object.
   *
   * @param {object}               options                                   - The options object.
   * @param {HTMLElement}          options.accordionItemElement              - The accordion item element.
   * @param {?HTMLElement}         [options.controllerElement = null]        - The controller element.
   * @param {string|string[]|null} [options.showClass = show]                - The class to add when the accordion item is shown.
   * @param {string|string[]|null} [options.hideClass = hide]                - The class to add when the accordion item is hidden.
   * @param {string|string[]|null} [options.transitionClass = transitioning] - The class to add when the accordion item is transitioning between shown and hidden.
   * @param {number}               [options.transitionTimer = 150]           - The time in milliseconds the transition will take.
   * @param {boolean}              [options.isHidden = false]                - A flag to determine the initial state of the accordion item.
   * @param {boolean}              [options.initialize = false]              - A flag to auto-initialize.
   * @param {boolean}              [options.focusOnArrow = false]            - A flag to allow focus on up or down arrows.
   */
  constructor({
    accordionItemElement,
    controllerElement = null,
    showClass = "show",
    hideClass = "hide",
    transitionClass = "transitioning",
    transitionTimer = 150,
    isHidden = false,
    initialize = false,
    focusOnArrow = false,
  }) {
    this.dom.accordionItem = accordionItemElement;
    this.dom.controller = controllerElement;
    this._showClass = showClass || "";
    this._hideClass = hideClass || "";
    this._transitionClass = transitionClass || "";
    this._transitionTimer = transitionTimer;
    this._hidden = isHidden;
    this._focusOnArrow = focusOnArrow;

    if (initialize) {
      this.initialize();
    }
  }

  /**
 * Initializes the accordion item.
 */
  initialize() {
    try {
      if (!this._validate()) {
        throw new Error(
          `Graupl Accordion item: cannot initialize accordion item. The following errors have been found:\n - ${this.errors.join(
            "\n - "
          )}`
        );
      }

      this._handleClick();
      this._handleKeydown();
      this._handleKeyup();
    } catch (error) {
      console.error(error);
    }
  }

  /**
    * Toggle the accordion item.
    *
    * @fires grauplAccordionItemToggle
    *
    * @param {boolean} [emit = true] - A toggle to emit the hide event once shown.
    */
  toggle(emit = true) {
    this._hidden ? this.show() : this.hide();

    if (emit) {
      this.dom.accordionItem.dispatchEvent(this._toggleEvent);
    }
  }

  /**
 * Validates all aspects of the accordion item to ensure proper functionality.
 *
 * @protected
 *
 * @return {boolean} - The result of the validation.
 */
  _validate() {
    // @todo: Add validation for the accordion item.
    let check = true;
    return check;
  }

  /**
 * Shows the accordion item.
 *
 * @fires grauplAccordionItemShow
 *
 * @param {boolean} [emit = true] - Emit the show event once shown.
 */
  show(emit = true) {
    if (!this._hidden) {
      return;
    }

    // If we're dealing with transition classes, then we need to utilize
    // requestAnimationFrame to add the transition class, remove the hide class,
    // add the show class, and finally remove the transition class.
    if (this.transitionClass !== "") {
      addClass(this.transitionClass, this.dom.accordionItem);

      requestAnimationFrame(() => {
        if (this.hideClass !== "") {
          removeClass(this.hideClass, this.dom.accordionItem);
        }

        requestAnimationFrame(() => {
          if (this.showClass !== "") {
            addClass(this.showClass, this.dom.accordionItem);
          }

          requestAnimationFrame(() => {
            removeClass(this.transitionClass, this.dom.accordionItem);
          });
        });
      });
    } else {
      // Add the show class
      if (this.showClass !== "") {
        addClass(this.showClass, this.dom.accordionItem);
      }

      // Remove the hide class.
      if (this.hideClass !== "") {
        removeClass(this.hideClass, this.dom.accordionItem);
      }
    }

    this._hidden = false;

    if (emit) {
      this.dom.accordionItem.dispatchEvent(this._showEvent);
    }
  }

  /**
   * Hides the accordion item.
   *
   * @fires grauplAccordionItemHide
   *
   * @param {boolean} [emit = true] - Emit the hide event once hidden.
   */
  hide(emit = true) {
    if (this._hidden) {
      return;
    }
    // If we're dealing with transition classes, then we need to utilize
    // requestAnimationFrame to add the transition class, remove the show class,
    // add the hide class, and finally remove the transition class.
    if (this.transitionClass !== "") {
      addClass(this.transitionClass, this.dom.accordionItem);

      requestAnimationFrame(() => {
        if (this.showClass !== "") {
          removeClass(this.showClass, this.dom.accordionItem);
        }

        requestAnimationFrame(() => {
          if (this.transitionTimer > 0) {
            setTimeout(() => {
              if (this.hideClass !== "") {
                addClass(this.hideClass, this.dom.accordionItem);
              }

              requestAnimationFrame(() => {
                removeClass(this.transitionClass, this.dom.accordionItem);
              });
            }, this.transitionTimer);
          } else {
            if (this.hideClass !== "") {
              addClass(this.hideClass, this.dom.accordionItem);
            }

            requestAnimationFrame(() => {
              removeClass(this.transitionClass, this.dom.accordionItem);
            });
          }
        });
      });
    } else {
      // Add the hide class
      if (this.hideClass !== "") {
        addClass(this.hideClass, this.dom.accordionItem);
      }

      // Remove the show class.
      if (this.showClass !== "") {
        removeClass(this.showClass, this.dom.accordionItem);
      }
    }

    this._hidden = true;

    if (emit) {
      this.dom.Item.dispatchEvent(this._hideEvent);
    }
  }
}

export default AccordionItem;
