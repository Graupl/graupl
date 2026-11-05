(function() {
	function $(t) {
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
	function S(t) {
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
	function j(t, { shouldThrow: e = !0 } = {}) {
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
	function F(t, { shouldThrow: e = !0 } = {}) {
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
	function Q(t, { shouldThrow: e = !0 } = {}) {
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
	function U(t, e, { shouldThrow: s = !0 } = {}) {
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
	function P(t) {
		return o("string", { value: t }), `${t.charAt(0).toLowerCase()}${t.slice(1)}`;
	}
	function A(t) {
		return o("string", { value: t }), `${t.charAt(0).toUpperCase()}${t.slice(1)}`;
	}
	var b = class L {
		_scope;
		_type = "_default";
		_storage = {};
		_crush = !1;
		constructor({ scope: e, type: s = null, crush: i = !1, initialize: r = !0 } = {}) {
			this._scope = e, this._type = s || "_default", this._crush = i, r && this.initialize();
		}
		initialize() {
			try {
				!this._crush && typeof window[this.scope] < "u" && (u(L, { storage: window[this.scope] }, { shouldThrow: !1 }).status || typeof window[this.scope].storage < "u" && typeof window[this.scope].scope < "u" && typeof window[this.scope].type < "u") && (this._storage = window[this.scope].storage);
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
	var V = class {
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
			F({ focusState: t }), this._focusState !== t && (this._focusState = t);
		}
		get currentEvent() {
			return this._currentEvent;
		}
		set currentEvent(t) {
			Q({ currentEvent: t }), this._currentEvent !== t && (this._currentEvent = t);
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
			return this._eventPrefix !== "" ? this._eventPrefix : `${P(this.scope)}${A(this.name)}`;
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
			const t = q(this, { shouldThrow: !1 });
			if (t.status || (this._errors = [...this._errors, ...t.errors], this._valid = !1), Object.keys(this._dom).length > 0) {
				const n = {};
				for (const a of Object.keys(this._dom)) Array.isArray(this._dom[a]) ? this._dom[a].forEach((p, f) => {
					n[`${a}Element[${f}]`] = p;
				}) : this._dom[a] !== null && (n[`${a}Element`] = this._dom[a]);
				const l = u(HTMLElement, n, { shouldThrow: !1 });
				l.status || (this._errors = [...this._errors, ...l.errors], this._valid = !1);
			}
			if (Object.keys(this._selectors).length > 0) {
				const n = {};
				for (const a of Object.keys(this._selectors)) this._selectors[a] !== "" && (n[`${a}Selector`] = this._selectors[a]);
				const l = j(n, { shouldThrow: !1 });
				l.status || (this._errors = [...this._errors, ...l.errors], this._valid = !1);
			}
			if (Object.keys(this._classes).length > 0) {
				const n = {};
				for (const a of Object.keys(this._classes)) this._classes[a] !== "" && (n[`${a}Class`] = this._classes[a]);
				const l = c(n, { shouldThrow: !1 });
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
			this._shouldStore && (u(b, { storage: window[`${this.scope}Storage`] }, { shouldThrow: !1 }).status || new b({ scope: `${this.scope}Storage` }), window[`${this.scope}Storage`].set({
				key: this.id !== "" ? this.id : this.key,
				type: this._storageKey,
				data: this
			}));
		}
		_unstore() {
			this._shouldStore && u(b, { storage: window[`${this.scope}Storage`] }, { shouldThrow: !1 }).status && window[`${this.scope}Storage`].clear({
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
			U(t, this), o("boolean", { emit: s }), s && this.shouldEmit && u(HTMLElement, { element: e });
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
	}, G = class extends V {
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
	}, T = class {
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
	}, K = class extends G {
		_name = "CollapsibleComponent";
		_expanded = new T(!1);
		_locked = new T(!1);
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
		constructor({ controlledElement: t, controllerElement: e = null, triggerElement: s = null, lockClass: i = "locked", unlockClass: r = "unlocked", expandClass: n = "show", collapseClass: l = "hide", transitionClass: a = "transitioning", transitionDelay: p = 250, transitionDuration: f = 150, expandDuration: B = -1, collapseDuration: D = -1, expandInsideBreakpoint: g = !1, expandOutsideBreakpoint: y = !1, collapseInsideBreakpoint: w = !1, collapseOutsideBreakpoint: v = !1, lockInsideBreakpoint: _ = !1, lockOutsideBreakpoint: I = !1, unlockInsideBreakpoint: Z = !1, unlockOutsideBreakpoint: W = !1, expandOnFocus: X = !1, collapseOnBlur: Y = !1, expanded: tt = !1, locked: et = !1, breakpoint: st = "", mediaQuery: it = "", prefix: rt = "ae-", key: nt = null, initializeClass: ot = "initializing", emit: at = !0, bootstrap: lt = !0, initialize: ht = !0 } = {}) {
			super({
				breakpoint: st,
				mediaQuery: it,
				prefix: rt,
				key: nt,
				initializeClass: ot,
				emit: at,
				bootstrap: !1,
				initialize: !1
			}), this._dom.controller = e, this._dom.trigger = s ?? e, this._dom.controlled = t, this._protectedDOMElements.push("controller", "trigger", "controlled"), this._classes.locked = i || "", this._classes.unlocked = r || "", this._classes.expand = n || "", this._classes.collapse = l || "", this._classes.transition = a || "", this._delays.transition = p, this._durations.transition = f, this._durations.expand = B, this._durations.collapse = D, this._expandInsideBreakpoint = g, this._expandOutsideBreakpoint = y, this._collapseInsideBreakpoint = w, this._collapseOutsideBreakpoint = v, this._lockInsideBreakpoint = _, this._lockOutsideBreakpoint = I, this._unlockInsideBreakpoint = Z, this._unlockOutsideBreakpoint = W, this._expandOnFocus = X, this._collapseOnBlur = Y, this._expanded.value = tt, this._expanded.commit(), this._locked.value = et, this._locked.commit(), lt && this._bootstrap(), ht && this.initialize();
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
	}, H = class extends K {
		_scope = "Graupl";
		_rootDOMElement = "alert";
		_storageKey = "alerts";
		_name = "Alert";
		constructor({ alertElement: t, controllerElement: e = null, expandClass: s = "show", collapseClass: i = "hide", transitionClass: r = "transitioning", transitionDuration: n = 150, expandDuration: l = -1, collapseDuration: a = -1, expanded: p = !0, prefix: f = "graupl-", key: B = null, initializeClass: D = "initializing", showClass: g, hideClass: y, showDuration: w, hideDuration: v, isHidden: _, initialize: I = !1 } = {}) {
			g !== void 0 && (console.warn("Graupl Alert option \"showClass\" is deprecated and will be removed. Use expandClass instead."), s = g), y !== void 0 && (console.warn("Graupl Alert option \"hideClass\" is deprecated and will be removed. Use collapseClass instead."), i = y), w !== void 0 && (console.warn("Graupl Alert option \"showDuration\" is deprecated and will be removed. Use expandDuration instead."), l = w), v !== void 0 && (console.warn("Graupl Alert option \"hideDuration\" is deprecated and will be removed. Use collapseDuration instead."), a = v), _ !== void 0 && (console.warn("Graupl Alert option \"isHidden\" is deprecated and will be removed. Use expanded instead."), p = typeof _ == "boolean" ? !_ : _), super({
				controlledElement: t,
				controllerElement: e,
				expanded: p,
				expandClass: s,
				collapseClass: i,
				transitionClass: r,
				transitionDuration: n,
				expandDuration: l,
				collapseDuration: a,
				prefix: f,
				key: B,
				initializeClass: D,
				bootstrap: !1,
				initialize: !1
			}), this._dom.alert = t, this._bootstrap(), I && this.initialize();
		}
		_registerEvents() {
			super._registerEvents(), this._registerEvent("preexpand", { detail: { alert: this } }), this._registerEvent("expand", { detail: { alert: this } }), this._registerEvent("postexpand", { detail: { alert: this } }), this._registerEvent("precollapse", { detail: { alert: this } }), this._registerEvent("collapse", { detail: { alert: this } }), this._registerEvent("postcollapse", { detail: { alert: this } }), this._addInternalEventListener(this.getEventName("preexpand"), () => {
				this.dom.alert.removeAttribute("inert");
			}), this._addInternalEventListener(this.getEventName("precollapse"), () => {
				this.dom.alert.setAttribute("inert", "true");
			});
		}
		get showClass() {
			return console.warn("Graupl Alert.showClass is deprecated and will be removed. Use expandClass instead."), this.expandClass;
		}
		set showClass(t) {
			console.warn("Graupl Alert.showClass is deprecated and will be removed. Use expandClass instead."), this.expandClass = t;
		}
		get hideClass() {
			return console.warn("Graupl Alert.hideClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass;
		}
		set hideClass(t) {
			console.warn("Graupl Alert.hideClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass = t;
		}
		get showDuration() {
			return console.warn("Graupl Alert.showDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration;
		}
		set showDuration(t) {
			console.warn("Graupl Alert.showDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration = t;
		}
		get hideDuration() {
			return console.warn("Graupl Alert.hideDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration;
		}
		set hideDuration(t) {
			console.warn("Graupl Alert.hideDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration = t;
		}
		get isHidden() {
			return console.warn("Graupl Alert.isHidden is deprecated and will be removed. Use !isExpanded instead."), !this.isExpanded;
		}
		_setIds() {
			this.dom.alert.id = this.dom.alert.id || `alert-${this.key}`, this.dom.controller && (this.dom.controller.id = this.dom.controller.id || `alert-controller-${this.key}`), this._id = this.dom.alert.id;
		}
		_setCustomProps() {
			this.dom.alert.style.setProperty(`--${this.prefix}alert-transition-duration`, `${this.transitionDuration}ms`), this.dom.alert.style.setProperty(`--${this.prefix}alert-show-transition-duration`, `${this.expandDuration}ms`), this.dom.alert.style.setProperty(`--${this.prefix}alert-hide-transition-duration`, `${this.collapseDuration}ms`);
		}
		_handleClick() {
			this.dom.controller !== null && this._addEventListener("click", this.dom.controller, () => this.collapse());
		}
		_handleKeydown() {
			this.dom.controller !== null && this._addEventListener("keydown", this.dom.controller, (t) => {
				const e = $(t);
				(e === "Space" || e === "Enter") && S(t);
			});
		}
		_handleKeyup() {
			this.dom.controller !== null && this._addEventListener("keyup", this.dom.controller, (t) => {
				const e = $(t);
				(e === "Space" || e === "Enter") && this.collapse();
			});
		}
		show(...t) {
			return console.warn("Graupl Alert.show() is deprecated and will be removed. Use expand() instead."), this.expand(...t);
		}
		hide(...t) {
			return console.warn("Graupl Alert.hide() is deprecated and will be removed. Use collapse() instead."), this.collapse(...t);
		}
	};
	const M = /[\11\12\14\15\40]+/, O = "data-once", R = document;
	function x(t, e, s) {
		return t[`${e}Attribute`](O, s);
	}
	function m(t) {
		if (typeof t != "string") throw new TypeError("once ID must be a string");
		if (t === "" || M.test(t)) throw new RangeError("once ID must not be empty or contain spaces");
		return `[${O}~="${t}"]`;
	}
	function N(t) {
		if (!(t instanceof Element)) throw new TypeError("The element must be an instance of Element");
		return !0;
	}
	function k(t, e = R) {
		let s = t;
		if (t === null) s = [];
		else if (t) if (e instanceof Document || e instanceof DocumentFragment || e instanceof Element) typeof t == "string" ? s = e.querySelectorAll(t) : t instanceof Element && (s = [t]);
		else throw new TypeError("Context must be an object of type \"Document\", \"DocumentFragment\", or \"Element\".");
		else throw new TypeError("Selector must not be empty");
		return Array.prototype.slice.call(s);
	}
	function C(t, e, s) {
		return e.filter((i) => {
			const r = N(i) && i.matches(t);
			return r && s && s(i), r;
		});
	}
	function z(t, { add: e, remove: s }) {
		const i = [];
		x(t, "has") && x(t, "get").trim().split(M).forEach((n) => {
			i.indexOf(n) < 0 && n !== s && i.push(n);
		}), e && i.push(e);
		const r = i.join(" ");
		x(t, r === "" ? "remove" : "set", r);
	}
	function E(t, e, s) {
		return C(`:not(${m(t)})`, k(e, s), (i) => z(i, { add: t }));
	}
	E.remove = (t, e, s) => C(m(t), k(e, s), (i) => z(i, { remove: t })), E.filter = (t, e, s) => C(m(t), k(e, s)), E.find = (t, e) => k(t ? m(t) : `[${O}]`, e);
	const J = ({ options: t = {}, context: e = document, selector: s = ".alert" } = {}) => {
		E("graupl-alert-generator", s, e).forEach((i) => {
			const r = i.dataset.grauplAlertOptions ? JSON.parse(i.dataset.grauplAlertOptions.replace(/'/g, "\"")) || {} : {};
			new H({
				alertElement: i,
				controllerElement: i.querySelector(".alert-dismisser") || null,
				initialize: !0,
				...t,
				...r
			});
		});
	};
	document.addEventListener("DOMContentLoaded", () => {
		J();
	});
})();

//# sourceMappingURL=alert.js.map