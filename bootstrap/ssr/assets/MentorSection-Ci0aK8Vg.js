import { t as SectionWrapper } from "./section-wrapper-BGQtDov1.js";
import { useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { BookOpen, Building2, CheckCircle2, Play, Star, Users, X } from "lucide-react";
//#region resources/js/components/sections/MentorSection.tsx
var STATS = [
	{
		icon: Users,
		value: "1.000.000+",
		label: "Orang Diinspirasi"
	},
	{
		icon: Building2,
		value: "100.000+",
		label: "Sales Telah Dilatih"
	},
	{
		icon: Star,
		value: "20+ Tahun",
		label: "Pengalaman di Lapangan"
	},
	{
		icon: BookOpen,
		value: "130+",
		label: "Angkatan Training"
	}
];
var HIGHLIGHTS = [
	"Praktisi Sales & Marketing lebih dari 20 tahun",
	"Melayani ratusan klien perusahaan nasional, multinasional, BUMN & pemerintahan",
	"Menginspirasi lebih dari 1.000.000 orang offline & online",
	"Coaching atlit PON & Asian Games, berhasil meraih medali emas"
];
var NOTABLE_CLIENTS = [
	"BCA",
	"Unilever",
	"Prudential",
	"Samsung",
	"AXA",
	"Citibank",
	"ExxonMobil",
	"IBM"
];
var VIDEO_ID = "irx8z27RrgA";
function MentorSection() {
	const [videoOpen, setVideoOpen] = useState(false);
	const [lightboxSrc, setLightboxSrc] = useState(null);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsxs(SectionWrapper, {
			id: "mentor-section",
			bg: "white",
			className: "py-20",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [/* @__PURE__ */ jsx("p", {
						className: "mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400",
						children: "Fasilitator"
					}), /* @__PURE__ */ jsx("h2", {
						className: "text-3xl font-black text-white sm:text-4xl",
						children: "Belajar Langsung dari Praktisinya"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-12 grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-12",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-center",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: "/storage/mentor/hardyanto.webp",
								alt: "Haryanto Kandani - Achievement Motivator",
								className: "w-full max-w-xs cursor-pointer object-contain drop-shadow-xl lg:max-w-none",
								onClick: () => setLightboxSrc("/storage/mentor/hardyanto.webp")
							}),
							/* @__PURE__ */ jsx("span", {
								className: "mt-3 inline-block rounded-full border border-blue-600/30 px-4 py-1.5 text-sm font-semibold text-blue-300",
								children: "Achievement Motivator"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "mt-2 inline-block rounded-full border border-blue-600/30 px-4 py-1.5 text-sm font-semibold text-blue-300",
								children: "Sales & Leadership Coach"
							}),
							/* @__PURE__ */ jsxs("button", {
								onClick: () => setVideoOpen(true),
								className: "mt-3 inline-flex cursor-pointer items-center gap-2.5 rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-400 shadow-sm transition-colors hover:bg-blue-500/20",
								children: [/* @__PURE__ */ jsx(Play, {
									size: 15,
									className: "fill-current text-blue-400"
								}), "Tonton Video Profil"]
							})
						]
					}), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("h3", {
							className: "text-3xl font-black text-white lg:text-4xl",
							children: "Haryanto Kandani"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 font-semibold text-blue-400",
							children: "Achievement Motivator, Founder Next Level Training & Motivation"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-4 text-base font-medium leading-relaxed text-slate-300",
							children: [
								"Dipercaya oleh",
								" ",
								/* @__PURE__ */ jsx("strong", {
									className: "text-white",
									children: NOTABLE_CLIENTS.join(", ")
								}),
								" ",
								"serta ratusan perusahaan nasional, multinasional, dan BUMN."
							]
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-6 grid gap-4 sm:grid-cols-2",
							children: HIGHLIGHTS.map((item) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2 text-base font-medium leading-relaxed text-slate-200",
								children: [/* @__PURE__ */ jsx(CheckCircle2, {
									size: 17,
									className: "mt-0.5 shrink-0 text-blue-400"
								}), item]
							}, item))
						})
					] })]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4",
					children: STATS.map(({ icon: Icon, value, label }) => /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-center rounded-2xl border border-white/5 bg-[#111118] p-4 text-center",
						children: [
							/* @__PURE__ */ jsx(Icon, {
								size: 20,
								className: "text-blue-500"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-lg font-black text-white sm:text-xl",
								children: value
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm font-medium leading-snug text-slate-300",
								children: label
							})
						]
					}, label))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-12",
					children: [/* @__PURE__ */ jsx("p", {
						className: "mb-4 text-center text-sm font-semibold uppercase tracking-widest text-slate-300",
						children: "Dokumentasi Event"
					}), /* @__PURE__ */ jsx("div", {
						className: "overflow-hidden rounded-2xl",
						children: /* @__PURE__ */ jsx("img", {
							src: "/storage/misc/offline-session.webp",
							alt: "Dokumentasi seminar dan training Haryanto Kandani di berbagai kota",
							className: "w-full cursor-pointer object-cover",
							loading: "lazy",
							onClick: () => setLightboxSrc("/storage/misc/offline-session.webp")
						})
					})]
				})
			]
		}),
		videoOpen && /* @__PURE__ */ jsx("div", {
			className: "fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm",
			onClick: () => setVideoOpen(false),
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative w-full max-w-3xl",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ jsx("button", {
					onClick: () => setVideoOpen(false),
					className: "absolute -right-3 -top-3 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-700 text-white transition-colors hover:bg-slate-600",
					"aria-label": "Tutup video",
					children: /* @__PURE__ */ jsx(X, { size: 16 })
				}), /* @__PURE__ */ jsx("div", {
					className: "aspect-video w-full overflow-hidden rounded-2xl shadow-2xl",
					children: /* @__PURE__ */ jsx("iframe", {
						src: `https://www.youtube.com/embed/${VIDEO_ID}?rel=0`,
						title: "Video Profil Coach Haryanto Kandani",
						allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
						allowFullScreen: true,
						className: "h-full w-full"
					})
				})]
			})
		}),
		lightboxSrc && /* @__PURE__ */ jsxs("div", {
			className: "fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm",
			onClick: () => setLightboxSrc(null),
			children: [/* @__PURE__ */ jsx("button", {
				onClick: () => setLightboxSrc(null),
				className: "absolute right-4 top-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-slate-700 text-white transition-colors hover:bg-slate-600",
				"aria-label": "Tutup gambar",
				children: /* @__PURE__ */ jsx(X, { size: 18 })
			}), /* @__PURE__ */ jsx("img", {
				src: lightboxSrc,
				alt: "Perbesar gambar",
				className: "max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl",
				onClick: (e) => e.stopPropagation()
			})]
		})
	] });
}
//#endregion
export { MentorSection as default };

//# sourceMappingURL=MentorSection-Ci0aK8Vg.js.map