function h(e, t, { shouldThrow: s = !0 } = {}) {
	const i = {
		status: !0,
		errors: []
	};
	try {
		if (typeof t != "object") throw new TypeError(`Elements given to isValidInstance() must be inside of an object. "${typeof t}" given.`);
		for (const r in t) try {
			if (!(t[r] instanceof e)) {
				const o = typeof t[r];
				throw new TypeError(`${r} must be an instance of ${e.name}. "${o}" given.`);
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
function n(e, t, { shouldThrow: s = !0 } = {}) {
	const i = {
		status: !0,
		errors: []
	};
	try {
		if (typeof t != "object") throw new TypeError(`Values given to isValidType() must be inside of an object. "${typeof t}" given.`);
		for (const r in t) try {
			const o = typeof t[r];
			if (o !== e) throw new TypeError(`${r} must be a ${e}. "${o}" given.`);
		} catch (o) {
			i.status = !1, i.errors.push(o);
		}
	} catch (r) {
		i.status = !1, i.errors.push(r);
	}
	if (s && !i.status) throw i.errors[0];
	return i;
}
function ae(e, { shouldThrow: t = !0 } = {}) {
	const s = {
		status: !0,
		errors: []
	};
	try {
		if (typeof e != "object") throw new TypeError(`Values given to isQuerySelector() must be inside of an object. "${typeof e}" given.`);
		for (const i in e) try {
			try {
				if (typeof e[i] != "string") throw new Error();
				document.querySelector(e[i]);
			} catch {
				throw new TypeError(`${i} must be a valid query selector. "${e[i]}" given.`);
			}
		} catch (r) {
			s.status = !1, s.errors.push(r);
		}
	} catch (i) {
		s.status = !1, s.errors.push(i);
	}
	if (t && !s.status) throw s.errors[0];
	return s;
}
function u(e, { shouldThrow: t = !0 } = {}) {
	const s = {
		status: !0,
		errors: []
	};
	try {
		if (typeof e != "object" || Array.isArray(e)) throw new TypeError(`Values given to isValidClassList() must be inside of an object. "${typeof e}" given.`);
		for (const i in e) try {
			const r = e[i];
			if (r === "") continue;
			if (typeof r == "string") {
				if (/\s/.test(r)) throw new TypeError(`${i} must be a valid class token without whitespace. "${r}" given.`);
				continue;
			}
			if (Array.isArray(r)) {
				r.forEach((o) => {
					if (typeof o != "string") throw new TypeError(`${i} must be a string or an array of strings. An array containing non-strings given.`);
					if (o !== "" && /\s/.test(o)) throw new TypeError(`${i} must be a valid class token without whitespace. "${o}" given.`);
				});
				continue;
			}
			throw new TypeError(`${i} must be a string or an array of strings. "${typeof r}" given.`);
		} catch (r) {
			s.status = !1, s.errors.push(r);
		}
	} catch (i) {
		s.status = !1, s.errors.push(i);
	}
	if (t && !s.status) throw s.errors[0];
	return s;
}
function le(e, { shouldThrow: t = !0 } = {}) {
	const s = {
		status: !0,
		errors: []
	};
	try {
		if (typeof e != "object") throw new TypeError(`Values given to isValidState() must be inside of an object. "${typeof e}" given.`);
		const i = [
			"none",
			"self",
			"child"
		];
		for (const r in e) try {
			if (!i.includes(e[r])) throw new TypeError(`${r} must be one of the following values: ${i.join(", ")}. "${e[r]}" given.`);
		} catch (o) {
			s.status = !1, s.errors.push(o);
		}
	} catch (i) {
		s.status = !1, s.errors.push(i);
	}
	if (t && !s.status) throw s.errors[0];
	return s;
}
function de(e, { shouldThrow: t = !0 } = {}) {
	const s = {
		status: !0,
		errors: []
	};
	try {
		if (typeof e != "object") throw new TypeError(`Values given to isValidEvent() must be inside of an object. "${typeof e}" given.`);
		const i = [
			"none",
			"mouse",
			"keyboard",
			"character"
		];
		for (const r in e) try {
			if (!i.includes(e[r])) throw new TypeError(`${r} must be one of the following values: ${i.join(", ")}. "${e[r]}" given.`);
		} catch (o) {
			s.status = !1, s.errors.push(o);
		}
	} catch (i) {
		s.status = !1, s.errors.push(i);
	}
	if (t && !s.status) throw s.errors[0];
	return s;
}
function he(e, t, { shouldThrow: s = !0 } = {}) {
	const i = {
		status: !0,
		errors: []
	};
	try {
		if (n("string", { tagName: e }, { shouldThrow: !0 }).status && h(HTMLElement, t, { shouldThrow: !0 }).status) {
			const r = e.toLowerCase();
			for (const o in t) try {
				if (t[o].tagName.toLowerCase() !== r) throw new TypeError(`${o} must be a <${r}> element. <${t[o].tagName.toLowerCase()}> given.`);
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
function ce(e, t, { shouldThrow: s = !0 } = {}) {
	const i = {
		status: !0,
		errors: []
	};
	try {
		if (!Object.prototype.hasOwnProperty.call(t.events, e)) throw new TypeError(`Event type "${e}" is not valid for ${t.constructor.name}. Valid event types are: "${Object.keys(t.events).join("\", ")}".`);
	} catch (r) {
		i.status = !1, i.errors.push(r);
	}
	if (s && !i.status) throw i.errors[0];
	return i;
}
function ue(e, { shouldThrow: t = !0 } = {}) {
	const s = {
		status: !0,
		errors: []
	};
	try {
		if (!Object.prototype.hasOwnProperty.call(e._dom, e._rootDOMElement)) throw new Error(`The root DOM element "${e._rootDOMElement}" does not exist in the ${e.constructor.name}'s _dom property. It must be one of the following: "${Object.keys(e._dom).join("\", \"")}".`);
	} catch (i) {
		s.status = !1, s.errors.push(i);
	}
	if (t && !s.status) throw s.errors[0];
	return s;
}
function T(e) {
	try {
		const t = e.key || e.keyCode, s = {
			Enter: t === "Enter" || t === 13,
			Space: t === " " || t === "Spacebar" || t === 32,
			Escape: t === "Escape" || t === "Esc" || t === 27,
			ArrowUp: t === "ArrowUp" || t === "Up" || t === 38,
			ArrowRight: t === "ArrowRight" || t === "Right" || t === 39,
			ArrowDown: t === "ArrowDown" || t === "Down" || t === 40,
			ArrowLeft: t === "ArrowLeft" || t === "Left" || t === 37,
			Home: t === "Home" || t === 36,
			End: t === "End" || t === 35,
			Character: isNaN(t) && !!t.match(/^[a-zA-Z]{1}$/),
			Tab: t === "Tab" || t === 9,
			Asterisk: t === "*" || t === 56
		};
		return Object.keys(s).find((i) => s[i] === !0) || "";
	} catch {
		return "";
	}
}
function _(e) {
	e.preventDefault(), e.stopPropagation();
}
function pe(e) {
	return n("string", { value: e }), `${e.charAt(0).toLowerCase()}${e.slice(1)}`;
}
function te(e) {
	return n("string", { value: e }), `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
}
var q = class oe {
	_scope;
	_type = "_default";
	_storage = {};
	_crush = !1;
	constructor({ scope: t, type: s = null, crush: i = !1, initialize: r = !0 } = {}) {
		this._scope = t, this._type = s || "_default", this._crush = i, r && this.initialize();
	}
	initialize() {
		try {
			!this._crush && typeof window[this.scope] < "u" && (h(oe, { storage: window[this.scope] }, { shouldThrow: !1 }).status || typeof window[this.scope].storage < "u" && typeof window[this.scope].scope < "u" && typeof window[this.scope].type < "u") && (this._storage = window[this.scope].storage);
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
	set type(t) {
		n("string", { type: t }) && (this._type = t);
	}
	get storage() {
		return this._storage;
	}
	get({ type: t = this.type, key: s = null } = {}) {
		const i = n("string", { type: t }, { shouldThrow: !1 });
		if (!i.status) throw i.errors[0];
		if (!this.storage[t]) throw new Error(`StorageManager (${this.scope}): Type "${t}" is not initialized.`);
		if (s !== null) {
			const r = n("string", { key: s }, { shouldThrow: !1 });
			if (!r.status) throw r.errors[0];
			return this.storage[t][s];
		}
		return this.storage[t];
	}
	set({ type: t = this.type, key: s = null, data: i = {} } = {}) {
		const r = n("string", { type: t }, { shouldThrow: !1 }), o = n("object", { data: i }, { shouldThrow: !1 });
		if (!r.status) throw r.errors[0];
		if (!o.status) throw o.errors[0];
		if (s !== null) {
			const a = n("string", { key: s }, { shouldThrow: !1 });
			if (!a.status) throw a.errors[0];
			this._storage[t] || (this._storage[t] = {}), this._storage[t][s] = i;
		} else this._storage[t] = i;
	}
	clear({ type: t = this.type, key: s = null } = {}) {
		const i = n("string", { type: t }, { shouldThrow: !1 });
		if (!i.status) throw i.errors[0];
		if (s !== null) {
			const r = n("string", { key: s }, { shouldThrow: !1 });
			if (!r.status) throw r.errors[0];
			delete this.storage[t][s];
		} else delete this.storage[t];
	}
	dispose() {
		typeof window < "u" && window[this.scope] === this && delete window[this.scope], delete this._storage;
	}
};
function c(e, t) {
	if (!(e === "" || e.length === 0)) if (typeof e == "string") t.classList.add(e);
	else {
		const s = e.filter((i) => i !== "");
		s.length > 0 && t.classList.add(...s);
	}
}
function d(e, t) {
	if (!(e === "" || e.length === 0)) if (typeof e == "string") t.classList.remove(e);
	else {
		const s = e.filter((i) => i !== "");
		s.length > 0 && t.classList.remove(...s);
	}
}
var _e = class {
	#e = new EventTarget();
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
	_intervals = {};
	_timeouts = {};
	_frames = {};
	_listeners = [];
	_events = {};
	_prefix = "ae-";
	_key = "";
	_name = "Component";
	_scope = "AccessibleEcosystem";
	_eventPrefix = "";
	_storageKey = "components";
	_shouldStore = !0;
	_id = "";
	_valid = !0;
	_initialized = !1;
	_bootstrapped = !1;
	_shouldEmit = !0;
	_errors = [];
	constructor({ prefix: e = "ae-", key: t = null, initializeClass: s = "initializing", emit: i = !0, bootstrap: r = !0, initialize: o = !0 } = {}) {
		this._classes.initialize = s || "", this._prefix = e || "", this._key = t || "", this._shouldEmit = i, r && this._bootstrap(), o && this.initialize();
	}
	_bootstrap() {
		this._bootstrapped = !1;
		try {
			this._registerEvents(), this._bootstrapped = !0;
		} catch (e) {
			this._bootstrapped = !1, this._valid = !1, console.error(e);
		}
	}
	_registerEvents() {
		this._registerEvent("initialize"), this._registerEvent("preinitialize"), this._registerEvent("postinitialize"), this._registerEvent("validate"), this._registerEvent("prevalidate"), this._registerEvent("postvalidate");
	}
	initialize() {
		try {
			if (!this.isBootstrapped) throw new Error("Cannot initialize a component before it has been bootstrapped.");
			if (!this._validate()) throw new Error(`${this.scope} ${this.name}: Cannot initialize component. The following errors have been found:
 - ${this.errors.map((e) => e.message).join(`
 - `)}`);
			c(this.initializeClass, this.rootDOMElement), this._dispatchEvent("preinitialize", this.rootDOMElement), this._generateKey(), this._setDOMElements(), this._setIds(), this._setAriaAttributes(), this._setCustomProps(), this._createChildElements(), this._handleFocus(), this._handleHover(), this._handleClick(), this._handleKeydown(), this._handleKeyup(), this._dispatchEvent("initialize", this.rootDOMElement), this._store(), d(this.initializeClass, this.rootDOMElement), this._initialized = !0, this._dispatchEvent("postinitialize", this.rootDOMElement);
		} catch (e) {
			this._valid = !1, console.error(e);
		}
	}
	init() {
		this.initialize();
	}
	get dom() {
		return this._dom;
	}
	get rootDOMElement() {
		const e = this._dom[this._rootDOMElement];
		return e instanceof HTMLElement ? e : document.documentElement;
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
	get frames() {
		return this._frames;
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
	set initializeClass(e) {
		u({ initializeClass: e }), this._classes.initialize !== e && (this._classes.initialize = e);
	}
	get focusState() {
		return this._focusState;
	}
	set focusState(e) {
		le({ focusState: e }), this._focusState !== e && (this._focusState = e);
	}
	get currentEvent() {
		return this._currentEvent;
	}
	set currentEvent(e) {
		de({ currentEvent: e }), this._currentEvent !== e && (this._currentEvent = e);
	}
	get shouldFocus() {
		let e = !1;
		return this.currentEvent === "keyboard" && (e = !0), e;
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
	get scope() {
		return this._scope;
	}
	get eventPrefix() {
		return this._eventPrefix !== "" ? this._eventPrefix : `${pe(this.scope)}${te(this.name)}`;
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
	get isBootstrapped() {
		return this._bootstrapped;
	}
	get shouldEmit() {
		return this._shouldEmit;
	}
	set shouldEmit(e) {
		n("boolean", { shouldEmit: e }), this._shouldEmit = e;
	}
	get errors() {
		return this._errors;
	}
	_validate() {
		this._errors = [], this._valid = !0, this._dispatchEvent("prevalidate", this.rootDOMElement);
		const e = ue(this, { shouldThrow: !1 });
		if (e.status || (this._errors = [...this._errors, ...e.errors], this._valid = !1), Object.keys(this._dom).length > 0) {
			const o = {};
			for (const l of Object.keys(this._dom)) Array.isArray(this._dom[l]) ? this._dom[l].forEach((m, p) => {
				o[`${l}Element[${p}]`] = m;
			}) : this._dom[l] !== null && (o[`${l}Element`] = this._dom[l]);
			const a = h(HTMLElement, o, { shouldThrow: !1 });
			a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
		}
		if (Object.keys(this._selectors).length > 0) {
			const o = {};
			for (const l of Object.keys(this._selectors)) this._selectors[l] !== "" && (o[`${l}Selector`] = this._selectors[l]);
			const a = ae(o, { shouldThrow: !1 });
			a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
		}
		if (Object.keys(this._classes).length > 0) {
			const o = {};
			for (const l of Object.keys(this._classes)) this._classes[l] !== "" && (o[`${l}Class`] = this._classes[l]);
			const a = u(o, { shouldThrow: !1 });
			a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
		}
		if (Object.keys(this._durations).length > 0) {
			const o = {};
			for (const l of Object.keys(this._durations)) o[`${l}Duration`] = this._durations[l];
			const a = n("number", o, { shouldThrow: !1 });
			a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
		}
		if (Object.keys(this.delays).length > 0) {
			const o = {};
			for (const l of Object.keys(this.delays)) o[`${l}Delay`] = this.delays[l];
			const a = n("number", o, { shouldThrow: !1 });
			a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
		}
		const t = {
			_name: this._name,
			_scope: this._scope,
			_eventPrefix: this._eventPrefix,
			_storageKey: this._storageKey,
			key: this._key,
			prefix: this._prefix
		};
		this._protectedDOMElements.forEach((o) => {
			t[`_protectedDOMElementType[${o}]`] = o;
		});
		const s = n("string", t, { shouldThrow: !1 });
		s.status || (this._errors = [...this._errors, ...s.errors], this._valid = !1);
		const r = n("boolean", {
			_shouldStore: this._shouldStore,
			emit: this._shouldEmit
		}, { shouldThrow: !1 });
		return r.status || (this._errors = [...this._errors, ...r.errors], this._valid = !1), this._dispatchEvent("validate", this.rootDOMElement), this._dispatchEvent("postvalidate", this.rootDOMElement), this._valid;
	}
	_generateKey(e = !1) {
		(this._key === "" || e) && (this._key = Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 10));
	}
	_setIds() {}
	_setAriaAttributes() {}
	_setCustomProps() {}
	_setDOMElementType(e, { context: t, overwrite: s = !0, strict: i = !1 } = {}) {
		if (typeof this.selectors[e] != "string") throw new Error(`${this.scope} ${this.name}: "${e}" is not a valid element type.`);
		if (this._rootDOMElement === e || this._protectedDOMElements.includes(e)) throw new Error(`${this.scope} ${this.name}: "${e}" element cannot be set through _setDOMElementType because it is a protected element.`);
		h(HTMLElement, { context: t });
		const r = Array.from(t.querySelectorAll(this.selectors[e])).filter((o) => i ? o.parentElement === t : !0);
		Array.isArray(this._dom[e]) ? s ? this._dom[e] = r : this._dom[e] = [...this._dom[e], ...r] : this._dom[e] = r[0] || null;
	}
	_resetDOMElementType(e) {
		if (typeof this.selectors[e] != "string") throw new Error(`${this.scope} ${this.name}: "${e}" is not a valid element type.`);
		if (this._rootDOMElement === e || this._protectedDOMElements.includes(e)) throw new Error(`${this.scope} ${this.name}: "${e}" element cannot be reset through _resetDOMElementType because it is a protected element.`);
		Array.isArray(this._dom[e]) ? this._dom[e] = [] : this._dom[e] = null;
	}
	_setDOMElements() {}
	_createChildElements() {}
	_handleFocus() {}
	_handleClick() {}
	_handleHover() {}
	_handleKeydown() {}
	_handleKeyup() {}
	_store() {
		this._shouldStore && (h(q, { storage: window[`${this.scope}Storage`] }, { shouldThrow: !1 }).status || new q({ scope: `${this.scope}Storage` }), window[`${this.scope}Storage`].set({
			key: this.id !== "" ? this.id : this.key,
			type: this._storageKey,
			data: this
		}));
	}
	_unstore() {
		this._shouldStore && h(q, { storage: window[`${this.scope}Storage`] }, { shouldThrow: !1 }).status && window[`${this.scope}Storage`].clear({
			key: this.id !== "" ? this.id : this.key,
			type: this._storageKey
		});
	}
	_setInterval(e, t, s = "_default") {
		this._clearInterval(s), this._intervals[s] = setInterval(e, t);
	}
	_clearInterval(e = "_default") {
		clearInterval(this._intervals[e]);
	}
	_clearIntervals() {
		for (const e of Object.keys(this._intervals)) this._clearInterval(e);
	}
	_setTimeout(e, t, s = "_default") {
		this._clearTimeout(s), this._timeouts[s] = setTimeout(e, t);
	}
	_clearTimeout(e = "_default") {
		clearTimeout(this._timeouts[e]);
	}
	_clearTimeouts() {
		for (const e of Object.keys(this._timeouts)) this._clearTimeout(e);
	}
	_requestAnimationFrame(e, t = "_default") {
		this._cancelAnimationFrame(t);
		let s = !1;
		const i = requestAnimationFrame((r) => {
			s = !0, delete this._frames[t], e(r);
		});
		return s || (this._frames[t] = i), i;
	}
	_cancelAnimationFrame(e = "_default") {
		Object.hasOwn(this._frames, e) && (cancelAnimationFrame(this._frames[e]), delete this._frames[e]);
	}
	_cancelAnimationFrames() {
		for (const e of Object.keys(this._frames)) this._cancelAnimationFrame(e);
	}
	_registerEvent(e, { bubbles: t = !0, detail: s = {} } = {}) {
		n("string", { name: e }), n("boolean", { bubbles: t }), n("object", { detail: s });
		const i = `${this.eventPrefix}${te(e)}`;
		this._events[e] = new CustomEvent(i, {
			bubbles: t,
			detail: {
				component: this,
				...s
			}
		});
	}
	getEventName(e) {
		return Object.keys(this._events).includes(e) ? this._events[e].type : null;
	}
	_dispatchEvent(e, t = this.rootDOMElement, { emit: s = !0 } = {}) {
		ce(e, this), n("boolean", { emit: s }), s && this.shouldEmit && h(HTMLElement, { element: t });
		const i = this.events[e];
		this.#e.dispatchEvent(i), s && this.shouldEmit && t.dispatchEvent(i);
	}
	_addInternalEventListener(e, t, s = {}) {
		this._addEventListener(e, this.#e, t, s);
	}
	_removeInternalEventListener(e, t, s = {}) {
		this._removeEventListener(e, this.#e, t, s);
	}
	_addEventListener(e, t, s, i = {}) {
		const r = typeof i == "boolean" ? i : {
			...i,
			capture: !!i?.capture
		};
		t.addEventListener(e, s, i), this._listeners.push({
			type: e,
			element: t,
			listener: s,
			options: r
		});
	}
	_removeEventListener(e, t, s, i = {}) {
		t.removeEventListener(e, s, i);
		const r = typeof i == "boolean" ? i : !!i?.capture;
		this._listeners = this._listeners.filter((o) => {
			const a = o.options, l = typeof a == "boolean" ? a : !!a?.capture;
			return !(o.type === e && o.element === t && o.listener === s && l === r);
		});
	}
	_removeEventListeners({ type: e = null, element: t = null } = {}) {
		[...this._listeners].forEach((s) => {
			e !== null && s.type !== e || t !== null && s.element !== t || this._removeEventListener(s.type, s.element, s.listener, s.options);
		});
	}
	focus() {
		this.focusState = "self", this.shouldFocus && this.rootDOMElement.focus();
	}
	blur() {
		this.focusState = "none", this.shouldFocus && this.rootDOMElement.blur();
	}
	dispose() {
		this._clearIntervals(), this._clearTimeouts(), this._cancelAnimationFrames(), this._removeEventListeners(), this._bootstrapped = !1, this._unstore(), delete this;
	}
}, fe = class extends _e {
	_name = "ResponsiveComponent";
	_breakpoint = "";
	_mediaQueryString = "";
	_mediaQueryList = null;
	constructor({ breakpoint: e = "", mediaQuery: t = "", prefix: s = "ae-", key: i = null, initializeClass: r = "initializing", emit: o = !0, bootstrap: a = !0, initialize: l = !0 } = {}) {
		super({
			prefix: s,
			key: i,
			initializeClass: r,
			emit: o,
			bootstrap: !1,
			initialize: !1
		}), this._breakpoint = e || "", this._mediaQueryString = t || "", a && this._bootstrap(), l && this.initialize();
	}
	_registerEvents() {
		super._registerEvents(), this._addInternalEventListener(this.getEventName("validate"), (e) => {
			if (e.detail.component !== this) return;
			const s = n("string", {
				mediaQuery: this._mediaQueryString,
				breakpoint: this._breakpoint
			}, { shouldThrow: !1 });
			s.status || (this._errors = [...this._errors, ...s.errors], this._valid = !1);
		}), this._addInternalEventListener(this.getEventName("initialize"), (e) => {
			e.detail.component === this && this._handleMediaMatch();
		});
	}
	get breakpoint() {
		return this._breakpoint;
	}
	set breakpoint(e) {
		n("string", { breakpoint: e }), this._breakpoint !== e && (this._breakpoint = e, this.isInitialized && this._handleMediaMatch());
	}
	get mediaQuery() {
		return this._mediaQueryString !== "" ? this._mediaQueryString : this._breakpoint === "" ? "" : `(width <= ${this._breakpoint})`;
	}
	set mediaQuery(e) {
		n("string", { mediaQuery: e }), this._mediaQueryString !== e && (this._mediaQueryString = e, this.isInitialized && this._handleMediaMatch());
	}
	_mediaQueryListEventCallback(e) {
		e.matches;
	}
	_handleMediaMatch() {
		this._cancelAnimationFrame("mediaMatch"), this._mediaQueryList && (this._removeEventListeners({
			type: "change",
			element: this._mediaQueryList
		}), this._mediaQueryList = null), this.mediaQuery !== "" && (this._mediaQueryList = window.matchMedia(this.mediaQuery), this._addEventListener("change", this._mediaQueryList, (e) => this._mediaQueryListEventCallback(e)), this._requestAnimationFrame(() => {
			this._mediaQueryListEventCallback(this._mediaQueryList);
		}, "mediaMatch"));
	}
}, se = class {
	_equals = Object.is;
	_current;
	_committed;
	constructor(e, { equals: t = Object.is } = {}) {
		this._equals = t || Object.is, this._current = e, this._committed = e;
	}
	get value() {
		return this._current;
	}
	set value(e) {
		this._current = e;
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
	update(e) {
		return this._current = e(this._current), this;
	}
}, me = class extends fe {
	_name = "CollapsibleComponent";
	_expanded = new se(!1);
	_locked = new se(!1);
	_expandInsideBreakpoint = !1;
	_expandOutsideBreakpoint = !1;
	_collapseInsideBreakpoint = !1;
	_collapseOutsideBreakpoint = !1;
	_lockInsideBreakpoint = !1;
	_lockOutsideBreakpoint = !1;
	_unlockInsideBreakpoint = !1;
	_unlockOutsideBreakpoint = !1;
	_expandOnFocus = !1;
	_collapseOnBlur = !1;
	constructor({ controlledElement: e, controllerElement: t = null, triggerElement: s = null, lockClass: i = "locked", unlockClass: r = "unlocked", expandClass: o = "show", collapseClass: a = "hide", transitionClass: l = "transitioning", transitionDelay: m = 250, transitionDuration: p = 150, expandDuration: E = -1, collapseDuration: w = -1, expandInsideBreakpoint: v = !1, expandOutsideBreakpoint: y = !1, collapseInsideBreakpoint: b = !1, collapseOutsideBreakpoint: k = !1, lockInsideBreakpoint: g = !1, lockOutsideBreakpoint: O = !1, unlockInsideBreakpoint: L = !1, unlockOutsideBreakpoint: z = !1, expandOnFocus: A = !1, collapseOnBlur: S = !1, expanded: F = !1, locked: j = !1, breakpoint: U = "", mediaQuery: G = "", prefix: Q = "ae-", key: x = null, initializeClass: B = "initializing", emit: D = !0, bootstrap: C = !0, initialize: I = !0 } = {}) {
		super({
			breakpoint: U,
			mediaQuery: G,
			prefix: Q,
			key: x,
			initializeClass: B,
			emit: D,
			bootstrap: !1,
			initialize: !1
		}), this._dom.controller = t, this._dom.trigger = s ?? t, this._dom.controlled = e, this._protectedDOMElements.push("controller", "trigger", "controlled"), this._classes.locked = i || "", this._classes.unlocked = r || "", this._classes.expand = o || "", this._classes.collapse = a || "", this._classes.transition = l || "", this._delays.transition = m, this._durations.transition = p, this._durations.expand = E, this._durations.collapse = w, this._expandInsideBreakpoint = v, this._expandOutsideBreakpoint = y, this._collapseInsideBreakpoint = b, this._collapseOutsideBreakpoint = k, this._lockInsideBreakpoint = g, this._lockOutsideBreakpoint = O, this._unlockInsideBreakpoint = L, this._unlockOutsideBreakpoint = z, this._expandOnFocus = A, this._collapseOnBlur = S, this._expanded.value = F, this._expanded.commit(), this._locked.value = j, this._locked.commit(), C && this._bootstrap(), I && this.initialize();
	}
	_registerEvents() {
		super._registerEvents(), this._registerEvent("preexpand"), this._registerEvent("expand"), this._registerEvent("postexpand"), this._registerEvent("precollapse"), this._registerEvent("collapse"), this._registerEvent("postcollapse"), this._registerEvent("prelock"), this._registerEvent("lock"), this._registerEvent("postlock"), this._registerEvent("preunlock"), this._registerEvent("unlock"), this._registerEvent("postunlock"), this._addInternalEventListener(this.getEventName("validate"), (e) => {
			if (e.detail.component !== this) return;
			const s = n("boolean", {
				expanded: this._expanded.value,
				locked: this._locked.value,
				expandOnFocus: this._expandOnFocus,
				collapseOnBlur: this._collapseOnBlur,
				_expandInsideBreakpoint: this._expandInsideBreakpoint,
				_expandOutsideBreakpoint: this._expandOutsideBreakpoint,
				_collapseInsideBreakpoint: this._collapseInsideBreakpoint,
				_collapseOutsideBreakpoint: this._collapseOutsideBreakpoint,
				_lockInsideBreakpoint: this._lockInsideBreakpoint,
				_lockOutsideBreakpoint: this._lockOutsideBreakpoint,
				_unlockInsideBreakpoint: this._unlockInsideBreakpoint,
				_unlockOutsideBreakpoint: this._unlockOutsideBreakpoint
			}, { shouldThrow: !1 });
			s.status || (this._errors = [...this._errors, ...s.errors], this._valid = !1);
		}), this._addInternalEventListener(this.getEventName("initialize"), (e) => {
			e.detail.component === this && (this.isExpanded ? this.expand() : this.collapse(), this.isLocked ? this.lock() : this.unlock());
		});
	}
	get lockedClass() {
		return this._classes.locked;
	}
	set lockedClass(e) {
		u({ lockedClass: e }), this._classes.locked !== e && (this._classes.locked = e);
	}
	get unlockedClass() {
		return this._classes.unlocked;
	}
	set unlockedClass(e) {
		u({ unlockedClass: e }), this._classes.unlocked !== e && (this._classes.unlocked = e);
	}
	get expandClass() {
		return this._classes.expand;
	}
	set expandClass(e) {
		u({ expandClass: e }), this._classes.expand !== e && (this._classes.expand = e);
	}
	get collapseClass() {
		return this._classes.collapse;
	}
	set collapseClass(e) {
		u({ collapseClass: e }), this._classes.collapse !== e && (this._classes.collapse = e);
	}
	get transitionClass() {
		return this._classes.transition;
	}
	set transitionClass(e) {
		u({ transitionClass: e }), this._classes.transition !== e && (this._classes.transition = e);
	}
	get transitionDuration() {
		return this._durations.transition;
	}
	set transitionDuration(e) {
		n("number", { transitionDuration: e }), this._durations.transition !== e && (this._durations.transition = e, this._setCustomProps());
	}
	get expandDuration() {
		return this._durations.expand === -1 ? this.transitionDuration : this._durations.expand;
	}
	set expandDuration(e) {
		n("number", { expandDuration: e }), this._durations.expand !== e && (this._durations.expand = e, this._setCustomProps());
	}
	get collapseDuration() {
		return this._durations.collapse === -1 ? this.transitionDuration : this._durations.collapse;
	}
	set collapseDuration(e) {
		n("number", { collapseDuration: e }), this._durations.collapse !== e && (this._durations.collapse = e, this._setCustomProps());
	}
	get expandOnFocus() {
		return this._expandOnFocus;
	}
	set expandOnFocus(e) {
		n("boolean", { expandOnFocus: e }), this._expandOnFocus !== e && (this._expandOnFocus = e);
	}
	get collapseOnBlur() {
		return this._collapseOnBlur;
	}
	set collapseOnBlur(e) {
		n("boolean", { collapseOnBlur: e }), this._collapseOnBlur !== e && (this._collapseOnBlur = e);
	}
	get isExpanded() {
		return this._expanded.value;
	}
	get shouldBeExpanded() {
		return this._expanded.committed;
	}
	get expandInsideBreakpoint() {
		return this._expandInsideBreakpoint;
	}
	set expandInsideBreakpoint(e) {
		n("boolean", { expandInsideBreakpoint: e }), this._expandInsideBreakpoint !== e && (this._expandInsideBreakpoint = e);
	}
	get expandOutsideBreakpoint() {
		return this._expandOutsideBreakpoint;
	}
	set expandOutsideBreakpoint(e) {
		n("boolean", { expandOutsideBreakpoint: e }), this._expandOutsideBreakpoint !== e && (this._expandOutsideBreakpoint = e);
	}
	get collapseInsideBreakpoint() {
		return this._collapseInsideBreakpoint;
	}
	set collapseInsideBreakpoint(e) {
		n("boolean", { collapseInsideBreakpoint: e }), this._collapseInsideBreakpoint !== e && (this._collapseInsideBreakpoint = e);
	}
	get collapseOutsideBreakpoint() {
		return this._collapseOutsideBreakpoint;
	}
	set collapseOutsideBreakpoint(e) {
		n("boolean", { collapseOutsideBreakpoint: e }), this._collapseOutsideBreakpoint !== e && (this._collapseOutsideBreakpoint = e);
	}
	get lockInsideBreakpoint() {
		return this._lockInsideBreakpoint;
	}
	set lockInsideBreakpoint(e) {
		n("boolean", { lockInsideBreakpoint: e }), this._lockInsideBreakpoint !== e && (this._lockInsideBreakpoint = e);
	}
	get lockOutsideBreakpoint() {
		return this._lockOutsideBreakpoint;
	}
	set lockOutsideBreakpoint(e) {
		n("boolean", { lockOutsideBreakpoint: e }), this._lockOutsideBreakpoint !== e && (this._lockOutsideBreakpoint = e);
	}
	get unlockInsideBreakpoint() {
		return this._unlockInsideBreakpoint;
	}
	set unlockInsideBreakpoint(e) {
		n("boolean", { unlockInsideBreakpoint: e }), this._unlockInsideBreakpoint = e;
	}
	get unlockOutsideBreakpoint() {
		return this._unlockOutsideBreakpoint;
	}
	set unlockOutsideBreakpoint(e) {
		n("boolean", { unlockOutsideBreakpoint: e }), this._unlockOutsideBreakpoint = e;
	}
	get isLocked() {
		return this._locked.value;
	}
	get shouldBeLocked() {
		return this._locked.committed;
	}
	_mediaQueryListEventCallback(e) {
		e.matches ? (this.unlockInsideBreakpoint && this.unlock(), this.isExpanded && this.collapseInsideBreakpoint ? (this.isLocked && this.unlock(), this.collapse({ preserveState: !0 })) : !this.isExpanded && this.expandInsideBreakpoint && (this.isLocked && this.unlock(), this.expand()), this.lockInsideBreakpoint && this.lock()) : (this.unlockOutsideBreakpoint && this.unlock(), this.isExpanded && this.collapseOutsideBreakpoint ? (this.isLocked && this.unlock(), this.collapse({ preserveState: !0 })) : !this.isExpanded && this.expandOutsideBreakpoint && (this.isLocked && this.unlock(), this.expand()), this.lockOutsideBreakpoint && this.lock());
	}
	_expand({ emit: e = this.isInitialized && this.shouldEmit, transition: t = this.isInitialized } = {}) {
		this._dispatchEvent("preexpand", this.rootDOMElement, { emit: e }), this._cancelAnimationFrame("expandTransition"), this._cancelAnimationFrame("collapseTransition"), this._clearTimeout("expandTransition"), this._clearTimeout("collapseTransition"), t && this.transitionClass !== "" ? (c(this.transitionClass, this.dom.controlled), this._requestAnimationFrame(() => {
			d(this.collapseClass, this.dom.controlled), this._requestAnimationFrame(() => {
				c(this.expandClass, this.dom.controlled), this._requestAnimationFrame(() => {
					this._setTimeout(() => {
						d(this.transitionClass, this.dom.controlled), this._dispatchEvent("postexpand", this.rootDOMElement, { emit: e });
					}, this.expandDuration, "expandTransition");
				}, "expandTransition"), this._dispatchEvent("expand", this.rootDOMElement, { emit: e });
			}, "expandTransition");
		}, "expandTransition")) : (d(this.transitionClass, this.dom.controlled), c(this.expandClass, this.dom.controlled), d(this.collapseClass, this.dom.controlled), this._dispatchEvent("expand", this.rootDOMElement, { emit: e }), this._dispatchEvent("postexpand", this.rootDOMElement, { emit: e }));
	}
	_collapse({ emit: e = this.isInitialized && this.shouldEmit, transition: t = this.isInitialized } = {}) {
		this._dispatchEvent("precollapse", this.rootDOMElement, { emit: e }), this._cancelAnimationFrame("expandTransition"), this._cancelAnimationFrame("collapseTransition"), this._clearTimeout("expandTransition"), this._clearTimeout("collapseTransition"), t && this.transitionClass !== "" ? (c(this.transitionClass, this.dom.controlled), this._requestAnimationFrame(() => {
			d(this.expandClass, this.dom.controlled), this._requestAnimationFrame(() => {
				c(this.collapseClass, this.dom.controlled), this._requestAnimationFrame(() => {
					this._setTimeout(() => {
						d(this.transitionClass, this.dom.controlled), this._dispatchEvent("postcollapse", this.rootDOMElement, { emit: e });
					}, this.collapseDuration, "collapseTransition");
				}, "collapseTransition"), this._dispatchEvent("collapse", this.rootDOMElement, { emit: e });
			}, "collapseTransition");
		}, "collapseTransition")) : (d(this.transitionClass, this.dom.controlled), c(this.collapseClass, this.dom.controlled), d(this.expandClass, this.dom.controlled), this._dispatchEvent("collapse", this.rootDOMElement, { emit: e }), this._dispatchEvent("postcollapse", this.rootDOMElement, { emit: e }));
	}
	_lock({ emit: e = this.isInitialized && this.shouldEmit } = {}) {
		this._dispatchEvent("prelock", this.rootDOMElement, { emit: e }), c(this.lockedClass, this.dom.controlled), d(this.unlockedClass, this.dom.controlled), this.dom.controller?.setAttribute("disabled", "true"), this._dispatchEvent("lock", this.rootDOMElement, { emit: e }), this._dispatchEvent("postlock", this.rootDOMElement, { emit: e });
	}
	_unlock({ emit: e = this.isInitialized && this.shouldEmit } = {}) {
		this._dispatchEvent("preunlock", this.rootDOMElement, { emit: e }), c(this.unlockedClass, this.dom.controlled), d(this.lockedClass, this.dom.controlled), this.dom.controller?.removeAttribute("disabled"), this._dispatchEvent("unlock", this.rootDOMElement, { emit: e }), this._dispatchEvent("postunlock", this.rootDOMElement, { emit: e });
	}
	expand({ force: e = !this.isInitialized, emit: t = this.isInitialized && this.shouldEmit, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
		this.isExpanded && !e || this.isLocked && !e || (this.focusState = "self", this._expand({
			emit: t,
			transition: s
		}), this._expanded.value = !0, i || this._expanded.commit());
	}
	focus() {
		super.focus(), this.expandOnFocus && this.expand();
	}
	blur() {
		super.blur(), this.collapseOnBlur && this.collapse();
	}
	preview({ force: e = !this.isInitialized, emit: t = this.isInitialized && this.shouldEmit, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
		this.isExpanded && !e || this.isLocked && !e || (this.focusState = "none", this._expand({
			emit: t,
			transition: s
		}), this._expanded.value = !0, i || this._expanded.commit());
	}
	collapse({ force: e = !this.isInitialized, emit: t = this.isInitialized && this.shouldEmit, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
		!this.isExpanded && !e || this.isLocked && !e || (this.focusState = "none", this._collapse({
			emit: t,
			transition: s
		}), this._expanded.value = !1, i || this._expanded.commit());
	}
	toggle({ force: e = !this.isInitialized, emit: t = this.isInitialized && this.shouldEmit, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
		this.isExpanded ? this.collapse({
			force: e,
			emit: t,
			transition: s,
			preserveState: i
		}) : this.expand({
			force: e,
			emit: t,
			transition: s,
			preserveState: i
		});
	}
	lock({ force: e = !this.isInitialized, emit: t = this.isInitialized && this.shouldEmit, preserveState: s = !1 } = {}) {
		this.isLocked && !e || (this._locked.value = !0, this._lock({ emit: t }), s || this._locked.commit());
	}
	unlock({ force: e = !this.isInitialized, emit: t = this.isInitialized && this.shouldEmit, preserveState: s = !1 } = {}) {
		!this.isLocked && !e || (this._locked.value = !1, this._unlock({ emit: t }), s || this._locked.commit());
	}
	toggleLock({ force: e = !this.isInitialized, emit: t = this.isInitialized && this.shouldEmit, preserveState: s = !1 } = {}) {
		this.isLocked ? this.unlock({
			force: e,
			emit: t,
			preserveState: s
		}) : this.lock({
			force: e,
			emit: t,
			preserveState: s
		});
	}
}, ke = class extends me {
	_scope = "Graupl";
	_rootDOMElement = "disclosure";
	_storageKey = "disclosures";
	_name = "Disclosure";
	constructor({ disclosureElement: e, controllerElement: t, disclosureContentSelector: s = ".disclosure-content", lockClass: i = "locked", unlockClass: r = "unlocked", expandClass: o = "show", collapseClass: a = "hide", transitionClass: l = "transitioning", transitionDuration: m = 250, expandDuration: p = -1, collapseDuration: E = -1, expandOnFocus: w = !1, collapseOnBlur: v = !1, breakpoint: y = "", expandInsideBreakpoint: b = !1, expandOutsideBreakpoint: k = !1, collapseInsideBreakpoint: g = !1, collapseOutsideBreakpoint: O = !1, lockInsideBreakpoint: L = !1, lockOutsideBreakpoint: z = !1, unlockInsideBreakpoint: A = !1, unlockOutsideBreakpoint: S = !1, locked: F = !1, mediaQuery: j = "", prefix: U = "graupl-", key: G = null, initializeClass: Q = "initializing", lockedClass: x, unlockedClass: B, openClass: D, closeClass: C, openDuration: I, closeDuration: N, openOnFocus: R, closeOnBlur: J, minWidth: Z, openInsideBreakpoint: W, openOutsideBreakpoint: X, closeInsideBreakpoint: Y, closeOutsideBreakpoint: ee, autoOpen: P, initialize: ne = !1 } = {}) {
		x !== void 0 && (console.warn("Graupl Disclosure option \"lockedClass\" is deprecated and will be removed. Use lockClass instead."), i = x), B !== void 0 && (console.warn("Graupl Disclosure option \"unlockedClass\" is deprecated and will be removed. Use unlockClass instead."), r = B), D !== void 0 && (console.warn("Graupl Disclosure option \"openClass\" is deprecated and will be removed. Use expandClass instead."), o = D), C !== void 0 && (console.warn("Graupl Disclosure option \"closeClass\" is deprecated and will be removed. Use collapseClass instead."), a = C), I !== void 0 && (console.warn("Graupl Disclosure option \"openDuration\" is deprecated and will be removed. Use expandDuration instead."), p = I), N !== void 0 && (console.warn("Graupl Disclosure option \"closeDuration\" is deprecated and will be removed. Use collapseDuration instead."), E = N), R !== void 0 && (console.warn("Graupl Disclosure option \"openOnFocus\" is deprecated and will be removed. Use expandOnFocus instead."), w = R), J !== void 0 && (console.warn("Graupl Disclosure option \"closeOnBlur\" is deprecated and will be removed. Use collapseOnBlur instead."), v = J), Z !== void 0 && (console.warn("Graupl Disclosure option \"minWidth\" is deprecated and will be removed. Use breakpoint instead."), y = Z), W !== void 0 && (console.warn("Graupl Disclosure option \"openInsideBreakpoint\" is deprecated and will be removed. Use expandInsideBreakpoint instead."), b = W), X !== void 0 && (console.warn("Graupl Disclosure option \"openOutsideBreakpoint\" is deprecated and will be removed. Use expandOutsideBreakpoint instead."), k = X), Y !== void 0 && (console.warn("Graupl Disclosure option \"closeInsideBreakpoint\" is deprecated and will be removed. Use collapseInsideBreakpoint instead."), g = Y), ee !== void 0 && (console.warn("Graupl Disclosure option \"closeOutsideBreakpoint\" is deprecated and will be removed. Use collapseOutsideBreakpoint instead."), O = ee), P !== void 0 && (console.warn("Graupl Disclosure option \"autoOpen\" is deprecated and will be removed. Use expandOutsideBreakpoint and collapseInsideBreakpoint instead."), k = P, g = P), super({
			controllerElement: t,
			controlledElement: e,
			bootstrap: !1,
			initialize: !1,
			expandClass: o,
			collapseClass: a,
			transitionClass: l,
			transitionDuration: m,
			expandDuration: p,
			collapseDuration: E,
			expandOnFocus: w,
			collapseOnBlur: v,
			expandInsideBreakpoint: b,
			expandOutsideBreakpoint: k,
			collapseInsideBreakpoint: g,
			collapseOutsideBreakpoint: O,
			lockInsideBreakpoint: L,
			lockOutsideBreakpoint: z,
			unlockInsideBreakpoint: A,
			unlockOutsideBreakpoint: S,
			locked: F,
			breakpoint: y,
			mediaQuery: j,
			lockClass: i,
			unlockClass: r,
			prefix: U,
			key: G,
			initializeClass: Q
		}), this._dom.disclosure = e, this._selectors.content = s, this._bootstrap(), ne && this.initialize();
	}
	_registerEvents() {
		super._registerEvents(), this._registerEvent("preexpand", { detail: { disclosure: this } }), this._registerEvent("expand", { detail: { disclosure: this } }), this._registerEvent("postexpand", { detail: { disclosure: this } }), this._registerEvent("precollapse", { detail: { disclosure: this } }), this._registerEvent("collapse", { detail: { disclosure: this } }), this._registerEvent("postcollapse", { detail: { disclosure: this } }), this._registerEvent("prelock", { detail: { disclosure: this } }), this._registerEvent("lock", { detail: { disclosure: this } }), this._registerEvent("postlock", { detail: { disclosure: this } }), this._registerEvent("preunlock", { detail: { disclosure: this } }), this._registerEvent("unlock", { detail: { disclosure: this } }), this._registerEvent("postunlock", { detail: { disclosure: this } }), this._addInternalEventListener(this.getEventName("validate"), () => {
			if (this.dom.controller === null) {
				const e = h(HTMLElement, { controllerElement: this.dom.controller }, { shouldThrow: !1 });
				this._errors = [...this._errors, ...e.errors], this._valid = !1;
			}
		}), this._addInternalEventListener(this.getEventName("preinitialize"), () => {
			this._expanded.value = this.dom.controller.getAttribute("aria-expanded") === "true", this._expanded.commit();
		}), this._addInternalEventListener(this.getEventName("preexpand"), () => {
			this.dom.controller.setAttribute("aria-expanded", "true"), this.dom.content.removeAttribute("inert");
		}), this._addInternalEventListener(this.getEventName("precollapse"), () => {
			this.dom.controller.setAttribute("aria-expanded", "false"), this.dom.content.setAttribute("inert", "true");
		});
	}
	get openClass() {
		return console.warn("Graupl Disclosure.openClass is deprecated and will be removed. Use expandClass instead."), this.expandClass;
	}
	set openClass(e) {
		console.warn("Graupl Disclosure.openClass is deprecated and will be removed. Use expandClass instead."), this.expandClass = e;
	}
	get closeClass() {
		return console.warn("Graupl Disclosure.closeClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass;
	}
	set closeClass(e) {
		console.warn("Graupl Disclosure.closeClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass = e;
	}
	get openDuration() {
		return console.warn("Graupl Disclosure.openDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration;
	}
	set openDuration(e) {
		console.warn("Graupl Disclosure.openDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration = e;
	}
	get closeDuration() {
		return console.warn("Graupl Disclosure.closeDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration;
	}
	set closeDuration(e) {
		console.warn("Graupl Disclosure.closeDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration = e;
	}
	get openOnFocus() {
		return console.warn("Graupl Disclosure.openOnFocus is deprecated and will be removed. Use expandOnFocus instead."), this.expandOnFocus;
	}
	set openOnFocus(e) {
		console.warn("Graupl Disclosure.openOnFocus is deprecated and will be removed. Use expandOnFocus instead."), this.expandOnFocus = e;
	}
	get closeOnBlur() {
		return console.warn("Graupl Disclosure.closeOnBlur is deprecated and will be removed. Use collapseOnBlur instead."), this.collapseOnBlur;
	}
	set closeOnBlur(e) {
		console.warn("Graupl Disclosure.closeOnBlur is deprecated and will be removed. Use collapseOnBlur instead."), this.collapseOnBlur = e;
	}
	get isOpen() {
		return console.warn("Graupl Disclosure.isOpen is deprecated and will be removed. Use isExpanded instead."), this.isExpanded;
	}
	get hasOpened() {
		return console.warn("Graupl Disclosure.hasOpened is deprecated and will be removed. Use shouldBeExpanded instead."), this.shouldBeExpanded;
	}
	get openInsideBreakpoint() {
		return console.warn("Graupl Disclosure.openInsideBreakpoint is deprecated and will be removed. Use expandInsideBreakpoint instead."), this.expandInsideBreakpoint;
	}
	set openInsideBreakpoint(e) {
		console.warn("Graupl Disclosure.openInsideBreakpoint is deprecated and will be removed. Use expandInsideBreakpoint instead."), this.expandInsideBreakpoint = e;
	}
	get openOutsideBreakpoint() {
		return console.warn("Graupl Disclosure.openOutsideBreakpoint is deprecated and will be removed. Use expandOutsideBreakpoint instead."), this.expandOutsideBreakpoint;
	}
	set openOutsideBreakpoint(e) {
		console.warn("Graupl Disclosure.openOutsideBreakpoint is deprecated and will be removed. Use expandOutsideBreakpoint instead."), this.expandOutsideBreakpoint = e;
	}
	get closeInsideBreakpoint() {
		return console.warn("Graupl Disclosure.closeInsideBreakpoint is deprecated and will be removed. Use collapseInsideBreakpoint instead."), this.collapseInsideBreakpoint;
	}
	set closeInsideBreakpoint(e) {
		console.warn("Graupl Disclosure.closeInsideBreakpoint is deprecated and will be removed. Use collapseInsideBreakpoint instead."), this.collapseInsideBreakpoint = e;
	}
	get closeOutsideBreakpoint() {
		return console.warn("Graupl Disclosure.closeOutsideBreakpoint is deprecated and will be removed. Use collapseOutsideBreakpoint instead."), this.collapseOutsideBreakpoint;
	}
	set closeOutsideBreakpoint(e) {
		console.warn("Graupl Disclosure.closeOutsideBreakpoint is deprecated and will be removed. Use collapseOutsideBreakpoint instead."), this.collapseOutsideBreakpoint = e;
	}
	_setIds() {
		this.dom.disclosure.id = this.dom.disclosure.id || `disclosure-${this.key}`, this.dom.controller.id = this.dom.controller.id || `disclosure-controller-${this.key}`, this._id = this.dom.disclosure.id;
	}
	_setAriaAttributes() {
		this.dom.controller.getAttribute("aria-expanded") !== "true" && this.dom.controller.setAttribute("aria-expanded", "false"), this.dom.controller.setAttribute("aria-controls", this.dom.disclosure.id), he("button", { controller: this.dom.controller }, { shouldThrow: !1 }).status || this.dom.controller.setAttribute("role", "button");
	}
	_setCustomProps() {
		this.dom.disclosure.style.setProperty(`--${this.prefix}disclosure-transition-duration`, `${this.transitionDuration}ms`), this.dom.disclosure.style.setProperty(`--${this.prefix}disclosure-open-transition-duration`, `${this.expandDuration}ms`), this.dom.disclosure.style.setProperty(`--${this.prefix}disclosure-close-transition-duration`, `${this.collapseDuration}ms`);
	}
	_setDOMElements() {
		this._setDOMElementType("content", { context: this.dom.disclosure }), h(HTMLElement, { disclosureContentElement: this.dom.content });
	}
	_handleFocus() {
		this._addEventListener("focusout", this.dom.disclosure, (e) => {
			!this.collapseOnBlur || this.currentEvent !== "keyboard" || e.relatedTarget === null || this.dom.disclosure.contains(e.relatedTarget) || this.dom.controller.contains(e.relatedTarget) || this.dom.controller === e.relatedTarget || this.dom.disclosure === e.relatedTarget || this.collapse();
		}), this._addEventListener("focusout", this.dom.controller, (e) => {
			!this.collapseOnBlur || this.currentEvent !== "keyboard" || e.relatedTarget === null || this.dom.disclosure.contains(e.relatedTarget) || this.dom.controller.contains(e.relatedTarget) || this.dom.controller === e.relatedTarget || this.dom.disclosure === e.relatedTarget || this.collapse();
		});
	}
	_handleClick() {
		this._addEventListener("click", this.dom.controller, (e) => {
			this.currentEvent = "mouse", e.button === 0 && (_(e), this.toggle());
		}), this._addEventListener("click", document, (e) => {
			this.focusState !== "self" || !this.collapseOnBlur || (this.currentEvent = "mouse", !this.dom.disclosure.contains(e.target) && this.dom.controller !== e.target && this.collapse());
		});
	}
	_handleKeydown() {
		this._addEventListener("keydown", this.dom.controller, (e) => {
			switch (this.currentEvent = "keyboard", T(e)) {
				case "Space":
				case "Enter": _(e);
			}
		}), this._addEventListener("keydown", this.dom.disclosure, (e) => {
			this.currentEvent = "keyboard", T(e) === "Escape" && _(e);
		});
	}
	_handleKeyup() {
		this._addEventListener("keyup", this.dom.controller, (e) => {
			switch (this.currentEvent = "keyboard", T(e)) {
				case "Space":
				case "Enter":
					this.toggle(), _(e);
					break;
				case "Tab": this.expandOnFocus && (_(e), this.expand());
			}
		}), this._addEventListener("keyup", this.dom.disclosure, (e) => {
			this.currentEvent = "keyboard", T(e) === "Escape" && (this.collapse(), _(e));
		});
	}
	open(...e) {
		return console.warn("Graupl Disclosure.open() is deprecated and will be removed. Use expand() instead."), this.expand(...e);
	}
	close(...e) {
		return console.warn("Graupl Disclosure.close() is deprecated and will be removed. Use collapse() instead."), this.collapse(...e);
	}
};
const ie = /[\11\12\14\15\40]+/, V = "data-once", ge = document;
function K(e, t, s) {
	return e[`${t}Attribute`](V, s);
}
function $(e) {
	if (typeof e != "string") throw new TypeError("once ID must be a string");
	if (e === "" || ie.test(e)) throw new RangeError("once ID must not be empty or contain spaces");
	return `[${V}~="${e}"]`;
}
function Ee(e) {
	if (!(e instanceof Element)) throw new TypeError("The element must be an instance of Element");
	return !0;
}
function M(e, t = ge) {
	let s = e;
	if (e === null) s = [];
	else if (e) if (t instanceof Document || t instanceof DocumentFragment || t instanceof Element) typeof e == "string" ? s = t.querySelectorAll(e) : e instanceof Element && (s = [e]);
	else throw new TypeError("Context must be an object of type \"Document\", \"DocumentFragment\", or \"Element\".");
	else throw new TypeError("Selector must not be empty");
	return Array.prototype.slice.call(s);
}
function H(e, t, s) {
	return t.filter((i) => {
		const r = Ee(i) && i.matches(e);
		return r && s && s(i), r;
	});
}
function re(e, { add: t, remove: s }) {
	const i = [];
	K(e, "has") && K(e, "get").trim().split(ie).forEach((o) => {
		i.indexOf(o) < 0 && o !== s && i.push(o);
	}), t && i.push(t);
	const r = i.join(" ");
	K(e, r === "" ? "remove" : "set", r);
}
function f(e, t, s) {
	return H(`:not(${$(e)})`, M(t, s), (i) => re(i, { add: e }));
}
f.remove = (e, t, s) => H($(e), M(t, s), (i) => re(i, { remove: e })), f.filter = (e, t, s) => H($(e), M(t, s)), f.find = (e, t) => M(e ? $(e) : `[${V}]`, t);
const we = ({ options: e = {}, context: t = document, selector: s = ".disclosure" } = {}) => {
	f("graupl-disclosure-generator", s, t).forEach((i) => {
		const r = i.dataset.grauplDisclosureOptions ? JSON.parse(i.dataset.grauplDisclosureOptions.replace(/'/g, "\"")) || {} : {}, o = `[data-graupl-disclosure-target="${i.id}"]`, [a] = f("graupl-disclosure-generator", o, t);
		if (!a) {
			console.warn(`No controller found for disclosure with ID "${i.id}". Please ensure there is an element with the selector "${o}".`), f.remove("graupl-disclosure-generator", i);
			return;
		}
		new ke({
			disclosureElement: i,
			controllerElement: a,
			initialize: !0,
			...e,
			...r
		});
	});
};
module.exports = we;

//# sourceMappingURL=disclosure.cjs.js.map