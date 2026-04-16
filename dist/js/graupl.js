(function() {
	function k(t, e, { shouldThrow: i = !0 } = {}) {
		const s = {
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
				s.status = !1, s.errors.push(r);
			}
		} catch (o) {
			s.status = !1, s.errors.push(o);
		}
		if (i && !s.status) throw s.errors[0];
		return s;
	}
	function n(t, e, { shouldThrow: i = !0 } = {}) {
		const s = {
			status: !0,
			errors: []
		};
		try {
			if (typeof e != "object") throw new TypeError(`Values given to isValidType() must be inside of an object. "${typeof e}" given.`);
			for (const o in e) try {
				const r = typeof e[o];
				if (r !== t) throw new TypeError(`${o} must be a ${t}. "${r}" given.`);
			} catch (r) {
				s.status = !1, s.errors.push(r);
			}
		} catch (o) {
			s.status = !1, s.errors.push(o);
		}
		if (i && !s.status) throw s.errors[0];
		return s;
	}
	function H(t, { shouldThrow: e = !0 } = {}) {
		const i = {
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
			} catch (o) {
				i.status = !1, i.errors.push(o);
			}
		} catch (s) {
			i.status = !1, i.errors.push(s);
		}
		if (e && !i.status) throw i.errors[0];
		return i;
	}
	function m(t, { shouldThrow: e = !0 } = {}) {
		const i = {
			status: !0,
			errors: []
		};
		try {
			if (typeof t != "object" || Array.isArray(t)) throw new TypeError(`Values given to isValidClassList() must be inside of an object. "${typeof t}" given.`);
			for (const s in t) try {
				const o = typeof t[s];
				if (o !== "string") if (Array.isArray(t[s])) t[s].forEach((r) => {
					if (typeof r != "string") throw new TypeError(`${s} must be a string or an array of strings. An array containing non-strings given.`);
				});
				else throw new TypeError(`${s} must be a string or an array of strings. "${o}" given.`);
				else {
					const r = {};
					r[s] = t[s], H(r);
				}
			} catch (o) {
				i.status = !1, i.errors.push(o);
			}
		} catch (s) {
			i.status = !1, i.errors.push(s);
		}
		if (e && !i.status) throw i.errors[0];
		return i;
	}
	function U(t, { shouldThrow: e = !0 } = {}) {
		const i = {
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
			for (const o in t) try {
				if (!s.includes(t[o])) throw new TypeError(`${o} must be one of the following values: ${s.join(", ")}. "${t[o]}" given.`);
			} catch (r) {
				i.status = !1, i.errors.push(r);
			}
		} catch (s) {
			i.status = !1, i.errors.push(s);
		}
		if (e && !i.status) throw i.errors[0];
		return i;
	}
	function Z(t, { shouldThrow: e = !0 } = {}) {
		const i = {
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
			for (const o in t) try {
				if (!s.includes(t[o])) throw new TypeError(`${o} must be one of the following values: ${s.join(", ")}. "${t[o]}" given.`);
			} catch (r) {
				i.status = !1, i.errors.push(r);
			}
		} catch (s) {
			i.status = !1, i.errors.push(s);
		}
		if (e && !i.status) throw i.errors[0];
		return i;
	}
	function L(t, e, { shouldThrow: i = !0 } = {}) {
		const s = {
			status: !0,
			errors: []
		};
		try {
			if (n("string", { tagName: t }, { shouldThrow: !0 }).status && k(HTMLElement, e, { shouldThrow: !0 }).status) {
				const o = t.toLowerCase();
				for (const r in e) try {
					if (e[r].tagName.toLowerCase() !== o) throw new TypeError(`${r} must be a <${o}> element. <${e[r].tagName.toLowerCase()}> given.`);
				} catch (l) {
					s.status = !1, s.errors.push(l);
				}
			}
		} catch (o) {
			s.status = !1, s.errors.push(o);
		}
		if (i && !s.status) throw s.errors[0];
		return s;
	}
	function W(t, e, { shouldThrow: i = !0 } = {}) {
		const s = {
			status: !0,
			errors: []
		};
		try {
			if (!Object.prototype.hasOwnProperty.call(e.events, t)) throw new TypeError(`Event type "${t}" is not valid for ${e.constructor.name}. Valid event types are: "${Object.keys(e.events).join("\", ")}".`);
		} catch (o) {
			s.status = !1, s.errors.push(o);
		}
		if (i && !s.status) throw s.errors[0];
		return s;
	}
	function X(t, { shouldThrow: e = !0 } = {}) {
		const i = {
			status: !0,
			errors: []
		};
		try {
			if (!Object.prototype.hasOwnProperty.call(t._dom, t._rootDOMElement)) throw new Error(`The root DOM element "${t._rootDOMElement}" does not exist in the ${t.constructor.name}'s _dom property. It must be one of the following: "${Object.keys(t._dom).join("\", \"")}".`);
		} catch (s) {
			i.status = !1, i.errors.push(s);
		}
		if (e && !i.status) throw i.errors[0];
		return i;
	}
	function h(t, e) {
		t === "" || t.length === 0 || (typeof t == "string" ? e.classList.add(t) : e.classList.add(...t));
	}
	function c(t, e) {
		t === "" || t.length === 0 || (typeof t == "string" ? e.classList.remove(t) : e.classList.remove(...t));
	}
	var D = class {
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
	}, j = class J {
		_scope;
		_type = "_default";
		_storage = {};
		_crush = !1;
		constructor({ scope: e, type: i = null, crush: s = !1, initialize: o = !0 } = {}) {
			this._scope = e, this._type = i || "_default", this._crush = s, o && this.initialize();
		}
		initialize() {
			try {
				!this._crush && typeof window[this.scope] < "u" && (k(J, { storage: window[this.scope] }, { shouldThrow: !1 }).status || typeof window[this.scope].storage < "u" && typeof window[this.scope].scope < "u" && typeof window[this.scope].type < "u") && (this._storage = window[this.scope].storage);
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
		get({ type: e = this.type, key: i = null } = {}) {
			const s = n("string", { type: e });
			if (!s.status) throw new Error(`StorageManager (${this.scope}): ${s.message}`);
			if (!this.storage[e]) throw new Error(`StorageManager (${this.scope}): Type "${e}" is not initialized.`);
			if (i !== null) {
				const o = n("string", { key: i });
				if (!o.status) throw new Error(`StorageManager (${this.scope}): ${o.message}`);
				return this.storage[e][i];
			}
			return this.storage[e];
		}
		set({ type: e = this.type, key: i = null, data: s = {} } = {}) {
			const o = n("string", { type: e }), r = n("object", { data: s });
			if (!o.status) throw new Error(`StorageManager (${this.scope}): ${o.message}`);
			if (!r.status) throw new Error(`StorageManager (${this.scope}): ${r.message}`);
			if (i !== null) {
				const l = n("string", { key: i });
				if (!l.status) throw new Error(`StorageManager (${this.scope}): ${l.message}`);
				this._storage[e] || (this._storage[e] = {}), this._storage[e][i] = s;
			} else this._storage[e] = s;
		}
		clear({ type: e = this.type, key: i = null } = {}) {
			const s = n("string", { type: e });
			if (!s.status) throw new Error(`StorageManager (${this.scope}): ${s.message}`);
			if (i !== null) {
				const o = n("string", { key: i });
				if (!o.status) throw new Error(`StorageManager (${this.scope}): ${o.message}`);
				delete this.storage[e][i];
			} else delete this.storage[e];
		}
		dispose() {
			delete this._storage, delete this;
		}
	}, O = class {
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
		constructor({ prefix: t = "graupl-", key: e = null, initializeClass: i = "initializing" } = {}) {
			this._classes.initialize = i || "", this._prefix = t || "", this._key = e || "";
		}
		initialize() {
			try {
				if (!this._validate()) throw new Error(`Graupl ${this.name}: Cannot initialize component. The following errors have been found:
 - ${this.errors.map((t) => t.message).join(`
 - `)}`);
				h(this.initializeClass, this.rootDOMElement), this._dispatchEvent("preinitialize", this.rootDOMElement), this._generateKey(), this._setDOMElements(), this._setIds(), this._setAriaAttributes(), this._setCustomProps(), this._createChildElements(), this._handleMediaMatch(), this._handleFocus(), this._handleHover(), this._handleClick(), this._handleKeydown(), this._handleKeyup(), this._dispatchEvent("initialize", this.rootDOMElement), this._store(), c(this.initializeClass, this.rootDOMElement), this._initialized = !0, this._dispatchEvent("postinitialize", this.rootDOMElement);
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
			m({ initializeClass: t }), this._classes.initialize !== t && (this._classes.initialize = t);
		}
		get focusState() {
			return this._focusState;
		}
		set focusState(t) {
			U({ focusState: t }), this._focusState !== t && (this._focusState = t);
		}
		get currentEvent() {
			return this._currentEvent;
		}
		set currentEvent(t) {
			Z({ currentEvent: t }), this._currentEvent !== t && (this._currentEvent = t);
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
			const t = X(this, { shouldThrow: !1 });
			if (t.status || (this._errors = [...this._errors, ...t.errors], this._valid = !1), Object.keys(this._dom).length > 0) {
				const s = {};
				for (const r of Object.keys(this._dom)) Array.isArray(this._dom[r]) ? this._dom[r].forEach((l, u) => {
					s[`${r}Element[${u}]`] = l;
				}) : this._dom[r] !== null && (s[`${r}Element`] = this._dom[r]);
				const o = k(HTMLElement, s, { shouldThrow: !1 });
				o.status || (this._errors = [...this._errors, ...o.errors], this._valid = !1);
			}
			if (Object.keys(this._selectors).length > 0) {
				const s = {};
				for (const r of Object.keys(this._selectors)) s[`${r}Selector`] = this._selectors[r];
				const o = H(s, { shouldThrow: !1 });
				o.status || (this._errors = [...this._errors, ...o.errors], this._valid = !1);
			}
			if (Object.keys(this._classes).length > 0) {
				const s = {};
				for (const r of Object.keys(this._classes)) this._classes[r] !== "" && (s[`${r}Class`] = this._classes[r]);
				const o = m(s, { shouldThrow: !1 });
				o.status || (this._errors = [...this._errors, ...o.errors], this._valid = !1);
			}
			if (Object.keys(this._durations).length > 0) {
				const s = {};
				for (const r of Object.keys(this._durations)) s[`${r}Duration`] = this._durations[r];
				const o = n("number", s, { shouldThrow: !1 });
				o.status || (this._errors = [...this._errors, ...o.errors], this._valid = !1);
			}
			if (Object.keys(this.delays).length > 0) {
				const s = {};
				for (const r of Object.keys(this.delays)) s[`${r}Delay`] = this.delays[r];
				const o = n("number", s, { shouldThrow: !1 });
				o.status || (this._errors = [...this._errors, ...o.errors], this._valid = !1);
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
			const i = n("string", e, { shouldThrow: !1 });
			return i.status || (this._errors = [...this._errors, ...i.errors], this._valid = !1), this._dispatchEvent("validate", this.rootDOMElement), this._dispatchEvent("postvalidate", this.rootDOMElement), this._valid;
		}
		_generateKey(t = !1) {
			(this._key === "" || t) && (this._key = Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 10));
		}
		_setIds() {}
		_setAriaAttributes() {}
		_setCustomProps() {}
		_setDOMElementType(t, { context: e, overwrite: i = !0, strict: s = !1 } = {}) {
			if (typeof this.selectors[t] != "string") throw new Error(`Graupl ${this.name}: "${t}" is not a valid element type.`);
			if (this._rootDOMElement === t || this._protectedDOMElements.includes(t)) throw new Error(`Graupl ${this.name}: "${t}" element cannot be set through _setDOMElementType because it is a protected element.`);
			k(HTMLElement, { context: e });
			const o = Array.from(e.querySelectorAll(this.selectors[t])).filter((r) => s ? r.parentElement === e : !0);
			Array.isArray(this._dom[t]) ? i ? this._dom[t] = o : this._dom[t] = [...this._dom[t], ...o] : this._dom[t] = o[0] || null;
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
			this._shouldStore && (k(j, { storage: window.GrauplStorage }, { shouldThrow: !1 }).status || new j({ scope: "GrauplStorage" }), window.GrauplStorage.set({
				key: this.id !== "" ? this.id : this.key,
				type: this._storageKey,
				data: this
			}));
		}
		_unstore() {
			this._shouldStore && k(j, { storage: window.GrauplStorage }, { shouldThrow: !1 }).status && window.GrauplStorage.clear({
				key: this.id !== "" ? this.id : this.key,
				type: this._storageKey
			});
		}
		_setInterval(t, e, i = "_default") {
			this._clearInterval(i), this._intervals[i] = setInterval(t, e);
		}
		_clearInterval(t = "_default") {
			clearInterval(this._intervals[t]);
		}
		_clearIntervals() {
			for (const t of Object.keys(this._intervals)) this._clearInterval(t);
		}
		_setTimeout(t, e, i = "_default") {
			this._clearTimeout(i), this._timeouts[i] = setTimeout(t, e);
		}
		_clearTimeout(t = "_default") {
			clearTimeout(this._timeouts[t]);
		}
		_clearTimeouts() {
			for (const t of Object.keys(this._timeouts)) this._clearTimeout(t);
		}
		_registerEvent(t, { bubbles: e = !0, detail: i = {} } = {}) {
			n("string", { name: t }), n("boolean", { bubbles: e }), n("object", { detail: i });
			const s = `graupl${this.name}${t.charAt(0).toUpperCase()}${t.slice(1)}`;
			this._events[t] = new CustomEvent(s, {
				bubbles: e,
				detail: {
					component: this,
					...i
				}
			});
		}
		_dispatchEvent(t, e) {
			W(t, this), k(HTMLElement, { element: e }), e.dispatchEvent(this.events[t]);
		}
		_addEventListener(t, e, i, s = {}) {
			e.addEventListener(t, i, s), this._listeners.push({
				type: t,
				element: e,
				listener: i,
				options: s
			});
		}
		_removeEventListener(t, e, i, s = {}) {
			e.removeEventListener(t, i, s);
			let o = -1;
			this._listeners.forEach((r, l) => {
				r.type === t && r.element === e && r.listener === i && JSON.stringify(r.options) === JSON.stringify(s) && (o = l);
			}), o !== -1 && this._listeners.splice(o, 1);
		}
		_removeEventListeners({ type: t = null, element: e = null } = {}) {
			[...this._listeners].forEach((i) => {
				t !== null && i.type !== t || e !== null && i.element !== e || this._removeEventListener(i.type, i.element, i.listener, i.options);
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
	}, Y = class extends O {
		_rootDOMElement = "item";
		_protectedDOMElements = [
			"toggle",
			"header",
			"content"
		];
		_open = new D(!1);
		_locked = new D(!1);
		_name = "AccordionItem";
		_storageKey = "accordionItems";
		_shouldStore = !1;
		constructor({ accordionItemElement: t, accordionItemToggleElement: e, accordionItemHeaderElement: i, accordionItemContentElement: s, parentAccordion: o = null }) {
			super({
				prefix: o.prefix,
				key: o.key
			}), this._dom.item = t, this._dom.toggle = e, this._dom.header = i, this._dom.content = s, this._elements.parent = o, this._registerEvent("expand", { detail: { item: this } }), this._registerEvent("collapse", { detail: { item: this } }), this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
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
			L("button", { toggle: this.dom.toggle }, { shouldThrow: !1 }).status || this.dom.toggle.setAttribute("role", "button"), this.dom.toggle.getAttribute("aria-expanded") !== "true" && this.dom.toggle.setAttribute("aria-expanded", "false"), this.dom.toggle.setAttribute("aria-controls", this.dom.content.id), L("section", { content: this.dom.content }, { shouldThrow: !1 }).status || this.dom.content.setAttribute("role", "region"), this.dom.content.setAttribute("aria-labelledby", this.dom.toggle.id);
		}
		_reveal({ emit: t = !0, transition: e = !0 } = {}) {
			const { closeClass: i, openClass: s, transitionClass: o, openDuration: r } = this.elements.parent;
			this.dom.toggle.setAttribute("aria-expanded", "true"), e && o !== "" ? (h(o, this.dom.item), requestAnimationFrame(() => {
				c(i, this.dom.item), this.dom.item.style.height = `${this.dom.header.getBoundingClientRect().height}px`, requestAnimationFrame(() => {
					h(s, this.dom.item), this.dom.item.style.height = `${this.dom.header.getBoundingClientRect().height + this.dom.content.getBoundingClientRect().height}px`, requestAnimationFrame(() => {
						this._setTimeout(() => {
							c(o, this.dom.item), this.dom.item.style.height = "";
						}, r);
					});
				});
			})) : (h(s, this.dom.item), c(i, this.dom.item)), this.dom.content.removeAttribute("inert"), t && this._dispatchEvent("expand", this.dom.item);
		}
		_conceal({ emit: t = !0, transition: e = !0 } = {}) {
			const { closeClass: i, openClass: s, transitionClass: o, closeDuration: r } = this.elements.parent;
			this.dom.toggle.setAttribute("aria-expanded", "false"), e && o !== "" ? (h(o, this.dom.item), this.dom.item.style.height = `${this.dom.item.getBoundingClientRect().height}px`, requestAnimationFrame(() => {
				c(s, this.dom.item), this.dom.item.style.height = `${this.dom.header.getBoundingClientRect().height}px`, requestAnimationFrame(() => {
					h(i, this.dom.item), requestAnimationFrame(() => {
						this._setTimeout(() => {
							c(o, this.dom.item), this.dom.item.style.height = "";
						}, r);
					});
				});
			})) : (h(i, this.dom.item), c(s, this.dom.item)), this.dom.content.setAttribute("inert", "true"), t && this._dispatchEvent("collapse", this.dom.item);
		}
		show({ force: t = !1, preserveState: e = !1, emit: i = !0, transition: s = !0 } = {}) {
			this.isOpen && !t || (this._reveal({
				emit: i,
				transition: s
			}), this._open.value = !0, e || this._open.commit(), this.elements.parent.allowExpandMultiple || (this.unlockSiblings(), this.closeSiblings()), this.elements.parent.allowCollapseAll || (this.elements.parent.openAccordionItems.length <= 1 ? this.lock() : this.unlockSiblings()));
		}
		hide({ force: t = !1, preserveState: e = !1, emit: i = !0, transition: s = !0 } = {}) {
			!this.isOpen && !t || !this.elements.parent.allowCollapseAll && this.elements.parent.openAccordionItems.length <= 1 || (this._conceal({
				emit: i,
				transition: s
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
			const e = t.key || t.keyCode, i = {
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
			return Object.keys(i).find((s) => i[s] === !0) || "";
		} catch {
			return "";
		}
	}
	function a(t) {
		t.preventDefault(), t.stopPropagation();
	}
	var tt = class extends O {
		_rootDOMElement = "accordion";
		_optionalKeySupport = !0;
		_expandMultiple = !0;
		_collapseAll = !0;
		_currentChild = 0;
		_storageKey = "accordions";
		_name = "Accordion";
		constructor({ accordionElement: t, accordionItemsSelector: e = ".accordion-item", accordionItemTogglesSelector: i = ".accordion-item-toggle", accordionItemHeadersSelector: s = ".accordion-item-header", accordionItemContentsSelector: o = ".accordion-item-content", accordionControlContainerSelector: r = ".accordion-control-container", accordionControlsSelector: l = ".accordion-control", expandControllerSelector: u = ".expand-all", collapseControllerSelector: f = ".collapse-all", openClass: C = "show", closeClass: E = "hide", transitionClass: b = "transitioning", transitionDuration: w = 300, openDuration: g = -1, closeDuration: y = -1, optionalKeySupport: I = !1, allowExpandMultiple: x = !0, allowCollapseAll: v = !0, automaticActivation: A = !1, prefix: T = "graupl-", key: $ = null, initializeClass: M = "initializing", initialize: S = !1 }) {
			super({
				prefix: T,
				key: $,
				initializeClass: M
			}), this._dom.accordion = t, this._dom.accordionItems = [], this._dom.accordionItemToggles = [], this._dom.accordionItemHeaders = [], this._dom.accordionItemContents = [], this._dom.accordionControlContainer = null, this._dom.accordionControls = [], this._dom.expandController = [], this._dom.collapseController = [], this._selectors.accordionItems = e, this._selectors.accordionItemToggles = i, this._selectors.accordionItemHeaders = s, this._selectors.accordionItemContents = o, this._selectors.accordionControlContainer = r, this._selectors.accordionControls = l, this._selectors.expandController = u, this._selectors.collapseController = f, this._elements.accordionItems = [], this._classes.open = C || "", this._classes.close = E || "", this._classes.transition = b || "", this._durations.transition = w, this._durations.open = g, this._durations.close = y, this._automatic = A, this._optionalKeySupport = I, this._expandMultiple = x, this._collapseAll = v, this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
				this.dom.expandController.length > 0 && !this.allowExpandMultiple && this.dom.expandController.forEach((p) => {
					p.setAttribute("disabled", "disabled");
				}), this.dom.collapseController.length > 0 && !this.allowCollapseAll && this.dom.collapseController.forEach((p) => {
					p.setAttribute("disabled", "disabled");
				});
			}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
				const p = n("boolean", {
					automaticActivation: this._automatic,
					optionalKeySupport: this._optionalKeySupport,
					allowExpandMultiple: this._expandMultiple,
					allowCollapseAll: this._collapseAll
				});
				p.status || (this._errors = [...this._errors, ...p.errors], this._valid = !1);
			}), S && this.initialize();
		}
		get openClass() {
			return this._classes.open;
		}
		set openClass(t) {
			m({ openClass: t }), this._classes.open !== t && (this._classes.open = t);
		}
		get closeClass() {
			return this._classes.close;
		}
		set closeClass(t) {
			m({ closeClass: t }), this._classes.close !== t && (this._classes.close = t);
		}
		get transitionClass() {
			return this._classes.transition;
		}
		set transitionClass(t) {
			m({ transitionClass: t }), this._classes.transition !== t && (this._classes.transition = t);
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
				const i = new Y({
					accordionItemElement: t,
					accordionItemToggleElement: this.dom.accordionItemToggles[e],
					accordionItemHeaderElement: this.dom.accordionItemHeaders[e],
					accordionItemContentElement: this.dom.accordionItemContents[e],
					parentAccordion: this
				});
				i.initialize(), this.elements.accordionItems.push(i);
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
					const i = d(e);
					["Space", "Enter"].includes(i) ? (a(e), this.currentEvent = "keyboard") : this.optionalKeySupport && [
						"ArrowDown",
						"ArrowUp",
						"Home",
						"End"
					].includes(i) && (a(e), this.currentEvent = "keyboard");
				});
			}), this.dom.accordionControls.forEach((t) => {
				this._addEventListener("keydown", t, (e) => {
					const i = d(e);
					["Space", "Enter"].includes(i) && (a(e), this.currentEvent = "keyboard");
				});
			});
		}
		_handleKeyup() {
			this.dom.accordionItemToggles.forEach((t) => {
				this._addEventListener("keyup", t, (e) => {
					const i = d(e);
					switch (i) {
						case "Space":
						case "Enter":
							a(e), this.currentEvent = "keyboard", this.currentAccordionItem.toggle();
							break;
					}
					if (this.optionalKeySupport) switch (i) {
						case "Home":
							a(e), this.focusFirstChild();
							break;
						case "End":
							a(e), this.focusLastChild();
							break;
						case "ArrowDown":
							a(e), this.focusNextChild();
							break;
						case "ArrowUp":
							a(e), this.focusPreviousChild();
							break;
					}
				});
			}), this.dom.expandController.forEach((t) => {
				this._addEventListener("keyup", t, (e) => {
					switch (d(e)) {
						case "Space":
						case "Enter": a(e), this.currentEvent = "keyboard", this.allowExpandMultiple && this.openChildren();
					}
				});
			}), this.dom.collapseController.forEach((t) => {
				this._addEventListener("keyup", t, (e) => {
					switch (d(e)) {
						case "Space":
						case "Enter": a(e), this.currentEvent = "keyboard", this.allowCollapseAll && this.closeChildren();
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
	const N = /[\11\12\14\15\40]+/, K = "data-once", et = document;
	function q(t, e, i) {
		return t[`${e}Attribute`](K, i);
	}
	function B(t) {
		if (typeof t != "string") throw new TypeError("once ID must be a string");
		if (t === "" || N.test(t)) throw new RangeError("once ID must not be empty or contain spaces");
		return `[${K}~="${t}"]`;
	}
	function st(t) {
		if (!(t instanceof Element)) throw new TypeError("The element must be an instance of Element");
		return !0;
	}
	function z(t, e = et) {
		let i = t;
		if (t === null) i = [];
		else if (t) if (e instanceof Document || e instanceof DocumentFragment || e instanceof Element) typeof t == "string" ? i = e.querySelectorAll(t) : t instanceof Element && (i = [t]);
		else throw new TypeError("Context must be an object of type \"Document\", \"DocumentFragment\", or \"Element\".");
		else throw new TypeError("Selector must not be empty");
		return Array.prototype.slice.call(i);
	}
	function Q(t, e, i) {
		return e.filter((s) => {
			const o = st(s) && s.matches(t);
			return o && i && i(s), o;
		});
	}
	function G(t, { add: e, remove: i }) {
		const s = [];
		q(t, "has") && q(t, "get").trim().split(N).forEach((r) => {
			s.indexOf(r) < 0 && r !== i && s.push(r);
		}), e && s.push(e);
		const o = s.join(" ");
		q(t, o === "" ? "remove" : "set", o);
	}
	function _(t, e, i) {
		return Q(`:not(${B(t)})`, z(e, i), (s) => G(s, { add: t }));
	}
	_.remove = (t, e, i) => Q(B(t), z(e, i), (s) => G(s, { remove: t })), _.filter = (t, e, i) => Q(B(t), z(e, i)), _.find = (t, e) => z(t ? B(t) : `[${K}]`, e);
	const it = (t = {}, e = document, i = ".accordion") => {
		_("graupl-accordion-generator", i, e).forEach((s) => {
			const o = s.dataset.grauplAccordionOptions ? JSON.parse(s.dataset.grauplAccordionOptions.replace(/'/g, "\"")) || {} : {};
			new tt({
				accordionElement: s,
				initialize: !0,
				...t,
				...o
			});
		});
	};
	var ot = class extends O {
		_rootDOMElement = "alert";
		_protectedDOMElements = ["controller"];
		_hidden = new D(!1);
		_storageKey = "alerts";
		_name = "Alert";
		constructor({ alertElement: t, controllerElement: e = null, showClass: i = "show", hideClass: s = "hide", transitionClass: o = "transitioning", transitionDuration: r = 150, showDuration: l = -1, hideDuration: u = -1, isHidden: f = !1, prefix: C = "graupl-", key: E = null, initializeClass: b = "initializing", initialize: w = !1 } = {}) {
			super({
				prefix: C,
				key: E,
				initializeClass: b
			}), this._dom.alert = t, this._dom.controller = e, this._classes.show = i || "", this._classes.hide = s || "", this._classes.transition = o || "", this._durations.transition = r, this._durations.show = l, this._durations.hide = u, this._hidden.value = f, this._hidden.commit(), this._registerEvent("show", { detail: { alert: this } }), this._registerEvent("hide", { detail: { alert: this } }), this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
				this.isHidden && this._conceal({
					emit: !1,
					transition: !1
				});
			}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
				const g = n("boolean", { isHidden: this._hidden.value }, { shouldThrow: !1 });
				g.status || (this._errors = [...this._errors, ...g.errors], this._valid = !1);
			}), w && this.initialize();
		}
		get showClass() {
			return this._classes.show;
		}
		set showClass(t) {
			m({ showClass: t }), this._classes.show !== t && (this._classes.show = t);
		}
		get hideClass() {
			return this._classes.hide;
		}
		set hideClass(t) {
			m({ hideClass: t }), this._classes.hide !== t && (this._classes.hide = t);
		}
		get transitionClass() {
			return this._classes.transition;
		}
		set transitionClass(t) {
			m({ transitionClass: t }), this._classes.transition !== t && (this._classes.transition = t);
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
			e && this.transitionClass !== "" ? (h(this.transitionClass, this.dom.alert), requestAnimationFrame(() => {
				c(this.hideClass, this.dom.alert), requestAnimationFrame(() => {
					h(this.showClass, this.dom.alert), requestAnimationFrame(() => {
						this._setTimeout(() => c(this.transitionClass, this.dom.alert), this.showDuration);
					});
				});
			})) : (h(this.showClass, this.dom.alert), c(this.hideClass, this.dom.alert)), this.dom.alert.removeAttribute("inert"), t && this._dispatchEvent("show", this.dom.alert);
		}
		_conceal({ emit: t = !0, transition: e = !0 } = {}) {
			e && this.transitionClass !== "" ? (h(this.transitionClass, this.dom.alert), requestAnimationFrame(() => {
				c(this.showClass, this.dom.alert), requestAnimationFrame(() => {
					h(this.hideClass, this.dom.alert), requestAnimationFrame(() => {
						this._setTimeout(() => c(this.transitionClass, this.dom.alert), this.hideDuration);
					});
				});
			})) : (h(this.hideClass, this.dom.alert), c(this.showClass, this.dom.alert)), this.dom.alert.setAttribute("inert", "true"), t && this._dispatchEvent("hide", this.dom.alert);
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
				(e === "Space" || e === "Enter") && a(t);
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
	const rt = (t = {}, e = document, i = ".alert") => {
		_("graupl-alert-generator", i, e).forEach((s) => {
			const o = s.dataset.grauplAlertOptions ? JSON.parse(s.dataset.grauplAlertOptions.replace(/'/g, "\"")) || {} : {};
			new ot({
				alertElement: s,
				controllerElement: s.querySelector(".alert-dismisser") || null,
				initialize: !0,
				...t,
				...o
			});
		});
	};
	var V = class extends O {
		_rootDOMElement = "carouselItem";
		_shouldStore = !1;
		_storageKey = "carouselItems";
		_name = "CarouselItem";
		_busy = !1;
		constructor({ carouselItemElement: t, tabElement: e = null, clone: i = null, parent: s, prefix: o = "graupl-", key: r = null, initializeClass: l = "initializing", initialize: u = !1 }) {
			super({
				prefix: o,
				key: r,
				initializeClass: l
			}), this._dom.carouselItem = t, this._dom.tab = e, this._elements.clone = i ?? null, this._elements.parent = s, u && this.initialize();
		}
		activate({ scroll: t = !0, scrollBehavior: e = "smooth" } = {}) {
			requestAnimationFrame(() => {
				h(this.elements.parent.activeClass, this.dom.carouselItem), this.dom.carouselItem.removeAttribute("inert"), t && this.dom.carouselItem.scrollIntoView({
					block: "nearest",
					behavior: e
				}), this.dom.tab && requestAnimationFrame(() => {
					h(this.elements.parent.activeClass, this.dom.tab), this.dom.tab.setAttribute("aria-selected", "true");
				});
			});
		}
		deactivate() {
			requestAnimationFrame(() => {
				c(this.elements.parent.activeClass, this.dom.carouselItem), this.dom.carouselItem.setAttribute("inert", !0), requestAnimationFrame(() => {
					this.dom.tab && (c(this.elements.parent.activeClass, this.dom.tab), this.dom.tab.setAttribute("aria-selected", !1));
				});
			});
		}
	}, nt = class extends O {
		_rootDOMElement = "carousel";
		_currentItem = 0;
		_autoplay = !0;
		_playText = "Play";
		_pauseText = "Pause";
		_storageKey = "carousels";
		_name = "Carousel";
		_itemsPerPage = 1;
		_loop = !0;
		constructor({ carouselElement: t, carouselItemsSelector: e = ".carousel-item", carouselItemContainerSelector: i = ".carousel-item-container", carouselControlsSelector: s = ".carousel-control", carouselControlContainerSelector: o = ".carousel-control-container", carouselTabsSelector: r = ".carousel-tab", carouselTabContainerSelector: l = ".carousel-tab-container", autoplaySelector: u = ".autoplay", nextSelector: f = ".next", previousSelector: C = ".previous", activeClass: E = "active", playClass: b = "play", pauseClass: w = "pause", autoplay: g = !0, transitionDelay: y = 1e4, playText: I = "Play", pauseText: x = "Pause", itemsPerPage: v = 1, loop: A = !0, prefix: T = "graupl-", key: $ = null, initializeClass: M = "initializing", initialize: S = !1 }) {
			super({
				prefix: T,
				key: $,
				initializeClass: M
			}), this._dom.carousel = t, this._dom.carouselItems = [], this._dom.carouselItemContainer = null, this._dom.carouselControls = [], this._dom.carouselControlContainer = null, this._dom.carouselTabs = [], this._dom.carouselTabContainer = null, this._dom.autoplay = null, this._dom.next = null, this._dom.previous = null, this._selectors.carouselItems = e, this._selectors.carouselItemContainer = i, this._selectors.carouselControls = s, this._selectors.carouselControlContainer = o, this._selectors.carouselTabs = r, this._selectors.carouselTabContainer = l, this._selectors.autoplay = u, this._selectors.next = f, this._selectors.previous = C, this._elements.carouselItems = [], this._classes.active = E || "", this._classes.play = b || "", this._classes.pause = w || "", this._autoplay = g, this._itemsPerPage = v, this._loop = A, this._delays.transition = y, this._playText = I || "", this._pauseText = x || "", this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
				this._handleAutoplay(), this.loop && this._handleLoop(), this._handleIntersection(), this.activateFirstItem({ scrollBehavior: "instant" });
			}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
				const p = n("boolean", {
					autoplay: this._autoplay,
					loop: this._loop
				}, { shouldThrow: !1 });
				p.status || (this._errors = [...this._errors, ...p.errors], this._valid = !1);
				const P = n("string", {
					playText: this._playText,
					pauseText: this._pauseText
				}, { shouldThrow: !1 });
				P.status || (this._errors = [...this._errors, ...P.errors], this._valid = !1);
				const F = n("number", { itemsPerPage: this._itemsPerPage }, { shouldThrow: !1 });
				F.status || (this._errors = [...this._errors, ...F.errors], this._valid = !1);
			}), S && this.initialize();
		}
		get activeClass() {
			return this._classes.active;
		}
		set activeClass(t) {
			m({ activeClass: t }), this._classes.active !== t && (this._classes.active = t);
		}
		get playClass() {
			return this._classes.play;
		}
		set playClass(t) {
			m({ playClass: t }), this._classes.play !== t && (this._classes.play = t);
		}
		get pauseClass() {
			return this._classes.pause;
		}
		set pauseClass(t) {
			m({ pauseClass: t }), this._classes.pause !== t && (this._classes.pause = t);
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
				const i = new V({
					carouselItemElement: t,
					tabElement: this.dom.carouselTabs ? this.dom.carouselTabs[e] : null,
					parent: this,
					prefix: this.prefix,
					initializeClass: this.classes.initialize,
					initialize: !0
				});
				this._elements.carouselItems.push(i);
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
			!L("section", { carousel: this.dom.carousel }, { shouldThrow: !1 }).status && !this.dom.carousel.getAttribute("role") !== "region" && this.dom.carousel.setAttribute("role", "group"), this.dom.carouselItems.forEach((t) => {
				t.setAttribute("inert", "true");
			}), this.dom.carouselItemContainer && this.dom.carouselItemContainer.setAttribute("tabindex", "-1"), this._dom.carousel.setAttribute("aria-roledescription", "carousel"), this.dom.carouselTabContainer && this.dom.carouselTabContainer.setAttribute("role", "tablist"), this.dom.carouselTabs.forEach((t, e) => {
				t.setAttribute("role", "tab"), t.setAttribute("aria-selected", e === 0), t.setAttribute("aria-controls", this.dom.carouselItems[e].id);
			});
		}
		_handleAutoplay() {
			this.autoplay ? (h(this.pauseClass, this.dom.autoplay), c(this.playClass, this.dom.autoplay), this.dom.autoplay.setAttribute("aria-label", this.pauseText), this.dom.carousel.setAttribute("aria-live", "off"), this._setInterval(() => this.activateNextItem(), this.transitionDelay)) : (h(this.playClass, this.dom.autoplay), c(this.pauseClass, this.dom.autoplay), this.dom.autoplay.setAttribute("aria-label", this.playText), this.dom.carousel.setAttribute("aria-live", "polite"), this._clearInterval());
		}
		_handleIntersection() {
			const t = {
				root: this.dom.carousel,
				rootMargin: "1px",
				scrollMargin: "1px",
				threshold: 1
			}, e = new IntersectionObserver((i) => {
				this.isInitialized && i.forEach((s) => {
					if (!s.isIntersecting) return;
					const o = this.dom.carouselItems.indexOf(s.target);
					let r = o;
					this.elements.carouselItems[o].elements.clone !== null && (r = this.dom.carouselItems.indexOf(this.elements.carouselItems[o].elements.clone.dom.carouselItem), (o === 0 || o === this.dom.carouselItems.length - 1) && this.elements.carouselItems[o].elements.clone.dom.carouselItem.scrollIntoView({
						block: "nearest",
						behavior: "instant"
					})), this.currentItem !== r && this.activateItem(r, { scroll: !1 });
				});
			}, t);
			this.dom.carouselItems.forEach((i) => {
				e.observe(i);
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
				t.button === 0 && (a(t), this.currentEvent = "mouse", this.activateNextItem());
			}), this._addEventListener("click", this.dom.previous, (t) => {
				t.button === 0 && (a(t), this.currentEvent = "mouse", this.activatePreviousItem());
			}), this._addEventListener("click", this.dom.autoplay, (t) => {
				t.button === 0 && (a(t), this.currentEvent = "mouse", this.toggleAutoplay());
			}), this.elements.carouselItems.forEach((t) => {
				t.dom.tab && this._addEventListener("click", t.dom.tab, (e) => {
					e.button === 0 && (a(e), this.currentEvent = "mouse", this.activateItem(this.dom.carouselItems.indexOf(t.dom.carouselItem)));
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
							a(e);
							break;
					}
				});
			}), this.elements.carouselItems.forEach((t) => {
				t.dom.tab && this._addEventListener("keydown", t.dom.tab, (e) => {
					switch (d(e)) {
						case "Space":
						case "Enter":
							a(e);
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
						this.activateNextItem(), a(t);
						break;
				}
			}), this._addEventListener("keyup", this.dom.previous, (t) => {
				switch (d(t)) {
					case "Space":
					case "Enter":
						this.activatePreviousItem(), a(t);
						break;
				}
			}), this._addEventListener("keyup", this.dom.autoplay, (t) => {
				switch (d(t)) {
					case "Space":
					case "Enter":
						this.toggleAutoplay(), a(t);
						break;
				}
			}), this.elements.carouselItems.forEach((t) => {
				t.dom.tab && this._addEventListener("keyup", t.dom.tab, (e) => {
					switch (d(e)) {
						case "Space":
						case "Enter":
							this.activateItem(this.dom.carouselItems.indexOf(t.dom.carouselItem)), a(e);
							break;
					}
				});
			});
		}
		_handleLoop() {
			const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), i = this.dom.carouselItemContainer;
			for (let s = 0; s < this.itemsPerPage; s++) t.set(this.dom.carouselItems[s], this.dom.carouselItems.indexOf(this.dom.carouselItems[s]));
			for (let s = this.dom.carouselItems.length - this.itemsPerPage; s < this.dom.carouselItems.length; s++) e.set(this.dom.carouselItems[s], this.dom.carouselItems.indexOf(this.dom.carouselItems[s]));
			t.forEach((s, o) => {
				const r = o.cloneNode(!0);
				r.setAttribute("aria-hidden", "true"), r.setAttribute("inert", "true"), r.setAttribute("id", `${o.id}-clone`), i.appendChild(r);
				const l = new V({
					carouselItemElement: r,
					clone: this._elements.carouselItems[s],
					parent: this,
					prefix: this.prefix,
					initializeClass: this.classes.initialize,
					initialize: !0
				});
				this.dom.carouselItems.push(r), this._elements.carouselItems.push(l);
			}), e.forEach((s, o) => {
				const r = o.cloneNode(!0);
				r.setAttribute("aria-hidden", "true"), r.setAttribute("inert", "true"), r.setAttribute("id", `${o.id}-clone`), i.insertBefore(r, i.firstChild);
				const l = new V({
					carouselItemElement: r,
					clone: this._elements.carouselItems[s],
					parent: this,
					prefix: this.prefix,
					initializeClass: this.classes.initialize,
					initialize: !0
				});
				this.dom.carouselItems.unshift(r), this._elements.carouselItems.unshift(l);
			});
		}
		activateCurrentItem({ scroll: t = !0, scrollBehavior: e = "smooth" } = {}) {
			this.currentCarouselItem.activate({
				scroll: t,
				scrollBehavior: e
			});
		}
		deactivateCurrentItem({ scroll: t = !0, scrollBehavior: e = "smooth" } = {}) {
			this.currentCarouselItem.deactivate({
				scroll: t,
				scrollBehavior: e
			});
		}
		activateItem(t, { scroll: e = !0, scrollBehavior: i = "smooth" } = {}) {
			this.autoplay && this._clearInterval(), this.deactivateCurrentItem({
				scroll: e,
				scrollBehavior: i
			}), this.currentItem = t, this.activateCurrentItem({
				scroll: e,
				scrollBehavior: i
			}), this.autoplay && this._setInterval(() => this.activateNextItem(), this.transitionDelay);
		}
		activateFirstItem({ scroll: t = !0, scrollBehavior: e = "smooth" } = {}) {
			this.loop ? this.currentItem === this.dom.carouselItems.length - this.itemsPerPage - 1 ? this.activateNextItem({
				scroll: t,
				scrollBehavior: e
			}) : this.activateItem(this.itemsPerPage, {
				scroll: t,
				scrollBehavior: e
			}) : this.activateItem(0, {
				scroll: t,
				scrollBehavior: e
			});
		}
		activateLastItem({ scroll: t = !0, scrollBehavior: e = "smooth" } = {}) {
			this.loop ? this.currentItem === this.itemsPerPage ? this.activatePreviousItem({
				scroll: t,
				scrollBehavior: e
			}) : this.activateItem(this.dom.carouselItems.length - this.itemsPerPage - 1, {
				scroll: t,
				scrollBehavior: e
			}) : this.activateItem(this.dom.carouselItems.length - 1, {
				scroll: t,
				scrollBehavior: e
			});
		}
		activateNextItem({ scroll: t = !0, scrollBehavior: e = "smooth" } = {}) {
			this.loop ? this.activateItem(this.currentItem + 1, {
				scroll: t,
				scrollBehavior: e
			}) : this.currentItem + 1 >= this.dom.carouselItems.length ? this.activateFirstItem({
				scroll: t,
				scrollBehavior: e
			}) : this.activateItem(this.currentItem + 1, {
				scroll: t,
				scrollBehavior: e
			});
		}
		activatePreviousItem({ scroll: t = !0, scrollBehavior: e = "smooth" } = {}) {
			this.loop ? this.activateItem(this.currentItem - 1, {
				scroll: t,
				scrollBehavior: e
			}) : this.currentItem - 1 < 0 || this.loop && this.currentItem - 1 < this.itemsPerPage ? this.activateLastItem({
				scroll: t,
				scrollBehavior: e
			}) : this.activateItem(this.currentItem - 1, {
				scroll: t,
				scrollBehavior: e
			});
		}
		toggleAutoplay() {
			this.autoplay = !this.autoplay, this._handleAutoplay();
		}
	};
	const at = (t = {}, e = document, i = ".carousel") => {
		_("graupl-carousel-generator", i, e).forEach((s) => {
			const o = s.dataset.grauplCarouselOptions ? JSON.parse(s.dataset.grauplCarouselOptions.replace(/'/g, "\"")) || {} : {};
			new nt({
				carouselElement: s,
				initialize: !0,
				...t,
				...o
			});
		});
	}, lt = (t = {}, e = document, i = ".navigation") => {
		_("graupl-navigation-generator", i, e).forEach((s) => {
			const o = s.dataset.grauplMenuType || DisclosureMenu;
			if (window[o] === void 0) {
				console.warn(`Graupl navigation requires accessible-menu's ${o}. Please make sure to include it on this page.`);
				return;
			}
			const r = s.dataset.grauplMenuOptions ? JSON.parse(s.dataset.grauplMenuOptions.replace(/'/g, "\"")) || {} : {}, l = s.querySelector(".menu"), u = s.querySelector(".navigation-toggle") || null, f = u ? s : null;
			new window[o]({
				menuElement: l,
				menuItemSelector: ".menu-item",
				menuLinkSelector: ".menu-link",
				submenuItemSelector: ".submenu-item",
				submenuToggleSelector: ".submenu-toggle",
				controllerElement: u,
				containerElement: f,
				...t,
				...r
			});
		});
	};
	var ht = class extends O {
		_rootDOMElement = "disclosure";
		_protectedDOMElements = ["controller"];
		_open = new D(!1);
		_locked = new D(!1);
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
		constructor({ disclosureElement: t, controllerElement: e, disclosureContentSelector: i = ".disclosure-content", lockedClass: s = "locked", unlockedClass: o = "unlocked", openClass: r = "show", closeClass: l = "hide", transitionClass: u = "transitioning", transitionDuration: f = 250, openDuration: C = -1, closeDuration: E = -1, openOnFocus: b = !1, closeOnBlur: w = !1, minWidth: g = "", breakpoint: y = "", autoOpen: I = !1, openInsideBreakpoint: x = !1, openOutsideBreakpoint: v = !1, closeInsideBreakpoint: A = !1, closeOutsideBreakpoint: T = !1, lockInsideBreakpoint: $ = !1, lockOutsideBreakpoint: M = !1, unlockInsideBreakpoint: S = !1, unlockOutsideBreakpoint: p = !1, locked: P = !1, mediaQuery: F = "", prefix: dt = "graupl-", key: ut = null, initializeClass: mt = "initializing", initialize: pt = !1 } = {}) {
			super({
				prefix: dt,
				key: ut,
				initializeClass: mt
			}), this._dom.disclosure = t, this._dom.controller = e, this._selectors.content = i, this._classes.locked = s || "", this._classes.unlocked = o || "", this._classes.open = r || "", this._classes.close = l || "", this._classes.transition = u || "", this._durations.transition = f, this._durations.open = C, this._durations.close = E, this._openOnFocus = b, this._closeOnBlur = w, g !== "" && (console.warn("`minWidth` is deprecated and will be removed in a future release. Please set `breakpoint` instead."), y === "" && (y = g)), I && y !== "" && (console.warn("`autoOpen` is deprecated and will be removed in a future release. Please set `openOutsideBreakpoint` and `closeInsideBreakpoint` to `true` instead."), v = I, A = I), this._breakpoint = y || "", this._openInsideBreakpoint = x, this._openOutsideBreakpoint = v, this._closeInsideBreakpoint = A, this._closeOutsideBreakpoint = T, this._lockInsideBreakpoint = $, this._lockOutsideBreakpoint = M, this._unlockInsideBreakpoint = S, this._unlockOutsideBreakpoint = p, this._mediaQueryString = F || "", this._locked.value = P, this._locked.commit(), this._registerEvent("expand", { detail: { disclosure: this } }), this._registerEvent("collapse", { detail: { disclosure: this } }), this._registerEvent("lock", { detail: { disclosure: this } }), this._registerEvent("unlock", { detail: { disclosure: this } }), this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
				requestAnimationFrame(() => {
					this.dom.controller.getAttribute("aria-expanded") === "true" || this.openOutsideBreakpoint && !window.matchMedia(this.mediaQuery).matches || this.openInsideBreakpoint && window.matchMedia(this.mediaQuery).matches ? this.open({ force: !0 }) : this.close({ force: !0 }), this.isLocked || this.lockInsideBreakpoint && window.matchMedia(this.mediaQuery).matches || this.lockOutsideBreakpoint && !window.matchMedia(this.mediaQuery).matches ? this.lock({ force: !0 }) : this.unlock({ force: !0 });
				});
			}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
				const R = n("boolean", {
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
				R.status || (this._errors = [...this._errors, ...R.errors], this._valid = !1);
			}), pt && this.initialize();
		}
		get lockedClass() {
			return this._classes.locked;
		}
		set lockedClass(t) {
			m({ lockedClass: t }), this._classes.locked !== t && (this._classes.locked = t);
		}
		get unlockedClass() {
			return this._classes.unlocked;
		}
		set unlockedClass(t) {
			m({ unlockedClass: t }), this._classes.unlocked !== t && (this._classes.unlocked = t);
		}
		get openClass() {
			return this._classes.open;
		}
		set openClass(t) {
			m({ openClass: t }), this._classes.open !== t && (this._classes.open = t);
		}
		get closeClass() {
			return this._classes.close;
		}
		set closeClass(t) {
			m({ closeClass: t }), this._classes.close !== t && (this._classes.close = t);
		}
		get transitionClass() {
			return this._classes.transition;
		}
		set transitionClass(t) {
			m({ transitionClass: t }), this._classes.transition !== t && (this._classes.transition = t);
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
			this.dom.controller.getAttribute("aria-expanded") !== "true" && this.dom.controller.setAttribute("aria-expanded", "false"), this.dom.controller.setAttribute("aria-controls", this.dom.disclosure.id), L("button", { controller: this.dom.controller }, { shouldThrow: !1 }).status || this.dom.controller.setAttribute("role", "button");
		}
		_setCustomProps() {
			this.dom.disclosure.style.setProperty(`--${this.prefix}disclosure-transition-duration`, `${this.transitionDuration}ms`), this.dom.disclosure.style.setProperty(`--${this.prefix}disclosure-open-transition-duration`, `${this.openDuration}ms`), this.dom.disclosure.style.setProperty(`--${this.prefix}disclosure-close-transition-duration`, `${this.closeDuration}ms`);
		}
		_setDOMElements() {
			this._resetDOMElementType("content"), this._setDOMElementType("content", { context: this.dom.disclosure });
		}
		_reveal({ emit: t = this.isInitialized, transition: e = this.isInitialized } = {}) {
			this.dom.controller.setAttribute("aria-expanded", "true"), e && this.transitionlass !== "" ? (h(this.transitionClass, this.dom.disclosure), requestAnimationFrame(() => {
				c(this.closeClass, this.dom.disclosure), requestAnimationFrame(() => {
					h(this.openClass, this.dom.disclosure), requestAnimationFrame(() => {
						setTimeout(() => {
							c(this.transitionClass, this.dom.disclosure);
						}, this.openDuration);
					});
				});
			})) : (h(this.openClass, this.dom.disclosure), c(this.closeClass, this.dom.disclosure)), this.dom.content.removeAttribute("inert"), t && this._dispatchEvent("expand", this.dom.controller);
		}
		_conceal({ emit: t = this.isInitialized, transition: e = this.isInitialized } = {}) {
			this.dom.controller.setAttribute("aria-expanded", "false"), e && this.transitionClass !== "" ? (h(this.transitionClass, this.dom.disclosure), requestAnimationFrame(() => {
				c(this.openClass, this.dom.disclosure), requestAnimationFrame(() => {
					h(this.closeClass, this.dom.disclosure), requestAnimationFrame(() => {
						setTimeout(() => {
							c(this.transitionClass, this.dom.disclosure), this.dom.content.innert = !0;
						}, this.closeDuration);
					});
				});
			})) : (h(this.closeClass, this.dom.disclosure), c(this.openClass, this.dom.disclosure)), this.dom.content.setAttribute("inert", "true"), t && this._dispatchEvent("collapse", this.dom.controller);
		}
		_lock({ emit: t = this.isInitialized } = {}) {
			h(this.lockedClass, this.dom.disclosure), c(this.unlockedClass, this.dom.disclosure), this.dom.controller.setAttribute("disabled", "true"), t && this._dispatchEvent("lock", this.dom.disclosure);
		}
		_unlock({ emit: t = this.isInitialized } = {}) {
			h(this.unlockedClass, this.dom.disclosure), c(this.lockedClass, this.dom.disclosure), this.dom.controller.removeAttribute("disabled"), t && this._dispatchEvent("unlock", this.dom.disclosure);
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
				this.currentEvent = "mouse", t.button === 0 && (a(t), this.toggle());
			}), this._addEventListener("click", document, (t) => {
				this.focusState !== "self" || !this.closeOnBlur || (this.currentEvent = "mouse", !this.dom.disclosure.contains(t.target) && this.dom.controller !== t.target && this.close());
			});
		}
		_handleKeydown() {
			this._addEventListener("keydown", this.dom.controller, (t) => {
				switch (this.currentEvent = "keyboard", d(t)) {
					case "Space":
					case "Enter":
						a(t);
						break;
				}
			}), this._addEventListener("keydown", this.dom.disclosure, (t) => {
				this.currentEvent = "keyboard", d(t) === "Escape" && a(t);
			});
		}
		_handleKeyup() {
			this._addEventListener("keyup", this.dom.controller, (t) => {
				switch (this.currentEvent = "keyboard", d(t)) {
					case "Space":
					case "Enter":
						this.toggle(), a(t);
						break;
					case "Tab":
						this.openOnFocus && (a(t), this.open());
						break;
				}
			}), this._addEventListener("keyup", this.dom.disclosure, (t) => {
				this.currentEvent = "keyboard", d(t) === "Escape" && (this.close(), a(t));
			});
		}
		open({ force: t = !1, emit: e = this.isInitialized, transition: i = this.isInitialized, preserveState: s = !1 } = {}) {
			this.isOpen && !t || this.isLocked && !t || (this.focusState = "self", this._reveal({
				emit: e,
				transition: i
			}), this._open.value = !0, s || this._open.commit());
		}
		preview({ force: t = !1, emit: e = this.isInitialized, transition: i = this.isInitialized, preserveState: s = !1 } = {}) {
			this.isOpen && !t || this.isLocked && !t || (this.focusState = "none", this._reveal({
				emit: e,
				transition: i
			}), this._open.value = !0, s || this._open.commit());
		}
		close({ force: t = !1, emit: e = this.isInitialized, transition: i = this.isInitialized, preserveState: s = !1 } = {}) {
			!this.isOpen && !t || this.isLocked && !t || (this.focusState = "none", this._conceal({
				emit: e,
				transition: i
			}), this._open.value = !1, s || this._open.commit());
		}
		toggle({ force: t = !1, emit: e = this.isInitialized, transition: i = this.isInitialized, preserveState: s = !1 } = {}) {
			this.isOpen ? this.close({
				force: t,
				emit: e,
				transition: i,
				preserveState: s
			}) : this.open({
				force: t,
				emit: e,
				transition: i,
				preserveState: s
			});
		}
		lock({ force: t = !1, emit: e = this.isInitialized, preserveState: i = !1 } = {}) {
			this.isLocked && !t || (this._locked.value = !0, this._lock({ emit: e }), i || this._locked.commit());
		}
		unlock({ force: t = !1, emit: e = this.isInitialized, preserveState: i = !1 } = {}) {
			!this.isLocked && !t || (this._locked.value = !1, this._unlock({ emit: e }), i || this._locked.commit());
		}
		toggleLock({ force: t = !1, emit: e = this.isInitialized, preserveState: i = !1 } = {}) {
			this.isLocked ? this.unlock({
				force: t,
				emit: e,
				preserveState: i
			}) : this.lock({
				force: t,
				emit: e,
				preserveState: i
			});
		}
	};
	const ct = ({ options: t = {}, context: e = document, disclosureSelector: i = ".disclosure", controllerSelector: s = ".disclosure-toggle" } = {}) => {
		_("graupl-disclosure-generator", i, e).forEach((o) => {
			const r = o.dataset.grauplDisclosureOptions ? JSON.parse(o.dataset.grauplDisclosureOptions.replace(/'/g, "\"")) || {} : {}, l = `${s}[data-graupl-disclosure-target="${o.id}"]`, [u] = _("graupl-disclosure-generator", l, e);
			if (!u) {
				console.warn(`No controller found for disclosure with ID "${o.id}". Please ensure there is an element with the selector "${l}".`), _.remove("graupl-disclosure-generator", o);
				return;
			}
			new ht({
				disclosureElement: o,
				controllerElement: u,
				initialize: !0,
				...t,
				...r
			});
		});
	};
	document.addEventListener("DOMContentLoaded", () => {
		it(), rt(), at(), lt(), ct();
	});
})();

//# sourceMappingURL=graupl.js.map