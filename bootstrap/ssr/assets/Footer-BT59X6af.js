import { s as NextLevelLogo } from "./Navbar-BRDCbq9k.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Clock, MapPin } from "lucide-react";
//#region resources/js/components/sections/Footer.tsx
var SOCIALS = [
	{
		label: "Instagram",
		href: "https://www.instagram.com/haryanto.kandani/",
		icon: /* @__PURE__ */ jsx("svg", {
			viewBox: "0 0 24 24",
			fill: "currentColor",
			className: "h-4 w-4",
			children: /* @__PURE__ */ jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" })
		})
	},
	{
		label: "YouTube",
		href: "https://www.youtube.com/channel/UCflwfGCK2N3cuYvhO6aLX5A",
		icon: /* @__PURE__ */ jsx("svg", {
			viewBox: "0 0 24 24",
			fill: "currentColor",
			className: "h-4 w-4",
			children: /* @__PURE__ */ jsx("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" })
		})
	},
	{
		label: "TikTok",
		href: "https://www.tiktok.com/@haryantokandani",
		icon: /* @__PURE__ */ jsx("svg", {
			viewBox: "0 0 24 24",
			fill: "currentColor",
			className: "h-4 w-4",
			children: /* @__PURE__ */ jsx("path", { d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" })
		})
	}
];
var EVENT_DETAILS = [{
	Icon: MapPin,
	text: "Hotel DoubleTree by Hilton Kemayoran – Jakarta Pusat"
}, {
	Icon: Clock,
	text: "Senin, 27 Juli 2026, 09.30 – 16.00 WIB"
}];
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ jsx("footer", {
		className: "bg-slate-900 text-slate-300",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-10 sm:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(NextLevelLogo, { className: "h-10 w-44" }),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-base font-medium leading-relaxed",
						children: "Spesialis pelatihan Sales & Marketing. Menginspirasi lebih dari 1.000.000 orang di 30+ kota besar Indonesia."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-5 flex items-center gap-3",
						children: SOCIALS.map((s) => /* @__PURE__ */ jsx("a", {
							href: s.href,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": s.label,
							className: "flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition-colors hover:border-slate-500 hover:text-white",
							children: s.icon
						}, s.label))
					})
				] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "mb-4 text-sm font-semibold uppercase tracking-widest text-slate-300",
					children: "Detail Event"
				}), /* @__PURE__ */ jsx("ul", {
					className: "space-y-3",
					children: EVENT_DETAILS.map(({ Icon, text }) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-start gap-2.5 text-base font-medium",
						children: [/* @__PURE__ */ jsx(Icon, {
							size: 17,
							className: "mt-0.5 shrink-0 text-slate-400"
						}), /* @__PURE__ */ jsx("span", { children: text })]
					}, text))
				})] })]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-10 border-t border-slate-800 pt-8 text-center text-sm font-medium text-slate-400",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					year,
					" Next Level. All rights reserved."
				] }), /* @__PURE__ */ jsx("p", {
					className: "mt-1",
					children: "Sales & Marketing Skills Training oleh Coach Haryanto Kandani"
				})]
			})]
		})
	});
}
//#endregion
export { Footer as default };

//# sourceMappingURL=Footer-BT59X6af.js.map