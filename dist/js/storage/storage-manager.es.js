function c(a, t, { shouldThrow: r = !0 } = {}) {
	const e = {
		status: !0,
		errors: []
	};
	try {
		if (typeof t != "object") throw new TypeError(`Elements given to isValidInstance() must be inside of an object. "${typeof t}" given.`);
		for (const s in t) try {
			if (!(t[s] instanceof a)) {
				const o = typeof t[s];
				throw new TypeError(`${s} must be an instance of ${a.name}. "${o}" given.`);
			}
		} catch (o) {
			e.status = !1, e.errors.push(o);
		}
	} catch (s) {
		e.status = !1, e.errors.push(s);
	}
	if (r && !e.status) throw e.errors[0];
	return e;
}
function i(a, t, { shouldThrow: r = !0 } = {}) {
	const e = {
		status: !0,
		errors: []
	};
	try {
		if (typeof t != "object") throw new TypeError(`Values given to isValidType() must be inside of an object. "${typeof t}" given.`);
		for (const s in t) try {
			const o = typeof t[s];
			if (o !== a) throw new TypeError(`${s} must be a ${a}. "${o}" given.`);
		} catch (o) {
			e.status = !1, e.errors.push(o);
		}
	} catch (s) {
		e.status = !1, e.errors.push(s);
	}
	if (r && !e.status) throw e.errors[0];
	return e;
}
var g = class h {
	_scope;
	_type = "_default";
	_storage = {};
	_crush = !1;
	constructor({ scope: t, type: r = null, crush: e = !1, initialize: s = !0 } = {}) {
		this._scope = t, this._type = r || "_default", this._crush = e, s && this.initialize();
	}
	initialize() {
		try {
			!this._crush && typeof window[this.scope] < "u" && (c(h, { storage: window[this.scope] }, { shouldThrow: !1 }).status || typeof window[this.scope].storage < "u" && typeof window[this.scope].scope < "u" && typeof window[this.scope].type < "u") && (this._storage = window[this.scope].storage);
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
		const e = i("string", { type: t });
		if (!e.status) throw new Error(`StorageManager (${this.scope}): ${e.message}`);
		if (!this.storage[t]) throw new Error(`StorageManager (${this.scope}): Type "${t}" is not initialized.`);
		if (r !== null) {
			const s = i("string", { key: r });
			if (!s.status) throw new Error(`StorageManager (${this.scope}): ${s.message}`);
			return this.storage[t][r];
		}
		return this.storage[t];
	}
	set({ type: t = this.type, key: r = null, data: e = {} } = {}) {
		const s = i("string", { type: t }), o = i("object", { data: e });
		if (!s.status) throw new Error(`StorageManager (${this.scope}): ${s.message}`);
		if (!o.status) throw new Error(`StorageManager (${this.scope}): ${o.message}`);
		if (r !== null) {
			const n = i("string", { key: r });
			if (!n.status) throw new Error(`StorageManager (${this.scope}): ${n.message}`);
			this._storage[t] || (this._storage[t] = {}), this._storage[t][r] = e;
		} else this._storage[t] = e;
	}
	clear({ type: t = this.type, key: r = null } = {}) {
		const e = i("string", { type: t });
		if (!e.status) throw new Error(`StorageManager (${this.scope}): ${e.message}`);
		if (r !== null) {
			const s = i("string", { key: r });
			if (!s.status) throw new Error(`StorageManager (${this.scope}): ${s.message}`);
			delete this.storage[t][r];
		} else delete this.storage[t];
	}
	dispose() {
		delete this._storage, delete this;
	}
};
export { g as default };

//# sourceMappingURL=storage-manager.es.js.map