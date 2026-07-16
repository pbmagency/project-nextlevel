import { t as SectionWrapper } from "./section-wrapper-BGQtDov1.js";
import { t as SectionCta } from "./section-cta-D4XNal45.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2 } from "lucide-react";
//#region resources/js/components/sections/BenefitSection.tsx
var MATERI = [
	{
		title: "Success Mindset & Fighting Spirit",
		desc: "Membangun mental juara dan semangat pantang menyerah sebagai sales profesional"
	},
	{
		title: "The Psychology of Selling",
		desc: "Memahami psikologi di balik keputusan konsumen dalam membeli produk"
	},
	{
		title: "Teknik Negosiasi",
		desc: "Seni bernegosiasi agar kesepakatan berjalan sukses tanpa mengorbankan margin profit"
	},
	{
		title: "Handling Objection",
		desc: "Strategi mematahkan berbagai alasan, keraguan, dan keberatan dari calon pembeli"
	},
	{
		title: "Closing the Sales",
		desc: "Metode taktis mengeksekusi penutupan penjualan secara cepat dan instan"
	},
	{
		title: "Hypno Selling",
		desc: "Teknik komunikasi penjualan yang mempengaruhi keputusan pembelian secara natural"
	}
];
function BenefitSection({ onCtaClick }) {
	return /* @__PURE__ */ jsxs(SectionWrapper, {
		id: "benefit-section",
		bg: "slate",
		className: "py-20",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ jsx("p", {
					className: "mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500",
					children: "Materi Training"
				}), /* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-black text-white sm:text-3xl lg:text-4xl",
					children: "6 Pilar Utama untuk Menguasai Pasar & Menutup Penjualan"
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto mt-12 max-w-4xl",
				children: /* @__PURE__ */ jsx("ul", {
					className: "grid gap-3 sm:grid-cols-2",
					children: MATERI.map((item) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-start gap-3 rounded-xl border border-white/5 bg-[#0A0A0F] px-4 py-3.5 text-base font-medium leading-relaxed",
						children: [/* @__PURE__ */ jsx(CheckCircle2, {
							size: 17,
							className: "mt-0.5 shrink-0 text-blue-500"
						}), /* @__PURE__ */ jsxs("span", { children: [
							/* @__PURE__ */ jsxs("span", {
								className: "font-semibold text-white",
								children: [item.title, ":"]
							}),
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-slate-300",
								children: item.desc
							})
						] })]
					}, item.title))
				})
			}),
			/* @__PURE__ */ jsx(SectionCta, {
				location: "benefit",
				onClick: onCtaClick,
				dark: true,
				socialProof: "Telah melatih 100.000+ Sales • 20 tahun pengalaman"
			})
		]
	});
}
//#endregion
export { BenefitSection as default };

//# sourceMappingURL=BenefitSection-C43WkXh0.js.map