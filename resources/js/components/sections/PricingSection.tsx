import { useState } from 'react';
import { CheckCircle, Lock, RefreshCw, ShieldCheck, Tag, ThumbsUp, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/ui/section-wrapper';
import { generateEventId } from '@/hooks/use-analytics';

const WA_NUMBER = '6281385059742';
const WA_TEXT   = encodeURIComponent('Halo, saya ingin mendaftar Sales & Marketing Skills Training. Mohon informasi lebih lanjut.');

const INCLUDES = [
    'Buffet Lunch & Coffee Break',
    'Hand Out Materi',
    'Sertifikat',
    'Mentoring via WhatsApp Group',
    'Reseat & Refresh (ikuti kelas berkali-kali gratis)',
];

const GUARANTEES = [
    { icon: RefreshCw,   title: 'Reseat Gratis',    desc: 'Tidak bisa hadir? Ikuti kloter berikutnya tanpa biaya tambahan.' },
    { icon: ShieldCheck, title: 'Materi Terbukti',  desc: 'Semua strategi diuji 20+ tahun langsung di lapangan.' },
    { icon: ThumbsUp,    title: 'Dukungan Penuh',   desc: 'Tim kami siap membantu Anda setelah mengikuti program.' },
];

const MENTOR_PHOTO = '/storage/mentor/POTO 1_HITAM1.webp';

interface PricingSectionProps {
    onPayClick: (text: string, dest: string, eventId: string) => void;
}

export default function PricingSection({ onPayClick }: PricingSectionProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

    const handleRegister = () => {
        const eventId = generateEventId();
        onPayClick('Bayar Sekarang', waUrl, eventId);
        window.open(waUrl, '_blank');
    };

    return (
        <>
            <SectionWrapper id="pricing" bg="white" className="py-20">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Investasi Anda
                    </p>
                    <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
                        Satu Hari yang Mengubah Karir Anda
                    </h2>
                    <p className="mt-4 text-slate-500">
                        Program ini hanya diadakan <strong>2–3 bulan sekali</strong>. Jangan lewatkan kesempatan ini.
                    </p>
                </div>

                <div className="mt-12 grid items-start gap-6 sm:gap-8 lg:grid-cols-2">

                    {/* Kiri: foto mentor + guarantee cards */}
                    <div className="flex flex-col gap-6">
                        <div className="group cursor-pointer" onClick={() => setLightboxOpen(true)}>
                            <div className="overflow-hidden rounded-3xl">
                                <img
                                    src={MENTOR_PHOTO}
                                    alt="Haryanto Kandani - Achievement Motivator"
                                    className="h-52 w-full object-contain transition-transform duration-300 group-hover:scale-105 sm:h-72 lg:h-80"
                                    loading="lazy"
                                />
                            </div>
                            <div className="mt-4 border-t border-slate-200 pt-4">
                                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Fasilitator</p>
                                <p className="mt-1 text-xl font-black text-slate-900">Haryanto Kandani</p>
                                <p className="mt-1 text-sm text-slate-500">Achievement Motivator & Founder Next Level Training & Motivation</p>
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">20+ Tahun Pengalaman</span>
                                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">1.000.000+ Diinspirasi</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-3">
                            {GUARANTEES.map(({ icon: Icon, title, desc }) => (
                                <div key={title} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 sm:p-4">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                                        <Icon size={16} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">{title}</p>
                                        <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Kanan: pricing card */}
                    <div className="flex flex-col">
                        <div className="overflow-hidden rounded-3xl border-2 border-blue-600 bg-white shadow-2xl shadow-blue-100">
                            <div className="p-5 sm:p-8">
                                <p className="text-sm font-semibold text-blue-600">Sales & Marketing Skills Training</p>
                                <p className="mt-1 text-sm text-slate-500">Offline · Hotel DoubleTree by Hilton Kemayoran – Jakarta Pusat</p>
                                <p className="mt-0.5 text-sm text-slate-500">Senin, 27 Juli 2026 · 09.30 – 16.00 WIB</p>

                                <div className="mt-6">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-medium text-slate-400 line-through">Rp 3.500.000</span>
                                        <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-bold text-red-600">
                                            HEMAT 43%
                                        </span>
                                    </div>
                                    <div className="mt-1 flex items-end gap-3">
                                        <span className="text-3xl font-black text-slate-900 sm:text-4xl">Rp 2.000.000</span>
                                        <span className="mb-1 text-sm font-semibold text-blue-600">Super Early Bird</span>
                                    </div>
                                    <div className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
                                        <Tag size={12} className="shrink-0" />
                                        Khusus Lunas Hari Ini. Promo Terbatas
                                    </div>
                                </div>

                                <ul className="mt-6 space-y-2.5">
                                    {INCLUDES.map((item) => (
                                        <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                                            <CheckCircle size={16} className="mt-0.5 shrink-0 text-blue-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="mt-8 w-full"
                                    onClick={handleRegister}
                                >
                                    Bayar Sekarang · Rp 2.000.000
                                </Button>

                                <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-500">
                                    <Lock size={12} className="shrink-0" />
                                    Reseat gratis · Tidak puas? Hubungi kami
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 flex items-start gap-2 rounded-xl bg-amber-50 p-4 text-sm text-amber-700 sm:items-center sm:justify-center">
                            <Zap size={16} className="mt-0.5 shrink-0 sm:mt-0" />
                            <span>Program ini hanya diadakan 2–3 bulan sekali. Kloter berikutnya mungkin penuh lebih cepat.</span>
                        </div>
                    </div>

                </div>
            </SectionWrapper>

            {/* Lightbox */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    onClick={() => setLightboxOpen(false)}
                >
                    <button
                        onClick={() => setLightboxOpen(false)}
                        className="absolute right-4 top-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-slate-700 text-white transition-colors hover:bg-slate-600"
                        aria-label="Tutup gambar"
                    >
                        <X size={18} />
                    </button>
                    <img
                        src={MENTOR_PHOTO}
                        alt="Haryanto Kandani - Achievement Motivator"
                        className="max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}
