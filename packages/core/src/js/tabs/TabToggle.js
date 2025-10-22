import { isValidType } from "@graupl/core/src/validate.js";
import { addClass, removeClass } from "@graupl/core/src/domHelpers.js";

class TabToggle {
  _dom = {
    toggle: null,
    content: null,
  };

  _elements = {
    parent: null,
  };

  _active = false;

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

  initialize() {
    this._setIds();
    this._setAriaAttributes();

    this.dom.content.classList = "tab-content hide";

    if (this.dom.toggle.getAttribute("aria-selected") === "true") {
      this.show(false, false);
    } else {
      this.hide(false, false);
    }
  }

  get dom() {
    return this._dom;
  }

  get elements() {
    return this._elements;
  }

  get isActive() {
    return this._active;
  }

  set isActive(value) {
    isValidType("boolean", { value });

    if (this._active !== value) {
      this._active = value;
    }
  }

  _setIds() {
    // Get the required information for IDs.
    const { key } = this.elements.parent;
    const index = this.elements.parent.dom.tabToggles.indexOf(this.dom.toggle);

    this.dom.toggle.id = this.dom.toggle.id || `tab-toggle-${key}-${index}`;
    this.dom.content.id = this.dom.content.id || `tab-content-${key}-${index}`;
  }

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

  show(emit = true, transition = true) {
    if (this.isActive) {
      return;
    }

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

    this._active = true;

    // Set the tabindex to 0 so it can be focused.
    this.dom.toggle.setAttribute("tabindex", "0");

    // Deactivate all sibling tab toggles.
    this.deactivateSiblings();

    if (emit) {
      this.dom.toggle.dispatchEvent(this._activateEvent);
    }
  }

  hide(emit = true, transition = true) {
    if (!this._active) {
      return;
    }

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

    this._active = false;

    // Set the tabindex to -1.
    this.dom.toggle.setAttribute("tabindex", "-1");

    if (emit) {
      this.dom.toggle.dispatchEvent(this._deactivateEvent);
    }
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
      this.elements.parent.elements.tabToggles.forEach((toggle) => {
        if (toggle !== this) {
          toggle.hide();
        }
      });
    }
  }
}

export default TabToggle;
