(function() {
	function c(t, e, { shouldThrow: s = !0 } = {}) {
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
	function u(t, { shouldThrow: e = !0 } = {}) {
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
	function A(t, { shouldThrow: e = !0 } = {}) {
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
	function z(t, { shouldThrow: e = !0 } = {}) {
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
	function j(t, e, { shouldThrow: s = !0 } = {}) {
		const i = {
			status: !0,
			errors: []
		};
		try {
			if (n("string", { tagName: t }, { shouldThrow: !0 }).status && c(HTMLElement, e, { shouldThrow: !0 }).status) {
				const r = t.toLowerCase();
				for (const o in e) try {
					if (e[o].tagName.toLowerCase() !== r) throw new TypeError(`${o} must be a <${r}> element. <${e[o].tagName.toLowerCase()}> given.`);
				} catch (a) {
					i.status = !1, i.errors.push(a);
				}
			}
		} catch (r) {
			i.status = !1, i.errors.push(r);
		}
		if (s && !i.status) throw i.errors[0];
		return i;
	}
	function F(t, e, { shouldThrow: s = !0 } = {}) {
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
	function x(t, { shouldThrow: e = !0 } = {}) {
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
	function h(t, e) {
		t === "" || t.length === 0 || (typeof t == "string" ? e.classList.add(t) : e.classList.add(...t));
	}
	function l(t, e) {
		t === "" || t.length === 0 || (typeof t == "string" ? e.classList.remove(t) : e.classList.remove(...t));
	}
	function m(t) {
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
	function d(t) {
		t.preventDefault(), t.stopPropagation();
	}
	var T = class {
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
				!this._crush && typeof window[this.scope] < "u" && (c(L, { storage: window[this.scope] }, { shouldThrow: !1 }).status || typeof window[this.scope].storage < "u" && typeof window[this.scope].scope < "u" && typeof window[this.scope].type < "u") && (this._storage = window[this.scope].storage);
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
				const a = n("string", { key: s });
				if (!a.status) throw new Error(`StorageManager (${this.scope}): ${a.message}`);
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
	}, v = class {
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
			u({ initializeClass: t }), this._classes.initialize !== t && (this._classes.initialize = t);
		}
		get focusState() {
			return this._focusState;
		}
		set focusState(t) {
			A({ focusState: t }), this._focusState !== t && (this._focusState = t);
		}
		get currentEvent() {
			return this._currentEvent;
		}
		set currentEvent(t) {
			z({ currentEvent: t }), this._currentEvent !== t && (this._currentEvent = t);
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
			const t = x(this, { shouldThrow: !1 });
			if (t.status || (this._errors = [...this._errors, ...t.errors], this._valid = !1), Object.keys(this._dom).length > 0) {
				const i = {};
				for (const o of Object.keys(this._dom)) Array.isArray(this._dom[o]) ? this._dom[o].forEach((a, w) => {
					i[`${o}Element[${w}]`] = a;
				}) : this._dom[o] !== null && (i[`${o}Element`] = this._dom[o]);
				const r = c(HTMLElement, i, { shouldThrow: !1 });
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
				const r = u(i, { shouldThrow: !1 });
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
			c(HTMLElement, { context: e });
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
			this._shouldStore && (c(g, { storage: window.GrauplStorage }, { shouldThrow: !1 }).status || new g({ scope: "GrauplStorage" }), window.GrauplStorage.set({
				key: this.id !== "" ? this.id : this.key,
				type: this._storageKey,
				data: this
			}));
		}
		_unstore() {
			this._shouldStore && c(g, { storage: window.GrauplStorage }, { shouldThrow: !1 }).status && window.GrauplStorage.clear({
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
			F(t, this), c(HTMLElement, { element: e }), e.dispatchEvent(this.events[t]);
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
			this._listeners.forEach((o, a) => {
				o.type === t && o.element === e && o.listener === s && JSON.stringify(o.options) === JSON.stringify(i) && (r = a);
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
	}, Q = class extends v {
		_rootDOMElement = "item";
		_protectedDOMElements = ["link"];
		_storageKey = "breadcrumbItems";
		_shouldStore = !1;
		_toggle = !1;
		constructor({ breadcrumbItemElement: t, breadcrumbLinkElement: e = null, parentBreadcrumb: s, isToggle: i = !1, prefix: r = "graupl-", key: o = null, initializeClass: a = "initializing" }) {
			super({
				prefix: r,
				key: o,
				initializeClass: a
			}), this._dom.item = t, this._dom.link = e || null, this._elements.parent = s, this._toggle = i;
		}
		get isToggle() {
			return this._toggle;
		}
		focus() {
			this.elements.parent.shouldFocus && this.dom.link && requestAnimationFrame(() => {
				this.dom.link.focus();
			});
		}
		blur() {
			this.elements.parent.shouldFocus && this.dom.link && requestAnimationFrame(() => {
				this.dom.link.blur();
			});
		}
	}, q = class extends v {
		_rootDOMElement = "breadcrumb";
		_currentChild = 0;
		_open = new T(!1);
		_locked = new T(!1);
		_openInsideBreakpoint = !1;
		_openOutsideBreakpoint = !0;
		_closeInsideBreakpoint = !0;
		_closeOutsideBreakpoint = !1;
		_lockInsideBreakpoint = !1;
		_lockOutsideBreakpoint = !0;
		_unlockInsideBreakpoint = !1;
		_unlockOutsideBreakpoint = !1;
		_openOnFocus = !1;
		_closeOnBlur = !1;
		_storageKey = "breadcrumbs";
		_name = "Breadcrumb";
		_mediaQueryListEventCallback = (t) => {
			t.matches ? (this.unlockInsideBreakpoint && this.unlock(), this.isOpen && this.closeInsideBreakpoint ? (this.isLocked && this.unlock(), this.close({ preserveState: !0 })) : !this.isOpen && this.openInsideBreakpoint && (this.isLocked && this.unlock(), this.open()), this.lockInsideBreakpoint && this.lock()) : (this.unlockOutsideBreakpoint && this.unlock(), this.isOpen && this.closeOutsideBreakpoint ? (this.isLocked && this.unlock(), this.close({ preserveState: !0 })) : !this.isOpen && this.openOutsideBreakpoint && (this.isLocked && this.unlock(), this.open()), this.lockOutsideBreakpoint && this.lock());
		};
		constructor({ breadcrumbElement: t, breadcrumbItemsSelector: e = ".breadcrumb-item", breadcrumbLinksSelector: s = ".breadcrumb-link", breadcrumbToggleSelector: i = ".breadcrumb-toggle", lockedClass: r = "locked", unlockedClass: o = "unlocked", openClass: a = "show", closeClass: w = "hide", transitionClass: G = "transition", transitionDuration: H = 250, openDuration: N = -1, closeDuration: R = -1, openOnFocus: U = !1, closeOnBlur: J = !1, minWidth: $ = "", breakpoint: b = "856px", autoOpen: O = !1, openInsideBreakpoint: Z = !1, openOutsideBreakpoint: D = !0, closeInsideBreakpoint: M = !0, closeOutsideBreakpoint: W = !1, lockInsideBreakpoint: X = !1, lockOutsideBreakpoint: Y = !0, unlockInsideBreakpoint: tt = !0, unlockOutsideBreakpoint: et = !1, locked: st = !1, mediaQuery: it = "", prefix: rt = "graupl-", key: ot = null, initializeClass: nt = "initializing", initialize: at = !1 }) {
			super({
				prefix: rt,
				key: ot,
				initializeClass: nt
			}), this._dom.breadcrumb = t, this._dom.breadcrumbItems = [], this._dom.breadcrumbLinks = [], this._dom.breadcrumbToggle = null, this._selectors.breadcrumbItems = e, this._selectors.breadcrumbLinks = s, this._selectors.breadcrumbToggle = i, this._elements.breadcrumbItems = [], this._classes.locked = r || "", this._classes.unlocked = o || "", this._classes.open = a || "", this._classes.close = w || "", this._classes.transition = G || "", this._durations.transition = H, this._durations.open = N, this._durations.close = R, this._openOnFocus = U, this._closeOnBlur = J, $ !== "" && (console.warn("`minWidth` is deprecated and will be removed in a future release. Please set `breakpoint` instead."), b === "" && (b = $)), O && b !== "" && (console.warn("`autoOpen` is deprecated and will be removed in a future release. Please set `openOutsideBreakpoint` and `closeInsideBreakpoint` to `true` instead."), D = O, M = O), this._breakpoint = b || "", this._openInsideBreakpoint = Z, this._openOutsideBreakpoint = D, this._closeInsideBreakpoint = M, this._closeOutsideBreakpoint = W, this._lockInsideBreakpoint = X, this._lockOutsideBreakpoint = Y, this._unlockInsideBreakpoint = tt, this._unlockOutsideBreakpoint = et, this._mediaQueryString = it || "", this._locked.value = st, this._locked.commit(), this._registerEvent("expand", { detail: { breadcrumb: this } }), this._registerEvent("collapse", { detail: { breadcrumb: this } }), this._registerEvent("lock", { detail: { breadcrumb: this } }), this._registerEvent("unlock", { detail: { breadcrumb: this } }), this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
				requestAnimationFrame(() => {
					this.dom.breadcrumbToggle && (this.dom.breadcrumbToggle.getAttribute("aria-expanded") === "true" || this.openOutsideBreakpoint && !window.matchMedia(this.mediaQuery).matches || this.openInsideBreakpoint && window.matchMedia(this.mediaQuery).matches ? this.open({ force: !0 }) : this.close({ force: !0 })), this.isLocked || this.lockInsideBreakpoint && window.matchMedia(this.mediaQuery).matches || this.lockOutsideBreakpoint && !window.matchMedia(this.mediaQuery).matches ? this.lock({ force: !0 }) : this.unlock({ force: !0 });
				});
			}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
				const S = n("boolean", {
					openOnFocus: this._openOnFocus,
					closeOnBlur: this._closeOnBlur,
					openInsideBreakpoint: this._openInsideBreakpoint,
					openOutsideBreakpoint: this._openOutsideBreakpoint,
					closeInsideBreakpoint: this._closeInsideBreakpoint,
					closeOutsideBreakpoint: this._closeOutsideBreakpoint,
					lockInsideBreakpoint: this._lockInsideBreakpoint,
					lockOutsideBreakpoint: this._lockOutsideBreakpoint,
					unlockInsideBreakpoint: this._unlockInsideBreakpoint,
					unlockOutsideBreakpoint: this._unlockOutsideBreakpoint,
					locked: this._locked.value
				}, { shouldThrow: !1 });
				S.status || (this._errors = [...this._errors, ...S.errors], this._valid = !1);
			}), at && this.initialize();
		}
		get lockedClass() {
			return this._classes.locked;
		}
		set lockedClass(t) {
			u({ lockedClass: t }), this._classes.locked !== t && (this._classes.locked = t);
		}
		get unlockedClass() {
			return this._classes.unlocked;
		}
		set unlockedClass(t) {
			u({ unlockedClass: t }), this._classes.unlocked !== t && (this._classes.unlocked = t);
		}
		get openClass() {
			return this._classes.open;
		}
		set openClass(t) {
			u({ openClass: t }), this._classes.open !== t && (this._classes.open = t);
		}
		get closeClass() {
			return this._classes.close;
		}
		set closeClass(t) {
			u({ closeClass: t }), this._classes.close !== t && (this._classes.close = t);
		}
		get transitionClass() {
			return this._classes.transition;
		}
		set transitionClass(t) {
			u({ transitionClass: t }), this._classes.transition !== t && (this._classes.transition = t);
		}
		get transitionDuration() {
			return this._durations.transition;
		}
		set transitionDuration(t) {
			n("number", { transitionDuration: t }), this._durations.transition !== t && (this._durations.transition = t, this._setCustomProps());
		}
		get openDuration() {
			return this._durations.open === -1 ? this.transitionDuration : this._durations.open;
		}
		set openDuration(t) {
			n("number", { openDuration: t }), this._durations.open !== t && (this._durations.open = t, this._setCustomProps());
		}
		get closeDuration() {
			return this._durations.close === -1 ? this.transitionDuration : this._durations.close;
		}
		set closeDuration(t) {
			n("number", { closeDuration: t }), this._durations.close !== t && (this._durations.close = t, this._setCustomProps());
		}
		get openOnFocus() {
			return this._openOnFocus;
		}
		set openOnFocus(t) {
			n("boolean", { openOnFocus: t }), this._openOnFocus !== t && (this._openOnFocus = t);
		}
		get closeOnBlur() {
			return this._closeOnBlur;
		}
		set closeOnBlur(t) {
			n("boolean", { closeOnBlur: t }), this._closeOnBlur !== t && (this._closeOnBlur = t);
		}
		get isOpen() {
			return this._open.value;
		}
		get hasOpened() {
			return this._open.committed;
		}
		get openInsideBreakpoint() {
			return this._openInsideBreakpoint;
		}
		set openInsideBreakpoint(t) {
			n("boolean", { openInsideBreakpoint: t }), this._openInsideBreakpoint !== t && (this._openInsideBreakpoint = t);
		}
		get openOutsideBreakpoint() {
			return this._openOutsideBreakpoint;
		}
		set openOutsideBreakpoint(t) {
			n("boolean", { openOutsideBreakpoint: t }), this._openOutsideBreakpoint !== t && (this._openOutsideBreakpoint = t);
		}
		get closeInsideBreakpoint() {
			return this._closeInsideBreakpoint;
		}
		set closeInsideBreakpoint(t) {
			n("boolean", { closeInsideBreakpoint: t }), this._closeInsideBreakpoint !== t && (this._closeInsideBreakpoint = t);
		}
		get closeOutsideBreakpoint() {
			return this._closeOutsideBreakpoint;
		}
		set closeOutsideBreakpoint(t) {
			n("boolean", { closeOutsideBreakpoint: t }), this._closeOutsideBreakpoint !== t && (this._closeOutsideBreakpoint = t);
		}
		get lockInsideBreakpoint() {
			return this._lockInsideBreakpoint;
		}
		set lockInsideBreakpoint(t) {
			n("boolean", { lockInsideBreakpoint: t }), this._lockInsideBreakpoint !== t && (this._lockInsideBreakpoint = t);
		}
		get lockOutsideBreakpoint() {
			return this._lockOutsideBreakpoint;
		}
		set lockOutsideBreakpoint(t) {
			n("boolean", { lockOutsideBreakpoint: t }), this._lockOutsideBreakpoint !== t && (this._lockOutsideBreakpoint = t);
		}
		get isLocked() {
			return this._locked.value;
		}
		get shouldBeLocked() {
			return this._locked.committed;
		}
		get currentChild() {
			return this._currentChild;
		}
		set currentChild(t) {
			n("number", { currentChild: t }), this._currentChild !== t && t >= 0 && t < this.elements.breadcrumbItems.length && (this._currentChild = t);
		}
		get currentBreadcrumbItem() {
			return this.elements.breadcrumbItems[this.currentChild];
		}
		_setIds() {
			this.dom.breadcrumb.id = this.dom.breadcrumb.id || `breadcrumb-${this.key}`, this.dom.breadcrumbToggle && (this.dom.breadcrumbToggle.id = this.dom.breadcrumbToggle.id || `breadcrumb-toggle-${this.key}`), this._id = this.dom.breadcrumb.id;
		}
		_setAriaAttributes() {
			this.dom.breadcrumbToggle && (this.dom.breadcrumbToggle.getAttribute("aria-expanded") !== "true" && this.dom.breadcrumbToggle.setAttribute("aria-expanded", "false"), this.dom.breadcrumbToggle.setAttribute("aria-controls", this.dom.breadcrumb.id), j("button", { toggle: this.dom.breadcrumbToggle }, { shouldThrow: !1 }).status || this.dom.breadcrumbToggle.setAttribute("role", "button"));
		}
		_setCustomProps() {
			this.dom.breadcrumb.style.setProperty(`--${this.prefix}breadcrumb-transition-duration`, `${this.transitionDuration}ms`), this.dom.breadcrumb.style.setProperty(`--${this.prefix}breadcrumb-open-transition-duration`, `${this.openDuration}ms`), this.dom.breadcrumb.style.setProperty(`--${this.prefix}breadcrumb-close-transition-duration`, `${this.closeDuration}ms`);
		}
		_setDOMElements() {
			this._resetDOMElementType("breadcrumbItems"), this._setDOMElementType("breadcrumbItems", { context: this.dom.breadcrumb }), this._resetDOMElementType("breadcrumbLinks"), this._setDOMElementType("breadcrumbLinks", { context: this.dom.breadcrumb }), this._resetDOMElementType("breadcrumbToggle"), this._setDOMElementType("breadcrumbToggle", { context: this.dom.breadcrumb });
		}
		_createChildElements() {
			this.dom.breadcrumbItems.forEach((t) => {
				const e = t.querySelector(this.selectors.breadcrumbLinks), s = t.querySelector(this.selectors.breadcrumbToggle) !== null, i = new Q({
					breadcrumbItemElement: t,
					breadcrumbLinkElement: e,
					parentBreadcrumb: this,
					isToggle: s
				});
				this.elements.breadcrumbItems.push(i), s && (this._elements.breadcrumbToggle = i);
			});
		}
		_reveal({ emit: t = this.isInitialized, transition: e = this.isInitialized } = {}) {
			this.dom.breadcrumbToggle && this.dom.breadcrumbToggle.setAttribute("aria-expanded", "true"), e && this.transitionlass !== "" ? (h(this.transitionClass, this.dom.breadcrumb), requestAnimationFrame(() => {
				l(this.closeClass, this.dom.breadcrumb), requestAnimationFrame(() => {
					h(this.openClass, this.dom.breadcrumb), requestAnimationFrame(() => {
						setTimeout(() => {
							l(this.transitionClass, this.dom.breadcrumb);
						}, this.openDuration);
					});
				});
			})) : (h(this.openClass, this.dom.breadcrumb), l(this.closeClass, this.dom.breadcrumb)), t && (this.dom.breadcrumbToggle ? this._dispatchEvent("expand", this.dom.breadcrumbToggle) : this._dispatchEvent("expand", this.dom.breadcrumb));
		}
		_conceal({ emit: t = this.isInitialized, transition: e = this.isInitialized } = {}) {
			this.dom.breadcrumbToggle && this.dom.breadcrumbToggle.setAttribute("aria-expanded", "false"), e && this.transitionClass !== "" ? (h(this.transitionClass, this.dom.breadcrumb), requestAnimationFrame(() => {
				l(this.openClass, this.dom.breadcrumb), requestAnimationFrame(() => {
					h(this.closeClass, this.dom.breadcrumb), requestAnimationFrame(() => {
						setTimeout(() => {
							l(this.transitionClass, this.dom.breadcrumb);
						}, this.closeDuration);
					});
				});
			})) : (h(this.closeClass, this.dom.breadcrumb), l(this.openClass, this.dom.breadcrumb)), t && (this.dom.breadcrumbToggle ? this._dispatchEvent("collapse", this.dom.breadcrumbToggle) : this._dispatchEvent("collapse", this.dom.breadcrumb));
		}
		_lock({ emit: t = this.isInitialized } = {}) {
			h(this.lockedClass, this.dom.breadcrumb), l(this.unlockedClass, this.dom.breadcrumb), this.dom.breadcrumbToggle && this.dom.breadcrumbToggle.setAttribute("disabled", "true"), t && (this.dom.breadcrumbToggle ? this._dispatchEvent("lock", this.dom.breadcrumbToggle) : this._dispatchEvent("lock", this.dom.breadcrumb));
		}
		_unlock({ emit: t = this.isInitialized } = {}) {
			h(this.unlockedClass, this.dom.breadcrumb), l(this.lockedClass, this.dom.breadcrumb), this.dom.breadcrumbToggle && this.dom.breadcrumbToggle.removeAttribute("disabled"), t && (this.dom.breadcrumbToggle ? this._dispatchEvent("unlock", this.dom.breadcrumbToggle) : this._dispatchEvent("unlock", this.dom.breadcrumb));
		}
		_handleFocus() {
			this.elements.breadcrumbItems.forEach((t, e) => {
				t.dom.link && this._addEventListener("focus", t.dom.link, () => {
					this.focusState = "self", this.currentChild = e;
				});
			}), this._addEventListener("focusout", this.dom.breadcrumb, (t) => {
				!this.closeOnBlur || this.currentEvent !== "keyboard" || t.relatedTarget === null || this.dom.breadcrumb.contains(t.relatedTarget) || this.dom.breadcrumbToggle === t.relatedTarget || this.close();
			});
		}
		_handleClick() {
			this._addEventListener("click", document, (t) => {
				this.focusState !== "self" || !this.closeOnBlur || (this.currentEvent = "mouse", !this.dom.breadcrumb.contains(t.target) && this.dom.breadcrumbToggle !== t.target && this.close());
			}), this.dom.breadcrumbToggle && this._addEventListener("click", this.dom.breadcrumbToggle, (t) => {
				this.currentEvent = "mouse", t.button === 0 && (d(t), this.toggle());
			});
		}
		_handleKeydown() {
			this._addEventListener("keydown", this.dom.breadcrumb, (t) => {
				this.currentEvent = "keyboard", m(t) === "Escape" && d(t);
			}), this.dom.breadcrumbToggle && this._addEventListener("keydown", this.dom.breadcrumbToggle, (t) => {
				switch (this.currentEvent = "keyboard", m(t)) {
					case "Space":
					case "Enter":
						d(t);
						break;
				}
			});
		}
		_handleKeyup() {
			this._addEventListener("keyup", this.dom.breadcrumb, (t) => {
				this.currentEvent = "keyboard", m(t) === "Escape" && (d(t), this.close(), this.currentChild > this.elements.breadcrumbItems.indexOf(this.elements.breadcrumbToggle) && requestAnimationFrame(() => {
					this.focusToggle();
				}));
			}), this.dom.breadcrumbToggle && this._addEventListener("keyup", this.dom.breadcrumbToggle, (t) => {
				switch (this.currentEvent = "keyboard", m(t)) {
					case "Space":
					case "Enter":
						d(t), this.toggle(), this.isOpen ? requestAnimationFrame(() => {
							this.focusNextChild();
						}) : this.focusFirstChild();
						break;
					case "Tab":
						this.openOnFocus && (d(t), this.open(), requestAnimationFrame(() => {
							this.focusNextChild();
						}));
						break;
				}
			});
		}
		open({ force: t = !1, emit: e = this.isInitialized, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
			this.isOpen && !t || this.isLocked && !t || (this.focusState = "self", this._reveal({
				emit: e,
				transition: s
			}), this._open.value = !0, i || this._open.commit());
		}
		preview({ force: t = !1, emit: e = this.isInitialized, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
			this.isOpen && !t || this.isLocked && !t || (this.focusState = "none", this._reveal({
				emit: e,
				transition: s
			}), this._open.value = !0, i || this._open.commit());
		}
		close({ force: t = !1, emit: e = this.isInitialized, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
			!this.isOpen && !t || this.isLocked && !t || (this.focusState = "none", this._conceal({
				emit: e,
				transition: s
			}), this._open.value = !1, i || this._open.commit());
		}
		toggle({ force: t = !1, emit: e = this.isInitialized, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
			this.isOpen ? this.close({
				force: t,
				emit: e,
				transition: s,
				preserveState: i
			}) : this.open({
				force: t,
				emit: e,
				transition: s,
				preserveState: i
			});
		}
		lock({ force: t = !1, emit: e = this.isInitialized, preserveState: s = !1 } = {}) {
			this.isLocked && !t || (this._locked.value = !0, this._lock({ emit: e }), s || this._locked.commit());
		}
		unlock({ force: t = !1, emit: e = this.isInitialized, preserveState: s = !1 } = {}) {
			!this.isLocked && !t || (this._locked.value = !1, this._unlock({ emit: e }), s || this._locked.commit());
		}
		toggleLock({ force: t = !1, emit: e = this.isInitialized, preserveState: s = !1 } = {}) {
			this.isLocked ? this.unlock({
				force: t,
				emit: e,
				preserveState: s
			}) : this.lock({
				force: t,
				emit: e,
				preserveState: s
			});
		}
		focusCurrentChild() {
			this.focusState = "self", this.currentChild !== -1 && this.currentBreadcrumbItem.focus();
		}
		focusChild(t) {
			this.blurCurrentChild(), this.currentChild = t, this.focusCurrentChild();
		}
		focusFirstChild() {
			this.focusChild(0);
		}
		focusLastChild() {
			this.focusChild(this.elements.breadcrumbItems.length - 1);
		}
		focusNextChild() {
			this.currentChild < this.elements.breadcrumbItems.length - 1 ? this.focusChild(this.currentChild + 1) : this.focusCurrentChild();
		}
		focusPreviousChild() {
			this.currentChild > 0 ? this.focusChild(this.currentChild - 1) : this.focusCurrentChild();
		}
		blurCurrentChild() {
			this.focusState = "none", this.currentChild !== -1 && this.currentBreadcrumbItem.blur();
		}
		focusToggle() {
			this.focusState = "self", this.elements.breadcrumbToggle !== null && (this.currentChild = this.elements.breadcrumbItems.indexOf(this.elements.breadcrumbToggle) || 0, this.elements.breadcrumbToggle.focus());
		}
	};
	const B = /[\11\12\14\15\40]+/, k = "data-once", V = document;
	function y(t, e, s) {
		return t[`${e}Attribute`](k, s);
	}
	function f(t) {
		if (typeof t != "string") throw new TypeError("once ID must be a string");
		if (t === "" || B.test(t)) throw new RangeError("once ID must not be empty or contain spaces");
		return `[${k}~="${t}"]`;
	}
	function P(t) {
		if (!(t instanceof Element)) throw new TypeError("The element must be an instance of Element");
		return !0;
	}
	function _(t, e = V) {
		let s = t;
		if (t === null) s = [];
		else if (t) if (e instanceof Document || e instanceof DocumentFragment || e instanceof Element) typeof t == "string" ? s = e.querySelectorAll(t) : t instanceof Element && (s = [t]);
		else throw new TypeError("Context must be an object of type \"Document\", \"DocumentFragment\", or \"Element\".");
		else throw new TypeError("Selector must not be empty");
		return Array.prototype.slice.call(s);
	}
	function E(t, e, s) {
		return e.filter((i) => {
			const r = P(i) && i.matches(t);
			return r && s && s(i), r;
		});
	}
	function I(t, { add: e, remove: s }) {
		const i = [];
		y(t, "has") && y(t, "get").trim().split(B).forEach((o) => {
			i.indexOf(o) < 0 && o !== s && i.push(o);
		}), e && i.push(e);
		const r = i.join(" ");
		y(t, r === "" ? "remove" : "set", r);
	}
	function p(t, e, s) {
		return E(`:not(${f(t)})`, _(e, s), (i) => I(i, { add: t }));
	}
	p.remove = (t, e, s) => E(f(t), _(e, s), (i) => I(i, { remove: t })), p.filter = (t, e, s) => E(f(t), _(e, s)), p.find = (t, e) => _(t ? f(t) : `[${k}]`, e);
	const K = ({ options: t = {}, context: e = document, selector: s = ".breadcrumb" } = {}) => {
		p("graupl-breadcrumb-generator", s, e).forEach((i) => {
			const r = i.dataset.grauplBreadcrumbOptions ? JSON.parse(i.dataset.grauplBreadcrumbOptions.replace(/'/g, "\"")) || {} : {};
			new q({
				breadcrumbElement: i,
				initialize: !0,
				...t,
				...r
			});
		});
	};
	document.addEventListener("DOMContentLoaded", () => {
		K();
	});
})();

//# sourceMappingURL=breadcrumb.js.map