const p = /[\11\12\14\15\40]+/, a = "data-once", b = document;
function l(e, t, n) {
	return e[`${t}Attribute`](a, n);
}
function s(e) {
	if (typeof e != "string") throw new TypeError("once ID must be a string");
	if (e === "" || p.test(e)) throw new RangeError("once ID must not be empty or contain spaces");
	return `[${a}~="${e}"]`;
}
function h(e) {
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
		const o = h(r) && r.matches(e);
		return o && n && n(r), o;
	});
}
function g(e, { add: t, remove: n }) {
	const r = [];
	l(e, "has") && l(e, "get").trim().split(p).forEach((u) => {
		r.indexOf(u) < 0 && u !== n && r.push(u);
	}), t && r.push(t);
	const o = r.join(" ");
	l(e, o === "" ? "remove" : "set", o);
}
function i(e, t, n) {
	return m(`:not(${s(e)})`, c(t, n), (r) => g(r, { add: e }));
}
i.remove = (e, t, n) => m(s(e), c(t, n), (r) => g(r, { remove: e })), i.filter = (e, t, n) => m(s(e), c(t, n)), i.find = (e, t) => c(e ? s(e) : `[${a}]`, t);
const E = (e = {}, t = document, n = ".navigation") => {
	i("graupl-navigation-generator", n, t).forEach((r) => {
		const o = r.dataset.grauplMenuType || DisclosureMenu;
		if (window[o] === void 0) {
			console.warn(`Graupl navigation requires accessible-menu's ${o}. Please make sure to include it on this page.`);
			return;
		}
		const u = r.dataset.grauplMenuOptions ? JSON.parse(r.dataset.grauplMenuOptions.replace(/'/g, "\"")) || {} : {}, w = r.querySelector(".menu"), f = r.querySelector(".navigation-toggle") || null, y = f ? r : null;
		new window[o]({
			menuElement: w,
			menuItemSelector: ".menu-item",
			menuLinkSelector: ".menu-link",
			submenuItemSelector: ".submenu-item",
			submenuToggleSelector: ".submenu-toggle",
			controllerElement: f,
			containerElement: y,
			...e,
			...u
		});
	});
};
module.exports = E;

//# sourceMappingURL=navigation.cjs.js.map