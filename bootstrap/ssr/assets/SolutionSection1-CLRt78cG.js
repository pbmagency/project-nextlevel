import { t as SectionWrapper } from "./section-wrapper-BGQtDov1.js";
import { t as SectionCta } from "./section-cta-D4XNal45.js";
import { useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2, X } from "lucide-react";
//#region resources/js/components/sections/cycle1-test-solution/SolutionSection1.tsx
var GOALS = [
	"Closing rate naik signifikan dalam 30 hari pertama",
	"Percaya diri menghadapi keberatan dan negosiasi berat",
	"Setiap percakapan dengan prospek lebih terarah dan efektif",
	"Tidak lagi bergantung pada Anda untuk closing",
	"Mencetak calon leader sales dari dalam tim Anda"
];
var IMG = "/storage/mentor/haryanto-mengajar_upscaled.webp";
function SolutionSection({ onCtaClick }) {
	const [lightbox, setLightbox] = useState(false);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(SectionWrapper, {
		id: "solution-section",
		bg: "white",
		className: "py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mb-12 text-center",
					children: [/* @__PURE__ */ jsx("p", {
						className: "mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500",
						children: "Solusinya Ada di Sini"
					}), /* @__PURE__ */ jsxs("h2", {
						className: "text-2xl font-black text-white sm:text-3xl lg:text-4xl",
						children: [
							"1 Hari yang Mengubah Cara Tim Anda Menjual",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-blue-400",
								children: "Selamanya"
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14",
					children: [/* @__PURE__ */ jsx("div", {
						className: "group cursor-zoom-in overflow-hidden rounded-3xl shadow-2xl shadow-black/60",
						onClick: () => setLightbox(true),
						children: /* @__PURE__ */ jsx("img", {
							src: IMG,
							alt: "Haryanto Kandani sedang mengajar",
							className: "w-full object-cover object-top transition-transform duration-300 lg:group-hover:scale-105",
							loading: "lazy"
						})
					}), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "mb-2 text-sm font-bold uppercase tracking-widest text-blue-400",
							children: "Sales & Marketing Training"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "font-medium leading-relaxed text-slate-300",
							children: [
								"Bersama",
								" ",
								/* @__PURE__ */ jsx("strong", {
									className: "text-white",
									children: "Coach Haryanto Kandani"
								}),
								", Anda tidak hanya belajar teori. Anda mendapatkan framework yang sudah terbukti selama",
								" ",
								/* @__PURE__ */ jsx("strong", {
									className: "text-white",
									children: "20+ tahun di lapangan"
								}),
								", langsung bisa diterapkan keesokan harinya."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 font-semibold text-white",
							children: "Setelah 1 hari bersama kami,Tim Anda akan mampu:"
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-4 space-y-3",
							children: GOALS.map((goal) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx(CheckCircle2, {
									size: 18,
									className: "mt-0.5 shrink-0 text-blue-500"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-base leading-relaxed text-slate-300",
									children: goal
								})]
							}, goal))
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 px-4 py-3",
							children: /* @__PURE__ */ jsxs("p", {
								className: "text-base font-medium text-blue-300",
								children: [/* @__PURE__ */ jsx("strong", {
									className: "text-blue-300",
									children: "Offline, 1 Hari Intensif"
								}), ". Senin, 27 Juli 2026, Hotel DoubleTree by Hilton Kemayoran, Jakarta Pusat"]
							})
						})
					] })]
				}),
				/* @__PURE__ */ jsx(SectionCta, {
					location: "solution-section",
					onClick: onCtaClick,
					showMentorCta: true,
					socialProof: "Telah melatih 100.000+ Sales • 20 tahun pengalaman"
				})
			]
		})
	}), lightbox && /* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm",
		onClick: () => setLightbox(false),
		children: [/* @__PURE__ */ jsx("button", {
			onClick: () => setLightbox(false),
			className: "absolute right-4 top-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-slate-700 text-white transition-colors hover:bg-slate-600",
			"aria-label": "Tutup gambar",
			children: /* @__PURE__ */ jsx(X, { size: 18 })
		}), /* @__PURE__ */ jsx("img", {
			src: IMG,
			alt: "Haryanto Kandani sedang mengajar",
			className: "max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl",
			onClick: (e) => e.stopPropagation()
		})]
	})] });
}
//#endregion
export { SolutionSection as default };

//# sourceMappingURL=SolutionSection1-CLRt78cG.js.map