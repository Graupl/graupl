function h(t, e) {
	t === "" || t.length === 0 || (typeof t == "string" ? e.classList.add(t) : e.classList.add(...t));
}
function l(t, e) {
	t === "" || t.length === 0 || (typeof t == "string" ? e.classList.remove(t) : e.classList.remove(...t));
}
var O = class {
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
};
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
function p(t, { shouldThrow: e = !0 } = {}) {
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
function d(t, { shouldThrow: e = !0 } = {}) {
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
				o[i] = t[i], p(o);
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
function M(t, { shouldThrow: e = !0 } = {}) {
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
function S(t, e, { shouldThrow: s = !0 } = {}) {
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
function L(t, { shouldThrow: e = !0 } = {}) {
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
var m = class E {
	_scope;
	_type = "_default";
	_storage = {};
	_crush = !1;
	constructor({ scope: e, type: s = null, crush: i = !1, initialize: r = !0 } = {}) {
		this._scope = e, this._type = s || "_default", this._crush = i, r && this.initialize();
	}
	initialize() {
		try {
			!this._crush && typeof window[this.scope] < "u" && (c(E, { storage: window[this.scope] }, { shouldThrow: !1 }).status || typeof window[this.scope].storage < "u" && typeof window[this.scope].scope < "u" && typeof window[this.scope].type < "u") && (this._storage = window[this.scope].storage);
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
}, y = class {
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
		d({ initializeClass: t }), this._classes.initialize !== t && (this._classes.initialize = t);
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
		M({ currentEvent: t }), this._currentEvent !== t && (this._currentEvent = t);
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
		const t = L(this, { shouldThrow: !1 });
		if (t.status || (this._errors = [...this._errors, ...t.errors], this._valid = !1), Object.keys(this._dom).length > 0) {
			const i = {};
			for (const o of Object.keys(this._dom)) Array.isArray(this._dom[o]) ? this._dom[o].forEach((a, _) => {
				i[`${o}Element[${_}]`] = a;
			}) : this._dom[o] !== null && (i[`${o}Element`] = this._dom[o]);
			const r = c(HTMLElement, i, { shouldThrow: !1 });
			r.status || (this._errors = [...this._errors, ...r.errors], this._valid = !1);
		}
		if (Object.keys(this._selectors).length > 0) {
			const i = {};
			for (const o of Object.keys(this._selectors)) i[`${o}Selector`] = this._selectors[o];
			const r = p(i, { shouldThrow: !1 });
			r.status || (this._errors = [...this._errors, ...r.errors], this._valid = !1);
		}
		if (Object.keys(this._classes).length > 0) {
			const i = {};
			for (const o of Object.keys(this._classes)) this._classes[o] !== "" && (i[`${o}Class`] = this._classes[o]);
			const r = d(i, { shouldThrow: !1 });
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
		this._shouldStore && (c(m, { storage: window.GrauplStorage }, { shouldThrow: !1 }).status || new m({ scope: "GrauplStorage" }), window.GrauplStorage.set({
			key: this.id !== "" ? this.id : this.key,
			type: this._storageKey,
			data: this
		}));
	}
	_unstore() {
		this._shouldStore && c(m, { storage: window.GrauplStorage }, { shouldThrow: !1 }).status && window.GrauplStorage.clear({
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
		S(t, this), c(HTMLElement, { element: e }), e.dispatchEvent(this.events[t]);
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
}, j = class extends y {
	_rootDOMElement = "toggle";
	_protectedDOMElements = ["content"];
	_storageKey = "tabToggles";
	_name = "TabToggle";
	_shouldStore = !1;
	_active = new O(!1);
	constructor({ toggleElement: t, contentElement: e, parentTab: s } = {}) {
		super({
			prefix: s.prefix,
			key: s.key
		}), this._dom.toggle = t, this._dom.content = e, this._elements.parent = s, this._registerEvent("activate", { detail: { toggle: this } }), this._registerEvent("deactivate", { detail: { toggle: this } }), this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
			this.dom.toggle.getAttribute("aria-selected") === "true" ? this.show({
				force: !0,
				emit: !1,
				transition: !1
			}) : this.hide({
				force: !0,
				emit: !1,
				transition: !1
			});
		});
	}
	get isActive() {
		return this._active.value;
	}
	_setIds() {
		const { key: t } = this.elements.parent, e = this.elements.parent.dom.tabToggles.indexOf(this.dom.toggle);
		this.dom.toggle.id = this.dom.toggle.id || `tab-toggle-${t}-${e}`, this.dom.content.id = this.dom.content.id || `tab-content-${t}-${e}`, this._id = this.dom.toggle.id;
	}
	_setAriaAttributes() {
		this.dom.toggle.setAttribute("role", "tab"), this.dom.toggle.getAttribute("aria-selected") !== "true" && this.dom.toggle.setAttribute("aria-selected", "false"), this.dom.toggle.setAttribute("aria-controls", this.dom.content.id), this.dom.content.setAttribute("role", "tabpanel");
	}
	_reveal({ emit: t = !0, transition: e = !0 } = {}) {
		const { closeClass: s, openClass: i, transitionClass: r, openDuration: o } = this.elements.parent;
		this.dom.toggle.setAttribute("aria-selected", "true"), e && r !== "" ? (h(r, this.dom.content), requestAnimationFrame(() => {
			l(s, this.dom.content), requestAnimationFrame(() => {
				h(i, this.dom.content), requestAnimationFrame(() => {
					this._setTimeout(() => l(r, this.dom.content), o);
				});
			});
		})) : (h(i, this.dom.content), l(s, this.dom.content)), t && this._dispatchEvent("activate", this.dom.toggle);
	}
	_conceal({ emit: t = !0, transition: e = !0 } = {}) {
		const { closeClass: s, openClass: i, transitionClass: r, closeDuration: o } = this.elements.parent;
		this.dom.toggle.setAttribute("aria-selected", "false"), e && r !== "" ? (h(r, this.dom.content), requestAnimationFrame(() => {
			l(i, this.dom.content), requestAnimationFrame(() => {
				h(s, this.dom.content), requestAnimationFrame(() => {
					this._setTimeout(() => l(r, this.dom.content), o);
				});
			});
		})) : (h(s, this.dom.content), l(i, this.dom.content)), t && this._dispatchEvent("deactivate", this.dom.toggle);
	}
	show({ force: t = !1, preserveState: e = !1, emit: s = !0, transition: i = !0 } = {}) {
		this.isActive && !t || (this.elements.parent.focusState = "self", this._reveal({
			emit: s,
			transition: i
		}), this._active.value = !0, e || this._active.commit(), this.dom.toggle.setAttribute("tabindex", "0"), this.hideSiblings());
	}
	hide({ force: t = !1, preserveState: e = !1, emit: s = !0, transition: i = !0 } = {}) {
		!this.isActive && !t || (this.elements.parent.focusState = "none", this._conceal({
			emit: s,
			transition: i
		}), this._active.value = !1, e || this._active.commit(), this.dom.toggle.setAttribute("tabindex", "-1"));
	}
	focus() {
		this.dom.toggle.focus();
	}
	blur() {
		this.dom.toggle.blur();
	}
	hideSiblings() {
		this.elements.parent && this.elements.parent.elements.tabToggles.forEach((t) => {
			t !== this && t.hide();
		});
	}
};
function b(t) {
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
var z = class extends y {
	_rootDOMElement = "tabs";
	_automatic = !1;
	_currentChild = 0;
	_storageKey = "tabs";
	_name = "Tab";
	constructor({ tabsElement: t, tabListSelector: e = ".tab-list", tabTogglesSelector: s = ".tab-toggle", tabContentsSelector: i = ".tab-content", openClass: r = "show", closeClass: o = "hide", transitionClass: a = null, transitionDuration: _ = 300, openDuration: w = -1, closeDuration: C = -1, automaticActivation: v = !1, prefix: k = "graupl-", key: $ = null, initializeClass: T = "initializing", initialize: D = !1 }) {
		super({
			prefix: k,
			key: $,
			initializeClass: T
		}), this._dom.tabs = t, this._dom.tabList = null, this._dom.tabToggles = [], this._dom.tabContents = [], this._selectors.tabList = e, this._selectors.tabToggles = s, this._selectors.tabContents = i, this._elements.tabToggles = [], this._classes.open = r || "", this._classes.close = o || "", this._classes.transition = a || "", this._durations.transition = _, this._durations.open = w, this._durations.close = C, this._automatic = v, this._addEventListener("grauplComponentInitialize", this.dom.tabs, () => {
			this.elements.tabToggles.filter((f) => f.isActive).length === 0 && this.elements.tabToggles[0].show();
		}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
			const g = n("boolean", { automaticActivation: this._automatic }, { shouldThrow: !1 });
			g.status || (this._errors = [...this._errors, ...g.errors], this._valid = !1);
		}), D && this.initialize();
	}
	get openClass() {
		return this._classes.open;
	}
	set openClass(t) {
		d({ openClass: t }), this._classes.open !== t && (this._classes.open = t);
	}
	get closeClass() {
		return this._classes.close;
	}
	set closeClass(t) {
		d({ closeClass: t }), this._classes.close !== t && (this._classes.close = t);
	}
	get transitionClass() {
		return this._classes.transition;
	}
	set transitionClass(t) {
		d({ transitionClass: t }), this._classes.transition !== t && (this._classes.transition = t);
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
	get isAutomatic() {
		return this._automatic;
	}
	set isAutomatic(t) {
		n("boolean", { isAutomatic: t }), this._automatic !== t && (this._automatic = t);
	}
	get currentChild() {
		return this._currentChild;
	}
	set currentChild(t) {
		n("number", { currentChild: t }), this._currentChild !== t && t >= 0 && t < this.elements.tabToggles.length && (this._currentChild = t);
	}
	get currentTabToggle() {
		return this.elements.tabToggles[this.currentChild];
	}
	_setIds() {
		this.dom.tabs.id = this.dom.tabs.id || `tabs-${this.key}`, this.dom.tabList.id = this.dom.tabList.id || `tab-list-${this.key}`, this._id = this.dom.tabs.id;
	}
	_setAriaAttributes() {
		this.dom.tabList.setAttribute("role", "tablist");
	}
	_setCustomProps() {
		this.dom.tabs.style.setProperty(`--${this.prefix}tabs-transition-duration`, `${this.transitionDuration}ms`), this.dom.tabs.style.setProperty(`--${this.prefix}tabs-open-transition-duration`, `${this.openDuration}ms`), this.dom.tabs.style.setProperty(`--${this.prefix}tabs-close-transition-duration`, `${this.closeDuration}ms`);
	}
	_setDOMElements() {
		this._resetDOMElementType("tabList"), this._setDOMElementType("tabList", { context: this.dom.tabs }), this.dom.tabList && (this._resetDOMElementType("tabToggles"), this._setDOMElementType("tabToggles", { context: this.dom.tabList })), this._resetDOMElementType("tabContents"), this._setDOMElementType("tabContents", { context: this.dom.tabs });
	}
	_createChildElements() {
		this.dom.tabToggles.forEach((t, e) => {
			const s = new j({
				toggleElement: t,
				contentElement: this.dom.tabContents[e],
				parentTab: this
			});
			s.initialize(), this._elements.tabToggles.push(s);
		});
	}
	_handleFocus() {
		this.elements.tabToggles.forEach((t, e) => {
			this._addEventListener("focus", t.dom.toggle, () => {
				this.currentChild = e, this.isAutomatic && this.currentTabToggle.show();
			});
		});
	}
	_handleClick() {
		this.elements.tabToggles.forEach((t, e) => {
			this._addEventListener("click", t.dom.toggle, () => {
				this.currentChild = e, t.show();
			});
		});
	}
	_handleKeydown() {
		this.dom.tabToggles.forEach((t) => {
			this._addEventListener("keydown", t, (e) => {
				const s = b(e);
				[
					"Space",
					"Enter",
					"ArrowRight",
					"ArrowLeft",
					"Home",
					"End"
				].includes(s) && u(e);
			});
		});
	}
	_handleKeyup() {
		this.dom.tabToggles.forEach((t) => {
			this._addEventListener("keyup", t, (e) => {
				switch (b(e)) {
					case "Space":
					case "Enter":
						u(e), this.currentTabToggle.show();
						break;
					case "Home":
						u(e), this.focusFirstChild();
						break;
					case "End":
						u(e), this.focusLastChild();
						break;
					case "ArrowRight":
						u(e), this.focusNextChild();
						break;
					case "ArrowLeft": u(e), this.focusPreviousChild();
				}
			});
		});
	}
	focusCurrentChild() {
		this.currentChild !== -1 && this.currentTabToggle.focus();
	}
	focusChild(t) {
		this.blurCurrentChild(), this.currentChild = t, this.focusCurrentChild();
	}
	focusFirstChild() {
		this.focusChild(0);
	}
	focusLastChild() {
		this.focusChild(this.elements.tabToggles.length - 1);
	}
	focusNextChild() {
		this.currentChild < this.elements.tabToggles.length - 1 ? this.focusChild(this.currentChild + 1) : this.focusFirstChild();
	}
	focusPreviousChild() {
		this.currentChild > 0 ? this.focusChild(this.currentChild - 1) : this.focusLastChild();
	}
	blurCurrentChild() {
		this.currentChild !== -1 && this.currentTabToggle.blur();
	}
};
module.exports = z;

//# sourceMappingURL=tabs.cjs.js.map