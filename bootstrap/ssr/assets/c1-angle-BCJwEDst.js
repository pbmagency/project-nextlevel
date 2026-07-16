import { c as Button } from "../ssr.js";
import { t as SectionWrapper } from "./section-wrapper-BGQtDov1.js";
import { t as WA_URL } from "./whatsapp-BML6Oidn.js";
import { i as useScrollTracking, n as useSectionTracking, o as useAnalytics, r as useDwellTime, t as Navbar } from "./Navbar-BRDCbq9k.js";
import SocialProofSection from "./SocialProofSection-EtBSMlC8.js";
import { Head } from "@inertiajs/react";
import { Suspense, lazy, useEffect } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { AlertCircle, CheckCircle, CheckCircle2, ChevronDown, X } from "lucide-react";
//#region resources/js/components/sections/test-hero/HeroSection1.tsx
var TRUST_BULLETS = [
	"1.000.000+ Orang Terinspirasi",
	"Telah Melatih 100.000+ Sales",
	"Seminar Di 30+ Kota Besar"
];
function HeroSection({ onCtaClick }) {
	return /* @__PURE__ */ jsxs("section", {
		id: "hero-section",
		className: "relative flex min-h-dvh flex-col justify-end overflow-hidden bg-[#0A0A0F] pb-8 pt-24 lg:justify-center lg:pb-24",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "pointer-events-none absolute bottom-0 right-0 top-14 w-full select-none lg:inset-y-0 lg:w-[58%]",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 origin-bottom-right -translate-y-24 scale-[0.88] lg:translate-y-0 lg:scale-[0.9]",
					children: /* @__PURE__ */ jsx("img", {
						src: "/storage/mentor/final-hero-hd-transparent.webp",
						alt: "",
						className: "h-full w-full object-cover object-[22%_top] lg:object-[16%_top]",
						style: { transform: "scaleX(-1)" },
						loading: "eager"
					})
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/90 to-transparent lg:h-[45%] lg:via-[#0A0A0F]/70" }),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 hidden w-64 bg-gradient-to-r from-[#0A0A0F] to-transparent lg:block" })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "mb-4 inline-flex items-center rounded-full border border-blue-400/30 bg-[#0A0A0F]/90 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-blue-300 shadow-lg shadow-black/30 sm:px-4 sm:text-base",
					children: "Sales & Marketing Training"
				}),
				/* @__PURE__ */ jsxs("h1", {
					className: "leading-[0.88] tracking-tight",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "block font-black uppercase text-blue-400",
							style: {
								fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)",
								textShadow: "0 4px 24px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8)"
							},
							children: "BANGUN TIM SALES"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "block font-black uppercase text-white",
							style: {
								fontSize: "clamp(4rem, 10vw, 10rem)",
								textShadow: "0 4px 32px rgba(0,0,0,0.95), 0 2px 12px rgba(0,0,0,0.9)"
							},
							children: "MANDIRI"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "mt-2 inline-block rounded-lg bg-blue-600 px-3 py-1.5 font-bold text-white",
							style: { fontSize: "clamp(1.1rem, 2.5vw, 2rem)" },
							children: "Bisa Closing Tanpa Bergantung pada Anda"
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-5 max-w-2xl text-base font-semibold leading-relaxed text-slate-100",
					children: "Masih sering turun tangan? Latih tim menguasai negosiasi, handling objection, dan closing dalam 1 hari bersama Coach Haryanto Kandani."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
					children: [/* @__PURE__ */ jsx("a", {
						className: "w-full sm:w-auto",
						onClick: () => onCtaClick("hero_primary", "Daftar Sekarang", "#pricing-section"),
						children: /* @__PURE__ */ jsx(Button, {
							variant: "primary",
							size: "xl",
							className: "w-full min-w-50 text-lg sm:w-auto",
							children: "Reservasi Seat Sekarang"
						})
					}), /* @__PURE__ */ jsx("a", {
						href: "#testimoni-section",
						className: "w-full sm:w-auto",
						onClick: () => onCtaClick("hero_secondary", "Lihat Testimoni", "#testimoni-section"),
						children: /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "xl",
							className: "w-full min-w-50 text-lg sm:w-auto",
							children: "Lihat Testimoni"
						})
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-5 flex flex-col gap-2 text-sm font-medium text-slate-200 sm:flex-row sm:flex-wrap sm:gap-x-5 lg:inline-flex lg:rounded-xl lg:bg-black/55 lg:px-4 lg:py-3 lg:backdrop-blur-sm",
					children: TRUST_BULLETS.map((item) => /* @__PURE__ */ jsxs("span", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ jsx(CheckCircle, {
							size: 16,
							className: "shrink-0 text-blue-400"
						}), item]
					}, item))
				})
			]
		})]
	});
}
//#endregion
//#region resources/js/components/sections/cycle1-test-problem/ProblemSection1.tsx
var SCENARIOS = [
	"Sudah latih tim sales berkali-kali, tapi hasilnya tetap buruk",
	"Tim sales masih terlalu bergantung pada arahan Anda",
	"Performa tim buruk sehingga target sulit tercapai secara konsisten",
	"Anda masih harus ambil alih agar target bulanan bisa tercapai."
];
var ROOT_FACTORS = [
	"Seberapa kuat teknik tim Anda dalam menjual",
	"Seberapa efektif cara tim Anda menangani penolakan",
	"Seberapa besar trust yang tim Anda bangun sejak awal"
];
var WORST_CASE = [
	"Closing rate tidak bergerak bulan demi bulan",
	"Target terus meleset, bisnis atau karir stagnan",
	"Burnt out karena Anda harus selalu turun tangan",
	"Budget training sudah keluar, tapi tim tidak juga menunjukkan hasil"
];
function ProblemSection() {
	return /* @__PURE__ */ jsx(SectionWrapper, {
		id: "problem-section",
		bg: "dark",
		className: "py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid gap-4 lg:grid-cols-2 lg:items-start lg:gap-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col rounded-2xl border border-red-500/15 bg-[#0E0E15] p-6 lg:p-8",
						children: [/* @__PURE__ */ jsx("p", {
							className: "mb-6 text-center text-sm font-black uppercase tracking-widest text-white",
							children: "Pernah ada di posisi ini?"
						}), /* @__PURE__ */ jsx("ul", {
							className: "flex flex-col gap-0",
							children: SCENARIOS.map((s) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-3 border-b border-white/5 py-3.5 first:pt-0 last:border-0 last:pb-0",
								children: [/* @__PURE__ */ jsx(AlertCircle, {
									size: 17,
									className: "mt-0.5 shrink-0 text-red-500"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-base font-medium leading-relaxed text-slate-200",
									children: s
								})]
							}, s))
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex flex-col rounded-2xl p-6 lg:p-6",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex flex-1 flex-col justify-center gap-5",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "mb-2 text-sm font-bold uppercase tracking-[0.18em] text-blue-400",
								children: "Faktanya"
							}), /* @__PURE__ */ jsxs("h2", {
								className: "text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-4xl",
								children: [
									"Terus mengawasi dan menekan tim sales tidak akan membuat",
									" ",
									/* @__PURE__ */ jsxs("span", {
										className: "relative text-blue-400",
										children: ["closing jadi konsisten", /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-blue-400/40" })]
									})
								]
							})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "mb-3 text-sm font-semibold uppercase tracking-widest text-slate-300",
								children: "Tapi seberapa dalam tim anda menguasai:"
							}), /* @__PURE__ */ jsx("ul", {
								className: "flex flex-col gap-3",
								children: ROOT_FACTORS.map((f) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ jsx(CheckCircle2, {
										size: 17,
										className: "mt-0.5 shrink-0 text-blue-400"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-base leading-relaxed text-slate-200",
										children: f
									})]
								}, f))
							})] })]
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-12 grid overflow-hidden rounded-2xl border border-red-500/10 lg:mt-20 lg:grid-cols-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "bg-[#0D0D14] p-6 lg:p-8",
						children: [/* @__PURE__ */ jsxs("h3", {
							className: "text-xl font-black text-white sm:text-2xl",
							children: [
								"Kalau ini tidak",
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
									className: "text-base text-slate-300",
									children: w
								})]
							}, w))
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col justify-center border-t border-white/5 bg-[#111118] p-6 lg:border-l lg:border-t-0 lg:p-8",
						children: [
							/* @__PURE__ */ jsxs("p", {
								className: "text-2xl font-black text-white sm:text-3xl",
								children: [
									"Padahal Tim Anda",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-blue-400",
										children: "CAPABLE."
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-base font-medium leading-relaxed text-slate-300",
								children: "Yang kurang bukan pengawasan Anda. Yang kurang hanya framework dan teknik sales yang belum diketahui tim."
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
						href: "#solution",
						className: "inline-flex flex-col items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-slate-300 transition-colors hover:text-blue-400",
						children: ["Lihat solusinya", /* @__PURE__ */ jsx(ChevronDown, {
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
//#region resources/js/pages/cycle1/c1-angle.tsx
var SolutionSection = lazy(() => import("./SolutionSection1-CLRt78cG.js"));
var TestimoniSection = lazy(() => import("./TestimoniSection-Cnfv228j.js"));
var BenefitSection = lazy(() => import("./BenefitSection-C43WkXh0.js"));
var MentorSection = lazy(() => import("./MentorSection-Ci0aK8Vg.js"));
var PricingSection = lazy(() => import("./PricingSection-C3Bb1320.js"));
var FAQSection = lazy(() => import("./FAQSection-BlBTnfsj.js"));
var ClientBannerSection = lazy(() => import("./ClientBannerSection-BQMjOX1k.js"));
var Footer = lazy(() => import("./Footer-BT59X6af.js"));
var FloatingWhatsApp = lazy(() => import("./FloatingWhatsApp-CuM7XN_x.js"));
if (typeof document !== "undefined") document.documentElement.classList.add("dark");
function Landing() {
	const { trackVisit, trackCTA, trackInitiateCheckout, trackLead } = useAnalytics();
	useScrollTracking();
	useDwellTime();
	useSectionTracking();
	useEffect(() => {
		trackVisit();
	}, []);
	const handleCtaClick = (location, text, dest) => {
		trackCTA(location, text, dest);
		window.location.href = WA_URL;
	};
	const handlePayClick = (text, dest, eventId) => {
		trackLead("wa-inquiry", {
			button_text: text,
			destination: dest,
			event_id: eventId,
			value: 2e6,
			currency: "IDR"
		});
		trackInitiateCheckout();
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs(Head, { children: [
		/* @__PURE__ */ jsx("title", { children: "Sales & Marketing Skills Training" }),
		/* @__PURE__ */ jsx("meta", {
			name: "description",
			content: "Kuasai 4 pilar sales terbaik: Psychology of Selling, Negotiation, Handling Objection & Closing. Training offline seharian di Doubletree by Hilton. Hanya Rp 2.000.000."
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "robots",
			content: "index, follow"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: "Sales & Marketing Skills Training | Haryanto Kandani"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:description",
			content: "Kuasai 4 pilar sales terbaik: Psychology of Selling, Negotiation, Handling Objection & Closing. Training offline seharian di Doubletree by Hilton."
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:type",
			content: "website"
		})
	] }), /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-[#0A0A0F] font-sans antialiased",
		children: [
			/* @__PURE__ */ jsx(Navbar, { onCtaClick: handleCtaClick }),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(HeroSection, { onCtaClick: handleCtaClick }),
				/* @__PURE__ */ jsx(SocialProofSection, {}),
				/* @__PURE__ */ jsx(ProblemSection, {}),
				/* @__PURE__ */ jsxs(Suspense, {
					fallback: /* @__PURE__ */ jsx("div", {
						className: "flex h-96 w-full items-center justify-center text-slate-500",
						children: "Loading..."
					}),
					children: [
						/* @__PURE__ */ jsx(SolutionSection, { onCtaClick: handleCtaClick }),
						/* @__PURE__ */ jsx(TestimoniSection, { onCtaClick: handleCtaClick }),
						/* @__PURE__ */ jsx(BenefitSection, { onCtaClick: handleCtaClick }),
						/* @__PURE__ */ jsx(MentorSection, {}),
						/* @__PURE__ */ jsx(PricingSection, { onPayClick: handlePayClick }),
						/* @__PURE__ */ jsx(ClientBannerSection, {}),
						/* @__PURE__ */ jsx(FAQSection, {
							onCtaClick: handleCtaClick,
							onInitiateCheckout: trackInitiateCheckout
						})
					]
				})
			] }),
			/* @__PURE__ */ jsxs(Suspense, {
				fallback: null,
				children: [/* @__PURE__ */ jsx(Footer, {}), /* @__PURE__ */ jsx(FloatingWhatsApp, {})]
			})
		]
	})] });
}
//#endregion
export { Landing as default };

//# sourceMappingURL=c1-angle-BCJwEDst.js.map