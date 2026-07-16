import { t as SectionWrapper } from "./section-wrapper-BGQtDov1.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { AlertCircle, CheckCircle2, ChevronDown, X } from "lucide-react";
//#region resources/js/components/sections/ProblemSectionV2.tsx
var PAIN_POINTS = [
	"Prospek yang awalnya antusias, tiba-tiba menghilang setelah penawaran keluar",
	"Presentasi yang berjalan lancar, berakhir dengan \"nanti dikabarin ya\"",
	"Dan parahnya, Anda tidak tahu persis di mana deal Anda bocor"
];
var VALIDATION_LINES = [
	"Anda follow up tepat waktu",
	"Anda presentasi dengan serius",
	"Anda lakukan semua yang seharusnya dilakukan."
];
var WORST_CASE = [
	"Closing rate tetap stagnan",
	"Setiap bulan Anda kembali dari nol dengan beban yang sama",
	"Karir dan income Anda tidak akan pernah mencerminkan seberapa keras Anda sudah berusaha"
];
function ProblemSectionV2() {
	return /* @__PURE__ */ jsx(SectionWrapper, {
		id: "problem-section-v2",
		bg: "dark",
		className: "py-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid gap-4 lg:grid-cols-2 lg:items-start lg:gap-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col rounded-2xl border border-red-500/15 bg-[#0E0E15] p-6 lg:p-8",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "mb-5 text-center text-lg font-black uppercase tracking-widest text-blue-400",
								children: "Satu pertanyaan jujur"
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "mb-5 text-base font-medium leading-relaxed text-slate-200",
								children: [
									"Kapan terakhir kali Anda menutup bulan dan merasa hasilnya",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-white font-bold",
										children: "benar-benar mencerminkan"
									}),
									" ",
									"kerja keras Anda?"
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mb-4 text-sm font-semibold uppercase tracking-widest text-slate-400",
								children: "Anda bukan sales yang malas."
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mb-5 flex flex-col gap-0",
								children: VALIDATION_LINES.map((v) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-3 border-b border-white/5 py-3.5 first:pt-0 last:border-0 last:pb-0",
									children: [/* @__PURE__ */ jsx(CheckCircle2, {
										size: 17,
										className: "mt-0.5 shrink-0 text-blue-400"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-base font-medium leading-relaxed text-slate-200",
										children: v
									})]
								}, v))
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex flex-col rounded-2xl p-6 lg:p-6",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex flex-1 flex-col justify-center gap-5",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400",
								children: "Lalu mulai muncul:"
							}), /* @__PURE__ */ jsx("ul", {
								className: "flex flex-col gap-0",
								children: PAIN_POINTS.map((s) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-3 border-b border-white/5 py-3.5 first:pt-0 last:border-0 last:pb-0",
									children: [/* @__PURE__ */ jsx(AlertCircle, {
										size: 17,
										className: "shrink-0 text-red-500 translate-y-[3px]"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-base font-medium leading-relaxed text-slate-200",
										children: s
									})]
								}, s))
							})] }), /* @__PURE__ */ jsxs("div", {
								className: "rounded-xl border border-white/5 bg-[#0E0E15] p-5 font-semibold",
								children: [/* @__PURE__ */ jsx("p", {
									className: "mb-2 text-base leading-relaxed text-slate-300",
									children: "Lama-lama muncul pertanyaan:"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-base leading-relaxed text-slate-300 italic",
									children: "\"Apa memang segini batas kemampuan saya?\""
								})]
							})]
						})
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-4 lg:mt-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative overflow-hidden rounded-2xl border border-blue-500/20 bg-[#0A0A14] p-6 lg:p-10",
						children: [
							/* @__PURE__ */ jsx("div", {
								"aria-hidden": "true",
								className: "pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl"
							}),
							/* @__PURE__ */ jsx("div", {
								"aria-hidden": "true",
								className: "pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-indigo-600/10 blur-3xl"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-10",
								children: [/* @__PURE__ */ jsx("div", {
									"aria-hidden": "true",
									className: "hidden h-14 w-px shrink-0 bg-white/30 lg:block"
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "mb-1.5 text-lg font-black uppercase tracking-[0.16em] text-blue-400 sm:text-xl",
									children: "Itu bukan kelemahan. Itu sinyal."
								}), /* @__PURE__ */ jsxs("p", {
									className: "text-base leading-relaxed text-slate-300",
									children: [
										"Sinyal bahwa",
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "font-semibold text-white",
											children: "tanpa framework yang tepat"
										}),
										" ",
										"untuk membaca di mana konversi Anda bocor, kerja keras sebanyak apapun tidak akan mengubah angkanya."
									]
								})] })]
							})
						]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-3 grid overflow-hidden rounded-2xl border border-red-500/10 lg:mt-8 lg:grid-cols-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "bg-[#0D0D14] p-6 lg:p-8",
						children: [/* @__PURE__ */ jsxs("h3", {
							className: "text-xl font-black text-white sm:text-2xl",
							children: [
								"Dan kalau ini tidak",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-red-400",
									children: "diperbaiki..."
								})
							]
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-5 flex flex-col gap-0",
							children: WORST_CASE.map((w) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-3 border-b border-white/5 py-3.5 last:border-0",
								children: [/* @__PURE__ */ jsx(X, {
									size: 15,
									className: "shrink-0 text-red-500"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-base font-medium text-slate-300",
									children: w
								})]
							}, w))
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col justify-center border-t border-white/5 bg-[#111118] p-6 lg:border-l lg:border-t-0 lg:p-8",
						children: [
							/* @__PURE__ */ jsxs("p", {
								className: "text-lg font-black text-white sm:text-2xl uppercase",
								children: [
									"Yang kurang",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-blue-400",
										children: "bukan usaha Anda."
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-base font-medium leading-relaxed text-slate-300",
								children: "Yang kurang adalah cara yang tepat untuk melihat di mana seharusnya usaha Anda diarahkan."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-sm font-bold uppercase tracking-widest text-blue-400",
								children: "Dan itu bisa dipelajari dalam 1 hari."
							})
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-4 flex justify-center lg:mt-8",
					children: /* @__PURE__ */ jsxs("a", {
						href: "#solution-section",
						className: "inline-flex flex-col items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-slate-300 transition-colors hover:text-blue-400",
						children: ["LIHAT SOLUSINYA", /* @__PURE__ */ jsx(ChevronDown, {
							size: 16,
							className: "animate-bounce motion-reduce:animate-none"
						})]
					})
				})
			]
		})
	});
}
//#endregion
export { ProblemSectionV2 as default };

//# sourceMappingURL=ProblemSectionV2-oEx8cGPV.js.map