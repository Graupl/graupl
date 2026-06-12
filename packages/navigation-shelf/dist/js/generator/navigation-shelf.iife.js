var NavigationShelfGenerator = (function() {
	function f(t, e, { shouldThrow: s = !0 } = {}) {
		const i = {
			status: !0,
			errors: []
		};
		try {
			if (typeof e != "object") throw new TypeError(`Elements given to isValidInstance() must be inside of an object. "${typeof e}" given.`);
			for (const r in e) try {
				if (!(e[r] instanceof t)) {
					const o = typeof e[r];
					throw new TypeError(`${r} must be an instance of ${t.name}. "${o}" given.`);
				}
			} catch (o) {
				i.status = !1, i.errors.push(o);
			}
		} catch (r) {
			i.status = !1, i.errors.push(r);
		}
		if (s && !i.status) throw i.errors[0];
		return i;
	}
	function n(t, e, { shouldThrow: s = !0 } = {}) {
		const i = {
			status: !0,
			errors: []
		};
		try {
			if (typeof e != "object") throw new TypeError(`Values given to isValidType() must be inside of an object. "${typeof e}" given.`);
			for (const r in e) try {
				const o = typeof e[r];
				if (o !== t) throw new TypeError(`${r} must be a ${t}. "${o}" given.`);
			} catch (o) {
				i.status = !1, i.errors.push(o);
			}
		} catch (r) {
			i.status = !1, i.errors.push(r);
		}
		if (s && !i.status) throw i.errors[0];
		return i;
	}
	function C(t, { shouldThrow: e = !0 } = {}) {
		const s = {
			status: !0,
			errors: []
		};
		try {
			if (typeof t != "object") throw new TypeError(`Values given to isQuerySelector() must be inside of an object. "${typeof t}" given.`);
			for (const i in t) try {
				try {
					if (t[i] === null) throw new Error();
					document.querySelector(t[i]);
				} catch {
					throw new TypeError(`${i} must be a valid query selector. "${t[i]}" given.`);
				}
			} catch (r) {
				s.status = !1, s.errors.push(r);
			}
		} catch (i) {
			s.status = !1, s.errors.push(i);
		}
		if (e && !s.status) throw s.errors[0];
		return s;
	}
	function a(t, { shouldThrow: e = !0 } = {}) {
		const s = {
			status: !0,
			errors: []
		};
		try {
			if (typeof t != "object" || Array.isArray(t)) throw new TypeError(`Values given to isValidClassList() must be inside of an object. "${typeof t}" given.`);
			for (const i in t) try {
				const r = typeof t[i];
				if (r !== "string") if (Array.isArray(t[i])) t[i].forEach((o) => {
					if (typeof o != "string") throw new TypeError(`${i} must be a string or an array of strings. An array containing non-strings given.`);
				});
				else throw new TypeError(`${i} must be a string or an array of strings. "${r}" given.`);
				else {
					const o = {};
					o[i] = t[i], C(o);
				}
			} catch (r) {
				s.status = !1, s.errors.push(r);
			}
		} catch (i) {
			s.status = !1, s.errors.push(i);
		}
		if (e && !s.status) throw s.errors[0];
		return s;
	}
	function O(t, { shouldThrow: e = !0 } = {}) {
		const s = {
			status: !0,
			errors: []
		};
		try {
			if (typeof t != "object") throw new TypeError(`Values given to isValidState() must be inside of an object. "${typeof t}" given.`);
			const i = [
				"none",
				"self",
				"child"
			];
			for (const r in t) try {
				if (!i.includes(t[r])) throw new TypeError(`${r} must be one of the following values: ${i.join(", ")}. "${t[r]}" given.`);
			} catch (o) {
				s.status = !1, s.errors.push(o);
			}
		} catch (i) {
			s.status = !1, s.errors.push(i);
		}
		if (e && !s.status) throw s.errors[0];
		return s;
	}
	function A(t, { shouldThrow: e = !0 } = {}) {
		const s = {
			status: !0,
			errors: []
		};
		try {
			if (typeof t != "object") throw new TypeError(`Values given to isValidEvent() must be inside of an object. "${typeof t}" given.`);
			const i = [
				"none",
				"mouse",
				"keyboard",
				"character"
			];
			for (const r in t) try {
				if (!i.includes(t[r])) throw new TypeError(`${r} must be one of the following values: ${i.join(", ")}. "${t[r]}" given.`);
			} catch (o) {
				s.status = !1, s.errors.push(o);
			}
		} catch (i) {
			s.status = !1, s.errors.push(i);
		}
		if (e && !s.status) throw s.errors[0];
		return s;
	}
	function T(t, e, { shouldThrow: s = !0 } = {}) {
		const i = {
			status: !0,
			errors: []
		};
		try {
			if (!Object.prototype.hasOwnProperty.call(e.events, t)) throw new TypeError(`Event type "${t}" is not valid for ${e.constructor.name}. Valid event types are: "${Object.keys(e.events).join("\", ")}".`);
		} catch (r) {
			i.status = !1, i.errors.push(r);
		}
		if (s && !i.status) throw i.errors[0];
		return i;
	}
	function M(t, { shouldThrow: e = !0 } = {}) {
		const s = {
			status: !0,
			errors: []
		};
		try {
			if (!Object.prototype.hasOwnProperty.call(t._dom, t._rootDOMElement)) throw new Error(`The root DOM element "${t._rootDOMElement}" does not exist in the ${t.constructor.name}'s _dom property. It must be one of the following: "${Object.keys(t._dom).join("\", \"")}".`);
		} catch (i) {
			s.status = !1, s.errors.push(i);
		}
		if (e && !s.status) throw s.errors[0];
		return s;
	}
	function j(t, { shouldThrow: e = !0 } = {}) {
		const s = {
			status: !0,
			errors: []
		};
		try {
			if (typeof t != "object") throw new TypeError(`Values given to isValidSideType() must be inside of an object. "${typeof t}" given.`);
			const i = ["left", "right"];
			for (const r in t) try {
				if (!i.includes(t[r])) throw new TypeError(`${r} must be one of the following values: ${i.join(", ")}. "${t[r]}" given.`);
			} catch (o) {
				s.status = !1, s.errors.push(o);
			}
			return {
				status: !0,
				error: null
			};
		} catch (i) {
			s.status = !1, s.errors.push(i);
		}
		if (e && !s.status) throw s.errors[0];
		return s;
	}
	function u(t) {
		try {
			const e = t.key || t.keyCode, s = {
				Enter: e === "Enter" || e === 13,
				Space: e === " " || e === "Spacebar" || e === 32,
				Escape: e === "Escape" || e === "Esc" || e === 27,
				ArrowUp: e === "ArrowUp" || e === "Up" || e === 38,
				ArrowRight: e === "ArrowRight" || e === "Right" || e === 39,
				ArrowDown: e === "ArrowDown" || e === "Down" || e === 40,
				ArrowLeft: e === "ArrowLeft" || e === "Left" || e === 37,
				Home: e === "Home" || e === 36,
				End: e === "End" || e === 35,
				Character: isNaN(e) && !!e.match(/^[a-zA-Z]{1}$/),
				Tab: e === "Tab" || e === 9,
				Asterisk: e === "*" || e === 56
			};
			return Object.keys(s).find((i) => s[i] === !0) || "";
		} catch {
			return "";
		}
	}
	function c(t) {
		t.preventDefault(), t.stopPropagation();
	}
	function h(t, e) {
		t === "" || t.length === 0 || (typeof t == "string" ? e.classList.add(t) : e.classList.add(...t));
	}
	function l(t, e) {
		t === "" || t.length === 0 || (typeof t == "string" ? e.classList.remove(t) : e.classList.remove(...t));
	}
	function z(t = document, e = null) {
		const s = Array.from(t.querySelectorAll("a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),[tabindex]")).filter((i) => {
			let r = !0;
			return i.getAttribute("tabindex") === "-1" && (r = !1), r;
		});
		return e !== null ? s.filter(e) : s;
	}
	function H(t = document, e = null) {
		return z(t, e)[0] || !1;
	}
	var b = class {
		_equals = Object.is;
		_current;
		_committed;
		constructor(t, { equals: e = Object.is } = {}) {
			this._equals = e || Object.is, this._current = t, this._committed = t;
		}
		get value() {
			return this._current;
		}
		set value(t) {
			this._current = t;
		}
		get committed() {
			return this._committed;
		}
		get isDirty() {
			return !this._equals(this._current, this._committed);
		}
		commit() {
			return this._committed = this._current, this;
		}
		reset() {
			return this._current = this._committed, this;
		}
		update(t) {
			return this._current = t(this._current), this;
		}
	}, g = class L {
		_scope;
		_type = "_default";
		_storage = {};
		_crush = !1;
		constructor({ scope: e, type: s = null, crush: i = !1, initialize: r = !0 } = {}) {
			this._scope = e, this._type = s || "_default", this._crush = i, r && this.initialize();
		}
		initialize() {
			try {
				!this._crush && typeof window[this.scope] < "u" && (f(L, { storage: window[this.scope] }, { shouldThrow: !1 }).status || typeof window[this.scope].storage < "u" && typeof window[this.scope].scope < "u" && typeof window[this.scope].type < "u") && (this._storage = window[this.scope].storage);
			} catch {} finally {
				window[this.scope] = this;
			}
		}
		get scope() {
			return this._scope;
		}
		get type() {
			return this._type;
		}
		set type(e) {
			n("string", { type: e }) && (this._type = e);
		}
		get storage() {
			return this._storage;
		}
		get({ type: e = this.type, key: s = null } = {}) {
			const i = n("string", { type: e });
			if (!i.status) throw new Error(`StorageManager (${this.scope}): ${i.message}`);
			if (!this.storage[e]) throw new Error(`StorageManager (${this.scope}): Type "${e}" is not initialized.`);
			if (s !== null) {
				const r = n("string", { key: s });
				if (!r.status) throw new Error(`StorageManager (${this.scope}): ${r.message}`);
				return this.storage[e][s];
			}
			return this.storage[e];
		}
		set({ type: e = this.type, key: s = null, data: i = {} } = {}) {
			const r = n("string", { type: e }), o = n("object", { data: i });
			if (!r.status) throw new Error(`StorageManager (${this.scope}): ${r.message}`);
			if (!o.status) throw new Error(`StorageManager (${this.scope}): ${o.message}`);
			if (s !== null) {
				const d = n("string", { key: s });
				if (!d.status) throw new Error(`StorageManager (${this.scope}): ${d.message}`);
				this._storage[e] || (this._storage[e] = {}), this._storage[e][s] = i;
			} else this._storage[e] = i;
		}
		clear({ type: e = this.type, key: s = null } = {}) {
			const i = n("string", { type: e });
			if (!i.status) throw new Error(`StorageManager (${this.scope}): ${i.message}`);
			if (s !== null) {
				const r = n("string", { key: s });
				if (!r.status) throw new Error(`StorageManager (${this.scope}): ${r.message}`);
				delete this.storage[e][s];
			} else delete this.storage[e];
		}
		dispose() {
			delete this._storage, delete this;
		}
	}, q = class {
		_dom = {};
		_rootDOMElement = "";
		_protectedDOMElements = [];
		_selectors = {};
		_elements = {};
		_classes = { initialize: "" };
		_durations = {};
		_delays = {};
		_focusState = "none";
		_currentEvent = "none";
		_breakpoint = "";
		_mediaQueryString = "";
		_mediaQueryList = null;
		_mediaQueryListEventCallback = (t) => {
			t.matches;
		};
		_intervals = {};
		_timeouts = {};
		_listeners = [];
		_events = {
			initialize: new CustomEvent("grauplComponentInitialize", { detail: { component: this } }),
			preinitialize: new CustomEvent("grauplComponentPreinitialize", { detail: { component: this } }),
			postinitialize: new CustomEvent("grauplComponentPostinitialize", { detail: { component: this } }),
			validate: new CustomEvent("grauplComponentValidate", { detail: { component: this } }),
			prevalidate: new CustomEvent("grauplComponentPrevalidate", { detail: { component: this } }),
			postvalidate: new CustomEvent("grauplComponentPostvalidate", { detail: { component: this } })
		};
		_prefix = "graupl-";
		_key = "";
		_name = "Component";
		_storageKey = "components";
		_shouldStore = !0;
		_id = "";
		_valid = !0;
		_initialized = !1;
		_errors = [];
		constructor({ prefix: t = "graupl-", key: e = null, initializeClass: s = "initializing" } = {}) {
			this._classes.initialize = s || "", this._prefix = t || "", this._key = e || "";
		}
		initialize() {
			try {
				if (!this._validate()) throw new Error(`Graupl ${this.name}: Cannot initialize component. The following errors have been found:
 - ${this.errors.map((t) => t.message).join(`
 - `)}`);
				h(this.initializeClass, this.rootDOMElement), this._dispatchEvent("preinitialize", this.rootDOMElement), this._generateKey(), this._setDOMElements(), this._setIds(), this._setAriaAttributes(), this._setCustomProps(), this._createChildElements(), this._handleMediaMatch(), this._handleFocus(), this._handleHover(), this._handleClick(), this._handleKeydown(), this._handleKeyup(), this._dispatchEvent("initialize", this.rootDOMElement), this._store(), l(this.initializeClass, this.rootDOMElement), this._initialized = !0, this._dispatchEvent("postinitialize", this.rootDOMElement);
			} catch (t) {
				console.error(t);
			}
		}
		init() {
			this.initialize();
		}
		get dom() {
			return this._dom;
		}
		get rootDOMElement() {
			return this._dom[this._rootDOMElement] || document.documentElement;
		}
		get selectors() {
			return this._selectors;
		}
		get elements() {
			return this._elements;
		}
		get classes() {
			return this._classes;
		}
		get durations() {
			return this._durations;
		}
		get delays() {
			return this._delays;
		}
		get intervals() {
			return this._intervals;
		}
		get timeouts() {
			return this._timeouts;
		}
		get listeners() {
			return this._listeners;
		}
		get events() {
			return this._events;
		}
		get initializeClass() {
			return this._classes.initialize;
		}
		set initializeClass(t) {
			a({ initializeClass: t }), this._classes.initialize !== t && (this._classes.initialize = t);
		}
		get focusState() {
			return this._focusState;
		}
		set focusState(t) {
			O({ focusState: t }), this._focusState !== t && (this._focusState = t);
		}
		get currentEvent() {
			return this._currentEvent;
		}
		set currentEvent(t) {
			A({ currentEvent: t }), this._currentEvent !== t && (this._currentEvent = t);
		}
		get shouldFocus() {
			let t = !1;
			return this.currentEvent === "keyboard" && (t = !0), t;
		}
		get breakpoint() {
			return this._breakpoint;
		}
		set breakpoint(t) {
			n("string", { breakpoint: t }), this._breakpoint !== t && (this._breakpoint = t);
		}
		get mediaQuery() {
			return this._mediaQueryString !== "" ? this._mediaQueryString : this._breakpoint === "" ? "" : `(width <= ${this._breakpoint})`;
		}
		set mediaQuery(t) {
			n("string", { mediaQuery: t }), this._mediaQueryString !== t && (this._mediaQueryString = t);
		}
		get prefix() {
			return this._prefix;
		}
		get key() {
			return this._key;
		}
		get name() {
			return this._name;
		}
		get id() {
			return this._id;
		}
		get isValid() {
			return this._valid;
		}
		get isInitialized() {
			return this._initialized;
		}
		get errors() {
			return this._errors;
		}
		_validate() {
			this._dispatchEvent("prevalidate", this.rootDOMElement);
			const t = M(this, { shouldThrow: !1 });
			if (t.status || (this._errors = [...this._errors, ...t.errors], this._valid = !1), Object.keys(this._dom).length > 0) {
				const i = {};
				for (const o of Object.keys(this._dom)) Array.isArray(this._dom[o]) ? this._dom[o].forEach((d, E) => {
					i[`${o}Element[${E}]`] = d;
				}) : this._dom[o] !== null && (i[`${o}Element`] = this._dom[o]);
				const r = f(HTMLElement, i, { shouldThrow: !1 });
				r.status || (this._errors = [...this._errors, ...r.errors], this._valid = !1);
			}
			if (Object.keys(this._selectors).length > 0) {
				const i = {};
				for (const o of Object.keys(this._selectors)) i[`${o}Selector`] = this._selectors[o];
				const r = C(i, { shouldThrow: !1 });
				r.status || (this._errors = [...this._errors, ...r.errors], this._valid = !1);
			}
			if (Object.keys(this._classes).length > 0) {
				const i = {};
				for (const o of Object.keys(this._classes)) this._classes[o] !== "" && (i[`${o}Class`] = this._classes[o]);
				const r = a(i, { shouldThrow: !1 });
				r.status || (this._errors = [...this._errors, ...r.errors], this._valid = !1);
			}
			if (Object.keys(this._durations).length > 0) {
				const i = {};
				for (const o of Object.keys(this._durations)) i[`${o}Duration`] = this._durations[o];
				const r = n("number", i, { shouldThrow: !1 });
				r.status || (this._errors = [...this._errors, ...r.errors], this._valid = !1);
			}
			if (Object.keys(this.delays).length > 0) {
				const i = {};
				for (const o of Object.keys(this.delays)) i[`${o}Delay`] = this.delays[o];
				const r = n("number", i, { shouldThrow: !1 });
				r.status || (this._errors = [...this._errors, ...r.errors], this._valid = !1);
			}
			const e = {
				_storageKey: this._storageKey,
				key: this._key,
				prefix: this._prefix,
				mediaQuery: this._mediaQueryString,
				breakpoint: this._breakpoint
			};
			this._protectedDOMElements.forEach((i) => {
				e[`_protectedDOMElementType[${i}]`] = i;
			});
			const s = n("string", e, { shouldThrow: !1 });
			return s.status || (this._errors = [...this._errors, ...s.errors], this._valid = !1), this._dispatchEvent("validate", this.rootDOMElement), this._dispatchEvent("postvalidate", this.rootDOMElement), this._valid;
		}
		_generateKey(t = !1) {
			(this._key === "" || t) && (this._key = Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 10));
		}
		_setIds() {}
		_setAriaAttributes() {}
		_setCustomProps() {}
		_setDOMElementType(t, { context: e, overwrite: s = !0, strict: i = !1 } = {}) {
			if (typeof this.selectors[t] != "string") throw new Error(`Graupl ${this.name}: "${t}" is not a valid element type.`);
			if (this._rootDOMElement === t || this._protectedDOMElements.includes(t)) throw new Error(`Graupl ${this.name}: "${t}" element cannot be set through _setDOMElementType because it is a protected element.`);
			f(HTMLElement, { context: e });
			const r = Array.from(e.querySelectorAll(this.selectors[t])).filter((o) => i ? o.parentElement === e : !0);
			Array.isArray(this._dom[t]) ? s ? this._dom[t] = r : this._dom[t] = [...this._dom[t], ...r] : this._dom[t] = r[0] || null;
		}
		_resetDOMElementType(t) {
			if (typeof this.selectors[t] != "string") throw new Error(`Graupl ${this.name}: "${t}" is not a valid element type.`);
			if (this._rootDOMElement === t || this._protectedDOMElements.includes(t)) throw new Error(`Graupl ${this.name}: "${t}" element cannot be reset through _resetDOMElementType because it is a protected element.`);
			Array.isArray(this._dom[t]) ? this._dom[t] = [] : this._dom[t] = null;
		}
		_setDOMElements() {}
		_createChildElements() {}
		_handleMediaMatch() {
			this.mediaQuery !== "" && (this._mediaQueryList = window.matchMedia(this.mediaQuery), this._addEventListener("change", this._mediaQueryList, this._mediaQueryListEventCallback), this._mediaQueryListEventCallback(this._mediaQueryList));
		}
		_handleFocus() {}
		_handleClick() {}
		_handleHover() {}
		_handleKeydown() {}
		_handleKeyup() {}
		_store() {
			this._shouldStore && (f(g, { storage: window.GrauplStorage }, { shouldThrow: !1 }).status || new g({ scope: "GrauplStorage" }), window.GrauplStorage.set({
				key: this.id !== "" ? this.id : this.key,
				type: this._storageKey,
				data: this
			}));
		}
		_unstore() {
			this._shouldStore && f(g, { storage: window.GrauplStorage }, { shouldThrow: !1 }).status && window.GrauplStorage.clear({
				key: this.id !== "" ? this.id : this.key,
				type: this._storageKey
			});
		}
		_setInterval(t, e, s = "_default") {
			this._clearInterval(s), this._intervals[s] = setInterval(t, e);
		}
		_clearInterval(t = "_default") {
			clearInterval(this._intervals[t]);
		}
		_clearIntervals() {
			for (const t of Object.keys(this._intervals)) this._clearInterval(t);
		}
		_setTimeout(t, e, s = "_default") {
			this._clearTimeout(s), this._timeouts[s] = setTimeout(t, e);
		}
		_clearTimeout(t = "_default") {
			clearTimeout(this._timeouts[t]);
		}
		_clearTimeouts() {
			for (const t of Object.keys(this._timeouts)) this._clearTimeout(t);
		}
		_registerEvent(t, { bubbles: e = !0, detail: s = {} } = {}) {
			n("string", { name: t }), n("boolean", { bubbles: e }), n("object", { detail: s });
			const i = `graupl${this.name}${t.charAt(0).toUpperCase()}${t.slice(1)}`;
			this._events[t] = new CustomEvent(i, {
				bubbles: e,
				detail: {
					component: this,
					...s
				}
			});
		}
		_dispatchEvent(t, e) {
			T(t, this), f(HTMLElement, { element: e }), e.dispatchEvent(this.events[t]);
		}
		_addEventListener(t, e, s, i = {}) {
			e.addEventListener(t, s, i), this._listeners.push({
				type: t,
				element: e,
				listener: s,
				options: i
			});
		}
		_removeEventListener(t, e, s, i = {}) {
			e.removeEventListener(t, s, i);
			let r = -1;
			this._listeners.forEach((o, d) => {
				o.type === t && o.element === e && o.listener === s && JSON.stringify(o.options) === JSON.stringify(i) && (r = d);
			}), r !== -1 && this._listeners.splice(r, 1);
		}
		_removeEventListeners({ type: t = null, element: e = null } = {}) {
			[...this._listeners].forEach((s) => {
				t !== null && s.type !== t || e !== null && s.element !== e || this._removeEventListener(s.type, s.element, s.listener, s.options);
			});
		}
		focus() {
			this.focusState = "self", this.shouldFocus && this.rootDOMElement.focus();
		}
		blur() {
			this.focusState = "none", this.shouldFocus && this.rootDOMElement.blur();
		}
		dispose() {
			this._clearIntervals(), this._clearTimeouts(), this._removeEventListeners(), this._unstore(), delete this;
		}
	}, Q = class extends q {
		_rootDOMElement = "shelf";
		_protectedDOMElements = [
			"controller",
			"lockController",
			"hoverController",
			"sideController"
		];
		_hover = !1;
		_locked = new b(!1);
		_softLocked = !1;
		_side = "left";
		_otherSide = "right";
		_open = !1;
		_mediaQueryListEventCallback = (t) => {
			t.matches ? (this.isOpen && this.close({ preserveLock: this.shouldBeLocked }), this.dom.lockController && this.dom.lockController.setAttribute("disabled", "disabled")) : (this.shouldBeLocked && !this.isOpen && (this._locked.reset(), this.lock({ force: !0 })), this.dom.lockController && this.dom.lockController.removeAttribute("disabled"));
		};
		_storageKey = "navigation-shelves";
		_name = "NavigationShelf";
		constructor({ shelfElement: t, controllerElement: e, lockControllerElement: s, hoverControllerElement: i, sideControllerElement: r, dependentSelector: o = ".shelf-aware", lockedClass: d = "locked", unlockedClass: E = "unlocked", hoverClass: I = "hoverable", noHoverClass: x = "not-hoverable", leftClass: K = "left-side", rightClass: P = "right-side", openClass: G = "show", closeClass: R = "hide", transitionClass: N = "transitioning", transitionDuration: U = 250, openDuration: B = -1, closeDuration: J = -1, hoverable: Z = !1, hoverDelay: W = 250, enterDelay: X = -1, leaveDelay: Y = -1, locked: tt = !1, side: et = "left", minWidth: st = "1023px", mediaQuery: it = "", prefix: rt = "graupl-", key: ot = null, initializeClass: nt = "initializing", initialize: ht = !1 } = {}) {
			super({
				prefix: rt,
				key: ot,
				initializeClass: nt
			}), this._dom.shelf = t, this._dom.controller = e || null, this._dom.lockController = s || null, this._dom.hoverController = i || null, this._dom.sideController = r || null, this._dom.dependents = [], this._selectors.dependents = o, this._classes.locked = d || "", this._classes.unlocked = E || "", this._classes.hover = I || "", this._classes.noHover = x || "", this._classes.left = K || "", this._classes.right = P || "", this._classes.open = G || "", this._classes.close = R || "", this._classes.transition = N || "", this._durations.transition = U, this._durations.open = B, this._durations.close = J, this._locked = new b(tt), this._breakpoint = st, this._mediaQueryString = it || "", this._side = et, this._side === "right" && (this._otherSide = "left"), this._hover = Z, this._delays.hover = W, this._delays.enter = X, this._delays.leave = Y, this._registerEvent("expand", { detail: { shelf: this } }), this._registerEvent("collapse", { detail: { shelf: this } }), this._registerEvent("lock", { detail: { shelf: this } }), this._registerEvent("unlock", { detail: { shelf: this } }), this._registerEvent("shiftSide", { detail: { shelf: this } }), this._registerEvent("enableHover", { detail: { shelf: this } }), this._registerEvent("disableHover", { detail: { shelf: this } }), this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
				this._mediaQueryList.matches ? (this.close({
					force: !0,
					emit: !1,
					transition: !1,
					preserveLock: this.isLocked
				}), this.dom.lockController && this.dom.lockController.setAttribute("disabled", "disabled")) : ((this.dom.controller.getAttribute("aria-expanded") === "true" || this.isLocked) && (this.open({
					emit: !1,
					transition: !1
				}), this.isLocked && this.lock({ force: !0 })), this.dom.lockController && this.dom.lockController.removeAttribute("disabled")), this.hover ? this._enableHover({ emit: !1 }) : this._disableHover({ emit: !1 }), this._shiftSide({ emit: !1 });
			}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
				const $ = n("boolean", {
					hoverable: this._hover,
					locked: this._locked.value
				}, { shouldThrow: !1 });
				$.status || (this._errors = [...this._errors, ...$.errors], this._valid = !1);
				const D = j({ side: this._side }, { shouldThrow: !1 });
				D.status || (this._errors = [...this._errors, ...D.errors], this._valid = !1);
			}), ht && this.initialize();
		}
		get lockedClass() {
			return this._classes.locked;
		}
		set lockedClass(t) {
			a({ lockedClass: t }), this._classes.locked !== t && (this._classes.locked = t);
		}
		get unlockedClass() {
			return this._classes.unlocked;
		}
		set unlockedClass(t) {
			a({ unlockedClass: t }), this._classes.unlocked !== t && (this._classes.unlocked = t);
		}
		get hoverClass() {
			return this._classes.hover;
		}
		set hoverClass(t) {
			a({ hoverClass: t }), this._classes.hover !== t && (this._classes.hover = t);
		}
		get noHoverClass() {
			return this._classes.noHover;
		}
		set noHoverClass(t) {
			a({ noHoverClass: t }), this._classes.noHover !== t && (this._classes.noHover = t);
		}
		get leftClass() {
			return this._classes.left;
		}
		set leftClass(t) {
			a({ leftClass: t }), this._classes.left !== t && (this._classes.left = t);
		}
		get rightClass() {
			return this._classes.right;
		}
		set rightClass(t) {
			a({ rightClass: t }), this._classes.right !== t && (this._classes.right = t);
		}
		get openClass() {
			return this._classes.open;
		}
		set openClass(t) {
			a({ openClass: t }), this._classes.open !== t && (this._classes.open = t);
		}
		get closeClass() {
			return this._classes.close;
		}
		set closeClass(t) {
			a({ closeClass: t }), this._classes.close !== t && (this._classes.close = t);
		}
		get transitionClass() {
			return this._classes.transition;
		}
		set transitionClass(t) {
			a({ transitionClass: t }), this._classes.transition !== t && (this._classes.transition = t);
		}
		get transitionDuration() {
			return this._durations.transition;
		}
		set transitionDuration(t) {
			n("number", { transitionDuration: t }), this._durations.transition !== t && (this._durations.transition = t, this._setTransitionDurations());
		}
		get openDuration() {
			return this._durations.open === -1 ? this.transitionDuration : this._durations.open;
		}
		set openDuration(t) {
			n("number", { openDuration: t }), this._durations.open !== t && (this._durations.open = t, this._setTransitionDurations());
		}
		get closeDuration() {
			return this._durations.close === -1 ? this.transitionDuration : this._durations.close;
		}
		set closeDuration(t) {
			n("number", { closeDuration: t }), this._durations.close !== t && (this._durations.close = t, this._setTransitionDurations());
		}
		get hover() {
			return this._hover;
		}
		get hoverDelay() {
			return this._delays.hover;
		}
		set hoverDelay(t) {
			n("number", { hoverDelay: t }), this._delays.hover !== t && (this._delays.hover = t);
		}
		get enterDelay() {
			return this._delays.enter === -1 ? this.hoverDelay : this._delays.enter;
		}
		set enterDelay(t) {
			n("number", { enterDelay: t }), this._delays.enter !== t && (this._delays.enter = t);
		}
		get leaveDelay() {
			return this._delays.leave === -1 ? this.hoverDelay : this._delays.leave;
		}
		set leaveDelay(t) {
			n("number", { leaveDelay: t }), this._delays.leave !== t && (this._delays.leave = t);
		}
		get isLocked() {
			return this._locked.value;
		}
		get shouldBeLocked() {
			return this._locked.committed;
		}
		get side() {
			return this._side;
		}
		get otherSide() {
			return this._otherSide;
		}
		get isSoftLocked() {
			return this._softLocked;
		}
		set isSoftLocked(t) {
			n("boolean", { isSoftLocked: t }), this._softLocked !== t && (this._softLocked = t);
		}
		get isOpen() {
			return this._open;
		}
		_setIds() {
			this.dom.shelf.id = this.dom.shelf.id || `navigation-shelf-${this.key}`, this.dom.controller && (this.dom.controller.id = this.dom.controller.id || `navigation-shelf-toggle-${this.key}`), this.dom.lockController && (this.dom.lockController.id = this.dom.lockController.id || `navigation-shelf-lock-toggle-${this.key}`), this.dom.hoverController && (this.dom.hoverController.id = this.dom.hoverController.id || `navigation-shelf-hover-toggle-${this.key}`), this._id = this.dom.shelf.id;
		}
		_setAriaAttributes() {
			this.dom.controller && (this.dom.controller.setAttribute("aria-controls", this.dom.shelf.id), this.dom.controller.getAttribute("aria-expanded") !== "true" && this.dom.controller.setAttribute("aria-expanded", "false")), this.dom.lockController && (this.dom.lockController.setAttribute("aria-controls", this.dom.shelf.id), this.dom.lockController.setAttribute("aria-pressed", this.isLocked ? "true" : "false")), this.dom.hoverController && (this.dom.hoverController.setAttribute("aria-controls", this.dom.shelf.id), this.dom.hoverController.setAttribute("aria-pressed", this._hoverType === "on" ? "true" : "false")), this.dom.sideController && this.dom.sideController.setAttribute("aria-controls", this.dom.shelf.id);
		}
		_setCustomProps() {
			this.dom.shelf.style.setProperty(`--${this.prefix}navigation-shelf-transition-duration`, `${this.transitionDuration}ms`), this.dom.shelf.style.setProperty(`--${this.prefix}navigation-shelf-open-transition-duration`, `${this.openDuration}ms`), this.dom.shelf.style.setProperty(`--${this.prefix}navigation-shelf-close-transition-duration`, `${this.closeDuration}ms`);
		}
		_setDOMElements() {
			this._setDOMElementType("dependents", { context: document.body });
		}
		_handleFocus() {
			this.dom.shelf.addEventListener("focusin", () => {
				this.focusState = "self", this.open();
			}), this.dom.shelf.addEventListener("focusout", (t) => {
				t.relatedTarget === null || this.dom.shelf.contains(t.relatedTarget) || (this.focusState = "none", this.isLocked || this.close());
			});
		}
		_handleClick() {
			for (const t of Object.values(this.dom)) t && (Array.isArray(t) || t.addEventListener("pointerdown", () => {
				this.currentEvent = "mouse", this._clearTimeout();
			}, { passive: !0 }));
			this.dom.controller && this.dom.controller.addEventListener("click", (t) => {
				t.button === 0 && (this.currentEvent = "mouse", c(t), this.toggle({ preserveLock: !1 }), this.isOpen && (this.focusState = "self", this.isSoftLocked = !0));
			}), this.dom.hoverController && this.dom.hoverController.addEventListener("click", (t) => {
				t.button === 0 && (this.currentEvent = "mouse", c(t), this.focusState = "self", this.toggleHover(), this.hover && this.open());
			}), this.dom.lockController && this.dom.lockController.addEventListener("click", (t) => {
				t.button === 0 && (this.currentEvent = "mouse", c(t), this.focusState = "self", this.toggleLock());
			}), this.dom.sideController && this.dom.sideController.addEventListener("click", (t) => {
				t.button === 0 && (this.currentEvent = "mouse", c(t), this.focusState = "self", this.toggleSide());
			}), this.dom.shelf.addEventListener("click", (t) => {
				t.button === 0 && (this.currentEvent = "mouse", this.focusState = "self", this.isSoftLocked = !0, this.open());
			}), document.addEventListener("click", (t) => {
				this.focusState !== "none" && (this.isLocked || this.dom.shelf === t.target || this.dom.shelf.contains(t.target) || (this.currentEvent = "mouse", this.close()));
			});
		}
		_handleHover() {
			this.dom.shelf.addEventListener("pointerenter", (t) => {
				t.pointerType === "pen" || t.pointerType === "touch" || this.isLocked || this.isSoftLocked || this.hover && (this.currentEvent = "mouse", this.enterDelay > 0 ? (this._clearTimeout(), this._setTimeout(() => {
					this.isOpen || this.open();
				}, this.enterDelay)) : this.open());
			}), this.dom.shelf.addEventListener("pointerleave", (t) => {
				t.pointerType === "pen" || t.pointerType === "touch" || this.isLocked || this.isSoftLocked || this.hover && (this.currentEvent = "mouse", this.leaveDelay > 0 ? (this._clearTimeout(), this._setTimeout(() => {
					this.isOpen && this.close();
				}, this.leaveDelay)) : this.close());
			});
		}
		_handleKeydown() {
			this.dom.shelf.addEventListener("keydown", (t) => {
				u(t) === "Escape" && c(t);
			});
			for (const t of Object.values(this.dom)) t && (Array.isArray(t) || t !== this.dom.shelf && t.addEventListener("keydown", (e) => {
				this.currentEvent = "keyboard";
				const s = u(e);
				(s === "Space" || s === "Enter") && c(e);
			}));
		}
		_handleKeyup() {
			this.dom.shelf.addEventListener("keyup", (t) => {
				this.currentEvent = "keyboard", u(t) === "Escape" && this.close();
			}), this.dom.controller && this.dom.controller.addEventListener("keyup", (t) => {
				this.currentEvent = "keyboard";
				const e = u(t);
				(e === "Space" || e === "Enter") && (c(t), this.toggle(), this.isOpen && H(this.dom.shelf).focus());
			}), this.dom.hoverController && this.dom.hoverController.addEventListener("keyup", (t) => {
				this.currentEvent = "keyboard";
				const e = u(t);
				(e === "Space" || e === "Enter") && (c(t), this.toggleHover());
			}), this.dom.lockController && this.dom.lockController.addEventListener("keyup", (t) => {
				this.currentEvent = "keyboard";
				const e = u(t);
				(e === "Space" || e === "Enter") && (c(t), this.toggleLock());
			}), this.dom.sideController && this.dom.sideController.addEventListener("keyup", (t) => {
				this.currentEvent = "keyboard";
				const e = u(t);
				(e === "Space" || e === "Enter") && (c(t), this.toggleSide());
			});
		}
		_reveal({ emit: t = !0, transition: e = !0 } = {}) {
			this.dom.controller && this.dom.controller.setAttribute("aria-expanded", "true"), this.isInitialized ? e && this.transitionClass !== "" ? (h(this.transitionClass, this.dom.shelf), requestAnimationFrame(() => {
				l(this.closeClass, this.dom.shelf), requestAnimationFrame(() => {
					h(this.openClass, this.dom.shelf), requestAnimationFrame(() => {
						setTimeout(() => {
							l(this.transitionClass, this.dom.shelf);
						}, this.openDuration);
					});
				});
			})) : (h(this.openClass, this.dom.shelf), l(this.closeClass, this.dom.shelf)) : (h(this.initializeClass, this.dom.shelf), requestAnimationFrame(() => {
				h(this.openClass, this.dom.shelf), l(this.closeClass, this.dom.shelf), requestAnimationFrame(() => {
					l(this.initializeClass, this.dom.shelf);
				});
			})), t && this._dispatchEvent("expand", this.dom.shelf);
		}
		_conceal({ emit: t = !0, transition: e = !0 } = {}) {
			this.dom.controller && this.dom.controller.setAttribute("aria-expanded", "false"), this.isSoftLocked = !1, this.isInitialized ? e && this.transitionClass !== "" ? (h(this.transitionClass, this.dom.shelf), requestAnimationFrame(() => {
				l(this.openClass, this.dom.shelf), requestAnimationFrame(() => {
					h(this.closeClass, this.dom.shelf), requestAnimationFrame(() => {
						setTimeout(() => {
							l(this.transitionClass, this.dom.shelf);
						}, this.closeDuration);
					});
				});
			})) : (h(this.closeClass, this.dom.shelf), l(this.openClass, this.dom.shelf)) : (h(this.initializeClass, this.dom.shelf), requestAnimationFrame(() => {
				h(this.closeClass, this.dom.shelf), l(this.openClass, this.dom.shelf), requestAnimationFrame(() => {
					l(this.initializeClass, this.dom.shelf);
				});
			})), t && this._dispatchEvent("collapse", this.dom.shelf);
		}
		_lock({ emit: t = !0 } = {}) {
			this.dom.lockController && this.dom.lockController.setAttribute("aria-pressed", "true"), h(this.lockedClass, this.dom.shelf), this.dom.dependents.forEach((e) => {
				h(this.lockedClass, e);
			}), l(this.unlockedClass, this.dom.shelf), this.dom.dependents.forEach((e) => {
				l(this.unlockedClass, e);
			}), t && this._dispatchEvent("lock", this.dom.shelf);
		}
		_unlock({ emit: t = !0 } = {}) {
			this.dom.lockController && this.dom.lockController.setAttribute("aria-pressed", "false"), h(this.unlockedClass, this.dom.shelf), this.dom.dependents.forEach((e) => {
				h(this.unlockedClass, e);
			}), l(this.lockedClass, this.dom.shelf), this.dom.dependents.forEach((e) => {
				l(this.lockedClass, e);
			}), t && this._dispatchEvent("unlock", this.dom.shelf);
		}
		_shiftSide({ emit: t = !0 } = {}) {
			const e = this._classes[this.side], s = this._classes[this.otherSide];
			h(e, this.dom.shelf), this.dom.dependents.forEach((i) => {
				h(e, i);
			}), l(s, this.dom.shelf), this.dom.dependents.forEach((i) => {
				l(s, i);
			}), t && this._dispatchEvent("shiftSide", this.dom.shelf);
		}
		_enableHover({ emit: t = !0 } = {}) {
			this.dom.hoverController && this.dom.hoverController.setAttribute("aria-pressed", "true"), h(this.hoverClass, this.dom.shelf), l(this.noHoverClass, this.dom.shelf), t && this._dispatchEvent("enableHover", this.dom.shelf);
		}
		_disableHover({ emit: t = !0 } = {}) {
			this.dom.hoverController && this.dom.hoverController.setAttribute("aria-pressed", "false"), h(this.noHoverClass, this.dom.shelf), l(this.hoverClass, this.dom.shelf), t && this._dispatchEvent("disableHover", this.dom.shelf);
		}
		open({ force: t = !1, emit: e = !0, transition: s = !0 } = {}) {
			this.isOpen && !t || (this._reveal({
				emit: e,
				transition: s
			}), this._open = !0);
		}
		close({ force: t = !1, emit: e = !0, transition: s = !0, preserveLock: i = !0 } = {}) {
			!this.isOpen && !t || (this.unlock({ updateLock: !i }), this._conceal({
				emit: e,
				transition: s
			}), this._open = !1);
		}
		toggle({ force: t = !1, emit: e = !0, transition: s = !0, preserveLock: i = !0 } = {}) {
			this.isOpen ? this.close({
				force: t,
				emit: e,
				transition: s,
				preserveLock: i
			}) : this.open({
				force: t,
				emit: e,
				transition: s
			});
		}
		lock({ force: t = !1, emit: e = !0, transition: s = !0 } = {}) {
			this.isLocked && !t || (this._locked.value = !0, this._lock(), this._locked.commit(), this.open({
				force: !0,
				emit: e,
				transition: s
			}));
		}
		unlock({ emit: t = !0, updateLock: e = !0 } = {}) {
			if (!this.isLocked) {
				this._locked.value = !1, e && this._locked.commit();
				return;
			}
			this._locked.value = !1, this._unlock({ emit: t }), e && this._locked.commit();
		}
		toggleLock({ force: t = !1, emit: e = !0, transition: s = !0, updateLock: i = !0 } = {}) {
			this.isLocked ? this.unlock({
				emit: e,
				updateLock: i
			}) : this.lock({
				force: t,
				emit: e,
				transition: s
			});
		}
		toLeft({ emit: t = !0 } = {}) {
			this.side !== "left" && (this._side = "left", this._otherSide = "right", this._shiftSide({ emit: t }));
		}
		toRight({ emit: t = !0 } = {}) {
			this.side !== "right" && (this._side = "right", this._otherSide = "left", this._shiftSide({ emit: t }));
		}
		toggleSide({ emit: t = !0 } = {}) {
			this.side === "left" ? this.toRight({ emit: t }) : this.toLeft({ emit: t });
		}
		enableHover({ emit: t = !0 } = {}) {
			this.hover || (this._enableHover({ emit: t }), this._hover = !0);
		}
		disableHover({ emit: t = !0 } = {}) {
			this.hover && (this._disableHover({ emit: t }), this._hover = !1);
		}
		toggleHover({ emit: t = !0 } = {}) {
			this.hover ? this.disableHover({ emit: t }) : this.enableHover({ emit: t });
		}
	};
	const w = /[\11\12\14\15\40]+/, y = "data-once", V = document;
	function v(t, e, s) {
		return t[`${e}Attribute`](y, s);
	}
	function _(t) {
		if (typeof t != "string") throw new TypeError("once ID must be a string");
		if (t === "" || w.test(t)) throw new RangeError("once ID must not be empty or contain spaces");
		return `[${y}~="${t}"]`;
	}
	function F(t) {
		if (!(t instanceof Element)) throw new TypeError("The element must be an instance of Element");
		return !0;
	}
	function m(t, e = V) {
		let s = t;
		if (t === null) s = [];
		else if (t) if (e instanceof Document || e instanceof DocumentFragment || e instanceof Element) typeof t == "string" ? s = e.querySelectorAll(t) : t instanceof Element && (s = [t]);
		else throw new TypeError("Context must be an object of type \"Document\", \"DocumentFragment\", or \"Element\".");
		else throw new TypeError("Selector must not be empty");
		return Array.prototype.slice.call(s);
	}
	function k(t, e, s) {
		return e.filter((i) => {
			const r = F(i) && i.matches(t);
			return r && s && s(i), r;
		});
	}
	function S(t, { add: e, remove: s }) {
		const i = [];
		v(t, "has") && v(t, "get").trim().split(w).forEach((o) => {
			i.indexOf(o) < 0 && o !== s && i.push(o);
		}), e && i.push(e);
		const r = i.join(" ");
		v(t, r === "" ? "remove" : "set", r);
	}
	function p(t, e, s) {
		return k(`:not(${_(t)})`, m(e, s), (i) => S(i, { add: t }));
	}
	return p.remove = (t, e, s) => k(_(t), m(e, s), (i) => S(i, { remove: t })), p.filter = (t, e, s) => k(_(t), m(e, s)), p.find = (t, e) => m(t ? _(t) : `[${y}]`, e), (t = {}, e = document, s = ".navigation-shelf") => {
		p("graupl-navigation-shelf-generator", s, e).forEach((i) => {
			const r = i.dataset.grauplNavigationShelfOptions ? JSON.parse(i.dataset.grauplNavigationShelfOptions.replace(/'/g, "\"")) || {} : {};
			new Q({
				shelfElement: i,
				controllerElement: e.querySelector(".navigation-shelf-toggle") || null,
				lockControllerElement: e.querySelector(".navigation-shelf-lock-toggle") || null,
				hoverControllerElement: e.querySelector(".navigation-shelf-hover-toggle") || null,
				sideControllerElement: e.querySelector(".navigation-shelf-side-toggle") || null,
				initialize: !0,
				...t,
				...r
			});
		});
	};
})();

//# sourceMappingURL=navigation-shelf.iife.js.map