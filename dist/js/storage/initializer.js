(function() {
	function u(n, t, { shouldThrow: r = !0 } = {}) {
		const s = {
			status: !0,
			errors: []
		};
		try {
			if (typeof t != "object") throw new TypeError(`Elements given to isValidInstance() must be inside of an object. "${typeof t}" given.`);
			for (const e in t) try {
				if (!(t[e] instanceof n)) {
					const o = typeof t[e];
					throw new TypeError(`${e} must be an instance of ${n.name}. "${o}" given.`);
				}
			} catch (o) {
				s.status = !1, s.errors.push(o);
			}
		} catch (e) {
			s.status = !1, s.errors.push(e);
		}
		if (r && !s.status) throw s.errors[0];
		return s;
	}
	function i(n, t, { shouldThrow: r = !0 } = {}) {
		const s = {
			status: !0,
			errors: []
		};
		try {
			if (typeof t != "object") throw new TypeError(`Values given to isValidType() must be inside of an object. "${typeof t}" given.`);
			for (const e in t) try {
				const o = typeof t[e];
				if (o !== n) throw new TypeError(`${e} must be a ${n}. "${o}" given.`);
			} catch (o) {
				s.status = !1, s.errors.push(o);
			}
		} catch (e) {
			s.status = !1, s.errors.push(e);
		}
		if (r && !s.status) throw s.errors[0];
		return s;
	}
	var c = class h {
		_scope;
		_type = "_default";
		_storage = {};
		_crush = !1;
		constructor({ scope: t, type: r = null, crush: s = !1, initialize: e = !0 } = {}) {
			this._scope = t, this._type = r || "_default", this._crush = s, e && this.initialize();
		}
		initialize() {
			try {
				!this._crush && typeof window[this.scope] < "u" && (u(h, { storage: window[this.scope] }, { shouldThrow: !1 }).status || typeof window[this.scope].storage < "u" && typeof window[this.scope].scope < "u" && typeof window[this.scope].type < "u") && (this._storage = window[this.scope].storage);
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
			i("string", { type: t }) && (this._type = t);
		}
		get storage() {
			return this._storage;
		}
		get({ type: t = this.type, key: r = null } = {}) {
			const s = i("string", { type: t }, { shouldThrow: !1 });
			if (!s.status) throw s.errors[0];
			if (!this.storage[t]) throw new Error(`StorageManager (${this.scope}): Type "${t}" is not initialized.`);
			if (r !== null) {
				const e = i("string", { key: r }, { shouldThrow: !1 });
				if (!e.status) throw e.errors[0];
				return this.storage[t][r];
			}
			return this.storage[t];
		}
		set({ type: t = this.type, key: r = null, data: s = {} } = {}) {
			const e = i("string", { type: t }, { shouldThrow: !1 }), o = i("object", { data: s }, { shouldThrow: !1 });
			if (!e.status) throw e.errors[0];
			if (!o.status) throw o.errors[0];
			if (r !== null) {
				const a = i("string", { key: r }, { shouldThrow: !1 });
				if (!a.status) throw a.errors[0];
				this._storage[t] || (this._storage[t] = {}), this._storage[t][r] = s;
			} else this._storage[t] = s;
		}
		clear({ type: t = this.type, key: r = null } = {}) {
			const s = i("string", { type: t }, { shouldThrow: !1 });
			if (!s.status) throw s.errors[0];
			if (r !== null) {
				const e = i("string", { key: r }, { shouldThrow: !1 });
				if (!e.status) throw e.errors[0];
				delete this.storage[t][r];
			} else delete this.storage[t];
		}
		dispose() {
			typeof window < "u" && window[this.scope] === this && delete window[this.scope], delete this._storage;
		}
	};
	document.addEventListener("readystatechange", () => {
		document.readyState === "interactive" && new c({
			scope: "GrauplStorage",
			crush: !0
		});
	});
})();

//# sourceMappingURL=initializer.js.map