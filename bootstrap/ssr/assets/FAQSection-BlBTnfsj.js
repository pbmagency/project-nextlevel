import { c as Button } from "../ssr.js";
import { t as SectionWrapper } from "./section-wrapper-BGQtDov1.js";
import { t as WA_URL } from "./whatsapp-BML6Oidn.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronDown, MessageCircle } from "lucide-react";
//#region resources/js/components/sections/FAQSection.tsx
var FAQS = [
	{
		q: "Siapa saja yang cocok mengikuti training ini?",
		a: "Training ini dirancang untuk siapa saja yang bekerja di bidang penjualan, mulai dari sales asuransi, properti, otomotif, medical representative, network marketing, hingga pemilik bisnis yang ingin timnya closing lebih konsisten. Baik yang baru terjun ke dunia sales maupun yang sudah berpengalaman tapi hasilnya stagnan."
	},
	{
		q: "Apakah materinya bisa langsung diterapkan setelah training?",
		a: "Ya, itulah keunggulan utama program ini. Semua materi berbasis pengalaman nyata 20+ tahun di lapangan, bukan teori akademis. Anda akan pulang dengan teknik dan framework konkret yang bisa langsung dicoba keesokan harinya saat bertemu prospek."
	},
	{
		q: "Apakah dengan ikut program ini saya pasti bisa closing lebih baik?",
		a: "Setiap peserta datang dengan skala kemampuan yang berbeda. Yang kami jamin adalah: selama 1 hari penuh mengikuti sesi teori dan praktek yang kami fasilitasi, pasti ada kemajuan nyata dibanding sebelum training. Tingkat kemajuan masing-masing orang berbeda, karena sales adalah skill yang perlu terus diasah setelah training."
	},
	{
		q: "Apa yang dimaksud batch berikutnya bisa diikuti gratis?",
		a: "Sebagai alumni, Anda bisa hadir kembali di batch berikutnya tanpa biaya tambahan untuk Reseat atau me-refresh materi. Program ini diadakan 6 bulan sekali, jadwal batch berikutnya bisa ditanyakan langsung ke panitia. Catatan: fasilitas Lunch di Hotel tidak termasuk untuk sesi Reseat."
	},
	{
		q: "Bagaimana metode yang diterapkan di program ini?",
		a: "Kelas sengaja dibuat kecil, maksimal 30 orang, dengan pendampingan langsung Coach Haryanto Kandani dan Asisten Coach. Setiap teknik dipraktekkan langsung dan diberikan feedback real-time. Ada juga sesi Coaching One on One. Setelah training, peserta masuk ke WhatsApp Group untuk mentoring dan pendampingan lanjutan."
	},
	{
		q: "Apa maksudnya Money Back Guarantee?",
		a: "Kami bertanggung jawab penuh atas kepuasan setiap peserta. Jika setelah mengikuti 1 hari Full Training Anda merasa tidak beroleh manfaat sama sekali, lapor langsung ke panitia setelah acara selesai dan kami kembalikan uang pendaftaran secara penuh, tanpa syarat yang ribet."
	},
	{
		q: "Apakah training ini hanya diadakan di Jakarta?",
		a: "Sementara ini kami hanya mengadakan di Jakarta, di Hotel DoubleTree by Hilton Kemayoran. Namun di setiap batch, peserta dari berbagai kota di Indonesia selalu hadir. Untuk penyelenggaraan di kota lain, bisa kami fasilitasi apabila ada minimal 15 peserta yang dikumpulkan oleh pihak pengundang."
	},
	{
		q: "Apakah training 1 hari ini termasuk penginapan?",
		a: "Tidak termasuk. Training berlangsung dari pagi hingga sore, jadi peserta dari Jakarta tidak perlu menginap. Bagi peserta dari luar kota, hotel di sekitar Kemayoran atau di lokasi acara bisa dicari secara online."
	},
	{
		q: "Bagaimana cara mendaftar?",
		a: "Klik tombol \"Amankan Seat\" di halaman ini. Anda akan langsung terhubung dengan tim kami via WhatsApp untuk menyelesaikan proses pendaftaran dan pembayaran."
	}
];
function FaqItem({ q, a }) {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "border-b border-white/10 last:border-0",
		children: [/* @__PURE__ */ jsxs("button", {
			onClick: () => setOpen(!open),
			"aria-expanded": open,
			className: "flex w-full cursor-pointer items-center justify-between py-4 text-left text-base font-semibold leading-snug text-slate-100 hover:text-blue-400",
			children: [/* @__PURE__ */ jsx("span", { children: q }), /* @__PURE__ */ jsx(ChevronDown, {
				size: 18,
				className: `shrink-0 text-slate-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: `overflow-hidden transition-all duration-300 ease-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
			children: /* @__PURE__ */ jsx("p", {
				className: "pb-4 text-base font-medium leading-relaxed text-slate-300",
				children: a
			})
		})]
	});
}
function FAQSection({ onCtaClick, onInitiateCheckout }) {
	return /* @__PURE__ */ jsx(SectionWrapper, {
		id: "faq-section",
		bg: "white",
		className: "py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-2xl",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mb-10 text-center",
					children: [/* @__PURE__ */ jsx("p", {
						className: "mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500",
						children: "FAQ"
					}), /* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-black text-white sm:text-3xl lg:text-4xl",
						children: "Pertanyaan Umum"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "rounded-2xl border border-white/10 bg-[#111118] px-4 sm:px-6",
					children: FAQS.map((faq) => /* @__PURE__ */ jsx(FaqItem, {
						q: faq.q,
						a: faq.a
					}, faq.q))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-10 text-center",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "mb-4 font-medium text-slate-300",
							children: "Masih ada pertanyaan lain?"
						}),
						/* @__PURE__ */ jsx("a", {
							href: WA_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: () => {
								onInitiateCheckout();
								onCtaClick("faq_primary", "Hubungi Kami via WhatsApp", WA_URL);
							},
							children: /* @__PURE__ */ jsxs(Button, {
								variant: "primary",
								size: "lg",
								children: [/* @__PURE__ */ jsx(MessageCircle, { size: 18 }), "Hubungi Kami via WhatsApp"]
							})
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm font-semibold text-slate-300",
							children: "Telah melatih 100.000+ Sales, 20 tahun pengalaman"
						})
					]
				})
			]
		})
	});
}
//#endregion
export { FAQSection as default };

//# sourceMappingURL=FAQSection-BlBTnfsj.js.map