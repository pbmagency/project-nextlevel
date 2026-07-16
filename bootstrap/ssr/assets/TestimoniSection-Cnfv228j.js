import { t as SectionWrapper } from "./section-wrapper-BGQtDov1.js";
import { t as SectionCta } from "./section-cta-D4XNal45.js";
import { useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { ChevronLeft, ChevronRight, Star, X } from "lucide-react";
//#region resources/js/components/sections/TestimoniSection.tsx
var TESTIMONIALS = [
	{
		name: "Robert Tan",
		role: "Principal, Multiland Indonesia Property Agent",
		photo: "/storage/testimoni/robert-tan.webp",
		text: "Sungguh luar biasa! Sejak mengikuti seminar yang Bapak Haryanto Kandani bawakan, team marketing kami mencapai hasil yang sangat luar biasa tahun ini. Target yang diberikan oleh perusahaan dapat diraih oleh agen-agen marketing kami hanya dalam waktu 5 bulan."
	},
	{
		name: "Daniel Indrianto",
		role: "Asst. CEO Bukit Mediterania Samarinda, Member of Agung Podomoro Group",
		photo: "/storage/testimoni/daniel-indrianto.webp",
		text: "Mr. Haryanto's motivation lecture is really moving ourselves instantly to get motivated. His lecture is lively, fun, easy to digest, and straight professionalism. Overall is excellent!"
	},
	{
		name: "Hengky Tan Malaka",
		role: "Wealth Director, PT. AXA Financial Indonesia",
		photo: "/storage/testimoni/hengky-tan-malaka.webp",
		text: "Saat mengikuti seminar Pak Haryanto Kandani pendekatannya logis dengan bahasa yang sederhana tapi dapat menyentuh, membuat suatu perasaan bergejolak sehingga menimbulkan keyakinan yang kuat dalam memotivasi diri. Hal ini menjadi modal utama kesuksesan."
	}
];
var PROOF_IMAGES = [
	"/storage/testimoni/proof/20180730_115219.webp.webp",
	"/storage/testimoni/proof/20180730_121151.webp.webp",
	"/storage/testimoni/proof/20180730_135732.webp.webp",
	"/storage/testimoni/proof/SmartSelect_20180720-132430_WhatsApp-Business.webp.webp",
	"/storage/testimoni/proof/SmartSelect_20180720-154419_WhatsApp-Business.webp.webp",
	"/storage/testimoni/proof/SmartSelect_20180720-160458_WhatsApp-Business.webp.webp",
	"/storage/testimoni/proof/SmartSelect_20180720-163049_Gallery.webp.webp",
	"/storage/testimoni/proof/SmartSelect_20180720-163254_WhatsApp-Business.webp.webp",
	"/storage/testimoni/proof/SmartSelect_20180720-163614_WhatsApp-Business.webp.webp",
	"/storage/testimoni/proof/SmartSelect_20180720-190359_WhatsApp-Business.webp.webp",
	"/storage/testimoni/proof/SmartSelect_20180728-085827_WhatsApp-Business.webp.webp",
	"/storage/testimoni/proof/SmartSelect_20180730-115538_WhatsApp-Business.webp.webp",
	"/storage/testimoni/proof/SmartSelect_20180730-120129_WhatsApp-Business.webp.webp",
	"/storage/testimoni/proof/SmartSelect_20180730-232548_WhatsApp-Business.webp.webp"
];
PROOF_IMAGES.slice(0, 3);
PROOF_IMAGES.slice(3);
function StarRating() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex gap-0.5",
		children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, {
			size: 12,
			className: "text-amber-400",
			fill: "currentColor"
		}, i))
	});
}
function ProofLightbox({ images, index, onClose, onPrev, onNext }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-sm",
		onClick: onClose,
		children: [
			/* @__PURE__ */ jsx("button", {
				onClick: onClose,
				className: "absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white",
				"aria-label": "Tutup",
				children: /* @__PURE__ */ jsx(X, { size: 18 })
			}),
			/* @__PURE__ */ jsx("button", {
				onClick: (e) => {
					e.stopPropagation();
					onPrev();
				},
				className: "absolute left-4 p-2 text-white/60 transition-colors hover:text-white",
				"aria-label": "Sebelumnya",
				children: /* @__PURE__ */ jsx(ChevronLeft, { size: 36 })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-center gap-3 px-16",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ jsx("img", {
					src: images[index],
					alt: `Bukti peserta ${index + 1}`,
					className: "max-h-[82vh] max-w-[360px] w-full rounded-2xl object-contain shadow-2xl"
				}), /* @__PURE__ */ jsxs("p", {
					className: "text-xs text-white/40",
					children: [
						index + 1,
						" / ",
						images.length
					]
				})]
			}),
			/* @__PURE__ */ jsx("button", {
				onClick: (e) => {
					e.stopPropagation();
					onNext();
				},
				className: "absolute right-4 p-2 text-white/60 transition-colors hover:text-white",
				"aria-label": "Berikutnya",
				children: /* @__PURE__ */ jsx(ChevronRight, { size: 36 })
			})
		]
	});
}
function TestimoniSection({ onCtaClick }) {
	const [lightboxSrc, setLightboxSrc] = useState(null);
	const [proofIndex, setProofIndex] = useState(null);
	const closeProof = () => setProofIndex(null);
	const prevProof = () => setProofIndex((i) => i !== null ? (i - 1 + PROOF_IMAGES.length) % PROOF_IMAGES.length : null);
	const nextProof = () => setProofIndex((i) => i !== null ? (i + 1) % PROOF_IMAGES.length : null);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsxs(SectionWrapper, {
			id: "testimoni-section",
			bg: "slate",
			className: "py-20",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [/* @__PURE__ */ jsx("p", {
						className: "mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500",
						children: "Testimoni Alumni"
					}), /* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-black text-white sm:text-4xl",
						children: "Lihat Kata Mereka Tentang Kami"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-16 grid gap-4 sm:grid-cols-3",
					children: TESTIMONIALS.map((t) => /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col rounded-2xl border border-white/5 bg-[#161620] px-5 py-5 shadow-sm",
						children: [
							/* @__PURE__ */ jsx(StarRating, {}),
							/* @__PURE__ */ jsxs("blockquote", {
								className: "mt-3 flex-1 text-base font-medium leading-relaxed text-slate-200 italic",
								children: [
									"\"",
									t.text,
									"\""
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-4 flex items-center gap-3 border-t border-white/10 pt-4",
								children: [/* @__PURE__ */ jsx("img", {
									src: t.photo,
									alt: t.name,
									className: "h-10 w-10 shrink-0 cursor-pointer rounded-full object-cover object-top ring-2 ring-white/10",
									loading: "lazy",
									onClick: () => setLightboxSrc(t.photo)
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "text-base font-bold text-white",
									children: t.name
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-1 text-sm font-medium leading-snug text-slate-300",
									children: t.role
								})] })]
							})
						]
					}, t.name))
				}),
				/* @__PURE__ */ jsx(SectionCta, {
					location: "testimoni",
					onClick: onCtaClick,
					showMentorCta: true,
					socialProof: "Telah melatih 100.000+ Sales • 20 tahun pengalaman"
				})
			]
		}),
		lightboxSrc && /* @__PURE__ */ jsxs("div", {
			className: "fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm",
			onClick: () => setLightboxSrc(null),
			children: [/* @__PURE__ */ jsx("button", {
				onClick: () => setLightboxSrc(null),
				className: "absolute right-4 top-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-slate-700 text-white transition-colors hover:bg-slate-600",
				"aria-label": "Tutup gambar",
				children: /* @__PURE__ */ jsx(X, { size: 18 })
			}), /* @__PURE__ */ jsx("img", {
				src: lightboxSrc,
				alt: "Foto testimoni",
				className: "max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl",
				onClick: (e) => e.stopPropagation()
			})]
		}),
		proofIndex !== null && /* @__PURE__ */ jsx(ProofLightbox, {
			images: PROOF_IMAGES,
			index: proofIndex,
			onClose: closeProof,
			onPrev: prevProof,
			onNext: nextProof
		})
	] });
}
//#endregion
export { TestimoniSection as default };

//# sourceMappingURL=TestimoniSection-Cnfv228j.js.map