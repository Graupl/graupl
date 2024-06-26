/**
 * @file
 * The alert class.
 */

class Alert {

  /**
   * The HTML elements for the alert.
   *
   * @protected
   *
   * @type {Object<HTMLElement>}
   */
  _elements = {
    alert: null,
    controller: null,
  };

  /**
   * The class to use to show the alert.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _showClass = "";

  /**
   * The class to use to hide the alert.
   *
   * @protected
   *
   * @type {string|string[]}
   */
  _hideClass = "";

  /**
   * Constructs a new Alert object.
   *
   * @param {object}               options                            - The options object.
   * @param {HTMLElement}          options.alertElement               - The alert element.
   * @param {?HTMLElement}         [options.controllerElement = null] - The controller element.
   * @param {string|string[]|null} [options.showClass = show]         - The class to add when the alert is shown.
   * @param {string|string[]|null} [options.hideClass = hide]         - The class to add when
   * @param {boolean}              [options.initialize = false]       - A flag to auto-initialize.
   */
  constructor({ alertElement, controllerElement = null, showClass = "show", hideClass = "hide", initialize = false }) {
    this._elements.alert = alertElement;
    this._elements.controller = controllerElement;
    this._showClass = showClass;
    this._hideClass = hideClass;

    if (initialize) {
      this.initialize();
    }
  }

  /**
   * Initializes the alert.
   */
  initialize() {
    if (this._elements.controller) {
      this.elements.controller.addEventListener("click", this.hide());
    }
  }

  /**
   * The HTML elements for the alert.
   *
   * @readonly
   *
   * @see _elements
   *
   * @type {object}
   */
  get element() {
    return this._elements;
  }

  /**
   * Hides the alert.
   */
  hide() {
    console.log("Hide alert");
  }

  /**
   * Shows the alert.
   */
  show() {
    console.log("Show alert");
  }

  _handleClick() {
    this.elements.controller.addEventListener("pointerup", this.show());
  }

  _handleKeydown() {
    this.elements.controller.addEventListener("keydown", (event) => {
      const key = event.key || event.keyCode;

      // Prevent default behavior for space and enter keys.
      if (key === " " || key === "Enter") {
        event.preventDefault();
        event.stopPropagation();
      }
    });
  }

  _handleKeyup() {
    this.elements.controller.addEventListener("keyup", (event) => {
      const key = event.key || event.keyCode;

      // Show the alert when the space or enter key is pressed.
      if (key === " " || key === "Enter") {
        this.show();
      }
    });
  }
}

export default Alert;
