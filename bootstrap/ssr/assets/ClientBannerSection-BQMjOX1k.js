import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/sections/ClientBannerSection.tsx
var LOGO_SRC = "/storage/misc/logo-perusahaan.webp";
function ClientBannerSection() {
	return /* @__PURE__ */ jsxs("section", {
		className: "bg-[#0A0A0F] py-12",
		id: "client-banner",
		children: [/* @__PURE__ */ jsx("p", {
			className: "mb-6 px-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-slate-300",
			children: "Dipercaya oleh 100+ perusahaan dari berbagai industri"
		}), /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-5xl px-4",
			children: /* @__PURE__ */ jsx("img", {
				src: LOGO_SRC,
				alt: "Logo perusahaan klien Next Level Training & Motivation",
				className: "w-full rounded-2xl object-contain",
				style: { maxHeight: "320px" },
				loading: "lazy"
			})
		})]
	});
}
//#endregion
export { ClientBannerSection as default };

//# sourceMappingURL=ClientBannerSection-BQMjOX1k.js.map