import { TrendingDown, Users, Clock, DollarSign } from 'lucide-react';
import SectionWrapper from '@/components/ui/section-wrapper';

const CONSEQUENCES = [
    {
        icon: TrendingDown,
        title: 'Target terus naik, hasil tetap stagnan',
        desc: 'Setiap bulan target bertambah, tapi teknik yang sama hanya menghasilkan angka yang sama, bahkan lebih buruk.',
    },
    {
        icon: Users,
        title: 'Kompetitor makin jauh meninggalkan Anda',
        desc: 'Sementara Anda masih mencoba-coba, rekan sejawat dengan skill yang tepat sudah closing lebih banyak dan lebih cepat.',
    },
    {
        icon: Clock,
        title: 'Waktu dan energi terbuang tanpa hasil',
        desc: 'Jam kerja sudah maksimal, tapi closing rate tidak bergerak. Tanpa framework yang benar, kerja keras saja tidak cukup.',
    },
    {
        icon: DollarSign,
        title: 'Income tidak mencerminkan usaha Anda',
        desc: 'Anda layak dibayar lebih, tapi tanpa perubahan strategi, gap antara usaha dan penghasilan akan terus melebar.',
    },
];

export default function AgitationSection() {
    return (
        <SectionWrapper id="agitation" bg="slate" className="py-20">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-400">
                        Bayangkan 6 Bulan Lagi
                    </p>
                    <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
                        Masih Berjuang di Tempat yang Sama?
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                        Tanpa perubahan strategi yang nyata, inilah yang akan terus terjadi:
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    {CONSEQUENCES.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="flex items-start gap-4 rounded-2xl border border-red-500/10 bg-[#0A0A0F] p-5"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10">
                                <Icon size={18} className="text-red-400" />
                            </div>
                            <div>
                                <p className="font-bold text-white">{title}</p>
                                <p className="mt-1 text-sm leading-relaxed text-slate-500">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 rounded-2xl border border-white/5 bg-[#0A0A0F] p-6 text-center">
                    <p className="text-lg font-bold text-white">
                        Kapan waktunya berubah, kalau bukan sekarang?
                    </p>
                    <p className="mt-2 text-slate-400">
                        Setiap bulan yang berlalu tanpa perubahan adalah biaya yang tidak kelihatan, tapi terasa.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
