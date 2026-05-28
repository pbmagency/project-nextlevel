import { Fragment } from 'react';
import { Lock, RefreshCw, ShieldCheck, Star, ThumbsUp, Users } from 'lucide-react';
import SectionWrapper from '@/components/ui/section-wrapper';
import SectionCta from '@/components/ui/section-cta';

const GUARANTEES = [
    {
        icon: RefreshCw,
        title: 'Reseat Gratis',
        desc: 'Tidak bisa hadir atau ingin mengulang? Datang ke kloter berikutnya tanpa biaya tambahan. Cukup konfirmasi kehadiran ke tim kami.',
    },
    {
        icon: ShieldCheck,
        title: 'Materi Terbukti',
        desc: 'Semua strategi sudah diuji selama 20 tahun langsung di lapangan, bukan teori yang belum terbukti. Ribuan sales sudah merasakan hasilnya.',
    },
    {
        icon: ThumbsUp,
        title: 'Dukungan Penuh',
        desc: 'Punya pertanyaan setelah training? Tim kami siap membantu. Anda tidak berjalan sendiri setelah mengikuti program ini.',
    },
];

const TRUST_BADGES = [
    { Icon: Users, label: '100.000+ Sales Sudah Dilatih' },
    { Icon: Star, label: '20 Tahun Pengalaman di Lapangan' },
    { Icon: Lock, label: 'Reseat Gratis Tanpa Syarat' },
];

interface GuaranteeSectionProps {
    onCtaClick: (location: string, text: string, dest: string) => void;
}

export default function GuaranteeSection({ onCtaClick }: GuaranteeSectionProps) {
    return (
        <SectionWrapper id="garansi" bg="white" className="py-20">
            <div className="mx-auto max-w-2xl text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                    Jaminan Kami
                </p>
                <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
                    Investasi Anda Terlindungi
                </h2>
                <p className="mt-4 text-slate-500">
                    Kami yakin dengan kualitas program ini. Itulah mengapa kami berani memberikan jaminan yang nyata.
                </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
                {GUARANTEES.map((g) => {
                    const Icon = g.icon;
                    return (
                        <div
                            key={g.title}
                            className="flex flex-col items-center rounded-2xl border border-blue-100 bg-blue-50/50 p-8 text-center"
                        >
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600">
                                <Icon size={24} className="text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">{g.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-500">{g.desc}</p>
                        </div>
                    );
                })}
            </div>

            {/* Trust badge strip */}
            <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:flex-row sm:justify-center sm:gap-8">
                {TRUST_BADGES.map(({ Icon, label }, idx) => (
                    <Fragment key={label}>
                        {idx > 0 && (
                            <div className="hidden h-5 w-px bg-slate-200 sm:block" />
                        )}
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Icon size={16} className="shrink-0 text-blue-500" />
                            <span>{label}</span>
                        </div>
                    </Fragment>
                ))}
            </div>

            <SectionCta
                location="guarantee"
                onClick={onCtaClick}
                showMentorCta
                socialProof="Program hanya diadakan 2–3 bulan sekali • Tempat terbatas"
            />
        </SectionWrapper>
    );
}
