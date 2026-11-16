function m(t, e) {
	if (!(t === "" || t.length === 0)) if (typeof t == "string") e.classList.add(t);
	else {
		const s = t.filter((i) => i !== "");
		s.length > 0 && e.classList.add(...s);
	}
}
function c(t, e) {
	if (!(t === "" || t.length === 0)) if (typeof t == "string") e.classList.remove(t);
	else {
		const s = t.filter((i) => i !== "");
		s.length > 0 && e.classList.remove(...s);
	}
}
function d(t) {
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
function l(t) {
	t.preventDefault(), t.stopPropagation();
}
function u(t, e, { shouldThrow: s = !0 } = {}) {
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
function S(t, { shouldThrow: e = !0 } = {}) {
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
function _(t, { shouldThrow: e = !0 } = {}) {
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
function j(t, { shouldThrow: e = !0 } = {}) {
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
function F(t, { shouldThrow: e = !0 } = {}) {
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
function V(t, e, { shouldThrow: s = !0 } = {}) {
	const i = {
		status: !0,
		errors: []
	};
	try {
		if (n("string", { tagName: t }, { shouldThrow: !0 }).status && u(HTMLElement, e, { shouldThrow: !0 }).status) {
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
function K(t, e, { shouldThrow: s = !0 } = {}) {
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
function q(t, { shouldThrow: e = !0 } = {}) {
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
function N(t) {
	return n("string", { value: t }), `${t.charAt(0).toLowerCase()}${t.slice(1)}`;
}
function g(t) {
	return n("string", { value: t }), `${t.charAt(0).toUpperCase()}${t.slice(1)}`;
}
var v = class b {
	_scope;
	_type = "_default";
	_storage = {};
	_crush = !1;
	constructor({ scope: e, type: s = null, crush: i = !1, initialize: r = !0 } = {}) {
		this._scope = e, this._type = s || "_default", this._crush = i, r && this.initialize();
	}
	initialize() {
		try {
			!this._crush && typeof window[this.scope] < "u" && (u(b, { storage: window[this.scope] }, { shouldThrow: !1 }).status || typeof window[this.scope].storage < "u" && typeof window[this.scope].scope < "u" && typeof window[this.scope].type < "u") && (this._storage = window[this.scope].storage);
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
			const a = n("string", { key: s }, { shouldThrow: !1 });
			if (!a.status) throw a.errors[0];
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
}, y = class {
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
			m(this.initializeClass, this.rootDOMElement), this._dispatchEvent("preinitialize", this.rootDOMElement), this._generateKey(), this._setDOMElements(), this._setIds(), this._setAriaAttributes(), this._setCustomProps(), this._createChildElements(), this._handleFocus(), this._handleHover(), this._handleClick(), this._handleKeydown(), this._handleKeyup(), this._dispatchEvent("initialize", this.rootDOMElement), this._store(), c(this.initializeClass, this.rootDOMElement), this._initialized = !0, this._dispatchEvent("postinitialize", this.rootDOMElement);
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
		_({ initializeClass: t }), this._classes.initialize !== t && (this._classes.initialize = t);
	}
	get focusState() {
		return this._focusState;
	}
	set focusState(t) {
		j({ focusState: t }), this._focusState !== t && (this._focusState = t);
	}
	get currentEvent() {
		return this._currentEvent;
	}
	set currentEvent(t) {
		F({ currentEvent: t }), this._currentEvent !== t && (this._currentEvent = t);
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
		return this._eventPrefix !== "" ? this._eventPrefix : `${N(this.scope)}${g(this.name)}`;
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
		const t = q(this, { shouldThrow: !1 });
		if (t.status || (this._errors = [...this._errors, ...t.errors], this._valid = !1), Object.keys(this._dom).length > 0) {
			const o = {};
			for (const h of Object.keys(this._dom)) Array.isArray(this._dom[h]) ? this._dom[h].forEach((f, p) => {
				o[`${h}Element[${p}]`] = f;
			}) : this._dom[h] !== null && (o[`${h}Element`] = this._dom[h]);
			const a = u(HTMLElement, o, { shouldThrow: !1 });
			a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
		}
		if (Object.keys(this._selectors).length > 0) {
			const o = {};
			for (const h of Object.keys(this._selectors)) this._selectors[h] !== "" && (o[`${h}Selector`] = this._selectors[h]);
			const a = S(o, { shouldThrow: !1 });
			a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
		}
		if (Object.keys(this._classes).length > 0) {
			const o = {};
			for (const h of Object.keys(this._classes)) this._classes[h] !== "" && (o[`${h}Class`] = this._classes[h]);
			const a = _(o, { shouldThrow: !1 });
			a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
		}
		if (Object.keys(this._durations).length > 0) {
			const o = {};
			for (const h of Object.keys(this._durations)) o[`${h}Duration`] = this._durations[h];
			const a = n("number", o, { shouldThrow: !1 });
			a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
		}
		if (Object.keys(this.delays).length > 0) {
			const o = {};
			for (const h of Object.keys(this.delays)) o[`${h}Delay`] = this.delays[h];
			const a = n("number", o, { shouldThrow: !1 });
			a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
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
		u(HTMLElement, { context: e });
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
		this._shouldStore && (u(v, { storage: window[`${this.scope}Storage`] }, { shouldThrow: !1 }).status || new v({ scope: `${this.scope}Storage` }), window[`${this.scope}Storage`].set({
			key: this.id !== "" ? this.id : this.key,
			type: this._storageKey,
			data: this
		}));
	}
	_unstore() {
		this._shouldStore && u(v, { storage: window[`${this.scope}Storage`] }, { shouldThrow: !1 }).status && window[`${this.scope}Storage`].clear({
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
		const i = `${this.eventPrefix}${g(t)}`;
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
		K(t, this), n("boolean", { emit: s }), s && this.shouldEmit && u(HTMLElement, { element: e });
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
			const a = o.options, h = typeof a == "boolean" ? a : !!a?.capture;
			return !(o.type === t && o.element === e && o.listener === s && h === r);
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
}, E = class extends y {
	_scope = "Graupl";
	_rootDOMElement = "carouselItem";
	_shouldStore = !1;
	_storageKey = "carouselItems";
	_name = "CarouselItem";
	_pendingAction = null;
	constructor({ carouselItemElement: t, tabElement: e = null, clone: s = null, parent: i, prefix: r = "graupl-", key: o = null, initializeClass: a = "initializing", initialize: h = !1 }) {
		super({
			bootstrap: !1,
			initialize: !1,
			prefix: r,
			key: o,
			initializeClass: a
		}), this._dom.carouselItem = t, this._dom.tab = e, this._elements.clone = s ?? null, this._elements.parent = i, this._bootstrap(), h && this.initialize();
	}
	_registerEvents() {
		super._registerEvents(), this._registerEvent("preactivate"), this._registerEvent("activate", { detail: {
			scroll: !0,
			scrollOptions: {}
		} }), this._registerEvent("postactivate"), this._registerEvent("predeactivate"), this._registerEvent("deactivate"), this._registerEvent("postdeactivate"), this._addInternalEventListener(this.getEventName("activate"), () => {
			m(this.elements.parent.activeClass, this.dom.carouselItem), this.elements.clone === null && this.dom.carouselItem.removeAttribute("inert");
		}), this._addInternalEventListener(this.getEventName("postactivate"), () => {
			this.dom.tab && (m(this.elements.parent.activeClass, this.dom.tab), this.dom.tab.setAttribute("aria-selected", !0));
		}), this._addInternalEventListener(this.getEventName("deactivate"), () => {
			c(this.elements.parent.activeClass, this.dom.carouselItem), this.dom.carouselItem.setAttribute("inert", !0);
		}), this._addInternalEventListener(this.getEventName("postdeactivate"), () => {
			this.dom.tab && (c(this.elements.parent.activeClass, this.dom.tab), this.dom.tab.setAttribute("aria-selected", !1));
		}), this.elements.parent._registerItemEvents(this);
	}
	activate({ scroll: t = !0, scrollOptions: e = {}, emit: s = this.isInitialized && this.shouldEmit } = {}) {
		this._cancelAnimationFrame("deactivate");
		const i = {
			scroll: t,
			scrollOptions: e
		};
		this._pendingAction = i, this._dispatchEvent("preactivate", this.rootDOMElement, { emit: s }), !(this._pendingAction !== i || !this.isBootstrapped) && this._requestAnimationFrame(() => {
			this._requestAnimationFrame(() => {
				this._dispatchEvent("postactivate", this.rootDOMElement, { emit: s }), this._pendingAction === i && (this._pendingAction = null);
			}, "activate"), this.events.activate.detail.scroll = i.scroll, this.events.activate.detail.scrollOptions = i.scrollOptions, this._dispatchEvent("activate", this.rootDOMElement, { emit: s });
		}, "activate");
	}
	deactivate({ emit: t = this.isInitialized && this.shouldEmit } = {}) {
		this._cancelAnimationFrame("activate");
		const e = {
			scroll: !1,
			scrollOptions: {}
		};
		this._pendingAction = e, this._dispatchEvent("predeactivate", this.rootDOMElement, { emit: t }), !(this._pendingAction !== e || !this.isBootstrapped) && this._requestAnimationFrame(() => {
			this._requestAnimationFrame(() => {
				this._dispatchEvent("postdeactivate", this.rootDOMElement, { emit: t }), this._pendingAction === e && (this._pendingAction = null);
			}, "deactivate"), this._dispatchEvent("deactivate", this.rootDOMElement, { emit: t });
		}, "deactivate");
	}
}, H = class extends y {
	_scope = "Graupl";
	_rootDOMElement = "carousel";
	_currentItem = 0;
	_currentTabIndex = -1;
	_autoplay = !0;
	_automatic = !0;
	_hoverPaused = !1;
	_focusPaused = !1;
	_playText = "Play";
	_pauseText = "Pause";
	_storageKey = "carousels";
	_name = "Carousel";
	_itemsPerPage = 1;
	_loop = !0;
	_intersectionObserver = null;
	_loopItems = /* @__PURE__ */ new Set();
	constructor({ carouselElement: t, carouselItemsSelector: e = ".carousel-item", carouselItemContainerSelector: s = ".carousel-item-container", carouselControlsSelector: i = ".carousel-control", carouselControlContainerSelector: r = ".carousel-control-container", carouselTabsSelector: o = ".carousel-tab", carouselTabContainerSelector: a = ".carousel-tab-container", autoplaySelector: h = ".autoplay", nextSelector: f = ".next", previousSelector: p = ".previous", activeClass: I = "active", playClass: w = "play", pauseClass: T = "pause", autoplay: C = !0, automaticActivation: A = !0, transitionDelay: O = 1e4, playText: x = "Play", pauseText: k = "Pause", itemsPerPage: $ = 1, loop: L = !0, prefix: M = "graupl-", key: z = null, initializeClass: D = "initializing", initialize: P = !1 }) {
		super({
			bootstrap: !1,
			initialize: !1,
			prefix: M,
			key: z,
			initializeClass: D
		}), this._dom.carousel = t, this._dom.carouselItems = [], this._dom.carouselItemContainer = null, this._dom.carouselControls = [], this._dom.carouselControlContainer = null, this._dom.carouselTabs = [], this._dom.carouselTabContainer = null, this._dom.autoplay = null, this._dom.next = null, this._dom.previous = null, this._selectors.carouselItems = e, this._selectors.carouselItemContainer = s, this._selectors.carouselControls = i, this._selectors.carouselControlContainer = r, this._selectors.carouselTabs = o, this._selectors.carouselTabContainer = a, this._selectors.autoplay = h, this._selectors.next = f, this._selectors.previous = p, this._elements.carouselItems = [], this._classes.active = I || "", this._classes.play = w || "", this._classes.pause = T || "", this._autoplay = C, this._automatic = A, this._itemsPerPage = $, this._loop = L, this._delays.transition = O, this._playText = x || "", this._pauseText = k || "", this._bootstrap(), P && this.initialize();
	}
	_registerEvents() {
		super._registerEvents(), this._addInternalEventListener(this.getEventName("initialize"), (t) => {
			t.detail.component === this && (this._handleAutoplay(), this.loop && this._handleLoop(), this._handleIntersection(), this.activateFirstItem({
				scrollOptions: { behavior: "instant" },
				emit: !1
			}));
		}), this._addInternalEventListener(this.getEventName("validate"), (t) => {
			if (t.detail.component !== this) return;
			const s = n("boolean", {
				autoplay: this._autoplay,
				automaticActivation: this._automatic,
				loop: this._loop
			}, { shouldThrow: !1 });
			s.status || (this._errors = [...this._errors, ...s.errors], this._valid = !1);
			const r = n("string", {
				playText: this._playText,
				pauseText: this._pauseText
			}, { shouldThrow: !1 });
			r.status || (this._errors = [...this._errors, ...r.errors], this._valid = !1);
			const a = n("number", { itemsPerPage: this._itemsPerPage }, { shouldThrow: !1 });
			a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
		});
	}
	get activeClass() {
		return this._classes.active;
	}
	set activeClass(t) {
		_({ activeClass: t }), this._classes.active !== t && (this._classes.active = t);
	}
	get playClass() {
		return this._classes.play;
	}
	set playClass(t) {
		_({ playClass: t }), this._classes.play !== t && (this.isInitialized && c(this._classes.play, this.dom.autoplay), this._classes.play = t, this.isInitialized && this._handleAutoplay());
	}
	get pauseClass() {
		return this._classes.pause;
	}
	set pauseClass(t) {
		_({ pauseClass: t }), this._classes.pause !== t && (this.isInitialized && c(this._classes.pause, this.dom.autoplay), this._classes.pause = t, this.isInitialized && this._handleAutoplay());
	}
	get currentItem() {
		return this._currentItem;
	}
	set currentItem(t) {
		n("number", { currentItem: t }), t !== this.currentItem && (t < 0 ? this._currentItem = 0 : t >= this.dom.carouselItems.length ? this._currentItem = this.dom.carouselItems.length - 1 : this._currentItem = t);
	}
	get currentCarouselItem() {
		return this.elements.carouselItems[this.currentItem];
	}
	get isAutomatic() {
		return this._automatic;
	}
	set isAutomatic(t) {
		n("boolean", { isAutomatic: t }), this._automatic !== t && (this._automatic = t);
	}
	get autoplay() {
		return this._autoplay;
	}
	set autoplay(t) {
		n("boolean", { autoplay: t }), this._autoplay = t, t && (this._hoverPaused = !1, this._focusPaused = !1), this.isInitialized && this._handleAutoplay();
	}
	get itemsPerPage() {
		return this._itemsPerPage;
	}
	get loop() {
		return this._loop;
	}
	get transitionDelay() {
		return this._delays.transition;
	}
	set transitionDelay(t) {
		n("number", { transitionDelay: t }), t !== this.transitionDelay && t >= 0 && (this._delays.transition = t, this.isInitialized && this._handleAutoplay());
	}
	get playText() {
		return this._playText;
	}
	set playText(t) {
		n("string", { playText: t }), this._playText !== t && (this._playText = t, this.isInitialized && this._handleAutoplay());
	}
	get pauseText() {
		return this._pauseText;
	}
	set pauseText(t) {
		n("string", { pauseText: t }), this._pauseText !== t && (this._pauseText = t, this.isInitialized && this._handleAutoplay());
	}
	_setDOMElements() {
		this._setDOMElementType("carouselItemContainer", { context: this.dom.carousel }), this._setDOMElementType("carouselControlContainer", { context: this.dom.carousel }), this._setDOMElementType("carouselTabContainer", { context: this.dom.carousel }), this.dom.carouselItemContainer && this._setDOMElementType("carouselItems", { context: this.dom.carouselItemContainer }), this.dom.carouselControlContainer && (this._setDOMElementType("carouselControls", { context: this.dom.carouselControlContainer }), this._setDOMElementType("autoplay", { context: this.dom.carouselControlContainer }), this._setDOMElementType("next", { context: this.dom.carouselControlContainer }), this._setDOMElementType("previous", { context: this.dom.carouselControlContainer })), this._dom.carouselTabContainer && this._setDOMElementType("carouselTabs", { context: this.dom.carouselTabContainer });
	}
	_registerItemEvents(t) {
		t._addInternalEventListener(t.getEventName("activate"), (e) => {
			e.detail.scroll && this._scrollToItem(t, e.detail.scrollOptions);
		}), t.dom.tab && t._addInternalEventListener(t.getEventName("postactivate"), () => {
			const e = this.dom.carouselTabContainer;
			e.contains(e.ownerDocument.activeElement) || this._setTabStop(this._getItemsWithTabs().indexOf(t));
		});
	}
	_createChildElements() {
		this.dom.carouselItems.forEach((t, e) => {
			const s = new E({
				carouselItemElement: t,
				tabElement: this.dom.carouselTabs ? this.dom.carouselTabs[e] : null,
				parent: this,
				prefix: this.prefix,
				initializeClass: this.classes.initialize,
				initialize: !0
			});
			this._elements.carouselItems.push(s);
		}), this._getItemsWithTabs().forEach((t) => {
			const { tab: e, carouselItem: s } = t.dom;
			e.setAttribute("role", "tab"), e.setAttribute("aria-selected", t === this.currentCarouselItem), e.setAttribute("aria-controls", s.id), s.setAttribute("role", "tabpanel"), s.setAttribute("aria-labelledby", e.id), s.removeAttribute("aria-roledescription");
		}), this._setTabStop(this._getItemsWithTabs().indexOf(this.currentCarouselItem));
	}
	_setIds() {
		this.dom.carousel.id = this.dom.carousel.id || `carousel-${this.key}`, this.dom.carouselItems.forEach((t, e) => {
			t.id = t.id || `carousel-item-${this.key}-${e}`;
		}), this.dom.carouselTabs.forEach((t, e) => {
			t.id = t.id || `carousel-tab-${this.key}-${e}`;
		}), this._id = this.dom.carousel.id;
	}
	_setAriaAttributes() {
		!V("section", { carousel: this.dom.carousel }, { shouldThrow: !1 }).status && this.dom.carousel.getAttribute("role") !== "region" && this.dom.carousel.setAttribute("role", "group"), this.dom.carouselItems.forEach((t) => {
			t.setAttribute("inert", "true");
		}), this.dom.carouselItemContainer && this.dom.carouselItemContainer.setAttribute("tabindex", "-1"), this._dom.carousel.setAttribute("aria-roledescription", "carousel"), this.dom.carouselTabContainer && this.dom.carouselTabContainer.setAttribute("role", "tablist"), this.dom.carouselTabs.forEach((t) => {
			t.setAttribute("tabindex", "-1");
		});
	}
	_handleAutoplay() {
		if (!this.isBootstrapped) return;
		const t = !this.autoplay || this._focusPaused, e = !t && !this._hoverPaused;
		t ? (m(this.playClass, this.dom.autoplay), c(this.pauseClass, this.dom.autoplay), this.dom.autoplay.setAttribute("aria-label", this.playText)) : (m(this.pauseClass, this.dom.autoplay), c(this.playClass, this.dom.autoplay), this.dom.autoplay.setAttribute("aria-label", this.pauseText)), this.dom.carousel.setAttribute("aria-live", e ? "off" : "polite"), e ? this._setInterval(() => this.activateNextItem(), this.transitionDelay, "autoplay") : this._clearInterval("autoplay");
	}
	_handleIntersection() {
		const t = {
			root: this.dom.carouselItemContainer,
			rootMargin: "1px",
			scrollMargin: "1px",
			threshold: 1
		};
		this._intersectionObserver?.disconnect();
		const e = new IntersectionObserver((s) => {
			!this.isInitialized || this._intersectionObserver !== e || s.forEach((i) => {
				if (!i.isIntersecting) return;
				const r = this.dom.carouselItems.indexOf(i.target);
				if (r < 0) return;
				let o = r, a = null;
				this.elements.carouselItems[r].elements.clone !== null && (o = this.dom.carouselItems.indexOf(this.elements.carouselItems[r].elements.clone.dom.carouselItem), (r === 0 || r === this.dom.carouselItems.length - 1) && (a = this.elements.carouselItems[r].elements.clone)), this.currentItem !== o && this.activateItem(o, { scroll: !1 }), a && this._requestAnimationFrame(() => {
					this._intersectionObserver !== e || this.elements.carouselItems[this.currentItem] !== a || this._scrollToItem(a, { behavior: "instant" });
				}, "loopScroll");
			});
		}, t);
		this._intersectionObserver = e, this.dom.carouselItems.forEach((s) => {
			this._intersectionObserver.observe(s);
		});
	}
	_handleFocus() {
		this._addEventListener("focusin", this.dom.carousel, () => {
			this._focusPaused = !0, this._handleAutoplay();
		});
		const t = this.dom.carouselTabContainer;
		t && (this._addEventListener("focusin", t, (e) => {
			const s = this._getItemsWithTabs(), i = s.findIndex((o) => o.dom.tab === e.target);
			if (i === -1) return;
			this._setTabStop(i);
			const r = s[i];
			this.isAutomatic && r !== this.currentCarouselItem && this.activateItem(this.elements.carouselItems.indexOf(r));
		}), this._addEventListener("focusout", t, (e) => {
			t.contains(e.relatedTarget) || this._setTabStop(this._getItemsWithTabs().indexOf(this.currentCarouselItem));
		}));
	}
	_setTabStop(t) {
		const e = this._getItemsWithTabs();
		e[this._currentTabIndex]?.dom.tab.setAttribute("tabindex", "-1"), this._currentTabIndex = t, e[this._currentTabIndex]?.dom.tab.setAttribute("tabindex", "0");
	}
	_handleClick() {
		this._addEventListener("click", this.dom.next, (t) => {
			t.button === 0 && (l(t), this.currentEvent = "mouse", this.activateNextItem());
		}), this._addEventListener("click", this.dom.previous, (t) => {
			t.button === 0 && (l(t), this.currentEvent = "mouse", this.activatePreviousItem());
		}), this._addEventListener("click", this.dom.autoplay, (t) => {
			t.button === 0 && (l(t), this.currentEvent = "mouse", this.toggleAutoplay());
		}), this.elements.carouselItems.forEach((t) => {
			t.dom.tab && this._addEventListener("click", t.dom.tab, (e) => {
				e.button === 0 && (l(e), !(this.isAutomatic && t === this.currentCarouselItem) && (this.currentEvent = "mouse", this.activateItem(this.dom.carouselItems.indexOf(t.dom.carouselItem))));
			});
		});
	}
	_handleHover() {
		this._addEventListener("pointerover", this.dom.carousel, (t) => {
			t.relatedTarget && this.dom.carousel.contains(t.relatedTarget) || (this._hoverPaused = !0, this._handleAutoplay());
		}), this._addEventListener("pointerleave", this.dom.carousel, () => {
			this._hoverPaused = !1, this._handleAutoplay();
		});
	}
	_handleKeydown() {
		this.dom.carouselControls.forEach((t) => {
			this._addEventListener("keydown", t, (e) => {
				switch (d(e)) {
					case "Space":
					case "Enter": l(e);
				}
			});
		}), this.elements.carouselItems.forEach((t) => {
			t.dom.tab && this._addEventListener("keydown", t.dom.tab, (e) => {
				switch (d(e)) {
					case "Space":
					case "Enter":
					case "ArrowLeft":
					case "ArrowRight":
					case "Home":
					case "End": l(e);
				}
			});
		});
	}
	_handleKeyup() {
		this._addEventListener("keyup", this.dom.next, (t) => {
			switch (d(t)) {
				case "Space":
				case "Enter": this.activateNextItem(), l(t);
			}
		}), this._addEventListener("keyup", this.dom.previous, (t) => {
			switch (d(t)) {
				case "Space":
				case "Enter": this.activatePreviousItem(), l(t);
			}
		}), this._addEventListener("keyup", this.dom.autoplay, (t) => {
			switch (d(t)) {
				case "Space":
				case "Enter": this.toggleAutoplay(), l(t);
			}
		}), this.elements.carouselItems.forEach((t) => {
			t.dom.tab && this._addEventListener("keyup", t.dom.tab, (e) => {
				switch (d(e)) {
					case "Space":
					case "Enter":
						l(e), this.currentEvent = "keyboard", this.activateItem(this.dom.carouselItems.indexOf(t.dom.carouselItem));
						break;
					case "ArrowLeft":
						l(e), this._focusPreviousTab();
						break;
					case "ArrowRight":
						l(e), this._focusNextTab();
						break;
					case "Home":
						l(e), this._focusFirstTab();
						break;
					case "End": l(e), this._focusLastTab();
				}
			});
		});
	}
	_getItemsWithTabs() {
		return this.elements.carouselItems.filter((t) => t.dom.tab);
	}
	_focusTab(t) {
		this._getItemsWithTabs()[t]?.dom.tab.focus();
	}
	_focusFirstTab() {
		this._focusTab(0);
	}
	_focusLastTab() {
		this._focusTab(this._getItemsWithTabs().length - 1);
	}
	_focusNextTab() {
		this._currentTabIndex < this._getItemsWithTabs().length - 1 ? this._focusTab(this._currentTabIndex + 1) : this._focusFirstTab();
	}
	_focusPreviousTab() {
		this._currentTabIndex > 0 ? this._focusTab(this._currentTabIndex - 1) : this._focusLastTab();
	}
	_handleLoop() {
		this._removeLoop();
		const t = [...this.elements.carouselItems], e = this.currentCarouselItem, s = t.slice(0, this.itemsPerPage), i = t.slice(Math.max(0, t.length - this.itemsPerPage)).reverse(), r = this.dom.carouselItemContainer;
		s.forEach((o) => {
			const a = this._createLoopItem(o);
			r.appendChild(a.dom.carouselItem), this.dom.carouselItems.push(a.dom.carouselItem), this._elements.carouselItems.push(a), a.initialize(), this._intersectionObserver?.observe(a.dom.carouselItem);
		}), i.forEach((o) => {
			const a = this._createLoopItem(o);
			r.insertBefore(a.dom.carouselItem, r.firstChild), this.dom.carouselItems.unshift(a.dom.carouselItem), this._elements.carouselItems.unshift(a), a.initialize(), this._intersectionObserver?.observe(a.dom.carouselItem);
		}), this.isInitialized && e && (this._currentItem = this.elements.carouselItems.indexOf(e));
	}
	_createLoopItem(t) {
		const e = t.dom.carouselItem.cloneNode(!0);
		e.setAttribute("aria-hidden", "true"), e.setAttribute("inert", "true"), e.setAttribute("id", `${t.dom.carouselItem.id}-clone`);
		const s = new E({
			carouselItemElement: e,
			clone: t,
			parent: this,
			prefix: this.prefix,
			initializeClass: this.classes.initialize
		});
		return this._loopItems.add(s), s;
	}
	_removeLoop() {
		this._cancelAnimationFrame("loopScroll");
		const t = this.currentCarouselItem, e = t?.elements.clone || t, s = /* @__PURE__ */ new Set();
		this._loopItems.forEach((i) => {
			s.add(i.dom.carouselItem), this._intersectionObserver?.unobserve(i.dom.carouselItem), i.dispose(), i.dom.carouselItem.remove();
		}), this._dom.carouselItems = this.dom.carouselItems.filter((i) => !s.has(i)), this._elements.carouselItems = this.elements.carouselItems.filter((i) => !this._loopItems.has(i)), this._loopItems.clear(), this._currentItem = Math.max(0, this.elements.carouselItems.indexOf(e));
	}
	_scrollToItem(t, e = {}) {
		const { behavior: s = "smooth", ...i } = e, r = s === "smooth" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
		this.dom.carouselItemContainer.scrollTo({
			left: t.dom.carouselItem.offsetLeft,
			top: t.dom.carouselItem.offsetTop,
			...i,
			behavior: r ? "instant" : s
		});
	}
	activateCurrentItem({ scroll: t = !0, scrollOptions: e = {}, emit: s = this.isInitialized && this.shouldEmit } = {}) {
		this.currentCarouselItem.activate({
			scroll: t,
			scrollOptions: e,
			emit: s
		});
	}
	deactivateCurrentItem({ scroll: t = !0, scrollOptions: e = {}, emit: s = this.isInitialized && this.shouldEmit } = {}) {
		this.currentCarouselItem.deactivate({
			scroll: t,
			scrollOptions: e,
			emit: s
		});
	}
	activateItem(t, { scroll: e = !0, scrollOptions: s = {}, emit: i = this.isInitialized && this.shouldEmit } = {}) {
		this.deactivateCurrentItem({
			scroll: e,
			scrollOptions: s,
			emit: i
		}), this.currentItem = t, this.activateCurrentItem({
			scroll: e,
			scrollOptions: s,
			emit: i
		}), this._handleAutoplay();
	}
	activateFirstItem({ scroll: t = !0, scrollOptions: e = {}, emit: s = this.isInitialized && this.shouldEmit } = {}) {
		this.loop ? this.currentItem === this.dom.carouselItems.length - this.itemsPerPage - 1 ? this.activateNextItem({
			scroll: t,
			scrollOptions: e,
			emit: s
		}) : this.activateItem(this.itemsPerPage, {
			scroll: t,
			scrollOptions: e,
			emit: s
		}) : this.activateItem(0, {
			scroll: t,
			scrollOptions: e,
			emit: s
		});
	}
	activateLastItem({ scroll: t = !0, scrollOptions: e = {}, emit: s = this.isInitialized && this.shouldEmit } = {}) {
		this.loop ? this.currentItem === this.itemsPerPage ? this.activatePreviousItem({
			scroll: t,
			scrollOptions: e,
			emit: s
		}) : this.activateItem(this.dom.carouselItems.length - this.itemsPerPage - 1, {
			scroll: t,
			scrollOptions: e,
			emit: s
		}) : this.activateItem(this.dom.carouselItems.length - 1, {
			scroll: t,
			scrollOptions: e,
			emit: s
		});
	}
	activateNextItem({ scroll: t = !0, scrollOptions: e = {}, emit: s = this.isInitialized && this.shouldEmit } = {}) {
		this.loop ? this.activateItem(this.currentItem + 1, {
			scroll: t,
			scrollOptions: e,
			emit: s
		}) : this.currentItem + 1 >= this.dom.carouselItems.length ? this.activateFirstItem({
			scroll: t,
			scrollOptions: e,
			emit: s
		}) : this.activateItem(this.currentItem + 1, {
			scroll: t,
			scrollOptions: e,
			emit: s
		});
	}
	activatePreviousItem({ scroll: t = !0, scrollOptions: e = {}, emit: s = this.isInitialized && this.shouldEmit } = {}) {
		this.loop ? this.activateItem(this.currentItem - 1, {
			scroll: t,
			scrollOptions: e,
			emit: s
		}) : this.currentItem - 1 < 0 || this.loop && this.currentItem - 1 < this.itemsPerPage ? this.activateLastItem({
			scroll: t,
			scrollOptions: e,
			emit: s
		}) : this.activateItem(this.currentItem - 1, {
			scroll: t,
			scrollOptions: e,
			emit: s
		});
	}
	toggleAutoplay() {
		this.autoplay = !this.autoplay || this._focusPaused;
	}
	dispose() {
		this._intersectionObserver?.disconnect(), this._intersectionObserver = null, this._removeLoop(), this.elements.carouselItems.forEach((t) => t.dispose()), super.dispose();
	}
};
module.exports = H;

//# sourceMappingURL=carousel.cjs.map