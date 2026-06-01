import { TrendingDown, Users, Clock, DollarSign } from 'lucide-react';
import SectionWrapper from '@/components/ui/section-wrapper';

const CONSEQUENCES = [
    { icon: TrendingDown, title: 'Target terus naik, hasil tetap stagnan' },
    { icon: Users,        title: 'Kompetitor makin jauh meninggalkan Anda' },
    { icon: Clock,        title: 'Waktu dan energi terbuang tanpa hasil' },
    { icon: DollarSign,   title: 'Income tidak mencerminkan usaha Anda' },
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
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    {CONSEQUENCES.map(({ icon: Icon, title }) => (
                        <div
                            key={title}
                            className="flex items-start gap-4 rounded-2xl border border-red-500/10 bg-[#0A0A0F] p-5"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10">
                                <Icon size={18} className="text-red-400" />
                            </div>
                            <p className="font-bold text-white">{title}</p>
                        </div>
                    ))}
                </div>

            </div>
        </SectionWrapper>
    );
}
