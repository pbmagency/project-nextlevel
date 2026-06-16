import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/ui/section-wrapper";
import { WA_URL } from "@/lib/whatsapp";

const FAQS = [
    {
        q: "Siapa saja yang cocok mengikuti training ini?",
        a: "Training ini dirancang untuk siapa saja yang bekerja di bidang penjualan, mulai dari sales asuransi, properti, otomotif, medical representative, network marketing, hingga pemilik bisnis yang ingin timnya closing lebih konsisten. Baik yang baru terjun ke dunia sales maupun yang sudah berpengalaman tapi hasilnya stagnan.",
    },
    {
        q: "Apakah materinya bisa langsung diterapkan setelah training?",
        a: "Ya, itulah keunggulan utama program ini. Semua materi berbasis pengalaman nyata 20+ tahun di lapangan, bukan teori akademis. Anda akan pulang dengan teknik dan framework konkret yang bisa langsung dicoba keesokan harinya saat bertemu prospek.",
    },
    {
        q: "Apakah dengan ikut program ini saya pasti bisa closing lebih baik?",
        a: "Setiap peserta datang dengan skala kemampuan yang berbeda. Yang kami jamin adalah: selama 1 hari penuh mengikuti sesi teori dan praktek yang kami fasilitasi, pasti ada kemajuan nyata dibanding sebelum training. Tingkat kemajuan masing-masing orang berbeda, karena sales adalah skill yang perlu terus diasah setelah training.",
    },
    {
        q: "Apa yang dimaksud batch berikutnya bisa diikuti gratis?",
        a: "Sebagai alumni, Anda bisa hadir kembali di batch berikutnya tanpa biaya tambahan untuk Reseat atau me-refresh materi. Program ini diadakan 6 bulan sekali, jadwal batch berikutnya bisa ditanyakan langsung ke panitia. Catatan: fasilitas Lunch di Hotel tidak termasuk untuk sesi Reseat.",
    },
    {
        q: "Bagaimana metode yang diterapkan di program ini?",
        a: "Kelas sengaja dibuat kecil, maksimal 30 orang, dengan pendampingan langsung Coach Haryanto Kandani dan Asisten Coach. Setiap teknik dipraktekkan langsung dan diberikan feedback real-time. Ada juga sesi Coaching One on One. Setelah training, peserta masuk ke WhatsApp Group untuk mentoring dan pendampingan lanjutan.",
    },
    {
        q: "Apa maksudnya Money Back Guarantee?",
        a: "Kami bertanggung jawab penuh atas kepuasan setiap peserta. Jika setelah mengikuti 1 hari Full Training Anda merasa tidak beroleh manfaat sama sekali, lapor langsung ke panitia setelah acara selesai dan kami kembalikan uang pendaftaran secara penuh, tanpa syarat yang ribet.",
    },
    {
        q: "Apakah training ini hanya diadakan di Jakarta?",
        a: "Sementara ini kami hanya mengadakan di Jakarta, di Hotel DoubleTree by Hilton Kemayoran. Namun di setiap batch, peserta dari berbagai kota di Indonesia selalu hadir. Untuk penyelenggaraan di kota lain, bisa kami fasilitasi apabila ada minimal 15 peserta yang dikumpulkan oleh pihak pengundang.",
    },
    {
        q: "Apakah training 1 hari ini termasuk penginapan?",
        a: "Tidak termasuk. Training berlangsung dari pagi hingga sore, jadi peserta dari Jakarta tidak perlu menginap. Bagi peserta dari luar kota, hotel di sekitar Kemayoran atau di lokasi acara bisa dicari secara online.",
    },
    {
        q: "Bagaimana cara mendaftar?",
        a: 'Klik tombol "Daftar Sekarang" di halaman ini. Anda akan langsung terhubung dengan tim kami via WhatsApp untuk menyelesaikan proses pendaftaran dan pembayaran.',
    },
];

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className="flex w-full cursor-pointer items-center justify-between py-4 text-left text-base font-semibold leading-snug text-slate-100 hover:text-blue-400"
            >
                <span>{q}</span>
                <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <p className="pb-4 text-base font-medium leading-relaxed text-slate-300">
                    {a}
                </p>
            </div>
        </div>
    );
}

interface FAQSectionProps {
    onCtaClick: (location: string, text: string, dest: string) => void;
}

export default function FAQSection({ onCtaClick }: FAQSectionProps) {
    return (
        <SectionWrapper id="faq-section" bg="white" className="py-20">
            <div className="mx-auto max-w-2xl">
                <div className="mb-10 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
                        FAQ
                    </p>
                    <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
                        Pertanyaan Umum
                    </h2>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#111118] px-4 sm:px-6">
                    {FAQS.map((faq) => (
                        <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <p className="mb-4 font-medium text-slate-300">
                        Masih ada pertanyaan lain?
                    </p>
                    <a
                        href={WA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                            onCtaClick(
                                "faq_primary",
                                "Hubungi Kami via WhatsApp",
                                WA_URL,
                            )
                        }
                    >
                        <Button variant="primary" size="lg">
                            <MessageCircle size={18} />
                            Hubungi Kami via WhatsApp
                        </Button>
                    </a>
                    <p className="mt-3 text-sm font-semibold text-slate-300">
                        Telah melatih 100.000+ Sales, 20 tahun pengalaman
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
