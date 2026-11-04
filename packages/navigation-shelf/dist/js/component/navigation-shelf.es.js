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
function Z(t, { shouldThrow: e = !0 } = {}) {
	const s = {
		status: !0,
		errors: []
	};
	try {
		if (typeof t != "object") throw new TypeError(`Values given to isQuerySelector() must be inside of an object. "${typeof t}" given.`);
		for (const i in t) try {
			try {
				if (typeof t[i] != "string") throw new Error();
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
function c(t, { shouldThrow: e = !0 } = {}) {
	const s = {
		status: !0,
		errors: []
	};
	try {
		if (typeof t != "object" || Array.isArray(t)) throw new TypeError(`Values given to isValidClassList() must be inside of an object. "${typeof t}" given.`);
		for (const i in t) try {
			const r = t[i];
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
	if (e && !s.status) throw s.errors[0];
	return s;
}
function J(t, { shouldThrow: e = !0 } = {}) {
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
		if (!Object.prototype.hasOwnProperty.call(e.events, t)) throw new TypeError(`Event type "${t}" is not valid for ${e.constructor.name}. Valid event types are: "${Object.keys(e.events).join("\", ")}".`);
	} catch (r) {
		i.status = !1, i.errors.push(r);
	}
	if (s && !i.status) throw i.errors[0];
	return i;
}
function Y(t, { shouldThrow: e = !0 } = {}) {
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
function tt(t, { shouldThrow: e = !0 } = {}) {
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
function p(t) {
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
function u(t) {
	t.preventDefault(), t.stopPropagation();
}
function d(t, e) {
	if (!(t === "" || t.length === 0)) if (typeof t == "string") e.classList.add(t);
	else {
		const s = t.filter((i) => i !== "");
		s.length > 0 && e.classList.add(...s);
	}
}
function h(t, e) {
	if (!(t === "" || t.length === 0)) if (typeof t == "string") e.classList.remove(t);
	else {
		const s = t.filter((i) => i !== "");
		s.length > 0 && e.classList.remove(...s);
	}
}
function et(t = document, e = null) {
	const s = Array.from(t.querySelectorAll("a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),[tabindex]")).filter((i) => {
		let r = !0;
		return i.getAttribute("tabindex") === "-1" && (r = !1), r;
	});
	return e !== null ? s.filter(e) : s;
}
function st(t = document, e = null) {
	return et(t, e)[0] || !1;
}
function it(t) {
	return n("string", { value: t }), `${t.charAt(0).toLowerCase()}${t.slice(1)}`;
}
function P(t) {
	return n("string", { value: t }), `${t.charAt(0).toUpperCase()}${t.slice(1)}`;
}
var H = class G {
	_scope;
	_type = "_default";
	_storage = {};
	_crush = !1;
	constructor({ scope: e, type: s = null, crush: i = !1, initialize: r = !0 } = {}) {
		this._scope = e, this._type = s || "_default", this._crush = i, r && this.initialize();
	}
	initialize() {
		try {
			!this._crush && typeof window[this.scope] < "u" && (f(G, { storage: window[this.scope] }, { shouldThrow: !1 }).status || typeof window[this.scope].storage < "u" && typeof window[this.scope].scope < "u" && typeof window[this.scope].type < "u") && (this._storage = window[this.scope].storage);
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
		const i = n("string", { type: e }, { shouldThrow: !1 });
		if (!i.status) throw i.errors[0];
		if (!this.storage[e]) throw new Error(`StorageManager (${this.scope}): Type "${e}" is not initialized.`);
		if (s !== null) {
			const r = n("string", { key: s }, { shouldThrow: !1 });
			if (!r.status) throw r.errors[0];
			return this.storage[e][s];
		}
		return this.storage[e];
	}
	set({ type: e = this.type, key: s = null, data: i = {} } = {}) {
		const r = n("string", { type: e }, { shouldThrow: !1 }), o = n("object", { data: i }, { shouldThrow: !1 });
		if (!r.status) throw r.errors[0];
		if (!o.status) throw o.errors[0];
		if (s !== null) {
			const l = n("string", { key: s }, { shouldThrow: !1 });
			if (!l.status) throw l.errors[0];
			this._storage[e] || (this._storage[e] = {}), this._storage[e][s] = i;
		} else this._storage[e] = i;
	}
	clear({ type: e = this.type, key: s = null } = {}) {
		const i = n("string", { type: e }, { shouldThrow: !1 });
		if (!i.status) throw i.errors[0];
		if (s !== null) {
			const r = n("string", { key: s }, { shouldThrow: !1 });
			if (!r.status) throw r.errors[0];
			delete this.storage[e][s];
		} else delete this.storage[e];
	}
	dispose() {
		typeof window < "u" && window[this.scope] === this && delete window[this.scope], delete this._storage;
	}
}, rt = class {
	#t = new EventTarget();
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
	constructor({ prefix: t = "ae-", key: e = null, initializeClass: s = "initializing", emit: i = !0, bootstrap: r = !0, initialize: o = !0 } = {}) {
		this._classes.initialize = s || "", this._prefix = t || "", this._key = e || "", this._shouldEmit = i, r && this._bootstrap(), o && this.initialize();
	}
	_bootstrap() {
		this._bootstrapped = !1;
		try {
			this._registerEvents(), this._bootstrapped = !0;
		} catch (t) {
			this._bootstrapped = !1, this._valid = !1, console.error(t);
		}
	}
	_registerEvents() {
		this._registerEvent("initialize"), this._registerEvent("preinitialize"), this._registerEvent("postinitialize"), this._registerEvent("validate"), this._registerEvent("prevalidate"), this._registerEvent("postvalidate");
	}
	initialize() {
		try {
			if (!this.isBootstrapped) throw new Error("Cannot initialize a component before it has been bootstrapped.");
			if (!this._validate()) throw new Error(`${this.scope} ${this.name}: Cannot initialize component. The following errors have been found:
 - ${this.errors.map((t) => t.message).join(`
 - `)}`);
			d(this.initializeClass, this.rootDOMElement), this._dispatchEvent("preinitialize", this.rootDOMElement), this._generateKey(), this._setDOMElements(), this._setIds(), this._setAriaAttributes(), this._setCustomProps(), this._createChildElements(), this._handleFocus(), this._handleHover(), this._handleClick(), this._handleKeydown(), this._handleKeyup(), this._dispatchEvent("initialize", this.rootDOMElement), this._store(), h(this.initializeClass, this.rootDOMElement), this._initialized = !0, this._dispatchEvent("postinitialize", this.rootDOMElement);
		} catch (t) {
			this._valid = !1, console.error(t);
		}
	}
	init() {
		this.initialize();
	}
	get dom() {
		return this._dom;
	}
	get rootDOMElement() {
		const t = this._dom[this._rootDOMElement];
		return t instanceof HTMLElement ? t : document.documentElement;
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
	set initializeClass(t) {
		c({ initializeClass: t }), this._classes.initialize !== t && (this._classes.initialize = t);
	}
	get focusState() {
		return this._focusState;
	}
	set focusState(t) {
		J({ focusState: t }), this._focusState !== t && (this._focusState = t);
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
		return this._eventPrefix !== "" ? this._eventPrefix : `${it(this.scope)}${P(this.name)}`;
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
	set shouldEmit(t) {
		n("boolean", { shouldEmit: t }), this._shouldEmit = t;
	}
	get errors() {
		return this._errors;
	}
	_validate() {
		this._errors = [], this._valid = !0, this._dispatchEvent("prevalidate", this.rootDOMElement);
		const t = Y(this, { shouldThrow: !1 });
		if (t.status || (this._errors = [...this._errors, ...t.errors], this._valid = !1), Object.keys(this._dom).length > 0) {
			const o = {};
			for (const a of Object.keys(this._dom)) Array.isArray(this._dom[a]) ? this._dom[a].forEach((_, m) => {
				o[`${a}Element[${m}]`] = _;
			}) : this._dom[a] !== null && (o[`${a}Element`] = this._dom[a]);
			const l = f(HTMLElement, o, { shouldThrow: !1 });
			l.status || (this._errors = [...this._errors, ...l.errors], this._valid = !1);
		}
		if (Object.keys(this._selectors).length > 0) {
			const o = {};
			for (const a of Object.keys(this._selectors)) this._selectors[a] !== "" && (o[`${a}Selector`] = this._selectors[a]);
			const l = Z(o, { shouldThrow: !1 });
			l.status || (this._errors = [...this._errors, ...l.errors], this._valid = !1);
		}
		if (Object.keys(this._classes).length > 0) {
			const o = {};
			for (const a of Object.keys(this._classes)) this._classes[a] !== "" && (o[`${a}Class`] = this._classes[a]);
			const l = c(o, { shouldThrow: !1 });
			l.status || (this._errors = [...this._errors, ...l.errors], this._valid = !1);
		}
		if (Object.keys(this._durations).length > 0) {
			const o = {};
			for (const a of Object.keys(this._durations)) o[`${a}Duration`] = this._durations[a];
			const l = n("number", o, { shouldThrow: !1 });
			l.status || (this._errors = [...this._errors, ...l.errors], this._valid = !1);
		}
		if (Object.keys(this.delays).length > 0) {
			const o = {};
			for (const a of Object.keys(this.delays)) o[`${a}Delay`] = this.delays[a];
			const l = n("number", o, { shouldThrow: !1 });
			l.status || (this._errors = [...this._errors, ...l.errors], this._valid = !1);
		}
		const e = {
			_name: this._name,
			_scope: this._scope,
			_eventPrefix: this._eventPrefix,
			_storageKey: this._storageKey,
			key: this._key,
			prefix: this._prefix
		};
		this._protectedDOMElements.forEach((o) => {
			e[`_protectedDOMElementType[${o}]`] = o;
		});
		const s = n("string", e, { shouldThrow: !1 });
		s.status || (this._errors = [...this._errors, ...s.errors], this._valid = !1);
		const r = n("boolean", {
			_shouldStore: this._shouldStore,
			emit: this._shouldEmit
		}, { shouldThrow: !1 });
		return r.status || (this._errors = [...this._errors, ...r.errors], this._valid = !1), this._dispatchEvent("validate", this.rootDOMElement), this._dispatchEvent("postvalidate", this.rootDOMElement), this._valid;
	}
	_generateKey(t = !1) {
		(this._key === "" || t) && (this._key = Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 10));
	}
	_setIds() {}
	_setAriaAttributes() {}
	_setCustomProps() {}
	_setDOMElementType(t, { context: e, overwrite: s = !0, strict: i = !1 } = {}) {
		if (typeof this.selectors[t] != "string") throw new Error(`${this.scope} ${this.name}: "${t}" is not a valid element type.`);
		if (this._rootDOMElement === t || this._protectedDOMElements.includes(t)) throw new Error(`${this.scope} ${this.name}: "${t}" element cannot be set through _setDOMElementType because it is a protected element.`);
		f(HTMLElement, { context: e });
		const r = Array.from(e.querySelectorAll(this.selectors[t])).filter((o) => i ? o.parentElement === e : !0);
		Array.isArray(this._dom[t]) ? s ? this._dom[t] = r : this._dom[t] = [...this._dom[t], ...r] : this._dom[t] = r[0] || null;
	}
	_resetDOMElementType(t) {
		if (typeof this.selectors[t] != "string") throw new Error(`${this.scope} ${this.name}: "${t}" is not a valid element type.`);
		if (this._rootDOMElement === t || this._protectedDOMElements.includes(t)) throw new Error(`${this.scope} ${this.name}: "${t}" element cannot be reset through _resetDOMElementType because it is a protected element.`);
		Array.isArray(this._dom[t]) ? this._dom[t] = [] : this._dom[t] = null;
	}
	_setDOMElements() {}
	_createChildElements() {}
	_handleFocus() {}
	_handleClick() {}
	_handleHover() {}
	_handleKeydown() {}
	_handleKeyup() {}
	_store() {
		this._shouldStore && (f(H, { storage: window[`${this.scope}Storage`] }, { shouldThrow: !1 }).status || new H({ scope: `${this.scope}Storage` }), window[`${this.scope}Storage`].set({
			key: this.id !== "" ? this.id : this.key,
			type: this._storageKey,
			data: this
		}));
	}
	_unstore() {
		this._shouldStore && f(H, { storage: window[`${this.scope}Storage`] }, { shouldThrow: !1 }).status && window[`${this.scope}Storage`].clear({
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
	_requestAnimationFrame(t, e = "_default") {
		this._cancelAnimationFrame(e);
		let s = !1;
		const i = requestAnimationFrame((r) => {
			s = !0, delete this._frames[e], t(r);
		});
		return s || (this._frames[e] = i), i;
	}
	_cancelAnimationFrame(t = "_default") {
		Object.hasOwn(this._frames, t) && (cancelAnimationFrame(this._frames[t]), delete this._frames[t]);
	}
	_cancelAnimationFrames() {
		for (const t of Object.keys(this._frames)) this._cancelAnimationFrame(t);
	}
	_registerEvent(t, { bubbles: e = !0, detail: s = {} } = {}) {
		n("string", { name: t }), n("boolean", { bubbles: e }), n("object", { detail: s });
		const i = `${this.eventPrefix}${P(t)}`;
		this._events[t] = new CustomEvent(i, {
			bubbles: e,
			detail: {
				component: this,
				...s
			}
		});
	}
	getEventName(t) {
		return Object.keys(this._events).includes(t) ? this._events[t].type : null;
	}
	_dispatchEvent(t, e = this.rootDOMElement, { emit: s = !0 } = {}) {
		X(t, this), n("boolean", { emit: s }), s && this.shouldEmit && f(HTMLElement, { element: e });
		const i = this.events[t];
		this.#t.dispatchEvent(i), s && this.shouldEmit && e.dispatchEvent(i);
	}
	_addInternalEventListener(t, e, s = {}) {
		this._addEventListener(t, this.#t, e, s);
	}
	_removeInternalEventListener(t, e, s = {}) {
		this._removeEventListener(t, this.#t, e, s);
	}
	_addEventListener(t, e, s, i = {}) {
		const r = typeof i == "boolean" ? i : {
			...i,
			capture: !!i?.capture
		};
		e.addEventListener(t, s, i), this._listeners.push({
			type: t,
			element: e,
			listener: s,
			options: r
		});
	}
	_removeEventListener(t, e, s, i = {}) {
		e.removeEventListener(t, s, i);
		const r = typeof i == "boolean" ? i : !!i?.capture;
		this._listeners = this._listeners.filter((o) => {
			const l = o.options, a = typeof l == "boolean" ? l : !!l?.capture;
			return !(o.type === t && o.element === e && o.listener === s && a === r);
		});
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
		this._clearIntervals(), this._clearTimeouts(), this._cancelAnimationFrames(), this._removeEventListeners(), this._bootstrapped = !1, this._unstore(), delete this;
	}
}, ot = class extends rt {
	_name = "ResponsiveComponent";
	_breakpoint = "";
	_mediaQueryString = "";
	_mediaQueryList = null;
	constructor({ breakpoint: t = "", mediaQuery: e = "", prefix: s = "ae-", key: i = null, initializeClass: r = "initializing", emit: o = !0, bootstrap: l = !0, initialize: a = !0 } = {}) {
		super({
			prefix: s,
			key: i,
			initializeClass: r,
			emit: o,
			bootstrap: !1,
			initialize: !1
		}), this._breakpoint = t || "", this._mediaQueryString = e || "", l && this._bootstrap(), a && this.initialize();
	}
	_registerEvents() {
		super._registerEvents(), this._addInternalEventListener(this.getEventName("validate"), (t) => {
			if (t.detail.component !== this) return;
			const s = n("string", {
				mediaQuery: this._mediaQueryString,
				breakpoint: this._breakpoint
			}, { shouldThrow: !1 });
			s.status || (this._errors = [...this._errors, ...s.errors], this._valid = !1);
		}), this._addInternalEventListener(this.getEventName("initialize"), (t) => {
			t.detail.component === this && this._handleMediaMatch();
		});
	}
	get breakpoint() {
		return this._breakpoint;
	}
	set breakpoint(t) {
		n("string", { breakpoint: t }), this._breakpoint !== t && (this._breakpoint = t, this.isInitialized && this._handleMediaMatch());
	}
	get mediaQuery() {
		return this._mediaQueryString !== "" ? this._mediaQueryString : this._breakpoint === "" ? "" : `(width <= ${this._breakpoint})`;
	}
	set mediaQuery(t) {
		n("string", { mediaQuery: t }), this._mediaQueryString !== t && (this._mediaQueryString = t, this.isInitialized && this._handleMediaMatch());
	}
	_mediaQueryListEventCallback(t) {
		t.matches;
	}
	_handleMediaMatch() {
		this._cancelAnimationFrame("mediaMatch"), this._mediaQueryList && (this._removeEventListeners({
			type: "change",
			element: this._mediaQueryList
		}), this._mediaQueryList = null), this.mediaQuery !== "" && (this._mediaQueryList = window.matchMedia(this.mediaQuery), this._addEventListener("change", this._mediaQueryList, (t) => this._mediaQueryListEventCallback(t)), this._requestAnimationFrame(() => {
			this._mediaQueryListEventCallback(this._mediaQueryList);
		}, "mediaMatch"));
	}
}, q = class {
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
}, nt = class extends ot {
	_name = "CollapsibleComponent";
	_expanded = new q(!1);
	_locked = new q(!1);
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
	constructor({ controlledElement: t, controllerElement: e = null, triggerElement: s = null, lockClass: i = "locked", unlockClass: r = "unlocked", expandClass: o = "show", collapseClass: l = "hide", transitionClass: a = "transitioning", transitionDelay: _ = 250, transitionDuration: m = 150, expandDuration: x = -1, collapseDuration: O = -1, expandInsideBreakpoint: k = !1, expandOutsideBreakpoint: v = !1, collapseInsideBreakpoint: I = !1, collapseOutsideBreakpoint: L = !1, lockInsideBreakpoint: g = !1, lockOutsideBreakpoint: E = !1, unlockInsideBreakpoint: D = !1, unlockOutsideBreakpoint: S = !1, expandOnFocus: B = !1, collapseOnBlur: z = !1, expanded: T = !1, locked: $ = !1, breakpoint: y = "", mediaQuery: A = "", prefix: M = "ae-", key: j = null, initializeClass: F = "initializing", emit: b = !0, bootstrap: w = !0, initialize: C = !0 } = {}) {
		super({
			breakpoint: y,
			mediaQuery: A,
			prefix: M,
			key: j,
			initializeClass: F,
			emit: b,
			bootstrap: !1,
			initialize: !1
		}), this._dom.controller = e, this._dom.trigger = s ?? e, this._dom.controlled = t, this._protectedDOMElements.push("controller", "trigger", "controlled"), this._classes.locked = i || "", this._classes.unlocked = r || "", this._classes.expand = o || "", this._classes.collapse = l || "", this._classes.transition = a || "", this._delays.transition = _, this._durations.transition = m, this._durations.expand = x, this._durations.collapse = O, this._expandInsideBreakpoint = k, this._expandOutsideBreakpoint = v, this._collapseInsideBreakpoint = I, this._collapseOutsideBreakpoint = L, this._lockInsideBreakpoint = g, this._lockOutsideBreakpoint = E, this._unlockInsideBreakpoint = D, this._unlockOutsideBreakpoint = S, this._expandOnFocus = B, this._collapseOnBlur = z, this._expanded.value = T, this._expanded.commit(), this._locked.value = $, this._locked.commit(), w && this._bootstrap(), C && this.initialize();
	}
	_registerEvents() {
		super._registerEvents(), this._registerEvent("preexpand"), this._registerEvent("expand"), this._registerEvent("postexpand"), this._registerEvent("precollapse"), this._registerEvent("collapse"), this._registerEvent("postcollapse"), this._registerEvent("prelock"), this._registerEvent("lock"), this._registerEvent("postlock"), this._registerEvent("preunlock"), this._registerEvent("unlock"), this._registerEvent("postunlock"), this._addInternalEventListener(this.getEventName("validate"), (t) => {
			if (t.detail.component !== this) return;
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
		}), this._addInternalEventListener(this.getEventName("initialize"), (t) => {
			t.detail.component === this && (this.isExpanded ? this.expand() : this.collapse(), this.isLocked ? this.lock() : this.unlock());
		});
	}
	get lockedClass() {
		return this._classes.locked;
	}
	set lockedClass(t) {
		c({ lockedClass: t }), this._classes.locked !== t && (this._classes.locked = t);
	}
	get unlockedClass() {
		return this._classes.unlocked;
	}
	set unlockedClass(t) {
		c({ unlockedClass: t }), this._classes.unlocked !== t && (this._classes.unlocked = t);
	}
	get expandClass() {
		return this._classes.expand;
	}
	set expandClass(t) {
		c({ expandClass: t }), this._classes.expand !== t && (this._classes.expand = t);
	}
	get collapseClass() {
		return this._classes.collapse;
	}
	set collapseClass(t) {
		c({ collapseClass: t }), this._classes.collapse !== t && (this._classes.collapse = t);
	}
	get transitionClass() {
		return this._classes.transition;
	}
	set transitionClass(t) {
		c({ transitionClass: t }), this._classes.transition !== t && (this._classes.transition = t);
	}
	get transitionDuration() {
		return this._durations.transition;
	}
	set transitionDuration(t) {
		n("number", { transitionDuration: t }), this._durations.transition !== t && (this._durations.transition = t, this._setCustomProps());
	}
	get expandDuration() {
		return this._durations.expand === -1 ? this.transitionDuration : this._durations.expand;
	}
	set expandDuration(t) {
		n("number", { expandDuration: t }), this._durations.expand !== t && (this._durations.expand = t, this._setCustomProps());
	}
	get collapseDuration() {
		return this._durations.collapse === -1 ? this.transitionDuration : this._durations.collapse;
	}
	set collapseDuration(t) {
		n("number", { collapseDuration: t }), this._durations.collapse !== t && (this._durations.collapse = t, this._setCustomProps());
	}
	get expandOnFocus() {
		return this._expandOnFocus;
	}
	set expandOnFocus(t) {
		n("boolean", { expandOnFocus: t }), this._expandOnFocus !== t && (this._expandOnFocus = t);
	}
	get collapseOnBlur() {
		return this._collapseOnBlur;
	}
	set collapseOnBlur(t) {
		n("boolean", { collapseOnBlur: t }), this._collapseOnBlur !== t && (this._collapseOnBlur = t);
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
	set expandInsideBreakpoint(t) {
		n("boolean", { expandInsideBreakpoint: t }), this._expandInsideBreakpoint !== t && (this._expandInsideBreakpoint = t);
	}
	get expandOutsideBreakpoint() {
		return this._expandOutsideBreakpoint;
	}
	set expandOutsideBreakpoint(t) {
		n("boolean", { expandOutsideBreakpoint: t }), this._expandOutsideBreakpoint !== t && (this._expandOutsideBreakpoint = t);
	}
	get collapseInsideBreakpoint() {
		return this._collapseInsideBreakpoint;
	}
	set collapseInsideBreakpoint(t) {
		n("boolean", { collapseInsideBreakpoint: t }), this._collapseInsideBreakpoint !== t && (this._collapseInsideBreakpoint = t);
	}
	get collapseOutsideBreakpoint() {
		return this._collapseOutsideBreakpoint;
	}
	set collapseOutsideBreakpoint(t) {
		n("boolean", { collapseOutsideBreakpoint: t }), this._collapseOutsideBreakpoint !== t && (this._collapseOutsideBreakpoint = t);
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
	get unlockInsideBreakpoint() {
		return this._unlockInsideBreakpoint;
	}
	set unlockInsideBreakpoint(t) {
		n("boolean", { unlockInsideBreakpoint: t }), this._unlockInsideBreakpoint = t;
	}
	get unlockOutsideBreakpoint() {
		return this._unlockOutsideBreakpoint;
	}
	set unlockOutsideBreakpoint(t) {
		n("boolean", { unlockOutsideBreakpoint: t }), this._unlockOutsideBreakpoint = t;
	}
	get isLocked() {
		return this._locked.value;
	}
	get shouldBeLocked() {
		return this._locked.committed;
	}
	_mediaQueryListEventCallback(t) {
		t.matches ? (this.unlockInsideBreakpoint && this.unlock(), this.isExpanded && this.collapseInsideBreakpoint ? (this.isLocked && this.unlock(), this.collapse({ preserveState: !0 })) : !this.isExpanded && this.expandInsideBreakpoint && (this.isLocked && this.unlock(), this.expand()), this.lockInsideBreakpoint && this.lock()) : (this.unlockOutsideBreakpoint && this.unlock(), this.isExpanded && this.collapseOutsideBreakpoint ? (this.isLocked && this.unlock(), this.collapse({ preserveState: !0 })) : !this.isExpanded && this.expandOutsideBreakpoint && (this.isLocked && this.unlock(), this.expand()), this.lockOutsideBreakpoint && this.lock());
	}
	_expand({ emit: t = this.isInitialized && this.shouldEmit, transition: e = this.isInitialized } = {}) {
		this._dispatchEvent("preexpand", this.rootDOMElement, { emit: t }), this._cancelAnimationFrame("expandTransition"), this._cancelAnimationFrame("collapseTransition"), this._clearTimeout("expandTransition"), this._clearTimeout("collapseTransition"), e && this.transitionClass !== "" ? (d(this.transitionClass, this.dom.controlled), this._requestAnimationFrame(() => {
			h(this.collapseClass, this.dom.controlled), this._requestAnimationFrame(() => {
				d(this.expandClass, this.dom.controlled), this._requestAnimationFrame(() => {
					this._setTimeout(() => {
						h(this.transitionClass, this.dom.controlled), this._dispatchEvent("postexpand", this.rootDOMElement, { emit: t });
					}, this.expandDuration, "expandTransition");
				}, "expandTransition"), this._dispatchEvent("expand", this.rootDOMElement, { emit: t });
			}, "expandTransition");
		}, "expandTransition")) : (h(this.transitionClass, this.dom.controlled), d(this.expandClass, this.dom.controlled), h(this.collapseClass, this.dom.controlled), this._dispatchEvent("expand", this.rootDOMElement, { emit: t }), this._dispatchEvent("postexpand", this.rootDOMElement, { emit: t }));
	}
	_collapse({ emit: t = this.isInitialized && this.shouldEmit, transition: e = this.isInitialized } = {}) {
		this._dispatchEvent("precollapse", this.rootDOMElement, { emit: t }), this._cancelAnimationFrame("expandTransition"), this._cancelAnimationFrame("collapseTransition"), this._clearTimeout("expandTransition"), this._clearTimeout("collapseTransition"), e && this.transitionClass !== "" ? (d(this.transitionClass, this.dom.controlled), this._requestAnimationFrame(() => {
			h(this.expandClass, this.dom.controlled), this._requestAnimationFrame(() => {
				d(this.collapseClass, this.dom.controlled), this._requestAnimationFrame(() => {
					this._setTimeout(() => {
						h(this.transitionClass, this.dom.controlled), this._dispatchEvent("postcollapse", this.rootDOMElement, { emit: t });
					}, this.collapseDuration, "collapseTransition");
				}, "collapseTransition"), this._dispatchEvent("collapse", this.rootDOMElement, { emit: t });
			}, "collapseTransition");
		}, "collapseTransition")) : (h(this.transitionClass, this.dom.controlled), d(this.collapseClass, this.dom.controlled), h(this.expandClass, this.dom.controlled), this._dispatchEvent("collapse", this.rootDOMElement, { emit: t }), this._dispatchEvent("postcollapse", this.rootDOMElement, { emit: t }));
	}
	_lock({ emit: t = this.isInitialized && this.shouldEmit } = {}) {
		this._dispatchEvent("prelock", this.rootDOMElement, { emit: t }), d(this.lockedClass, this.dom.controlled), h(this.unlockedClass, this.dom.controlled), this.dom.controller?.setAttribute("disabled", "true"), this._dispatchEvent("lock", this.rootDOMElement, { emit: t }), this._dispatchEvent("postlock", this.rootDOMElement, { emit: t });
	}
	_unlock({ emit: t = this.isInitialized && this.shouldEmit } = {}) {
		this._dispatchEvent("preunlock", this.rootDOMElement, { emit: t }), d(this.unlockedClass, this.dom.controlled), h(this.lockedClass, this.dom.controlled), this.dom.controller?.removeAttribute("disabled"), this._dispatchEvent("unlock", this.rootDOMElement, { emit: t }), this._dispatchEvent("postunlock", this.rootDOMElement, { emit: t });
	}
	expand({ force: t = !this.isInitialized, emit: e = this.isInitialized && this.shouldEmit, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
		this.isExpanded && !t || this.isLocked && !t || (this.focusState = "self", this._expand({
			emit: e,
			transition: s
		}), this._expanded.value = !0, i || this._expanded.commit());
	}
	focus() {
		super.focus(), this.expandOnFocus && this.expand();
	}
	blur() {
		super.blur(), this.collapseOnBlur && this.collapse();
	}
	preview({ force: t = !this.isInitialized, emit: e = this.isInitialized && this.shouldEmit, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
		this.isExpanded && !t || this.isLocked && !t || (this.focusState = "none", this._expand({
			emit: e,
			transition: s
		}), this._expanded.value = !0, i || this._expanded.commit());
	}
	collapse({ force: t = !this.isInitialized, emit: e = this.isInitialized && this.shouldEmit, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
		!this.isExpanded && !t || this.isLocked && !t || (this.focusState = "none", this._collapse({
			emit: e,
			transition: s
		}), this._expanded.value = !1, i || this._expanded.commit());
	}
	toggle({ force: t = !this.isInitialized, emit: e = this.isInitialized && this.shouldEmit, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
		this.isExpanded ? this.collapse({
			force: t,
			emit: e,
			transition: s,
			preserveState: i
		}) : this.expand({
			force: t,
			emit: e,
			transition: s,
			preserveState: i
		});
	}
	lock({ force: t = !this.isInitialized, emit: e = this.isInitialized && this.shouldEmit, preserveState: s = !1 } = {}) {
		this.isLocked && !t || (this._locked.value = !0, this._lock({ emit: e }), s || this._locked.commit());
	}
	unlock({ force: t = !this.isInitialized, emit: e = this.isInitialized && this.shouldEmit, preserveState: s = !1 } = {}) {
		!this.isLocked && !t || (this._locked.value = !1, this._unlock({ emit: e }), s || this._locked.commit());
	}
	toggleLock({ force: t = !this.isInitialized, emit: e = this.isInitialized && this.shouldEmit, preserveState: s = !1 } = {}) {
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
}, at = class extends nt {
	_scope = "Graupl";
	_rootDOMElement = "shelf";
	_hover = !1;
	_softLocked = !1;
	_side = "left";
	_otherSide = "right";
	_mediaQueryListEventCallback = (t) => {
		t.matches ? (this.isExpanded && this.collapse({ preserveLock: this.shouldBeLocked }), this.dom.lockController && this.dom.lockController.setAttribute("disabled", "disabled")) : (this.shouldBeLocked && !this.isExpanded && (this._locked.reset(), this.lock({ force: !0 })), this.dom.lockController && this.dom.lockController.removeAttribute("disabled"));
	};
	_storageKey = "navigation-shelves";
	_name = "NavigationShelf";
	constructor({ shelfElement: t, controllerElement: e, lockControllerElement: s, hoverControllerElement: i, sideControllerElement: r, dependentSelector: o = ".shelf-aware", lockClass: l = "locked", unlockClass: a = "unlocked", hoverClass: _ = "hoverable", noHoverClass: m = "not-hoverable", leftClass: x = "left-side", rightClass: O = "right-side", expandClass: k = "show", collapseClass: v = "hide", transitionClass: I = "transitioning", transitionDuration: L = 250, expandDuration: g = -1, collapseDuration: E = -1, hoverable: D = !1, hoverDelay: S = 250, enterDelay: B = -1, leaveDelay: z = -1, locked: T = !1, side: $ = "left", breakpoint: y = "1023px", mediaQuery: A = "", prefix: M = "graupl-", key: j = null, initializeClass: F = "initializing", lockedClass: b, unlockedClass: w, openClass: C, closeClass: Q, openDuration: N, closeDuration: U, minWidth: V, emit: K = !0, initialize: R = !1 } = {}) {
		b !== void 0 && (console.warn("Graupl NavigationShelf option \"lockedClass\" is deprecated and will be removed. Use lockClass instead."), l = b), w !== void 0 && (console.warn("Graupl NavigationShelf option \"unlockedClass\" is deprecated and will be removed. Use unlockClass instead."), a = w), C !== void 0 && (console.warn("Graupl NavigationShelf option \"openClass\" is deprecated and will be removed. Use expandClass instead."), k = C), Q !== void 0 && (console.warn("Graupl NavigationShelf option \"closeClass\" is deprecated and will be removed. Use collapseClass instead."), v = Q), N !== void 0 && (console.warn("Graupl NavigationShelf option \"openDuration\" is deprecated and will be removed. Use expandDuration instead."), g = N), U !== void 0 && (console.warn("Graupl NavigationShelf option \"closeDuration\" is deprecated and will be removed. Use collapseDuration instead."), E = U), V !== void 0 && (console.warn("Graupl NavigationShelf option \"minWidth\" is deprecated and will be removed. Use breakpoint instead."), y = V), super({
			controllerElement: e ?? null,
			controlledElement: t,
			bootstrap: !1,
			initialize: !1,
			expandClass: k,
			collapseClass: v,
			transitionClass: I,
			transitionDuration: L,
			expandDuration: g,
			collapseDuration: E,
			locked: T,
			breakpoint: y,
			mediaQuery: A,
			lockClass: l,
			unlockClass: a,
			prefix: M,
			key: j,
			initializeClass: F,
			emit: K
		}), this._protectedDOMElements.push("lockController", "hoverController", "sideController"), this._dom.shelf = t, this._dom.lockController = s || null, this._dom.hoverController = i || null, this._dom.sideController = r || null, this._dom.dependents = [], this._selectors.dependents = o, this._classes.hover = _ || "", this._classes.noHover = m || "", this._classes.left = x || "", this._classes.right = O || "", this._side = $, this._side === "right" && (this._otherSide = "left"), this._hover = D, this._delays.hover = S, this._delays.enter = B, this._delays.leave = z, this._bootstrap(), R && this.initialize();
	}
	_registerEvents() {
		this._addInternalEventListener(`${this.eventPrefix}Initialize`, (t) => {
			if (t.detail.component !== this) return;
			const e = window.matchMedia(this.mediaQuery).matches;
			this._expanded.value = !e && (this.dom.controller?.getAttribute("aria-expanded") === "true" || this.isLocked), e && (this._locked.value = !1);
		}), super._registerEvents(), this._registerEvent("shiftSide"), this._registerEvent("enableHover"), this._registerEvent("disableHover"), this._addInternalEventListener(this.getEventName("preexpand"), () => {
			this.dom.controller?.setAttribute("aria-expanded", "true");
		}), this._addInternalEventListener(this.getEventName("precollapse"), () => {
			this.dom.controller?.setAttribute("aria-expanded", "false"), this.isSoftLocked = !1;
		}), this._addInternalEventListener(this.getEventName("initialize"), (t) => {
			t.detail.component === this && (this.dom.lockController && this.dom.lockController.toggleAttribute("disabled", this._mediaQueryList?.matches === !0), this.hover ? this._enableHover({ emit: !1 }) : this._disableHover({ emit: !1 }), this._shiftSide({ emit: !1 }));
		}), this._addInternalEventListener(this.getEventName("validate"), (t) => {
			if (t.detail.component !== this) return;
			const s = n("boolean", { hoverable: this._hover }, { shouldThrow: !1 });
			s.status || (this._errors = [...this._errors, ...s.errors], this._valid = !1);
			const i = tt({ side: this._side }, { shouldThrow: !1 });
			i.status || (this._errors = [...this._errors, ...i.errors], this._valid = !1);
		});
	}
	get openClass() {
		return console.warn("Graupl NavigationShelf.openClass is deprecated and will be removed. Use expandClass instead."), this.expandClass;
	}
	set openClass(t) {
		console.warn("Graupl NavigationShelf.openClass is deprecated and will be removed. Use expandClass instead."), this.expandClass = t;
	}
	get closeClass() {
		return console.warn("Graupl NavigationShelf.closeClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass;
	}
	set closeClass(t) {
		console.warn("Graupl NavigationShelf.closeClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass = t;
	}
	get openDuration() {
		return console.warn("Graupl NavigationShelf.openDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration;
	}
	set openDuration(t) {
		console.warn("Graupl NavigationShelf.openDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration = t;
	}
	get closeDuration() {
		return console.warn("Graupl NavigationShelf.closeDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration;
	}
	set closeDuration(t) {
		console.warn("Graupl NavigationShelf.closeDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration = t;
	}
	get isOpen() {
		return console.warn("Graupl NavigationShelf.isOpen is deprecated and will be removed. Use isExpanded instead."), this.isExpanded;
	}
	get hoverClass() {
		return this._classes.hover;
	}
	set hoverClass(t) {
		c({ hoverClass: t }), this._classes.hover !== t && (this._classes.hover = t);
	}
	get noHoverClass() {
		return this._classes.noHover;
	}
	set noHoverClass(t) {
		c({ noHoverClass: t }), this._classes.noHover !== t && (this._classes.noHover = t);
	}
	get leftClass() {
		return this._classes.left;
	}
	set leftClass(t) {
		c({ leftClass: t }), this._classes.left !== t && (this._classes.left = t);
	}
	get rightClass() {
		return this._classes.right;
	}
	set rightClass(t) {
		c({ rightClass: t }), this._classes.right !== t && (this._classes.right = t);
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
		n("boolean", { isSoftLocked: t }), this._softLocked !== t && (this._softLocked = t, t && this._clearTimeout("hover"));
	}
	_setIds() {
		this.dom.shelf.id = this.dom.shelf.id || `navigation-shelf-${this.key}`, this.dom.controller && (this.dom.controller.id = this.dom.controller.id || `navigation-shelf-toggle-${this.key}`), this.dom.lockController && (this.dom.lockController.id = this.dom.lockController.id || `navigation-shelf-lock-toggle-${this.key}`), this.dom.hoverController && (this.dom.hoverController.id = this.dom.hoverController.id || `navigation-shelf-hover-toggle-${this.key}`), this._id = this.dom.shelf.id;
	}
	_setAriaAttributes() {
		this.dom.controller && (this.dom.controller.setAttribute("aria-controls", this.dom.shelf.id), this.dom.controller?.getAttribute("aria-expanded") !== "true" && this.dom.controller.setAttribute("aria-expanded", "false")), this.dom.lockController && (this.dom.lockController.setAttribute("aria-controls", this.dom.shelf.id), this.dom.lockController.setAttribute("aria-pressed", this.isLocked ? "true" : "false")), this.dom.hoverController && (this.dom.hoverController.setAttribute("aria-controls", this.dom.shelf.id), this.dom.hoverController.setAttribute("aria-pressed", this.hover ? "true" : "false")), this.dom.sideController && this.dom.sideController.setAttribute("aria-controls", this.dom.shelf.id);
	}
	_setCustomProps() {
		this.dom.shelf.style.setProperty(`--${this.prefix}navigation-shelf-transition-duration`, `${this.transitionDuration}ms`), this.dom.shelf.style.setProperty(`--${this.prefix}navigation-shelf-open-transition-duration`, `${this.expandDuration}ms`), this.dom.shelf.style.setProperty(`--${this.prefix}navigation-shelf-close-transition-duration`, `${this.collapseDuration}ms`);
	}
	_setDOMElements() {
		this._setDOMElementType("dependents", { context: document.body });
	}
	_handleFocus() {
		this._addEventListener("focusin", this.dom.shelf, () => {
			this.focusState = "self", this.expand();
		}), this._addEventListener("focusout", this.dom.shelf, (t) => {
			t.relatedTarget === null || this.dom.shelf.contains(t.relatedTarget) || (this.focusState = "none", this.isLocked || this.collapse());
		});
	}
	_handleClick() {
		for (const t of Object.values(this.dom)) t && (Array.isArray(t) || this._addEventListener("pointerdown", t, () => {
			this.currentEvent = "mouse", this._clearTimeout("hover");
		}, { passive: !0 }));
		this.dom.controller && this._addEventListener("click", this.dom.controller, (t) => {
			t.button === 0 && (this.currentEvent = "mouse", u(t), this.toggle({ preserveLock: !1 }), this.isExpanded && (this.focusState = "self", this.isSoftLocked = !0));
		}), this.dom.hoverController && this._addEventListener("click", this.dom.hoverController, (t) => {
			t.button === 0 && (this.currentEvent = "mouse", u(t), this.focusState = "self", this.toggleHover(), this.hover && this.expand());
		}), this.dom.lockController && this._addEventListener("click", this.dom.lockController, (t) => {
			t.button === 0 && (this.currentEvent = "mouse", u(t), this.focusState = "self", this.toggleLock());
		}), this.dom.sideController && this._addEventListener("click", this.dom.sideController, (t) => {
			t.button === 0 && (this.currentEvent = "mouse", u(t), this.focusState = "self", this.toggleSide());
		}), this._addEventListener("click", this.dom.shelf, (t) => {
			t.button === 0 && (this.currentEvent = "mouse", this.focusState = "self", this.isSoftLocked = !0, this.expand());
		}), this._addEventListener("click", document, (t) => {
			this.focusState !== "none" && (this.isLocked || this.dom.shelf === t.target || this.dom.shelf.contains(t.target) || (this.currentEvent = "mouse", this.collapse()));
		});
	}
	_handleHover() {
		this._addEventListener("pointerenter", this.dom.shelf, (t) => {
			t.pointerType === "pen" || t.pointerType === "touch" || (this._clearTimeout("hover"), !(this.isLocked || this.isSoftLocked) && this.hover && (this.currentEvent = "mouse", this.enterDelay > 0 ? this._setTimeout(() => {
				!this.hover || this.isLocked || this.isSoftLocked || this.isExpanded || this.expand();
			}, this.enterDelay, "hover") : this.expand()));
		}), this._addEventListener("pointerleave", this.dom.shelf, (t) => {
			t.pointerType === "pen" || t.pointerType === "touch" || (this._clearTimeout("hover"), !(this.isLocked || this.isSoftLocked) && this.hover && (this.currentEvent = "mouse", this.leaveDelay > 0 ? this._setTimeout(() => {
				!this.hover || this.isLocked || this.isSoftLocked || this.isExpanded && this.collapse();
			}, this.leaveDelay, "hover") : this.collapse()));
		});
	}
	_handleKeydown() {
		this._addEventListener("keydown", this.dom.shelf, (t) => {
			p(t) === "Escape" && u(t);
		});
		for (const t of Object.values(this.dom)) t && (Array.isArray(t) || t !== this.dom.shelf && this._addEventListener("keydown", t, (e) => {
			this.currentEvent = "keyboard";
			const s = p(e);
			(s === "Space" || s === "Enter") && u(e);
		}));
	}
	_handleKeyup() {
		this._addEventListener("keyup", this.dom.shelf, (t) => {
			this.currentEvent = "keyboard", p(t) === "Escape" && this.collapse();
		}), this.dom.controller && this._addEventListener("keyup", this.dom.controller, (t) => {
			this.currentEvent = "keyboard";
			const e = p(t);
			(e === "Space" || e === "Enter") && (u(t), this.toggle(), this.isExpanded && st(this.dom.shelf).focus());
		}), this.dom.hoverController && this._addEventListener("keyup", this.dom.hoverController, (t) => {
			this.currentEvent = "keyboard";
			const e = p(t);
			(e === "Space" || e === "Enter") && (u(t), this.toggleHover());
		}), this.dom.lockController && this._addEventListener("keyup", this.dom.lockController, (t) => {
			this.currentEvent = "keyboard";
			const e = p(t);
			(e === "Space" || e === "Enter") && (u(t), this.toggleLock());
		}), this.dom.sideController && this._addEventListener("keyup", this.dom.sideController, (t) => {
			this.currentEvent = "keyboard";
			const e = p(t);
			(e === "Space" || e === "Enter") && (u(t), this.toggleSide());
		});
	}
	_lock({ emit: t = this.isInitialized && this.shouldEmit } = {}) {
		this._clearTimeout("hover"), this._dispatchEvent("prelock", this.rootDOMElement, { emit: t }), this.dom.lockController && this.dom.lockController.setAttribute("aria-pressed", "true"), d(this.lockedClass, this.dom.shelf), this.dom.dependents.forEach((e) => {
			d(this.lockedClass, e);
		}), h(this.unlockedClass, this.dom.shelf), this.dom.dependents.forEach((e) => {
			h(this.unlockedClass, e);
		}), this._dispatchEvent("lock", this.dom.shelf, { emit: t }), this._dispatchEvent("postlock", this.rootDOMElement, { emit: t });
	}
	_unlock({ emit: t = this.isInitialized && this.shouldEmit } = {}) {
		this._dispatchEvent("preunlock", this.rootDOMElement, { emit: t }), this.dom.lockController && this.dom.lockController.setAttribute("aria-pressed", "false"), d(this.unlockedClass, this.dom.shelf), this.dom.dependents.forEach((e) => {
			d(this.unlockedClass, e);
		}), h(this.lockedClass, this.dom.shelf), this.dom.dependents.forEach((e) => {
			h(this.lockedClass, e);
		}), this._dispatchEvent("unlock", this.dom.shelf, { emit: t }), this._dispatchEvent("postunlock", this.rootDOMElement, { emit: t });
	}
	_shiftSide({ emit: t = this.isInitialized && this.shouldEmit } = {}) {
		const e = this._classes[this.side], s = this._classes[this.otherSide];
		d(e, this.dom.shelf), this.dom.dependents.forEach((i) => {
			d(e, i);
		}), h(s, this.dom.shelf), this.dom.dependents.forEach((i) => {
			h(s, i);
		}), this._dispatchEvent("shiftSide", this.dom.shelf, { emit: t });
	}
	_enableHover({ emit: t = this.isInitialized && this.shouldEmit } = {}) {
		this.dom.hoverController && this.dom.hoverController.setAttribute("aria-pressed", "true"), d(this.hoverClass, this.dom.shelf), h(this.noHoverClass, this.dom.shelf), this._dispatchEvent("enableHover", this.dom.shelf, { emit: t });
	}
	_disableHover({ emit: t = this.isInitialized && this.shouldEmit } = {}) {
		this._clearTimeout("hover"), this.dom.hoverController && this.dom.hoverController.setAttribute("aria-pressed", "false"), d(this.noHoverClass, this.dom.shelf), h(this.hoverClass, this.dom.shelf), this._dispatchEvent("disableHover", this.dom.shelf, { emit: t });
	}
	expand({ force: t = !this.isInitialized, emit: e = this.isInitialized && this.shouldEmit, transition: s = this.isInitialized } = {}) {
		this._clearTimeout("hover"), !(this.isExpanded && !t) && super.expand({
			force: !0,
			emit: e,
			transition: s
		});
	}
	collapse({ force: t = !this.isInitialized, emit: e = this.isInitialized && this.shouldEmit, transition: s = this.isInitialized, preserveLock: i = !0 } = {}) {
		this._clearTimeout("hover"), !(!this.isExpanded && !t) && (this.unlock({
			emit: e,
			updateLock: !i
		}), super.collapse({
			force: t,
			emit: e,
			transition: s
		}));
	}
	toggle({ force: t = !1, emit: e = this.isInitialized && this.shouldEmit, transition: s = !0, preserveLock: i = !0 } = {}) {
		this.isExpanded ? this.collapse({
			force: t,
			emit: e,
			transition: s,
			preserveLock: i
		}) : this.expand({
			force: t,
			emit: e,
			transition: s
		});
	}
	lock({ force: t = !this.isInitialized, emit: e = this.isInitialized && this.shouldEmit, transition: s = this.isInitialized } = {}) {
		this.isLocked && !t || (super.lock({
			force: t,
			emit: e
		}), this.expand({
			force: !0,
			emit: e,
			transition: s
		}));
	}
	unlock({ force: t = !this.isInitialized, emit: e = this.isInitialized && this.shouldEmit, updateLock: s = this.isInitialized } = {}) {
		!this.isLocked && !t && s && this._locked.commit(), super.unlock({
			force: t,
			emit: e,
			preserveState: !s
		});
	}
	toggleLock({ force: t = !1, emit: e = this.isInitialized && this.shouldEmit, transition: s = !0, updateLock: i = !0 } = {}) {
		this.isLocked ? this.unlock({
			emit: e,
			updateLock: i
		}) : this.lock({
			force: t,
			emit: e,
			transition: s
		});
	}
	toLeft({ emit: t = this.isInitialized && this.shouldEmit } = {}) {
		this.side !== "left" && (this._side = "left", this._otherSide = "right", this._shiftSide({ emit: t }));
	}
	toRight({ emit: t = this.isInitialized && this.shouldEmit } = {}) {
		this.side !== "right" && (this._side = "right", this._otherSide = "left", this._shiftSide({ emit: t }));
	}
	toggleSide({ emit: t = this.isInitialized && this.shouldEmit } = {}) {
		this.side === "left" ? this.toRight({ emit: t }) : this.toLeft({ emit: t });
	}
	enableHover({ emit: t = this.isInitialized && this.shouldEmit } = {}) {
		this.hover || (this._enableHover({ emit: t }), this._hover = !0);
	}
	disableHover({ emit: t = this.isInitialized && this.shouldEmit } = {}) {
		this.hover && (this._disableHover({ emit: t }), this._hover = !1);
	}
	toggleHover({ emit: t = this.isInitialized && this.shouldEmit } = {}) {
		this.hover ? this.disableHover({ emit: t }) : this.enableHover({ emit: t });
	}
	open(...t) {
		return console.warn("Graupl NavigationShelf.open() is deprecated and will be removed. Use expand() instead."), this.expand(...t);
	}
	close(...t) {
		return console.warn("Graupl NavigationShelf.close() is deprecated and will be removed. Use collapse() instead."), this.collapse(...t);
	}
};
export { at as default };

//# sourceMappingURL=navigation-shelf.es.js.map