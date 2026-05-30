import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/ui/section-wrapper';

const WA_NUMBER = '6281385059742';
const WA_TEXT = encodeURIComponent('Halo, saya ingin mendaftar Sales & Marketing Skills Training.');

const FAQS = [
    { q: 'Siapa saja yang cocok mengikuti training ini?', a: 'Training ini dirancang untuk semua profesional yang bergerak di bidang penjualan langsung: sales asuransi, network marketing, sales otomotif, medical representative, dan semua bidang sales lintas sektor. Baik yang baru mulai maupun yang sudah berpengalaman akan mendapat value nyata.' },
    { q: 'Apa itu reseat gratis?', a: 'Jika Anda tidak bisa hadir karena alasan tertentu, atau ingin mengulang materi, Anda bisa mengikuti kloter berikutnya tanpa biaya tambahan. Cukup konfirmasi kehadiran ke kami.' },
    { q: 'Apakah materinya bisa diterapkan langsung?', a: 'Ya, itulah keunggulan utama program ini. Semua materi berbasis pengalaman nyata 20+ tahun di lapangan, bukan teori akademis. Anda akan pulang dengan strategi konkret yang bisa langsung dicoba keesokan harinya.' },
    { q: 'Berapa lama program berlangsung?', a: 'Program berlangsung seharian penuh dari pukul 09.30 hingga 16.00 WIB. Termasuk buffet lunch & coffee break di Hotel DoubleTree by Hilton Kemayoran, Jakarta Pusat.' },
    { q: 'Bagaimana cara mendaftar?', a: 'Klik tombol "Bayar Sekarang" di bagian Harga. Anda akan langsung terhubung dengan tim kami melalui WhatsApp untuk menyelesaikan proses pendaftaran dan pembayaran.' },
    { q: 'Apakah ada garansi uang kembali?', a: 'Kami tidak menawarkan refund, namun kami memberikan jaminan reseat gratis. Jika Anda merasa materi tidak sesuai ekspektasi, Anda bisa hadir di kloter berikutnya untuk mendapatkan value lebih.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-white/10 last:border-0">
            <button onClick={() => setOpen(!open)} aria-expanded={open} className="flex w-full cursor-pointer items-center justify-between py-4 text-left text-xs font-semibold text-slate-200 hover:text-blue-400 sm:text-sm">
                <span>{q}</span>
                <ChevronDown size={18} className={`shrink-0 text-slate-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="pb-4 text-sm leading-relaxed text-slate-400">{a}</p>
            </div>
        </div>
    );
}

interface FAQSectionProps {
    onCtaClick: (location: string, text: string, dest: string) => void;
}

export default function FAQSection({ onCtaClick }: FAQSectionProps) {
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;
    return (
        <SectionWrapper id="faq" bg="white" className="py-20">
            <div className="mx-auto max-w-2xl">
                <div className="mb-10 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">FAQ</p>
                    <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">Pertanyaan Umum</h2>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#111118] px-4 sm:px-6">
                    {FAQS.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
                </div>

                <div className="mt-10 text-center">
                    <p className="mb-4 text-slate-400">Masih ada pertanyaan lain?</p>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer" onClick={() => onCtaClick('faq_primary', 'Hubungi Kami via WhatsApp', waUrl)}>
                        <Button variant="primary" size="lg">
                            <MessageCircle size={18} />
                            Hubungi Kami via WhatsApp
                        </Button>
                    </a>
                    <p className="mt-3 text-sm text-slate-500">Telah melatih 100.000+ Sales, 20 tahun pengalaman</p>
                </div>
            </div>
        </SectionWrapper>
    );
}
