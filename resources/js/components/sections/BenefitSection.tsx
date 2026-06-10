import { CheckCircle2 } from 'lucide-react';
import SectionWrapper from '@/components/ui/section-wrapper';
import SectionCta from '@/components/ui/section-cta';

const MATERI = [
    { title: 'Success Mindset & Fighting Spirit', desc: 'Membangun mental juara dan semangat pantang menyerah sebagai sales profesional' },
    { title: 'The Psychology of Selling', desc: 'Memahami psikologi di balik keputusan konsumen dalam membeli produk' },
    { title: 'Teknik Negosiasi', desc: 'Seni bernegosiasi agar kesepakatan berjalan sukses tanpa mengorbankan margin profit' },
    { title: 'Handling Objection', desc: 'Strategi mematahkan berbagai alasan, keraguan, dan keberatan dari calon pembeli' },
    { title: 'Closing the Sales', desc: 'Metode taktis mengeksekusi penutupan penjualan secara cepat dan instan' },
    { title: 'Hypno Selling', desc: 'Teknik komunikasi penjualan yang mempengaruhi keputusan pembelian secara natural' },
];

interface BenefitSectionProps {
    onCtaClick: (location: string, text: string, dest: string) => void;
}

export default function BenefitSection({ onCtaClick }: BenefitSectionProps) {
    return (
        <SectionWrapper id="benefit" bg="slate" className="py-20">
            <div className="mx-auto max-w-2xl text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
                    Materi Training
                </p>
                <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
                    6 Pilar Utama untuk Menguasai Pasar &amp; Menutup Penjualan
                </h2>
            </div>

            <div className="mx-auto mt-12 max-w-4xl">
                <ul className="grid gap-3 sm:grid-cols-2">
                    {MATERI.map((item) => (
                        <li key={item.title} className="flex items-start gap-3 rounded-xl border border-white/5 bg-[#0A0A0F] px-4 py-3.5 text-sm leading-relaxed sm:text-base">
                            <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-blue-500" />
                            <span>
                                <span className="font-semibold text-white">{item.title}:</span>
                                {' '}
                                <span className="text-slate-400">{item.desc}</span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <SectionCta
                location="benefit"
                onClick={onCtaClick}
                dark
                socialProof="Telah melatih 100.000+ Sales • 20 tahun pengalaman"
            />
        </SectionWrapper>
    );
}
