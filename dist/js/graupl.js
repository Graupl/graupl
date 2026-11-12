(function() {
	function L(e, t, { shouldThrow: s = !0 } = {}) {
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
	function a(e, t, { shouldThrow: s = !0 } = {}) {
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
	function ue(e, { shouldThrow: t = !0 } = {}) {
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
	function C(e, { shouldThrow: t = !0 } = {}) {
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
	function pe(e, { shouldThrow: t = !0 } = {}) {
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
	function me(e, { shouldThrow: t = !0 } = {}) {
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
	function oe(e, { shouldThrow: t = !0 } = {}) {
		const s = {
			status: !0,
			errors: []
		};
		try {
			if (typeof e != "object") throw new TypeError(`Values given to isValidHoverType() must be inside of an object. "${typeof e}" given.`);
			const i = [
				"off",
				"on",
				"dynamic"
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
	function K(e, t, { shouldThrow: s = !0 } = {}) {
		const i = {
			status: !0,
			errors: []
		};
		try {
			if (a("string", { tagName: e }, { shouldThrow: !0 }).status && L(HTMLElement, t, { shouldThrow: !0 }).status) {
				const r = e.toLowerCase();
				for (const o in t) try {
					if (t[o].tagName.toLowerCase() !== r) throw new TypeError(`${o} must be a <${r}> element. <${t[o].tagName.toLowerCase()}> given.`);
				} catch (n) {
					i.status = !1, i.errors.push(n);
				}
			}
		} catch (r) {
			i.status = !1, i.errors.push(r);
		}
		if (s && !i.status) throw i.errors[0];
		return i;
	}
	function _e(e, t, { shouldThrow: s = !0 } = {}) {
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
	function fe(e, { shouldThrow: t = !0 } = {}) {
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
	function ge(e) {
		return a("string", { value: e }), `${e.charAt(0).toLowerCase()}${e.slice(1)}`;
	}
	function ne(e) {
		return a("string", { value: e }), `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
	}
	var te = class he {
		_scope;
		_type = "_default";
		_storage = {};
		_crush = !1;
		constructor({ scope: t, type: s = null, crush: i = !1, initialize: r = !0 } = {}) {
			this._scope = t, this._type = s || "_default", this._crush = i, r && this.initialize();
		}
		initialize() {
			try {
				!this._crush && typeof window[this.scope] < "u" && (L(he, { storage: window[this.scope] }, { shouldThrow: !1 }).status || typeof window[this.scope].storage < "u" && typeof window[this.scope].scope < "u" && typeof window[this.scope].type < "u") && (this._storage = window[this.scope].storage);
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
			a("string", { type: t }) && (this._type = t);
		}
		get storage() {
			return this._storage;
		}
		get({ type: t = this.type, key: s = null } = {}) {
			const i = a("string", { type: t }, { shouldThrow: !1 });
			if (!i.status) throw i.errors[0];
			if (!this.storage[t]) throw new Error(`StorageManager (${this.scope}): Type "${t}" is not initialized.`);
			if (s !== null) {
				const r = a("string", { key: s }, { shouldThrow: !1 });
				if (!r.status) throw r.errors[0];
				return this.storage[t][s];
			}
			return this.storage[t];
		}
		set({ type: t = this.type, key: s = null, data: i = {} } = {}) {
			const r = a("string", { type: t }, { shouldThrow: !1 }), o = a("object", { data: i }, { shouldThrow: !1 });
			if (!r.status) throw r.errors[0];
			if (!o.status) throw o.errors[0];
			if (s !== null) {
				const n = a("string", { key: s }, { shouldThrow: !1 });
				if (!n.status) throw n.errors[0];
				this._storage[t] || (this._storage[t] = {}), this._storage[t][s] = i;
			} else this._storage[t] = i;
		}
		clear({ type: t = this.type, key: s = null } = {}) {
			const i = a("string", { type: t }, { shouldThrow: !1 });
			if (!i.status) throw i.errors[0];
			if (s !== null) {
				const r = a("string", { key: s }, { shouldThrow: !1 });
				if (!r.status) throw r.errors[0];
				delete this.storage[t][s];
			} else delete this.storage[t];
		}
		dispose() {
			typeof window < "u" && window[this.scope] === this && delete window[this.scope], delete this._storage;
		}
	};
	function k(e, t) {
		if (!(e === "" || e.length === 0)) if (typeof e == "string") t.classList.add(e);
		else {
			const s = e.filter((i) => i !== "");
			s.length > 0 && t.classList.add(...s);
		}
	}
	function w(e, t) {
		if (!(e === "" || e.length === 0)) if (typeof e == "string") t.classList.remove(e);
		else {
			const s = e.filter((i) => i !== "");
			s.length > 0 && t.classList.remove(...s);
		}
	}
	var z = class {
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
				k(this.initializeClass, this.rootDOMElement), this._dispatchEvent("preinitialize", this.rootDOMElement), this._generateKey(), this._setDOMElements(), this._setIds(), this._setAriaAttributes(), this._setCustomProps(), this._createChildElements(), this._handleFocus(), this._handleHover(), this._handleClick(), this._handleKeydown(), this._handleKeyup(), this._dispatchEvent("initialize", this.rootDOMElement), this._store(), w(this.initializeClass, this.rootDOMElement), this._initialized = !0, this._dispatchEvent("postinitialize", this.rootDOMElement);
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
			C({ initializeClass: e }), this._classes.initialize !== e && (this._classes.initialize = e);
		}
		get focusState() {
			return this._focusState;
		}
		set focusState(e) {
			pe({ focusState: e }), this._focusState !== e && (this._focusState = e);
		}
		get currentEvent() {
			return this._currentEvent;
		}
		set currentEvent(e) {
			me({ currentEvent: e }), this._currentEvent !== e && (this._currentEvent = e);
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
			return this._eventPrefix !== "" ? this._eventPrefix : `${ge(this.scope)}${ne(this.name)}`;
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
			a("boolean", { shouldEmit: e }), this._shouldEmit = e;
		}
		get errors() {
			return this._errors;
		}
		_validate() {
			this._errors = [], this._valid = !0, this._dispatchEvent("prevalidate", this.rootDOMElement);
			const e = fe(this, { shouldThrow: !1 });
			if (e.status || (this._errors = [...this._errors, ...e.errors], this._valid = !1), Object.keys(this._dom).length > 0) {
				const o = {};
				for (const l of Object.keys(this._dom)) Array.isArray(this._dom[l]) ? this._dom[l].forEach((u, p) => {
					o[`${l}Element[${p}]`] = u;
				}) : this._dom[l] !== null && (o[`${l}Element`] = this._dom[l]);
				const n = L(HTMLElement, o, { shouldThrow: !1 });
				n.status || (this._errors = [...this._errors, ...n.errors], this._valid = !1);
			}
			if (Object.keys(this._selectors).length > 0) {
				const o = {};
				for (const l of Object.keys(this._selectors)) this._selectors[l] !== "" && (o[`${l}Selector`] = this._selectors[l]);
				const n = ue(o, { shouldThrow: !1 });
				n.status || (this._errors = [...this._errors, ...n.errors], this._valid = !1);
			}
			if (Object.keys(this._classes).length > 0) {
				const o = {};
				for (const l of Object.keys(this._classes)) this._classes[l] !== "" && (o[`${l}Class`] = this._classes[l]);
				const n = C(o, { shouldThrow: !1 });
				n.status || (this._errors = [...this._errors, ...n.errors], this._valid = !1);
			}
			if (Object.keys(this._durations).length > 0) {
				const o = {};
				for (const l of Object.keys(this._durations)) o[`${l}Duration`] = this._durations[l];
				const n = a("number", o, { shouldThrow: !1 });
				n.status || (this._errors = [...this._errors, ...n.errors], this._valid = !1);
			}
			if (Object.keys(this.delays).length > 0) {
				const o = {};
				for (const l of Object.keys(this.delays)) o[`${l}Delay`] = this.delays[l];
				const n = a("number", o, { shouldThrow: !1 });
				n.status || (this._errors = [...this._errors, ...n.errors], this._valid = !1);
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
			const s = a("string", t, { shouldThrow: !1 });
			s.status || (this._errors = [...this._errors, ...s.errors], this._valid = !1);
			const r = a("boolean", {
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
			L(HTMLElement, { context: t });
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
			this._shouldStore && (L(te, { storage: window[`${this.scope}Storage`] }, { shouldThrow: !1 }).status || new te({ scope: `${this.scope}Storage` }), window[`${this.scope}Storage`].set({
				key: this.id !== "" ? this.id : this.key,
				type: this._storageKey,
				data: this
			}));
		}
		_unstore() {
			this._shouldStore && L(te, { storage: window[`${this.scope}Storage`] }, { shouldThrow: !1 }).status && window[`${this.scope}Storage`].clear({
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
			a("string", { name: e }), a("boolean", { bubbles: t }), a("object", { detail: s });
			const i = `${this.eventPrefix}${ne(e)}`;
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
			_e(e, this), a("boolean", { emit: s }), s && this.shouldEmit && L(HTMLElement, { element: t });
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
				const n = o.options, l = typeof n == "boolean" ? n : !!n?.capture;
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
	}, be = class extends z {
		_name = "ResponsiveComponent";
		_breakpoint = "";
		_mediaQueryString = "";
		_mediaQueryList = null;
		constructor({ breakpoint: e = "", mediaQuery: t = "", prefix: s = "ae-", key: i = null, initializeClass: r = "initializing", emit: o = !0, bootstrap: n = !0, initialize: l = !0 } = {}) {
			super({
				prefix: s,
				key: i,
				initializeClass: r,
				emit: o,
				bootstrap: !1,
				initialize: !1
			}), this._breakpoint = e || "", this._mediaQueryString = t || "", n && this._bootstrap(), l && this.initialize();
		}
		_registerEvents() {
			super._registerEvents(), this._addInternalEventListener(this.getEventName("validate"), (e) => {
				if (e.detail.component !== this) return;
				const s = a("string", {
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
			a("string", { breakpoint: e }), this._breakpoint !== e && (this._breakpoint = e, this.isInitialized && this._handleMediaMatch());
		}
		get mediaQuery() {
			return this._mediaQueryString !== "" ? this._mediaQueryString : this._breakpoint === "" ? "" : `(width <= ${this._breakpoint})`;
		}
		set mediaQuery(e) {
			a("string", { mediaQuery: e }), this._mediaQueryString !== e && (this._mediaQueryString = e, this.isInitialized && this._handleMediaMatch());
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
	}, ae = class {
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
	}, F = class extends be {
		_name = "CollapsibleComponent";
		_expanded = new ae(!1);
		_locked = new ae(!1);
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
		constructor({ controlledElement: e, controllerElement: t = null, triggerElement: s = null, lockClass: i = "locked", unlockClass: r = "unlocked", expandClass: o = "show", collapseClass: n = "hide", transitionClass: l = "transitioning", transitionDelay: u = 250, transitionDuration: p = 150, expandDuration: f = -1, collapseDuration: E = -1, expandInsideBreakpoint: v = !1, expandOutsideBreakpoint: g = !1, collapseInsideBreakpoint: m = !1, collapseOutsideBreakpoint: _ = !1, lockInsideBreakpoint: h = !1, lockOutsideBreakpoint: b = !1, unlockInsideBreakpoint: y = !1, unlockOutsideBreakpoint: O = !1, expandOnFocus: T = !1, collapseOnBlur: I = !1, expanded: D = !1, locked: A = !1, breakpoint: B = "", mediaQuery: $ = "", prefix: j = "ae-", key: P = null, initializeClass: G = "initializing", emit: U = !0, bootstrap: S = !0, initialize: M = !0 } = {}) {
			super({
				breakpoint: B,
				mediaQuery: $,
				prefix: j,
				key: P,
				initializeClass: G,
				emit: U,
				bootstrap: !1,
				initialize: !1
			}), this._dom.controller = t, this._dom.trigger = s ?? t, this._dom.controlled = e, this._protectedDOMElements.push("controller", "trigger", "controlled"), this._classes.locked = i || "", this._classes.unlocked = r || "", this._classes.expand = o || "", this._classes.collapse = n || "", this._classes.transition = l || "", this._delays.transition = u, this._durations.transition = p, this._durations.expand = f, this._durations.collapse = E, this._expandInsideBreakpoint = v, this._expandOutsideBreakpoint = g, this._collapseInsideBreakpoint = m, this._collapseOutsideBreakpoint = _, this._lockInsideBreakpoint = h, this._lockOutsideBreakpoint = b, this._unlockInsideBreakpoint = y, this._unlockOutsideBreakpoint = O, this._expandOnFocus = T, this._collapseOnBlur = I, this._expanded.value = D, this._expanded.commit(), this._locked.value = A, this._locked.commit(), S && this._bootstrap(), M && this.initialize();
		}
		_registerEvents() {
			super._registerEvents(), this._registerEvent("preexpand"), this._registerEvent("expand"), this._registerEvent("postexpand"), this._registerEvent("precollapse"), this._registerEvent("collapse"), this._registerEvent("postcollapse"), this._registerEvent("prelock"), this._registerEvent("lock"), this._registerEvent("postlock"), this._registerEvent("preunlock"), this._registerEvent("unlock"), this._registerEvent("postunlock"), this._addInternalEventListener(this.getEventName("validate"), (e) => {
				if (e.detail.component !== this) return;
				const s = a("boolean", {
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
			C({ lockedClass: e }), this._classes.locked !== e && (this._classes.locked = e);
		}
		get unlockedClass() {
			return this._classes.unlocked;
		}
		set unlockedClass(e) {
			C({ unlockedClass: e }), this._classes.unlocked !== e && (this._classes.unlocked = e);
		}
		get expandClass() {
			return this._classes.expand;
		}
		set expandClass(e) {
			C({ expandClass: e }), this._classes.expand !== e && (this._classes.expand = e);
		}
		get collapseClass() {
			return this._classes.collapse;
		}
		set collapseClass(e) {
			C({ collapseClass: e }), this._classes.collapse !== e && (this._classes.collapse = e);
		}
		get transitionClass() {
			return this._classes.transition;
		}
		set transitionClass(e) {
			C({ transitionClass: e }), this._classes.transition !== e && (this._classes.transition = e);
		}
		get transitionDuration() {
			return this._durations.transition;
		}
		set transitionDuration(e) {
			a("number", { transitionDuration: e }), this._durations.transition !== e && (this._durations.transition = e, this._setCustomProps());
		}
		get expandDuration() {
			return this._durations.expand === -1 ? this.transitionDuration : this._durations.expand;
		}
		set expandDuration(e) {
			a("number", { expandDuration: e }), this._durations.expand !== e && (this._durations.expand = e, this._setCustomProps());
		}
		get collapseDuration() {
			return this._durations.collapse === -1 ? this.transitionDuration : this._durations.collapse;
		}
		set collapseDuration(e) {
			a("number", { collapseDuration: e }), this._durations.collapse !== e && (this._durations.collapse = e, this._setCustomProps());
		}
		get expandOnFocus() {
			return this._expandOnFocus;
		}
		set expandOnFocus(e) {
			a("boolean", { expandOnFocus: e }), this._expandOnFocus !== e && (this._expandOnFocus = e);
		}
		get collapseOnBlur() {
			return this._collapseOnBlur;
		}
		set collapseOnBlur(e) {
			a("boolean", { collapseOnBlur: e }), this._collapseOnBlur !== e && (this._collapseOnBlur = e);
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
			a("boolean", { expandInsideBreakpoint: e }), this._expandInsideBreakpoint !== e && (this._expandInsideBreakpoint = e);
		}
		get expandOutsideBreakpoint() {
			return this._expandOutsideBreakpoint;
		}
		set expandOutsideBreakpoint(e) {
			a("boolean", { expandOutsideBreakpoint: e }), this._expandOutsideBreakpoint !== e && (this._expandOutsideBreakpoint = e);
		}
		get collapseInsideBreakpoint() {
			return this._collapseInsideBreakpoint;
		}
		set collapseInsideBreakpoint(e) {
			a("boolean", { collapseInsideBreakpoint: e }), this._collapseInsideBreakpoint !== e && (this._collapseInsideBreakpoint = e);
		}
		get collapseOutsideBreakpoint() {
			return this._collapseOutsideBreakpoint;
		}
		set collapseOutsideBreakpoint(e) {
			a("boolean", { collapseOutsideBreakpoint: e }), this._collapseOutsideBreakpoint !== e && (this._collapseOutsideBreakpoint = e);
		}
		get lockInsideBreakpoint() {
			return this._lockInsideBreakpoint;
		}
		set lockInsideBreakpoint(e) {
			a("boolean", { lockInsideBreakpoint: e }), this._lockInsideBreakpoint !== e && (this._lockInsideBreakpoint = e);
		}
		get lockOutsideBreakpoint() {
			return this._lockOutsideBreakpoint;
		}
		set lockOutsideBreakpoint(e) {
			a("boolean", { lockOutsideBreakpoint: e }), this._lockOutsideBreakpoint !== e && (this._lockOutsideBreakpoint = e);
		}
		get unlockInsideBreakpoint() {
			return this._unlockInsideBreakpoint;
		}
		set unlockInsideBreakpoint(e) {
			a("boolean", { unlockInsideBreakpoint: e }), this._unlockInsideBreakpoint = e;
		}
		get unlockOutsideBreakpoint() {
			return this._unlockOutsideBreakpoint;
		}
		set unlockOutsideBreakpoint(e) {
			a("boolean", { unlockOutsideBreakpoint: e }), this._unlockOutsideBreakpoint = e;
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
			this._dispatchEvent("preexpand", this.rootDOMElement, { emit: e }), this._cancelAnimationFrame("expandTransition"), this._cancelAnimationFrame("collapseTransition"), this._clearTimeout("expandTransition"), this._clearTimeout("collapseTransition"), t && this.transitionClass !== "" ? (k(this.transitionClass, this.dom.controlled), this._requestAnimationFrame(() => {
				w(this.collapseClass, this.dom.controlled), this._requestAnimationFrame(() => {
					k(this.expandClass, this.dom.controlled), this._requestAnimationFrame(() => {
						this._setTimeout(() => {
							w(this.transitionClass, this.dom.controlled), this._dispatchEvent("postexpand", this.rootDOMElement, { emit: e });
						}, this.expandDuration, "expandTransition");
					}, "expandTransition"), this._dispatchEvent("expand", this.rootDOMElement, { emit: e });
				}, "expandTransition");
			}, "expandTransition")) : (w(this.transitionClass, this.dom.controlled), k(this.expandClass, this.dom.controlled), w(this.collapseClass, this.dom.controlled), this._dispatchEvent("expand", this.rootDOMElement, { emit: e }), this._dispatchEvent("postexpand", this.rootDOMElement, { emit: e }));
		}
		_collapse({ emit: e = this.isInitialized && this.shouldEmit, transition: t = this.isInitialized } = {}) {
			this._dispatchEvent("precollapse", this.rootDOMElement, { emit: e }), this._cancelAnimationFrame("expandTransition"), this._cancelAnimationFrame("collapseTransition"), this._clearTimeout("expandTransition"), this._clearTimeout("collapseTransition"), t && this.transitionClass !== "" ? (k(this.transitionClass, this.dom.controlled), this._requestAnimationFrame(() => {
				w(this.expandClass, this.dom.controlled), this._requestAnimationFrame(() => {
					k(this.collapseClass, this.dom.controlled), this._requestAnimationFrame(() => {
						this._setTimeout(() => {
							w(this.transitionClass, this.dom.controlled), this._dispatchEvent("postcollapse", this.rootDOMElement, { emit: e });
						}, this.collapseDuration, "collapseTransition");
					}, "collapseTransition"), this._dispatchEvent("collapse", this.rootDOMElement, { emit: e });
				}, "collapseTransition");
			}, "collapseTransition")) : (w(this.transitionClass, this.dom.controlled), k(this.collapseClass, this.dom.controlled), w(this.expandClass, this.dom.controlled), this._dispatchEvent("collapse", this.rootDOMElement, { emit: e }), this._dispatchEvent("postcollapse", this.rootDOMElement, { emit: e }));
		}
		_lock({ emit: e = this.isInitialized && this.shouldEmit } = {}) {
			this._dispatchEvent("prelock", this.rootDOMElement, { emit: e }), k(this.lockedClass, this.dom.controlled), w(this.unlockedClass, this.dom.controlled), this.dom.controller?.setAttribute("disabled", "true"), this._dispatchEvent("lock", this.rootDOMElement, { emit: e }), this._dispatchEvent("postlock", this.rootDOMElement, { emit: e });
		}
		_unlock({ emit: e = this.isInitialized && this.shouldEmit } = {}) {
			this._dispatchEvent("preunlock", this.rootDOMElement, { emit: e }), k(this.unlockedClass, this.dom.controlled), w(this.lockedClass, this.dom.controlled), this.dom.controller?.removeAttribute("disabled"), this._dispatchEvent("unlock", this.rootDOMElement, { emit: e }), this._dispatchEvent("postunlock", this.rootDOMElement, { emit: e });
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
	}, Ee = class extends F {
		_scope = "Graupl";
		_rootDOMElement = "item";
		_name = "AccordionItem";
		_storageKey = "accordionItems";
		_shouldStore = !1;
		constructor({ accordionItemElement: e, accordionItemToggleElement: t, accordionItemHeaderElement: s, accordionItemContentElement: i, parentAccordion: r = null }) {
			super({
				controllerElement: t,
				controlledElement: e,
				expandClass: r.classes.expand,
				collapseClass: r.classes.collapse,
				transitionClass: r.classes.transition,
				transitionDuration: r.durations.transition,
				expandDuration: r.durations.expand,
				collapseDuration: r.durations.collapse,
				lockClass: "",
				unlockClass: "",
				bootstrap: !1,
				initialize: !1,
				prefix: r.prefix,
				key: r.key
			}), this._protectedDOMElements.push("toggle", "header", "content"), this._dom.item = e, this._dom.toggle = t, this._dom.header = s, this._dom.content = i, this._elements.parent = r, this._bootstrap();
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
		set currentEvent(e) {
			this.elements.parent ? this.elements.parent.currentEvent = e : super.currentEvent = e;
		}
		get shouldFocus() {
			return this.elements.parent ? this.elements.parent.shouldFocus : super.shouldFocus;
		}
		get expandClass() {
			return this.elements.parent.expandClass;
		}
		set expandClass(e) {
			this.elements.parent.expandClass = e, this._classes.expand = e;
		}
		get collapseClass() {
			return this.elements.parent.collapseClass;
		}
		set collapseClass(e) {
			this.elements.parent.collapseClass = e, this._classes.collapse = e;
		}
		get transitionClass() {
			return this.elements.parent.transitionClass;
		}
		set transitionClass(e) {
			this.elements.parent.transitionClass = e, this._classes.transition = e;
		}
		get transitionDuration() {
			return this.elements.parent.transitionDuration;
		}
		set transitionDuration(e) {
			this.elements.parent.transitionDuration = e, this._durations.transition = e;
		}
		get expandDuration() {
			return this.elements.parent.expandDuration;
		}
		set expandDuration(e) {
			this.elements.parent.expandDuration = e, this._durations.expand = e;
		}
		get collapseDuration() {
			return this.elements.parent.collapseDuration;
		}
		set collapseDuration(e) {
			this.elements.parent.collapseDuration = e, this._durations.collapse = e;
		}
		_setIds() {
			const { key: e } = this.elements.parent, t = this.elements.parent.dom.accordionItems.indexOf(this.dom.item);
			this.dom.item.id = this.dom.item.id || `accordion-item-${e}-${t}`, this.dom.toggle.id = this.dom.toggle.id || `accordion-item-toggle-${e}-${t}`, this.dom.header.id = this.dom.header.id || `accordion-item-header-${e}-${t}`, this.dom.content.id = this.dom.content.id || `accordion-item-content-${e}-${t}`;
		}
		_setAriaAttributes() {
			K("button", { toggle: this.dom.toggle }, { shouldThrow: !1 }).status || this.dom.toggle.setAttribute("role", "button"), this.dom.toggle.getAttribute("aria-expanded") !== "true" && this.dom.toggle.setAttribute("aria-expanded", "false"), this.dom.toggle.setAttribute("aria-controls", this.dom.content.id), K("section", { content: this.dom.content }, { shouldThrow: !1 }).status || this.dom.content.setAttribute("role", "region"), this.dom.content.setAttribute("aria-labelledby", this.dom.toggle.id);
		}
		collapse(e = {}) {
			this.isInitialized && !e.force && this.isExpanded && !this.elements.parent.allowCollapseAll && this.elements.parent.expandedAccordionItems.length <= 1 || super.collapse(e);
		}
		focus() {
			this.focusState = "self", this.shouldFocus && this.dom.toggle.focus(), this.expandOnFocus && this.expand();
		}
		blur() {
			this.focusState = "none", this.shouldFocus && this.dom.toggle.blur(), this.collapseOnBlur && this.collapse();
		}
		collapseSiblings() {
			this.elements.parent && this.elements.parent.elements.accordionItems.forEach((e) => {
				e !== this && e.collapse();
			});
		}
		unlockSiblings(e = {}) {
			this.elements.parent && this.elements.parent.elements.accordionItems.forEach((t) => {
				t !== this && t.unlock(e);
			});
		}
		show(...e) {
			return console.warn("Graupl AccordionItem.show() is deprecated and will be removed. Use expand() instead."), this.expand(...e);
		}
		hide(...e) {
			return console.warn("Graupl AccordionItem.hide() is deprecated and will be removed. Use collapse() instead."), this.collapse(...e);
		}
		closeSiblings(...e) {
			return console.warn("Graupl AccordionItem.closeSiblings() is deprecated and will be removed. Use collapseSiblings() instead."), this.collapseSiblings(...e);
		}
	};
	function c(e) {
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
	function d(e) {
		e.preventDefault(), e.stopPropagation();
	}
	var ve = class extends z {
		_scope = "Graupl";
		_rootDOMElement = "accordion";
		_optionalKeySupport = !0;
		_expandMultiple = !0;
		_collapseAll = !0;
		_currentChild = 0;
		_storageKey = "accordions";
		_name = "Accordion";
		constructor({ accordionElement: e, accordionItemsSelector: t = ".accordion-item", accordionItemTogglesSelector: s = ".accordion-item-toggle", accordionItemHeadersSelector: i = ".accordion-item-header", accordionItemContentsSelector: r = ".accordion-item-content", accordionControlContainerSelector: o = ".accordion-control-container", accordionControlsSelector: n = ".accordion-control", expandControllerSelector: l = ".expand-all", collapseControllerSelector: u = ".collapse-all", expandClass: p = "show", collapseClass: f = "hide", transitionClass: E = "transitioning", transitionDuration: v = 300, expandDuration: g = -1, collapseDuration: m = -1, optionalKeySupport: _ = !1, allowExpandMultiple: h = !0, allowCollapseAll: b = !0, prefix: y = "graupl-", key: O = null, initializeClass: T = "initializing", openClass: I, closeClass: D, openDuration: A, closeDuration: B, initialize: $ = !1 }) {
			I !== void 0 && (console.warn("Graupl Accordion option \"openClass\" is deprecated and will be removed. Use expandClass instead."), p = I), D !== void 0 && (console.warn("Graupl Accordion option \"closeClass\" is deprecated and will be removed. Use collapseClass instead."), f = D), A !== void 0 && (console.warn("Graupl Accordion option \"openDuration\" is deprecated and will be removed. Use expandDuration instead."), g = A), B !== void 0 && (console.warn("Graupl Accordion option \"closeDuration\" is deprecated and will be removed. Use collapseDuration instead."), m = B), super({
				bootstrap: !1,
				initialize: !1,
				prefix: y,
				key: O,
				initializeClass: T
			}), this._dom.accordion = e, this._dom.accordionItems = [], this._dom.accordionItemToggles = [], this._dom.accordionItemHeaders = [], this._dom.accordionItemContents = [], this._dom.accordionControlContainer = null, this._dom.accordionControls = [], this._dom.expandController = [], this._dom.collapseController = [], this._selectors.accordionItems = t, this._selectors.accordionItemToggles = s, this._selectors.accordionItemHeaders = i, this._selectors.accordionItemContents = r, this._selectors.accordionControlContainer = o, this._selectors.accordionControls = n, this._selectors.expandController = l, this._selectors.collapseController = u, this._elements.accordionItems = [], this._classes.expand = p || "", this._classes.collapse = f || "", this._classes.transition = E || "", this._durations.transition = v, this._durations.expand = g, this._durations.collapse = m, this._optionalKeySupport = _, this._expandMultiple = h, this._collapseAll = b, this._bootstrap(), $ && this.initialize();
		}
		_registerEvents() {
			super._registerEvents(), this._addInternalEventListener(this.getEventName("initialize"), (e) => {
				e.detail.component === this && (this.dom.expandController.length > 0 && !this.allowExpandMultiple && this.dom.expandController.forEach((t) => {
					t.setAttribute("disabled", "disabled");
				}), this.dom.collapseController.length > 0 && !this.allowCollapseAll && this.dom.collapseController.forEach((t) => {
					t.setAttribute("disabled", "disabled");
				}));
			}), this._addInternalEventListener(this.getEventName("validate"), (e) => {
				if (e.detail.component !== this) return;
				const s = a("boolean", {
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
		set openClass(e) {
			console.warn("Graupl Accordion.openClass is deprecated and will be removed. Use expandClass instead."), this.expandClass = e;
		}
		get closeClass() {
			return console.warn("Graupl Accordion.closeClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass;
		}
		set closeClass(e) {
			console.warn("Graupl Accordion.closeClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass = e;
		}
		get openDuration() {
			return console.warn("Graupl Accordion.openDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration;
		}
		set openDuration(e) {
			console.warn("Graupl Accordion.openDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration = e;
		}
		get closeDuration() {
			return console.warn("Graupl Accordion.closeDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration;
		}
		set closeDuration(e) {
			console.warn("Graupl Accordion.closeDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration = e;
		}
		get openAccordionItems() {
			return console.warn("Graupl Accordion.openAccordionItems is deprecated and will be removed. Use expandedAccordionItems instead."), this.expandedAccordionItems;
		}
		get expandClass() {
			return this._classes.expand;
		}
		set expandClass(e) {
			C({ expandClass: e }), this._classes.expand !== e && (this._classes.expand = e);
		}
		get collapseClass() {
			return this._classes.collapse;
		}
		set collapseClass(e) {
			C({ collapseClass: e }), this._classes.collapse !== e && (this._classes.collapse = e);
		}
		get transitionClass() {
			return this._classes.transition;
		}
		set transitionClass(e) {
			C({ transitionClass: e }), this._classes.transition !== e && (this._classes.transition = e);
		}
		get transitionDuration() {
			return this._durations.transition;
		}
		set transitionDuration(e) {
			a("number", { transitionDuration: e }), this._durations.transition !== e && (this._durations.transition = e, this._setCustomProps());
		}
		get expandDuration() {
			return this._durations.expand === -1 ? this.transitionDuration : this._durations.expand;
		}
		set expandDuration(e) {
			a("number", { expandDuration: e }), this._durations.expand !== e && (this._durations.expand = e, this._setCustomProps());
		}
		get collapseDuration() {
			return this._durations.collapse === -1 ? this.transitionDuration : this._durations.collapse;
		}
		set collapseDuration(e) {
			a("number", { collapseDuration: e }), this._durations.collapse !== e && (this._durations.collapse = e, this._setCustomProps());
		}
		get currentChild() {
			return this._currentChild;
		}
		set currentChild(e) {
			a("number", { currentChild: e }), this._currentChild !== e && e >= 0 && e < this.elements.accordionItems.length && (this._currentChild = e);
		}
		get optionalKeySupport() {
			return this._optionalKeySupport;
		}
		set optionalKeySupport(e) {
			a("boolean", { optionalKeySupport: e }), this._optionalKeySupport !== e && (this._optionalKeySupport = e);
		}
		get currentAccordionItem() {
			return this.elements.accordionItems[this.currentChild];
		}
		get expandedAccordionItems() {
			return this.elements.accordionItems.filter((e) => e.isExpanded);
		}
		get allowExpandMultiple() {
			return this._expandMultiple;
		}
		set allowExpandMultiple(e) {
			a("boolean", { allowExpandMultiple: e }), this._expandMultiple !== e && (this._expandMultiple = e, this.dom.expandController.length > 0 && (e ? this.dom.expandController.forEach((t) => {
				t.removeAttribute("disabled");
			}) : this.dom.expandController.forEach((t) => {
				t.setAttribute("disabled", "disabled");
			})));
		}
		get allowCollapseAll() {
			return this._collapseAll;
		}
		set allowCollapseAll(e) {
			a("boolean", { allowCollapseAll: e }), this._collapseAll !== e && (this._collapseAll = e, this.dom.collapseController.length > 0 && (e ? this.dom.collapseController.forEach((t) => {
				t.removeAttribute("disabled");
			}) : this.dom.collapseController.forEach((t) => {
				t.setAttribute("disabled", "disabled");
			})));
		}
		_setIds() {
			this.dom.accordion.id = this.dom.accordion.id || `accordion-${this.key}`, this._id = this.dom.accordion.id;
		}
		_setCustomProps() {
			this.dom.accordion.style.setProperty(`--${this.prefix}accordion-transition-duration`, `${this.transitionDuration}ms`), this.dom.accordion.style.setProperty(`--${this.prefix}accordion-open-transition-duration`, `${this.expandDuration}ms`), this.dom.accordion.style.setProperty(`--${this.prefix}accordion-close-transition-duration`, `${this.collapseDuration}ms`);
		}
		_setDOMElements() {
			this._setDOMElementType("accordionItems", { context: this.dom.accordion }), this._resetDOMElementType("accordionItemToggles"), this._setDOMElementType("accordionControlContainer", { context: this.dom.accordion }), this.dom.accordionControlContainer && (this._setDOMElementType("accordionControls", { context: this.dom.accordionControlContainer }), this._setDOMElementType("expandController", { context: this.dom.accordionControlContainer }), this._setDOMElementType("collapseController", { context: this.dom.accordionControlContainer })), this.dom.accordionItems.forEach((e) => {
				this._setDOMElementType("accordionItemToggles", {
					context: e,
					overwrite: !1,
					strict: !1
				}), this._setDOMElementType("accordionItemHeaders", {
					context: e,
					overwrite: !1,
					strict: !1
				}), this._setDOMElementType("accordionItemContents", {
					context: e,
					overwrite: !1,
					strict: !1
				});
			});
		}
		_createChildElements() {
			this.dom.accordionItems.forEach((e, t) => {
				const s = new Ee({
					accordionItemElement: e,
					accordionItemToggleElement: this.dom.accordionItemToggles[t],
					accordionItemHeaderElement: this.dom.accordionItemHeaders[t],
					accordionItemContentElement: this.dom.accordionItemContents[t],
					parentAccordion: this
				});
				s._addInternalEventListener(s.getEventName("preexpand"), () => {
					const i = this.expandedAccordionItems.filter((r) => r !== s);
					this.allowExpandMultiple || (s.unlockSiblings({ emit: this.isInitialized }), i.forEach((r) => r.collapse({
						force: !0,
						emit: this.isInitialized && r.shouldEmit,
						transition: this.isInitialized
					}))), this.allowCollapseAll || (!this.allowExpandMultiple || i.length === 0 ? s.lock() : s.unlockSiblings({ emit: this.isInitialized }));
				}), s._addInternalEventListener(s.getEventName("precollapse"), () => {
					const i = this.expandedAccordionItems.filter((r) => r !== s);
					!this.allowCollapseAll && i.length === 1 && i[0].lock();
				}), this.elements.accordionItems.push(s), s.initialize();
			});
		}
		_handleFocus() {
			this.elements.accordionItems.forEach((e, t) => {
				this._addEventListener("focus", e.dom.toggle, () => {
					this.currentChild = t;
				});
			});
		}
		_handleClick() {
			this.elements.accordionItems.forEach((e, t) => {
				this._addEventListener("click", e.dom.toggle, () => {
					this.currentChild = t, this.currentEvent = "mouse", e.toggle();
				});
			}), this.dom.expandController.forEach((e) => {
				this._addEventListener("click", e, () => {
					this.currentEvent = "mouse", this.allowExpandMultiple && this.expandChildren();
				});
			}), this.dom.collapseController.forEach((e) => {
				this._addEventListener("click", e, () => {
					this.currentEvent = "mouse", this.allowCollapseAll && this.collapseChildren();
				});
			});
		}
		_handleKeydown() {
			this.dom.accordionItemToggles.forEach((e) => {
				this._addEventListener("keydown", e, (t) => {
					const s = c(t);
					["Space", "Enter"].includes(s) ? (d(t), this.currentEvent = "keyboard") : this.optionalKeySupport && [
						"ArrowDown",
						"ArrowUp",
						"Home",
						"End"
					].includes(s) && (d(t), this.currentEvent = "keyboard");
				});
			}), this.dom.accordionControls.forEach((e) => {
				this._addEventListener("keydown", e, (t) => {
					const s = c(t);
					["Space", "Enter"].includes(s) && (d(t), this.currentEvent = "keyboard");
				});
			});
		}
		_handleKeyup() {
			this.dom.accordionItemToggles.forEach((e) => {
				this._addEventListener("keyup", e, (t) => {
					const s = c(t);
					switch (s) {
						case "Space":
						case "Enter": d(t), this.currentEvent = "keyboard", this.currentAccordionItem.toggle();
					}
					if (this.optionalKeySupport) switch (s) {
						case "Home":
							d(t), this.focusFirstChild();
							break;
						case "End":
							d(t), this.focusLastChild();
							break;
						case "ArrowDown":
							d(t), this.focusNextChild();
							break;
						case "ArrowUp": d(t), this.focusPreviousChild();
					}
				});
			}), this.dom.expandController.forEach((e) => {
				this._addEventListener("keyup", e, (t) => {
					switch (c(t)) {
						case "Space":
						case "Enter": d(t), this.currentEvent = "keyboard", this.allowExpandMultiple && this.expandChildren();
					}
				});
			}), this.dom.collapseController.forEach((e) => {
				this._addEventListener("keyup", e, (t) => {
					switch (c(t)) {
						case "Space":
						case "Enter": d(t), this.currentEvent = "keyboard", this.allowCollapseAll && this.collapseChildren();
					}
				});
			});
		}
		focusCurrentChild() {
			this.currentChild !== -1 && this.currentAccordionItem.focus();
		}
		focusChild(e) {
			this.blurCurrentChild(), this.currentChild = e, this.focusCurrentChild();
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
			this.elements.accordionItems.forEach((e) => e.expand());
		}
		collapseChildren() {
			this.elements.accordionItems.forEach((e) => e.collapse());
		}
		openChildren(...e) {
			return console.warn("Graupl Accordion.openChildren() is deprecated and will be removed. Use expandChildren() instead."), this.expandChildren(...e);
		}
		closeChildren(...e) {
			return console.warn("Graupl Accordion.closeChildren() is deprecated and will be removed. Use collapseChildren() instead."), this.collapseChildren(...e);
		}
		dispose() {
			this.elements.accordionItems.forEach((e) => e.dispose()), super.dispose();
		}
	};
	const le = /[\11\12\14\15\40]+/, se = "data-once", we = document;
	function ie(e, t, s) {
		return e[`${t}Attribute`](se, s);
	}
	function Y(e) {
		if (typeof e != "string") throw new TypeError("once ID must be a string");
		if (e === "" || le.test(e)) throw new RangeError("once ID must not be empty or contain spaces");
		return `[${se}~="${e}"]`;
	}
	function Ce(e) {
		if (!(e instanceof Element)) throw new TypeError("The element must be an instance of Element");
		return !0;
	}
	function ee(e, t = we) {
		let s = e;
		if (e === null) s = [];
		else if (e) if (t instanceof Document || t instanceof DocumentFragment || t instanceof Element) typeof e == "string" ? s = t.querySelectorAll(e) : e instanceof Element && (s = [e]);
		else throw new TypeError("Context must be an object of type \"Document\", \"DocumentFragment\", or \"Element\".");
		else throw new TypeError("Selector must not be empty");
		return Array.prototype.slice.call(s);
	}
	function re(e, t, s) {
		return t.filter((i) => {
			const r = Ce(i) && i.matches(e);
			return r && s && s(i), r;
		});
	}
	function de(e, { add: t, remove: s }) {
		const i = [];
		ie(e, "has") && ie(e, "get").trim().split(le).forEach((o) => {
			i.indexOf(o) < 0 && o !== s && i.push(o);
		}), t && i.push(t);
		const r = i.join(" ");
		ie(e, r === "" ? "remove" : "set", r);
	}
	function x(e, t, s) {
		return re(`:not(${Y(e)})`, ee(t, s), (i) => de(i, { add: e }));
	}
	x.remove = (e, t, s) => re(Y(e), ee(t, s), (i) => de(i, { remove: e })), x.filter = (e, t, s) => re(Y(e), ee(t, s)), x.find = (e, t) => ee(e ? Y(e) : `[${se}]`, t);
	const ye = ({ options: e = {}, context: t = document, selector: s = ".accordion" } = {}) => {
		x("graupl-accordion-generator", s, t).forEach((i) => {
			const r = i.dataset.grauplAccordionOptions ? JSON.parse(i.dataset.grauplAccordionOptions.replace(/'/g, "\"")) || {} : {};
			new ve({
				accordionElement: i,
				initialize: !0,
				...e,
				...r
			});
		});
	};
	var ke = class extends F {
		_scope = "Graupl";
		_rootDOMElement = "alert";
		_storageKey = "alerts";
		_name = "Alert";
		constructor({ alertElement: e, controllerElement: t = null, expandClass: s = "show", collapseClass: i = "hide", transitionClass: r = "transitioning", transitionDuration: o = 150, expandDuration: n = -1, collapseDuration: l = -1, expanded: u = !0, prefix: p = "graupl-", key: f = null, initializeClass: E = "initializing", showClass: v, hideClass: g, showDuration: m, hideDuration: _, isHidden: h, initialize: b = !1 } = {}) {
			v !== void 0 && (console.warn("Graupl Alert option \"showClass\" is deprecated and will be removed. Use expandClass instead."), s = v), g !== void 0 && (console.warn("Graupl Alert option \"hideClass\" is deprecated and will be removed. Use collapseClass instead."), i = g), m !== void 0 && (console.warn("Graupl Alert option \"showDuration\" is deprecated and will be removed. Use expandDuration instead."), n = m), _ !== void 0 && (console.warn("Graupl Alert option \"hideDuration\" is deprecated and will be removed. Use collapseDuration instead."), l = _), h !== void 0 && (console.warn("Graupl Alert option \"isHidden\" is deprecated and will be removed. Use expanded instead."), u = typeof h == "boolean" ? !h : h), super({
				controlledElement: e,
				controllerElement: t,
				expanded: u,
				expandClass: s,
				collapseClass: i,
				transitionClass: r,
				transitionDuration: o,
				expandDuration: n,
				collapseDuration: l,
				prefix: p,
				key: f,
				initializeClass: E,
				bootstrap: !1,
				initialize: !1
			}), this._dom.alert = e, this._bootstrap(), b && this.initialize();
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
		set showClass(e) {
			console.warn("Graupl Alert.showClass is deprecated and will be removed. Use expandClass instead."), this.expandClass = e;
		}
		get hideClass() {
			return console.warn("Graupl Alert.hideClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass;
		}
		set hideClass(e) {
			console.warn("Graupl Alert.hideClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass = e;
		}
		get showDuration() {
			return console.warn("Graupl Alert.showDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration;
		}
		set showDuration(e) {
			console.warn("Graupl Alert.showDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration = e;
		}
		get hideDuration() {
			return console.warn("Graupl Alert.hideDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration;
		}
		set hideDuration(e) {
			console.warn("Graupl Alert.hideDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration = e;
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
			this.dom.controller !== null && this._addEventListener("keydown", this.dom.controller, (e) => {
				const t = c(e);
				(t === "Space" || t === "Enter") && d(e);
			});
		}
		_handleKeyup() {
			this.dom.controller !== null && this._addEventListener("keyup", this.dom.controller, (e) => {
				const t = c(e);
				(t === "Space" || t === "Enter") && this.collapse();
			});
		}
		show(...e) {
			return console.warn("Graupl Alert.show() is deprecated and will be removed. Use expand() instead."), this.expand(...e);
		}
		hide(...e) {
			return console.warn("Graupl Alert.hide() is deprecated and will be removed. Use collapse() instead."), this.collapse(...e);
		}
	};
	const xe = ({ options: e = {}, context: t = document, selector: s = ".alert" } = {}) => {
		x("graupl-alert-generator", s, t).forEach((i) => {
			const r = i.dataset.grauplAlertOptions ? JSON.parse(i.dataset.grauplAlertOptions.replace(/'/g, "\"")) || {} : {};
			new ke({
				alertElement: i,
				controllerElement: i.querySelector(".alert-dismisser") || null,
				initialize: !0,
				...e,
				...r
			});
		});
	};
	var Ie = class extends z {
		_scope = "Graupl";
		_rootDOMElement = "item";
		_name = "BreadcrumbItem";
		_storageKey = "breadcrumbItems";
		_shouldStore = !1;
		_toggle = !1;
		constructor({ breadcrumbItemElement: e, breadcrumbLinkElement: t = null, parentBreadcrumb: s, isToggle: i = !1, prefix: r = "graupl-", key: o = null, initializeClass: n = "initializing" }) {
			super({
				bootstrap: !1,
				initialize: !1,
				prefix: r,
				key: o,
				initializeClass: n
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
	}, De = class extends F {
		_scope = "Graupl";
		_rootDOMElement = "breadcrumb";
		_currentChild = 0;
		_storageKey = "breadcrumbs";
		_name = "Breadcrumb";
		constructor({ breadcrumbElement: e, controllerElement: t = null, breadcrumbItemsSelector: s = ".breadcrumb-item", breadcrumbLinksSelector: i = ".breadcrumb-link", lockClass: r = "locked", unlockClass: o = "unlocked", expandClass: n = "show", collapseClass: l = "hide", transitionClass: u = "transitioning", transitionDuration: p = 250, expandDuration: f = -1, collapseDuration: E = -1, expandOnFocus: v = !1, collapseOnBlur: g = !1, breakpoint: m = "856px", expandInsideBreakpoint: _ = !1, expandOutsideBreakpoint: h = !0, collapseInsideBreakpoint: b = !0, collapseOutsideBreakpoint: y = !1, lockInsideBreakpoint: O = !1, lockOutsideBreakpoint: T = !0, unlockInsideBreakpoint: I = !0, unlockOutsideBreakpoint: D = !1, locked: A = !1, mediaQuery: B = "", prefix: $ = "graupl-", key: j = null, initializeClass: P = "initializing", lockedClass: G, unlockedClass: U, openClass: S, closeClass: M, openDuration: q, closeDuration: H, openOnFocus: Q, closeOnBlur: V, minWidth: R, openInsideBreakpoint: J, openOutsideBreakpoint: Z, closeInsideBreakpoint: W, closeOutsideBreakpoint: N, autoOpen: X, initialize: Fe = !1 }) {
			G !== void 0 && (console.warn("Graupl Breadcrumb option \"lockedClass\" is deprecated and will be removed. Use lockClass instead."), r = G), U !== void 0 && (console.warn("Graupl Breadcrumb option \"unlockedClass\" is deprecated and will be removed. Use unlockClass instead."), o = U), S !== void 0 && (console.warn("Graupl Breadcrumb option \"openClass\" is deprecated and will be removed. Use expandClass instead."), n = S), M !== void 0 && (console.warn("Graupl Breadcrumb option \"closeClass\" is deprecated and will be removed. Use collapseClass instead."), l = M), q !== void 0 && (console.warn("Graupl Breadcrumb option \"openDuration\" is deprecated and will be removed. Use expandDuration instead."), f = q), H !== void 0 && (console.warn("Graupl Breadcrumb option \"closeDuration\" is deprecated and will be removed. Use collapseDuration instead."), E = H), Q !== void 0 && (console.warn("Graupl Breadcrumb option \"openOnFocus\" is deprecated and will be removed. Use expandOnFocus instead."), v = Q), V !== void 0 && (console.warn("Graupl Breadcrumb option \"closeOnBlur\" is deprecated and will be removed. Use collapseOnBlur instead."), g = V), R !== void 0 && (console.warn("Graupl Breadcrumb option \"minWidth\" is deprecated and will be removed. Use breakpoint instead."), m = R), J !== void 0 && (console.warn("Graupl Breadcrumb option \"openInsideBreakpoint\" is deprecated and will be removed. Use expandInsideBreakpoint instead."), _ = J), Z !== void 0 && (console.warn("Graupl Breadcrumb option \"openOutsideBreakpoint\" is deprecated and will be removed. Use expandOutsideBreakpoint instead."), h = Z), W !== void 0 && (console.warn("Graupl Breadcrumb option \"closeInsideBreakpoint\" is deprecated and will be removed. Use collapseInsideBreakpoint instead."), b = W), N !== void 0 && (console.warn("Graupl Breadcrumb option \"closeOutsideBreakpoint\" is deprecated and will be removed. Use collapseOutsideBreakpoint instead."), y = N), X !== void 0 && (console.warn("Graupl Breadcrumb option \"autoOpen\" is deprecated and will be removed. Use expandOutsideBreakpoint and collapseInsideBreakpoint instead."), h = X, b = X), super({
				controllerElement: t,
				controlledElement: e,
				bootstrap: !1,
				initialize: !1,
				expandClass: n,
				collapseClass: l,
				transitionClass: u,
				transitionDuration: p,
				expandDuration: f,
				collapseDuration: E,
				expandOnFocus: v,
				collapseOnBlur: g,
				expandInsideBreakpoint: _,
				expandOutsideBreakpoint: h,
				collapseInsideBreakpoint: b,
				collapseOutsideBreakpoint: y,
				lockInsideBreakpoint: O,
				lockOutsideBreakpoint: T,
				unlockInsideBreakpoint: I,
				unlockOutsideBreakpoint: D,
				locked: A,
				breakpoint: m,
				mediaQuery: B,
				lockClass: r,
				unlockClass: o,
				prefix: $,
				key: j,
				initializeClass: P
			}), this._dom.breadcrumb = e, this._dom.breadcrumbItems = [], this._dom.breadcrumbLinks = [], this._selectors.breadcrumbItems = s, this._selectors.breadcrumbLinks = i, this._elements.breadcrumbItems = [], this._elements.breadcrumbToggle = null, this._bootstrap(), Fe && this.initialize();
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
			a("number", { currentChild: e }), this._currentChild !== e && e >= 0 && e < this.elements.breadcrumbItems.length && (this._currentChild = e);
		}
		get currentBreadcrumbItem() {
			return this.elements.breadcrumbItems[this.currentChild];
		}
		_setIds() {
			this.dom.breadcrumb.id = this.dom.breadcrumb.id || `breadcrumb-${this.key}`, this.dom.controller && (this.dom.controller.id = this.dom.controller.id || `breadcrumb-toggle-${this.key}`), this._id = this.dom.breadcrumb.id;
		}
		_setAriaAttributes() {
			this.dom.controller && (this.dom.controller.getAttribute("aria-expanded") !== "true" && this.dom.controller.setAttribute("aria-expanded", "false"), this.dom.controller.setAttribute("aria-controls", this.dom.breadcrumb.id), K("button", { toggle: this.dom.controller }, { shouldThrow: !1 }).status || this.dom.controller.setAttribute("role", "button"));
		}
		_setCustomProps() {
			this.dom.breadcrumb.style.setProperty(`--${this.prefix}breadcrumb-transition-duration`, `${this.transitionDuration}ms`), this.dom.breadcrumb.style.setProperty(`--${this.prefix}breadcrumb-open-transition-duration`, `${this.expandDuration}ms`), this.dom.breadcrumb.style.setProperty(`--${this.prefix}breadcrumb-close-transition-duration`, `${this.collapseDuration}ms`);
		}
		_setDOMElements() {
			this._setDOMElementType("breadcrumbItems", { context: this.dom.breadcrumb }), this._setDOMElementType("breadcrumbLinks", { context: this.dom.breadcrumb });
		}
		_createChildElements() {
			this.dom.breadcrumbItems.forEach((e) => {
				const t = this.dom.controller !== null && e.contains(this.dom.controller), i = new Ie({
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
				this.currentEvent = "mouse", e.button === 0 && (d(e), this.toggle());
			});
		}
		_handleKeydown() {
			this._addEventListener("keydown", this.dom.breadcrumb, (e) => {
				this.currentEvent = "keyboard", c(e) === "Escape" && d(e);
			}), this.dom.controller && this._addEventListener("keydown", this.dom.controller, (e) => {
				switch (this.currentEvent = "keyboard", c(e)) {
					case "Space":
					case "Enter": d(e);
				}
			});
		}
		_handleKeyup() {
			this._addEventListener("keyup", this.dom.breadcrumb, (e) => {
				this.currentEvent = "keyboard", c(e) === "Escape" && (d(e), this.collapse(), this.currentChild > this.elements.breadcrumbItems.indexOf(this.elements.breadcrumbToggle) && this._requestAnimationFrame(() => {
					this.focusToggle();
				}, "handleKeyup"));
			}), this.dom.controller && this._addEventListener("keyup", this.dom.controller, (e) => {
				switch (this.currentEvent = "keyboard", c(e)) {
					case "Space":
					case "Enter":
						d(e), this.toggle(), this.isExpanded ? this._requestAnimationFrame(() => {
							this.focusNextChild();
						}, "handleKeyup") : this.focusFirstChild();
						break;
					case "Tab": this.expandOnFocus && (d(e), this.expand(), this._requestAnimationFrame(() => {
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
	const Oe = ({ options: e = {}, context: t = document, selector: s = ".breadcrumb", controllerSelector: i = ".breadcrumb-toggle" } = {}) => {
		x("graupl-breadcrumb-generator", s, t).forEach((r) => {
			const o = r.dataset.grauplBreadcrumbOptions ? JSON.parse(r.dataset.grauplBreadcrumbOptions.replace(/'/g, "\"")) || {} : {};
			new De({
				breadcrumbElement: r,
				controllerElement: r.querySelector(i) || null,
				initialize: !0,
				...e,
				...o
			});
		});
	};
	var ce = class extends z {
		_scope = "Graupl";
		_rootDOMElement = "carouselItem";
		_shouldStore = !1;
		_storageKey = "carouselItems";
		_name = "CarouselItem";
		_pendingAction = null;
		constructor({ carouselItemElement: e, tabElement: t = null, clone: s = null, parent: i, prefix: r = "graupl-", key: o = null, initializeClass: n = "initializing", initialize: l = !1 }) {
			super({
				bootstrap: !1,
				initialize: !1,
				prefix: r,
				key: o,
				initializeClass: n
			}), this._dom.carouselItem = e, this._dom.tab = t, this._elements.clone = s ?? null, this._elements.parent = i, this._bootstrap(), l && this.initialize();
		}
		_registerEvents() {
			super._registerEvents(), this._registerEvent("preactivate"), this._registerEvent("activate", { detail: {
				scroll: !0,
				scrollOptions: {}
			} }), this._registerEvent("postactivate"), this._registerEvent("predeactivate"), this._registerEvent("deactivate"), this._registerEvent("postdeactivate"), this._addInternalEventListener(this.getEventName("activate"), () => {
				k(this.elements.parent.activeClass, this.dom.carouselItem), this.elements.clone === null && this.dom.carouselItem.removeAttribute("inert");
			}), this._addInternalEventListener(this.getEventName("postactivate"), () => {
				this.dom.tab && (k(this.elements.parent.activeClass, this.dom.tab), this.dom.tab.setAttribute("aria-selected", !0));
			}), this._addInternalEventListener(this.getEventName("deactivate"), () => {
				w(this.elements.parent.activeClass, this.dom.carouselItem), this.dom.carouselItem.setAttribute("inert", !0);
			}), this._addInternalEventListener(this.getEventName("postdeactivate"), () => {
				this.dom.tab && (w(this.elements.parent.activeClass, this.dom.tab), this.dom.tab.setAttribute("aria-selected", !1));
			}), this.elements.parent._registerItemEvents(this);
		}
		activate({ scroll: e = !0, scrollOptions: t = {}, emit: s = this.isInitialized && this.shouldEmit } = {}) {
			this._cancelAnimationFrame("deactivate");
			const i = {
				scroll: e,
				scrollOptions: t
			};
			this._pendingAction = i, this._dispatchEvent("preactivate", this.rootDOMElement, { emit: s }), !(this._pendingAction !== i || !this.isBootstrapped) && this._requestAnimationFrame(() => {
				this._requestAnimationFrame(() => {
					this._dispatchEvent("postactivate", this.rootDOMElement, { emit: s }), this._pendingAction === i && (this._pendingAction = null);
				}, "activate"), this.events.activate.detail.scroll = i.scroll, this.events.activate.detail.scrollOptions = i.scrollOptions, this._dispatchEvent("activate", this.rootDOMElement, { emit: s });
			}, "activate");
		}
		deactivate({ emit: e = this.isInitialized && this.shouldEmit } = {}) {
			this._cancelAnimationFrame("activate");
			const t = {
				scroll: !1,
				scrollOptions: {}
			};
			this._pendingAction = t, this._dispatchEvent("predeactivate", this.rootDOMElement, { emit: e }), !(this._pendingAction !== t || !this.isBootstrapped) && this._requestAnimationFrame(() => {
				this._requestAnimationFrame(() => {
					this._dispatchEvent("postdeactivate", this.rootDOMElement, { emit: e }), this._pendingAction === t && (this._pendingAction = null);
				}, "deactivate"), this._dispatchEvent("deactivate", this.rootDOMElement, { emit: e });
			}, "deactivate");
		}
	}, Te = class extends z {
		_scope = "Graupl";
		_rootDOMElement = "carousel";
		_currentItem = 0;
		_autoplay = !0;
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
		constructor({ carouselElement: e, carouselItemsSelector: t = ".carousel-item", carouselItemContainerSelector: s = ".carousel-item-container", carouselControlsSelector: i = ".carousel-control", carouselControlContainerSelector: r = ".carousel-control-container", carouselTabsSelector: o = ".carousel-tab", carouselTabContainerSelector: n = ".carousel-tab-container", autoplaySelector: l = ".autoplay", nextSelector: u = ".next", previousSelector: p = ".previous", activeClass: f = "active", playClass: E = "play", pauseClass: v = "pause", autoplay: g = !0, transitionDelay: m = 1e4, playText: _ = "Play", pauseText: h = "Pause", itemsPerPage: b = 1, loop: y = !0, prefix: O = "graupl-", key: T = null, initializeClass: I = "initializing", initialize: D = !1 }) {
			super({
				bootstrap: !1,
				initialize: !1,
				prefix: O,
				key: T,
				initializeClass: I
			}), this._dom.carousel = e, this._dom.carouselItems = [], this._dom.carouselItemContainer = null, this._dom.carouselControls = [], this._dom.carouselControlContainer = null, this._dom.carouselTabs = [], this._dom.carouselTabContainer = null, this._dom.autoplay = null, this._dom.next = null, this._dom.previous = null, this._selectors.carouselItems = t, this._selectors.carouselItemContainer = s, this._selectors.carouselControls = i, this._selectors.carouselControlContainer = r, this._selectors.carouselTabs = o, this._selectors.carouselTabContainer = n, this._selectors.autoplay = l, this._selectors.next = u, this._selectors.previous = p, this._elements.carouselItems = [], this._classes.active = f || "", this._classes.play = E || "", this._classes.pause = v || "", this._autoplay = g, this._itemsPerPage = b, this._loop = y, this._delays.transition = m, this._playText = _ || "", this._pauseText = h || "", this._bootstrap(), D && this.initialize();
		}
		_registerEvents() {
			super._registerEvents(), this._addInternalEventListener(this.getEventName("initialize"), (e) => {
				e.detail.component === this && (this._handleAutoplay(), this.loop && this._handleLoop(), this._handleIntersection(), this.activateFirstItem({
					scrollOptions: { behavior: "instant" },
					emit: !1
				}));
			}), this._addInternalEventListener(this.getEventName("validate"), (e) => {
				if (e.detail.component !== this) return;
				const s = a("boolean", {
					autoplay: this._autoplay,
					loop: this._loop
				}, { shouldThrow: !1 });
				s.status || (this._errors = [...this._errors, ...s.errors], this._valid = !1);
				const r = a("string", {
					playText: this._playText,
					pauseText: this._pauseText
				}, { shouldThrow: !1 });
				r.status || (this._errors = [...this._errors, ...r.errors], this._valid = !1);
				const n = a("number", { itemsPerPage: this._itemsPerPage }, { shouldThrow: !1 });
				n.status || (this._errors = [...this._errors, ...n.errors], this._valid = !1);
			});
		}
		get activeClass() {
			return this._classes.active;
		}
		set activeClass(e) {
			C({ activeClass: e }), this._classes.active !== e && (this._classes.active = e);
		}
		get playClass() {
			return this._classes.play;
		}
		set playClass(e) {
			C({ playClass: e }), this._classes.play !== e && (this.isInitialized && w(this._classes.play, this.dom.autoplay), this._classes.play = e, this.isInitialized && this._handleAutoplay());
		}
		get pauseClass() {
			return this._classes.pause;
		}
		set pauseClass(e) {
			C({ pauseClass: e }), this._classes.pause !== e && (this.isInitialized && w(this._classes.pause, this.dom.autoplay), this._classes.pause = e, this.isInitialized && this._handleAutoplay());
		}
		get currentItem() {
			return this._currentItem;
		}
		set currentItem(e) {
			a("number", { currentItem: e }), e !== this.currentItem && (e < 0 ? this._currentItem = 0 : e >= this.dom.carouselItems.length ? this._currentItem = this.dom.carouselItems.length - 1 : this._currentItem = e);
		}
		get currentCarouselItem() {
			return this.elements.carouselItems[this.currentItem];
		}
		get autoplay() {
			return this._autoplay;
		}
		set autoplay(e) {
			a("boolean", { autoplay: e }), this._autoplay = e, e && (this._hoverPaused = !1, this._focusPaused = !1), this.isInitialized && this._handleAutoplay();
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
		set transitionDelay(e) {
			a("number", { transitionDelay: e }), e !== this.transitionDelay && e >= 0 && (this._delays.transition = e, this.isInitialized && this._handleAutoplay());
		}
		get playText() {
			return this._playText;
		}
		set playText(e) {
			a("string", { playText: e }), this._playText !== e && (this._playText = e, this.isInitialized && this._handleAutoplay());
		}
		get pauseText() {
			return this._pauseText;
		}
		set pauseText(e) {
			a("string", { pauseText: e }), this._pauseText !== e && (this._pauseText = e, this.isInitialized && this._handleAutoplay());
		}
		_setDOMElements() {
			this._setDOMElementType("carouselItemContainer", { context: this.dom.carousel }), this._setDOMElementType("carouselControlContainer", { context: this.dom.carousel }), this._setDOMElementType("carouselTabContainer", { context: this.dom.carousel }), this.dom.carouselItemContainer && this._setDOMElementType("carouselItems", { context: this.dom.carouselItemContainer }), this.dom.carouselControlContainer && (this._setDOMElementType("carouselControls", { context: this.dom.carouselControlContainer }), this._setDOMElementType("autoplay", { context: this.dom.carouselControlContainer }), this._setDOMElementType("next", { context: this.dom.carouselControlContainer }), this._setDOMElementType("previous", { context: this.dom.carouselControlContainer })), this._dom.carouselTabContainer && this._setDOMElementType("carouselTabs", { context: this.dom.carouselTabContainer });
		}
		_registerItemEvents(e) {
			e._addInternalEventListener(e.getEventName("activate"), (t) => {
				t.detail.scroll && this._scrollToItem(e, t.detail.scrollOptions);
			});
		}
		_createChildElements() {
			this.dom.carouselItems.forEach((e, t) => {
				const s = new ce({
					carouselItemElement: e,
					tabElement: this.dom.carouselTabs ? this.dom.carouselTabs[t] : null,
					parent: this,
					prefix: this.prefix,
					initializeClass: this.classes.initialize,
					initialize: !0
				});
				this._elements.carouselItems.push(s);
			});
		}
		_setIds() {
			this.dom.carousel.id = this.dom.carousel.id || `carousel-${this.key}`, this.dom.carouselItems.forEach((e, t) => {
				e.id = e.id || `carousel-item-${this.key}-${t}`;
			}), this.dom.carouselTabs.forEach((e, t) => {
				e.id = e.id || `carousel-tab-${this.key}-${t}`;
			}), this._id = this.dom.carousel.id;
		}
		_setAriaAttributes() {
			!K("section", { carousel: this.dom.carousel }, { shouldThrow: !1 }).status && this.dom.carousel.getAttribute("role") !== "region" && this.dom.carousel.setAttribute("role", "group"), this.dom.carouselItems.forEach((e) => {
				e.setAttribute("inert", "true");
			}), this.dom.carouselItemContainer && this.dom.carouselItemContainer.setAttribute("tabindex", "-1"), this._dom.carousel.setAttribute("aria-roledescription", "carousel"), this.dom.carouselTabContainer && this.dom.carouselTabContainer.setAttribute("role", "tablist"), this.dom.carouselTabs.forEach((e, t) => {
				e.setAttribute("role", "tab"), e.setAttribute("aria-selected", t === 0), e.setAttribute("aria-controls", this.dom.carouselItems[t].id);
			});
		}
		_handleAutoplay() {
			if (!this.isBootstrapped) return;
			const e = !this.autoplay || this._focusPaused, t = !e && !this._hoverPaused;
			e ? (k(this.playClass, this.dom.autoplay), w(this.pauseClass, this.dom.autoplay), this.dom.autoplay.setAttribute("aria-label", this.playText)) : (k(this.pauseClass, this.dom.autoplay), w(this.playClass, this.dom.autoplay), this.dom.autoplay.setAttribute("aria-label", this.pauseText)), this.dom.carousel.setAttribute("aria-live", t ? "off" : "polite"), t ? this._setInterval(() => this.activateNextItem(), this.transitionDelay, "autoplay") : this._clearInterval("autoplay");
		}
		_handleIntersection() {
			const e = {
				root: this.dom.carouselItemContainer,
				rootMargin: "1px",
				scrollMargin: "1px",
				threshold: 1
			};
			this._intersectionObserver?.disconnect();
			const t = new IntersectionObserver((s) => {
				!this.isInitialized || this._intersectionObserver !== t || s.forEach((i) => {
					if (!i.isIntersecting) return;
					const r = this.dom.carouselItems.indexOf(i.target);
					if (r < 0) return;
					let o = r, n = null;
					this.elements.carouselItems[r].elements.clone !== null && (o = this.dom.carouselItems.indexOf(this.elements.carouselItems[r].elements.clone.dom.carouselItem), (r === 0 || r === this.dom.carouselItems.length - 1) && (n = this.elements.carouselItems[r].elements.clone)), this.currentItem !== o && this.activateItem(o, { scroll: !1 }), n && this._requestAnimationFrame(() => {
						this._intersectionObserver !== t || this.elements.carouselItems[this.currentItem] !== n || this._scrollToItem(n, { behavior: "instant" });
					}, "loopScroll");
				});
			}, e);
			this._intersectionObserver = t, this.dom.carouselItems.forEach((s) => {
				this._intersectionObserver.observe(s);
			});
		}
		_handleFocus() {
			this._addEventListener("focusin", this.dom.carousel, () => {
				this._focusPaused = !0, this._handleAutoplay();
			});
		}
		_handleClick() {
			this._addEventListener("click", this.dom.next, (e) => {
				e.button === 0 && (d(e), this.currentEvent = "mouse", this.activateNextItem());
			}), this._addEventListener("click", this.dom.previous, (e) => {
				e.button === 0 && (d(e), this.currentEvent = "mouse", this.activatePreviousItem());
			}), this._addEventListener("click", this.dom.autoplay, (e) => {
				e.button === 0 && (d(e), this.currentEvent = "mouse", this.toggleAutoplay());
			}), this.elements.carouselItems.forEach((e) => {
				e.dom.tab && this._addEventListener("click", e.dom.tab, (t) => {
					t.button === 0 && (d(t), this.currentEvent = "mouse", this.activateItem(this.dom.carouselItems.indexOf(e.dom.carouselItem)));
				});
			});
		}
		_handleHover() {
			this._addEventListener("pointerover", this.dom.carousel, (e) => {
				e.relatedTarget && this.dom.carousel.contains(e.relatedTarget) || (this._hoverPaused = !0, this._handleAutoplay());
			}), this._addEventListener("pointerleave", this.dom.carousel, () => {
				this._hoverPaused = !1, this._handleAutoplay();
			});
		}
		_handleKeydown() {
			this.dom.carouselControls.forEach((e) => {
				this._addEventListener("keydown", e, (t) => {
					switch (c(t)) {
						case "Space":
						case "Enter": d(t);
					}
				});
			}), this.elements.carouselItems.forEach((e) => {
				e.dom.tab && this._addEventListener("keydown", e.dom.tab, (t) => {
					switch (c(t)) {
						case "Space":
						case "Enter": d(t);
					}
				});
			});
		}
		_handleKeyup() {
			this._addEventListener("keyup", this.dom.next, (e) => {
				switch (c(e)) {
					case "Space":
					case "Enter": this.activateNextItem(), d(e);
				}
			}), this._addEventListener("keyup", this.dom.previous, (e) => {
				switch (c(e)) {
					case "Space":
					case "Enter": this.activatePreviousItem(), d(e);
				}
			}), this._addEventListener("keyup", this.dom.autoplay, (e) => {
				switch (c(e)) {
					case "Space":
					case "Enter": this.toggleAutoplay(), d(e);
				}
			}), this.elements.carouselItems.forEach((e) => {
				e.dom.tab && this._addEventListener("keyup", e.dom.tab, (t) => {
					switch (c(t)) {
						case "Space":
						case "Enter": this.activateItem(this.dom.carouselItems.indexOf(e.dom.carouselItem)), d(t);
					}
				});
			});
		}
		_handleLoop() {
			this._removeLoop();
			const e = [...this.elements.carouselItems], t = this.currentCarouselItem, s = e.slice(0, this.itemsPerPage), i = e.slice(Math.max(0, e.length - this.itemsPerPage)).reverse(), r = this.dom.carouselItemContainer;
			s.forEach((o) => {
				const n = this._createLoopItem(o);
				r.appendChild(n.dom.carouselItem), this.dom.carouselItems.push(n.dom.carouselItem), this._elements.carouselItems.push(n), n.initialize(), this._intersectionObserver?.observe(n.dom.carouselItem);
			}), i.forEach((o) => {
				const n = this._createLoopItem(o);
				r.insertBefore(n.dom.carouselItem, r.firstChild), this.dom.carouselItems.unshift(n.dom.carouselItem), this._elements.carouselItems.unshift(n), n.initialize(), this._intersectionObserver?.observe(n.dom.carouselItem);
			}), this.isInitialized && t && (this._currentItem = this.elements.carouselItems.indexOf(t));
		}
		_createLoopItem(e) {
			const t = e.dom.carouselItem.cloneNode(!0);
			t.setAttribute("aria-hidden", "true"), t.setAttribute("inert", "true"), t.setAttribute("id", `${e.dom.carouselItem.id}-clone`);
			const s = new ce({
				carouselItemElement: t,
				clone: e,
				parent: this,
				prefix: this.prefix,
				initializeClass: this.classes.initialize
			});
			return this._loopItems.add(s), s;
		}
		_removeLoop() {
			this._cancelAnimationFrame("loopScroll");
			const e = this.currentCarouselItem, t = e?.elements.clone || e, s = /* @__PURE__ */ new Set();
			this._loopItems.forEach((i) => {
				s.add(i.dom.carouselItem), this._intersectionObserver?.unobserve(i.dom.carouselItem), i.dispose(), i.dom.carouselItem.remove();
			}), this._dom.carouselItems = this.dom.carouselItems.filter((i) => !s.has(i)), this._elements.carouselItems = this.elements.carouselItems.filter((i) => !this._loopItems.has(i)), this._loopItems.clear(), this._currentItem = Math.max(0, this.elements.carouselItems.indexOf(t));
		}
		_scrollToItem(e, t = {}) {
			this.dom.carouselItemContainer.scrollTo({
				left: e.dom.carouselItem.offsetLeft,
				top: e.dom.carouselItem.offsetTop,
				behavior: "smooth",
				...t
			});
		}
		activateCurrentItem({ scroll: e = !0, scrollOptions: t = {}, emit: s = this.isInitialized && this.shouldEmit } = {}) {
			this.currentCarouselItem.activate({
				scroll: e,
				scrollOptions: t,
				emit: s
			});
		}
		deactivateCurrentItem({ scroll: e = !0, scrollOptions: t = {}, emit: s = this.isInitialized && this.shouldEmit } = {}) {
			this.currentCarouselItem.deactivate({
				scroll: e,
				scrollOptions: t,
				emit: s
			});
		}
		activateItem(e, { scroll: t = !0, scrollOptions: s = {}, emit: i = this.isInitialized && this.shouldEmit } = {}) {
			this.deactivateCurrentItem({
				scroll: t,
				scrollOptions: s,
				emit: i
			}), this.currentItem = e, this.activateCurrentItem({
				scroll: t,
				scrollOptions: s,
				emit: i
			}), this._handleAutoplay();
		}
		activateFirstItem({ scroll: e = !0, scrollOptions: t = {}, emit: s = this.isInitialized && this.shouldEmit } = {}) {
			this.loop ? this.currentItem === this.dom.carouselItems.length - this.itemsPerPage - 1 ? this.activateNextItem({
				scroll: e,
				scrollOptions: t,
				emit: s
			}) : this.activateItem(this.itemsPerPage, {
				scroll: e,
				scrollOptions: t,
				emit: s
			}) : this.activateItem(0, {
				scroll: e,
				scrollOptions: t,
				emit: s
			});
		}
		activateLastItem({ scroll: e = !0, scrollOptions: t = {}, emit: s = this.isInitialized && this.shouldEmit } = {}) {
			this.loop ? this.currentItem === this.itemsPerPage ? this.activatePreviousItem({
				scroll: e,
				scrollOptions: t,
				emit: s
			}) : this.activateItem(this.dom.carouselItems.length - this.itemsPerPage - 1, {
				scroll: e,
				scrollOptions: t,
				emit: s
			}) : this.activateItem(this.dom.carouselItems.length - 1, {
				scroll: e,
				scrollOptions: t,
				emit: s
			});
		}
		activateNextItem({ scroll: e = !0, scrollOptions: t = {}, emit: s = this.isInitialized && this.shouldEmit } = {}) {
			this.loop ? this.activateItem(this.currentItem + 1, {
				scroll: e,
				scrollOptions: t,
				emit: s
			}) : this.currentItem + 1 >= this.dom.carouselItems.length ? this.activateFirstItem({
				scroll: e,
				scrollOptions: t,
				emit: s
			}) : this.activateItem(this.currentItem + 1, {
				scroll: e,
				scrollOptions: t,
				emit: s
			});
		}
		activatePreviousItem({ scroll: e = !0, scrollOptions: t = {}, emit: s = this.isInitialized && this.shouldEmit } = {}) {
			this.loop ? this.activateItem(this.currentItem - 1, {
				scroll: e,
				scrollOptions: t,
				emit: s
			}) : this.currentItem - 1 < 0 || this.loop && this.currentItem - 1 < this.itemsPerPage ? this.activateLastItem({
				scroll: e,
				scrollOptions: t,
				emit: s
			}) : this.activateItem(this.currentItem - 1, {
				scroll: e,
				scrollOptions: t,
				emit: s
			});
		}
		toggleAutoplay() {
			this.autoplay = !this.autoplay || this._focusPaused;
		}
		dispose() {
			this._intersectionObserver?.disconnect(), this._intersectionObserver = null, this._removeLoop(), this.elements.carouselItems.forEach((e) => e.dispose()), super.dispose();
		}
	};
	const Ae = ({ options: e = {}, context: t = document, selector: s = ".carousel" } = {}) => {
		x("graupl-carousel-generator", s, t).forEach((i) => {
			const r = i.dataset.grauplCarouselOptions ? JSON.parse(i.dataset.grauplCarouselOptions.replace(/'/g, "\"")) || {} : {};
			new Te({
				carouselElement: i,
				initialize: !0,
				...e,
				...r
			});
		});
	};
	var Be = class extends F {
		_scope = "Graupl";
		_rootDOMElement = "disclosure";
		_storageKey = "disclosures";
		_name = "Disclosure";
		constructor({ disclosureElement: e, controllerElement: t, disclosureContentSelector: s = ".disclosure-content", lockClass: i = "locked", unlockClass: r = "unlocked", expandClass: o = "show", collapseClass: n = "hide", transitionClass: l = "transitioning", transitionDuration: u = 250, expandDuration: p = -1, collapseDuration: f = -1, expandOnFocus: E = !1, collapseOnBlur: v = !1, breakpoint: g = "", expandInsideBreakpoint: m = !1, expandOutsideBreakpoint: _ = !1, collapseInsideBreakpoint: h = !1, collapseOutsideBreakpoint: b = !1, lockInsideBreakpoint: y = !1, lockOutsideBreakpoint: O = !1, unlockInsideBreakpoint: T = !1, unlockOutsideBreakpoint: I = !1, locked: D = !1, mediaQuery: A = "", prefix: B = "graupl-", key: $ = null, initializeClass: j = "initializing", lockedClass: P, unlockedClass: G, openClass: U, closeClass: S, openDuration: M, closeDuration: q, openOnFocus: H, closeOnBlur: Q, minWidth: V, openInsideBreakpoint: R, openOutsideBreakpoint: J, closeInsideBreakpoint: Z, closeOutsideBreakpoint: W, autoOpen: N, initialize: X = !1 } = {}) {
			P !== void 0 && (console.warn("Graupl Disclosure option \"lockedClass\" is deprecated and will be removed. Use lockClass instead."), i = P), G !== void 0 && (console.warn("Graupl Disclosure option \"unlockedClass\" is deprecated and will be removed. Use unlockClass instead."), r = G), U !== void 0 && (console.warn("Graupl Disclosure option \"openClass\" is deprecated and will be removed. Use expandClass instead."), o = U), S !== void 0 && (console.warn("Graupl Disclosure option \"closeClass\" is deprecated and will be removed. Use collapseClass instead."), n = S), M !== void 0 && (console.warn("Graupl Disclosure option \"openDuration\" is deprecated and will be removed. Use expandDuration instead."), p = M), q !== void 0 && (console.warn("Graupl Disclosure option \"closeDuration\" is deprecated and will be removed. Use collapseDuration instead."), f = q), H !== void 0 && (console.warn("Graupl Disclosure option \"openOnFocus\" is deprecated and will be removed. Use expandOnFocus instead."), E = H), Q !== void 0 && (console.warn("Graupl Disclosure option \"closeOnBlur\" is deprecated and will be removed. Use collapseOnBlur instead."), v = Q), V !== void 0 && (console.warn("Graupl Disclosure option \"minWidth\" is deprecated and will be removed. Use breakpoint instead."), g = V), R !== void 0 && (console.warn("Graupl Disclosure option \"openInsideBreakpoint\" is deprecated and will be removed. Use expandInsideBreakpoint instead."), m = R), J !== void 0 && (console.warn("Graupl Disclosure option \"openOutsideBreakpoint\" is deprecated and will be removed. Use expandOutsideBreakpoint instead."), _ = J), Z !== void 0 && (console.warn("Graupl Disclosure option \"closeInsideBreakpoint\" is deprecated and will be removed. Use collapseInsideBreakpoint instead."), h = Z), W !== void 0 && (console.warn("Graupl Disclosure option \"closeOutsideBreakpoint\" is deprecated and will be removed. Use collapseOutsideBreakpoint instead."), b = W), N !== void 0 && (console.warn("Graupl Disclosure option \"autoOpen\" is deprecated and will be removed. Use expandOutsideBreakpoint and collapseInsideBreakpoint instead."), _ = N, h = N), super({
				controllerElement: t,
				controlledElement: e,
				bootstrap: !1,
				initialize: !1,
				expandClass: o,
				collapseClass: n,
				transitionClass: l,
				transitionDuration: u,
				expandDuration: p,
				collapseDuration: f,
				expandOnFocus: E,
				collapseOnBlur: v,
				expandInsideBreakpoint: m,
				expandOutsideBreakpoint: _,
				collapseInsideBreakpoint: h,
				collapseOutsideBreakpoint: b,
				lockInsideBreakpoint: y,
				lockOutsideBreakpoint: O,
				unlockInsideBreakpoint: T,
				unlockOutsideBreakpoint: I,
				locked: D,
				breakpoint: g,
				mediaQuery: A,
				lockClass: i,
				unlockClass: r,
				prefix: B,
				key: $,
				initializeClass: j
			}), this._dom.disclosure = e, this._selectors.content = s, this._bootstrap(), X && this.initialize();
		}
		_registerEvents() {
			super._registerEvents(), this._registerEvent("preexpand", { detail: { disclosure: this } }), this._registerEvent("expand", { detail: { disclosure: this } }), this._registerEvent("postexpand", { detail: { disclosure: this } }), this._registerEvent("precollapse", { detail: { disclosure: this } }), this._registerEvent("collapse", { detail: { disclosure: this } }), this._registerEvent("postcollapse", { detail: { disclosure: this } }), this._registerEvent("prelock", { detail: { disclosure: this } }), this._registerEvent("lock", { detail: { disclosure: this } }), this._registerEvent("postlock", { detail: { disclosure: this } }), this._registerEvent("preunlock", { detail: { disclosure: this } }), this._registerEvent("unlock", { detail: { disclosure: this } }), this._registerEvent("postunlock", { detail: { disclosure: this } }), this._addInternalEventListener(this.getEventName("validate"), () => {
				if (this.dom.controller === null) {
					const e = L(HTMLElement, { controllerElement: this.dom.controller }, { shouldThrow: !1 });
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
			this.dom.controller.getAttribute("aria-expanded") !== "true" && this.dom.controller.setAttribute("aria-expanded", "false"), this.dom.controller.setAttribute("aria-controls", this.dom.disclosure.id), K("button", { controller: this.dom.controller }, { shouldThrow: !1 }).status || this.dom.controller.setAttribute("role", "button");
		}
		_setCustomProps() {
			this.dom.disclosure.style.setProperty(`--${this.prefix}disclosure-transition-duration`, `${this.transitionDuration}ms`), this.dom.disclosure.style.setProperty(`--${this.prefix}disclosure-open-transition-duration`, `${this.expandDuration}ms`), this.dom.disclosure.style.setProperty(`--${this.prefix}disclosure-close-transition-duration`, `${this.collapseDuration}ms`);
		}
		_setDOMElements() {
			this._setDOMElementType("content", { context: this.dom.disclosure }), L(HTMLElement, { disclosureContentElement: this.dom.content });
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
				this.currentEvent = "mouse", e.button === 0 && (d(e), this.toggle());
			}), this._addEventListener("click", document, (e) => {
				this.focusState !== "self" || !this.collapseOnBlur || (this.currentEvent = "mouse", !this.dom.disclosure.contains(e.target) && this.dom.controller !== e.target && this.collapse());
			});
		}
		_handleKeydown() {
			this._addEventListener("keydown", this.dom.controller, (e) => {
				switch (this.currentEvent = "keyboard", c(e)) {
					case "Space":
					case "Enter": d(e);
				}
			}), this._addEventListener("keydown", this.dom.disclosure, (e) => {
				this.currentEvent = "keyboard", c(e) === "Escape" && d(e);
			});
		}
		_handleKeyup() {
			this._addEventListener("keyup", this.dom.controller, (e) => {
				switch (this.currentEvent = "keyboard", c(e)) {
					case "Space":
					case "Enter":
						this.toggle(), d(e);
						break;
					case "Tab": this.expandOnFocus && (d(e), this.expand());
				}
			}), this._addEventListener("keyup", this.dom.disclosure, (e) => {
				this.currentEvent = "keyboard", c(e) === "Escape" && (this.collapse(), d(e));
			});
		}
		open(...e) {
			return console.warn("Graupl Disclosure.open() is deprecated and will be removed. Use expand() instead."), this.expand(...e);
		}
		close(...e) {
			return console.warn("Graupl Disclosure.close() is deprecated and will be removed. Use collapse() instead."), this.collapse(...e);
		}
	};
	const Le = ({ options: e = {}, context: t = document, selector: s = ".disclosure" } = {}) => {
		x("graupl-disclosure-generator", s, t).forEach((i) => {
			const r = i.dataset.grauplDisclosureOptions ? JSON.parse(i.dataset.grauplDisclosureOptions.replace(/'/g, "\"")) || {} : {}, o = `[data-graupl-disclosure-target="${i.id}"]`, [n] = x("graupl-disclosure-generator", o, t);
			if (!n) {
				console.warn(`No controller found for disclosure with ID "${i.id}". Please ensure there is an element with the selector "${o}".`), x.remove("graupl-disclosure-generator", i);
				return;
			}
			new Be({
				disclosureElement: i,
				controllerElement: n,
				initialize: !0,
				...e,
				...r
			});
		});
	}, $e = ({ options: e = {}, context: t = document, selector: s = ".navigation" } = {}) => {
		x("graupl-navigation-generator", s, t).forEach((i) => {
			const r = i.dataset.grauplMenuType || "DisclosureMenu";
			if (window[r] === void 0) {
				console.warn(`Graupl navigation requires accessible-menu's ${r}. Please make sure to include it on this page.`);
				return;
			}
			const o = i.dataset.grauplMenuOptions ? JSON.parse(i.dataset.grauplMenuOptions.replace(/'/g, "\"")) || {} : {}, n = i.querySelector(".menu"), l = i.querySelector(".navigation-toggle") || null, u = l ? i : null;
			new window[r]({
				menuElement: n,
				menuItemSelector: ".menu-item",
				menuLinkSelector: ".menu-link",
				submenuItemSelector: ".submenu-item",
				submenuToggleSelector: ".submenu-toggle",
				controllerElement: l,
				containerElement: u,
				...e,
				...o
			});
		});
	};
	var Ge = class extends F {
		_scope = "Graupl";
		_rootDOMElement = "toggle";
		_storageKey = "tabToggles";
		_name = "TabToggle";
		_shouldStore = !1;
		constructor({ toggleElement: e, contentElement: t, parentTab: s } = {}) {
			super({
				controllerElement: e,
				controlledElement: t,
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
			}), this._protectedDOMElements.push("content"), this._dom.toggle = e, this._dom.content = t, this._elements.parent = s, this._bootstrap();
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
		set currentEvent(e) {
			this.elements.parent ? this.elements.parent.currentEvent = e : super.currentEvent = e;
		}
		get shouldFocus() {
			return this.elements.parent ? this.elements.parent.shouldFocus : super.shouldFocus;
		}
		get expandClass() {
			return this.elements.parent.expandClass;
		}
		set expandClass(e) {
			this.elements.parent.expandClass = e, this._classes.expand = e;
		}
		get collapseClass() {
			return this.elements.parent.collapseClass;
		}
		set collapseClass(e) {
			this.elements.parent.collapseClass = e, this._classes.collapse = e;
		}
		get transitionClass() {
			return this.elements.parent.transitionClass;
		}
		set transitionClass(e) {
			this.elements.parent.transitionClass = e, this._classes.transition = e;
		}
		get transitionDuration() {
			return this.elements.parent.transitionDuration;
		}
		set transitionDuration(e) {
			this.elements.parent.transitionDuration = e, this._durations.transition = e;
		}
		get expandDuration() {
			return this.elements.parent.expandDuration;
		}
		set expandDuration(e) {
			this.elements.parent.expandDuration = e, this._durations.expand = e;
		}
		get collapseDuration() {
			return this.elements.parent.collapseDuration;
		}
		set collapseDuration(e) {
			this.elements.parent.collapseDuration = e, this._durations.collapse = e;
		}
		_setIds() {
			const { key: e } = this.elements.parent, t = this.elements.parent.dom.tabToggles.indexOf(this.dom.toggle);
			this.dom.toggle.id = this.dom.toggle.id || `tab-toggle-${e}-${t}`, this.dom.content.id = this.dom.content.id || `tab-content-${e}-${t}`, this._id = this.dom.toggle.id;
		}
		_setAriaAttributes() {
			this.dom.toggle.setAttribute("role", "tab"), this.dom.toggle.getAttribute("aria-selected") !== "true" && this.dom.toggle.setAttribute("aria-selected", "false"), this.dom.toggle.setAttribute("aria-controls", this.dom.content.id), this.dom.content.setAttribute("role", "tabpanel"), this.dom.content.setAttribute("aria-labelledby", this.dom.toggle.id);
		}
		_canSelect({ force: e = !this.isInitialized } = {}) {
			return e || !this.elements.parent.elements.tabToggles.some((t) => t !== this && t.isExpanded && t.isLocked);
		}
		expand(e = {}) {
			this._canSelect(e) && super.expand(e);
		}
		preview(e = {}) {
			this._canSelect(e) && super.preview(e);
		}
		collapseSiblings(e = {}) {
			this.elements.parent && this.elements.parent.elements.tabToggles.forEach((t) => {
				t !== this && t.isExpanded && t.collapse(e);
			});
		}
		show(...e) {
			return console.warn("Graupl TabToggle.show() is deprecated and will be removed. Use expand() instead."), this.expand(...e);
		}
		hide(...e) {
			return console.warn("Graupl TabToggle.hide() is deprecated and will be removed. Use collapse() instead."), this.collapse(...e);
		}
		hideSiblings(...e) {
			return console.warn("Graupl TabToggle.hideSiblings() is deprecated and will be removed. Use collapseSiblings() instead."), this.collapseSiblings(...e);
		}
	}, Ue = class extends z {
		_scope = "Graupl";
		_rootDOMElement = "tabs";
		_automatic = !1;
		_currentChild = 0;
		_storageKey = "tabs";
		_name = "Tab";
		constructor({ tabsElement: e, tabListSelector: t = ".tab-list", tabTogglesSelector: s = ".tab-toggle", tabContentsSelector: i = ".tab-content", expandClass: r = "show", collapseClass: o = "hide", transitionClass: n = null, transitionDuration: l = 300, expandDuration: u = -1, collapseDuration: p = -1, automaticActivation: f = !1, prefix: E = "graupl-", key: v = null, initializeClass: g = "initializing", openClass: m, closeClass: _, openDuration: h, closeDuration: b, initialize: y = !1 }) {
			m !== void 0 && (console.warn("Graupl Tabs option \"openClass\" is deprecated and will be removed. Use expandClass instead."), r = m), _ !== void 0 && (console.warn("Graupl Tabs option \"closeClass\" is deprecated and will be removed. Use collapseClass instead."), o = _), h !== void 0 && (console.warn("Graupl Tabs option \"openDuration\" is deprecated and will be removed. Use expandDuration instead."), u = h), b !== void 0 && (console.warn("Graupl Tabs option \"closeDuration\" is deprecated and will be removed. Use collapseDuration instead."), p = b), super({
				bootstrap: !1,
				initialize: !1,
				prefix: E,
				key: v,
				initializeClass: g
			}), this._dom.tabs = e, this._dom.tabList = null, this._dom.tabToggles = [], this._dom.tabContents = [], this._selectors.tabList = t, this._selectors.tabToggles = s, this._selectors.tabContents = i, this._elements.tabToggles = [], this._classes.expand = r || "", this._classes.collapse = o || "", this._classes.transition = n || "", this._durations.transition = l, this._durations.expand = u, this._durations.collapse = p, this._automatic = f, this._bootstrap(), y && this.initialize();
		}
		_registerEvents() {
			super._registerEvents(), this._addInternalEventListener(this.getEventName("initialize"), (e) => {
				e.detail.component === this && this.elements.tabToggles.filter((t) => t.isExpanded).length === 0 && this.elements.tabToggles[0].expand();
			}), this._addInternalEventListener(this.getEventName("validate"), (e) => {
				if (e.detail.component !== this) return;
				const s = a("boolean", { automaticActivation: this._automatic }, { shouldThrow: !1 });
				s.status || (this._errors = [...this._errors, ...s.errors], this._valid = !1);
			});
		}
		get openClass() {
			return console.warn("Graupl Tabs.openClass is deprecated and will be removed. Use expandClass instead."), this.expandClass;
		}
		set openClass(e) {
			console.warn("Graupl Tabs.openClass is deprecated and will be removed. Use expandClass instead."), this.expandClass = e;
		}
		get closeClass() {
			return console.warn("Graupl Tabs.closeClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass;
		}
		set closeClass(e) {
			console.warn("Graupl Tabs.closeClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass = e;
		}
		get openDuration() {
			return console.warn("Graupl Tabs.openDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration;
		}
		set openDuration(e) {
			console.warn("Graupl Tabs.openDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration = e;
		}
		get closeDuration() {
			return console.warn("Graupl Tabs.closeDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration;
		}
		set closeDuration(e) {
			console.warn("Graupl Tabs.closeDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration = e;
		}
		get expandClass() {
			return this._classes.expand;
		}
		set expandClass(e) {
			C({ expandClass: e }), this._classes.expand !== e && (this._classes.expand = e);
		}
		get collapseClass() {
			return this._classes.collapse;
		}
		set collapseClass(e) {
			C({ collapseClass: e }), this._classes.collapse !== e && (this._classes.collapse = e);
		}
		get transitionClass() {
			return this._classes.transition;
		}
		set transitionClass(e) {
			C({ transitionClass: e }), this._classes.transition !== e && (this._classes.transition = e);
		}
		get transitionDuration() {
			return this._durations.transition;
		}
		set transitionDuration(e) {
			a("number", { transitionDuration: e }), this._durations.transition !== e && (this._durations.transition = e, this._setCustomProps());
		}
		get expandDuration() {
			return this._durations.expand === -1 ? this.transitionDuration : this._durations.expand;
		}
		set expandDuration(e) {
			a("number", { expandDuration: e }), this._durations.expand !== e && (this._durations.expand = e, this._setCustomProps());
		}
		get collapseDuration() {
			return this._durations.collapse === -1 ? this.transitionDuration : this._durations.collapse;
		}
		set collapseDuration(e) {
			a("number", { collapseDuration: e }), this._durations.collapse !== e && (this._durations.collapse = e, this._setCustomProps());
		}
		get isAutomatic() {
			return this._automatic;
		}
		set isAutomatic(e) {
			a("boolean", { isAutomatic: e }), this._automatic !== e && (this._automatic = e);
		}
		get currentChild() {
			return this._currentChild;
		}
		set currentChild(e) {
			a("number", { currentChild: e }), this._currentChild !== e && e >= 0 && e < this.elements.tabToggles.length && (this._currentChild = e);
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
			this.dom.tabToggles.forEach((e, t) => {
				const s = new Ge({
					toggleElement: e,
					contentElement: this.dom.tabContents[t],
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
			this.elements.tabToggles.forEach((e, t) => {
				this._addEventListener("focus", e.dom.toggle, () => {
					this.currentChild = t, this.isAutomatic && this.currentTabToggle.expand();
				});
			});
		}
		_handleClick() {
			this.elements.tabToggles.forEach((e, t) => {
				this._addEventListener("click", e.dom.toggle, () => {
					this.currentChild = t, this.currentEvent = "mouse", e.expand();
				});
			});
		}
		_handleKeydown() {
			this.dom.tabToggles.forEach((e) => {
				this._addEventListener("keydown", e, (t) => {
					this.currentEvent = "keyboard";
					const s = c(t);
					[
						"Space",
						"Enter",
						"ArrowRight",
						"ArrowLeft",
						"Home",
						"End"
					].includes(s) && d(t);
				});
			});
		}
		_handleKeyup() {
			this.dom.tabToggles.forEach((e) => {
				this._addEventListener("keyup", e, (t) => {
					switch (this.currentEvent = "keyboard", c(t)) {
						case "Space":
						case "Enter":
							d(t), this.currentTabToggle.expand();
							break;
						case "Home":
							d(t), this.focusFirstChild();
							break;
						case "End":
							d(t), this.focusLastChild();
							break;
						case "ArrowRight":
							d(t), this.focusNextChild();
							break;
						case "ArrowLeft": d(t), this.focusPreviousChild();
					}
				});
			});
		}
		focusCurrentChild() {
			this.currentChild !== -1 && this.currentTabToggle.focus();
		}
		focusChild(e) {
			this.blurCurrentChild(), this.currentChild = e, this.focusCurrentChild();
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
			this.elements.tabToggles.forEach((e) => e.dispose()), super.dispose();
		}
	};
	const Se = ({ options: e = {}, context: t = document, selector: s = ".tabs" } = {}) => {
		x("graupl-tabs-generator", s, t).forEach((i) => {
			const r = i.dataset.grauplTabsOptions ? JSON.parse(i.dataset.grauplTabsOptions.replace(/'/g, "\"")) || {} : {};
			new Ue({
				tabsElement: i,
				initialize: !0,
				...e,
				...r
			});
		});
	};
	var Me = class extends F {
		_scope = "Graupl";
		_rootDOMElement = "tooltip";
		_softLocked = !1;
		_hoverType = "on";
		_storageKey = "tooltips";
		_name = "Tooltip";
		constructor({ tooltipElement: e, tooltipToggleElement: t, tooltipDescriptionElement: s, expandClass: i = "show", collapseClass: r = "hide", transitionClass: o = "transitioning", transitionDelay: n = 250, transitionDuration: l = 150, expandDuration: u = -1, collapseDuration: p = -1, expandOnFocus: f = !0, collapseOnBlur: E = !0, hoverType: v = "on", hoverDelay: g = 250, enterDelay: m = -1, leaveDelay: _ = -1, prefix: h = "graupl-", key: b = null, initializeClass: y = "initializing", showClass: O, hideClass: T, showDuration: I, hideDuration: D, openOnFocus: A, closeOnBlur: B, initialize: $ = !1 } = {}) {
			O !== void 0 && (console.warn("Graupl Tooltip option \"showClass\" is deprecated and will be removed. Use expandClass instead."), i = O), T !== void 0 && (console.warn("Graupl Tooltip option \"hideClass\" is deprecated and will be removed. Use collapseClass instead."), r = T), I !== void 0 && (console.warn("Graupl Tooltip option \"showDuration\" is deprecated and will be removed. Use expandDuration instead."), u = I), D !== void 0 && (console.warn("Graupl Tooltip option \"hideDuration\" is deprecated and will be removed. Use collapseDuration instead."), p = D), A !== void 0 && (console.warn("Graupl Tooltip option \"openOnFocus\" is deprecated and will be removed. Use expandOnFocus instead."), f = A), B !== void 0 && (console.warn("Graupl Tooltip option \"closeOnBlur\" is deprecated and will be removed. Use collapseOnBlur instead."), E = B), super({
				controllerElement: t,
				controlledElement: s,
				expandClass: i,
				collapseClass: r,
				transitionClass: o,
				transitionDelay: n,
				transitionDuration: l,
				expandDuration: u,
				collapseDuration: p,
				expandOnFocus: f,
				collapseOnBlur: E,
				bootstrap: !1,
				initialize: !1,
				prefix: h,
				key: b,
				initializeClass: y
			}), this._dom.tooltip = e, this._dom.tooltipToggle = t, this._dom.tooltipDescription = s, this._hoverType = v, this._delays.hover = g, this._delays.enter = m, this._delays.leave = _, this._bootstrap(), $ && this.initialize();
		}
		_registerEvents() {
			super._registerEvents(), this._addInternalEventListener(this.getEventName("precollapse"), () => {
				this.isSoftLocked = !1;
			}), this._addInternalEventListener(this.getEventName("validate"), (e) => {
				if (e.detail.component !== this) return;
				const t = oe({ hoverType: this._hoverType }, { shouldThrow: !1 });
				t.status || (this._errors = [...this._errors, ...t.errors], this._valid = !1);
			});
		}
		get showClass() {
			return console.warn("Graupl Tooltip.showClass is deprecated and will be removed. Use expandClass instead."), this.expandClass;
		}
		set showClass(e) {
			console.warn("Graupl Tooltip.showClass is deprecated and will be removed. Use expandClass instead."), this.expandClass = e;
		}
		get hideClass() {
			return console.warn("Graupl Tooltip.hideClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass;
		}
		set hideClass(e) {
			console.warn("Graupl Tooltip.hideClass is deprecated and will be removed. Use collapseClass instead."), this.collapseClass = e;
		}
		get showDuration() {
			return console.warn("Graupl Tooltip.showDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration;
		}
		set showDuration(e) {
			console.warn("Graupl Tooltip.showDuration is deprecated and will be removed. Use expandDuration instead."), this.expandDuration = e;
		}
		get hideDuration() {
			return console.warn("Graupl Tooltip.hideDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration;
		}
		set hideDuration(e) {
			console.warn("Graupl Tooltip.hideDuration is deprecated and will be removed. Use collapseDuration instead."), this.collapseDuration = e;
		}
		get isOpen() {
			return console.warn("Graupl Tooltip.isOpen is deprecated and will be removed. Use isExpanded instead."), this.isExpanded;
		}
		get openOnFocus() {
			return console.warn("Graupl Tooltip.openOnFocus is deprecated and will be removed. Use expandOnFocus instead."), this.expandOnFocus;
		}
		set openOnFocus(e) {
			console.warn("Graupl Tooltip.openOnFocus is deprecated and will be removed. Use expandOnFocus instead."), this.expandOnFocus = e;
		}
		get closeOnBlur() {
			return console.warn("Graupl Tooltip.closeOnBlur is deprecated and will be removed. Use collapseOnBlur instead."), this.collapseOnBlur;
		}
		set closeOnBlur(e) {
			console.warn("Graupl Tooltip.closeOnBlur is deprecated and will be removed. Use collapseOnBlur instead."), this.collapseOnBlur = e;
		}
		_setIds() {
			this.dom.tooltip.id = this.dom.tooltip.id || `tooltip-${this.key}`, this.dom.tooltipToggle.id = this.dom.tooltipToggle.id || `tooltip-toggle-${this.key}`, this.dom.tooltipDescription.id = this.dom.tooltipDescription.id || `tooltip-description-${this.key}`, this._id = this.dom.tooltip.id;
		}
		_setAriaAttributes() {
			this.dom.tooltipToggle && (this.dom.tooltipDescription.setAttribute("role", "tooltip"), this.dom.tooltipToggle.setAttribute("role", "button"), this.dom.tooltipToggle && this.dom.tooltipToggle.setAttribute("aria-describedby", this.dom.tooltipDescription.id));
		}
		get hoverType() {
			return this._hoverType;
		}
		set hoverType(e) {
			oe({ hoverType: e }), this._hoverType !== e && (this._hoverType = e);
		}
		get hoverDelay() {
			return this._delays.hover;
		}
		set hoverDelay(e) {
			a("number", { hoverDelay: e }), this._delays.hover !== e && (this._delays.hover = e);
		}
		get enterDelay() {
			return this._delays.enter === -1 ? this.hoverDelay : this._delays.enter;
		}
		set enterDelay(e) {
			a("number", { enterDelay: e }), this._delays.enter !== e && (this._delays.enter = e);
		}
		get leaveDelay() {
			return this._delays.leave === -1 ? this.hoverDelay : this._delays.leave;
		}
		set leaveDelay(e) {
			a("number", { leaveDelay: e }), this._delays.leave !== e && (this._delays.leave = e);
		}
		get isSoftLocked() {
			return this._softLocked;
		}
		set isSoftLocked(e) {
			a("boolean", { isSoftLocked: e }), this._softLocked !== e && (this._softLocked = e);
		}
		_setCustomProps() {
			this.dom.tooltip.style.setProperty(`--${this.prefix}tooltip-transition-duration`, `${this.transitionDuration}ms`), this.dom.tooltip.style.setProperty(`--${this.prefix}tooltip-show-transition-duration`, `${this.expandDuration}ms`), this.dom.tooltip.style.setProperty(`--${this.prefix}tooltip-hide-transition-duration`, `${this.collapseDuration}ms`);
		}
		_handleClick() {
			this._addEventListener("click", this.dom.tooltipToggle, (e) => {
				this.currentEvent = "mouse", e.button === 0 && (d(e), this.isSoftLocked = !0, this.toggle());
			}), this._addEventListener("click", this.dom.tooltipDescription, (e) => {
				this.currentEvent = "mouse", e.button === 0 && (this.focusState = "self");
			}), this._addEventListener("click", document, (e) => {
				this.focusState === "self" && this.collapseOnBlur && (this.dom.tooltip === e.target || this.dom.tooltip.contains(e.target) || (this.currentEvent = "mouse", this.collapse()));
			});
		}
		_handleFocus() {
			this._addEventListener("focus", this.dom.tooltip, () => {
				this.focusState = "self";
			}), this._addEventListener("focusout", this.dom.tooltip, (e) => {
				!this.collapseOnBlur || this.currentEvent !== "keyboard" || e.relatedTarget === null || this.dom.tooltip.contains(e.relatedTarget) || this.collapse();
			});
		}
		_handleKeydown() {
			this._addEventListener("keydown", this.dom.tooltipToggle, (e) => {
				this.currentEvent = "keyboard";
				const t = c(e);
				(t === "Space" || t === "Enter") && d(e);
			}), this._addEventListener("keydown", this.dom.tooltip, (e) => {
				this.currentEvent = "keyboard", c(e) === "Escape" && d(e);
			});
		}
		_handleKeyup() {
			this._addEventListener("keyup", this.dom.tooltipToggle, (e) => {
				switch (this.currentEvent = "keyboard", c(e)) {
					case "Space":
					case "Enter":
						d(e), this.toggle();
						break;
					case "Tab": this.expandOnFocus && (d(e), this.expand());
				}
			}), this._addEventListener("keyup", this.dom.tooltip, (e) => {
				this.currentEvent = "keyboard", c(e) === "Escape" && (d(e), this.collapse());
			}), this._addEventListener("keyup", document, (e) => {
				switch (c(e)) {
					case "Escape":
						if (this.hoverType !== "on" && this.focusState !== "self") return;
						this.currentEvent = "keyboard", this.collapse();
				}
			});
		}
		_handleHover() {
			this._addEventListener("pointerenter", this.dom.tooltip, (e) => {
				e.pointerType === "pen" || e.pointerType === "touch" || this.hoverType !== "off" && (this.currentEvent = "mouse", this.enterDelay > 0 ? (this._clearTimeout(), this._setTimeout(() => {
					this.expand();
				}, this.enterDelay)) : this.expand());
			}), this._addEventListener("pointerleave", this.dom.tooltip, (e) => {
				e.pointerType === "pen" || e.pointerType === "touch" || this.hoverType != "off" && (this.isSoftLocked || (this.currentEvent = "mouse", this.leaveDelay > 0 ? (this._clearTimeout(), this._setTimeout(() => {
					this.collapse();
				}, this.leaveDelay)) : this.collapse()));
			});
		}
		show(...e) {
			return console.warn("Graupl Tooltip.show() is deprecated and will be removed. Use expand() instead."), this.expand(...e);
		}
		hide(...e) {
			return console.warn("Graupl Tooltip.hide() is deprecated and will be removed. Use collapse() instead."), this.collapse(...e);
		}
	};
	const ze = ({ options: e = {}, context: t = document, selector: s = ".tooltip", descriptionSelector: i = ".tooltip-description", controllerSelector: r = ".tooltip-toggle" } = {}) => {
		x("graupl-tooltip-generator", s, t).forEach((o) => {
			const n = o.dataset.grauplTooltipOptions ? JSON.parse(o.dataset.grauplTooltipOptions.replace(/'/g, "\"")) || {} : {};
			new Me({
				tooltipElement: o,
				tooltipToggleElement: o.querySelector(r) || null,
				tooltipDescriptionElement: o.querySelector(i) || null,
				initialize: !0,
				...e,
				...n
			});
		});
	};
	document.addEventListener("DOMContentLoaded", () => {
		ye(), xe(), Oe(), Ae(), Le(), $e(), Se(), ze();
	});
})();

//# sourceMappingURL=graupl.js.map