import { ArrowDown, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import SectionWrapper from '@/components/ui/section-wrapper';

const BEFORE = [
    'Kesulitan mencapai target penjualan bulanan',
    'Terjebak pusaran banting harga antar kompetitor',
    'Tidak tahu cara membalikkan penolakan konsumen',
    'Bingung memetakan strategi untuk pasar baru',
];

const AFTER = [
    'Grafik performa penjualan melonjak tajam secara berkala',
    'Bernegosiasi berwibawa tanpa mengorbankan margin',
    'Mahir membalikkan penolakan menjadi persetujuan',
    'Menguasai strategi adaptif untuk menjangkau pasar baru',
];

export default function ProblemSection() {
    return (
        <SectionWrapper id="problem" bg="slate" className="py-24">
            <div className="mx-auto max-w-5xl">

                {/* Header */}
                <div className="mb-14 text-center">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-blue-500">
                        Transformasi yang Dijanjikan
                    </p>
                    <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                        Dari frustrasi hari ini,{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            menuju performa penjualan yang melonjak.
                        </span>
                    </h2>
                </div>

                {/* Before / After comparison */}
                <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">

                    {/* Before */}
                    <div className="flex-1 rounded-2xl border border-white/5 bg-[#0D1117] p-6">
                        <div className="mb-5 flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                            <p className="font-bold text-white">Kondisi Saat Ini</p>
                        </div>
                        <ul className="space-y-4">
                            {BEFORE.map((item) => (
                                <li key={item} className="flex items-start gap-3 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                    <XCircle size={18} className="mt-0.5 shrink-0 text-red-500/70" />
                                    <span className="text-sm leading-relaxed text-slate-400">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Arrow — down on mobile, right on desktop */}
                    <div className="flex shrink-0 items-center justify-center">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500 shadow-lg shadow-blue-900/60">
                            <ArrowDown size={20} className="text-white sm:hidden" />
                            <ArrowRight size={20} className="hidden text-white sm:block" />
                        </div>
                    </div>

                    {/* After */}
                    <div className="flex-1 rounded-2xl border border-blue-500/20 bg-[#0D1B2E] p-6">
                        <div className="mb-5 flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                            <p className="font-bold text-white">Setelah Mengikuti Pelatihan</p>
                        </div>
                        <ul className="space-y-4">
                            {AFTER.map((item) => (
                                <li key={item} className="flex items-start gap-3 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-400/80" />
                                    <span className="text-sm leading-relaxed text-slate-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
}
