/* global Tabs */

import { addClass, removeClass } from "@graupl/core/src/domHelpers.js";
import { TransactionalValue } from "../TransactionalValue.js";

class TabToggle {
  /**
   * The DOM elements within the tab toggle.
   *
   * @protected
   *
   * @type {Object<HTMLElement>}
   *
   * @property {HTMLElement} toggle  - The toggle element.
   * @property {HTMLElement} content - The content element.
   */
  _dom = {
    toggle: null,
    content: null,
  };

  /**
   * The declared elements within the tab toggle.
   *
   * @protected
   *
   * @type {Object<Tabs>}
   *
   * @property {Tabs} parent - The parent tabs element.
   */
  _elements = {
    parent: null,
  };

  /**
   * The active state of the tab toggle.
   *
   * @protected
   *
   * @type {TransactionalValue}
   */
  _active = new TransactionalValue(false);

  /**
   * The event that is triggered when the tab toggle is shown.
   *
   * @protected
   *
   * @event grauplTabToggleActivate
   *
   * @type {CustomEvent}
   *
   * @property {boolean}           bubbles - A flag to bubble the event.
   * @property {Object<TabToggle>} detail  - The details object containing the Accordion item itself.
   */
  _activateEvent = new CustomEvent("grauplTabToggleActivate", {
    bubbles: true,
    detail: { item: this },
  });

  /**
   * The event that is triggered when the tab toggle is hidden.
   *
   * @protected
   *
   * @event grauplTabToggleDeactivate
   *
   * @type {CustomEvent}
   *
   * @property {boolean}           bubbles - A flag to bubble the event.
   * @property {Object<TabToggle>} detail  - The details object containing the Accordion item itself.
   */
  _deactivateEvent = new CustomEvent("grauplTabToggleDeactivate", {
    bubbles: true,
    detail: { item: this },
  });

  constructor({ toggleElement, contentElement, parentTab }) {
    // Set DOM elements.
    this._dom.toggle = toggleElement;
    this._dom.content = contentElement;

    // Set the parent tab instance.
    this._elements.parent = parentTab;
  }

  /**
   * Initializes the tab toggle.
   */
  initialize() {
    // Set up the DOM.
    this._setIds();
    this._setAriaAttributes();

    if (this.dom.toggle.getAttribute("aria-selected") === "true") {
      this.show();
    } else {
      this._deactivate({ emit: false, transition: false });
    }
  }

  /**
   * The DOM elements of the tab toggle.
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
   * The declared elements in the tab toggle.
   *
   * @protected
   *
   * @type {Object<Tabs>}
   *
   * @see _elements
   */
  get elements() {
    return this._elements;
  }

  /**
   * The active state of the tab toggle.
   *
   * @readonly
   *
   * @type {TransactionalValue}
   *
   * @see _active
   */
  get isActive() {
    return this._active.value;
  }

  /**
   * Sets the IDs of the tab toggle and it's content if they do not already exist.
   *
   * The generated IDs use the following format:
   *   - toggle: `tab-toggle-${key}-${index}`
   *   - content: `tab-content-${key}-${index}`
   *
   * Where `${key}` is the parent's key and `${index}` is the toggles index in the list of the parent's toggles.
   *
   * @protected
   */
  _setIds() {
    // Get the required information for IDs.
    const { key } = this.elements.parent;
    const index = this.elements.parent.dom.tabToggles.indexOf(this.dom.toggle);

    this.dom.toggle.id = this.dom.toggle.id || `tab-toggle-${key}-${index}`;
    this.dom.content.id = this.dom.content.id || `tab-content-${key}-${index}`;
  }

  /**
   * Sets the ARIA attributes on the disclosure and it's content.
   */
  _setAriaAttributes() {
    // Set the ARIA attributes for the tab item toggle.
    this.dom.toggle.setAttribute("role", "tab");

    // If aria-selected is not explicitly set to "true", then set it to "false".
    if (this.dom.toggle.getAttribute("aria-selected") !== "true") {
      this.dom.toggle.setAttribute("aria-selected", "false");
    }

    // Set the aria-controls attribute for the toggle.
    this.dom.toggle.setAttribute("aria-controls", this.dom.content.id);

    // Set the role for the content.
    this.dom.content.setAttribute("role", "tabpanel");
  }

