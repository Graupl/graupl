var TabsGenerator = (function() {
	function u(t, e, { shouldThrow: s = !0 } = {}) {
		const i = {
			status: !0,
			errors: []
		};
		try {
			if (typeof e != "object") throw new TypeError(`Elements given to isValidInstance() must be inside of an object. "${typeof e}" given.`);
			for (const r in e) try {
				if (!(e[r] instanceof t)) {
					const n = typeof e[r];
					throw new TypeError(`${r} must be an instance of ${t.name}. "${n}" given.`);
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
	function o(t, e, { shouldThrow: s = !0 } = {}) {
		const i = {
			status: !0,
			errors: []
		};
		try {
			if (typeof e != "object") throw new TypeError(`Values given to isValidType() must be inside of an object. "${typeof e}" given.`);
			for (const r in e) try {
				const n = typeof e[r];
				if (n !== t) throw new TypeError(`${r} must be a ${t}. "${n}" given.`);
			} catch (n) {
				i.status = !1, i.errors.push(n);
			}
		} catch (r) {
			i.status = !1, i.errors.push(r);
		}
		if (s && !i.status) throw i.errors[0];
		return i;
	}
	function Q(t, { shouldThrow: e = !0 } = {}) {
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
	function d(t, { shouldThrow: e = !0 } = {}) {
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
		if (e && !s.status) throw s.errors[0];
		return s;
	}
	function P(t, { shouldThrow: e = !0 } = {}) {
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
			} catch (n) {
				s.status = !1, s.errors.push(n);
			}
		} catch (i) {
			s.status = !1, s.errors.push(i);
		}
		if (e && !s.status) throw s.errors[0];
		return s;
	}
	function U(t, { shouldThrow: e = !0 } = {}) {
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
			} catch (n) {
				s.status = !1, s.errors.push(n);
			}
		} catch (i) {
			s.status = !1, s.errors.push(i);
		}
		if (e && !s.status) throw s.errors[0];
		return s;
	}
	function q(t, e, { shouldThrow: s = !0 } = {}) {
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
	function G(t, { shouldThrow: e = !0 } = {}) {
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
	function V(t) {
		return o("string", { value: t }), `${t.charAt(0).toLowerCase()}${t.slice(1)}`;
	}
	function A(t) {
		return o("string", { value: t }), `${t.charAt(0).toUpperCase()}${t.slice(1)}`;
	}
	var C = class j {
		_scope;
		_type = "_default";
		_storage = {};
		_crush = !1;
		constructor({ scope: e, type: s = null, crush: i = !1, initialize: r = !0 } = {}) {
			this._scope = e, this._type = s || "_default", this._crush = i, r && this.initialize();
		}
		initialize() {
			try {
				!this._crush && typeof window[this.scope] < "u" && (u(j, { storage: window[this.scope] }, { shouldThrow: !1 }).status || typeof window[this.scope].storage < "u" && typeof window[this.scope].scope < "u" && typeof window[this.scope].type < "u") && (this._storage = window[this.scope].storage);
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
			o("string", { type: e }) && (this._type = e);
		}
		get storage() {
			return this._storage;
		}
		get({ type: e = this.type, key: s = null } = {}) {
			const i = o("string", { type: e }, { shouldThrow: !1 });
			if (!i.status) throw i.errors[0];
			if (!this.storage[e]) throw new Error(`StorageManager (${this.scope}): Type "${e}" is not initialized.`);
			if (s !== null) {
				const r = o("string", { key: s }, { shouldThrow: !1 });
				if (!r.status) throw r.errors[0];
				return this.storage[e][s];
			}
			return this.storage[e];
		}
		set({ type: e = this.type, key: s = null, data: i = {} } = {}) {
			const r = o("string", { type: e }, { shouldThrow: !1 }), n = o("object", { data: i }, { shouldThrow: !1 });
			if (!r.status) throw r.errors[0];
			if (!n.status) throw n.errors[0];
			if (s !== null) {
				const l = o("string", { key: s }, { shouldThrow: !1 });
				if (!l.status) throw l.errors[0];
				this._storage[e] || (this._storage[e] = {}), this._storage[e][s] = i;
			} else this._storage[e] = i;
		}
		clear({ type: e = this.type, key: s = null } = {}) {
			const i = o("string", { type: e }, { shouldThrow: !1 });
			if (!i.status) throw i.errors[0];
			if (s !== null) {
				const r = o("string", { key: s }, { shouldThrow: !1 });
				if (!r.status) throw r.errors[0];
				delete this.storage[e][s];
			} else delete this.storage[e];
		}
		dispose() {
			typeof window < "u" && window[this.scope] === this && delete window[this.scope], delete this._storage;
		}
	};
	function c(t, e) {
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
	var L = class {
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
		constructor({ prefix: t = "ae-", key: e = null, initializeClass: s = "initializing", emit: i = !0, bootstrap: r = !0, initialize: n = !0 } = {}) {
			this._classes.initialize = s || "", this._prefix = t || "", this._key = e || "", this._shouldEmit = i, r && this._bootstrap(), n && this.initialize();
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
				c(this.initializeClass, this.rootDOMElement), this._dispatchEvent("preinitialize", this.rootDOMElement), this._generateKey(), this._setDOMElements(), this._setIds(), this._setAriaAttributes(), this._setCustomProps(), this._createChildElements(), this._handleFocus(), this._handleHover(), this._handleClick(), this._handleKeydown(), this._handleKeyup(), this._dispatchEvent("initialize", this.rootDOMElement), this._store(), h(this.initializeClass, this.rootDOMElement), this._initialized = !0, this._dispatchEvent("postinitialize", this.rootDOMElement);
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
			d({ initializeClass: t }), this._classes.initialize !== t && (this._classes.initialize = t);
		}
		get focusState() {
			return this._focusState;
		}
		set focusState(t) {
			P({ focusState: t }), this._focusState !== t && (this._focusState = t);
		}
		get currentEvent() {
			return this._currentEvent;
		}
		set currentEvent(t) {
			U({ currentEvent: t }), this._currentEvent !== t && (this._currentEvent = t);
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
			return this._eventPrefix !== "" ? this._eventPrefix : `${V(this.scope)}${A(this.name)}`;
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
			o("boolean", { shouldEmit: t }), this._shouldEmit = t;
		}
		get errors() {
			return this._errors;
		}
		_validate() {
			this._errors = [], this._valid = !0, this._dispatchEvent("prevalidate", this.rootDOMElement);
			const t = G(this, { shouldThrow: !1 });
			if (t.status || (this._errors = [...this._errors, ...t.errors], this._valid = !1), Object.keys(this._dom).length > 0) {
				const n = {};
				for (const a of Object.keys(this._dom)) Array.isArray(this._dom[a]) ? this._dom[a].forEach((_, f) => {
					n[`${a}Element[${f}]`] = _;
				}) : this._dom[a] !== null && (n[`${a}Element`] = this._dom[a]);
				const l = u(HTMLElement, n, { shouldThrow: !1 });
				l.status || (this._errors = [...this._errors, ...l.errors], this._valid = !1);
			}
			if (Object.keys(this._selectors).length > 0) {
				const n = {};
				for (const a of Object.keys(this._selectors)) this._selectors[a] !== "" && (n[`${a}Selector`] = this._selectors[a]);
				const l = Q(n, { shouldThrow: !1 });
				l.status || (this._errors = [...this._errors, ...l.errors], this._valid = !1);
			}
			if (Object.keys(this._classes).length > 0) {
				const n = {};
				for (const a of Object.keys(this._classes)) this._classes[a] !== "" && (n[`${a}Class`] = this._classes[a]);
				const l = d(n, { shouldThrow: !1 });
				l.status || (this._errors = [...this._errors, ...l.errors], this._valid = !1);
			}
			if (Object.keys(this._durations).length > 0) {
				const n = {};
				for (const a of Object.keys(this._durations)) n[`${a}Duration`] = this._durations[a];
				const l = o("number", n, { shouldThrow: !1 });
				l.status || (this._errors = [...this._errors, ...l.errors], this._valid = !1);
			}
			if (Object.keys(this.delays).length > 0) {
				const n = {};
				for (const a of Object.keys(this.delays)) n[`${a}Delay`] = this.delays[a];
				const l = o("number", n, { shouldThrow: !1 });
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
			this._protectedDOMElements.forEach((n) => {
				e[`_protectedDOMElementType[${n}]`] = n;
			});
			const s = o("string", e, { shouldThrow: !1 });
			s.status || (this._errors = [...this._errors, ...s.errors], this._valid = !1);
			const r = o("boolean", {
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
			const r = Array.from(e.querySelectorAll(this.selectors[t])).filter((n) => i ? n.parentElement === e : !0);
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
			this._shouldStore && (u(C, { storage: window[`${this.scope}Storage`] }, { shouldThrow: !1 }).status || new C({ scope: `${this.scope}Storage` }), window[`${this.scope}Storage`].set({
				key: this.id !== "" ? this.id : this.key,
				type: this._storageKey,
				data: this
			}));
		}
		_unstore() {
			this._shouldStore && u(C, { storage: window[`${this.scope}Storage`] }, { shouldThrow: !1 }).status && window[`${this.scope}Storage`].clear({
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
			o("string", { name: t }), o("boolean", { bubbles: e }), o("object", { detail: s });
			const i = `${this.eventPrefix}${A(t)}`;
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
			q(t, this), o("boolean", { emit: s }), s && this.shouldEmit && u(HTMLElement, { element: e });
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
			this._listeners = this._listeners.filter((n) => {
				const l = n.options, a = typeof l == "boolean" ? l : !!l?.capture;
				return !(n.type === t && n.element === e && n.listener === s && a === r);
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
	}, K = class extends L {
		_name = "ResponsiveComponent";
		_breakpoint = "";
		_mediaQueryString = "";
		_mediaQueryList = null;
		constructor({ breakpoint: t = "", mediaQuery: e = "", prefix: s = "ae-", key: i = null, initializeClass: r = "initializing", emit: n = !0, bootstrap: l = !0, initialize: a = !0 } = {}) {
			super({
				prefix: s,
				key: i,
				initializeClass: r,
				emit: n,
				bootstrap: !1,
				initialize: !1
			}), this._breakpoint = t || "", this._mediaQueryString = e || "", l && this._bootstrap(), a && this.initialize();
		}
		_registerEvents() {
			super._registerEvents(), this._addInternalEventListener(this.getEventName("validate"), (t) => {
				if (t.detail.component !== this) return;
				const s = o("string", {
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
			o("string", { breakpoint: t }), this._breakpoint !== t && (this._breakpoint = t, this.isInitialized && this._handleMediaMatch());
		}
		get mediaQuery() {
			return this._mediaQueryString !== "" ? this._mediaQueryString : this._breakpoint === "" ? "" : `(width <= ${this._breakpoint})`;
		}
		set mediaQuery(t) {
			o("string", { mediaQuery: t }), this._mediaQueryString !== t && (this._mediaQueryString = t, this.isInitialized && this._handleMediaMatch());
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
	}, z = class {
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
	}, N = class extends K {
		_name = "CollapsibleComponent";
		_expanded = new z(!1);
		_locked = new z(!1);
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
		constructor({ controlledElement: t, controllerElement: e = null, triggerElement: s = null, lockClass: i = "locked", unlockClass: r = "unlocked", expandClass: n = "show", collapseClass: l = "hide", transitionClass: a = "transitioning", transitionDelay: _ = 250, transitionDuration: f = 150, expandDuration: T = -1, collapseDuration: D = -1, expandInsideBreakpoint: B = !1, expandOutsideBreakpoint: I = !1, collapseInsideBreakpoint: E = !1, collapseOutsideBreakpoint: b = !1, lockInsideBreakpoint: y = !1, lockOutsideBreakpoint: w = !1, unlockInsideBreakpoint: $ = !1, unlockOutsideBreakpoint: W = !1, expandOnFocus: X = !1, collapseOnBlur: Y = !1, expanded: tt = !1, locked: et = !1, breakpoint: st = "", mediaQuery: it = "", prefix: rt = "ae-", key: nt = null, initializeClass: ot = "initializing", emit: at = !0, bootstrap: lt = !0, initialize: ht = !0 } = {}) {
			super({
				breakpoint: st,
				mediaQuery: it,
				prefix: rt,
				key: nt,
				initializeClass: ot,
				emit: at,
				bootstrap: !1,
				initialize: !1
			}), this._dom.controller = e, this._dom.trigger = s ?? e, this._dom.controlled = t, this._protectedDOMElements.push("controller", "trigger", "controlled"), this._classes.locked = i || "", this._classes.unlocked = r || "", this._classes.expand = n || "", this._classes.collapse = l || "", this._classes.transition = a || "", this._delays.transition = _, this._durations.transition = f, this._durations.expand = T, this._durations.collapse = D, this._expandInsideBreakpoint = B, this._expandOutsideBreakpoint = I, this._collapseInsideBreakpoint = E, this._collapseOutsideBreakpoint = b, this._lockInsideBreakpoint = y, this._lockOutsideBreakpoint = w, this._unlockInsideBreakpoint = $, this._unlockOutsideBreakpoint = W, this._expandOnFocus = X, this._collapseOnBlur = Y, this._expanded.value = tt, this._expanded.commit(), this._locked.value = et, this._locked.commit(), lt && this._bootstrap(), ht && this.initialize();
		}
		_registerEvents() {
			super._registerEvents(), this._registerEvent("preexpand"), this._registerEvent("expand"), this._registerEvent("postexpand"), this._registerEvent("precollapse"), this._registerEvent("collapse"), this._registerEvent("postcollapse"), this._registerEvent("prelock"), this._registerEvent("lock"), this._registerEvent("postlock"), this._registerEvent("preunlock"), this._registerEvent("unlock"), this._registerEvent("postunlock"), this._addInternalEventListener(this.getEventName("validate"), (t) => {
				if (t.detail.component !== this) return;
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
			}), this._addInternalEventListener(this.getEventName("initialize"), (t) => {
				t.detail.component === this && (this.isExpanded ? this.expand() : this.collapse(), this.isLocked ? this.lock() : this.unlock());
			});
		}
		get lockedClass() {
			return this._classes.locked;
		}
		set lockedClass(t) {
			d({ lockedClass: t }), this._classes.locked !== t && (this._classes.locked = t);
		}
		get unlockedClass() {
			return this._classes.unlocked;
		}
		set unlockedClass(t) {
			d({ unlockedClass: t }), this._classes.unlocked !== t && (this._classes.unlocked = t);
		}
		get expandClass() {
			return this._classes.expand;
		}
		set expandClass(t) {
			d({ expandClass: t }), this._classes.expand !== t && (this._classes.expand = t);
		}
		get collapseClass() {
			return this._classes.collapse;
		}
		set collapseClass(t) {
			d({ collapseClass: t }), this._classes.collapse !== t && (this._classes.collapse = t);
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
			o("number", { transitionDuration: t }), this._durations.transition !== t && (this._durations.transition = t, this._setCustomProps());
		}
		get expandDuration() {
			return this._durations.expand === -1 ? this.transitionDuration : this._durations.expand;
		}
		set expandDuration(t) {
			o("number", { expandDuration: t }), this._durations.expand !== t && (this._durations.expand = t, this._setCustomProps());
		}
		get collapseDuration() {
			return this._durations.collapse === -1 ? this.transitionDuration : this._durations.collapse;
		}
		set collapseDuration(t) {
			o("number", { collapseDuration: t }), this._durations.collapse !== t && (this._durations.collapse = t, this._setCustomProps());
		}
		get expandOnFocus() {
			return this._expandOnFocus;
		}
		set expandOnFocus(t) {
			o("boolean", { expandOnFocus: t }), this._expandOnFocus !== t && (this._expandOnFocus = t);
		}
		get collapseOnBlur() {
			return this._collapseOnBlur;
		}
		set collapseOnBlur(t) {
			o("boolean", { collapseOnBlur: t }), this._collapseOnBlur !== t && (this._collapseOnBlur = t);
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
			o("boolean", { expandInsideBreakpoint: t }), this._expandInsideBreakpoint !== t && (this._expandInsideBreakpoint = t);
		}
		get expandOutsideBreakpoint() {
			return this._expandOutsideBreakpoint;
		}
		set expandOutsideBreakpoint(t) {
			o("boolean", { expandOutsideBreakpoint: t }), this._expandOutsideBreakpoint !== t && (this._expandOutsideBreakpoint = t);
		}
		get collapseInsideBreakpoint() {
			return this._collapseInsideBreakpoint;
		}
		set collapseInsideBreakpoint(t) {
			o("boolean", { collapseInsideBreakpoint: t }), this._collapseInsideBreakpoint !== t && (this._collapseInsideBreakpoint = t);
		}
		get collapseOutsideBreakpoint() {
			return this._collapseOutsideBreakpoint;
		}
		set collapseOutsideBreakpoint(t) {
			o("boolean", { collapseOutsideBreakpoint: t }), this._collapseOutsideBreakpoint !== t && (this._collapseOutsideBreakpoint = t);
		}
		get lockInsideBreakpoint() {
			return this._lockInsideBreakpoint;
		}
		set lockInsideBreakpoint(t) {
			o("boolean", { lockInsideBreakpoint: t }), this._lockInsideBreakpoint !== t && (this._lockInsideBreakpoint = t);
		}
		get lockOutsideBreakpoint() {
			return this._lockOutsideBreakpoint;
		}
		set lockOutsideBreakpoint(t) {
			o("boolean", { lockOutsideBreakpoint: t }), this._lockOutsideBreakpoint !== t && (this._lockOutsideBreakpoint = t);
		}
		get unlockInsideBreakpoint() {
			return this._unlockInsideBreakpoint;
		}
		set unlockInsideBreakpoint(t) {
			o("boolean", { unlockInsideBreakpoint: t }), this._unlockInsideBreakpoint = t;
		}
		get unlockOutsideBreakpoint() {
			return this._unlockOutsideBreakpoint;
		}
		set unlockOutsideBreakpoint(t) {
			o("boolean", { unlockOutsideBreakpoint: t }), this._unlockOutsideBreakpoint = t;
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
			this._dispatchEvent("preexpand", this.rootDOMElement, { emit: t }), this._cancelAnimationFrame("expandTransition"), this._cancelAnimationFrame("collapseTransition"), this._clearTimeout("expandTransition"), this._clearTimeout("collapseTransition"), e && this.transitionClass !== "" ? (c(this.transitionClass, this.dom.controlled), this._requestAnimationFrame(() => {
				h(this.collapseClass, this.dom.controlled), this._requestAnimationFrame(() => {
					c(this.expandClass, this.dom.controlled), this._requestAnimationFrame(() => {
						this._setTimeout(() => {
							h(this.transitionClass, this.dom.controlled), this._dispatchEvent("postexpand", this.rootDOMElement, { emit: t });
						}, this.expandDuration, "expandTransition");
					}, "expandTransition"), this._dispatchEvent("expand", this.rootDOMElement, { emit: t });
				}, "expandTransition");
			}, "expandTransition")) : (h(this.transitionClass, this.dom.controlled), c(this.expandClass, this.dom.controlled), h(this.collapseClass, this.dom.controlled), this._dispatchEvent("expand", this.rootDOMElement, { emit: t }), this._dispatchEvent("postexpand", this.rootDOMElement, { emit: t }));
		}
		_collapse({ emit: t = this.isInitialized && this.shouldEmit, transition: e = this.isInitialized } = {}) {
			this._dispatchEvent("precollapse", this.rootDOMElement, { emit: t }), this._cancelAnimationFrame("expandTransition"), this._cancelAnimationFrame("collapseTransition"), this._clearTimeout("expandTransition"), this._clearTimeout("collapseTransition"), e && this.transitionClass !== "" ? (c(this.transitionClass, this.dom.controlled), this._requestAnimationFrame(() => {
				h(this.expandClass, this.dom.controlled), this._requestAnimationFrame(() => {
					c(this.collapseClass, this.dom.controlled), this._requestAnimationFrame(() => {
						this._setTimeout(() => {
							h(this.transitionClass, this.dom.controlled), this._dispatchEvent("postcollapse", this.rootDOMElement, { emit: t });
						}, this.collapseDuration, "collapseTransition");
					}, "collapseTransition"), this._dispatchEvent("collapse", this.rootDOMElement, { emit: t });
				}, "collapseTransition");
			}, "collapseTransition")) : (h(this.transitionClass, this.dom.controlled), c(this.collapseClass, this.dom.controlled), h(this.expandClass, this.dom.controlled), this._dispatchEvent("collapse", this.rootDOMElement, { emit: t }), this._dispatchEvent("postcollapse", this.rootDOMElement, { emit: t }));
		}
		_lock({ emit: t = this.isInitialized && this.shouldEmit } = {}) {
			this._dispatchEvent("prelock", this.rootDOMElement, { emit: t }), c(this.lockedClass, this.dom.controlled), h(this.unlockedClass, this.dom.controlled), this.dom.controller?.setAttribute("disabled", "true"), this._dispatchEvent("lock", this.rootDOMElement, { emit: t }), this._dispatchEvent("postlock", this.rootDOMElement, { emit: t });
		}
		_unlock({ emit: t = this.isInitialized && this.shouldEmit } = {}) {
			this._dispatchEvent("preunlock", this.rootDOMElement, { emit: t }), c(this.unlockedClass, this.dom.controlled), h(this.lockedClass, this.dom.controlled), this.dom.controller?.removeAttribute("disabled"), this._dispatchEvent("unlock", this.rootDOMElement, { emit: t }), this._dispatchEvent("postunlock", this.rootDOMElement, { emit: t });
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
	}, H = class extends N {
		_scope = "Graupl";
		_rootDOMElement = "toggle";
		_storageKey = "tabToggles";
		_name = "TabToggle";
		_shouldStore = !1;
		constructor({ toggleElement: t, contentElement: e, parentTab: s } = {}) {
			super({
				controllerElement: t,
				controlledElement: e,
				expandClass: s.classes.expand,
				collapseClass: s.classes.collapse,
				transitionClass: s.classes.transition,
				transitionDuration: s.durations.transition,
				expandDuration: s.durations.expand,
				collapseDuration: s.durations.collapse,
				bootstrap: !1,
				initialize: !1,
				prefix: s.prefix,
				key: s.key
			}), this._protectedDOMElements.push("content"), this._dom.toggle = t, this._dom.content = e, this._elements.parent = s, this._bootstrap();
		}
		_registerEvents() {
			super._registerEvents(), this._addInternalEventListener(this.getEventName("preinitialize"), () => {
				this._expanded.value = this.dom.toggle.getAttribute("aria-selected") === "true", this._expanded.commit();
			}), this._addInternalEventListener(this.getEventName("preexpand"), () => {
				this.dom.toggle.setAttribute("aria-selected", "true"), this.dom.toggle.setAttribute("tabindex", "0");
			}), this._addInternalEventListener(this.getEventName("precollapse"), () => {
				this.dom.toggle.setAttribute("aria-selected", "false"), this.dom.toggle.setAttribute("tabindex", "-1");
			});
		}
		get isActive() {
			return console.warn("Graupl TabToggle.isActive is deprecated and will be removed. Use isExpanded instead."), this.isExpanded;
		}
		get currentEvent() {
			return this.elements.parent ? this.elements.parent.currentEvent : super.currentEvent;
		}
		set currentEvent(t) {
			this.elements.parent ? this.elements.parent.currentEvent = t : super.currentEvent = t;
		}
		get shouldFocus() {
			return this.elements.parent ? this.elements.parent.shouldFocus : super.shouldFocus;
		}
		get expandClass() {
			return this.elements.parent.expandClass;
		}
		set expandClass(t) {
			this.elements.parent.expandClass = t, this._classes.expand = t;
		}
		get collapseClass() {
			return this.elements.parent.collapseClass;
		}
		set collapseClass(t) {
			this.elements.parent.collapseClass = t, this._classes.collapse = t;
		}
		get transitionClass() {
			return this.elements.parent.transitionClass;
		}
		set transitionClass(t) {
			this.elements.parent.transitionClass = t, this._classes.transition = t;
		}
		get transitionDuration() {
			return this.elements.parent.transitionDuration;
		}
		set transitionDuration(t) {
			this.elements.parent.transitionDuration = t, this._durations.transition = t;
		}
		get expandDuration() {
			return this.elements.parent.expandDuration;
		}
		set expandDuration(t) {
			this.elements.parent.expandDuration = t, this._durations.expand = t;
		}
		get collapseDuration() {
			return this.elements.parent.collapseDuration;
		}
		set collapseDuration(t) {
			this.elements.parent.collapseDuration = t, this._durations.collapse = t;
		}
		_setIds() {
			const { key: t } = this.elements.parent, e = this.elements.parent.dom.tabToggles.indexOf(this.dom.toggle);
			this.dom.toggle.id = this.dom.toggle.id || `tab-toggle-${t}-${e}`, this.dom.content.id = this.dom.content.id || `tab-content-${t}-${e}`, this._id = this.dom.toggle.id;
		}
		_setAriaAttributes() {
			this.dom.toggle.setAttribute("role", "tab"), this.dom.toggle.getAttribute("aria-selected") !== "true" && this.dom.toggle.setAttribute("aria-selected", "false"), this.dom.toggle.setAttribute("aria-controls", this.dom.content.id), this.dom.content.setAttribute("role", "tabpanel"), this.dom.content.setAttribute("aria-labelledby", this.dom.toggle.id);
		}
		_canSelect({ force: t = !this.isInitialized } = {}) {
			return t || !this.elements.parent.elements.tabToggles.some((e) => e !== this && e.isExpanded && e.isLocked);
		}
		expand(t = {}) {
			this._canSelect(t) && super.expand(t);
		}
		preview(t = {}) {
			this._canSelect(t) && super.preview(t);
		}
		collapseSiblings(t = {}) {
			this.elements.parent && this.elements.parent.elements.tabToggles.forEach((e) => {
				e !== this && e.isExpanded && e.collapse(t);
			});
		}
		show(...t) {
			return console.warn("Graupl TabToggle.show() is deprecated and will be removed. Use expand() instead."), this.expand(...t);
		}
		hide(...t) {
			return console.warn("Graupl TabToggle.hide() is deprecated and will be removed. Use collapse() instead."), this.collapse(...t);
		}
		hideSiblings(...t) {
			return console.warn("Graupl TabToggle.hideSiblings() is deprecated and will be removed. Use collapseSiblings() instead."), this.collapseSiblings(...t);
		}
	};
	function M(t) {
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
	function p(t) {
		t.preventDefault(), t.stopPropagation();
	}
	var R = class extends L {
		_scope = "Graupl";
		_rootDOMElement = "tabs";
		_automatic = !1;
		_currentChild = 0;
		_storageKey = "tabs";
		_name = "Tab";
		constructor({ tabsElement: t, tabListSelector: e = ".tab-list", tabTogglesSelector: s = ".tab-toggle", tabContentsSelector: i = ".tab-content", expandClass: r = "show", collapseClass: n = "hide", transitionClass: l = null, transitionDuration: a = 300, expandDuration: _ = -1, collapseDuration: f = -1, automaticActivation: T = !1, prefix: D = "graupl-", key: B = null, initializeClass: I = "initializing", openClass: E, closeClass: b, openDuration: y, closeDuration: w, initialize: $ = !1 }) {
			E !== void 0 && (console.warn("Graupl Tabs option \"openClass\" is deprecated and will be removed. Use expandClass instead."), r = E), b !== void 0 && (console.warn("Graupl Tabs option \"closeClass\" is deprecated and will be removed. Use collapseClass instead."), n = b), y !== void 0 && (console.warn("Graupl Tabs option \"openDuration\" is deprecated and will be removed. Use expandDuration instead."), _ = y), w !== void 0 && (console.warn("Graupl Tabs option \"closeDuration\" is deprecated and will be removed. Use collapseDuration instead."), f = w), super({
				bootstrap: !1,
				initialize: !1,
				prefix: D,
				key: B,
				initializeClass: I
			}), this._dom.tabs = t, this._dom.tabList = null, this._dom.tabToggles = [], this._dom.tabContents = [], this._selectors.tabList = e, this._selectors.tabToggles = s, this._selectors.tabContents = i, this._elements.tabToggles = [], this._classes.expand = r || "", this._classes.collapse = n || "", this._classes.transition = l || "", this._durations.transition = a, this._durations.expand = _, this._durations.collapse = f, this._automatic = T, this._bootstrap(), $ && this.initialize();
		}
		_registerEvents() {
			super._registerEvents(), this._addInternalEventListener(this.getEventName("initialize"), (t) => {
				t.detail.component === this && this.elements.tabToggles.filter((e) => e.isExpanded).length === 0 && this.elements.tabToggles[0].expand();
			}), this._addInternalEventListener(this.getEventName("validate"), (t) => {
				if (t.detail.component !== this) return;
				const s = o("boolean", { automaticActivation: this._automatic }, { shouldThrow: !1 });
				s.status || (this._errors = [...this._errors, ...s.errors], this._valid = !1);
			});
		}
		get openClass() {
			return console.warn("Graupl Tabs.openClass is deprecated and will be removed. Use expandClass instead."), this.expandClass;
		}
		set openClass(t) {
			console.warn("Graupl Tabs.openClass is deprecated and will be removed. Use expandClass instead."), this.expandClass = t;
		}
		get closeClass() {
			return console.warn("Graupl Tabs.closeClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass;
		}
		set closeClass(t) {
			console.warn("Graupl Tabs.closeClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass = t;
		}
		get openDuration() {
			return console.warn("Graupl Tabs.openDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration;
		}
		set openDuration(t) {
			console.warn("Graupl Tabs.openDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration = t;
		}
		get closeDuration() {
			return console.warn("Graupl Tabs.closeDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration;
		}
		set closeDuration(t) {
			console.warn("Graupl Tabs.closeDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration = t;
		}
		get expandClass() {
			return this._classes.expand;
		}
		set expandClass(t) {
			d({ expandClass: t }), this._classes.expand !== t && (this._classes.expand = t);
		}
		get collapseClass() {
			return this._classes.collapse;
		}
		set collapseClass(t) {
			d({ collapseClass: t }), this._classes.collapse !== t && (this._classes.collapse = t);
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
			o("number", { transitionDuration: t }), this._durations.transition !== t && (this._durations.transition = t, this._setCustomProps());
		}
		get expandDuration() {
			return this._durations.expand === -1 ? this.transitionDuration : this._durations.expand;
		}
		set expandDuration(t) {
			o("number", { expandDuration: t }), this._durations.expand !== t && (this._durations.expand = t, this._setCustomProps());
		}
		get collapseDuration() {
			return this._durations.collapse === -1 ? this.transitionDuration : this._durations.collapse;
		}
		set collapseDuration(t) {
			o("number", { collapseDuration: t }), this._durations.collapse !== t && (this._durations.collapse = t, this._setCustomProps());
		}
		get isAutomatic() {
			return this._automatic;
		}
		set isAutomatic(t) {
			o("boolean", { isAutomatic: t }), this._automatic !== t && (this._automatic = t);
		}
		get currentChild() {
			return this._currentChild;
		}
		set currentChild(t) {
			o("number", { currentChild: t }), this._currentChild !== t && t >= 0 && t < this.elements.tabToggles.length && (this._currentChild = t);
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
			this.dom.tabs.style.setProperty(`--${this.prefix}tabs-transition-duration`, `${this.transitionDuration}ms`), this.dom.tabs.style.setProperty(`--${this.prefix}tabs-open-transition-duration`, `${this.expandDuration}ms`), this.dom.tabs.style.setProperty(`--${this.prefix}tabs-close-transition-duration`, `${this.collapseDuration}ms`);
		}
		_setDOMElements() {
			this._setDOMElementType("tabList", { context: this.dom.tabs }), this.dom.tabList && this._setDOMElementType("tabToggles", { context: this.dom.tabList }), this._setDOMElementType("tabContents", { context: this.dom.tabs });
		}
		_createChildElements() {
			this.dom.tabToggles.forEach((t, e) => {
				const s = new H({
					toggleElement: t,
					contentElement: this.dom.tabContents[e],
					parentTab: this
				});
				s._addInternalEventListener(s.getEventName("preexpand"), () => {
					s.collapseSiblings({
						force: !0,
						emit: this.isInitialized,
						transition: this.isInitialized
					}), this.focusState = "self";
				}), s._addInternalEventListener(s.getEventName("precollapse"), () => {
					this.focusState = "none";
				}), this._elements.tabToggles.push(s), s.initialize();
			});
		}
		_handleFocus() {
			this.elements.tabToggles.forEach((t, e) => {
				this._addEventListener("focus", t.dom.toggle, () => {
					this.currentChild = e, this.isAutomatic && this.currentTabToggle.expand();
				});
			});
		}
		_handleClick() {
			this.elements.tabToggles.forEach((t, e) => {
				this._addEventListener("click", t.dom.toggle, () => {
					this.currentChild = e, this.currentEvent = "mouse", t.expand();
				});
			});
		}
		_handleKeydown() {
			this.dom.tabToggles.forEach((t) => {
				this._addEventListener("keydown", t, (e) => {
					this.currentEvent = "keyboard";
					const s = M(e);
					[
						"Space",
						"Enter",
						"ArrowRight",
						"ArrowLeft",
						"Home",
						"End"
					].includes(s) && p(e);
				});
			});
		}
		_handleKeyup() {
			this.dom.tabToggles.forEach((t) => {
				this._addEventListener("keyup", t, (e) => {
					switch (this.currentEvent = "keyboard", M(e)) {
						case "Space":
						case "Enter":
							p(e), this.currentTabToggle.expand();
							break;
						case "Home":
							p(e), this.focusFirstChild();
							break;
						case "End":
							p(e), this.focusLastChild();
							break;
						case "ArrowRight":
							p(e), this.focusNextChild();
							break;
						case "ArrowLeft": p(e), this.focusPreviousChild();
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
		dispose() {
			this.elements.tabToggles.forEach((t) => t.dispose()), super.dispose();
		}
	};
	const S = /[\11\12\14\15\40]+/, v = "data-once", J = document;
	function x(t, e, s) {
		return t[`${e}Attribute`](v, s);
	}
	function m(t) {
		if (typeof t != "string") throw new TypeError("once ID must be a string");
		if (t === "" || S.test(t)) throw new RangeError("once ID must not be empty or contain spaces");
		return `[${v}~="${t}"]`;
	}
	function Z(t) {
		if (!(t instanceof Element)) throw new TypeError("The element must be an instance of Element");
		return !0;
	}
	function g(t, e = J) {
		let s = t;
		if (t === null) s = [];
		else if (t) if (e instanceof Document || e instanceof DocumentFragment || e instanceof Element) typeof t == "string" ? s = e.querySelectorAll(t) : t instanceof Element && (s = [t]);
		else throw new TypeError("Context must be an object of type \"Document\", \"DocumentFragment\", or \"Element\".");
		else throw new TypeError("Selector must not be empty");
		return Array.prototype.slice.call(s);
	}
	function O(t, e, s) {
		return e.filter((i) => {
			const r = Z(i) && i.matches(t);
			return r && s && s(i), r;
		});
	}
	function F(t, { add: e, remove: s }) {
		const i = [];
		x(t, "has") && x(t, "get").trim().split(S).forEach((n) => {
			i.indexOf(n) < 0 && n !== s && i.push(n);
		}), e && i.push(e);
		const r = i.join(" ");
		x(t, r === "" ? "remove" : "set", r);
	}
	function k(t, e, s) {
		return O(`:not(${m(t)})`, g(e, s), (i) => F(i, { add: t }));
	}
	return k.remove = (t, e, s) => O(m(t), g(e, s), (i) => F(i, { remove: t })), k.filter = (t, e, s) => O(m(t), g(e, s)), k.find = (t, e) => g(t ? m(t) : `[${v}]`, e), ({ options: t = {}, context: e = document, selector: s = ".tabs" } = {}) => {
		k("graupl-tabs-generator", s, e).forEach((i) => {
			const r = i.dataset.grauplTabsOptions ? JSON.parse(i.dataset.grauplTabsOptions.replace(/'/g, "\"")) || {} : {};
			new R({
				tabsElement: i,
				initialize: !0,
				...t,
				...r
			});
		});
	};
})();

//# sourceMappingURL=tabs.iife.js.map