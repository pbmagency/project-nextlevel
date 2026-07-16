import { t as SectionWrapper } from "./section-wrapper-BGQtDov1.js";
import { useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { X } from "lucide-react";
//#region resources/js/components/sections/SocialProofSection.tsx
var LOGOS = [
	{
		src: "/storage/social/bca-logo-2.webp",
		alt: "BCA"
	},
	{
		src: "/storage/social/unilever-logo.webp",
		alt: "Unilever"
	},
	{
		src: "/storage/social/prudential-logo.webp",
		alt: "Prudential"
	},
	{
		src: "/storage/social/samsung-logo.webp",
		alt: "Samsung"
	},
	{
		src: "/storage/social/axa-logo.webp",
		alt: "AXA"
	},
	{
		src: "/storage/social/citibank-logo.webp",
		alt: "Citibank"
	},
	{
		src: "/storage/social/ibm-logo.webp",
		alt: "IBM"
	},
	{
		src: "/storage/social/ciputra-logo.webp",
		alt: "Ciputra"
	},
	{
		src: "/storage/social/fedex-logo.webp",
		alt: "FedEx"
	},
	{
		src: "/storage/social/bankindonesia-logo-2.webp",
		alt: "Bank Indonesia"
	},
	{
		src: "/storage/social/lippo-logo.webp",
		alt: "Lippo"
	},
	{
		src: "/storage/social/agungland-logo.webp",
		alt: "Agung Land"
	}
];
function SocialProofSection() {
	const [lightbox, setLightbox] = useState(null);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs(SectionWrapper, {
		id: "social-proof-section",
		bg: "dark",
		className: "pt-8 pb-10 lg:py-12",
		children: [/* @__PURE__ */ jsx("p", {
			className: "mb-8 text-center text-sm font-bold uppercase tracking-[0.18em] text-slate-300",
			children: "Dipercaya oleh Perusahaan Nasional & Multinasional Terkemuka"
		}), /* @__PURE__ */ jsx("div", {
			className: "mx-auto grid max-w-4xl grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4",
			children: LOGOS.map(({ src, alt }) => /* @__PURE__ */ jsx("div", {
				className: "flex aspect-5/3 cursor-zoom-in items-center justify-center rounded-xl border border-white/[0.07] bg-white/3 p-3 transition-colors duration-200 hover:bg-white/6",
				onClick: () => setLightbox(src),
				children: /* @__PURE__ */ jsx("img", {
					src,
					alt,
					className: "h-full w-full object-contain opacity-85 transition-opacity duration-200 hover:opacity-100",
					loading: "lazy"
				})
			}, alt))
		})]
	}), lightbox && /* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm",
		onClick: () => setLightbox(null),
		children: [/* @__PURE__ */ jsx("button", {
			onClick: () => setLightbox(null),
			className: "absolute right-4 top-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-slate-700 text-white transition-colors hover:bg-slate-600",
			"aria-label": "Tutup",
			children: /* @__PURE__ */ jsx(X, { size: 18 })
		}), /* @__PURE__ */ jsx("img", {
			src: lightbox,
			alt: "Logo perusahaan",
			className: "max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl",
			onClick: (e) => e.stopPropagation()
		})]
	})] });
}
//#endregion
export { SocialProofSection as default };

//# sourceMappingURL=SocialProofSection-EtBSMlC8.js.map