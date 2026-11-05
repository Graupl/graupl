function c(e, t, { shouldThrow: s = !0 } = {}) {
	const i = {
		status: !0,
		errors: []
	};
	try {
		if (typeof t != "object") throw new TypeError(`Elements given to isValidInstance() must be inside of an object. "${typeof t}" given.`);
		for (const r in t) try {
			if (!(t[r] instanceof e)) {
				const n = typeof t[r];
				throw new TypeError(`${r} must be an instance of ${e.name}. "${n}" given.`);
			}
		} catch (n) {
			i.status = !1, i.errors.push(n);
		}
	} catch (r) {
		i.status = !1, i.errors.push(r);
	}
	if (s && !i.status) throw i.errors[0];
	return i;
}
function o(e, t, { shouldThrow: s = !0 } = {}) {
	const i = {
		status: !0,
		errors: []
	};
	try {
		if (typeof t != "object") throw new TypeError(`Values given to isValidType() must be inside of an object. "${typeof t}" given.`);
		for (const r in t) try {
			const n = typeof t[r];
			if (n !== e) throw new TypeError(`${r} must be a ${e}. "${n}" given.`);
		} catch (n) {
			i.status = !1, i.errors.push(n);
		}
	} catch (r) {
		i.status = !1, i.errors.push(r);
	}
	if (s && !i.status) throw i.errors[0];
	return i;
}
function te(e, { shouldThrow: t = !0 } = {}) {
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
				r.forEach((n) => {
					if (typeof n != "string") throw new TypeError(`${i} must be a string or an array of strings. An array containing non-strings given.`);
					if (n !== "" && /\s/.test(n)) throw new TypeError(`${i} must be a valid class token without whitespace. "${n}" given.`);
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
function se(e, { shouldThrow: t = !0 } = {}) {
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
		} catch (n) {
			s.status = !1, s.errors.push(n);
		}
	} catch (i) {
		s.status = !1, s.errors.push(i);
	}
	if (t && !s.status) throw s.errors[0];
	return s;
}
function ie(e, { shouldThrow: t = !0 } = {}) {
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
		} catch (n) {
			s.status = !1, s.errors.push(n);
		}
	} catch (i) {
		s.status = !1, s.errors.push(i);
	}
	if (t && !s.status) throw s.errors[0];
	return s;
}
function re(e, t, { shouldThrow: s = !0 } = {}) {
	const i = {
		status: !0,
		errors: []
	};
	try {
		if (o("string", { tagName: e }, { shouldThrow: !0 }).status && c(HTMLElement, t, { shouldThrow: !0 }).status) {
			const r = e.toLowerCase();
			for (const n in t) try {
				if (t[n].tagName.toLowerCase() !== r) throw new TypeError(`${n} must be a <${r}> element. <${t[n].tagName.toLowerCase()}> given.`);
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
function ne(e, t, { shouldThrow: s = !0 } = {}) {
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
function oe(e, { shouldThrow: t = !0 } = {}) {
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
function D(e) {
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
function p(e) {
	e.preventDefault(), e.stopPropagation();
}
function ae(e) {
	return o("string", { value: e }), `${e.charAt(0).toLowerCase()}${e.slice(1)}`;
}
function J(e) {
	return o("string", { value: e }), `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
}
var G = class Y {
	_scope;
	_type = "_default";
	_storage = {};
	_crush = !1;
	constructor({ scope: t, type: s = null, crush: i = !1, initialize: r = !0 } = {}) {
		this._scope = t, this._type = s || "_default", this._crush = i, r && this.initialize();
	}
	initialize() {
		try {
			!this._crush && typeof window[this.scope] < "u" && (c(Y, { storage: window[this.scope] }, { shouldThrow: !1 }).status || typeof window[this.scope].storage < "u" && typeof window[this.scope].scope < "u" && typeof window[this.scope].type < "u") && (this._storage = window[this.scope].storage);
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
		o("string", { type: t }) && (this._type = t);
	}
	get storage() {
		return this._storage;
	}
	get({ type: t = this.type, key: s = null } = {}) {
		const i = o("string", { type: t }, { shouldThrow: !1 });
		if (!i.status) throw i.errors[0];
		if (!this.storage[t]) throw new Error(`StorageManager (${this.scope}): Type "${t}" is not initialized.`);
		if (s !== null) {
			const r = o("string", { key: s }, { shouldThrow: !1 });
			if (!r.status) throw r.errors[0];
			return this.storage[t][s];
		}
		return this.storage[t];
	}
	set({ type: t = this.type, key: s = null, data: i = {} } = {}) {
		const r = o("string", { type: t }, { shouldThrow: !1 }), n = o("object", { data: i }, { shouldThrow: !1 });
		if (!r.status) throw r.errors[0];
		if (!n.status) throw n.errors[0];
		if (s !== null) {
			const a = o("string", { key: s }, { shouldThrow: !1 });
			if (!a.status) throw a.errors[0];
			this._storage[t] || (this._storage[t] = {}), this._storage[t][s] = i;
		} else this._storage[t] = i;
	}
	clear({ type: t = this.type, key: s = null } = {}) {
		const i = o("string", { type: t }, { shouldThrow: !1 });
		if (!i.status) throw i.errors[0];
		if (s !== null) {
			const r = o("string", { key: s }, { shouldThrow: !1 });
			if (!r.status) throw r.errors[0];
			delete this.storage[t][s];
		} else delete this.storage[t];
	}
	dispose() {
		typeof window < "u" && window[this.scope] === this && delete window[this.scope], delete this._storage;
	}
};
function h(e, t) {
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
var W = class {
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
	constructor({ prefix: e = "ae-", key: t = null, initializeClass: s = "initializing", emit: i = !0, bootstrap: r = !0, initialize: n = !0 } = {}) {
		this._classes.initialize = s || "", this._prefix = e || "", this._key = t || "", this._shouldEmit = i, r && this._bootstrap(), n && this.initialize();
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
			h(this.initializeClass, this.rootDOMElement), this._dispatchEvent("preinitialize", this.rootDOMElement), this._generateKey(), this._setDOMElements(), this._setIds(), this._setAriaAttributes(), this._setCustomProps(), this._createChildElements(), this._handleFocus(), this._handleHover(), this._handleClick(), this._handleKeydown(), this._handleKeyup(), this._dispatchEvent("initialize", this.rootDOMElement), this._store(), d(this.initializeClass, this.rootDOMElement), this._initialized = !0, this._dispatchEvent("postinitialize", this.rootDOMElement);
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
		se({ focusState: e }), this._focusState !== e && (this._focusState = e);
	}
	get currentEvent() {
		return this._currentEvent;
	}
	set currentEvent(e) {
		ie({ currentEvent: e }), this._currentEvent !== e && (this._currentEvent = e);
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
		return this._eventPrefix !== "" ? this._eventPrefix : `${ae(this.scope)}${J(this.name)}`;
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
		o("boolean", { shouldEmit: e }), this._shouldEmit = e;
	}
	get errors() {
		return this._errors;
	}
	_validate() {
		this._errors = [], this._valid = !0, this._dispatchEvent("prevalidate", this.rootDOMElement);
		const e = oe(this, { shouldThrow: !1 });
		if (e.status || (this._errors = [...this._errors, ...e.errors], this._valid = !1), Object.keys(this._dom).length > 0) {
			const n = {};
			for (const l of Object.keys(this._dom)) Array.isArray(this._dom[l]) ? this._dom[l].forEach((_, m) => {
				n[`${l}Element[${m}]`] = _;
			}) : this._dom[l] !== null && (n[`${l}Element`] = this._dom[l]);
			const a = c(HTMLElement, n, { shouldThrow: !1 });
			a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
		}
		if (Object.keys(this._selectors).length > 0) {
			const n = {};
			for (const l of Object.keys(this._selectors)) this._selectors[l] !== "" && (n[`${l}Selector`] = this._selectors[l]);
			const a = te(n, { shouldThrow: !1 });
			a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
		}
		if (Object.keys(this._classes).length > 0) {
			const n = {};
			for (const l of Object.keys(this._classes)) this._classes[l] !== "" && (n[`${l}Class`] = this._classes[l]);
			const a = u(n, { shouldThrow: !1 });
			a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
		}
		if (Object.keys(this._durations).length > 0) {
			const n = {};
			for (const l of Object.keys(this._durations)) n[`${l}Duration`] = this._durations[l];
			const a = o("number", n, { shouldThrow: !1 });
			a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
		}
		if (Object.keys(this.delays).length > 0) {
			const n = {};
			for (const l of Object.keys(this.delays)) n[`${l}Delay`] = this.delays[l];
			const a = o("number", n, { shouldThrow: !1 });
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
		this._protectedDOMElements.forEach((n) => {
			t[`_protectedDOMElementType[${n}]`] = n;
		});
		const s = o("string", t, { shouldThrow: !1 });
		s.status || (this._errors = [...this._errors, ...s.errors], this._valid = !1);
		const r = o("boolean", {
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
		c(HTMLElement, { context: t });
		const r = Array.from(t.querySelectorAll(this.selectors[e])).filter((n) => i ? n.parentElement === t : !0);
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
		this._shouldStore && (c(G, { storage: window[`${this.scope}Storage`] }, { shouldThrow: !1 }).status || new G({ scope: `${this.scope}Storage` }), window[`${this.scope}Storage`].set({
			key: this.id !== "" ? this.id : this.key,
			type: this._storageKey,
			data: this
		}));
	}
	_unstore() {
		this._shouldStore && c(G, { storage: window[`${this.scope}Storage`] }, { shouldThrow: !1 }).status && window[`${this.scope}Storage`].clear({
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
		o("string", { name: e }), o("boolean", { bubbles: t }), o("object", { detail: s });
		const i = `${this.eventPrefix}${J(e)}`;
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
		ne(e, this), o("boolean", { emit: s }), s && this.shouldEmit && c(HTMLElement, { element: t });
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
		this._listeners = this._listeners.filter((n) => {
			const a = n.options, l = typeof a == "boolean" ? a : !!a?.capture;
			return !(n.type === e && n.element === t && n.listener === s && l === r);
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
}, le = class extends W {
	_name = "ResponsiveComponent";
	_breakpoint = "";
	_mediaQueryString = "";
	_mediaQueryList = null;
	constructor({ breakpoint: e = "", mediaQuery: t = "", prefix: s = "ae-", key: i = null, initializeClass: r = "initializing", emit: n = !0, bootstrap: a = !0, initialize: l = !0 } = {}) {
		super({
			prefix: s,
			key: i,
			initializeClass: r,
			emit: n,
			bootstrap: !1,
			initialize: !1
		}), this._breakpoint = e || "", this._mediaQueryString = t || "", a && this._bootstrap(), l && this.initialize();
	}
	_registerEvents() {
		super._registerEvents(), this._addInternalEventListener(this.getEventName("validate"), (e) => {
			if (e.detail.component !== this) return;
			const s = o("string", {
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
		o("string", { breakpoint: e }), this._breakpoint !== e && (this._breakpoint = e, this.isInitialized && this._handleMediaMatch());
	}
	get mediaQuery() {
		return this._mediaQueryString !== "" ? this._mediaQueryString : this._breakpoint === "" ? "" : `(width <= ${this._breakpoint})`;
	}
	set mediaQuery(e) {
		o("string", { mediaQuery: e }), this._mediaQueryString !== e && (this._mediaQueryString = e, this.isInitialized && this._handleMediaMatch());
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
}, X = class {
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
}, de = class extends le {
	_name = "CollapsibleComponent";
	_expanded = new X(!1);
	_locked = new X(!1);
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
	constructor({ controlledElement: e, controllerElement: t = null, triggerElement: s = null, lockClass: i = "locked", unlockClass: r = "unlocked", expandClass: n = "show", collapseClass: a = "hide", transitionClass: l = "transitioning", transitionDelay: _ = 250, transitionDuration: m = 150, expandDuration: b = -1, collapseDuration: g = -1, expandInsideBreakpoint: E = !1, expandOutsideBreakpoint: w = !1, collapseInsideBreakpoint: v = !1, collapseOutsideBreakpoint: y = !1, lockInsideBreakpoint: f = !1, lockOutsideBreakpoint: k = !1, unlockInsideBreakpoint: B = !1, unlockOutsideBreakpoint: T = !1, expandOnFocus: $ = !1, collapseOnBlur: L = !1, expanded: M = !1, locked: z = !1, breakpoint: A = "", mediaQuery: F = "", prefix: S = "ae-", key: U = null, initializeClass: O = "initializing", emit: x = !0, bootstrap: C = !0, initialize: I = !0 } = {}) {
		super({
			breakpoint: A,
			mediaQuery: F,
			prefix: S,
			key: U,
			initializeClass: O,
			emit: x,
			bootstrap: !1,
			initialize: !1
		}), this._dom.controller = t, this._dom.trigger = s ?? t, this._dom.controlled = e, this._protectedDOMElements.push("controller", "trigger", "controlled"), this._classes.locked = i || "", this._classes.unlocked = r || "", this._classes.expand = n || "", this._classes.collapse = a || "", this._classes.transition = l || "", this._delays.transition = _, this._durations.transition = m, this._durations.expand = b, this._durations.collapse = g, this._expandInsideBreakpoint = E, this._expandOutsideBreakpoint = w, this._collapseInsideBreakpoint = v, this._collapseOutsideBreakpoint = y, this._lockInsideBreakpoint = f, this._lockOutsideBreakpoint = k, this._unlockInsideBreakpoint = B, this._unlockOutsideBreakpoint = T, this._expandOnFocus = $, this._collapseOnBlur = L, this._expanded.value = M, this._expanded.commit(), this._locked.value = z, this._locked.commit(), C && this._bootstrap(), I && this.initialize();
	}
	_registerEvents() {
		super._registerEvents(), this._registerEvent("preexpand"), this._registerEvent("expand"), this._registerEvent("postexpand"), this._registerEvent("precollapse"), this._registerEvent("collapse"), this._registerEvent("postcollapse"), this._registerEvent("prelock"), this._registerEvent("lock"), this._registerEvent("postlock"), this._registerEvent("preunlock"), this._registerEvent("unlock"), this._registerEvent("postunlock"), this._addInternalEventListener(this.getEventName("validate"), (e) => {
			if (e.detail.component !== this) return;
			const s = o("boolean", {
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
		o("number", { transitionDuration: e }), this._durations.transition !== e && (this._durations.transition = e, this._setCustomProps());
	}
	get expandDuration() {
		return this._durations.expand === -1 ? this.transitionDuration : this._durations.expand;
	}
	set expandDuration(e) {
		o("number", { expandDuration: e }), this._durations.expand !== e && (this._durations.expand = e, this._setCustomProps());
	}
	get collapseDuration() {
		return this._durations.collapse === -1 ? this.transitionDuration : this._durations.collapse;
	}
	set collapseDuration(e) {
		o("number", { collapseDuration: e }), this._durations.collapse !== e && (this._durations.collapse = e, this._setCustomProps());
	}
	get expandOnFocus() {
		return this._expandOnFocus;
	}
	set expandOnFocus(e) {
		o("boolean", { expandOnFocus: e }), this._expandOnFocus !== e && (this._expandOnFocus = e);
	}
	get collapseOnBlur() {
		return this._collapseOnBlur;
	}
	set collapseOnBlur(e) {
		o("boolean", { collapseOnBlur: e }), this._collapseOnBlur !== e && (this._collapseOnBlur = e);
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
		o("boolean", { expandInsideBreakpoint: e }), this._expandInsideBreakpoint !== e && (this._expandInsideBreakpoint = e);
	}
	get expandOutsideBreakpoint() {
		return this._expandOutsideBreakpoint;
	}
	set expandOutsideBreakpoint(e) {
		o("boolean", { expandOutsideBreakpoint: e }), this._expandOutsideBreakpoint !== e && (this._expandOutsideBreakpoint = e);
	}
	get collapseInsideBreakpoint() {
		return this._collapseInsideBreakpoint;
	}
	set collapseInsideBreakpoint(e) {
		o("boolean", { collapseInsideBreakpoint: e }), this._collapseInsideBreakpoint !== e && (this._collapseInsideBreakpoint = e);
	}
	get collapseOutsideBreakpoint() {
		return this._collapseOutsideBreakpoint;
	}
	set collapseOutsideBreakpoint(e) {
		o("boolean", { collapseOutsideBreakpoint: e }), this._collapseOutsideBreakpoint !== e && (this._collapseOutsideBreakpoint = e);
	}
	get lockInsideBreakpoint() {
		return this._lockInsideBreakpoint;
	}
	set lockInsideBreakpoint(e) {
		o("boolean", { lockInsideBreakpoint: e }), this._lockInsideBreakpoint !== e && (this._lockInsideBreakpoint = e);
	}
	get lockOutsideBreakpoint() {
		return this._lockOutsideBreakpoint;
	}
	set lockOutsideBreakpoint(e) {
		o("boolean", { lockOutsideBreakpoint: e }), this._lockOutsideBreakpoint !== e && (this._lockOutsideBreakpoint = e);
	}
	get unlockInsideBreakpoint() {
		return this._unlockInsideBreakpoint;
	}
	set unlockInsideBreakpoint(e) {
		o("boolean", { unlockInsideBreakpoint: e }), this._unlockInsideBreakpoint = e;
	}
	get unlockOutsideBreakpoint() {
		return this._unlockOutsideBreakpoint;
	}
	set unlockOutsideBreakpoint(e) {
		o("boolean", { unlockOutsideBreakpoint: e }), this._unlockOutsideBreakpoint = e;
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
		this._dispatchEvent("preexpand", this.rootDOMElement, { emit: e }), this._cancelAnimationFrame("expandTransition"), this._cancelAnimationFrame("collapseTransition"), this._clearTimeout("expandTransition"), this._clearTimeout("collapseTransition"), t && this.transitionClass !== "" ? (h(this.transitionClass, this.dom.controlled), this._requestAnimationFrame(() => {
			d(this.collapseClass, this.dom.controlled), this._requestAnimationFrame(() => {
				h(this.expandClass, this.dom.controlled), this._requestAnimationFrame(() => {
					this._setTimeout(() => {
						d(this.transitionClass, this.dom.controlled), this._dispatchEvent("postexpand", this.rootDOMElement, { emit: e });
					}, this.expandDuration, "expandTransition");
				}, "expandTransition"), this._dispatchEvent("expand", this.rootDOMElement, { emit: e });
			}, "expandTransition");
		}, "expandTransition")) : (d(this.transitionClass, this.dom.controlled), h(this.expandClass, this.dom.controlled), d(this.collapseClass, this.dom.controlled), this._dispatchEvent("expand", this.rootDOMElement, { emit: e }), this._dispatchEvent("postexpand", this.rootDOMElement, { emit: e }));
	}
	_collapse({ emit: e = this.isInitialized && this.shouldEmit, transition: t = this.isInitialized } = {}) {
		this._dispatchEvent("precollapse", this.rootDOMElement, { emit: e }), this._cancelAnimationFrame("expandTransition"), this._cancelAnimationFrame("collapseTransition"), this._clearTimeout("expandTransition"), this._clearTimeout("collapseTransition"), t && this.transitionClass !== "" ? (h(this.transitionClass, this.dom.controlled), this._requestAnimationFrame(() => {
			d(this.expandClass, this.dom.controlled), this._requestAnimationFrame(() => {
				h(this.collapseClass, this.dom.controlled), this._requestAnimationFrame(() => {
					this._setTimeout(() => {
						d(this.transitionClass, this.dom.controlled), this._dispatchEvent("postcollapse", this.rootDOMElement, { emit: e });
					}, this.collapseDuration, "collapseTransition");
				}, "collapseTransition"), this._dispatchEvent("collapse", this.rootDOMElement, { emit: e });
			}, "collapseTransition");
		}, "collapseTransition")) : (d(this.transitionClass, this.dom.controlled), h(this.collapseClass, this.dom.controlled), d(this.expandClass, this.dom.controlled), this._dispatchEvent("collapse", this.rootDOMElement, { emit: e }), this._dispatchEvent("postcollapse", this.rootDOMElement, { emit: e }));
	}
	_lock({ emit: e = this.isInitialized && this.shouldEmit } = {}) {
		this._dispatchEvent("prelock", this.rootDOMElement, { emit: e }), h(this.lockedClass, this.dom.controlled), d(this.unlockedClass, this.dom.controlled), this.dom.controller?.setAttribute("disabled", "true"), this._dispatchEvent("lock", this.rootDOMElement, { emit: e }), this._dispatchEvent("postlock", this.rootDOMElement, { emit: e });
	}
	_unlock({ emit: e = this.isInitialized && this.shouldEmit } = {}) {
		this._dispatchEvent("preunlock", this.rootDOMElement, { emit: e }), h(this.unlockedClass, this.dom.controlled), d(this.lockedClass, this.dom.controlled), this.dom.controller?.removeAttribute("disabled"), this._dispatchEvent("unlock", this.rootDOMElement, { emit: e }), this._dispatchEvent("postunlock", this.rootDOMElement, { emit: e });
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
}, he = class extends W {
	_scope = "Graupl";
	_rootDOMElement = "item";
	_name = "BreadcrumbItem";
	_storageKey = "breadcrumbItems";
	_shouldStore = !1;
	_toggle = !1;
	constructor({ breadcrumbItemElement: e, breadcrumbLinkElement: t = null, parentBreadcrumb: s, isToggle: i = !1, prefix: r = "graupl-", key: n = null, initializeClass: a = "initializing" }) {
		super({
			bootstrap: !1,
			initialize: !1,
			prefix: r,
			key: n,
			initializeClass: a
		}), this._protectedDOMElements.push("link"), this._dom.item = e, this._dom.link = t, this._elements.parent = s, this._toggle = i, this._bootstrap();
	}
	get currentEvent() {
		return this.elements.parent ? this.elements.parent.currentEvent : super.currentEvent;
	}
	set currentEvent(e) {
		this.elements.parent ? this.elements.parent.currentEvent = e : super.currentEvent = e;
	}
	get shouldFocus() {
		return this.elements.parent ? this.elements.parent.shouldFocus : super.shouldFocus;
	}
	get isToggle() {
		return this._toggle;
	}
	focus() {
		this.focusState = "self", this._cancelAnimationFrame("blur"), this.shouldFocus && this.dom.link && this._requestAnimationFrame(() => {
			this.dom.link.focus();
		}, "focus");
	}
	blur() {
		this.focusState = "none", this._cancelAnimationFrame("focus"), this.shouldFocus && this.dom.link && this._requestAnimationFrame(() => {
			this.dom.link.blur();
		}, "blur");
	}
}, ce = class extends de {
	_scope = "Graupl";
	_rootDOMElement = "breadcrumb";
	_currentChild = 0;
	_storageKey = "breadcrumbs";
	_name = "Breadcrumb";
	constructor({ breadcrumbElement: e, controllerElement: t = null, breadcrumbItemsSelector: s = ".breadcrumb-item", breadcrumbLinksSelector: i = ".breadcrumb-link", lockClass: r = "locked", unlockClass: n = "unlocked", expandClass: a = "show", collapseClass: l = "hide", transitionClass: _ = "transitioning", transitionDuration: m = 250, expandDuration: b = -1, collapseDuration: g = -1, expandOnFocus: E = !1, collapseOnBlur: w = !1, breakpoint: v = "856px", expandInsideBreakpoint: y = !1, expandOutsideBreakpoint: f = !0, collapseInsideBreakpoint: k = !0, collapseOutsideBreakpoint: B = !1, lockInsideBreakpoint: T = !1, lockOutsideBreakpoint: $ = !0, unlockInsideBreakpoint: L = !0, unlockOutsideBreakpoint: M = !1, locked: z = !1, mediaQuery: A = "", prefix: F = "graupl-", key: S = null, initializeClass: U = "initializing", lockedClass: O, unlockedClass: x, openClass: C, closeClass: I, openDuration: Q, closeDuration: q, openOnFocus: P, closeOnBlur: K, minWidth: V, openInsideBreakpoint: H, openOutsideBreakpoint: N, closeInsideBreakpoint: R, closeOutsideBreakpoint: Z, autoOpen: j, initialize: ee = !1 }) {
		O !== void 0 && (console.warn("Graupl Breadcrumb option \"lockedClass\" is deprecated and will be removed. Use lockClass instead."), r = O), x !== void 0 && (console.warn("Graupl Breadcrumb option \"unlockedClass\" is deprecated and will be removed. Use unlockClass instead."), n = x), C !== void 0 && (console.warn("Graupl Breadcrumb option \"openClass\" is deprecated and will be removed. Use expandClass instead."), a = C), I !== void 0 && (console.warn("Graupl Breadcrumb option \"closeClass\" is deprecated and will be removed. Use collapseClass instead."), l = I), Q !== void 0 && (console.warn("Graupl Breadcrumb option \"openDuration\" is deprecated and will be removed. Use expandDuration instead."), b = Q), q !== void 0 && (console.warn("Graupl Breadcrumb option \"closeDuration\" is deprecated and will be removed. Use collapseDuration instead."), g = q), P !== void 0 && (console.warn("Graupl Breadcrumb option \"openOnFocus\" is deprecated and will be removed. Use expandOnFocus instead."), E = P), K !== void 0 && (console.warn("Graupl Breadcrumb option \"closeOnBlur\" is deprecated and will be removed. Use collapseOnBlur instead."), w = K), V !== void 0 && (console.warn("Graupl Breadcrumb option \"minWidth\" is deprecated and will be removed. Use breakpoint instead."), v = V), H !== void 0 && (console.warn("Graupl Breadcrumb option \"openInsideBreakpoint\" is deprecated and will be removed. Use expandInsideBreakpoint instead."), y = H), N !== void 0 && (console.warn("Graupl Breadcrumb option \"openOutsideBreakpoint\" is deprecated and will be removed. Use expandOutsideBreakpoint instead."), f = N), R !== void 0 && (console.warn("Graupl Breadcrumb option \"closeInsideBreakpoint\" is deprecated and will be removed. Use collapseInsideBreakpoint instead."), k = R), Z !== void 0 && (console.warn("Graupl Breadcrumb option \"closeOutsideBreakpoint\" is deprecated and will be removed. Use collapseOutsideBreakpoint instead."), B = Z), j !== void 0 && (console.warn("Graupl Breadcrumb option \"autoOpen\" is deprecated and will be removed. Use expandOutsideBreakpoint and collapseInsideBreakpoint instead."), f = j, k = j), super({
			controllerElement: t,
			controlledElement: e,
			bootstrap: !1,
			initialize: !1,
			expandClass: a,
			collapseClass: l,
			transitionClass: _,
			transitionDuration: m,
			expandDuration: b,
			collapseDuration: g,
			expandOnFocus: E,
			collapseOnBlur: w,
			expandInsideBreakpoint: y,
			expandOutsideBreakpoint: f,
			collapseInsideBreakpoint: k,
			collapseOutsideBreakpoint: B,
			lockInsideBreakpoint: T,
			lockOutsideBreakpoint: $,
			unlockInsideBreakpoint: L,
			unlockOutsideBreakpoint: M,
			locked: z,
			breakpoint: v,
			mediaQuery: A,
			lockClass: r,
			unlockClass: n,
			prefix: F,
			key: S,
			initializeClass: U
		}), this._dom.breadcrumb = e, this._dom.breadcrumbItems = [], this._dom.breadcrumbLinks = [], this._selectors.breadcrumbItems = s, this._selectors.breadcrumbLinks = i, this._elements.breadcrumbItems = [], this._elements.breadcrumbToggle = null, this._bootstrap(), ee && this.initialize();
	}
	_registerEvents() {
		this._addInternalEventListener(`${this.eventPrefix}Initialize`, (e) => {
			if (e.detail.component !== this) return;
			const t = window.matchMedia(this.mediaQuery).matches;
			this._expanded.value = !this.dom.controller || this.dom.controller.getAttribute("aria-expanded") === "true" || this.expandOutsideBreakpoint && !t || this.expandInsideBreakpoint && t, this._locked.value = this.isLocked || this.lockInsideBreakpoint && t || this.lockOutsideBreakpoint && !t;
		}), super._registerEvents(), this._addInternalEventListener(this.getEventName("preexpand"), () => {
			this.dom.controller && this.dom.controller.setAttribute("aria-expanded", "true");
		}), this._addInternalEventListener(this.getEventName("precollapse"), () => {
			this.dom.controller && this.dom.controller.setAttribute("aria-expanded", "false");
		});
	}
	get openClass() {
		return console.warn("Graupl Breadcrumb.openClass is deprecated and will be removed. Use expandClass instead."), this.expandClass;
	}
	set openClass(e) {
		console.warn("Graupl Breadcrumb.openClass is deprecated and will be removed. Use expandClass instead."), this.expandClass = e;
	}
	get closeClass() {
		return console.warn("Graupl Breadcrumb.closeClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass;
	}
	set closeClass(e) {
		console.warn("Graupl Breadcrumb.closeClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass = e;
	}
	get openDuration() {
		return console.warn("Graupl Breadcrumb.openDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration;
	}
	set openDuration(e) {
		console.warn("Graupl Breadcrumb.openDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration = e;
	}
	get closeDuration() {
		return console.warn("Graupl Breadcrumb.closeDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration;
	}
	set closeDuration(e) {
		console.warn("Graupl Breadcrumb.closeDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration = e;
	}
	get openOnFocus() {
		return console.warn("Graupl Breadcrumb.openOnFocus is deprecated and will be removed. Use expandOnFocus instead."), this.expandOnFocus;
	}
	set openOnFocus(e) {
		console.warn("Graupl Breadcrumb.openOnFocus is deprecated and will be removed. Use expandOnFocus instead."), this.expandOnFocus = e;
	}
	get closeOnBlur() {
		return console.warn("Graupl Breadcrumb.closeOnBlur is deprecated and will be removed. Use collapseOnBlur instead."), this.collapseOnBlur;
	}
	set closeOnBlur(e) {
		console.warn("Graupl Breadcrumb.closeOnBlur is deprecated and will be removed. Use collapseOnBlur instead."), this.collapseOnBlur = e;
	}
	get isOpen() {
		return console.warn("Graupl Breadcrumb.isOpen is deprecated and will be removed. Use isExpanded instead."), this.isExpanded;
	}
	get hasOpened() {
		return console.warn("Graupl Breadcrumb.hasOpened is deprecated and will be removed. Use shouldBeExpanded instead."), this.shouldBeExpanded;
	}
	get openInsideBreakpoint() {
		return console.warn("Graupl Breadcrumb.openInsideBreakpoint is deprecated and will be removed. Use expandInsideBreakpoint instead."), this.expandInsideBreakpoint;
	}
	set openInsideBreakpoint(e) {
		console.warn("Graupl Breadcrumb.openInsideBreakpoint is deprecated and will be removed. Use expandInsideBreakpoint instead."), this.expandInsideBreakpoint = e;
	}
	get openOutsideBreakpoint() {
		return console.warn("Graupl Breadcrumb.openOutsideBreakpoint is deprecated and will be removed. Use expandOutsideBreakpoint instead."), this.expandOutsideBreakpoint;
	}
	set openOutsideBreakpoint(e) {
		console.warn("Graupl Breadcrumb.openOutsideBreakpoint is deprecated and will be removed. Use expandOutsideBreakpoint instead."), this.expandOutsideBreakpoint = e;
	}
	get closeInsideBreakpoint() {
		return console.warn("Graupl Breadcrumb.closeInsideBreakpoint is deprecated and will be removed. Use collapseInsideBreakpoint instead."), this.collapseInsideBreakpoint;
	}
	set closeInsideBreakpoint(e) {
		console.warn("Graupl Breadcrumb.closeInsideBreakpoint is deprecated and will be removed. Use collapseInsideBreakpoint instead."), this.collapseInsideBreakpoint = e;
	}
	get closeOutsideBreakpoint() {
		return console.warn("Graupl Breadcrumb.closeOutsideBreakpoint is deprecated and will be removed. Use collapseOutsideBreakpoint instead."), this.collapseOutsideBreakpoint;
	}
	set closeOutsideBreakpoint(e) {
		console.warn("Graupl Breadcrumb.closeOutsideBreakpoint is deprecated and will be removed. Use collapseOutsideBreakpoint instead."), this.collapseOutsideBreakpoint = e;
	}
	get currentChild() {
		return this._currentChild;
	}
	set currentChild(e) {
		o("number", { currentChild: e }), this._currentChild !== e && e >= 0 && e < this.elements.breadcrumbItems.length && (this._currentChild = e);
	}
	get currentBreadcrumbItem() {
		return this.elements.breadcrumbItems[this.currentChild];
	}
	_setIds() {
		this.dom.breadcrumb.id = this.dom.breadcrumb.id || `breadcrumb-${this.key}`, this.dom.controller && (this.dom.controller.id = this.dom.controller.id || `breadcrumb-toggle-${this.key}`), this._id = this.dom.breadcrumb.id;
	}
	_setAriaAttributes() {
		this.dom.controller && (this.dom.controller.getAttribute("aria-expanded") !== "true" && this.dom.controller.setAttribute("aria-expanded", "false"), this.dom.controller.setAttribute("aria-controls", this.dom.breadcrumb.id), re("button", { toggle: this.dom.controller }, { shouldThrow: !1 }).status || this.dom.controller.setAttribute("role", "button"));
	}
	_setCustomProps() {
		this.dom.breadcrumb.style.setProperty(`--${this.prefix}breadcrumb-transition-duration`, `${this.transitionDuration}ms`), this.dom.breadcrumb.style.setProperty(`--${this.prefix}breadcrumb-open-transition-duration`, `${this.expandDuration}ms`), this.dom.breadcrumb.style.setProperty(`--${this.prefix}breadcrumb-close-transition-duration`, `${this.collapseDuration}ms`);
	}
	_setDOMElements() {
		this._setDOMElementType("breadcrumbItems", { context: this.dom.breadcrumb }), this._setDOMElementType("breadcrumbLinks", { context: this.dom.breadcrumb });
	}
	_createChildElements() {
		this.dom.breadcrumbItems.forEach((e) => {
			const t = this.dom.controller !== null && e.contains(this.dom.controller), i = new he({
				breadcrumbItemElement: e,
				breadcrumbLinkElement: t ? this.dom.controller : e.querySelector(this.selectors.breadcrumbLinks),
				parentBreadcrumb: this,
				isToggle: t
			});
			this.elements.breadcrumbItems.push(i), t && (this._elements.breadcrumbToggle = i), i.initialize();
		});
	}
	_handleFocus() {
		this.elements.breadcrumbItems.forEach((e, t) => {
			e.dom.link && this._addEventListener("focus", e.dom.link, () => {
				this.focusState = "self", this.currentChild = t;
			});
		}), this._addEventListener("focusout", this.dom.breadcrumb, (e) => {
			!this.collapseOnBlur || this.currentEvent !== "keyboard" || e.relatedTarget === null || this.dom.breadcrumb.contains(e.relatedTarget) || this.dom.controller === e.relatedTarget || this.collapse();
		});
	}
	_handleClick() {
		this._addEventListener("click", document, (e) => {
			this.focusState !== "self" || !this.collapseOnBlur || (this.currentEvent = "mouse", !this.dom.breadcrumb.contains(e.target) && this.dom.controller !== e.target && this.collapse());
		}), this.dom.controller && this._addEventListener("click", this.dom.controller, (e) => {
			this.currentEvent = "mouse", e.button === 0 && (p(e), this.toggle());
		});
	}
	_handleKeydown() {
		this._addEventListener("keydown", this.dom.breadcrumb, (e) => {
			this.currentEvent = "keyboard", D(e) === "Escape" && p(e);
		}), this.dom.controller && this._addEventListener("keydown", this.dom.controller, (e) => {
			switch (this.currentEvent = "keyboard", D(e)) {
				case "Space":
				case "Enter": p(e);
			}
		});
	}
	_handleKeyup() {
		this._addEventListener("keyup", this.dom.breadcrumb, (e) => {
			this.currentEvent = "keyboard", D(e) === "Escape" && (p(e), this.collapse(), this.currentChild > this.elements.breadcrumbItems.indexOf(this.elements.breadcrumbToggle) && this._requestAnimationFrame(() => {
				this.focusToggle();
			}, "handleKeyup"));
		}), this.dom.controller && this._addEventListener("keyup", this.dom.controller, (e) => {
			switch (this.currentEvent = "keyboard", D(e)) {
				case "Space":
				case "Enter":
					p(e), this.toggle(), this.isExpanded ? this._requestAnimationFrame(() => {
						this.focusNextChild();
					}, "handleKeyup") : this.focusFirstChild();
					break;
				case "Tab": this.expandOnFocus && (p(e), this.expand(), this._requestAnimationFrame(() => {
					this.focusNextChild();
				}, "handleKeyup"));
			}
		});
	}
	focusCurrentChild() {
		this.focusState = "self", this.currentChild !== -1 && this.currentBreadcrumbItem.focus();
	}
	focusChild(e) {
		this.blurCurrentChild(), this.currentChild = e, this.focusCurrentChild();
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
	open(...e) {
		return console.warn("Graupl Breadcrumb.open() is deprecated and will be removed. Use expand() instead."), this.expand(...e);
	}
	close(...e) {
		return console.warn("Graupl Breadcrumb.close() is deprecated and will be removed. Use collapse() instead."), this.collapse(...e);
	}
	dispose() {
		this.elements.breadcrumbItems.forEach((e) => e.dispose()), super.dispose();
	}
};
module.exports = ce;

//# sourceMappingURL=breadcrumb.cjs.map