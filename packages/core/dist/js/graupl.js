(function() {
	function M(t, e, { shouldThrow: s = !0 } = {}) {
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
	function Z(t, { shouldThrow: e = !0 } = {}) {
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
			} catch (o) {
				s.status = !1, s.errors.push(o);
			}
		} catch (i) {
			s.status = !1, s.errors.push(i);
		}
		if (e && !s.status) throw s.errors[0];
		return s;
	}
	function u(t, { shouldThrow: e = !0 } = {}) {
		const s = {
			status: !0,
			errors: []
		};
		try {
			if (typeof t != "object" || Array.isArray(t)) throw new TypeError(`Values given to isValidClassList() must be inside of an object. "${typeof t}" given.`);
			for (const i in t) try {
				const o = typeof t[i];
				if (o !== "string") if (Array.isArray(t[i])) t[i].forEach((r) => {
					if (typeof r != "string") throw new TypeError(`${i} must be a string or an array of strings. An array containing non-strings given.`);
				});
				else throw new TypeError(`${i} must be a string or an array of strings. "${o}" given.`);
				else {
					const r = {};
					r[i] = t[i], Z(r);
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
	function st(t, { shouldThrow: e = !0 } = {}) {
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
	function it(t, { shouldThrow: e = !0 } = {}) {
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
	function W(t, { shouldThrow: e = !0 } = {}) {
		const s = {
			status: !0,
			errors: []
		};
		try {
			if (typeof t != "object") throw new TypeError(`Values given to isValidHoverType() must be inside of an object. "${typeof t}" given.`);
			const i = [
				"off",
				"on",
				"dynamic"
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
	function F(t, e, { shouldThrow: s = !0 } = {}) {
		const i = {
			status: !0,
			errors: []
		};
		try {
			if (n("string", { tagName: t }, { shouldThrow: !0 }).status && M(HTMLElement, e, { shouldThrow: !0 }).status) {
				const o = t.toLowerCase();
				for (const r in e) try {
					if (e[r].tagName.toLowerCase() !== o) throw new TypeError(`${r} must be a <${o}> element. <${e[r].tagName.toLowerCase()}> given.`);
				} catch (c) {
					i.status = !1, i.errors.push(c);
				}
			}
		} catch (o) {
			i.status = !1, i.errors.push(o);
		}
		if (s && !i.status) throw i.errors[0];
		return i;
	}
	function ot(t, e, { shouldThrow: s = !0 } = {}) {
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
	function rt(t, { shouldThrow: e = !0 } = {}) {
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
	function a(t, e) {
		t === "" || t.length === 0 || (typeof t == "string" ? e.classList.add(t) : e.classList.add(...t));
	}
	function l(t, e) {
		t === "" || t.length === 0 || (typeof t == "string" ? e.classList.remove(t) : e.classList.remove(...t));
	}
	var $ = class {
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
	}, V = class et {
		_scope;
		_type = "_default";
		_storage = {};
		_crush = !1;
		constructor({ scope: e, type: s = null, crush: i = !1, initialize: o = !0 } = {}) {
			this._scope = e, this._type = s || "_default", this._crush = i, o && this.initialize();
		}
		initialize() {
			try {
				!this._crush && typeof window[this.scope] < "u" && (M(et, { storage: window[this.scope] }, { shouldThrow: !1 }).status || typeof window[this.scope].storage < "u" && typeof window[this.scope].scope < "u" && typeof window[this.scope].type < "u") && (this._storage = window[this.scope].storage);
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
				const o = n("string", { key: s });
				if (!o.status) throw new Error(`StorageManager (${this.scope}): ${o.message}`);
				return this.storage[e][s];
			}
			return this.storage[e];
		}
		set({ type: e = this.type, key: s = null, data: i = {} } = {}) {
			const o = n("string", { type: e }), r = n("object", { data: i });
			if (!o.status) throw new Error(`StorageManager (${this.scope}): ${o.message}`);
			if (!r.status) throw new Error(`StorageManager (${this.scope}): ${r.message}`);
			if (s !== null) {
				const c = n("string", { key: s });
				if (!c.status) throw new Error(`StorageManager (${this.scope}): ${c.message}`);
				this._storage[e] || (this._storage[e] = {}), this._storage[e][s] = i;
			} else this._storage[e] = i;
		}
		clear({ type: e = this.type, key: s = null } = {}) {
			const i = n("string", { type: e });
			if (!i.status) throw new Error(`StorageManager (${this.scope}): ${i.message}`);
			if (s !== null) {
				const o = n("string", { key: s });
				if (!o.status) throw new Error(`StorageManager (${this.scope}): ${o.message}`);
				delete this.storage[e][s];
			} else delete this.storage[e];
		}
		dispose() {
			delete this._storage, delete this;
		}
	}, w = class {
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
				a(this.initializeClass, this.rootDOMElement), this._dispatchEvent("preinitialize", this.rootDOMElement), this._generateKey(), this._setDOMElements(), this._setIds(), this._setAriaAttributes(), this._setCustomProps(), this._createChildElements(), this._handleMediaMatch(), this._handleFocus(), this._handleHover(), this._handleClick(), this._handleKeydown(), this._handleKeyup(), this._dispatchEvent("initialize", this.rootDOMElement), this._store(), l(this.initializeClass, this.rootDOMElement), this._initialized = !0, this._dispatchEvent("postinitialize", this.rootDOMElement);
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
			u({ initializeClass: t }), this._classes.initialize !== t && (this._classes.initialize = t);
		}
		get focusState() {
			return this._focusState;
		}
		set focusState(t) {
			st({ focusState: t }), this._focusState !== t && (this._focusState = t);
		}
		get currentEvent() {
			return this._currentEvent;
		}
		set currentEvent(t) {
			it({ currentEvent: t }), this._currentEvent !== t && (this._currentEvent = t);
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
			const t = rt(this, { shouldThrow: !1 });
			if (t.status || (this._errors = [...this._errors, ...t.errors], this._valid = !1), Object.keys(this._dom).length > 0) {
				const i = {};
				for (const r of Object.keys(this._dom)) Array.isArray(this._dom[r]) ? this._dom[r].forEach((c, m) => {
					i[`${r}Element[${m}]`] = c;
				}) : this._dom[r] !== null && (i[`${r}Element`] = this._dom[r]);
				const o = M(HTMLElement, i, { shouldThrow: !1 });
				o.status || (this._errors = [...this._errors, ...o.errors], this._valid = !1);
			}
			if (Object.keys(this._selectors).length > 0) {
				const i = {};
				for (const r of Object.keys(this._selectors)) i[`${r}Selector`] = this._selectors[r];
				const o = Z(i, { shouldThrow: !1 });
				o.status || (this._errors = [...this._errors, ...o.errors], this._valid = !1);
			}
			if (Object.keys(this._classes).length > 0) {
				const i = {};
				for (const r of Object.keys(this._classes)) this._classes[r] !== "" && (i[`${r}Class`] = this._classes[r]);
				const o = u(i, { shouldThrow: !1 });
				o.status || (this._errors = [...this._errors, ...o.errors], this._valid = !1);
			}
			if (Object.keys(this._durations).length > 0) {
				const i = {};
				for (const r of Object.keys(this._durations)) i[`${r}Duration`] = this._durations[r];
				const o = n("number", i, { shouldThrow: !1 });
				o.status || (this._errors = [...this._errors, ...o.errors], this._valid = !1);
			}
			if (Object.keys(this.delays).length > 0) {
				const i = {};
				for (const r of Object.keys(this.delays)) i[`${r}Delay`] = this.delays[r];
				const o = n("number", i, { shouldThrow: !1 });
				o.status || (this._errors = [...this._errors, ...o.errors], this._valid = !1);
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
			M(HTMLElement, { context: e });
			const o = Array.from(e.querySelectorAll(this.selectors[t])).filter((r) => i ? r.parentElement === e : !0);
			Array.isArray(this._dom[t]) ? s ? this._dom[t] = o : this._dom[t] = [...this._dom[t], ...o] : this._dom[t] = o[0] || null;
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
			this._shouldStore && (M(V, { storage: window.GrauplStorage }, { shouldThrow: !1 }).status || new V({ scope: "GrauplStorage" }), window.GrauplStorage.set({
				key: this.id !== "" ? this.id : this.key,
				type: this._storageKey,
				data: this
			}));
		}
		_unstore() {
			this._shouldStore && M(V, { storage: window.GrauplStorage }, { shouldThrow: !1 }).status && window.GrauplStorage.clear({
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
			ot(t, this), M(HTMLElement, { element: e }), e.dispatchEvent(this.events[t]);
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
			let o = -1;
			this._listeners.forEach((r, c) => {
				r.type === t && r.element === e && r.listener === s && JSON.stringify(r.options) === JSON.stringify(i) && (o = c);
			}), o !== -1 && this._listeners.splice(o, 1);
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
	}, nt = class extends w {
		_rootDOMElement = "item";
		_protectedDOMElements = [
			"toggle",
			"header",
			"content"
		];
		_open = new $(!1);
		_locked = new $(!1);
		_name = "AccordionItem";
		_storageKey = "accordionItems";
		_shouldStore = !1;
		constructor({ accordionItemElement: t, accordionItemToggleElement: e, accordionItemHeaderElement: s, accordionItemContentElement: i, parentAccordion: o = null }) {
			super({
				prefix: o.prefix,
				key: o.key
			}), this._dom.item = t, this._dom.toggle = e, this._dom.header = s, this._dom.content = i, this._elements.parent = o, this._registerEvent("expand", { detail: { item: this } }), this._registerEvent("collapse", { detail: { item: this } }), this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
				this.dom.toggle.getAttribute("aria-expanded") === "true" ? this.show({
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
		get isOpen() {
			return this._open.value;
		}
		get isLocked() {
			return this._locked.value;
		}
		_setIds() {
			const { key: t } = this.elements.parent, e = this.elements.parent.dom.accordionItems.indexOf(this.dom.item);
			this.dom.item.id = this.dom.item.id || `accordion-item-${t}-${e}`, this.dom.toggle.id = this.dom.toggle.id || `accordion-item-toggle-${t}-${e}`, this.dom.header.id = this.dom.header.id || `accordion-item-header-${t}-${e}`, this.dom.content.id = this.dom.content.id || `accordion-item-content-${t}-${e}`;
		}
		_setAriaAttributes() {
			F("button", { toggle: this.dom.toggle }, { shouldThrow: !1 }).status || this.dom.toggle.setAttribute("role", "button"), this.dom.toggle.getAttribute("aria-expanded") !== "true" && this.dom.toggle.setAttribute("aria-expanded", "false"), this.dom.toggle.setAttribute("aria-controls", this.dom.content.id), F("section", { content: this.dom.content }, { shouldThrow: !1 }).status || this.dom.content.setAttribute("role", "region"), this.dom.content.setAttribute("aria-labelledby", this.dom.toggle.id);
		}
		_reveal({ emit: t = !0, transition: e = !0 } = {}) {
			const { closeClass: s, openClass: i, transitionClass: o, openDuration: r } = this.elements.parent;
			this.dom.toggle.setAttribute("aria-expanded", "true"), e && o !== "" ? (a(o, this.dom.item), requestAnimationFrame(() => {
				l(s, this.dom.item), this.dom.item.style.height = `${this.dom.header.getBoundingClientRect().height}px`, requestAnimationFrame(() => {
					a(i, this.dom.item), this.dom.item.style.height = `${this.dom.header.getBoundingClientRect().height + this.dom.content.getBoundingClientRect().height}px`, requestAnimationFrame(() => {
						this._setTimeout(() => {
							l(o, this.dom.item), this.dom.item.style.height = "";
						}, r);
					});
				});
			})) : (a(i, this.dom.item), l(s, this.dom.item)), this.dom.content.removeAttribute("inert"), t && this._dispatchEvent("expand", this.dom.item);
		}
		_conceal({ emit: t = !0, transition: e = !0 } = {}) {
			const { closeClass: s, openClass: i, transitionClass: o, closeDuration: r } = this.elements.parent;
			this.dom.toggle.setAttribute("aria-expanded", "false"), e && o !== "" ? (a(o, this.dom.item), this.dom.item.style.height = `${this.dom.item.getBoundingClientRect().height}px`, requestAnimationFrame(() => {
				l(i, this.dom.item), this.dom.item.style.height = `${this.dom.header.getBoundingClientRect().height}px`, requestAnimationFrame(() => {
					a(s, this.dom.item), requestAnimationFrame(() => {
						this._setTimeout(() => {
							l(o, this.dom.item), this.dom.item.style.height = "";
						}, r);
					});
				});
			})) : (a(s, this.dom.item), l(i, this.dom.item)), this.dom.content.setAttribute("inert", "true"), t && this._dispatchEvent("collapse", this.dom.item);
		}
		show({ force: t = !1, preserveState: e = !1, emit: s = !0, transition: i = !0 } = {}) {
			this.isOpen && !t || (this._reveal({
				emit: s,
				transition: i
			}), this._open.value = !0, e || this._open.commit(), this.elements.parent.allowExpandMultiple || (this.unlockSiblings(), this.closeSiblings()), this.elements.parent.allowCollapseAll || (this.elements.parent.openAccordionItems.length <= 1 ? this.lock() : this.unlockSiblings()));
		}
		hide({ force: t = !1, preserveState: e = !1, emit: s = !0, transition: i = !0 } = {}) {
			!this.isOpen && !t || !this.elements.parent.allowCollapseAll && this.elements.parent.openAccordionItems.length <= 1 || (this._conceal({
				emit: s,
				transition: i
			}), this._open.value = !1, e || this._open.commit(), !this.elements.parent.allowCollapseAll && this.elements.parent.openAccordionItems.length === 1 && this.elements.parent.openAccordionItems[0].lock());
		}
		toggle() {
			this.isOpen ? this.hide() : this.show();
		}
		focus() {
			this.dom.toggle.focus();
		}
		blur() {
			this.dom.toggle.blur();
		}
		lock() {
			this._locked.value = !0, this._locked.commit(), this.dom.toggle.setAttribute("disabled", "true");
		}
		unlock() {
			this._locked.value = !1, this._locked.commit(), this.dom.toggle.removeAttribute("disabled");
		}
		closeSiblings() {
			this.elements.parent && this.elements.parent.elements.accordionItems.forEach((t) => {
				t !== this && t.hide();
			});
		}
		unlockSiblings() {
			this.elements.parent && this.elements.parent.elements.accordionItems.forEach((t) => {
				t !== this && t.unlock();
			});
		}
	};
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
	function h(t) {
		t.preventDefault(), t.stopPropagation();
	}
	var at = class extends w {
		_rootDOMElement = "accordion";
		_optionalKeySupport = !0;
		_expandMultiple = !0;
		_collapseAll = !0;
		_currentChild = 0;
		_storageKey = "accordions";
		_name = "Accordion";
		constructor({ accordionElement: t, accordionItemsSelector: e = ".accordion-item", accordionItemTogglesSelector: s = ".accordion-item-toggle", accordionItemHeadersSelector: i = ".accordion-item-header", accordionItemContentsSelector: o = ".accordion-item-content", accordionControlContainerSelector: r = ".accordion-control-container", accordionControlsSelector: c = ".accordion-control", expandControllerSelector: m = ".expand-all", collapseControllerSelector: f = ".collapse-all", openClass: C = "show", closeClass: y = "hide", transitionClass: E = "transitioning", transitionDuration: I = 300, openDuration: g = -1, closeDuration: p = -1, optionalKeySupport: _ = !1, allowExpandMultiple: b = !0, allowCollapseAll: D = !0, automaticActivation: O = !1, prefix: v = "graupl-", key: x = null, initializeClass: A = "initializing", initialize: B = !1 }) {
			super({
				prefix: v,
				key: x,
				initializeClass: A
			}), this._dom.accordion = t, this._dom.accordionItems = [], this._dom.accordionItemToggles = [], this._dom.accordionItemHeaders = [], this._dom.accordionItemContents = [], this._dom.accordionControlContainer = null, this._dom.accordionControls = [], this._dom.expandController = [], this._dom.collapseController = [], this._selectors.accordionItems = e, this._selectors.accordionItemToggles = s, this._selectors.accordionItemHeaders = i, this._selectors.accordionItemContents = o, this._selectors.accordionControlContainer = r, this._selectors.accordionControls = c, this._selectors.expandController = m, this._selectors.collapseController = f, this._elements.accordionItems = [], this._classes.open = C || "", this._classes.close = y || "", this._classes.transition = E || "", this._durations.transition = I, this._durations.open = g, this._durations.close = p, this._automatic = O, this._optionalKeySupport = _, this._expandMultiple = b, this._collapseAll = D, this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
				this.dom.expandController.length > 0 && !this.allowExpandMultiple && this.dom.expandController.forEach((T) => {
					T.setAttribute("disabled", "disabled");
				}), this.dom.collapseController.length > 0 && !this.allowCollapseAll && this.dom.collapseController.forEach((T) => {
					T.setAttribute("disabled", "disabled");
				});
			}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
				const L = n("boolean", {
					automaticActivation: this._automatic,
					optionalKeySupport: this._optionalKeySupport,
					allowExpandMultiple: this._expandMultiple,
					allowCollapseAll: this._collapseAll
				}, { shouldThrow: !1 });
				L.status || (this._errors = [...this._errors, ...L.errors], this._valid = !1);
			}), B && this.initialize();
		}
		get openClass() {
			return this._classes.open;
		}
		set openClass(t) {
			u({ openClass: t }), this._classes.open !== t && (this._classes.open = t);
		}
		get closeClass() {
			return this._classes.close;
		}
		set closeClass(t) {
			u({ closeClass: t }), this._classes.close !== t && (this._classes.close = t);
		}
		get transitionClass() {
			return this._classes.transition;
		}
		set transitionClass(t) {
			u({ transitionClass: t }), this._classes.transition !== t && (this._classes.transition = t);
		}
		get transitionDuration() {
			return this._durations.transition;
		}
		set transitionDuration(t) {
			n("number", { transitionDuration: t }), this._durations.transition !== t && (this._durations.transition = t, this._setCustomProps());
		}
		get openDuration() {
			return this._durations.open === -1 ? this.transitionDuration : this._durations.open;
		}
		set openDuration(t) {
			n("number", { openDuration: t }), this._durations.open !== t && (this._durations.open = t, this._setCustomProps());
		}
		get closeDuration() {
			return this._durations.close === -1 ? this.transitionDuration : this._durations.close;
		}
		set closeDuration(t) {
			n("number", { closeDuration: t }), this._durations.close !== t && (this._durations.close = t, this._setCustomProps());
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
		get openAccordionItems() {
			return this.elements.accordionItems.filter((t) => t.isOpen);
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
			this.dom.accordion.style.setProperty(`--${this.prefix}accordion-transition-duration`, `${this.transitionDuration}ms`), this.dom.accordion.style.setProperty(`--${this.prefix}accordion-open-transition-duration`, `${this.openDuration}ms`), this.dom.accordion.style.setProperty(`--${this.prefix}accordion-close-transition-duration`, `${this.closeDuration}ms`);
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
				const s = new nt({
					accordionItemElement: t,
					accordionItemToggleElement: this.dom.accordionItemToggles[e],
					accordionItemHeaderElement: this.dom.accordionItemHeaders[e],
					accordionItemContentElement: this.dom.accordionItemContents[e],
					parentAccordion: this
				});
				s.initialize(), this.elements.accordionItems.push(s);
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
					this.currentEvent = "mouse", this.allowExpandMultiple && this.openChildren();
				});
			}), this.dom.collapseController.forEach((t) => {
				this._addEventListener("click", t, () => {
					this.currentEvent = "mouse", this.allowCollapseAll && this.closeChildren();
				});
			});
		}
		_handleKeydown() {
			this.dom.accordionItemToggles.forEach((t) => {
				this._addEventListener("keydown", t, (e) => {
					const s = d(e);
					["Space", "Enter"].includes(s) ? (h(e), this.currentEvent = "keyboard") : this.optionalKeySupport && [
						"ArrowDown",
						"ArrowUp",
						"Home",
						"End"
					].includes(s) && (h(e), this.currentEvent = "keyboard");
				});
			}), this.dom.accordionControls.forEach((t) => {
				this._addEventListener("keydown", t, (e) => {
					const s = d(e);
					["Space", "Enter"].includes(s) && (h(e), this.currentEvent = "keyboard");
				});
			});
		}
		_handleKeyup() {
			this.dom.accordionItemToggles.forEach((t) => {
				this._addEventListener("keyup", t, (e) => {
					const s = d(e);
					switch (s) {
						case "Space":
						case "Enter": h(e), this.currentEvent = "keyboard", this.currentAccordionItem.toggle();
					}
					if (this.optionalKeySupport) switch (s) {
						case "Home":
							h(e), this.focusFirstChild();
							break;
						case "End":
							h(e), this.focusLastChild();
							break;
						case "ArrowDown":
							h(e), this.focusNextChild();
							break;
						case "ArrowUp": h(e), this.focusPreviousChild();
					}
				});
			}), this.dom.expandController.forEach((t) => {
				this._addEventListener("keyup", t, (e) => {
					switch (d(e)) {
						case "Space":
						case "Enter": h(e), this.currentEvent = "keyboard", this.allowExpandMultiple && this.openChildren();
					}
				});
			}), this.dom.collapseController.forEach((t) => {
				this._addEventListener("keyup", t, (e) => {
					switch (d(e)) {
						case "Space":
						case "Enter": h(e), this.currentEvent = "keyboard", this.allowCollapseAll && this.closeChildren();
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
		openChildren() {
			this.elements.accordionItems.forEach((t) => t.show());
		}
		closeChildren() {
			this.elements.accordionItems.forEach((t) => t.hide());
		}
	};
	const X = /[\11\12\14\15\40]+/, N = "data-once", lt = document;
	function H(t, e, s) {
		return t[`${e}Attribute`](N, s);
	}
	function K(t) {
		if (typeof t != "string") throw new TypeError("once ID must be a string");
		if (t === "" || X.test(t)) throw new RangeError("once ID must not be empty or contain spaces");
		return `[${N}~="${t}"]`;
	}
	function ht(t) {
		if (!(t instanceof Element)) throw new TypeError("The element must be an instance of Element");
		return !0;
	}
	function j(t, e = lt) {
		let s = t;
		if (t === null) s = [];
		else if (t) if (e instanceof Document || e instanceof DocumentFragment || e instanceof Element) typeof t == "string" ? s = e.querySelectorAll(t) : t instanceof Element && (s = [t]);
		else throw new TypeError("Context must be an object of type \"Document\", \"DocumentFragment\", or \"Element\".");
		else throw new TypeError("Selector must not be empty");
		return Array.prototype.slice.call(s);
	}
	function R(t, e, s) {
		return e.filter((i) => {
			const o = ht(i) && i.matches(t);
			return o && s && s(i), o;
		});
	}
	function Y(t, { add: e, remove: s }) {
		const i = [];
		H(t, "has") && H(t, "get").trim().split(X).forEach((r) => {
			i.indexOf(r) < 0 && r !== s && i.push(r);
		}), e && i.push(e);
		const o = i.join(" ");
		H(t, o === "" ? "remove" : "set", o);
	}
	function k(t, e, s) {
		return R(`:not(${K(t)})`, j(e, s), (i) => Y(i, { add: t }));
	}
	k.remove = (t, e, s) => R(K(t), j(e, s), (i) => Y(i, { remove: t })), k.filter = (t, e, s) => R(K(t), j(e, s)), k.find = (t, e) => j(t ? K(t) : `[${N}]`, e);
	const ct = ({ options: t = {}, context: e = document, selector: s = ".accordion" } = {}) => {
		k("graupl-accordion-generator", s, e).forEach((i) => {
			const o = i.dataset.grauplAccordionOptions ? JSON.parse(i.dataset.grauplAccordionOptions.replace(/'/g, "\"")) || {} : {};
			new at({
				accordionElement: i,
				initialize: !0,
				...t,
				...o
			});
		});
	};
	var dt = class extends w {
		_rootDOMElement = "alert";
		_protectedDOMElements = ["controller"];
		_hidden = new $(!1);
		_storageKey = "alerts";
		_name = "Alert";
		constructor({ alertElement: t, controllerElement: e = null, showClass: s = "show", hideClass: i = "hide", transitionClass: o = "transitioning", transitionDuration: r = 150, showDuration: c = -1, hideDuration: m = -1, isHidden: f = !1, prefix: C = "graupl-", key: y = null, initializeClass: E = "initializing", initialize: I = !1 } = {}) {
			super({
				prefix: C,
				key: y,
				initializeClass: E
			}), this._dom.alert = t, this._dom.controller = e, this._classes.show = s || "", this._classes.hide = i || "", this._classes.transition = o || "", this._durations.transition = r, this._durations.show = c, this._durations.hide = m, this._hidden.value = f, this._hidden.commit(), this._registerEvent("show", { detail: { alert: this } }), this._registerEvent("hide", { detail: { alert: this } }), this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
				this.isHidden && this._conceal({
					emit: !1,
					transition: !1
				});
			}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
				const p = n("boolean", { isHidden: this._hidden.value }, { shouldThrow: !1 });
				p.status || (this._errors = [...this._errors, ...p.errors], this._valid = !1);
			}), I && this.initialize();
		}
		get showClass() {
			return this._classes.show;
		}
		set showClass(t) {
			u({ showClass: t }), this._classes.show !== t && (this._classes.show = t);
		}
		get hideClass() {
			return this._classes.hide;
		}
		set hideClass(t) {
			u({ hideClass: t }), this._classes.hide !== t && (this._classes.hide = t);
		}
		get transitionClass() {
			return this._classes.transition;
		}
		set transitionClass(t) {
			u({ transitionClass: t }), this._classes.transition !== t && (this._classes.transition = t);
		}
		get transitionDuration() {
			return this._durations.transition;
		}
		set transitionDuration(t) {
			n("number", { transitionDuration: t }), this._durations.transition !== t && (this._durations.transition = t, this._setCustomProps());
		}
		get showDuration() {
			return this._durations.show === -1 ? this.transitionDuration : this._durations.show;
		}
		set showDuration(t) {
			n("number", { showDuration: t }), this._durations.show !== t && (this._durations.show = t, this._setCustomProps());
		}
		get hideDuration() {
			return this._durations.hide === -1 ? this.transitionDuration : this._durations.hide;
		}
		set hideDuration(t) {
			n("number", { hideDuration: t }), this._durations.hide !== t && (this._durations.hide = t, this._setCustomProps());
		}
		get isHidden() {
			return this._hidden.value;
		}
		_setIds() {
			this.dom.alert.id = this.dom.alert.id || `alert-${this.key}`, this.dom.controller.id = this.dom.controller.id || `alert-controller-${this.key}`, this._id = this.dom.alert.id;
		}
		_reveal({ emit: t = !0, transition: e = !0 } = {}) {
			e && this.transitionClass !== "" ? (a(this.transitionClass, this.dom.alert), requestAnimationFrame(() => {
				l(this.hideClass, this.dom.alert), requestAnimationFrame(() => {
					a(this.showClass, this.dom.alert), requestAnimationFrame(() => {
						this._setTimeout(() => l(this.transitionClass, this.dom.alert), this.showDuration);
					});
				});
			})) : (a(this.showClass, this.dom.alert), l(this.hideClass, this.dom.alert)), this.dom.alert.removeAttribute("inert"), t && this._dispatchEvent("show", this.dom.alert);
		}
		_conceal({ emit: t = !0, transition: e = !0 } = {}) {
			e && this.transitionClass !== "" ? (a(this.transitionClass, this.dom.alert), requestAnimationFrame(() => {
				l(this.showClass, this.dom.alert), requestAnimationFrame(() => {
					a(this.hideClass, this.dom.alert), requestAnimationFrame(() => {
						this._setTimeout(() => l(this.transitionClass, this.dom.alert), this.hideDuration);
					});
				});
			})) : (a(this.hideClass, this.dom.alert), l(this.showClass, this.dom.alert)), this.dom.alert.setAttribute("inert", "true"), t && this._dispatchEvent("hide", this.dom.alert);
		}
		_setCustomProps() {
			this.dom.alert.style.setProperty(`--${this.prefix}alert-transition-duration`, `${this.transitionDuration}ms`), this.dom.alert.style.setProperty(`--${this.prefix}alert-show-transition-duration`, `${this.showDuration}ms`), this.dom.alert.style.setProperty(`--${this.prefix}alert-hide-transition-duration`, `${this.hideDuration}ms`);
		}
		_handleClick() {
			this.dom.controller !== null && this._addEventListener("click", this.dom.controller, () => this.hide());
		}
		_handleKeydown() {
			this.dom.controller !== null && this._addEventListener("keydown", this.dom.controller, (t) => {
				const e = d(t);
				(e === "Space" || e === "Enter") && h(t);
			});
		}
		_handleKeyup() {
			this.dom.controller !== null && this._addEventListener("keyup", this.dom.controller, (t) => {
				const e = d(t);
				(e === "Space" || e === "Enter") && this.hide();
			});
		}
		show({ force: t = !1, preserveState: e = !1 } = {}) {
			!this.isHidden && !t || (this.focusState = "self", this._reveal(), this._hidden.value = !1, e || this._hidden.commit());
		}
		hide({ force: t = !1, preserveState: e = !1 } = {}) {
			this.isHidden && !t || (this.focusState = "none", this._conceal(), this._hidden.value = !0, e || this._hidden.commit());
		}
	};
	const ut = ({ options: t = {}, context: e = document, selector: s = ".alert" } = {}) => {
		k("graupl-alert-generator", s, e).forEach((i) => {
			const o = i.dataset.grauplAlertOptions ? JSON.parse(i.dataset.grauplAlertOptions.replace(/'/g, "\"")) || {} : {};
			new dt({
				alertElement: i,
				controllerElement: i.querySelector(".alert-dismisser") || null,
				initialize: !0,
				...t,
				...o
			});
		});
	};
	var mt = class extends w {
		_rootDOMElement = "item";
		_protectedDOMElements = ["link"];
		_storageKey = "breadcrumbItems";
		_shouldStore = !1;
		_toggle = !1;
		constructor({ breadcrumbItemElement: t, breadcrumbLinkElement: e = null, parentBreadcrumb: s, isToggle: i = !1, prefix: o = "graupl-", key: r = null, initializeClass: c = "initializing" }) {
			super({
				prefix: o,
				key: r,
				initializeClass: c
			}), this._dom.item = t, this._dom.link = e || null, this._elements.parent = s, this._toggle = i;
		}
		get isToggle() {
			return this._toggle;
		}
		focus() {
			this.elements.parent.shouldFocus && this.dom.link && requestAnimationFrame(() => {
				this.dom.link.focus();
			});
		}
		blur() {
			this.elements.parent.shouldFocus && this.dom.link && requestAnimationFrame(() => {
				this.dom.link.blur();
			});
		}
	}, pt = class extends w {
		_rootDOMElement = "breadcrumb";
		_currentChild = 0;
		_open = new $(!1);
		_locked = new $(!1);
		_openInsideBreakpoint = !1;
		_openOutsideBreakpoint = !0;
		_closeInsideBreakpoint = !0;
		_closeOutsideBreakpoint = !1;
		_lockInsideBreakpoint = !1;
		_lockOutsideBreakpoint = !0;
		_unlockInsideBreakpoint = !1;
		_unlockOutsideBreakpoint = !1;
		_openOnFocus = !1;
		_closeOnBlur = !1;
		_storageKey = "breadcrumbs";
		_name = "Breadcrumb";
		_mediaQueryListEventCallback = (t) => {
			t.matches ? (this.unlockInsideBreakpoint && this.unlock(), this.isOpen && this.closeInsideBreakpoint ? (this.isLocked && this.unlock(), this.close({ preserveState: !0 })) : !this.isOpen && this.openInsideBreakpoint && (this.isLocked && this.unlock(), this.open()), this.lockInsideBreakpoint && this.lock()) : (this.unlockOutsideBreakpoint && this.unlock(), this.isOpen && this.closeOutsideBreakpoint ? (this.isLocked && this.unlock(), this.close({ preserveState: !0 })) : !this.isOpen && this.openOutsideBreakpoint && (this.isLocked && this.unlock(), this.open()), this.lockOutsideBreakpoint && this.lock());
		};
		constructor({ breadcrumbElement: t, breadcrumbItemsSelector: e = ".breadcrumb-item", breadcrumbLinksSelector: s = ".breadcrumb-link", breadcrumbToggleSelector: i = ".breadcrumb-toggle", lockedClass: o = "locked", unlockedClass: r = "unlocked", openClass: c = "show", closeClass: m = "hide", transitionClass: f = "transitioning", transitionDuration: C = 250, openDuration: y = -1, closeDuration: E = -1, openOnFocus: I = !1, closeOnBlur: g = !1, minWidth: p = "", breakpoint: _ = "856px", autoOpen: b = !1, openInsideBreakpoint: D = !1, openOutsideBreakpoint: O = !0, closeInsideBreakpoint: v = !0, closeOutsideBreakpoint: x = !1, lockInsideBreakpoint: A = !1, lockOutsideBreakpoint: B = !0, unlockInsideBreakpoint: T = !0, unlockOutsideBreakpoint: L = !1, locked: P = !1, mediaQuery: S = "", prefix: q = "graupl-", key: z = null, initializeClass: J = "initializing", initialize: U = !1 }) {
			super({
				prefix: q,
				key: z,
				initializeClass: J
			}), this._dom.breadcrumb = t, this._dom.breadcrumbItems = [], this._dom.breadcrumbLinks = [], this._dom.breadcrumbToggle = null, this._selectors.breadcrumbItems = e, this._selectors.breadcrumbLinks = s, this._selectors.breadcrumbToggle = i, this._elements.breadcrumbItems = [], this._classes.locked = o || "", this._classes.unlocked = r || "", this._classes.open = c || "", this._classes.close = m || "", this._classes.transition = f || "", this._durations.transition = C, this._durations.open = y, this._durations.close = E, this._openOnFocus = I, this._closeOnBlur = g, p !== "" && (console.warn("`minWidth` is deprecated and will be removed in a future release. Please set `breakpoint` instead."), _ === "" && (_ = p)), b && _ !== "" && (console.warn("`autoOpen` is deprecated and will be removed in a future release. Please set `openOutsideBreakpoint` and `closeInsideBreakpoint` to `true` instead."), O = b, v = b), this._breakpoint = _ || "", this._openInsideBreakpoint = D, this._openOutsideBreakpoint = O, this._closeInsideBreakpoint = v, this._closeOutsideBreakpoint = x, this._lockInsideBreakpoint = A, this._lockOutsideBreakpoint = B, this._unlockInsideBreakpoint = T, this._unlockOutsideBreakpoint = L, this._mediaQueryString = S || "", this._locked.value = P, this._locked.commit(), this._registerEvent("expand", { detail: { breadcrumb: this } }), this._registerEvent("collapse", { detail: { breadcrumb: this } }), this._registerEvent("lock", { detail: { breadcrumb: this } }), this._registerEvent("unlock", { detail: { breadcrumb: this } }), this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
				requestAnimationFrame(() => {
					this.dom.breadcrumbToggle && (this.dom.breadcrumbToggle.getAttribute("aria-expanded") === "true" || this.openOutsideBreakpoint && !window.matchMedia(this.mediaQuery).matches || this.openInsideBreakpoint && window.matchMedia(this.mediaQuery).matches ? this.open({ force: !0 }) : this.close({ force: !0 })), this.isLocked || this.lockInsideBreakpoint && window.matchMedia(this.mediaQuery).matches || this.lockOutsideBreakpoint && !window.matchMedia(this.mediaQuery).matches ? this.lock({ force: !0 }) : this.unlock({ force: !0 });
				});
			}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
				const tt = n("boolean", {
					openOnFocus: this._openOnFocus,
					closeOnBlur: this._closeOnBlur,
					openInsideBreakpoint: this._openInsideBreakpoint,
					openOutsideBreakpoint: this._openOutsideBreakpoint,
					closeInsideBreakpoint: this._closeInsideBreakpoint,
					closeOutsideBreakpoint: this._closeOutsideBreakpoint,
					lockInsideBreakpoint: this._lockInsideBreakpoint,
					lockOutsideBreakpoint: this._lockOutsideBreakpoint,
					unlockInsideBreakpoint: this._unlockInsideBreakpoint,
					unlockOutsideBreakpoint: this._unlockOutsideBreakpoint,
					locked: this._locked.value
				}, { shouldThrow: !1 });
				tt.status || (this._errors = [...this._errors, ...tt.errors], this._valid = !1);
			}), U && this.initialize();
		}
		get lockedClass() {
			return this._classes.locked;
		}
		set lockedClass(t) {
			u({ lockedClass: t }), this._classes.locked !== t && (this._classes.locked = t);
		}
		get unlockedClass() {
			return this._classes.unlocked;
		}
		set unlockedClass(t) {
			u({ unlockedClass: t }), this._classes.unlocked !== t && (this._classes.unlocked = t);
		}
		get openClass() {
			return this._classes.open;
		}
		set openClass(t) {
			u({ openClass: t }), this._classes.open !== t && (this._classes.open = t);
		}
		get closeClass() {
			return this._classes.close;
		}
		set closeClass(t) {
			u({ closeClass: t }), this._classes.close !== t && (this._classes.close = t);
		}
		get transitionClass() {
			return this._classes.transition;
		}
		set transitionClass(t) {
			u({ transitionClass: t }), this._classes.transition !== t && (this._classes.transition = t);
		}
		get transitionDuration() {
			return this._durations.transition;
		}
		set transitionDuration(t) {
			n("number", { transitionDuration: t }), this._durations.transition !== t && (this._durations.transition = t, this._setCustomProps());
		}
		get openDuration() {
			return this._durations.open === -1 ? this.transitionDuration : this._durations.open;
		}
		set openDuration(t) {
			n("number", { openDuration: t }), this._durations.open !== t && (this._durations.open = t, this._setCustomProps());
		}
		get closeDuration() {
			return this._durations.close === -1 ? this.transitionDuration : this._durations.close;
		}
		set closeDuration(t) {
			n("number", { closeDuration: t }), this._durations.close !== t && (this._durations.close = t, this._setCustomProps());
		}
		get openOnFocus() {
			return this._openOnFocus;
		}
		set openOnFocus(t) {
			n("boolean", { openOnFocus: t }), this._openOnFocus !== t && (this._openOnFocus = t);
		}
		get closeOnBlur() {
			return this._closeOnBlur;
		}
		set closeOnBlur(t) {
			n("boolean", { closeOnBlur: t }), this._closeOnBlur !== t && (this._closeOnBlur = t);
		}
		get isOpen() {
			return this._open.value;
		}
		get hasOpened() {
			return this._open.committed;
		}
		get openInsideBreakpoint() {
			return this._openInsideBreakpoint;
		}
		set openInsideBreakpoint(t) {
			n("boolean", { openInsideBreakpoint: t }), this._openInsideBreakpoint !== t && (this._openInsideBreakpoint = t);
		}
		get openOutsideBreakpoint() {
			return this._openOutsideBreakpoint;
		}
		set openOutsideBreakpoint(t) {
			n("boolean", { openOutsideBreakpoint: t }), this._openOutsideBreakpoint !== t && (this._openOutsideBreakpoint = t);
		}
		get closeInsideBreakpoint() {
			return this._closeInsideBreakpoint;
		}
		set closeInsideBreakpoint(t) {
			n("boolean", { closeInsideBreakpoint: t }), this._closeInsideBreakpoint !== t && (this._closeInsideBreakpoint = t);
		}
		get closeOutsideBreakpoint() {
			return this._closeOutsideBreakpoint;
		}
		set closeOutsideBreakpoint(t) {
			n("boolean", { closeOutsideBreakpoint: t }), this._closeOutsideBreakpoint !== t && (this._closeOutsideBreakpoint = t);
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
		get isLocked() {
			return this._locked.value;
		}
		get shouldBeLocked() {
			return this._locked.committed;
		}
		get currentChild() {
			return this._currentChild;
		}
		set currentChild(t) {
			n("number", { currentChild: t }), this._currentChild !== t && t >= 0 && t < this.elements.breadcrumbItems.length && (this._currentChild = t);
		}
		get currentBreadcrumbItem() {
			return this.elements.breadcrumbItems[this.currentChild];
		}
		_setIds() {
			this.dom.breadcrumb.id = this.dom.breadcrumb.id || `breadcrumb-${this.key}`, this.dom.breadcrumbToggle && (this.dom.breadcrumbToggle.id = this.dom.breadcrumbToggle.id || `breadcrumb-toggle-${this.key}`), this._id = this.dom.breadcrumb.id;
		}
		_setAriaAttributes() {
			this.dom.breadcrumbToggle && (this.dom.breadcrumbToggle.getAttribute("aria-expanded") !== "true" && this.dom.breadcrumbToggle.setAttribute("aria-expanded", "false"), this.dom.breadcrumbToggle.setAttribute("aria-controls", this.dom.breadcrumb.id), F("button", { toggle: this.dom.breadcrumbToggle }, { shouldThrow: !1 }).status || this.dom.breadcrumbToggle.setAttribute("role", "button"));
		}
		_setCustomProps() {
			this.dom.breadcrumb.style.setProperty(`--${this.prefix}breadcrumb-transition-duration`, `${this.transitionDuration}ms`), this.dom.breadcrumb.style.setProperty(`--${this.prefix}breadcrumb-open-transition-duration`, `${this.openDuration}ms`), this.dom.breadcrumb.style.setProperty(`--${this.prefix}breadcrumb-close-transition-duration`, `${this.closeDuration}ms`);
		}
		_setDOMElements() {
			this._resetDOMElementType("breadcrumbItems"), this._setDOMElementType("breadcrumbItems", { context: this.dom.breadcrumb }), this._resetDOMElementType("breadcrumbLinks"), this._setDOMElementType("breadcrumbLinks", { context: this.dom.breadcrumb }), this._resetDOMElementType("breadcrumbToggle"), this._setDOMElementType("breadcrumbToggle", { context: this.dom.breadcrumb });
		}
		_createChildElements() {
			this.dom.breadcrumbItems.forEach((t) => {
				const e = t.querySelector(this.selectors.breadcrumbLinks), s = t.querySelector(this.selectors.breadcrumbToggle) !== null, i = new mt({
					breadcrumbItemElement: t,
					breadcrumbLinkElement: e,
					parentBreadcrumb: this,
					isToggle: s
				});
				this.elements.breadcrumbItems.push(i), s && (this._elements.breadcrumbToggle = i);
			});
		}
		_reveal({ emit: t = this.isInitialized, transition: e = this.isInitialized } = {}) {
			this.dom.breadcrumbToggle && this.dom.breadcrumbToggle.setAttribute("aria-expanded", "true"), e && this.transitionClass !== "" ? (a(this.transitionClass, this.dom.breadcrumb), requestAnimationFrame(() => {
				l(this.closeClass, this.dom.breadcrumb), requestAnimationFrame(() => {
					a(this.openClass, this.dom.breadcrumb), requestAnimationFrame(() => {
						setTimeout(() => {
							l(this.transitionClass, this.dom.breadcrumb);
						}, this.openDuration);
					});
				});
			})) : (a(this.openClass, this.dom.breadcrumb), l(this.closeClass, this.dom.breadcrumb)), t && (this.dom.breadcrumbToggle ? this._dispatchEvent("expand", this.dom.breadcrumbToggle) : this._dispatchEvent("expand", this.dom.breadcrumb));
		}
		_conceal({ emit: t = this.isInitialized, transition: e = this.isInitialized } = {}) {
			this.dom.breadcrumbToggle && this.dom.breadcrumbToggle.setAttribute("aria-expanded", "false"), e && this.transitionClass !== "" ? (a(this.transitionClass, this.dom.breadcrumb), requestAnimationFrame(() => {
				l(this.openClass, this.dom.breadcrumb), requestAnimationFrame(() => {
					a(this.closeClass, this.dom.breadcrumb), requestAnimationFrame(() => {
						setTimeout(() => {
							l(this.transitionClass, this.dom.breadcrumb);
						}, this.closeDuration);
					});
				});
			})) : (a(this.closeClass, this.dom.breadcrumb), l(this.openClass, this.dom.breadcrumb)), t && (this.dom.breadcrumbToggle ? this._dispatchEvent("collapse", this.dom.breadcrumbToggle) : this._dispatchEvent("collapse", this.dom.breadcrumb));
		}
		_lock({ emit: t = this.isInitialized } = {}) {
			a(this.lockedClass, this.dom.breadcrumb), l(this.unlockedClass, this.dom.breadcrumb), this.dom.breadcrumbToggle && this.dom.breadcrumbToggle.setAttribute("disabled", "true"), t && (this.dom.breadcrumbToggle ? this._dispatchEvent("lock", this.dom.breadcrumbToggle) : this._dispatchEvent("lock", this.dom.breadcrumb));
		}
		_unlock({ emit: t = this.isInitialized } = {}) {
			a(this.unlockedClass, this.dom.breadcrumb), l(this.lockedClass, this.dom.breadcrumb), this.dom.breadcrumbToggle && this.dom.breadcrumbToggle.removeAttribute("disabled"), t && (this.dom.breadcrumbToggle ? this._dispatchEvent("unlock", this.dom.breadcrumbToggle) : this._dispatchEvent("unlock", this.dom.breadcrumb));
		}
		_handleFocus() {
			this.elements.breadcrumbItems.forEach((t, e) => {
				t.dom.link && this._addEventListener("focus", t.dom.link, () => {
					this.focusState = "self", this.currentChild = e;
				});
			}), this._addEventListener("focusout", this.dom.breadcrumb, (t) => {
				!this.closeOnBlur || this.currentEvent !== "keyboard" || t.relatedTarget === null || this.dom.breadcrumb.contains(t.relatedTarget) || this.dom.breadcrumbToggle === t.relatedTarget || this.close();
			});
		}
		_handleClick() {
			this._addEventListener("click", document, (t) => {
				this.focusState !== "self" || !this.closeOnBlur || (this.currentEvent = "mouse", !this.dom.breadcrumb.contains(t.target) && this.dom.breadcrumbToggle !== t.target && this.close());
			}), this.dom.breadcrumbToggle && this._addEventListener("click", this.dom.breadcrumbToggle, (t) => {
				this.currentEvent = "mouse", t.button === 0 && (h(t), this.toggle());
			});
		}
		_handleKeydown() {
			this._addEventListener("keydown", this.dom.breadcrumb, (t) => {
				this.currentEvent = "keyboard", d(t) === "Escape" && h(t);
			}), this.dom.breadcrumbToggle && this._addEventListener("keydown", this.dom.breadcrumbToggle, (t) => {
				switch (this.currentEvent = "keyboard", d(t)) {
					case "Space":
					case "Enter": h(t);
				}
			});
		}
		_handleKeyup() {
			this._addEventListener("keyup", this.dom.breadcrumb, (t) => {
				this.currentEvent = "keyboard", d(t) === "Escape" && (h(t), this.close(), this.currentChild > this.elements.breadcrumbItems.indexOf(this.elements.breadcrumbToggle) && requestAnimationFrame(() => {
					this.focusToggle();
				}));
			}), this.dom.breadcrumbToggle && this._addEventListener("keyup", this.dom.breadcrumbToggle, (t) => {
				switch (this.currentEvent = "keyboard", d(t)) {
					case "Space":
					case "Enter":
						h(t), this.toggle(), this.isOpen ? requestAnimationFrame(() => {
							this.focusNextChild();
						}) : this.focusFirstChild();
						break;
					case "Tab": this.openOnFocus && (h(t), this.open(), requestAnimationFrame(() => {
						this.focusNextChild();
					}));
				}
			});
		}
		open({ force: t = !1, emit: e = this.isInitialized, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
			this.isOpen && !t || this.isLocked && !t || (this.focusState = "self", this._reveal({
				emit: e,
				transition: s
			}), this._open.value = !0, i || this._open.commit());
		}
		preview({ force: t = !1, emit: e = this.isInitialized, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
			this.isOpen && !t || this.isLocked && !t || (this.focusState = "none", this._reveal({
				emit: e,
				transition: s
			}), this._open.value = !0, i || this._open.commit());
		}
		close({ force: t = !1, emit: e = this.isInitialized, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
			!this.isOpen && !t || this.isLocked && !t || (this.focusState = "none", this._conceal({
				emit: e,
				transition: s
			}), this._open.value = !1, i || this._open.commit());
		}
		toggle({ force: t = !1, emit: e = this.isInitialized, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
			this.isOpen ? this.close({
				force: t,
				emit: e,
				transition: s,
				preserveState: i
			}) : this.open({
				force: t,
				emit: e,
				transition: s,
				preserveState: i
			});
		}
		lock({ force: t = !1, emit: e = this.isInitialized, preserveState: s = !1 } = {}) {
			this.isLocked && !t || (this._locked.value = !0, this._lock({ emit: e }), s || this._locked.commit());
		}
		unlock({ force: t = !1, emit: e = this.isInitialized, preserveState: s = !1 } = {}) {
			!this.isLocked && !t || (this._locked.value = !1, this._unlock({ emit: e }), s || this._locked.commit());
		}
		toggleLock({ force: t = !1, emit: e = this.isInitialized, preserveState: s = !1 } = {}) {
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
		focusCurrentChild() {
			this.focusState = "self", this.currentChild !== -1 && this.currentBreadcrumbItem.focus();
		}
		focusChild(t) {
			this.blurCurrentChild(), this.currentChild = t, this.focusCurrentChild();
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
	};
	const _t = ({ options: t = {}, context: e = document, selector: s = ".breadcrumb" } = {}) => {
		k("graupl-breadcrumb-generator", s, e).forEach((i) => {
			const o = i.dataset.grauplBreadcrumbOptions ? JSON.parse(i.dataset.grauplBreadcrumbOptions.replace(/'/g, "\"")) || {} : {};
			new pt({
				breadcrumbElement: i,
				initialize: !0,
				...t,
				...o
			});
		});
	};
	var G = class extends w {
		_rootDOMElement = "carouselItem";
		_shouldStore = !1;
		_storageKey = "carouselItems";
		_name = "CarouselItem";
		_busy = !1;
		constructor({ carouselItemElement: t, tabElement: e = null, clone: s = null, parent: i, prefix: o = "graupl-", key: r = null, initializeClass: c = "initializing", initialize: m = !1 }) {
			super({
				prefix: o,
				key: r,
				initializeClass: c
			}), this._dom.carouselItem = t, this._dom.tab = e, this._elements.clone = s ?? null, this._elements.parent = i, m && this.initialize();
		}
		activate({ scroll: t = !0, scrollOptions: e = {} } = {}) {
			requestAnimationFrame(() => {
				a(this.elements.parent.activeClass, this.dom.carouselItem), this.dom.carouselItem.removeAttribute("inert"), t && this.elements.parent.dom.carouselItemContainer.scrollTo({
					left: this.dom.carouselItem.offsetLeft,
					top: this.dom.carouselItem.offsetTop,
					behavior: "smooth",
					...e
				}), this.dom.tab && requestAnimationFrame(() => {
					a(this.elements.parent.activeClass, this.dom.tab), this.dom.tab.setAttribute("aria-selected", !0);
				});
			});
		}
		deactivate() {
			requestAnimationFrame(() => {
				l(this.elements.parent.activeClass, this.dom.carouselItem), this.dom.carouselItem.setAttribute("inert", !0), requestAnimationFrame(() => {
					this.dom.tab && (l(this.elements.parent.activeClass, this.dom.tab), this.dom.tab.setAttribute("aria-selected", !1));
				});
			});
		}
	}, ft = class extends w {
		_rootDOMElement = "carousel";
		_currentItem = 0;
		_autoplay = !0;
		_playText = "Play";
		_pauseText = "Pause";
		_storageKey = "carousels";
		_name = "Carousel";
		_itemsPerPage = 1;
		_loop = !0;
		constructor({ carouselElement: t, carouselItemsSelector: e = ".carousel-item", carouselItemContainerSelector: s = ".carousel-item-container", carouselControlsSelector: i = ".carousel-control", carouselControlContainerSelector: o = ".carousel-control-container", carouselTabsSelector: r = ".carousel-tab", carouselTabContainerSelector: c = ".carousel-tab-container", autoplaySelector: m = ".autoplay", nextSelector: f = ".next", previousSelector: C = ".previous", activeClass: y = "active", playClass: E = "play", pauseClass: I = "pause", autoplay: g = !0, transitionDelay: p = 1e4, playText: _ = "Play", pauseText: b = "Pause", itemsPerPage: D = 1, loop: O = !0, prefix: v = "graupl-", key: x = null, initializeClass: A = "initializing", initialize: B = !1 }) {
			super({
				prefix: v,
				key: x,
				initializeClass: A
			}), this._dom.carousel = t, this._dom.carouselItems = [], this._dom.carouselItemContainer = null, this._dom.carouselControls = [], this._dom.carouselControlContainer = null, this._dom.carouselTabs = [], this._dom.carouselTabContainer = null, this._dom.autoplay = null, this._dom.next = null, this._dom.previous = null, this._selectors.carouselItems = e, this._selectors.carouselItemContainer = s, this._selectors.carouselControls = i, this._selectors.carouselControlContainer = o, this._selectors.carouselTabs = r, this._selectors.carouselTabContainer = c, this._selectors.autoplay = m, this._selectors.next = f, this._selectors.previous = C, this._elements.carouselItems = [], this._classes.active = y || "", this._classes.play = E || "", this._classes.pause = I || "", this._autoplay = g, this._itemsPerPage = D, this._loop = O, this._delays.transition = p, this._playText = _ || "", this._pauseText = b || "", this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
				this._handleAutoplay(), this.loop && this._handleLoop(), this._handleIntersection(), this.activateFirstItem({ scrollOptions: { behavior: "instant" } });
			}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
				const L = n("boolean", {
					autoplay: this._autoplay,
					loop: this._loop
				}, { shouldThrow: !1 });
				L.status || (this._errors = [...this._errors, ...L.errors], this._valid = !1);
				const S = n("string", {
					playText: this._playText,
					pauseText: this._pauseText
				}, { shouldThrow: !1 });
				S.status || (this._errors = [...this._errors, ...S.errors], this._valid = !1);
				const z = n("number", { itemsPerPage: this._itemsPerPage }, { shouldThrow: !1 });
				z.status || (this._errors = [...this._errors, ...z.errors], this._valid = !1);
			}), B && this.initialize();
		}
		get activeClass() {
			return this._classes.active;
		}
		set activeClass(t) {
			u({ activeClass: t }), this._classes.active !== t && (this._classes.active = t);
		}
		get playClass() {
			return this._classes.play;
		}
		set playClass(t) {
			u({ playClass: t }), this._classes.play !== t && (this._classes.play = t);
		}
		get pauseClass() {
			return this._classes.pause;
		}
		set pauseClass(t) {
			u({ pauseClass: t }), this._classes.pause !== t && (this._classes.pause = t);
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
		get autoplay() {
			return this._autoplay;
		}
		set autoplay(t) {
			n("boolean", { autoplay: t }), this._autoplay !== t && (this._autoplay = t);
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
			n("number", { transitionDelay: t }), t !== this.transitionDelay && t >= 0 && (this._delays.transition = t);
		}
		get playText() {
			return this._playText;
		}
		set playText(t) {
			n("string", { playText: t }), this._playText !== t && (this._playText = t);
		}
		get pauseText() {
			return this._pauseText;
		}
		set pauseText(t) {
			n("string", { pauseText: t }), this._pauseText !== t && (this._pauseText = t);
		}
		_setDOMElements() {
			this._setDOMElementType("carouselItemContainer", { context: this.dom.carousel }), this._setDOMElementType("carouselControlContainer", { context: this.dom.carousel }), this._setDOMElementType("carouselTabContainer", { context: this.dom.carousel }), this.dom.carouselItemContainer && this._setDOMElementType("carouselItems", { context: this.dom.carouselItemContainer }), this.dom.carouselControlContainer && (this._setDOMElementType("carouselControls", { context: this.dom.carouselControlContainer }), this._setDOMElementType("autoplay", { context: this.dom.carouselControlContainer }), this._setDOMElementType("next", { context: this.dom.carouselControlContainer }), this._setDOMElementType("previous", { context: this.dom.carouselControlContainer })), this._dom.carouselTabContainer && this._setDOMElementType("carouselTabs", { context: this.dom.carouselTabContainer });
		}
		_createChildElements() {
			this.dom.carouselItems.forEach((t, e) => {
				const s = new G({
					carouselItemElement: t,
					tabElement: this.dom.carouselTabs ? this.dom.carouselTabs[e] : null,
					parent: this,
					prefix: this.prefix,
					initializeClass: this.classes.initialize,
					initialize: !0
				});
				this._elements.carouselItems.push(s);
			});
		}
		_setIds() {
			this.dom.carousel.id = this.dom.carousel.id || `carousel-${this.key}`, this.dom.carouselItems.forEach((t, e) => {
				t.id = t.id || `carousel-item-${this.key}-${e}`;
			}), this.dom.carouselTabs.forEach((t, e) => {
				t.id = t.id || `carousel-tab-${this.key}-${e}`;
			}), this._id = this.dom.carousel.id;
		}
		_setAriaAttributes() {
			!F("section", { carousel: this.dom.carousel }, { shouldThrow: !1 }).status && !this.dom.carousel.getAttribute("role") !== "region" && this.dom.carousel.setAttribute("role", "group"), this.dom.carouselItems.forEach((t) => {
				t.setAttribute("inert", "true");
			}), this.dom.carouselItemContainer && this.dom.carouselItemContainer.setAttribute("tabindex", "-1"), this._dom.carousel.setAttribute("aria-roledescription", "carousel"), this.dom.carouselTabContainer && this.dom.carouselTabContainer.setAttribute("role", "tablist"), this.dom.carouselTabs.forEach((t, e) => {
				t.setAttribute("role", "tab"), t.setAttribute("aria-selected", e === 0), t.setAttribute("aria-controls", this.dom.carouselItems[e].id);
			});
		}
		_handleAutoplay() {
			this.autoplay ? (a(this.pauseClass, this.dom.autoplay), l(this.playClass, this.dom.autoplay), this.dom.autoplay.setAttribute("aria-label", this.pauseText), this.dom.carousel.setAttribute("aria-live", "off"), this._setInterval(() => this.activateNextItem(), this.transitionDelay)) : (a(this.playClass, this.dom.autoplay), l(this.pauseClass, this.dom.autoplay), this.dom.autoplay.setAttribute("aria-label", this.playText), this.dom.carousel.setAttribute("aria-live", "polite"), this._clearInterval());
		}
		_handleIntersection() {
			const t = {
				root: this.dom.carouselItemContainer,
				rootMargin: "1px",
				scrollMargin: "1px",
				threshold: 1
			}, e = new IntersectionObserver((s) => {
				this.isInitialized && s.forEach((i) => {
					if (!i.isIntersecting) return;
					const o = this.dom.carouselItems.indexOf(i.target);
					let r = o;
					this.elements.carouselItems[o].elements.clone !== null && (r = this.dom.carouselItems.indexOf(this.elements.carouselItems[o].elements.clone.dom.carouselItem), (o === 0 || o === this.dom.carouselItems.length - 1) && this.dom.carouselItemContainer.scrollTo({
						left: this.elements.carouselItems[o].elements.clone.dom.carouselItem.offsetLeft,
						top: this.elements.carouselItems[o].elements.clone.dom.carouselItem.offsetTop,
						behavior: "instant"
					})), this.currentItem !== r && this.activateItem(r, { scroll: !1 });
				});
			}, t);
			this.dom.carouselItems.forEach((s) => {
				e.observe(s);
			});
		}
		_handleFocus() {
			this._addEventListener("focusin", this.dom.carousel, () => {
				this.autoplay && this._clearInterval();
			}), this._addEventListener("focusout", this.dom.carousel, () => {
				this.autoplay && this._setInterval(() => this.activateNextItem(), this.transitionDelay);
			});
		}
		_handleClick() {
			this._addEventListener("click", this.dom.next, (t) => {
				t.button === 0 && (h(t), this.currentEvent = "mouse", this.activateNextItem());
			}), this._addEventListener("click", this.dom.previous, (t) => {
				t.button === 0 && (h(t), this.currentEvent = "mouse", this.activatePreviousItem());
			}), this._addEventListener("click", this.dom.autoplay, (t) => {
				t.button === 0 && (h(t), this.currentEvent = "mouse", this.toggleAutoplay());
			}), this.elements.carouselItems.forEach((t) => {
				t.dom.tab && this._addEventListener("click", t.dom.tab, (e) => {
					e.button === 0 && (h(e), this.currentEvent = "mouse", this.activateItem(this.dom.carouselItems.indexOf(t.dom.carouselItem)));
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
						case "Enter": h(e);
					}
				});
			}), this.elements.carouselItems.forEach((t) => {
				t.dom.tab && this._addEventListener("keydown", t.dom.tab, (e) => {
					switch (d(e)) {
						case "Space":
						case "Enter": h(e);
					}
				});
			});
		}
		_handleKeyup() {
			this._addEventListener("keyup", this.dom.next, (t) => {
				switch (d(t)) {
					case "Space":
					case "Enter": this.activateNextItem(), h(t);
				}
			}), this._addEventListener("keyup", this.dom.previous, (t) => {
				switch (d(t)) {
					case "Space":
					case "Enter": this.activatePreviousItem(), h(t);
				}
			}), this._addEventListener("keyup", this.dom.autoplay, (t) => {
				switch (d(t)) {
					case "Space":
					case "Enter": this.toggleAutoplay(), h(t);
				}
			}), this.elements.carouselItems.forEach((t) => {
				t.dom.tab && this._addEventListener("keyup", t.dom.tab, (e) => {
					switch (d(e)) {
						case "Space":
						case "Enter": this.activateItem(this.dom.carouselItems.indexOf(t.dom.carouselItem)), h(e);
					}
				});
			});
		}
		_handleLoop() {
			const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), s = this.dom.carouselItemContainer;
			for (let i = 0; i < this.itemsPerPage; i++) t.set(this.dom.carouselItems[i], this.dom.carouselItems.indexOf(this.dom.carouselItems[i]));
			for (let i = this.dom.carouselItems.length - this.itemsPerPage; i < this.dom.carouselItems.length; i++) e.set(this.dom.carouselItems[i], this.dom.carouselItems.indexOf(this.dom.carouselItems[i]));
			t.forEach((i, o) => {
				const r = o.cloneNode(!0);
				r.setAttribute("aria-hidden", "true"), r.setAttribute("inert", "true"), r.setAttribute("id", `${o.id}-clone`), s.appendChild(r);
				const c = new G({
					carouselItemElement: r,
					clone: this._elements.carouselItems[i],
					parent: this,
					prefix: this.prefix,
					initializeClass: this.classes.initialize,
					initialize: !0
				});
				this.dom.carouselItems.push(r), this._elements.carouselItems.push(c);
			}), e.forEach((i, o) => {
				const r = o.cloneNode(!0);
				r.setAttribute("aria-hidden", "true"), r.setAttribute("inert", "true"), r.setAttribute("id", `${o.id}-clone`), s.insertBefore(r, s.firstChild);
				const c = new G({
					carouselItemElement: r,
					clone: this._elements.carouselItems[i],
					parent: this,
					prefix: this.prefix,
					initializeClass: this.classes.initialize,
					initialize: !0
				});
				this.dom.carouselItems.unshift(r), this._elements.carouselItems.unshift(c);
			});
		}
		activateCurrentItem({ scroll: t = !0, scrollOptions: e = {} } = {}) {
			this.currentCarouselItem.activate({
				scroll: t,
				scrollOptions: e
			});
		}
		deactivateCurrentItem({ scroll: t = !0, scrollOptions: e = {} } = {}) {
			this.currentCarouselItem.deactivate({
				scroll: t,
				scrollOptions: e
			});
		}
		activateItem(t, { scroll: e = !0, scrollOptions: s = {} } = {}) {
			this.autoplay && this._clearInterval(), this.deactivateCurrentItem({
				scroll: e,
				scrollOptions: s
			}), this.currentItem = t, this.activateCurrentItem({
				scroll: e,
				scrollOptions: s
			}), this.autoplay && this._setInterval(() => this.activateNextItem(), this.transitionDelay);
		}
		activateFirstItem({ scroll: t = !0, scrollOptions: e = {} } = {}) {
			this.loop ? this.currentItem === this.dom.carouselItems.length - this.itemsPerPage - 1 ? this.activateNextItem({
				scroll: t,
				scrollOptions: e
			}) : this.activateItem(this.itemsPerPage, {
				scroll: t,
				scrollOptions: e
			}) : this.activateItem(0, {
				scroll: t,
				scrollOptions: e
			});
		}
		activateLastItem({ scroll: t = !0, scrollOptions: e = {} } = {}) {
			this.loop ? this.currentItem === this.itemsPerPage ? this.activatePreviousItem({
				scroll: t,
				scrollOptions: e
			}) : this.activateItem(this.dom.carouselItems.length - this.itemsPerPage - 1, {
				scroll: t,
				scrollOptions: e
			}) : this.activateItem(this.dom.carouselItems.length - 1, {
				scroll: t,
				scrollOptions: e
			});
		}
		activateNextItem({ scroll: t = !0, scrollOptions: e = {} } = {}) {
			this.loop ? this.activateItem(this.currentItem + 1, {
				scroll: t,
				scrollOptions: e
			}) : this.currentItem + 1 >= this.dom.carouselItems.length ? this.activateFirstItem({
				scroll: t,
				scrollOptions: e
			}) : this.activateItem(this.currentItem + 1, {
				scroll: t,
				scrollOptions: e
			});
		}
		activatePreviousItem({ scroll: t = !0, scrollOptions: e = {} } = {}) {
			this.loop ? this.activateItem(this.currentItem - 1, {
				scroll: t,
				scrollOptions: e
			}) : this.currentItem - 1 < 0 || this.loop && this.currentItem - 1 < this.itemsPerPage ? this.activateLastItem({
				scroll: t,
				scrollOptions: e
			}) : this.activateItem(this.currentItem - 1, {
				scroll: t,
				scrollOptions: e
			});
		}
		toggleAutoplay() {
			this.autoplay = !this.autoplay, this._handleAutoplay();
		}
	};
	const gt = ({ options: t = {}, context: e = document, selector: s = ".carousel" } = {}) => {
		k("graupl-carousel-generator", s, e).forEach((i) => {
			const o = i.dataset.grauplCarouselOptions ? JSON.parse(i.dataset.grauplCarouselOptions.replace(/'/g, "\"")) || {} : {};
			new ft({
				carouselElement: i,
				initialize: !0,
				...t,
				...o
			});
		});
	};
	var bt = class extends w {
		_rootDOMElement = "disclosure";
		_protectedDOMElements = ["controller"];
		_open = new $(!1);
		_locked = new $(!1);
		_openInsideBreakpoint = !1;
		_openOutsideBreakpoint = !1;
		_closeInsideBreakpoint = !1;
		_closeOutsideBreakpoint = !1;
		_lockInsideBreakpoint = !1;
		_lockOutsideBreakpoint = !1;
		_unlockInsideBreakpoint = !1;
		_unlockOutsideBreakpoint = !1;
		_openOnFocus = !1;
		_closeOnBlur = !1;
		_storageKey = "disclosures";
		_name = "Disclosure";
		_mediaQueryListEventCallback = (t) => {
			t.matches ? (this.unlockInsideBreakpoint && this.unlock(), this.isOpen && this.closeInsideBreakpoint ? (this.isLocked && this.unlock(), this.close({ preserveState: !0 })) : !this.isOpen && this.openInsideBreakpoint && (this.isLocked && this.unlock(), this.open()), this.lockInsideBreakpoint && this.lock()) : (this.unlockOutsideBreakpoint && this.unlock(), this.isOpen && this.closeOutsideBreakpoint ? (this.isLocked && this.unlock(), this.close({ preserveState: !0 })) : !this.isOpen && this.openOutsideBreakpoint && (this.isLocked && this.unlock(), this.open()), this.lockOutsideBreakpoint && this.lock());
		};
		constructor({ disclosureElement: t, controllerElement: e, disclosureContentSelector: s = ".disclosure-content", lockedClass: i = "locked", unlockedClass: o = "unlocked", openClass: r = "show", closeClass: c = "hide", transitionClass: m = "transitioning", transitionDuration: f = 250, openDuration: C = -1, closeDuration: y = -1, openOnFocus: E = !1, closeOnBlur: I = !1, minWidth: g = "", breakpoint: p = "", autoOpen: _ = !1, openInsideBreakpoint: b = !1, openOutsideBreakpoint: D = !1, closeInsideBreakpoint: O = !1, closeOutsideBreakpoint: v = !1, lockInsideBreakpoint: x = !1, lockOutsideBreakpoint: A = !1, unlockInsideBreakpoint: B = !1, unlockOutsideBreakpoint: T = !1, locked: L = !1, mediaQuery: P = "", prefix: S = "graupl-", key: q = null, initializeClass: z = "initializing", initialize: J = !1 } = {}) {
			super({
				prefix: S,
				key: q,
				initializeClass: z
			}), this._dom.disclosure = t, this._dom.controller = e, this._selectors.content = s, this._classes.locked = i || "", this._classes.unlocked = o || "", this._classes.open = r || "", this._classes.close = c || "", this._classes.transition = m || "", this._durations.transition = f, this._durations.open = C, this._durations.close = y, this._openOnFocus = E, this._closeOnBlur = I, g !== "" && (console.warn("`minWidth` is deprecated and will be removed in a future release. Please set `breakpoint` instead."), p === "" && (p = g)), _ && p !== "" && (console.warn("`autoOpen` is deprecated and will be removed in a future release. Please set `openOutsideBreakpoint` and `closeInsideBreakpoint` to `true` instead."), D = _, O = _), this._breakpoint = p || "", this._openInsideBreakpoint = b, this._openOutsideBreakpoint = D, this._closeInsideBreakpoint = O, this._closeOutsideBreakpoint = v, this._lockInsideBreakpoint = x, this._lockOutsideBreakpoint = A, this._unlockInsideBreakpoint = B, this._unlockOutsideBreakpoint = T, this._mediaQueryString = P || "", this._locked.value = L, this._locked.commit(), this._registerEvent("expand", { detail: { disclosure: this } }), this._registerEvent("collapse", { detail: { disclosure: this } }), this._registerEvent("lock", { detail: { disclosure: this } }), this._registerEvent("unlock", { detail: { disclosure: this } }), this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
				requestAnimationFrame(() => {
					this.dom.controller.getAttribute("aria-expanded") === "true" || this.openOutsideBreakpoint && !window.matchMedia(this.mediaQuery).matches || this.openInsideBreakpoint && window.matchMedia(this.mediaQuery).matches ? this.open({ force: !0 }) : this.close({ force: !0 }), this.isLocked || this.lockInsideBreakpoint && window.matchMedia(this.mediaQuery).matches || this.lockOutsideBreakpoint && !window.matchMedia(this.mediaQuery).matches ? this.lock({ force: !0 }) : this.unlock({ force: !0 });
				});
			}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
				const Q = n("boolean", {
					openOnFocus: this._openOnFocus,
					closeOnBlur: this._closeOnBlur,
					openInsideBreakpoint: this._openInsideBreakpoint,
					openOutsideBreakpoint: this._openOutsideBreakpoint,
					closeInsideBreakpoint: this._closeInsideBreakpoint,
					closeOutsideBreakpoint: this._closeOutsideBreakpoint,
					lockInsideBreakpoint: this._lockInsideBreakpoint,
					lockOutsideBreakpoint: this._lockOutsideBreakpoint,
					unlockInsideBreakpoint: this._unlockInsideBreakpoint,
					unlockOutsideBreakpoint: this._unlockOutsideBreakpoint,
					locked: this._locked.value
				}, { shouldThrow: !1 });
				Q.status || (this._errors = [...this._errors, ...Q.errors], this._valid = !1);
			}), J && this.initialize();
		}
		get lockedClass() {
			return this._classes.locked;
		}
		set lockedClass(t) {
			u({ lockedClass: t }), this._classes.locked !== t && (this._classes.locked = t);
		}
		get unlockedClass() {
			return this._classes.unlocked;
		}
		set unlockedClass(t) {
			u({ unlockedClass: t }), this._classes.unlocked !== t && (this._classes.unlocked = t);
		}
		get openClass() {
			return this._classes.open;
		}
		set openClass(t) {
			u({ openClass: t }), this._classes.open !== t && (this._classes.open = t);
		}
		get closeClass() {
			return this._classes.close;
		}
		set closeClass(t) {
			u({ closeClass: t }), this._classes.close !== t && (this._classes.close = t);
		}
		get transitionClass() {
			return this._classes.transition;
		}
		set transitionClass(t) {
			u({ transitionClass: t }), this._classes.transition !== t && (this._classes.transition = t);
		}
		get transitionDuration() {
			return this._durations.transition;
		}
		set transitionDuration(t) {
			n("number", { transitionDuration: t }), this._durations.transition !== t && (this._durations.transition = t, this._setCustomProps());
		}
		get openDuration() {
			return this._durations.open === -1 ? this.transitionDuration : this._durations.open;
		}
		set openDuration(t) {
			n("number", { openDuration: t }), this._durations.open !== t && (this._durations.open = t, this._setCustomProps());
		}
		get closeDuration() {
			return this._durations.close === -1 ? this.transitionDuration : this._durations.close;
		}
		set closeDuration(t) {
			n("number", { closeDuration: t }), this._durations.close !== t && (this._durations.close = t, this._setCustomProps());
		}
		get openOnFocus() {
			return this._openOnFocus;
		}
		set openOnFocus(t) {
			n("boolean", { openOnFocus: t }), this._openOnFocus !== t && (this._openOnFocus = t);
		}
		get closeOnBlur() {
			return this._closeOnBlur;
		}
		set closeOnBlur(t) {
			n("boolean", { closeOnBlur: t }), this._closeOnBlur !== t && (this._closeOnBlur = t);
		}
		get isOpen() {
			return this._open.value;
		}
		get hasOpened() {
			return this._open.committed;
		}
		get openInsideBreakpoint() {
			return this._openInsideBreakpoint;
		}
		set openInsideBreakpoint(t) {
			n("boolean", { openInsideBreakpoint: t }), this._openInsideBreakpoint !== t && (this._openInsideBreakpoint = t);
		}
		get openOutsideBreakpoint() {
			return this._openOutsideBreakpoint;
		}
		set openOutsideBreakpoint(t) {
			n("boolean", { openOutsideBreakpoint: t }), this._openOutsideBreakpoint !== t && (this._openOutsideBreakpoint = t);
		}
		get closeInsideBreakpoint() {
			return this._closeInsideBreakpoint;
		}
		set closeInsideBreakpoint(t) {
			n("boolean", { closeInsideBreakpoint: t }), this._closeInsideBreakpoint !== t && (this._closeInsideBreakpoint = t);
		}
		get closeOutsideBreakpoint() {
			return this._closeOutsideBreakpoint;
		}
		set closeOutsideBreakpoint(t) {
			n("boolean", { closeOutsideBreakpoint: t }), this._closeOutsideBreakpoint !== t && (this._closeOutsideBreakpoint = t);
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
		get isLocked() {
			return this._locked.value;
		}
		get shouldBeLocked() {
			return this._locked.committed;
		}
		_setIds() {
			this.dom.disclosure.id = this.dom.disclosure.id || `disclosure-${this.key}`, this.dom.controller.id = this.dom.controller.id || `disclosure-controller-${this.key}`, this._id = this.dom.disclosure.id;
		}
		_setAriaAttributes() {
			this.dom.controller.getAttribute("aria-expanded") !== "true" && this.dom.controller.setAttribute("aria-expanded", "false"), this.dom.controller.setAttribute("aria-controls", this.dom.disclosure.id), F("button", { controller: this.dom.controller }, { shouldThrow: !1 }).status || this.dom.controller.setAttribute("role", "button");
		}
		_setCustomProps() {
			this.dom.disclosure.style.setProperty(`--${this.prefix}disclosure-transition-duration`, `${this.transitionDuration}ms`), this.dom.disclosure.style.setProperty(`--${this.prefix}disclosure-open-transition-duration`, `${this.openDuration}ms`), this.dom.disclosure.style.setProperty(`--${this.prefix}disclosure-close-transition-duration`, `${this.closeDuration}ms`);
		}
		_setDOMElements() {
			this._resetDOMElementType("content"), this._setDOMElementType("content", { context: this.dom.disclosure });
		}
		_reveal({ emit: t = this.isInitialized, transition: e = this.isInitialized } = {}) {
			this.dom.controller.setAttribute("aria-expanded", "true"), e && this.transitionClass !== "" ? (a(this.transitionClass, this.dom.disclosure), requestAnimationFrame(() => {
				l(this.closeClass, this.dom.disclosure), requestAnimationFrame(() => {
					a(this.openClass, this.dom.disclosure), requestAnimationFrame(() => {
						setTimeout(() => {
							l(this.transitionClass, this.dom.disclosure);
						}, this.openDuration);
					});
				});
			})) : (a(this.openClass, this.dom.disclosure), l(this.closeClass, this.dom.disclosure)), this.dom.content.removeAttribute("inert"), t && this._dispatchEvent("expand", this.dom.controller);
		}
		_conceal({ emit: t = this.isInitialized, transition: e = this.isInitialized } = {}) {
			this.dom.controller.setAttribute("aria-expanded", "false"), e && this.transitionClass !== "" ? (a(this.transitionClass, this.dom.disclosure), requestAnimationFrame(() => {
				l(this.openClass, this.dom.disclosure), requestAnimationFrame(() => {
					a(this.closeClass, this.dom.disclosure), requestAnimationFrame(() => {
						setTimeout(() => {
							l(this.transitionClass, this.dom.disclosure), this.dom.content.inert = !0;
						}, this.closeDuration);
					});
				});
			})) : (a(this.closeClass, this.dom.disclosure), l(this.openClass, this.dom.disclosure)), this.dom.content.setAttribute("inert", "true"), t && this._dispatchEvent("collapse", this.dom.controller);
		}
		_lock({ emit: t = this.isInitialized } = {}) {
			a(this.lockedClass, this.dom.disclosure), l(this.unlockedClass, this.dom.disclosure), this.dom.controller.setAttribute("disabled", "true"), t && this._dispatchEvent("lock", this.dom.disclosure);
		}
		_unlock({ emit: t = this.isInitialized } = {}) {
			a(this.unlockedClass, this.dom.disclosure), l(this.lockedClass, this.dom.disclosure), this.dom.controller.removeAttribute("disabled"), t && this._dispatchEvent("unlock", this.dom.disclosure);
		}
		_handleFocus() {
			this._addEventListener("focusout", this.dom.disclosure, (t) => {
				!this.closeOnBlur || this.currentEvent !== "keyboard" || t.relatedTarget === null || this.dom.disclosure.contains(t.relatedTarget) || this.dom.controller.contains(t.relatedTarget) || this.dom.controller === t.relatedTarget || this.dom.disclosure === t.relatedTarget || this.close();
			}), this._addEventListener("focusout", this.dom.controller, (t) => {
				!this.closeOnBlur || this.currentEvent !== "keyboard" || t.relatedTarget === null || this.dom.disclosure.contains(t.relatedTarget) || this.dom.controller.contains(t.relatedTarget) || this.dom.controller === t.relatedTarget || this.dom.disclosure === t.relatedTarget || this.close();
			});
		}
		_handleClick() {
			this._addEventListener("click", this.dom.controller, (t) => {
				this.currentEvent = "mouse", t.button === 0 && (h(t), this.toggle());
			}), this._addEventListener("click", document, (t) => {
				this.focusState !== "self" || !this.closeOnBlur || (this.currentEvent = "mouse", !this.dom.disclosure.contains(t.target) && this.dom.controller !== t.target && this.close());
			});
		}
		_handleKeydown() {
			this._addEventListener("keydown", this.dom.controller, (t) => {
				switch (this.currentEvent = "keyboard", d(t)) {
					case "Space":
					case "Enter": h(t);
				}
			}), this._addEventListener("keydown", this.dom.disclosure, (t) => {
				this.currentEvent = "keyboard", d(t) === "Escape" && h(t);
			});
		}
		_handleKeyup() {
			this._addEventListener("keyup", this.dom.controller, (t) => {
				switch (this.currentEvent = "keyboard", d(t)) {
					case "Space":
					case "Enter":
						this.toggle(), h(t);
						break;
					case "Tab": this.openOnFocus && (h(t), this.open());
				}
			}), this._addEventListener("keyup", this.dom.disclosure, (t) => {
				this.currentEvent = "keyboard", d(t) === "Escape" && (this.close(), h(t));
			});
		}
		open({ force: t = !1, emit: e = this.isInitialized, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
			this.isOpen && !t || this.isLocked && !t || (this.focusState = "self", this._reveal({
				emit: e,
				transition: s
			}), this._open.value = !0, i || this._open.commit());
		}
		preview({ force: t = !1, emit: e = this.isInitialized, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
			this.isOpen && !t || this.isLocked && !t || (this.focusState = "none", this._reveal({
				emit: e,
				transition: s
			}), this._open.value = !0, i || this._open.commit());
		}
		close({ force: t = !1, emit: e = this.isInitialized, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
			!this.isOpen && !t || this.isLocked && !t || (this.focusState = "none", this._conceal({
				emit: e,
				transition: s
			}), this._open.value = !1, i || this._open.commit());
		}
		toggle({ force: t = !1, emit: e = this.isInitialized, transition: s = this.isInitialized, preserveState: i = !1 } = {}) {
			this.isOpen ? this.close({
				force: t,
				emit: e,
				transition: s,
				preserveState: i
			}) : this.open({
				force: t,
				emit: e,
				transition: s,
				preserveState: i
			});
		}
		lock({ force: t = !1, emit: e = this.isInitialized, preserveState: s = !1 } = {}) {
			this.isLocked && !t || (this._locked.value = !0, this._lock({ emit: e }), s || this._locked.commit());
		}
		unlock({ force: t = !1, emit: e = this.isInitialized, preserveState: s = !1 } = {}) {
			!this.isLocked && !t || (this._locked.value = !1, this._unlock({ emit: e }), s || this._locked.commit());
		}
		toggleLock({ force: t = !1, emit: e = this.isInitialized, preserveState: s = !1 } = {}) {
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
	};
	const kt = ({ options: t = {}, context: e = document, selector: s = ".disclosure" } = {}) => {
		k("graupl-disclosure-generator", s, e).forEach((i) => {
			const o = i.dataset.grauplDisclosureOptions ? JSON.parse(i.dataset.grauplDisclosureOptions.replace(/'/g, "\"")) || {} : {}, r = `[data-graupl-disclosure-target="${i.id}"]`, [c] = k("graupl-disclosure-generator", r, e);
			if (!c) {
				console.warn(`No controller found for disclosure with ID "${i.id}". Please ensure there is an element with the selector "${r}".`), k.remove("graupl-disclosure-generator", i);
				return;
			}
			new bt({
				disclosureElement: i,
				controllerElement: c,
				initialize: !0,
				...t,
				...o
			});
		});
	}, Ct = ({ options: t = {}, context: e = document, selector: s = ".navigation" } = {}) => {
		k("graupl-navigation-generator", s, e).forEach((i) => {
			const o = i.dataset.grauplMenuType || "DisclosureMenu";
			if (window[o] === void 0) {
				console.warn(`Graupl navigation requires accessible-menu's ${o}. Please make sure to include it on this page.`);
				return;
			}
			const r = i.dataset.grauplMenuOptions ? JSON.parse(i.dataset.grauplMenuOptions.replace(/'/g, "\"")) || {} : {}, c = i.querySelector(".menu"), m = i.querySelector(".navigation-toggle") || null, f = m ? i : null;
			new window[o]({
				menuElement: c,
				menuItemSelector: ".menu-item",
				menuLinkSelector: ".menu-link",
				submenuItemSelector: ".submenu-item",
				submenuToggleSelector: ".submenu-toggle",
				controllerElement: m,
				containerElement: f,
				...t,
				...r
			});
		});
	};
	var yt = class extends w {
		_rootDOMElement = "toggle";
		_protectedDOMElements = ["content"];
		_storageKey = "tabToggles";
		_name = "TabToggle";
		_shouldStore = !1;
		_active = new $(!1);
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
			const { closeClass: s, openClass: i, transitionClass: o, openDuration: r } = this.elements.parent;
			this.dom.toggle.setAttribute("aria-selected", "true"), e && o !== "" ? (a(o, this.dom.content), requestAnimationFrame(() => {
				l(s, this.dom.content), requestAnimationFrame(() => {
					a(i, this.dom.content), requestAnimationFrame(() => {
						this._setTimeout(() => l(o, this.dom.content), r);
					});
				});
			})) : (a(i, this.dom.content), l(s, this.dom.content)), t && this._dispatchEvent("activate", this.dom.toggle);
		}
		_conceal({ emit: t = !0, transition: e = !0 } = {}) {
			const { closeClass: s, openClass: i, transitionClass: o, closeDuration: r } = this.elements.parent;
			this.dom.toggle.setAttribute("aria-selected", "false"), e && o !== "" ? (a(o, this.dom.content), requestAnimationFrame(() => {
				l(i, this.dom.content), requestAnimationFrame(() => {
					a(s, this.dom.content), requestAnimationFrame(() => {
						this._setTimeout(() => l(o, this.dom.content), r);
					});
				});
			})) : (a(s, this.dom.content), l(i, this.dom.content)), t && this._dispatchEvent("deactivate", this.dom.toggle);
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
	}, Et = class extends w {
		_rootDOMElement = "tabs";
		_automatic = !1;
		_currentChild = 0;
		_storageKey = "tabs";
		_name = "Tab";
		constructor({ tabsElement: t, tabListSelector: e = ".tab-list", tabTogglesSelector: s = ".tab-toggle", tabContentsSelector: i = ".tab-content", openClass: o = "show", closeClass: r = "hide", transitionClass: c = null, transitionDuration: m = 300, openDuration: f = -1, closeDuration: C = -1, automaticActivation: y = !1, prefix: E = "graupl-", key: I = null, initializeClass: g = "initializing", initialize: p = !1 }) {
			super({
				prefix: E,
				key: I,
				initializeClass: g
			}), this._dom.tabs = t, this._dom.tabList = null, this._dom.tabToggles = [], this._dom.tabContents = [], this._selectors.tabList = e, this._selectors.tabToggles = s, this._selectors.tabContents = i, this._elements.tabToggles = [], this._classes.open = o || "", this._classes.close = r || "", this._classes.transition = c || "", this._durations.transition = m, this._durations.open = f, this._durations.close = C, this._automatic = y, this._addEventListener("grauplComponentInitialize", this.dom.tabs, () => {
				this.elements.tabToggles.filter((_) => _.isActive).length === 0 && this.elements.tabToggles[0].show();
			}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
				const b = n("boolean", { automaticActivation: this._automatic }, { shouldThrow: !1 });
				b.status || (this._errors = [...this._errors, ...b.errors], this._valid = !1);
			}), p && this.initialize();
		}
		get openClass() {
			return this._classes.open;
		}
		set openClass(t) {
			u({ openClass: t }), this._classes.open !== t && (this._classes.open = t);
		}
		get closeClass() {
			return this._classes.close;
		}
		set closeClass(t) {
			u({ closeClass: t }), this._classes.close !== t && (this._classes.close = t);
		}
		get transitionClass() {
			return this._classes.transition;
		}
		set transitionClass(t) {
			u({ transitionClass: t }), this._classes.transition !== t && (this._classes.transition = t);
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
				const s = new yt({
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
					const s = d(e);
					[
						"Space",
						"Enter",
						"ArrowRight",
						"ArrowLeft",
						"Home",
						"End"
					].includes(s) && h(e);
				});
			});
		}
		_handleKeyup() {
			this.dom.tabToggles.forEach((t) => {
				this._addEventListener("keyup", t, (e) => {
					switch (d(e)) {
						case "Space":
						case "Enter":
							h(e), this.currentTabToggle.show();
							break;
						case "Home":
							h(e), this.focusFirstChild();
							break;
						case "End":
							h(e), this.focusLastChild();
							break;
						case "ArrowRight":
							h(e), this.focusNextChild();
							break;
						case "ArrowLeft": h(e), this.focusPreviousChild();
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
	const It = ({ options: t = {}, context: e = document, selector: s = ".tabs" } = {}) => {
		k("graupl-tabs-generator", s, e).forEach((i) => {
			const o = i.dataset.grauplTabsOptions ? JSON.parse(i.dataset.grauplTabsOptions.replace(/'/g, "\"")) || {} : {};
			new Et({
				tabsElement: i,
				initialize: !0,
				...t,
				...o
			});
		});
	};
	var wt = class extends w {
		_rootDOMElement = "tooltip";
		_softLocked = !1;
		_hoverType = "off";
		_open = !1;
		_storageKey = "tooltips";
		_openOnFocus = !1;
		_closeOnBlur = !0;
		_name = "Tooltip";
		constructor({ tooltipElement: t, tooltipToggleElement: e, tooltipDescriptionElement: s, showClass: i = "show", hideClass: o = "hide", transitionClass: r = "transitioning", transitionDelay: c = 250, transitionDuration: m = 150, showDuration: f = -1, hideDuration: C = -1, openOnFocus: y = !1, closeOnBlur: E = !0, hoverType: I = "off", hoverDelay: g = 250, enterDelay: p = -1, leaveDelay: _ = -1, prefix: b = "graupl-", key: D = null, initializeClass: O = "initializing", initialize: v = !1 } = {}) {
			super({
				prefix: b,
				key: D,
				initializeClass: O
			}), this._dom.tooltip = t, this._dom.tooltipToggle = e, this._dom.tooltipDescription = s, this._classes.show = i || "", this._classes.hide = o || "", this._classes.transition = r || "", this._durations.transition = m, this._durations.transitionDelay = c, this._durations.show = f, this._durations.hide = C, this._openOnFocus = y, this._closeOnBlur = E, this._hoverType = I, this._delays.hover = g, this._delays.enter = p, this._delays.leave = _, this._registerEvent("show", { detail: { tooltip: this } }), this._registerEvent("hide", { detail: { tooltip: this } }), this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
				this.hide({ force: !0 });
			}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
				const A = n("boolean", { isOpen: this._open }, { shouldThrow: !1 });
				A.status || (this._errors = [...this._errors, ...A.errors], this._valid = !1);
				const B = W({ hoverType: this._hoverType }, { shouldThrow: !1 });
				B.status || (this._errors = [...this._errors, ...B.errors], this._valid = !1);
			}), v && this.initialize();
		}
		get showClass() {
			return this._classes.show;
		}
		set showClass(t) {
			u({ showClass: t }), this._classes.show !== t && (this._classes.show = t);
		}
		get hideClass() {
			return this._classes.hide;
		}
		set hideClass(t) {
			u({ hideClass: t }), this._classes.hide !== t && (this._classes.hide = t);
		}
		get transitionClass() {
			return this._classes.transition;
		}
		set transitionClass(t) {
			u({ transitionClass: t }), this._classes.transition !== t && (this._classes.transition = t);
		}
		get transitionDuration() {
			return this._durations.transition;
		}
		set transitionDuration(t) {
			n("number", { transitionDuration: t }), this._durations.transition !== t && (this._durations.transition = t, this._setCustomProps());
		}
		get showDuration() {
			return this._durations.show === -1 ? this.transitionDuration : this._durations.show;
		}
		set showDuration(t) {
			n("number", { showDuration: t }), this._durations.show !== t && (this._durations.show = t, this._setCustomProps());
		}
		get hideDuration() {
			return this._durations.hide === -1 ? this.transitionDuration : this._durations.hide;
		}
		set hideDuration(t) {
			n("number", { hideDuration: t }), this._durations.hide !== t && (this._durations.hide = t, this._setCustomProps());
		}
		get isOpen() {
			return this._open;
		}
		_setIds() {
			this.dom.tooltip.id = this.dom.tooltip.id || `tooltip-${this.key}`, this.dom.tooltipToggle.id = this.dom.tooltipToggle.id || `tooltip-toggle-${this.key}`, this.dom.tooltipDescription.id = this.dom.tooltipDescription.id || `tooltip-description-${this.key}`, this._id = this.dom.tooltip.id;
		}
		_setAriaAttributes() {
			this.dom.tooltipToggle && (this.dom.tooltip.setAttribute("role", "tooltip"), this.dom.tooltipToggle.setAttribute("role", "button"), this.dom.tooltipToggle && this.dom.tooltipToggle.setAttribute("aria-describedby", this.dom.tooltipDescription.id));
		}
		_reveal({ emit: t = !0, transition: e = !0 } = {}) {
			e && this.transitionClass !== "" ? (a(this.transitionClass, this.dom.tooltipDescription), requestAnimationFrame(() => {
				l(this.hideClass, this.dom.tooltipDescription), requestAnimationFrame(() => {
					a(this.showClass, this.dom.tooltipDescription), requestAnimationFrame(() => {
						this._setTimeout(() => l(this.transitionClass, this.dom.tooltipDescription), this.showDuration);
					});
				});
			})) : (a(this.showClass, this.dom.tooltipDescription), l(this.hideClass, this.dom.tooltipDescription)), t && this._dispatchEvent("show", this.dom.tooltipDescription);
		}
		_conceal({ emit: t = !0, transition: e = !0 } = {}) {
			this.isSoftLocked = !1, e && this.transitionClass !== "" ? (a(this.transitionClass, this.dom.tooltipDescription), requestAnimationFrame(() => {
				l(this.showClass, this.dom.tooltipDescription), requestAnimationFrame(() => {
					a(this.hideClass, this.dom.tooltipDescription), requestAnimationFrame(() => {
						this._setTimeout(() => l(this.transitionClass, this.dom.tooltipDescription), this.hideDuration);
					});
				});
			})) : (a(this.hideClass, this.dom.tooltipDescription), l(this.showClass, this.dom.tooltipDescription)), t && this._dispatchEvent("hide", this.dom.tooltipDescription);
		}
		get hoverType() {
			return this._hoverType;
		}
		set hoverType(t) {
			W({ hoverType: t }), this._hoverType !== t && (this._hoverType = t);
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
		get isSoftLocked() {
			return this._softLocked;
		}
		set isSoftLocked(t) {
			n("boolean", { isSoftLocked: t }), this._softLocked !== t && (this._softLocked = t);
		}
		get openOnFocus() {
			return this._openOnFocus;
		}
		set openOnFocus(t) {
			n("boolean", { openOnFocus: t }), this._openOnFocus !== t && (this._openOnFocus = t);
		}
		get closeOnBlur() {
			return this._closeOnBlur;
		}
		set closeOnBlur(t) {
			n("boolean", { closeOnBlur: t }), this._closeOnBlur !== t && (this._closeOnBlur = t);
		}
		_setCustomProps() {
			this.dom.tooltip.style.setProperty(`--${this.prefix}tooltip-transition-duration`, `${this.transitionDuration}ms`), this.dom.tooltip.style.setProperty(`--${this.prefix}tooltip-show-transition-duration`, `${this.showDuration}ms`), this.dom.tooltip.style.setProperty(`--${this.prefix}tooltip-hide-transition-duration`, `${this.hideDuration}ms`);
		}
		_handleClick() {
			this._addEventListener("click", this.dom.tooltipToggle, (t) => {
				this.currentEvent = "mouse", t.button === 0 && (h(t), this.isSoftLocked = !0, this.toggle());
			}), this._addEventListener("click", this.dom.tooltipDescription, (t) => {
				this.currentEvent = "mouse", t.button === 0 && (this.focusState = "self");
			}), this._addEventListener("click", document, (t) => {
				this.focusState === "self" && this.closeOnBlur && (this.dom.tooltip === t.target || this.dom.tooltip.contains(t.target) || (this.currentEvent = "mouse", this.hide()));
			});
		}
		_handleFocus() {
			this._addEventListener("focus", this.dom.tooltip, () => {
				this.focusState = "self";
			}), this._addEventListener("focusout", this.dom.tooltip, (t) => {
				!this.closeOnBlur || this.currentEvent !== "keyboard" || t.relatedTarget === null || this.dom.tooltip.contains(t.relatedTarget) || this.hide();
			});
		}
		_handleKeydown() {
			this._addEventListener("keydown", this.dom.tooltipToggle, (t) => {
				this.currentEvent = "keyboard";
				const e = d(t);
				(e === "Space" || e === "Enter") && h(t);
			}), this._addEventListener("keydown", this.dom.tooltip, (t) => {
				this.currentEvent = "keyboard", d(t) === "Escape" && h(t);
			});
		}
		_handleKeyup() {
			this._addEventListener("keyup", this.dom.tooltipToggle, (t) => {
				switch (this.currentEvent = "keyboard", d(t)) {
					case "Space":
					case "Enter":
						h(t), this.toggle();
						break;
					case "Tab": this.openOnFocus && (h(t), this.show());
				}
			}), this._addEventListener("keyup", this.dom.tooltip, (t) => {
				this.currentEvent = "keyboard", d(t) === "Escape" && (h(t), this.hide());
			}), this._addEventListener("keyup", document, (t) => {
				switch (d(t)) {
					case "Escape":
						if (this.hoverType !== "on" && this.focusState !== "self") return;
						this.currentEvent = "keyboard", this.hide();
				}
			});
		}
		_handleHover() {
			this._addEventListener("pointerenter", this.dom.tooltip, (t) => {
				t.pointerType === "pen" || t.pointerType === "touch" || this.hoverType !== "off" && (this.currentEvent = "mouse", this.enterDelay > 0 ? (this._clearTimeout(), this._setTimeout(() => {
					this.show();
				}, this.enterDelay)) : this.show());
			}), this._addEventListener("pointerleave", this.dom.tooltip, (t) => {
				t.pointerType === "pen" || t.pointerType === "touch" || this.hoverType != "off" && (this.isSoftLocked || (this.currentEvent = "mouse", this.leaveDelay > 0 ? (this._clearTimeout(), this._setTimeout(() => {
					this.hide();
				}, this.leaveDelay)) : this.hide()));
			});
		}
		show({ force: t = !1, emit: e = this.isInitialized, transition: s = this.isInitialized } = {}) {
			this.isOpen && !t || (this.focusState = "self", this._reveal({
				emit: e,
				transition: s
			}), this._open = !0);
		}
		hide({ force: t = !1, emit: e = this.isInitialized, transition: s = this.isInitialized } = {}) {
			!this.isOpen && !t || (this.focusState = "none", this._conceal({
				emit: e,
				transition: s
			}), this._open = !1);
		}
		toggle({ force: t = !1, emit: e = this.isInitialized, transition: s = this.isInitialized } = {}) {
			this.isOpen ? this.hide({
				force: t,
				emit: e,
				transition: s
			}) : this.show({
				force: t,
				emit: e,
				transition: s
			});
		}
	};
	const Ot = ({ options: t = {}, context: e = document, selector: s = ".tooltip", descriptionSelector: i = ".tooltip-description", controllerSelector: o = ".tooltip-toggle" } = {}) => {
		k("graupl-tooltip-generator", s, e).forEach((r) => {
			const c = r.dataset.grauplTooltipOptions ? JSON.parse(r.dataset.grauplTooltipOptions.replace(/'/g, "\"")) || {} : {};
			new wt({
				tooltipElement: r,
				tooltipToggleElement: r.querySelector(o) || null,
				tooltipDescriptionElement: r.querySelector(i) || null,
				initialize: !0,
				...t,
				...c
			});
		});
	};
	document.addEventListener("DOMContentLoaded", () => {
		ct(), ut(), _t(), gt(), kt(), Ct(), It(), Ot();
	});
})();

//# sourceMappingURL=graupl.js.map