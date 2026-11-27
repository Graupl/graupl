var NavigationGenerator = (function() {
	const f = /[\11\12\14\15\40]+/, a = "data-once", b = document;
	function l(e, t, n) {
		return e[`${t}Attribute`](a, n);
	}
	function s(e) {
		if (typeof e != "string") throw new TypeError("once ID must be a string");
		if (e === "" || f.test(e)) throw new RangeError("once ID must not be empty or contain spaces");
		return `[${a}~="${e}"]`;
	}
	function w(e) {
		if (!(e instanceof Element)) throw new TypeError("The element must be an instance of Element");
		return !0;
	}
	function c(e, t = b) {
		let n = e;
		if (e === null) n = [];
		else if (e) if (t instanceof Document || t instanceof DocumentFragment || t instanceof Element) typeof e == "string" ? n = t.querySelectorAll(e) : e instanceof Element && (n = [e]);
		else throw new TypeError("Context must be an object of type \"Document\", \"DocumentFragment\", or \"Element\".");
		else throw new TypeError("Selector must not be empty");
		return Array.prototype.slice.call(n);
	}
	function m(e, t, n) {
		return t.filter((r) => {
			const o = w(r) && r.matches(e);
			return o && n && n(r), o;
		});
	}
	function g(e, { add: t, remove: n }) {
		const r = [];
		l(e, "has") && l(e, "get").trim().split(f).forEach((u) => {
			r.indexOf(u) < 0 && u !== n && r.push(u);
		}), t && r.push(t);
		const o = r.join(" ");
		l(e, o === "" ? "remove" : "set", o);
	}
	function i(e, t, n) {
		return m(`:not(${s(e)})`, c(t, n), (r) => g(r, { add: e }));
	}
	return i.remove = (e, t, n) => m(s(e), c(t, n), (r) => g(r, { remove: e })), i.filter = (e, t, n) => m(s(e), c(t, n)), i.find = (e, t) => c(e ? s(e) : `[${a}]`, t), ({ options: e = {}, context: t = document, selector: n = ".navigation" } = {}) => {
		i("graupl-navigation-generator", n, t).forEach((r) => {
			const o = r.dataset.grauplMenuType || "DisclosureMenu";
			if (window[o] === void 0) {
				console.warn(`Graupl navigation requires accessible-menu's ${o}. Please make sure to include it on this page.`);
				return;
			}
			const u = r.dataset.grauplMenuOptions ? JSON.parse(r.dataset.grauplMenuOptions.replace(/'/g, "\"")) || {} : {}, y = r.querySelector(".menu"), p = r.querySelector(".navigation-toggle") || null, h = p ? r : null;
			new window[o]({
				menuElement: y,
				menuItemSelector: ".menu-item",
				menuLinkSelector: ".menu-link",
				submenuItemSelector: ".submenu-item",
				submenuToggleSelector: ".submenu-toggle",
				menuItemsSelector: ".menu-item",
				menuLinksSelector: ".menu-link",
				submenuItemsSelector: ".submenu-item",
				submenuTogglesSelector: ".submenu-toggle",
				controllerElement: p,
				containerElement: h,
				...e,
				...u
			});
		});
	};
})();

//# sourceMappingURL=navigation.iife.js.map