  /**
   * Activate the toggle.
   *
   * Sets the toggles's `aria-selected` to "true", adds the
   * open class to the content, and removes the closed class from the content.
   *
   * @protected
   *
   * @fires grauplTabToggleActivate
   *
   * @param {Object<boolean>} [options = {}]              - Options for activating the toggle.
   * @param {boolean}         [options.emit = true]       - Emit the activat event once activated.
   * @param {boolean}         [options.transition = true] - Respect the transition class.
   */
  _activate({ emit = true, transition = true } = {}) {
    const { closeClass, openClass, transitionClass, openDuration } =
      this.elements.parent;

    // Set aria-selected to true when hiding accordion item.
    this.dom.toggle.setAttribute("aria-selected", "true");

    // If we're dealing with transition classes, then we need to utilize
    // requestAnimationFrame to add the transition class, remove the hide class,
    // add the show class, and finally remove the transition class.
    //
    // If `transition` is false, then it doesn't matter if the transition class
    // is set. Do not use the transition.
    if (transition && transitionClass !== "") {
      addClass(transitionClass, this.dom.content);

      requestAnimationFrame(() => {
        removeClass(closeClass, this.dom.content);

        requestAnimationFrame(() => {
          addClass(openClass, this.dom.content);

          requestAnimationFrame(() => {
            setTimeout(() => {
              removeClass(transitionClass, this.dom.content);
            }, openDuration);
          });
        });
      });
    } else {
      // Add the show class
      addClass(openClass, this.dom.content);

      // Remove the hide class.
      removeClass(closeClass, this.dom.content);
    }

    if (emit) {
      this.dom.toggle.dispatchEvent(this._activateEvent);
    }
  }

  /**
   * Deactivates the disclosure.
   *
   * Sets the toggles's `aria-expanded` to "false", adds the
   * close class to the content, and removes the open class from the content.
   *
   * @protected
   *
   * @fires grauplTabToggleDeactivate
   *
   * @param {Object<boolean>} [options = {}]              - Options for collapsing the toggle.
   * @param {boolean}         [options.emit = true]       - Emit the deactivate event once deactivated.
   * @param {boolean}         [options.transition = true] - Respect the transition class.
   */
  _deactivate({ emit = true, transition = true } = {}) {
    const { closeClass, openClass, transitionClass, closeDuration } =
      this.elements.parent;

    // Set aria-selected to false when hiding accordion item.
    this.dom.toggle.setAttribute("aria-selected", "false");

    // If we're dealing with transition classes, then we need to utilize
    // requestAnimationFrame to add the transition class, remove the show class,
    // add the hide class, and finally remove the transition class.
    //
    // If `transition` is false, then it doesn't matter if the transition class
    // is set. Do not use the transition.
    if (transition && transitionClass !== "") {
      addClass(transitionClass, this.dom.content);

      requestAnimationFrame(() => {
        removeClass(openClass, this.dom.content);

        requestAnimationFrame(() => {
          addClass(closeClass, this.dom.content);

          requestAnimationFrame(() => {
            setTimeout(() => {
              removeClass(transitionClass, this.dom.content);
            }, closeDuration);
          });
        });
      });
    } else {
      // Add the hide class
      addClass(closeClass, this.dom.content);

      // Remove the show class.
      removeClass(openClass, this.dom.content);
    }

    if (emit) {
      this.dom.toggle.dispatchEvent(this._deactivateEvent);
    }
  }

  /**
   * Shows the tab toggle's content.
   *
   * @param {Object<boolean>} [options = {}]                  - Options for showing the toggle.
   * @param {boolean}         [options.force = false]         - Whether to force the show action.
   * @param {boolean}         [options.preserveState = false] - Whether to preserve the active state.
   */
  show({ force = false, preserveState = false } = {}) {
    if (this.isActive && !force) return;

    // Set the focus state of the parent tabs element.
    this.elements.parent.focusState = "self";

    // Activate the toggle.
    this._activate();

    // Set the active state
    this._active.value = true;

    if (!preserveState) {
      this._active.commit();
    }

    // Set the tabindex to 0 so it can be focused.
    this.dom.toggle.setAttribute("tabindex", "0");

    // Deactivate all sibling tab toggles.
    this.deactivateSiblings();
  }

  /**
   * Hides the tab toggle's content.
   *
   * @param {Object<boolean>} [options = {}]                  - Options for hiding the toggle.
   * @param {boolean}         [options.force = false]         - Whether to force the show action.
   * @param {boolean}         [options.preserveState = false] - Whether to preserve the active state.
   */
  hide({ force = false, preserveState = false } = {}) {
    if (!this.isActive && !force) return;

    // Set the focus state of the parent tabs element.
    this.elements.parent.focusState = "none";

    // Deactivate the toggle.
    this._deactivate();

    // Set the active state
    this._active.value = false;

    if (!preserveState) {
      this._active.commit();
    }

    // Set the tabindex to -1.
    this.dom.toggle.setAttribute("tabindex", "-1");
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

  deactivateSiblings() {
    if (this.elements.parent) {
      this.elements.parent.elements.tabToggle.forEach((toggle) => {
        if (toggle !== this) {
          toggle.hide();
        }
      });
    }
  }
}

export default TabToggle;
