import { CheckCircle2 } from 'lucide-react';
import SectionWrapper from '@/components/ui/section-wrapper';
import SectionCta from '@/components/ui/section-cta';

const MATERI = [
    'Success Mindset & Fighting Spirit sebagai Sales Profesional',
    'The Psychology of Selling: Memahami psikologi di balik keputusan konsumen dalam membeli produk',
    'Teknik Negosiasi: Seni bernegosiasi agar kesepakatan berjalan sukses tanpa mengorbankan margin profit',
    'Handling Objection: Strategi mematahkan berbagai alasan, keraguan, dan keberatan dari calon pembeli',
    'Closing the Sales: Metode taktis mengeksekusi penutupan penjualan secara cepat dan instan',
    'Hypno Selling: Teknik komunikasi penjualan yang mempengaruhi keputusan pembelian secara natural',
];

interface BenefitSectionProps {
    onCtaClick: (location: string, text: string, dest: string) => void;
}

export default function BenefitSection({ onCtaClick }: BenefitSectionProps) {
    return (
        <SectionWrapper id="benefit" bg="white" className="py-20">
            <div className="mx-auto max-w-2xl text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                    KURIKULUM TAKTIS
                </p>
                <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
                    6 Pilar Utama untuk Menguasai Pasar &amp; Menutup Penjualan
                </h2>
                <p className="mt-4 text-slate-500">
                    Setiap pilar dirancang berdasarkan pengalaman nyata selama 20 tahun di lapangan, bukan sekadar teori akademis.
                </p>
            </div>

            <div className="mx-auto mt-12 max-w-4xl">
                <ul className="grid gap-3 sm:grid-cols-2">
                    {MATERI.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                        >
                            <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-blue-500" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <SectionCta
                location="benefit"
                onClick={onCtaClick}
                showMentorCta
                socialProof="Telah melatih 100.000+ Sales • 20 tahun pengalaman"
            />
        </SectionWrapper>
    );
}
