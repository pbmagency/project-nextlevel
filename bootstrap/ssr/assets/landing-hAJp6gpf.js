import { c as Button } from "../ssr.js";
import { i as useScrollTracking, n as useSectionTracking, o as useAnalytics, r as useDwellTime, t as Navbar } from "./Navbar-BRDCbq9k.js";
import { Head } from "@inertiajs/react";
import { Suspense, lazy, useEffect } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle } from "lucide-react";
//#region resources/js/components/sections/HeroSectionV2.tsx
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
						width: 3704,
						height: 2469,
						loading: "eager",
						fetchPriority: "high"
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
							className: "block text-[2.2rem] font-black uppercase text-blue-400 sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem]",
							style: { textShadow: "0 4px 24px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8)" },
							children: "Rasakan"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "block text-[4rem] font-black uppercase text-white sm:text-[6rem] lg:text-[8rem] xl:text-[10rem]",
							style: { textShadow: "0 4px 32px rgba(0,0,0,0.95), 0 2px 12px rgba(0,0,0,0.9)" },
							children: "Leganya"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "mt-2 inline-block rounded-lg bg-blue-600 px-3 py-1.5 text-[1.1rem] font-bold text-white sm:text-xl lg:text-2xl xl:text-[2rem]",
							children: "Saat Target Bulanan Konsisten Tercapai"
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-5 max-w-2xl text-base font-semibold leading-relaxed text-slate-100 capitalize",
					children: "Training Offline intensif 1 hari yang bantu Anda closing konsisten dengan framework yang tepat."
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
							children: "Daftar Sekarang"
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
				})
			]
		})]
	});
}
//#endregion
//#region resources/js/pages/landing.tsx
var SocialProofSection = lazy(() => import("./SocialProofSection-EtBSMlC8.js"));
var ProblemSection = lazy(() => import("./ProblemSectionV2-oEx8cGPV.js"));
var SolutionSection = lazy(() => import("./SolutionSectionV2-DLxG2O0p.js"));
var TestimoniSection = lazy(() => import("./TestimoniSection-Cnfv228j.js"));
var BenefitSection = lazy(() => import("./BenefitSection-C43WkXh0.js"));
var MentorSection = lazy(() => import("./MentorSection-Ci0aK8Vg.js"));
var PricingSection = lazy(() => import("./PricingSection-C3Bb1320.js"));
var FAQSection = lazy(() => import("./FAQSection-BlBTnfsj.js"));
var ClientBannerSection = lazy(() => import("./ClientBannerSection-BQMjOX1k.js"));
var Footer = lazy(() => import("./Footer-BT59X6af.js"));
var FloatingVideo = lazy(() => import("./FloatingVideo-DUiMueh_.js"));
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
		window.location.href = dest;
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
			/* @__PURE__ */ jsxs("main", { children: [/* @__PURE__ */ jsx(HeroSection, { onCtaClick: handleCtaClick }), /* @__PURE__ */ jsxs(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", { className: "min-h-[200px]" }),
				children: [
					/* @__PURE__ */ jsx(SocialProofSection, {}),
					/* @__PURE__ */ jsx(ProblemSection, {}),
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
			})] }),
			/* @__PURE__ */ jsxs(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", { className: "min-h-[100px]" }),
				children: [/* @__PURE__ */ jsx(Footer, {}), /* @__PURE__ */ jsx(FloatingVideo, {})]
			})
		]
	})] });
}
//#endregion
export { Landing as default };

//# sourceMappingURL=landing-hAJp6gpf.js.map