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
function I(t, { shouldThrow: e = !0 } = {}) {
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
				o[i] = t[i], I(o);
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
function Z(t, { shouldThrow: e = !0 } = {}) {
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
function W(t, { shouldThrow: e = !0 } = {}) {
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
function X(t, e, { shouldThrow: s = !0 } = {}) {
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
function Y(t, e, { shouldThrow: s = !0 } = {}) {
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
function tt(t, { shouldThrow: e = !0 } = {}) {
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
function l(t, e) {
	t === "" || t.length === 0 || (typeof t == "string" ? e.classList.add(t) : e.classList.add(...t));
}
function h(t, e) {
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
function f(t) {
	t.preventDefault(), t.stopPropagation();
}
var D = class {
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
}, w = class T {
	_scope;
	_type = "_default";
	_storage = {};
	_crush = !1;
	constructor({ scope: e, type: s = null, crush: i = !1, initialize: r = !0 } = {}) {
		this._scope = e, this._type = s || "_default", this._crush = i, r && this.initialize();
	}
	initialize() {
		try {
			!this._crush && typeof window[this.scope] < "u" && (c(T, { storage: window[this.scope] }, { shouldThrow: !1 }).status || typeof window[this.scope].storage < "u" && typeof window[this.scope].scope < "u" && typeof window[this.scope].type < "u") && (this._storage = window[this.scope].storage);
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
}, et = class {
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
			l(this.initializeClass, this.rootDOMElement), this._dispatchEvent("preinitialize", this.rootDOMElement), this._generateKey(), this._setDOMElements(), this._setIds(), this._setAriaAttributes(), this._setCustomProps(), this._createChildElements(), this._handleMediaMatch(), this._handleFocus(), this._handleHover(), this._handleClick(), this._handleKeydown(), this._handleKeyup(), this._dispatchEvent("initialize", this.rootDOMElement), this._store(), h(this.initializeClass, this.rootDOMElement), this._initialized = !0, this._dispatchEvent("postinitialize", this.rootDOMElement);
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
		Z({ focusState: t }), this._focusState !== t && (this._focusState = t);
	}
	get currentEvent() {
		return this._currentEvent;
	}
	set currentEvent(t) {
		W({ currentEvent: t }), this._currentEvent !== t && (this._currentEvent = t);
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
		const t = tt(this, { shouldThrow: !1 });
		if (t.status || (this._errors = [...this._errors, ...t.errors], this._valid = !1), Object.keys(this._dom).length > 0) {
			const i = {};
			for (const o of Object.keys(this._dom)) Array.isArray(this._dom[o]) ? this._dom[o].forEach((a, d) => {
				i[`${o}Element[${d}]`] = a;
			}) : this._dom[o] !== null && (i[`${o}Element`] = this._dom[o]);
			const r = c(HTMLElement, i, { shouldThrow: !1 });
			r.status || (this._errors = [...this._errors, ...r.errors], this._valid = !1);
		}
		if (Object.keys(this._selectors).length > 0) {
			const i = {};
			for (const o of Object.keys(this._selectors)) i[`${o}Selector`] = this._selectors[o];
			const r = I(i, { shouldThrow: !1 });
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
		this._shouldStore && (c(w, { storage: window.GrauplStorage }, { shouldThrow: !1 }).status || new w({ scope: "GrauplStorage" }), window.GrauplStorage.set({
			key: this.id !== "" ? this.id : this.key,
			type: this._storageKey,
			data: this
		}));
	}
	_unstore() {
		this._shouldStore && c(w, { storage: window.GrauplStorage }, { shouldThrow: !1 }).status && window.GrauplStorage.clear({
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
		Y(t, this), c(HTMLElement, { element: e }), e.dispatchEvent(this.events[t]);
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
}, st = class extends et {
	_rootDOMElement = "disclosure";
	_protectedDOMElements = ["controller"];
	_open = new D(!1);
	_locked = new D(!1);
	_openInsideBreakpoint = !1;
	_openOutsideBreakpoint = !1;
	_closeInsideBreakpoint = !1;
	_closeOutsideBreakpoint = !1;
	_lockInsideBreakpoint = !1;
	_lockOutsideBreakpoint = !1;
	_unlockInsideBreakpoint = !1;
	_unlockOutsideBreakpoint = !1;
	_openOnFocus = !1;
	_closeOnBlur = !1;
	_storageKey = "disclosures";
	_name = "Disclosure";
	_mediaQueryListEventCallback = (t) => {
		t.matches ? (this.unlockInsideBreakpoint && this.unlock(), this.isOpen && this.closeInsideBreakpoint ? (this.isLocked && this.unlock(), this.close({ preserveState: !0 })) : !this.isOpen && this.openInsideBreakpoint && (this.isLocked && this.unlock(), this.open()), this.lockInsideBreakpoint && this.lock()) : (this.unlockOutsideBreakpoint && this.unlock(), this.isOpen && this.closeOutsideBreakpoint ? (this.isLocked && this.unlock(), this.close({ preserveState: !0 })) : !this.isOpen && this.openOutsideBreakpoint && (this.isLocked && this.unlock(), this.open()), this.lockOutsideBreakpoint && this.lock());
	};
	constructor({ disclosureElement: t, controllerElement: e, disclosureContentSelector: s = ".disclosure-content", lockedClass: i = "locked", unlockedClass: r = "unlocked", openClass: o = "show", closeClass: a = "hide", transitionClass: d = "transitioning", transitionDuration: L = 250, openDuration: z = -1, closeDuration: A = -1, openOnFocus: j = !1, closeOnBlur: Q = !1, minWidth: C = "", breakpoint: p = "", autoOpen: y = !1, openInsideBreakpoint: F = !1, openOutsideBreakpoint: v = !1, closeInsideBreakpoint: B = !1, closeOutsideBreakpoint: V = !1, lockInsideBreakpoint: P = !1, lockOutsideBreakpoint: q = !1, unlockInsideBreakpoint: x = !1, unlockOutsideBreakpoint: K = !1, locked: G = !1, mediaQuery: H = "", prefix: R = "graupl-", key: N = null, initializeClass: U = "initializing", initialize: J = !1 } = {}) {
		super({
			prefix: R,
			key: N,
			initializeClass: U
		}), this._dom.disclosure = t, this._dom.controller = e, this._selectors.content = s, this._classes.locked = i || "", this._classes.unlocked = r || "", this._classes.open = o || "", this._classes.close = a || "", this._classes.transition = d || "", this._durations.transition = L, this._durations.open = z, this._durations.close = A, this._openOnFocus = j, this._closeOnBlur = Q, C !== "" && (console.warn("`minWidth` is deprecated and will be removed in a future release. Please set `breakpoint` instead."), p === "" && (p = C)), y && p !== "" && (console.warn("`autoOpen` is deprecated and will be removed in a future release. Please set `openOutsideBreakpoint` and `closeInsideBreakpoint` to `true` instead."), v = y, B = y), this._breakpoint = p || "", this._openInsideBreakpoint = F, this._openOutsideBreakpoint = v, this._closeInsideBreakpoint = B, this._closeOutsideBreakpoint = V, this._lockInsideBreakpoint = P, this._lockOutsideBreakpoint = q, this._unlockInsideBreakpoint = x, this._unlockOutsideBreakpoint = K, this._mediaQueryString = H || "", this._locked.value = G, this._locked.commit(), this._registerEvent("expand", { detail: { disclosure: this } }), this._registerEvent("collapse", { detail: { disclosure: this } }), this._registerEvent("lock", { detail: { disclosure: this } }), this._registerEvent("unlock", { detail: { disclosure: this } }), this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
			requestAnimationFrame(() => {
				this.dom.controller.getAttribute("aria-expanded") === "true" || this.openOutsideBreakpoint && !window.matchMedia(this.mediaQuery).matches || this.openInsideBreakpoint && window.matchMedia(this.mediaQuery).matches ? this.open({ force: !0 }) : this.close({ force: !0 }), this.isLocked || this.lockInsideBreakpoint && window.matchMedia(this.mediaQuery).matches || this.lockOutsideBreakpoint && !window.matchMedia(this.mediaQuery).matches ? this.lock({ force: !0 }) : this.unlock({ force: !0 });
			});
		}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
			const $ = n("boolean", {
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
			$.status || (this._errors = [...this._errors, ...$.errors], this._valid = !1);
		}), J && this.initialize();
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
	_setIds() {
		this.dom.disclosure.id = this.dom.disclosure.id || `disclosure-${this.key}`, this.dom.controller.id = this.dom.controller.id || `disclosure-controller-${this.key}`, this._id = this.dom.disclosure.id;
	}
	_setAriaAttributes() {
		this.dom.controller.getAttribute("aria-expanded") !== "true" && this.dom.controller.setAttribute("aria-expanded", "false"), this.dom.controller.setAttribute("aria-controls", this.dom.disclosure.id), X("button", { controller: this.dom.controller }, { shouldThrow: !1 }).status || this.dom.controller.setAttribute("role", "button");
	}
	_setCustomProps() {
		this.dom.disclosure.style.setProperty(`--${this.prefix}disclosure-transition-duration`, `${this.transitionDuration}ms`), this.dom.disclosure.style.setProperty(`--${this.prefix}disclosure-open-transition-duration`, `${this.openDuration}ms`), this.dom.disclosure.style.setProperty(`--${this.prefix}disclosure-close-transition-duration`, `${this.closeDuration}ms`);
	}
	_setDOMElements() {
		this._resetDOMElementType("content"), this._setDOMElementType("content", { context: this.dom.disclosure });
	}
	_reveal({ emit: t = this.isInitialized, transition: e = this.isInitialized } = {}) {
		this.dom.controller.setAttribute("aria-expanded", "true"), e && this.transitionlass !== "" ? (l(this.transitionClass, this.dom.disclosure), requestAnimationFrame(() => {
			h(this.closeClass, this.dom.disclosure), requestAnimationFrame(() => {
				l(this.openClass, this.dom.disclosure), requestAnimationFrame(() => {
					setTimeout(() => {
						h(this.transitionClass, this.dom.disclosure);
					}, this.openDuration);
				});
			});
		})) : (l(this.openClass, this.dom.disclosure), h(this.closeClass, this.dom.disclosure)), this.dom.content.removeAttribute("inert"), t && this._dispatchEvent("expand", this.dom.controller);
	}
	_conceal({ emit: t = this.isInitialized, transition: e = this.isInitialized } = {}) {
		this.dom.controller.setAttribute("aria-expanded", "false"), e && this.transitionClass !== "" ? (l(this.transitionClass, this.dom.disclosure), requestAnimationFrame(() => {
			h(this.openClass, this.dom.disclosure), requestAnimationFrame(() => {
				l(this.closeClass, this.dom.disclosure), requestAnimationFrame(() => {
					setTimeout(() => {
						h(this.transitionClass, this.dom.disclosure), this.dom.content.innert = !0;
					}, this.closeDuration);
				});
			});
		})) : (l(this.closeClass, this.dom.disclosure), h(this.openClass, this.dom.disclosure)), this.dom.content.setAttribute("inert", "true"), t && this._dispatchEvent("collapse", this.dom.controller);
	}
	_lock({ emit: t = this.isInitialized } = {}) {
		l(this.lockedClass, this.dom.disclosure), h(this.unlockedClass, this.dom.disclosure), this.dom.controller.setAttribute("disabled", "true"), t && this._dispatchEvent("lock", this.dom.disclosure);
	}
	_unlock({ emit: t = this.isInitialized } = {}) {
		l(this.unlockedClass, this.dom.disclosure), h(this.lockedClass, this.dom.disclosure), this.dom.controller.removeAttribute("disabled"), t && this._dispatchEvent("unlock", this.dom.disclosure);
	}
	_handleFocus() {
		this._addEventListener("focusout", this.dom.disclosure, (t) => {
			!this.closeOnBlur || this.currentEvent !== "keyboard" || t.relatedTarget === null || this.dom.disclosure.contains(t.relatedTarget) || this.dom.controller.contains(t.relatedTarget) || this.dom.controller === t.relatedTarget || this.dom.disclosure === t.relatedTarget || this.close();
		}), this._addEventListener("focusout", this.dom.controller, (t) => {
			!this.closeOnBlur || this.currentEvent !== "keyboard" || t.relatedTarget === null || this.dom.disclosure.contains(t.relatedTarget) || this.dom.controller.contains(t.relatedTarget) || this.dom.controller === t.relatedTarget || this.dom.disclosure === t.relatedTarget || this.close();
		});
	}
	_handleClick() {
		this._addEventListener("click", this.dom.controller, (t) => {
			this.currentEvent = "mouse", t.button === 0 && (f(t), this.toggle());
		}), this._addEventListener("click", document, (t) => {
			this.focusState !== "self" || !this.closeOnBlur || (this.currentEvent = "mouse", !this.dom.disclosure.contains(t.target) && this.dom.controller !== t.target && this.close());
		});
	}
	_handleKeydown() {
		this._addEventListener("keydown", this.dom.controller, (t) => {
			switch (this.currentEvent = "keyboard", m(t)) {
				case "Space":
				case "Enter":
					f(t);
					break;
			}
		}), this._addEventListener("keydown", this.dom.disclosure, (t) => {
			this.currentEvent = "keyboard", m(t) === "Escape" && f(t);
		});
	}
	_handleKeyup() {
		this._addEventListener("keyup", this.dom.controller, (t) => {
			switch (this.currentEvent = "keyboard", m(t)) {
				case "Space":
				case "Enter":
					this.toggle(), f(t);
					break;
				case "Tab":
					this.openOnFocus && (f(t), this.open());
					break;
			}
		}), this._addEventListener("keyup", this.dom.disclosure, (t) => {
			this.currentEvent = "keyboard", m(t) === "Escape" && (this.close(), f(t));
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
};
const M = /[\11\12\14\15\40]+/, E = "data-once", it = document;
function O(t, e, s) {
	return t[`${e}Attribute`](E, s);
}
function k(t) {
	if (typeof t != "string") throw new TypeError("once ID must be a string");
	if (t === "" || M.test(t)) throw new RangeError("once ID must not be empty or contain spaces");
	return `[${E}~="${t}"]`;
}
function rt(t) {
	if (!(t instanceof Element)) throw new TypeError("The element must be an instance of Element");
	return !0;
}
function g(t, e = it) {
	let s = t;
	if (t === null) s = [];
	else if (t) if (e instanceof Document || e instanceof DocumentFragment || e instanceof Element) typeof t == "string" ? s = e.querySelectorAll(t) : t instanceof Element && (s = [t]);
	else throw new TypeError("Context must be an object of type \"Document\", \"DocumentFragment\", or \"Element\".");
	else throw new TypeError("Selector must not be empty");
	return Array.prototype.slice.call(s);
}
function b(t, e, s) {
	return e.filter((i) => {
		const r = rt(i) && i.matches(t);
		return r && s && s(i), r;
	});
}
function S(t, { add: e, remove: s }) {
	const i = [];
	O(t, "has") && O(t, "get").trim().split(M).forEach((o) => {
		i.indexOf(o) < 0 && o !== s && i.push(o);
	}), e && i.push(e);
	const r = i.join(" ");
	O(t, r === "" ? "remove" : "set", r);
}
function _(t, e, s) {
	return b(`:not(${k(t)})`, g(e, s), (i) => S(i, { add: t }));
}
_.remove = (t, e, s) => b(k(t), g(e, s), (i) => S(i, { remove: t })), _.filter = (t, e, s) => b(k(t), g(e, s)), _.find = (t, e) => g(t ? k(t) : `[${E}]`, e);
const ot = ({ options: t = {}, context: e = document, disclosureSelector: s = ".disclosure", controllerSelector: i = ".disclosure-toggle" } = {}) => {
	_("graupl-disclosure-generator", s, e).forEach((r) => {
		const o = r.dataset.grauplDisclosureOptions ? JSON.parse(r.dataset.grauplDisclosureOptions.replace(/'/g, "\"")) || {} : {}, a = `${i}[data-graupl-disclosure-target="${r.id}"]`, [d] = _("graupl-disclosure-generator", a, e);
		if (!d) {
			console.warn(`No controller found for disclosure with ID "${r.id}". Please ensure there is an element with the selector "${a}".`), _.remove("graupl-disclosure-generator", r);
			return;
		}
		new st({
			disclosureElement: r,
			controllerElement: d,
			initialize: !0,
			...t,
			...o
		});
	});
};
module.exports = ot;

//# sourceMappingURL=disclosure.cjs.js.map