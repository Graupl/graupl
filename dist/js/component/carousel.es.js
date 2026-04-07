function h(t, e) {
	t === "" || t.length === 0 || (typeof t == "string" ? e.classList.add(t) : e.classList.add(...t));
}
function l(t, e) {
	t === "" || t.length === 0 || (typeof t == "string" ? e.classList.remove(t) : e.classList.remove(...t));
}
function d(t) {
	try {
		const e = t.key || t.keyCode, r = {
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
		return Object.keys(r).find((s) => r[s] === !0) || "";
	} catch {
		return "";
	}
}
function _(t) {
	t.preventDefault(), t.stopPropagation();
}
function u(t, e, { shouldThrow: r = !0 } = {}) {
	const s = {
		status: !0,
		errors: []
	};
	try {
		if (typeof e != "object") throw new TypeError(`Elements given to isValidInstance() must be inside of an object. "${typeof e}" given.`);
		for (const i in e) try {
			if (!(e[i] instanceof t)) {
				const o = typeof e[i];
				throw new TypeError(`${i} must be an instance of ${t.name}. "${o}" given.`);
			}
		} catch (o) {
			s.status = !1, s.errors.push(o);
		}
	} catch (i) {
		s.status = !1, s.errors.push(i);
	}
	if (r && !s.status) throw s.errors[0];
	return s;
}
function a(t, e, { shouldThrow: r = !0 } = {}) {
	const s = {
		status: !0,
		errors: []
	};
	try {
		if (typeof e != "object") throw new TypeError(`Values given to isValidType() must be inside of an object. "${typeof e}" given.`);
		for (const i in e) try {
			const o = typeof e[i];
			if (o !== t) throw new TypeError(`${i} must be a ${t}. "${o}" given.`);
		} catch (o) {
			s.status = !1, s.errors.push(o);
		}
	} catch (i) {
		s.status = !1, s.errors.push(i);
	}
	if (r && !s.status) throw s.errors[0];
	return s;
}
function g(t, { shouldThrow: e = !0 } = {}) {
	const r = {
		status: !0,
		errors: []
	};
	try {
		if (typeof t != "object") throw new TypeError(`Values given to isQuerySelector() must be inside of an object. "${typeof t}" given.`);
		for (const s in t) try {
			try {
				if (t[s] === null) throw new Error();
				document.querySelector(t[s]);
			} catch {
				throw new TypeError(`${s} must be a valid query selector. "${t[s]}" given.`);
			}
		} catch (i) {
			r.status = !1, r.errors.push(i);
		}
	} catch (s) {
		r.status = !1, r.errors.push(s);
	}
	if (e && !r.status) throw r.errors[0];
	return r;
}
function c(t, { shouldThrow: e = !0 } = {}) {
	const r = {
		status: !0,
		errors: []
	};
	try {
		if (typeof t != "object" || Array.isArray(t)) throw new TypeError(`Values given to isValidClassList() must be inside of an object. "${typeof t}" given.`);
		for (const s in t) try {
			const i = typeof t[s];
			if (i !== "string") if (Array.isArray(t[s])) t[s].forEach((o) => {
				if (typeof o != "string") throw new TypeError(`${s} must be a string or an array of strings. An array containing non-strings given.`);
			});
			else throw new TypeError(`${s} must be a string or an array of strings. "${i}" given.`);
			else {
				const o = {};
				o[s] = t[s], g(o);
			}
		} catch (i) {
			r.status = !1, r.errors.push(i);
		}
	} catch (s) {
		r.status = !1, r.errors.push(s);
	}
	if (e && !r.status) throw r.errors[0];
	return r;
}
function Q(t, { shouldThrow: e = !0 } = {}) {
	const r = {
		status: !0,
		errors: []
	};
	try {
		if (typeof t != "object") throw new TypeError(`Values given to isValidState() must be inside of an object. "${typeof t}" given.`);
		const s = [
			"none",
			"self",
			"child"
		];
		for (const i in t) try {
			if (!s.includes(t[i])) throw new TypeError(`${i} must be one of the following values: ${s.join(", ")}. "${t[i]}" given.`);
		} catch (o) {
			r.status = !1, r.errors.push(o);
		}
	} catch (s) {
		r.status = !1, r.errors.push(s);
	}
	if (e && !r.status) throw r.errors[0];
	return r;
}
function V(t, { shouldThrow: e = !0 } = {}) {
	const r = {
		status: !0,
		errors: []
	};
	try {
		if (typeof t != "object") throw new TypeError(`Values given to isValidEvent() must be inside of an object. "${typeof t}" given.`);
		const s = [
			"none",
			"mouse",
			"keyboard",
			"character"
		];
		for (const i in t) try {
			if (!s.includes(t[i])) throw new TypeError(`${i} must be one of the following values: ${s.join(", ")}. "${t[i]}" given.`);
		} catch (o) {
			r.status = !1, r.errors.push(o);
		}
	} catch (s) {
		r.status = !1, r.errors.push(s);
	}
	if (e && !r.status) throw r.errors[0];
	return r;
}
function E(t, e, { shouldThrow: r = !0 } = {}) {
	const s = {
		status: !0,
		errors: []
	};
	try {
		if (a("string", { tagName: t }, { shouldThrow: !0 }).status && u(HTMLElement, e, { shouldThrow: !0 }).status) {
			const i = t.toLowerCase();
			for (const o in e) try {
				if (e[o].tagName.toLowerCase() !== i) throw new TypeError(`${o} must be a <${i}> element. <${e[o].tagName.toLowerCase()}> given.`);
			} catch (n) {
				s.status = !1, s.errors.push(n);
			}
		}
	} catch (i) {
		s.status = !1, s.errors.push(i);
	}
	if (r && !s.status) throw s.errors[0];
	return s;
}
function P(t, e, { shouldThrow: r = !0 } = {}) {
	const s = {
		status: !0,
		errors: []
	};
	try {
		if (!Object.prototype.hasOwnProperty.call(e.events, t)) throw new TypeError(`Event type "${t}" is not valid for ${e.constructor.name}. Valid event types are: "${Object.keys(e.events).join("\", ")}".`);
	} catch (i) {
		s.status = !1, s.errors.push(i);
	}
	if (r && !s.status) throw s.errors[0];
	return s;
}
function K(t, { shouldThrow: e = !0 } = {}) {
	const r = {
		status: !0,
		errors: []
	};
	try {
		if (!Object.prototype.hasOwnProperty.call(t._dom, t._rootDOMElement)) throw new Error(`The root DOM element "${t._rootDOMElement}" does not exist in the ${t.constructor.name}'s _dom property. It must be one of the following: "${Object.keys(t._dom).join("\", \"")}".`);
	} catch (s) {
		r.status = !1, r.errors.push(s);
	}
	if (e && !r.status) throw r.errors[0];
	return r;
}
var p = class v {
	_scope;
	_type = "_default";
	_storage = {};
	_crush = !1;
	constructor({ scope: e, type: r = null, crush: s = !1, initialize: i = !0 } = {}) {
		this._scope = e, this._type = r || "_default", this._crush = s, i && this.initialize();
	}
	initialize() {
		try {
			!this._crush && typeof window[this.scope] < "u" && (u(v, { storage: window[this.scope] }, { shouldThrow: !1 }).status || typeof window[this.scope].storage < "u" && typeof window[this.scope].scope < "u" && typeof window[this.scope].type < "u") && (this._storage = window[this.scope].storage);
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
		a("string", { type: e }) && (this._type = e);
	}
	get storage() {
		return this._storage;
	}
	get({ type: e = this.type, key: r = null } = {}) {
		const s = a("string", { type: e });
		if (!s.status) throw new Error(`StorageManager (${this.scope}): ${s.message}`);
		if (!this.storage[e]) throw new Error(`StorageManager (${this.scope}): Type "${e}" is not initialized.`);
		if (r !== null) {
			const i = a("string", { key: r });
			if (!i.status) throw new Error(`StorageManager (${this.scope}): ${i.message}`);
			return this.storage[e][r];
		}
		return this.storage[e];
	}
	set({ type: e = this.type, key: r = null, data: s = {} } = {}) {
		const i = a("string", { type: e }), o = a("object", { data: s });
		if (!i.status) throw new Error(`StorageManager (${this.scope}): ${i.message}`);
		if (!o.status) throw new Error(`StorageManager (${this.scope}): ${o.message}`);
		if (r !== null) {
			const n = a("string", { key: r });
			if (!n.status) throw new Error(`StorageManager (${this.scope}): ${n.message}`);
			this._storage[e] || (this._storage[e] = {}), this._storage[e][r] = s;
		} else this._storage[e] = s;
	}
	clear({ type: e = this.type, key: r = null } = {}) {
		const s = a("string", { type: e });
		if (!s.status) throw new Error(`StorageManager (${this.scope}): ${s.message}`);
		if (r !== null) {
			const i = a("string", { key: r });
			if (!i.status) throw new Error(`StorageManager (${this.scope}): ${i.message}`);
			delete this.storage[e][r];
		} else delete this.storage[e];
	}
	dispose() {
		delete this._storage, delete this;
	}
}, F = class {
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
	constructor({ prefix: t = "graupl-", key: e = null, initializeClass: r = "initializing" } = {}) {
		this._classes.initialize = r || "", this._prefix = t || "", this._key = e || "";
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
		c({ initializeClass: t }), this._classes.initialize !== t && (this._classes.initialize = t);
	}
	get focusState() {
		return this._focusState;
	}
	set focusState(t) {
		Q({ focusState: t }), this._focusState !== t && (this._focusState = t);
	}
	get currentEvent() {
		return this._currentEvent;
	}
	set currentEvent(t) {
		V({ currentEvent: t }), this._currentEvent !== t && (this._currentEvent = t);
	}
	get shouldFocus() {
		let t = !1;
		return this.currentEvent === "keyboard" && (t = !0), t;
	}
	get breakpoint() {
		return this._breakpoint;
	}
	set breakpoint(t) {
		a("string", { breakpoint: t }), this._breakpoint !== t && (this._breakpoint = t);
	}
	get mediaQuery() {
		return this._mediaQueryString !== "" ? this._mediaQueryString : this._breakpoint === "" ? "" : `(width <= ${this._breakpoint})`;
	}
	set mediaQuery(t) {
		a("string", { mediaQuery: t }), this._mediaQueryString !== t && (this._mediaQueryString = t);
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
		const t = K(this, { shouldThrow: !1 });
		if (t.status || (this._errors = [...this._errors, ...t.errors], this._valid = !1), Object.keys(this._dom).length > 0) {
			const s = {};
			for (const o of Object.keys(this._dom)) Array.isArray(this._dom[o]) ? this._dom[o].forEach((n, f) => {
				s[`${o}Element[${f}]`] = n;
			}) : this._dom[o] !== null && (s[`${o}Element`] = this._dom[o]);
			const i = u(HTMLElement, s, { shouldThrow: !1 });
			i.status || (this._errors = [...this._errors, ...i.errors], this._valid = !1);
		}
		if (Object.keys(this._selectors).length > 0) {
			const s = {};
			for (const o of Object.keys(this._selectors)) s[`${o}Selector`] = this._selectors[o];
			const i = g(s, { shouldThrow: !1 });
			i.status || (this._errors = [...this._errors, ...i.errors], this._valid = !1);
		}
		if (Object.keys(this._classes).length > 0) {
			const s = {};
			for (const o of Object.keys(this._classes)) this._classes[o] !== "" && (s[`${o}Class`] = this._classes[o]);
			const i = c(s, { shouldThrow: !1 });
			i.status || (this._errors = [...this._errors, ...i.errors], this._valid = !1);
		}
		if (Object.keys(this._durations).length > 0) {
			const s = {};
			for (const o of Object.keys(this._durations)) s[`${o}Duration`] = this._durations[o];
			const i = a("number", s, { shouldThrow: !1 });
			i.status || (this._errors = [...this._errors, ...i.errors], this._valid = !1);
		}
		if (Object.keys(this.delays).length > 0) {
			const s = {};
			for (const o of Object.keys(this.delays)) s[`${o}Delay`] = this.delays[o];
			const i = a("number", s, { shouldThrow: !1 });
			i.status || (this._errors = [...this._errors, ...i.errors], this._valid = !1);
		}
		const e = {
			_storageKey: this._storageKey,
			key: this._key,
			prefix: this._prefix,
			mediaQuery: this._mediaQueryString,
			breakpoint: this._breakpoint
		};
		this._protectedDOMElements.forEach((s) => {
			e[`_protectedDOMElementType[${s}]`] = s;
		});
		const r = a("string", e, { shouldThrow: !1 });
		return r.status || (this._errors = [...this._errors, ...r.errors], this._valid = !1), this._dispatchEvent("validate", this.rootDOMElement), this._dispatchEvent("postvalidate", this.rootDOMElement), this._valid;
	}
	_generateKey(t = !1) {
		(this._key === "" || t) && (this._key = Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 10));
	}
	_setIds() {}
	_setAriaAttributes() {}
	_setCustomProps() {}
	_setDOMElementType(t, { context: e, overwrite: r = !0, strict: s = !1 } = {}) {
		if (typeof this.selectors[t] != "string") throw new Error(`Graupl ${this.name}: "${t}" is not a valid element type.`);
		if (this._rootDOMElement === t || this._protectedDOMElements.includes(t)) throw new Error(`Graupl ${this.name}: "${t}" element cannot be set through _setDOMElementType because it is a protected element.`);
		u(HTMLElement, { context: e });
		const i = Array.from(e.querySelectorAll(this.selectors[t])).filter((o) => s ? o.parentElement === e : !0);
		Array.isArray(this._dom[t]) ? r ? this._dom[t] = i : this._dom[t] = [...this._dom[t], ...i] : this._dom[t] = i[0] || null;
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
		this._shouldStore && (u(p, { storage: window.GrauplStorage }, { shouldThrow: !1 }).status || new p({ scope: "GrauplStorage" }), window.GrauplStorage.set({
			key: this.id !== "" ? this.id : this.key,
			type: this._storageKey,
			data: this
		}));
	}
	_unstore() {
		this._shouldStore && u(p, { storage: window.GrauplStorage }, { shouldThrow: !1 }).status && window.GrauplStorage.clear({
			key: this.id !== "" ? this.id : this.key,
			type: this._storageKey
		});
	}
	_setInterval(t, e, r = "_default") {
		this._clearInterval(r), this._intervals[r] = setInterval(t, e);
	}
	_clearInterval(t = "_default") {
		clearInterval(this._intervals[t]);
	}
	_clearIntervals() {
		for (const t of Object.keys(this._intervals)) this._clearInterval(t);
	}
	_setTimeout(t, e, r = "_default") {
		this._clearTimeout(r), this._timeouts[r] = setTimeout(t, e);
	}
	_clearTimeout(t = "_default") {
		clearTimeout(this._timeouts[t]);
	}
	_clearTimeouts() {
		for (const t of Object.keys(this._timeouts)) this._clearTimeout(t);
	}
	_registerEvent(t, { bubbles: e = !0, detail: r = {} } = {}) {
		a("string", { name: t }), a("boolean", { bubbles: e }), a("object", { detail: r });
		const s = `graupl${this.name}${t.charAt(0).toUpperCase()}${t.slice(1)}`;
		this._events[t] = new CustomEvent(s, {
			bubbles: e,
			detail: {
				component: this,
				...r
			}
		});
	}
	_dispatchEvent(t, e) {
		P(t, this), u(HTMLElement, { element: e }), e.dispatchEvent(this.events[t]);
	}
	_addEventListener(t, e, r, s = {}) {
		e.addEventListener(t, r, s), this._listeners.push({
			type: t,
			element: e,
			listener: r,
			options: s
		});
	}
	_removeEventListener(t, e, r, s = {}) {
		e.removeEventListener(t, r, s);
		let i = -1;
		this._listeners.forEach((o, n) => {
			o.type === t && o.element === e && o.listener === r && JSON.stringify(o.options) === JSON.stringify(s) && (i = n);
		}), i !== -1 && this._listeners.splice(i, 1);
	}
	_removeEventListeners({ type: t = null, element: e = null } = {}) {
		[...this._listeners].forEach((r) => {
			t !== null && r.type !== t || e !== null && r.element !== e || this._removeEventListener(r.type, r.element, r.listener, r.options);
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
}, G = class extends F {
	_rootDOMElement = "carousel";
	_currentItem = 0;
	_autoplay = !0;
	_playText = "Play";
	_pauseText = "Pause";
	_currentAction = "next";
	_storageKey = "carousels";
	_name = "Carousel";
	constructor({ carouselElement: t, carouselItemsSelector: e = ".carousel-item", carouselItemContainerSelector: r = ".carousel-item-container", carouselControlsSelector: s = ".carousel-control", carouselControlContainerSelector: i = ".carousel-control-container", carouselTabsSelector: o = ".carousel-tab", carouselTabContainerSelector: n = ".carousel-tab-container", autoplaySelector: f = ".autoplay", nextSelector: w = ".next", previousSelector: C = ".previous", activeClass: b = "active", previousClass: I = "previous", nextClass: T = "next", playClass: k = "play", pauseClass: $ = "pause", autoplay: A = !0, transitionDelay: O = 1e4, transitionDuration: x = 500, playText: D = "Play", pauseText: M = "Pause", prefix: S = "graupl-", key: L = null, initializeClass: j = "initializing", initialize: z = !1 }) {
		super({
			prefix: S,
			key: L,
			initializeClass: j
		}), this._dom.carousel = t, this._dom.carouselItems = [], this._dom.carouselItemContainer = null, this._dom.carouselControls = [], this._dom.carouselControlContainer = null, this._dom.carouselTabs = [], this._dom.carouselTabContainer = null, this._dom.autoplay = null, this._dom.next = null, this._dom.previous = null, this._selectors.carouselItems = e, this._selectors.carouselItemContainer = r, this._selectors.carouselControls = s, this._selectors.carouselControlContainer = i, this._selectors.carouselTabs = o, this._selectors.carouselTabContainer = n, this._selectors.autoplay = f, this._selectors.next = w, this._selectors.previous = C, this._classes.active = b || "", this._classes.previous = I || "", this._classes.next = T || "", this._classes.play = k || "", this._classes.pause = $ || "", this._autoplay = A, this._delays.transition = O, this._durations.transition = x, this._playText = D || "", this._pauseText = M || "", this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
			this._handleAutoplay(), this.dom.carouselItems.forEach((m) => {
				m.setAttribute("inert", "true");
			}), this.activateFirstItem();
		}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
			const m = a("boolean", { autoplay: this._autoplay }, { shouldThrow: !1 });
			m.status || (this._errors = [...this._errors, ...m.errors], this._valid = !1);
			const y = a("string", {
				playText: this._playText,
				pauseText: this._pauseText
			}, { shouldThrow: !1 });
			y.status || (this._errors = [...this._errors, ...y.errors], this._valid = !1);
		}), z && this.initialize();
	}
	get activeClass() {
		return this._classes.active;
	}
	set activeClass(t) {
		c({ activeClass: t }), this._classes.active !== t && (this._classes.active = t);
	}
	get previousClass() {
		return this._classes.previous;
	}
	set previousClass(t) {
		c({ previousClass: t }), this._classes.previous !== t && (this._classes.previous = t);
	}
	get nextClass() {
		return this._classes.next;
	}
	set nextClass(t) {
		c({ nextClass: t }), this._classes.next !== t && (this._classes.next = t);
	}
	get playClass() {
		return this._classes.play;
	}
	set playClass(t) {
		c({ playClass: t }), this._classes.play !== t && (this._classes.play = t);
	}
	get pauseClass() {
		return this._classes.pause;
	}
	set pauseClass(t) {
		c({ pauseClass: t }), this._classes.pause !== t && (this._classes.pause = t);
	}
	get currentItem() {
		return this._currentItem;
	}
	set currentItem(t) {
		a("number", { currentItem: t }), t !== this.currentItem && (t < 0 ? this._currentItem = 0 : t >= this.dom.carouselItems.length ? this._currentItem = this.dom.carouselItems.length - 1 : this._currentItem = t, this._dom.carousel.querySelectorAll(this.selectors.carouselTab) && this.dom.carouselItems.forEach((e, r) => {
			e.setAttribute("aria-selected", r === this._currentItem);
		}));
	}
	get currentCarouselItem() {
		return this.dom.carouselItems[this.currentItem];
	}
	get currentCarouselTab() {
		return this.dom.carouselTabs[this.currentItem];
	}
	get autoplay() {
		return this._autoplay;
	}
	set autoplay(t) {
		a("boolean", { autoplay: t }), this._autoplay !== t && (this._autoplay = t);
	}
	get transitionDelay() {
		return this._delays.transition;
	}
	set transitionDelay(t) {
		a("number", { transitionDelay: t }), t !== this.transitionDelay && t >= 0 && (this._delays.transition = t);
	}
	get transitionDuration() {
		return this._durations.transition;
	}
	set transitionDuration(t) {
		a("number", { transitionDuration: t }), this._durations.transition !== t && t >= 0 && (this._durations.transition = t, this._setTransitionDuration());
	}
	get playText() {
		return this._playText;
	}
	set playText(t) {
		a("string", { playText: t }), this._playText !== t && (this._playText = t);
	}
	get pauseText() {
		return this._pauseText;
	}
	set pauseText(t) {
		a("string", { pauseText: t }), this._pauseText !== t && (this._pauseText = t);
	}
	get currentAction() {
		return this._currentAction;
	}
	_setDOMElements() {
		this._setDOMElementType("carouselItemContainer", { context: this.dom.carousel }), this._setDOMElementType("carouselControlContainer", { context: this.dom.carousel }), this._setDOMElementType("carouselTabContainer", { context: this.dom.carousel }), this.dom.carouselItemContainer && this._setDOMElementType("carouselItems", { context: this.dom.carouselItemContainer }), this.dom.carouselControlContainer && (this._setDOMElementType("carouselControls", { context: this.dom.carouselControlContainer }), this._setDOMElementType("autoplay", { context: this.dom.carouselControlContainer }), this._setDOMElementType("next", { context: this.dom.carouselControlContainer }), this._setDOMElementType("previous", { context: this.dom.carouselControlContainer })), this._dom.carouselTabContainer && this._setDOMElementType("carouselTabs", { context: this.dom.carouselTabContainer });
	}
	_setIds() {
		this.dom.carousel.id = this.dom.carousel.id || `carousel-${this.key}`, this.dom.carouselItems.forEach((t, e) => {
			t.id = t.id || `carousel-item-${this.key}-${e}`;
		}), this.dom.carouselTabs.forEach((t, e) => {
			t.id = t.id || `carousel-tab-${this.key}-${e}`;
		}), this._id = this.dom.carousel.id;
	}
	_setAriaAttributes() {
		!E("section", { carousel: this.dom.carousel }, { shouldThrow: !1 }).status && !this.dom.carousel.getAttribute("role") !== "region" && this.dom.carousel.setAttribute("role", "group"), this._dom.carousel.setAttribute("aria-roledescription", "carousel"), this.dom.carouselTabContainer && this.dom.carouselTabContainer.setAttribute("role", "tablist"), this.dom.carouselTabs.forEach((t, e) => {
			E("button", { tab: t }, { shouldThrow: !1 }).status || t.setAttribute("role", "button"), t.setAttribute("aria-selected", e === 0), t.setAttribute("aria-controls", this.dom.carouselItems[e].id);
		});
	}
	_setCustomProps() {
		this.dom.carousel.style.setProperty(`--${this.prefix}carousel-transition-duration`, `${this.transitionDuration}ms`);
	}
	_handleAutoplay() {
		this.autoplay ? (h(this.pauseClass, this.dom.autoplay), l(this.playClass, this.dom.autoplay), this.dom.autoplay.setAttribute("aria-label", this.pauseText), this.dom.carousel.setAttribute("aria-live", "off"), this._setInterval(() => this.activateNextItem(), this.transitionDelay)) : (h(this.playClass, this.dom.autoplay), l(this.pauseClass, this.dom.autoplay), this.dom.autoplay.setAttribute("aria-label", this.playText), this.dom.carousel.setAttribute("aria-live", "polite"), this._clearInterval());
	}
	_handleFocus() {
		this._addEventListener("focusin", this.dom.carousel, () => {
			this.autoplay && this._clearInterval();
		}), this._addEventListener("focusout", this.dom.carousel, () => {
			this.autoplay && this._setInterval(() => this.activateNextItem(), this.transitionDelay);
		});
	}
	_handleClick() {
		this._addEventListener("click", this.dom.next, () => {
			this.activateNextItem();
		}), this._addEventListener("click", this.dom.previous, () => {
			this.activatePreviousItem();
		}), this._addEventListener("click", this.dom.autoplay, () => {
			this.toggleAutoplay();
		}), this.dom.carouselTabs.forEach((t, e) => {
			this._addEventListener("click", t, () => {
				this.currentItem > e ? this._currentAction = "previous" : this._currentAction = "next", this.activateItem(e);
			});
		});
	}
	_handleHover() {
		this._addEventListener("pointerover", this.dom.carousel, () => {
			this.autoplay && this._clearInterval();
		}), this._addEventListener("pointerleave", this.dom.carousel, () => {
			this.autoplay && this._setInterval(() => this.activateNextItem(), this.transitionDelay);
		});
	}
	_handleKeydown() {
		this.dom.carouselControls.forEach((t) => {
			this._addEventListener("keydown", t, (e) => {
				switch (d(e)) {
					case "Space":
					case "Enter":
						_(e);
						break;
				}
			});
		}), this.dom.carouselTabs.forEach((t) => {
			this._addEventListener("keydown", t, (e) => {
				switch (d(e)) {
					case "Space":
					case "Enter":
						_(e);
						break;
				}
			});
		});
	}
	_handleKeyup() {
		this._addEventListener("keyup", this.dom.next, (t) => {
			switch (d(t)) {
				case "Space":
				case "Enter":
					this.activateNextItem(), _(t);
					break;
			}
		}), this._addEventListener("keyup", this.dom.previous, (t) => {
			switch (d(t)) {
				case "Space":
				case "Enter":
					this.activatePreviousItem(), _(t);
					break;
			}
		}), this._addEventListener("keyup", this.dom.autoplay, (t) => {
			switch (d(t)) {
				case "Space":
				case "Enter":
					this.toggleAutoplay(), _(t);
					break;
			}
		}), this.dom.carouselTabs.forEach((t, e) => {
			this._addEventListener("keyup", t, (r) => {
				switch (d(r)) {
					case "Space":
					case "Enter":
						this.activateItem(e), _(r);
						break;
				}
			});
		});
	}
	activateCurrentItem() {
		h(this.activeClass, this.currentCarouselItem), this.currentCarouselItem.removeAttribute("inert"), this.currentCarouselTab && (this.currentCarouselTab.setAttribute("aria-selected", !0), h(this.activeClass, this.currentCarouselTab));
	}
	deactivateCurrentItem() {
		l(this.activeClass, this.currentCarouselItem), this.currentCarouselItem.setAttribute("inert", !0), this.currentCarouselTab && (this.currentCarouselTab.setAttribute("aria-selected", !1), l(this.activeClass, this.currentCarouselTab));
	}
	activateItem(t) {
		const e = this.currentItem;
		this.dom.carousel.dataset.grauplAction = this._currentAction, this.autoplay && this._clearInterval(), h(this.previousClass, this.currentCarouselItem), h(this.nextClass, this.dom.carouselItems[t]), requestAnimationFrame(() => {
			this.deactivateCurrentItem(), this.currentItem = t, this.activateCurrentItem(), requestAnimationFrame(() => {
				setTimeout(() => {
					l(this.previousClass, this.dom.carouselItems[e]), l(this.nextClass, this.currentCarouselItem);
				}, this.transitionDuration);
			});
		}), this.autoplay && this._setInterval(() => this.activateNextItem(), this.transitionDelay);
	}
	activateFirstItem() {
		this.activateItem(0);
	}
	activateLastItem() {
		this.activateItem(this.dom.carouselItems.length - 1);
	}
	activateNextItem() {
		this._currentAction = "next", this.currentItem + 1 >= this.dom.carouselItems.length ? this.activateFirstItem() : this.activateItem(this.currentItem + 1);
	}
	activatePreviousItem() {
		this._currentAction = "previous", this.currentItem - 1 < 0 ? this.activateLastItem() : this.activateItem(this.currentItem - 1);
	}
	toggleAutoplay() {
		this.autoplay = !this.autoplay, this._handleAutoplay();
	}
};
export { G as default };

//# sourceMappingURL=carousel.es.js.map