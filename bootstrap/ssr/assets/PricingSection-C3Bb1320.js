import { c as Button } from "../ssr.js";
import { t as SectionWrapper } from "./section-wrapper-BGQtDov1.js";
import { t as WA_URL } from "./whatsapp-BML6Oidn.js";
import { a as generateEventId } from "./Navbar-BRDCbq9k.js";
import { memo, useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle, Clock, Gift, Headphones, Lock, ShieldCheck, Tag, ThumbsUp, Zap } from "lucide-react";
//#region resources/js/components/sections/PricingSection.tsx
var STORAGE_KEY = "pricing_countdown_expiry";
var DURATION_MS = 720 * 60 * 1e3;
function getOrCreateExpiry() {
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored) {
			const expiry = parseInt(stored, 10);
			if (!isNaN(expiry) && expiry > Date.now()) return expiry;
		}
	} catch {}
	const expiry = Date.now() + DURATION_MS;
	try {
		localStorage.setItem(STORAGE_KEY, String(expiry));
	} catch {}
	return expiry;
}
function useCountdown() {
	const [timeLeft, setTimeLeft] = useState({
		hours: "06",
		minutes: "00",
		seconds: "00"
	});
	useEffect(() => {
		let expiry = getOrCreateExpiry();
		function tick() {
			if (expiry - Date.now() <= 0) {
				expiry = Date.now() + DURATION_MS;
				try {
					localStorage.setItem(STORAGE_KEY, String(expiry));
				} catch {}
			}
			const totalSec = Math.max(0, Math.floor((expiry - Date.now()) / 1e3));
			const h = Math.floor(totalSec / 3600);
			const m = Math.floor(totalSec % 3600 / 60);
			const s = totalSec % 60;
			setTimeLeft({
				hours: String(h).padStart(2, "0"),
				minutes: String(m).padStart(2, "0"),
				seconds: String(s).padStart(2, "0")
			});
		}
		tick();
		const id = setInterval(tick, 1e3);
		return () => clearInterval(id);
	}, []);
	return timeLeft;
}
var DigitBlock = memo(function DigitBlock({ value, label }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center gap-1.5",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative flex overflow-hidden rounded-xl border border-blue-500/25 bg-[#0A0A0F]",
			children: [value.split("").map((d, i) => /* @__PURE__ */ jsx("span", {
				className: "flex w-9 items-center justify-center py-3 text-2xl font-black tabular-nums text-blue-300 sm:w-11 sm:text-3xl",
				children: d
			}, i)), /* @__PURE__ */ jsx("span", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
			})]
		}), /* @__PURE__ */ jsx("span", {
			className: "text-[10px] font-bold uppercase tracking-widest text-slate-500",
			children: label
		})]
	});
});
var Sep = memo(function Sep() {
	return /* @__PURE__ */ jsx("span", {
		className: "mb-5 self-center text-xl font-black text-blue-500/30",
		children: ":"
	});
});
var INCLUDES = [
	"Buffet Lunch & Coffee Break",
	"Hand Out Materi",
	"Sertifikat",
	"Mentoring via WhatsApp Group",
	"Reseat & Refresh (ikuti kelas berkali-kali gratis)"
];
var GUARANTEES = [
	{
		icon: ShieldCheck,
		title: "Materi Terbukti",
		desc: "Semua strategi diuji 20+ tahun langsung di lapangan."
	},
	{
		icon: ThumbsUp,
		title: "Garansi Uang Kembali",
		desc: "Sudah ikut full day tapi tidak puas? Minta refund langsung ke panitia, kami kembalikan penuh tanpa syarat ribet."
	},
	{
		icon: Headphones,
		title: "Dukungan Penuh",
		desc: "Tim kami siap membantu Anda setelah mengikuti program."
	}
];
function PricingSection({ onPayClick }) {
	const { hours, minutes, seconds } = useCountdown();
	const handleRegister = () => {
		onPayClick("Bayar Sekarang", WA_URL, generateEventId());
		window.open(WA_URL, "_blank", "noopener,noreferrer");
	};
	return /* @__PURE__ */ jsxs(SectionWrapper, {
		id: "pricing-section",
		bg: "white",
		className: "py-20",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400",
						children: "Investasi Terbaik"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl font-black text-white sm:text-4xl",
						children: "Satu Hari yang Mengubah Performa Tim Anda"
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-4 font-medium text-slate-300",
						children: [
							"Program ini hanya diadakan ",
							/* @__PURE__ */ jsx("strong", { children: "6 bulan sekali" }),
							". Jangan lewatkan kesempatan ini."
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto mt-10 max-w-lg",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "overflow-hidden rounded-3xl border-2 border-blue-500/60 bg-[#0A0A0F] shadow-2xl shadow-blue-900/20",
					children: [/* @__PURE__ */ jsx("img", {
						src: "/storage/misc/hotel.webp",
						alt: "Hotel DoubleTree by Hilton Kemayoran",
						className: "h-48 w-full object-cover sm:h-56",
						loading: "lazy"
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-5 sm:p-8",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-base font-bold text-blue-400",
								children: "Sales & Marketing Skills Training"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-base font-medium text-slate-300",
								children: "Offline, Hotel DoubleTree by Hilton Kemayoran – Jakarta Pusat"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-0.5 text-base font-medium text-slate-300",
								children: "Senin, 27 Juli 2026, 09.30 – 16.00 WIB"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-lg font-medium text-slate-400 line-through",
											children: "Rp 3.500.000"
										}), /* @__PURE__ */ jsx("span", {
											className: "rounded-full bg-red-500/10 px-2.5 py-1 text-sm font-bold text-red-400",
											children: "HEMAT 43%"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-1 flex items-end gap-3",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-3xl font-black text-white sm:text-4xl",
											children: "Rp 2.000.000"
										}), /* @__PURE__ */ jsx("span", {
											className: "mb-1 text-base font-semibold text-blue-400",
											children: "Super Early Bird"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-2 inline-flex items-center gap-1.5 rounded-lg bg-amber-500/10 px-3 py-2 text-sm font-semibold text-amber-300",
										children: [/* @__PURE__ */ jsx(Tag, {
											size: 14,
											className: "shrink-0"
										}), "Khusus Lunas Hari Ini. Promo Terbatas"]
									})
								]
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mt-6 space-y-2.5",
								children: INCLUDES.map((item) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2.5 text-base font-medium text-slate-300",
									children: [/* @__PURE__ */ jsx(CheckCircle, {
										size: 18,
										className: "mt-0.5 shrink-0 text-blue-400"
									}), item]
								}, item))
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 flex items-center gap-3 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3",
								children: [/* @__PURE__ */ jsx(Gift, {
									size: 18,
									className: "shrink-0 text-emerald-400"
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "text-base font-bold text-emerald-300",
									children: "Ikut sekali, batch berikutnya gratis"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm font-medium text-emerald-300/90",
									children: "Ulangi setiap batch tanpa bayar lagi, selamanya."
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#0a0c14] to-[#0A0A0F]",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 border-b border-blue-500/10 px-4 py-2.5",
									children: [/* @__PURE__ */ jsx(Clock, {
										size: 14,
										className: "shrink-0 text-blue-400"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-xs font-bold uppercase tracking-widest text-blue-400",
										children: "Harga Early Bird Berakhir Dalam"
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-start justify-center gap-2 px-4 py-4",
									children: [
										/* @__PURE__ */ jsx(DigitBlock, {
											value: hours,
											label: "Jam"
										}),
										/* @__PURE__ */ jsx(Sep, {}),
										/* @__PURE__ */ jsx(DigitBlock, {
											value: minutes,
											label: "Menit"
										}),
										/* @__PURE__ */ jsx(Sep, {}),
										/* @__PURE__ */ jsx(DigitBlock, {
											value: seconds,
											label: "Detik"
										})
									]
								})]
							}),
							/* @__PURE__ */ jsx(Button, {
								variant: "primary",
								size: "xl",
								className: "mt-6 w-full",
								onClick: handleRegister,
								children: "Amankan Seat"
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "mt-4 flex items-center justify-center gap-1.5 text-sm font-medium text-slate-300",
								children: [/* @__PURE__ */ jsx(Lock, {
									size: 14,
									className: "shrink-0"
								}), "Tidak puas setelah full day? Uang kembali penuh, tanpa repot."]
							})
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-4 flex items-start gap-2 rounded-xl bg-amber-500/10 p-4 text-base font-medium text-amber-300 sm:items-center",
					children: [/* @__PURE__ */ jsx(Zap, {
						size: 16,
						className: "mt-0.5 shrink-0 sm:mt-0"
					}), /* @__PURE__ */ jsx("span", { children: "Program ini hanya diadakan 6 bulan sekali. Batch berikutnya mungkin penuh lebih cepat." })]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto mt-8 grid max-w-lg gap-3 sm:max-w-3xl sm:grid-cols-3",
				children: GUARANTEES.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxs("div", {
					className: "flex items-start gap-3 rounded-xl border border-white/5 bg-[#111118] p-4",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10",
						children: /* @__PURE__ */ jsx(Icon, {
							size: 16,
							className: "text-blue-400"
						})
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-base font-bold text-white",
						children: title
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm font-medium leading-relaxed text-slate-300",
						children: desc
					})] })]
				}, title))
			})
		]
	});
}
//#endregion
export { PricingSection as default };

//# sourceMappingURL=PricingSection-C3Bb1320.js.map