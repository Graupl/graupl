(function() {
	function k(t, e, { shouldThrow: s = !0 } = {}) {
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
	function V(t, { shouldThrow: e = !0 } = {}) {
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
	function d(t, { shouldThrow: e = !0 } = {}) {
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
					r[i] = t[i], V(r);
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
	function D(t, e, { shouldThrow: s = !0 } = {}) {
		const i = {
			status: !0,
			errors: []
		};
		try {
			if (n("string", { tagName: t }, { shouldThrow: !0 }).status && k(HTMLElement, e, { shouldThrow: !0 }).status) {
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
	function a(t, e) {
		t === "" || t.length === 0 || (typeof t == "string" ? e.classList.add(t) : e.classList.add(...t));
	}
	function l(t, e) {
		t === "" || t.length === 0 || (typeof t == "string" ? e.classList.remove(t) : e.classList.remove(...t));
	}
	var T = class {
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
	}, j = class R {
		_scope;
		_type = "_default";
		_storage = {};
		_crush = !1;
		constructor({ scope: e, type: s = null, crush: i = !1, initialize: o = !0 } = {}) {
			this._scope = e, this._type = s || "_default", this._crush = i, o && this.initialize();
		}
		initialize() {
			try {
				!this._crush && typeof window[this.scope] < "u" && (k(R, { storage: window[this.scope] }, { shouldThrow: !1 }).status || typeof window[this.scope].storage < "u" && typeof window[this.scope].scope < "u" && typeof window[this.scope].type < "u") && (this._storage = window[this.scope].storage);
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
	}, x = class {
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
			d({ initializeClass: t }), this._classes.initialize !== t && (this._classes.initialize = t);
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
			U({ currentEvent: t }), this._currentEvent !== t && (this._currentEvent = t);
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
			const t = W(this, { shouldThrow: !1 });
			if (t.status || (this._errors = [...this._errors, ...t.errors], this._valid = !1), Object.keys(this._dom).length > 0) {
				const i = {};
				for (const r of Object.keys(this._dom)) Array.isArray(this._dom[r]) ? this._dom[r].forEach((c, m) => {
					i[`${r}Element[${m}]`] = c;
				}) : this._dom[r] !== null && (i[`${r}Element`] = this._dom[r]);
				const o = k(HTMLElement, i, { shouldThrow: !1 });
				o.status || (this._errors = [...this._errors, ...o.errors], this._valid = !1);
			}
			if (Object.keys(this._selectors).length > 0) {
				const i = {};
				for (const r of Object.keys(this._selectors)) i[`${r}Selector`] = this._selectors[r];
				const o = V(i, { shouldThrow: !1 });
				o.status || (this._errors = [...this._errors, ...o.errors], this._valid = !1);
			}
			if (Object.keys(this._classes).length > 0) {
				const i = {};
				for (const r of Object.keys(this._classes)) this._classes[r] !== "" && (i[`${r}Class`] = this._classes[r]);
				const o = d(i, { shouldThrow: !1 });
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
			k(HTMLElement, { context: e });
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
			Z(t, this), k(HTMLElement, { element: e }), e.dispatchEvent(this.events[t]);
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
	}, X = class extends x {
		_rootDOMElement = "item";
		_protectedDOMElements = [
			"toggle",
			"header",
			"content"
		];
		_open = new T(!1);
		_locked = new T(!1);
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
			D("button", { toggle: this.dom.toggle }, { shouldThrow: !1 }).status || this.dom.toggle.setAttribute("role", "button"), this.dom.toggle.getAttribute("aria-expanded") !== "true" && this.dom.toggle.setAttribute("aria-expanded", "false"), this.dom.toggle.setAttribute("aria-controls", this.dom.content.id), D("section", { content: this.dom.content }, { shouldThrow: !1 }).status || this.dom.content.setAttribute("role", "region"), this.dom.content.setAttribute("aria-labelledby", this.dom.toggle.id);
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
	function u(t) {
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
	var Y = class extends x {
		_rootDOMElement = "accordion";
		_optionalKeySupport = !0;
		_expandMultiple = !0;
		_collapseAll = !0;
		_currentChild = 0;
		_storageKey = "accordions";
		_name = "Accordion";
		constructor({ accordionElement: t, accordionItemsSelector: e = ".accordion-item", accordionItemTogglesSelector: s = ".accordion-item-toggle", accordionItemHeadersSelector: i = ".accordion-item-header", accordionItemContentsSelector: o = ".accordion-item-content", accordionControlContainerSelector: r = ".accordion-control-container", accordionControlsSelector: c = ".accordion-control", expandControllerSelector: m = ".expand-all", collapseControllerSelector: f = ".collapse-all", openClass: C = "show", closeClass: E = "hide", transitionClass: w = "transitioning", transitionDuration: b = 300, openDuration: g = -1, closeDuration: y = -1, optionalKeySupport: I = !1, allowExpandMultiple: $ = !0, allowCollapseAll: O = !0, automaticActivation: v = !1, prefix: M = "graupl-", key: S = null, initializeClass: B = "initializing", initialize: L = !1 }) {
			super({
				prefix: M,
				key: S,
				initializeClass: B
			}), this._dom.accordion = t, this._dom.accordionItems = [], this._dom.accordionItemToggles = [], this._dom.accordionItemHeaders = [], this._dom.accordionItemContents = [], this._dom.accordionControlContainer = null, this._dom.accordionControls = [], this._dom.expandController = [], this._dom.collapseController = [], this._selectors.accordionItems = e, this._selectors.accordionItemToggles = s, this._selectors.accordionItemHeaders = i, this._selectors.accordionItemContents = o, this._selectors.accordionControlContainer = r, this._selectors.accordionControls = c, this._selectors.expandController = m, this._selectors.collapseController = f, this._elements.accordionItems = [], this._classes.open = C || "", this._classes.close = E || "", this._classes.transition = w || "", this._durations.transition = b, this._durations.open = g, this._durations.close = y, this._automatic = v, this._optionalKeySupport = I, this._expandMultiple = $, this._collapseAll = O, this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
				this.dom.expandController.length > 0 && !this.allowExpandMultiple && this.dom.expandController.forEach((_) => {
					_.setAttribute("disabled", "disabled");
				}), this.dom.collapseController.length > 0 && !this.allowCollapseAll && this.dom.collapseController.forEach((_) => {
					_.setAttribute("disabled", "disabled");
				});
			}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
				const _ = n("boolean", {
					automaticActivation: this._automatic,
					optionalKeySupport: this._optionalKeySupport,
					allowExpandMultiple: this._expandMultiple,
					allowCollapseAll: this._collapseAll
				});
				_.status || (this._errors = [...this._errors, ..._.errors], this._valid = !1);
			}), L && this.initialize();
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
				const s = new X({
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
					const s = u(e);
					["Space", "Enter"].includes(s) ? (h(e), this.currentEvent = "keyboard") : this.optionalKeySupport && [
						"ArrowDown",
						"ArrowUp",
						"Home",
						"End"
					].includes(s) && (h(e), this.currentEvent = "keyboard");
				});
			}), this.dom.accordionControls.forEach((t) => {
				this._addEventListener("keydown", t, (e) => {
					const s = u(e);
					["Space", "Enter"].includes(s) && (h(e), this.currentEvent = "keyboard");
				});
			});
		}
		_handleKeyup() {
			this.dom.accordionItemToggles.forEach((t) => {
				this._addEventListener("keyup", t, (e) => {
					const s = u(e);
					switch (s) {
						case "Space":
						case "Enter":
							h(e), this.currentEvent = "keyboard", this.currentAccordionItem.toggle();
							break;
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
						case "ArrowUp":
							h(e), this.focusPreviousChild();
							break;
					}
				});
			}), this.dom.expandController.forEach((t) => {
				this._addEventListener("keyup", t, (e) => {
					switch (u(e)) {
						case "Space":
						case "Enter": h(e), this.currentEvent = "keyboard", this.allowExpandMultiple && this.openChildren();
					}
				});
			}), this.dom.collapseController.forEach((t) => {
				this._addEventListener("keyup", t, (e) => {
					switch (u(e)) {
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
	const H = /[\11\12\14\15\40]+/, K = "data-once", tt = document;
	function q(t, e, s) {
		return t[`${e}Attribute`](K, s);
	}
	function z(t) {
		if (typeof t != "string") throw new TypeError("once ID must be a string");
		if (t === "" || H.test(t)) throw new RangeError("once ID must not be empty or contain spaces");
		return `[${K}~="${t}"]`;
	}
	function et(t) {
		if (!(t instanceof Element)) throw new TypeError("The element must be an instance of Element");
		return !0;
	}
	function F(t, e = tt) {
		let s = t;
		if (t === null) s = [];
		else if (t) if (e instanceof Document || e instanceof DocumentFragment || e instanceof Element) typeof t == "string" ? s = e.querySelectorAll(t) : t instanceof Element && (s = [t]);
		else throw new TypeError("Context must be an object of type \"Document\", \"DocumentFragment\", or \"Element\".");
		else throw new TypeError("Selector must not be empty");
		return Array.prototype.slice.call(s);
	}
	function Q(t, e, s) {
		return e.filter((i) => {
			const o = et(i) && i.matches(t);
			return o && s && s(i), o;
		});
	}
	function N(t, { add: e, remove: s }) {
		const i = [];
		q(t, "has") && q(t, "get").trim().split(H).forEach((r) => {
			i.indexOf(r) < 0 && r !== s && i.push(r);
		}), e && i.push(e);
		const o = i.join(" ");
		q(t, o === "" ? "remove" : "set", o);
	}
	function p(t, e, s) {
		return Q(`:not(${z(t)})`, F(e, s), (i) => N(i, { add: t }));
	}
	p.remove = (t, e, s) => Q(z(t), F(e, s), (i) => N(i, { remove: t })), p.filter = (t, e, s) => Q(z(t), F(e, s)), p.find = (t, e) => F(t ? z(t) : `[${K}]`, e);
	const st = (t = {}, e = document, s = ".accordion") => {
		p("graupl-accordion-generator", s, e).forEach((i) => {
			const o = i.dataset.grauplAccordionOptions ? JSON.parse(i.dataset.grauplAccordionOptions.replace(/'/g, "\"")) || {} : {};
			new Y({
				accordionElement: i,
				initialize: !0,
				...t,
				...o
			});
		});
	};
	var it = class extends x {
		_rootDOMElement = "alert";
		_protectedDOMElements = ["controller"];
		_hidden = new T(!1);
		_storageKey = "alerts";
		_name = "Alert";
		constructor({ alertElement: t, controllerElement: e = null, showClass: s = "show", hideClass: i = "hide", transitionClass: o = "transitioning", transitionDuration: r = 150, showDuration: c = -1, hideDuration: m = -1, isHidden: f = !1, prefix: C = "graupl-", key: E = null, initializeClass: w = "initializing", initialize: b = !1 } = {}) {
			super({
				prefix: C,
				key: E,
				initializeClass: w
			}), this._dom.alert = t, this._dom.controller = e, this._classes.show = s || "", this._classes.hide = i || "", this._classes.transition = o || "", this._durations.transition = r, this._durations.show = c, this._durations.hide = m, this._hidden.value = f, this._hidden.commit(), this._registerEvent("show", { detail: { alert: this } }), this._registerEvent("hide", { detail: { alert: this } }), this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
				this.isHidden && this._conceal({
					emit: !1,
					transition: !1
				});
			}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
				const g = n("boolean", { isHidden: this._hidden.value }, { shouldThrow: !1 });
				g.status || (this._errors = [...this._errors, ...g.errors], this._valid = !1);
			}), b && this.initialize();
		}
		get showClass() {
			return this._classes.show;
		}
		set showClass(t) {
			d({ showClass: t }), this._classes.show !== t && (this._classes.show = t);
		}
		get hideClass() {
			return this._classes.hide;
		}
		set hideClass(t) {
			d({ hideClass: t }), this._classes.hide !== t && (this._classes.hide = t);
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
				const e = u(t);
				(e === "Space" || e === "Enter") && h(t);
			});
		}
		_handleKeyup() {
			this.dom.controller !== null && this._addEventListener("keyup", this.dom.controller, (t) => {
				const e = u(t);
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
	const ot = (t = {}, e = document, s = ".alert") => {
		p("graupl-alert-generator", s, e).forEach((i) => {
			const o = i.dataset.grauplAlertOptions ? JSON.parse(i.dataset.grauplAlertOptions.replace(/'/g, "\"")) || {} : {};
			new it({
				alertElement: i,
				controllerElement: i.querySelector(".alert-dismisser") || null,
				initialize: !0,
				...t,
				...o
			});
		});
	};
	var rt = class extends x {
		_rootDOMElement = "carousel";
		_currentItem = 0;
		_autoplay = !0;
		_playText = "Play";
		_pauseText = "Pause";
		_currentAction = "next";
		_storageKey = "carousels";
		_name = "Carousel";
		constructor({ carouselElement: t, carouselItemsSelector: e = ".carousel-item", carouselItemContainerSelector: s = ".carousel-item-container", carouselControlsSelector: i = ".carousel-control", carouselControlContainerSelector: o = ".carousel-control-container", carouselTabsSelector: r = ".carousel-tab", carouselTabContainerSelector: c = ".carousel-tab-container", autoplaySelector: m = ".autoplay", nextSelector: f = ".next", previousSelector: C = ".previous", activeClass: E = "active", previousClass: w = "previous", nextClass: b = "next", playClass: g = "play", pauseClass: y = "pause", autoplay: I = !0, transitionDelay: $ = 1e4, transitionDuration: O = 500, playText: v = "Play", pauseText: M = "Pause", prefix: S = "graupl-", key: B = null, initializeClass: L = "initializing", initialize: _ = !1 }) {
			super({
				prefix: S,
				key: B,
				initializeClass: L
			}), this._dom.carousel = t, this._dom.carouselItems = [], this._dom.carouselItemContainer = null, this._dom.carouselControls = [], this._dom.carouselControlContainer = null, this._dom.carouselTabs = [], this._dom.carouselTabContainer = null, this._dom.autoplay = null, this._dom.next = null, this._dom.previous = null, this._selectors.carouselItems = e, this._selectors.carouselItemContainer = s, this._selectors.carouselControls = i, this._selectors.carouselControlContainer = o, this._selectors.carouselTabs = r, this._selectors.carouselTabContainer = c, this._selectors.autoplay = m, this._selectors.next = f, this._selectors.previous = C, this._classes.active = E || "", this._classes.previous = w || "", this._classes.next = b || "", this._classes.play = g || "", this._classes.pause = y || "", this._autoplay = I, this._delays.transition = $, this._durations.transition = O, this._playText = v || "", this._pauseText = M || "", this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
				this._handleAutoplay(), this.dom.carouselItems.forEach((A) => {
					A.setAttribute("inert", "true");
				}), this.activateFirstItem();
			}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
				const A = n("boolean", { autoplay: this._autoplay }, { shouldThrow: !1 });
				A.status || (this._errors = [...this._errors, ...A.errors], this._valid = !1);
				const P = n("string", {
					playText: this._playText,
					pauseText: this._pauseText
				}, { shouldThrow: !1 });
				P.status || (this._errors = [...this._errors, ...P.errors], this._valid = !1);
			}), _ && this.initialize();
		}
		get activeClass() {
			return this._classes.active;
		}
		set activeClass(t) {
			d({ activeClass: t }), this._classes.active !== t && (this._classes.active = t);
		}
		get previousClass() {
			return this._classes.previous;
		}
		set previousClass(t) {
			d({ previousClass: t }), this._classes.previous !== t && (this._classes.previous = t);
		}
		get nextClass() {
			return this._classes.next;
		}
		set nextClass(t) {
			d({ nextClass: t }), this._classes.next !== t && (this._classes.next = t);
		}
		get playClass() {
			return this._classes.play;
		}
		set playClass(t) {
			d({ playClass: t }), this._classes.play !== t && (this._classes.play = t);
		}
		get pauseClass() {
			return this._classes.pause;
		}
		set pauseClass(t) {
			d({ pauseClass: t }), this._classes.pause !== t && (this._classes.pause = t);
		}
		get currentItem() {
			return this._currentItem;
		}
		set currentItem(t) {
			n("number", { currentItem: t }), t !== this.currentItem && (t < 0 ? this._currentItem = 0 : t >= this.dom.carouselItems.length ? this._currentItem = this.dom.carouselItems.length - 1 : this._currentItem = t, this._dom.carousel.querySelectorAll(this.selectors.carouselTab) && this.dom.carouselItems.forEach((e, s) => {
				e.setAttribute("aria-selected", s === this._currentItem);
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
			n("boolean", { autoplay: t }), this._autoplay !== t && (this._autoplay = t);
		}
		get transitionDelay() {
			return this._delays.transition;
		}
		set transitionDelay(t) {
			n("number", { transitionDelay: t }), t !== this.transitionDelay && t >= 0 && (this._delays.transition = t);
		}
		get transitionDuration() {
			return this._durations.transition;
		}
		set transitionDuration(t) {
			n("number", { transitionDuration: t }), this._durations.transition !== t && t >= 0 && (this._durations.transition = t, this._setTransitionDuration());
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
			!D("section", { carousel: this.dom.carousel }, { shouldThrow: !1 }).status && !this.dom.carousel.getAttribute("role") !== "region" && this.dom.carousel.setAttribute("role", "group"), this._dom.carousel.setAttribute("aria-roledescription", "carousel"), this.dom.carouselTabContainer && this.dom.carouselTabContainer.setAttribute("role", "tablist"), this.dom.carouselTabs.forEach((t, e) => {
				D("button", { tab: t }, { shouldThrow: !1 }).status || t.setAttribute("role", "button"), t.setAttribute("aria-selected", e === 0), t.setAttribute("aria-controls", this.dom.carouselItems[e].id);
			});
		}
		_setCustomProps() {
			this.dom.carousel.style.setProperty(`--${this.prefix}carousel-transition-duration`, `${this.transitionDuration}ms`);
		}
		_handleAutoplay() {
			this.autoplay ? (a(this.pauseClass, this.dom.autoplay), l(this.playClass, this.dom.autoplay), this.dom.autoplay.setAttribute("aria-label", this.pauseText), this.dom.carousel.setAttribute("aria-live", "off"), this._setInterval(() => this.activateNextItem(), this.transitionDelay)) : (a(this.playClass, this.dom.autoplay), l(this.pauseClass, this.dom.autoplay), this.dom.autoplay.setAttribute("aria-label", this.playText), this.dom.carousel.setAttribute("aria-live", "polite"), this._clearInterval());
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
					switch (u(e)) {
						case "Space":
						case "Enter":
							h(e);
							break;
					}
				});
			}), this.dom.carouselTabs.forEach((t) => {
				this._addEventListener("keydown", t, (e) => {
					switch (u(e)) {
						case "Space":
						case "Enter":
							h(e);
							break;
					}
				});
			});
		}
		_handleKeyup() {
			this._addEventListener("keyup", this.dom.next, (t) => {
				switch (u(t)) {
					case "Space":
					case "Enter":
						this.activateNextItem(), h(t);
						break;
				}
			}), this._addEventListener("keyup", this.dom.previous, (t) => {
				switch (u(t)) {
					case "Space":
					case "Enter":
						this.activatePreviousItem(), h(t);
						break;
				}
			}), this._addEventListener("keyup", this.dom.autoplay, (t) => {
				switch (u(t)) {
					case "Space":
					case "Enter":
						this.toggleAutoplay(), h(t);
						break;
				}
			}), this.dom.carouselTabs.forEach((t, e) => {
				this._addEventListener("keyup", t, (s) => {
					switch (u(s)) {
						case "Space":
						case "Enter":
							this.activateItem(e), h(s);
							break;
					}
				});
			});
		}
		activateCurrentItem() {
			a(this.activeClass, this.currentCarouselItem), this.currentCarouselItem.removeAttribute("inert"), this.currentCarouselTab && (this.currentCarouselTab.setAttribute("aria-selected", !0), a(this.activeClass, this.currentCarouselTab));
		}
		deactivateCurrentItem() {
			l(this.activeClass, this.currentCarouselItem), this.currentCarouselItem.setAttribute("inert", !0), this.currentCarouselTab && (this.currentCarouselTab.setAttribute("aria-selected", !1), l(this.activeClass, this.currentCarouselTab));
		}
		activateItem(t) {
			const e = this.currentItem;
			this.dom.carousel.dataset.grauplAction = this._currentAction, this.autoplay && this._clearInterval(), a(this.previousClass, this.currentCarouselItem), a(this.nextClass, this.dom.carouselItems[t]), requestAnimationFrame(() => {
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
	const nt = (t = {}, e = document, s = ".carousel") => {
		p("graupl-carousel-generator", s, e).forEach((i) => {
			const o = i.dataset.grauplCarouselOptions ? JSON.parse(i.dataset.grauplCarouselOptions.replace(/'/g, "\"")) || {} : {};
			new rt({
				carouselElement: i,
				initialize: !0,
				...t,
				...o
			});
		});
	}, at = (t = {}, e = document, s = ".navigation") => {
		p("graupl-navigation-generator", s, e).forEach((i) => {
			const o = i.dataset.grauplMenuType || DisclosureMenu;
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
	var lt = class extends x {
		_rootDOMElement = "disclosure";
		_protectedDOMElements = ["controller"];
		_open = new T(!1);
		_locked = new T(!1);
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
		constructor({ disclosureElement: t, controllerElement: e, disclosureContentSelector: s = ".disclosure-content", lockedClass: i = "locked", unlockedClass: o = "unlocked", openClass: r = "show", closeClass: c = "hide", transitionClass: m = "transitioning", transitionDuration: f = 250, openDuration: C = -1, closeDuration: E = -1, openOnFocus: w = !1, closeOnBlur: b = !1, minWidth: g = "", breakpoint: y = "", autoOpen: I = !1, openInsideBreakpoint: $ = !1, openOutsideBreakpoint: O = !1, closeInsideBreakpoint: v = !1, closeOutsideBreakpoint: M = !1, lockInsideBreakpoint: S = !1, lockOutsideBreakpoint: B = !1, unlockInsideBreakpoint: L = !1, unlockOutsideBreakpoint: _ = !1, locked: A = !1, mediaQuery: P = "", prefix: ct = "graupl-", key: dt = null, initializeClass: ut = "initializing", initialize: mt = !1 } = {}) {
			super({
				prefix: ct,
				key: dt,
				initializeClass: ut
			}), this._dom.disclosure = t, this._dom.controller = e, this._selectors.content = s, this._classes.locked = i || "", this._classes.unlocked = o || "", this._classes.open = r || "", this._classes.close = c || "", this._classes.transition = m || "", this._durations.transition = f, this._durations.open = C, this._durations.close = E, this._openOnFocus = w, this._closeOnBlur = b, g !== "" && (console.warn("`minWidth` is deprecated and will be removed in a future release. Please set `breakpoint` instead."), y === "" && (y = g)), I && y !== "" && (console.warn("`autoOpen` is deprecated and will be removed in a future release. Please set `openOutsideBreakpoint` and `closeInsideBreakpoint` to `true` instead."), O = I, v = I), this._breakpoint = y || "", this._openInsideBreakpoint = $, this._openOutsideBreakpoint = O, this._closeInsideBreakpoint = v, this._closeOutsideBreakpoint = M, this._lockInsideBreakpoint = S, this._lockOutsideBreakpoint = B, this._unlockInsideBreakpoint = L, this._unlockOutsideBreakpoint = _, this._mediaQueryString = P || "", this._locked.value = A, this._locked.commit(), this._registerEvent("expand", { detail: { disclosure: this } }), this._registerEvent("collapse", { detail: { disclosure: this } }), this._registerEvent("lock", { detail: { disclosure: this } }), this._registerEvent("unlock", { detail: { disclosure: this } }), this._addEventListener("grauplComponentInitialize", this.rootDOMElement, () => {
				requestAnimationFrame(() => {
					this.dom.controller.getAttribute("aria-expanded") === "true" || this.openOutsideBreakpoint && !window.matchMedia(this.mediaQuery).matches || this.openInsideBreakpoint && window.matchMedia(this.mediaQuery).matches ? this.open() : this.close(), (this.isLocked || this.lockInsideBreakpoint && window.matchMedia(this.mediaQuery).matches || this.lockOutsideBreakpoint && !window.matchMedia(this.mediaQuery).matches) && this.lock();
				});
			}), this._addEventListener("grauplComponentValidate", this.rootDOMElement, () => {
				const G = n("boolean", {
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
				G.status || (this._errors = [...this._errors, ...G.errors], this._valid = !1);
			}), mt && this.initialize();
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
			this.dom.controller.getAttribute("aria-expanded") !== "true" && this.dom.controller.setAttribute("aria-expanded", "false"), this.dom.controller.setAttribute("aria-controls", this.dom.disclosure.id), D("button", { controller: this.dom.controller }, { shouldThrow: !1 }).status || this.dom.controller.setAttribute("role", "button");
		}
		_setCustomProps() {
			this.dom.disclosure.style.setProperty(`--${this.prefix}disclosure-transition-duration`, `${this.transitionDuration}ms`), this.dom.disclosure.style.setProperty(`--${this.prefix}disclosure-open-transition-duration`, `${this.openDuration}ms`), this.dom.disclosure.style.setProperty(`--${this.prefix}disclosure-close-transition-duration`, `${this.closeDuration}ms`);
		}
		_setDOMElements() {
			this._resetDOMElementType("content"), this._setDOMElementType("content", { context: this.dom.disclosure });
		}
		_reveal({ emit: t = this.isInitialized, transition: e = this.isInitialized } = {}) {
			this.dom.controller.setAttribute("aria-expanded", "true"), e && this.transitionlass !== "" ? (a(this.transitionClass, this.dom.disclosure), requestAnimationFrame(() => {
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
							l(this.transitionClass, this.dom.disclosure), this.dom.content.innert = !0;
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
				switch (this.currentEvent = "keyboard", u(t)) {
					case "Space":
					case "Enter":
						h(t);
						break;
				}
			}), this._addEventListener("keydown", this.dom.disclosure, (t) => {
				this.currentEvent = "keyboard", u(t) === "Escape" && h(t);
			});
		}
		_handleKeyup() {
			this._addEventListener("keyup", this.dom.controller, (t) => {
				switch (this.currentEvent = "keyboard", u(t)) {
					case "Space":
					case "Enter":
						this.toggle(), h(t);
						break;
					case "Tab":
						this.openOnFocus && (h(t), this.open());
						break;
				}
			}), this._addEventListener("keyup", this.dom.disclosure, (t) => {
				this.currentEvent = "keyboard", u(t) === "Escape" && (this.close(), h(t));
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
	const ht = ({ options: t = {}, context: e = document, disclosureSelector: s = ".disclosure", controllerSelector: i = ".disclosure-toggle" } = {}) => {
		p("graupl-disclosure-generator", s, e).forEach((o) => {
			const r = o.dataset.grauplDisclosureOptions ? JSON.parse(o.dataset.grauplDisclosureOptions.replace(/'/g, "\"")) || {} : {}, c = `${i}[data-graupl-disclosure-target="${o.id}"]`, [m] = p("graupl-disclosure-generator", c, e);
			if (!m) {
				console.warn(`No controller found for disclosure with ID "${o.id}". Please ensure there is an element with the selector "${c}".`), p.remove("graupl-disclosure-generator", o);
				return;
			}
			new lt({
				disclosureElement: o,
				controllerElement: m,
				initialize: !0,
				...t,
				...r
			});
		});
	};
	document.addEventListener("DOMContentLoaded", () => {
		st(), ot(), nt(), at(), ht();
	});
})();

//# sourceMappingURL=graupl.js.map