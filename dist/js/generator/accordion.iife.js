var AccordionGenerator = (function() {
	function p(t, e, { shouldThrow: s = !0 } = {}) {
		const i = {
			status: !0,
			errors: []
		};
		try {
			if (typeof e != "object") throw new TypeError(`Elements given to isValidInstance() must be inside of an object. "${typeof e}" given.`);
			for (const o in e) try {
				if (!(e[o] instanceof t)) {
					const r = typeof e[o];
					throw new TypeError(`${o} must be an instance of ${t.name}. "${r}" given.`);
				}
			} catch (r) {
				i.status = !1, i.errors.push(r);
			}
		} catch (o) {
			i.status = !1, i.errors.push(o);
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
			for (const o in e) try {
				const r = typeof e[o];
				if (r !== t) throw new TypeError(`${o} must be a ${t}. "${r}" given.`);
			} catch (r) {
				i.status = !1, i.errors.push(r);
			}
		} catch (o) {
			i.status = !1, i.errors.push(o);
		}
		if (s && !i.status) throw i.errors[0];
		return i;
	}
	function N(t, { shouldThrow: e = !0 } = {}) {
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
			} catch (o) {
				s.status = !1, s.errors.push(o);
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
				const o = t[i];
				if (o === "") continue;
				if (typeof o == "string") {
					if (/\s/.test(o)) throw new TypeError(`${i} must be a valid class token without whitespace. "${o}" given.`);
					continue;
				}
				if (Array.isArray(o)) {
					o.forEach((r) => {
						if (typeof r != "string") throw new TypeError(`${i} must be a string or an array of strings. An array containing non-strings given.`);
						if (r !== "" && /\s/.test(r)) throw new TypeError(`${i} must be a valid class token without whitespace. "${r}" given.`);
					});
					continue;
				}
				throw new TypeError(`${i} must be a string or an array of strings. "${typeof o}" given.`);
			} catch (o) {
				s.status = !1, s.errors.push(o);
			}
		} catch (i) {
			s.status = !1, s.errors.push(i);
		}
		if (e && !s.status) throw s.errors[0];
		return s;
	}
	function R(t, { shouldThrow: e = !0 } = {}) {
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
			for (const o in t) try {
				if (!i.includes(t[o])) throw new TypeError(`${o} must be one of the following values: ${i.join(", ")}. "${t[o]}" given.`);
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
			if (typeof t != "object") throw new TypeError(`Values given to isValidEvent() must be inside of an object. "${typeof t}" given.`);
			const i = [
				"none",
				"mouse",
				"keyboard",
				"character"
			];
			for (const o in t) try {
				if (!i.includes(t[o])) throw new TypeError(`${o} must be one of the following values: ${i.join(", ")}. "${t[o]}" given.`);
			} catch (r) {
				s.status = !1, s.errors.push(r);
			}
		} catch (i) {
			s.status = !1, s.errors.push(i);
		}
		if (e && !s.status) throw s.errors[0];
		return s;
	}
	function Q(t, e, { shouldThrow: s = !0 } = {}) {
		const i = {
			status: !0,
			errors: []
		};
		try {
			if (n("string", { tagName: t }, { shouldThrow: !0 }).status && p(HTMLElement, e, { shouldThrow: !0 }).status) {
				const o = t.toLowerCase();
				for (const r in e) try {
					if (e[r].tagName.toLowerCase() !== o) throw new TypeError(`${r} must be a <${o}> element. <${e[r].tagName.toLowerCase()}> given.`);
				} catch (a) {
					i.status = !1, i.errors.push(a);
				}
			}
		} catch (o) {
			i.status = !1, i.errors.push(o);
		}
		if (s && !i.status) throw i.errors[0];
		return i;
	}
	function Z(t, e, { shouldThrow: s = !0 } = {}) {
		const i = {
			status: !0,
			errors: []
		};
		try {
			if (!Object.prototype.hasOwnProperty.call(e.events, t)) throw new TypeError(`Event type "${t}" is not valid for ${e.constructor.name}. Valid event types are: "${Object.keys(e.events).join("\", ")}".`);
		} catch (o) {
			i.status = !1, i.errors.push(o);
		}
		if (s && !i.status) throw i.errors[0];
		return i;
	}
	function W(t, { shouldThrow: e = !0 } = {}) {
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
	function X(t) {
		return n("string", { value: t }), `${t.charAt(0).toLowerCase()}${t.slice(1)}`;
	}
	function U(t) {
		return n("string", { value: t }), `${t.charAt(0).toUpperCase()}${t.slice(1)}`;
	}
	var I = class V {
		_scope;
		_type = "_default";
		_storage = {};
		_crush = !1;
		constructor({ scope: e, type: s = null, crush: i = !1, initialize: o = !0 } = {}) {
			this._scope = e, this._type = s || "_default", this._crush = i, o && this.initialize();
		}
		initialize() {
			try {
				!this._crush && typeof window[this.scope] < "u" && (p(V, { storage: window[this.scope] }, { shouldThrow: !1 }).status || typeof window[this.scope].storage < "u" && typeof window[this.scope].scope < "u" && typeof window[this.scope].type < "u") && (this._storage = window[this.scope].storage);
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
				const o = n("string", { key: s }, { shouldThrow: !1 });
				if (!o.status) throw o.errors[0];
				return this.storage[e][s];
			}
			return this.storage[e];
		}
		set({ type: e = this.type, key: s = null, data: i = {} } = {}) {
			const o = n("string", { type: e }, { shouldThrow: !1 }), r = n("object", { data: i }, { shouldThrow: !1 });
			if (!o.status) throw o.errors[0];
			if (!r.status) throw r.errors[0];
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
				const o = n("string", { key: s }, { shouldThrow: !1 });
				if (!o.status) throw o.errors[0];
				delete this.storage[e][s];
			} else delete this.storage[e];
		}
		dispose() {
			typeof window < "u" && window[this.scope] === this && delete window[this.scope], delete this._storage;
		}
	};
	function u(t, e) {
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
	var P = class {
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
		constructor({ prefix: t = "ae-", key: e = null, initializeClass: s = "initializing", emit: i = !0, bootstrap: o = !0, initialize: r = !0 } = {}) {
			this._classes.initialize = s || "", this._prefix = t || "", this._key = e || "", this._shouldEmit = i, o && this._bootstrap(), r && this.initialize();
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
				u(this.initializeClass, this.rootDOMElement), this._dispatchEvent("preinitialize", this.rootDOMElement), this._generateKey(), this._setDOMElements(), this._setIds(), this._setAriaAttributes(), this._setCustomProps(), this._createChildElements(), this._handleFocus(), this._handleHover(), this._handleClick(), this._handleKeydown(), this._handleKeyup(), this._dispatchEvent("initialize", this.rootDOMElement), this._store(), h(this.initializeClass, this.rootDOMElement), this._initialized = !0, this._dispatchEvent("postinitialize", this.rootDOMElement);
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
			R({ focusState: t }), this._focusState !== t && (this._focusState = t);
		}
		get currentEvent() {
			return this._currentEvent;
		}
		set currentEvent(t) {
			J({ currentEvent: t }), this._currentEvent !== t && (this._currentEvent = t);
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
			return this._eventPrefix !== "" ? this._eventPrefix : `${X(this.scope)}${U(this.name)}`;
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
			const t = W(this, { shouldThrow: !1 });
			if (t.status || (this._errors = [...this._errors, ...t.errors], this._valid = !1), Object.keys(this._dom).length > 0) {
				const r = {};
				for (const l of Object.keys(this._dom)) Array.isArray(this._dom[l]) ? this._dom[l].forEach((f, _) => {
					r[`${l}Element[${_}]`] = f;
				}) : this._dom[l] !== null && (r[`${l}Element`] = this._dom[l]);
				const a = p(HTMLElement, r, { shouldThrow: !1 });
				a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
			}
			if (Object.keys(this._selectors).length > 0) {
				const r = {};
				for (const l of Object.keys(this._selectors)) this._selectors[l] !== "" && (r[`${l}Selector`] = this._selectors[l]);
				const a = N(r, { shouldThrow: !1 });
				a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
			}
			if (Object.keys(this._classes).length > 0) {
				const r = {};
				for (const l of Object.keys(this._classes)) this._classes[l] !== "" && (r[`${l}Class`] = this._classes[l]);
				const a = d(r, { shouldThrow: !1 });
				a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
			}
			if (Object.keys(this._durations).length > 0) {
				const r = {};
				for (const l of Object.keys(this._durations)) r[`${l}Duration`] = this._durations[l];
				const a = n("number", r, { shouldThrow: !1 });
				a.status || (this._errors = [...this._errors, ...a.errors], this._valid = !1);
			}
			if (Object.keys(this.delays).length > 0) {
				const r = {};
				for (const l of Object.keys(this.delays)) r[`${l}Delay`] = this.delays[l];
				const a = n("number", r, { shouldThrow: !1 });
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
			this._protectedDOMElements.forEach((r) => {
				e[`_protectedDOMElementType[${r}]`] = r;
			});
			const s = n("string", e, { shouldThrow: !1 });
			s.status || (this._errors = [...this._errors, ...s.errors], this._valid = !1);
			const o = n("boolean", {
				_shouldStore: this._shouldStore,
				emit: this._shouldEmit
			}, { shouldThrow: !1 });
			return o.status || (this._errors = [...this._errors, ...o.errors], this._valid = !1), this._dispatchEvent("validate", this.rootDOMElement), this._dispatchEvent("postvalidate", this.rootDOMElement), this._valid;
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
			p(HTMLElement, { context: e });
			const o = Array.from(e.querySelectorAll(this.selectors[t])).filter((r) => i ? r.parentElement === e : !0);
			Array.isArray(this._dom[t]) ? s ? this._dom[t] = o : this._dom[t] = [...this._dom[t], ...o] : this._dom[t] = o[0] || null;
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
			this._shouldStore && (p(I, { storage: window[`${this.scope}Storage`] }, { shouldThrow: !1 }).status || new I({ scope: `${this.scope}Storage` }), window[`${this.scope}Storage`].set({
				key: this.id !== "" ? this.id : this.key,
				type: this._storageKey,
				data: this
			}));
		}
		_unstore() {
			this._shouldStore && p(I, { storage: window[`${this.scope}Storage`] }, { shouldThrow: !1 }).status && window[`${this.scope}Storage`].clear({
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
			const i = requestAnimationFrame((o) => {
				s = !0, delete this._frames[e], t(o);
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
			const i = `${this.eventPrefix}${U(t)}`;
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
			Z(t, this), n("boolean", { emit: s }), s && this.shouldEmit && p(HTMLElement, { element: e });
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
			const o = typeof i == "boolean" ? i : {
				...i,
				capture: !!i?.capture
			};
			e.addEventListener(t, s, i), this._listeners.push({
				type: t,
				element: e,
				listener: s,
				options: o
			});
		}
		_removeEventListener(t, e, s, i = {}) {
			e.removeEventListener(t, s, i);
			const o = typeof i == "boolean" ? i : !!i?.capture;
			this._listeners = this._listeners.filter((r) => {
				const a = r.options, l = typeof a == "boolean" ? a : !!a?.capture;
				return !(r.type === t && r.element === e && r.listener === s && l === o);
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
	}, Y = class extends P {
		_name = "ResponsiveComponent";
		_breakpoint = "";
		_mediaQueryString = "";
		_mediaQueryList = null;
		constructor({ breakpoint: t = "", mediaQuery: e = "", prefix: s = "ae-", key: i = null, initializeClass: o = "initializing", emit: r = !0, bootstrap: a = !0, initialize: l = !0 } = {}) {
			super({
				prefix: s,
				key: i,
				initializeClass: o,
				emit: r,
				bootstrap: !1,
				initialize: !1
			}), this._breakpoint = t || "", this._mediaQueryString = e || "", a && this._bootstrap(), l && this.initialize();
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
	}, G = class {
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
	}, tt = class extends Y {
		_name = "CollapsibleComponent";
		_expanded = new G(!1);
		_locked = new G(!1);
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
		constructor({ controlledElement: t, controllerElement: e = null, triggerElement: s = null, lockClass: i = "locked", unlockClass: o = "unlocked", expandClass: r = "show", collapseClass: a = "hide", transitionClass: l = "transitioning", transitionDelay: f = 250, transitionDuration: _ = 150, expandDuration: C = -1, collapseDuration: $ = -1, expandInsideBreakpoint: T = !1, expandOutsideBreakpoint: y = !1, collapseInsideBreakpoint: w = !1, collapseOutsideBreakpoint: M = !1, lockInsideBreakpoint: L = !1, lockOutsideBreakpoint: z = !1, unlockInsideBreakpoint: S = !1, unlockOutsideBreakpoint: F = !1, expandOnFocus: j = !1, collapseOnBlur: x = !1, expanded: b = !1, locked: v = !1, breakpoint: O = "", mediaQuery: K = "", prefix: rt = "ae-", key: nt = null, initializeClass: at = "initializing", emit: lt = !0, bootstrap: ht = !0, initialize: dt = !0 } = {}) {
			super({
				breakpoint: O,
				mediaQuery: K,
				prefix: rt,
				key: nt,
				initializeClass: at,
				emit: lt,
				bootstrap: !1,
				initialize: !1
			}), this._dom.controller = e, this._dom.trigger = s ?? e, this._dom.controlled = t, this._protectedDOMElements.push("controller", "trigger", "controlled"), this._classes.locked = i || "", this._classes.unlocked = o || "", this._classes.expand = r || "", this._classes.collapse = a || "", this._classes.transition = l || "", this._delays.transition = f, this._durations.transition = _, this._durations.expand = C, this._durations.collapse = $, this._expandInsideBreakpoint = T, this._expandOutsideBreakpoint = y, this._collapseInsideBreakpoint = w, this._collapseOutsideBreakpoint = M, this._lockInsideBreakpoint = L, this._lockOutsideBreakpoint = z, this._unlockInsideBreakpoint = S, this._unlockOutsideBreakpoint = F, this._expandOnFocus = j, this._collapseOnBlur = x, this._expanded.value = b, this._expanded.commit(), this._locked.value = v, this._locked.commit(), ht && this._bootstrap(), dt && this.initialize();
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
			this._dispatchEvent("preexpand", this.rootDOMElement, { emit: t }), this._cancelAnimationFrame("expandTransition"), this._cancelAnimationFrame("collapseTransition"), this._clearTimeout("expandTransition"), this._clearTimeout("collapseTransition"), e && this.transitionClass !== "" ? (u(this.transitionClass, this.dom.controlled), this._requestAnimationFrame(() => {
				h(this.collapseClass, this.dom.controlled), this._requestAnimationFrame(() => {
					u(this.expandClass, this.dom.controlled), this._requestAnimationFrame(() => {
						this._setTimeout(() => {
							h(this.transitionClass, this.dom.controlled), this._dispatchEvent("postexpand", this.rootDOMElement, { emit: t });
						}, this.expandDuration, "expandTransition");
					}, "expandTransition"), this._dispatchEvent("expand", this.rootDOMElement, { emit: t });
				}, "expandTransition");
			}, "expandTransition")) : (h(this.transitionClass, this.dom.controlled), u(this.expandClass, this.dom.controlled), h(this.collapseClass, this.dom.controlled), this._dispatchEvent("expand", this.rootDOMElement, { emit: t }), this._dispatchEvent("postexpand", this.rootDOMElement, { emit: t }));
		}
		_collapse({ emit: t = this.isInitialized && this.shouldEmit, transition: e = this.isInitialized } = {}) {
			this._dispatchEvent("precollapse", this.rootDOMElement, { emit: t }), this._cancelAnimationFrame("expandTransition"), this._cancelAnimationFrame("collapseTransition"), this._clearTimeout("expandTransition"), this._clearTimeout("collapseTransition"), e && this.transitionClass !== "" ? (u(this.transitionClass, this.dom.controlled), this._requestAnimationFrame(() => {
				h(this.expandClass, this.dom.controlled), this._requestAnimationFrame(() => {
					u(this.collapseClass, this.dom.controlled), this._requestAnimationFrame(() => {
						this._setTimeout(() => {
							h(this.transitionClass, this.dom.controlled), this._dispatchEvent("postcollapse", this.rootDOMElement, { emit: t });
						}, this.collapseDuration, "collapseTransition");
					}, "collapseTransition"), this._dispatchEvent("collapse", this.rootDOMElement, { emit: t });
				}, "collapseTransition");
			}, "collapseTransition")) : (h(this.transitionClass, this.dom.controlled), u(this.collapseClass, this.dom.controlled), h(this.expandClass, this.dom.controlled), this._dispatchEvent("collapse", this.rootDOMElement, { emit: t }), this._dispatchEvent("postcollapse", this.rootDOMElement, { emit: t }));
		}
		_lock({ emit: t = this.isInitialized && this.shouldEmit } = {}) {
			this._dispatchEvent("prelock", this.rootDOMElement, { emit: t }), u(this.lockedClass, this.dom.controlled), h(this.unlockedClass, this.dom.controlled), this.dom.controller?.setAttribute("disabled", "true"), this._dispatchEvent("lock", this.rootDOMElement, { emit: t }), this._dispatchEvent("postlock", this.rootDOMElement, { emit: t });
		}
		_unlock({ emit: t = this.isInitialized && this.shouldEmit } = {}) {
			this._dispatchEvent("preunlock", this.rootDOMElement, { emit: t }), u(this.unlockedClass, this.dom.controlled), h(this.lockedClass, this.dom.controlled), this.dom.controller?.removeAttribute("disabled"), this._dispatchEvent("unlock", this.rootDOMElement, { emit: t }), this._dispatchEvent("postunlock", this.rootDOMElement, { emit: t });
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
	}, et = class extends tt {
		_scope = "Graupl";
		_rootDOMElement = "item";
		_name = "AccordionItem";
		_storageKey = "accordionItems";
		_shouldStore = !1;
		constructor({ accordionItemElement: t, accordionItemToggleElement: e, accordionItemHeaderElement: s, accordionItemContentElement: i, parentAccordion: o = null }) {
			super({
				controllerElement: e,
				controlledElement: t,
				expandClass: o.classes.expand,
				collapseClass: o.classes.collapse,
				transitionClass: o.classes.transition,
				transitionDuration: o.durations.transition,
				expandDuration: o.durations.expand,
				collapseDuration: o.durations.collapse,
				lockClass: "",
				unlockClass: "",
				bootstrap: !1,
				initialize: !1,
				prefix: o.prefix,
				key: o.key
			}), this._protectedDOMElements.push("toggle", "header", "content"), this._dom.item = t, this._dom.toggle = e, this._dom.header = s, this._dom.content = i, this._elements.parent = o, this._bootstrap();
		}
		_registerEvents() {
			super._registerEvents(), this._addInternalEventListener(this.getEventName("preinitialize"), () => {
				this._expanded.value = this.dom.toggle.getAttribute("aria-expanded") === "true", this._expanded.commit();
			}), this._addInternalEventListener(this.getEventName("preexpand"), () => {
				this._cancelAnimationFrame("accordionHeight"), this.dom.toggle.setAttribute("aria-expanded", "true"), this.dom.content.removeAttribute("inert"), this.dom.item.style.height = `${this.dom.header.getBoundingClientRect().height}px`;
			}), this._addInternalEventListener(this.getEventName("expand"), () => {
				this.dom.item.style.height = `${this.dom.header.getBoundingClientRect().height + this.dom.content.getBoundingClientRect().height}px`;
			}), this._addInternalEventListener(this.getEventName("postexpand"), () => {
				this.dom.item.style.height = "";
			}), this._addInternalEventListener(this.getEventName("precollapse"), () => {
				this._cancelAnimationFrame("accordionHeight"), this.dom.toggle.setAttribute("aria-expanded", "false"), this.dom.content.setAttribute("inert", "true"), this.dom.item.style.height = `${this.dom.item.getBoundingClientRect().height}px`, this._requestAnimationFrame(() => {
					this.dom.item.style.height = `${this.dom.header.getBoundingClientRect().height}px`;
				}, "accordionHeight");
			}), this._addInternalEventListener(this.getEventName("postcollapse"), () => {
				this._cancelAnimationFrame("accordionHeight"), this.dom.item.style.height = "";
			});
		}
		get isOpen() {
			return console.warn("Graupl AccordionItem.isOpen is deprecated and will be removed. Use isExpanded instead."), this.isExpanded;
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
			const { key: t } = this.elements.parent, e = this.elements.parent.dom.accordionItems.indexOf(this.dom.item);
			this.dom.item.id = this.dom.item.id || `accordion-item-${t}-${e}`, this.dom.toggle.id = this.dom.toggle.id || `accordion-item-toggle-${t}-${e}`, this.dom.header.id = this.dom.header.id || `accordion-item-header-${t}-${e}`, this.dom.content.id = this.dom.content.id || `accordion-item-content-${t}-${e}`;
		}
		_setAriaAttributes() {
			Q("button", { toggle: this.dom.toggle }, { shouldThrow: !1 }).status || this.dom.toggle.setAttribute("role", "button"), this.dom.toggle.getAttribute("aria-expanded") !== "true" && this.dom.toggle.setAttribute("aria-expanded", "false"), this.dom.toggle.setAttribute("aria-controls", this.dom.content.id), Q("section", { content: this.dom.content }, { shouldThrow: !1 }).status || this.dom.content.setAttribute("role", "region"), this.dom.content.setAttribute("aria-labelledby", this.dom.toggle.id);
		}
		collapse(t = {}) {
			this.isInitialized && !t.force && this.isExpanded && !this.elements.parent.allowCollapseAll && this.elements.parent.expandedAccordionItems.length <= 1 || super.collapse(t);
		}
		focus() {
			this.focusState = "self", this.shouldFocus && this.dom.toggle.focus(), this.expandOnFocus && this.expand();
		}
		blur() {
			this.focusState = "none", this.shouldFocus && this.dom.toggle.blur(), this.collapseOnBlur && this.collapse();
		}
		collapseSiblings() {
			this.elements.parent && this.elements.parent.elements.accordionItems.forEach((t) => {
				t !== this && t.collapse();
			});
		}
		unlockSiblings(t = {}) {
			this.elements.parent && this.elements.parent.elements.accordionItems.forEach((e) => {
				e !== this && e.unlock(t);
			});
		}
		show(...t) {
			return console.warn("Graupl AccordionItem.show() is deprecated and will be removed. Use expand() instead."), this.expand(...t);
		}
		hide(...t) {
			return console.warn("Graupl AccordionItem.hide() is deprecated and will be removed. Use collapse() instead."), this.collapse(...t);
		}
		closeSiblings(...t) {
			return console.warn("Graupl AccordionItem.closeSiblings() is deprecated and will be removed. Use collapseSiblings() instead."), this.collapseSiblings(...t);
		}
	};
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
	function c(t) {
		t.preventDefault(), t.stopPropagation();
	}
	var st = class extends P {
		_scope = "Graupl";
		_rootDOMElement = "accordion";
		_optionalKeySupport = !0;
		_expandMultiple = !0;
		_collapseAll = !0;
		_currentChild = 0;
		_storageKey = "accordions";
		_name = "Accordion";
		constructor({ accordionElement: t, accordionItemsSelector: e = ".accordion-item", accordionItemTogglesSelector: s = ".accordion-item-toggle", accordionItemHeadersSelector: i = ".accordion-item-header", accordionItemContentsSelector: o = ".accordion-item-content", accordionControlContainerSelector: r = ".accordion-control-container", accordionControlsSelector: a = ".accordion-control", expandControllerSelector: l = ".expand-all", collapseControllerSelector: f = ".collapse-all", expandClass: _ = "show", collapseClass: C = "hide", transitionClass: $ = "transitioning", transitionDuration: T = 300, expandDuration: y = -1, collapseDuration: w = -1, optionalKeySupport: M = !1, allowExpandMultiple: L = !0, allowCollapseAll: z = !0, prefix: S = "graupl-", key: F = null, initializeClass: j = "initializing", openClass: x, closeClass: b, openDuration: v, closeDuration: O, initialize: K = !1 }) {
			x !== void 0 && (console.warn("Graupl Accordion option \"openClass\" is deprecated and will be removed. Use expandClass instead."), _ = x), b !== void 0 && (console.warn("Graupl Accordion option \"closeClass\" is deprecated and will be removed. Use collapseClass instead."), C = b), v !== void 0 && (console.warn("Graupl Accordion option \"openDuration\" is deprecated and will be removed. Use expandDuration instead."), y = v), O !== void 0 && (console.warn("Graupl Accordion option \"closeDuration\" is deprecated and will be removed. Use collapseDuration instead."), w = O), super({
				bootstrap: !1,
				initialize: !1,
				prefix: S,
				key: F,
				initializeClass: j
			}), this._dom.accordion = t, this._dom.accordionItems = [], this._dom.accordionItemToggles = [], this._dom.accordionItemHeaders = [], this._dom.accordionItemContents = [], this._dom.accordionControlContainer = null, this._dom.accordionControls = [], this._dom.expandController = [], this._dom.collapseController = [], this._selectors.accordionItems = e, this._selectors.accordionItemToggles = s, this._selectors.accordionItemHeaders = i, this._selectors.accordionItemContents = o, this._selectors.accordionControlContainer = r, this._selectors.accordionControls = a, this._selectors.expandController = l, this._selectors.collapseController = f, this._elements.accordionItems = [], this._classes.expand = _ || "", this._classes.collapse = C || "", this._classes.transition = $ || "", this._durations.transition = T, this._durations.expand = y, this._durations.collapse = w, this._optionalKeySupport = M, this._expandMultiple = L, this._collapseAll = z, this._bootstrap(), K && this.initialize();
		}
		_registerEvents() {
			super._registerEvents(), this._addInternalEventListener(this.getEventName("initialize"), (t) => {
				t.detail.component === this && (this.dom.expandController.length > 0 && !this.allowExpandMultiple && this.dom.expandController.forEach((e) => {
					e.setAttribute("disabled", "disabled");
				}), this.dom.collapseController.length > 0 && !this.allowCollapseAll && this.dom.collapseController.forEach((e) => {
					e.setAttribute("disabled", "disabled");
				}));
			}), this._addInternalEventListener(this.getEventName("validate"), (t) => {
				if (t.detail.component !== this) return;
				const s = n("boolean", {
					optionalKeySupport: this._optionalKeySupport,
					allowExpandMultiple: this._expandMultiple,
					allowCollapseAll: this._collapseAll
				}, { shouldThrow: !1 });
				s.status || (this._errors = [...this._errors, ...s.errors], this._valid = !1);
			});
		}
		get openClass() {
			return console.warn("Graupl Accordion.openClass is deprecated and will be removed. Use expandClass instead."), this.expandClass;
		}
		set openClass(t) {
			console.warn("Graupl Accordion.openClass is deprecated and will be removed. Use expandClass instead."), this.expandClass = t;
		}
		get closeClass() {
			return console.warn("Graupl Accordion.closeClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass;
		}
		set closeClass(t) {
			console.warn("Graupl Accordion.closeClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass = t;
		}
		get openDuration() {
			return console.warn("Graupl Accordion.openDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration;
		}
		set openDuration(t) {
			console.warn("Graupl Accordion.openDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration = t;
		}
		get closeDuration() {
			return console.warn("Graupl Accordion.closeDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration;
		}
		set closeDuration(t) {
			console.warn("Graupl Accordion.closeDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration = t;
		}
		get openAccordionItems() {
			return console.warn("Graupl Accordion.openAccordionItems is deprecated and will be removed. Use expandedAccordionItems instead."), this.expandedAccordionItems;
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
		get currentChild() {
			return this._currentChild;
		}
		set currentChild(t) {
			n("number", { currentChild: t }), this._currentChild !== t && t >= 0 && t < this.elements.accordionItems.length && (this._currentChild = t);
		}
		get optionalKeySupport() {
			return this._optionalKeySupport;
		}
		set optionalKeySupport(t) {
			n("boolean", { optionalKeySupport: t }), this._optionalKeySupport !== t && (this._optionalKeySupport = t);
		}
		get currentAccordionItem() {
			return this.elements.accordionItems[this.currentChild];
		}
		get expandedAccordionItems() {
			return this.elements.accordionItems.filter((t) => t.isExpanded);
		}
		get allowExpandMultiple() {
			return this._expandMultiple;
		}
		set allowExpandMultiple(t) {
			n("boolean", { allowExpandMultiple: t }), this._expandMultiple !== t && (this._expandMultiple = t, this.dom.expandController.length > 0 && (t ? this.dom.expandController.forEach((e) => {
				e.removeAttribute("disabled");
			}) : this.dom.expandController.forEach((e) => {
				e.setAttribute("disabled", "disabled");
			})));
		}
		get allowCollapseAll() {
			return this._collapseAll;
		}
		set allowCollapseAll(t) {
			n("boolean", { allowCollapseAll: t }), this._collapseAll !== t && (this._collapseAll = t, this.dom.collapseController.length > 0 && (t ? this.dom.collapseController.forEach((e) => {
				e.removeAttribute("disabled");
			}) : this.dom.collapseController.forEach((e) => {
				e.setAttribute("disabled", "disabled");
			})));
		}
		_setIds() {
			this.dom.accordion.id = this.dom.accordion.id || `accordion-${this.key}`, this._id = this.dom.accordion.id;
		}
		_setCustomProps() {
			this.dom.accordion.style.setProperty(`--${this.prefix}accordion-transition-duration`, `${this.transitionDuration}ms`), this.dom.accordion.style.setProperty(`--${this.prefix}accordion-open-transition-duration`, `${this.expandDuration}ms`), this.dom.accordion.style.setProperty(`--${this.prefix}accordion-close-transition-duration`, `${this.collapseDuration}ms`);
		}
		_setDOMElements() {
			this._setDOMElementType("accordionItems", { context: this.dom.accordion }), this._resetDOMElementType("accordionItemToggles"), this._setDOMElementType("accordionControlContainer", { context: this.dom.accordion }), this.dom.accordionControlContainer && (this._setDOMElementType("accordionControls", { context: this.dom.accordionControlContainer }), this._setDOMElementType("expandController", { context: this.dom.accordionControlContainer }), this._setDOMElementType("collapseController", { context: this.dom.accordionControlContainer })), this.dom.accordionItems.forEach((t) => {
				this._setDOMElementType("accordionItemToggles", {
					context: t,
					overwrite: !1,
					strict: !1
				}), this._setDOMElementType("accordionItemHeaders", {
					context: t,
					overwrite: !1,
					strict: !1
				}), this._setDOMElementType("accordionItemContents", {
					context: t,
					overwrite: !1,
					strict: !1
				});
			});
		}
		_createChildElements() {
			this.dom.accordionItems.forEach((t, e) => {
				const s = new et({
					accordionItemElement: t,
					accordionItemToggleElement: this.dom.accordionItemToggles[e],
					accordionItemHeaderElement: this.dom.accordionItemHeaders[e],
					accordionItemContentElement: this.dom.accordionItemContents[e],
					parentAccordion: this
				});
				s._addInternalEventListener(s.getEventName("preexpand"), () => {
					const i = this.expandedAccordionItems.filter((o) => o !== s);
					this.allowExpandMultiple || (s.unlockSiblings({ emit: this.isInitialized }), i.forEach((o) => o.collapse({
						force: !0,
						emit: this.isInitialized && o.shouldEmit,
						transition: this.isInitialized
					}))), this.allowCollapseAll || (!this.allowExpandMultiple || i.length === 0 ? s.lock() : s.unlockSiblings({ emit: this.isInitialized }));
				}), s._addInternalEventListener(s.getEventName("precollapse"), () => {
					const i = this.expandedAccordionItems.filter((o) => o !== s);
					!this.allowCollapseAll && i.length === 1 && i[0].lock();
				}), this.elements.accordionItems.push(s), s.initialize();
			});
		}
		_handleFocus() {
			this.elements.accordionItems.forEach((t, e) => {
				this._addEventListener("focus", t.dom.toggle, () => {
					this.currentChild = e;
				});
			});
		}
		_handleClick() {
			this.elements.accordionItems.forEach((t, e) => {
				this._addEventListener("click", t.dom.toggle, () => {
					this.currentChild = e, this.currentEvent = "mouse", t.toggle();
				});
			}), this.dom.expandController.forEach((t) => {
				this._addEventListener("click", t, () => {
					this.currentEvent = "mouse", this.allowExpandMultiple && this.expandChildren();
				});
			}), this.dom.collapseController.forEach((t) => {
				this._addEventListener("click", t, () => {
					this.currentEvent = "mouse", this.allowCollapseAll && this.collapseChildren();
				});
			});
		}
		_handleKeydown() {
			this.dom.accordionItemToggles.forEach((t) => {
				this._addEventListener("keydown", t, (e) => {
					const s = m(e);
					["Space", "Enter"].includes(s) ? (c(e), this.currentEvent = "keyboard") : this.optionalKeySupport && [
						"ArrowDown",
						"ArrowUp",
						"Home",
						"End"
					].includes(s) && (c(e), this.currentEvent = "keyboard");
				});
			}), this.dom.accordionControls.forEach((t) => {
				this._addEventListener("keydown", t, (e) => {
					const s = m(e);
					["Space", "Enter"].includes(s) && (c(e), this.currentEvent = "keyboard");
				});
			});
		}
		_handleKeyup() {
			this.dom.accordionItemToggles.forEach((t) => {
				this._addEventListener("keyup", t, (e) => {
					const s = m(e);
					switch (s) {
						case "Space":
						case "Enter": c(e), this.currentEvent = "keyboard", this.currentAccordionItem.toggle();
					}
					if (this.optionalKeySupport) switch (s) {
						case "Home":
							c(e), this.focusFirstChild();
							break;
						case "End":
							c(e), this.focusLastChild();
							break;
						case "ArrowDown":
							c(e), this.focusNextChild();
							break;
						case "ArrowUp": c(e), this.focusPreviousChild();
					}
				});
			}), this.dom.expandController.forEach((t) => {
				this._addEventListener("keyup", t, (e) => {
					switch (m(e)) {
						case "Space":
						case "Enter": c(e), this.currentEvent = "keyboard", this.allowExpandMultiple && this.expandChildren();
					}
				});
			}), this.dom.collapseController.forEach((t) => {
				this._addEventListener("keyup", t, (e) => {
					switch (m(e)) {
						case "Space":
						case "Enter": c(e), this.currentEvent = "keyboard", this.allowCollapseAll && this.collapseChildren();
					}
				});
			});
		}
		focusCurrentChild() {
			this.currentChild !== -1 && this.currentAccordionItem.focus();
		}
		focusChild(t) {
			this.blurCurrentChild(), this.currentChild = t, this.focusCurrentChild();
		}
		focusFirstChild() {
			this.focusChild(0);
		}
		focusLastChild() {
			this.focusChild(this.elements.accordionItems.length - 1);
		}
		focusNextChild() {
			this.currentChild < this.elements.accordionItems.length - 1 ? this.focusChild(this.currentChild + 1) : this.focusCurrentChild();
		}
		focusPreviousChild() {
			this.currentChild > 0 ? this.focusChild(this.currentChild - 1) : this.focusCurrentChild();
		}
		blurCurrentChild() {
			this.currentChild !== -1 && this.currentAccordionItem.blur();
		}
		expandChildren() {
			this.elements.accordionItems.forEach((t) => t.expand());
		}
		collapseChildren() {
			this.elements.accordionItems.forEach((t) => t.collapse());
		}
		openChildren(...t) {
			return console.warn("Graupl Accordion.openChildren() is deprecated and will be removed. Use expandChildren() instead."), this.expandChildren(...t);
		}
		closeChildren(...t) {
			return console.warn("Graupl Accordion.closeChildren() is deprecated and will be removed. Use collapseChildren() instead."), this.collapseChildren(...t);
		}
		dispose() {
			this.elements.accordionItems.forEach((t) => t.dispose()), super.dispose();
		}
	};
	const q = /[\11\12\14\15\40]+/, D = "data-once", it = document;
	function A(t, e, s) {
		return t[`${e}Attribute`](D, s);
	}
	function g(t) {
		if (typeof t != "string") throw new TypeError("once ID must be a string");
		if (t === "" || q.test(t)) throw new RangeError("once ID must not be empty or contain spaces");
		return `[${D}~="${t}"]`;
	}
	function ot(t) {
		if (!(t instanceof Element)) throw new TypeError("The element must be an instance of Element");
		return !0;
	}
	function E(t, e = it) {
		let s = t;
		if (t === null) s = [];
		else if (t) if (e instanceof Document || e instanceof DocumentFragment || e instanceof Element) typeof t == "string" ? s = e.querySelectorAll(t) : t instanceof Element && (s = [t]);
		else throw new TypeError("Context must be an object of type \"Document\", \"DocumentFragment\", or \"Element\".");
		else throw new TypeError("Selector must not be empty");
		return Array.prototype.slice.call(s);
	}
	function B(t, e, s) {
		return e.filter((i) => {
			const o = ot(i) && i.matches(t);
			return o && s && s(i), o;
		});
	}
	function H(t, { add: e, remove: s }) {
		const i = [];
		A(t, "has") && A(t, "get").trim().split(q).forEach((r) => {
			i.indexOf(r) < 0 && r !== s && i.push(r);
		}), e && i.push(e);
		const o = i.join(" ");
		A(t, o === "" ? "remove" : "set", o);
	}
	function k(t, e, s) {
		return B(`:not(${g(t)})`, E(e, s), (i) => H(i, { add: t }));
	}
	return k.remove = (t, e, s) => B(g(t), E(e, s), (i) => H(i, { remove: t })), k.filter = (t, e, s) => B(g(t), E(e, s)), k.find = (t, e) => E(t ? g(t) : `[${D}]`, e), ({ options: t = {}, context: e = document, selector: s = ".accordion" } = {}) => {
		k("graupl-accordion-generator", s, e).forEach((i) => {
			const o = i.dataset.grauplAccordionOptions ? JSON.parse(i.dataset.grauplAccordionOptions.replace(/'/g, "\"")) || {} : {};
			new st({
				accordionElement: i,
				initialize: !0,
				...t,
				...o
			});
		});
	};
})();

//# sourceMappingURL=accordion.iife.js.map