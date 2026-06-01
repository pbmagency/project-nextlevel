import { useState } from 'react';
import { BookOpen, Building2, CheckCircle2, Play, Star, Users, X } from 'lucide-react';
import SectionWrapper from '@/components/ui/section-wrapper';

const STATS = [
    { icon: Users,     value: '1.000.000+', label: 'Orang Diinspirasi' },
    { icon: Building2, value: '30+ Kota',   label: 'Seminar & Training' },
    { icon: Star,      value: '20+ Tahun',  label: 'Pengalaman di Lapangan' },
    { icon: BookOpen,  value: '130+',       label: 'Angkatan Training' },
];

const HIGHLIGHTS = [
    'Praktisi Sales & Marketing sekaligus Founder Next Level Training & Motivation',
    'Melayani ratusan klien perusahaan nasional, multinasional, BUMN & pemerintahan',
    'Menginspirasi lebih dari 1.000.000 orang offline & online',
    'Coaching atlit PON & Asian Games, berhasil meraih medali emas',
];

const NOTABLE_CLIENTS = ['BCA', 'Unilever', 'Prudential', 'Samsung', 'AXA', 'Citibank', 'ExxonMobil', 'IBM'];

const VIDEO_ID = 'qkjNsTmorDs';

export default function MentorSection() {
    const [videoOpen, setVideoOpen] = useState(false);
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    return (
        <>
            <SectionWrapper id="mentor" bg="white" className="py-20">

                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
                        Fasilitator
                    </p>
                    <h2 className="text-3xl font-black text-white sm:text-4xl">
                        Belajar Langsung dari Praktisinya
                    </h2>
                    <p className="mt-4 text-slate-500">
                        Bukan teori. Rekam jejak nyata yang berbicara.
                    </p>
                </div>

                {/* Photo + Bio */}
                <div className="mt-12 grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-12">

                    {/* Foto Coach */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/storage/mentor/hardyanto.webp"
                            alt="Haryanto Kandani - Achievement Motivator"
                            className="w-full max-w-xs cursor-pointer object-contain drop-shadow-xl lg:max-w-none"
                            onClick={() => setLightboxSrc('/storage/mentor/hardyanto.webp')}
                        />
                        <span className="mt-3 inline-block rounded-full border border-blue-600/30 px-4 py-1.5 text-xs font-semibold text-blue-400">
                            Achievement Motivator
                        </span>
                        <button
                            onClick={() => setVideoOpen(true)}
                            className="mt-3 inline-flex cursor-pointer items-center gap-2.5 rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-400 shadow-sm transition-colors hover:bg-blue-500/20"
                        >
                            <Play size={15} className="fill-current text-blue-400" />
                            Tonton Video Profil
                        </button>
                    </div>

                    {/* Bio */}
                    <div>
                        <h3 className="text-3xl font-black text-white lg:text-4xl">Haryanto Kandani</h3>
                        <p className="mt-2 font-semibold text-blue-400">Achievement Motivator, Founder Next Level Training & Motivation</p>

                        <p className="mt-4 text-sm leading-relaxed text-slate-400">
                            Dipercaya oleh{' '}
                            <strong className="text-white">{NOTABLE_CLIENTS.join(', ')}</strong>
                            {' '}serta ratusan perusahaan nasional, multinasional, dan BUMN.
                        </p>

                        {/* Credential bullet list */}
                        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                            {HIGHLIGHTS.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm leading-snug text-slate-300">
                                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-blue-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Credential stats — di bawah bio */}
                <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
                    {STATS.map(({ icon: Icon, value, label }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center rounded-2xl border border-white/5 bg-[#111118] p-4 text-center"
                        >
                            <Icon size={20} className="text-blue-500" />
                            <p className="mt-2 text-lg font-black text-white sm:text-xl">{value}</p>
                            <p className="mt-0.5 text-xs leading-snug text-slate-500">{label}</p>
                        </div>
                    ))}
                </div>

                {/* Gallery */}
                <div className="mt-12">
                    <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
                        Dokumentasi Event
                    </p>
                    <div className="overflow-hidden rounded-2xl">
                        <img
                            src="/storage/misc/offline-session.webp"
                            alt="Dokumentasi seminar dan training Haryanto Kandani di berbagai kota"
                            className="w-full cursor-pointer object-cover"
                            loading="lazy"
                            onClick={() => setLightboxSrc('/storage/misc/offline-session.webp')}
                        />
                    </div>
                </div>

            </SectionWrapper>

            {/* Video Modal */}
            {videoOpen && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                    onClick={() => setVideoOpen(false)}
                >
                    <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setVideoOpen(false)}
                            className="absolute -right-3 -top-3 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-700 text-white transition-colors hover:bg-slate-600"
                            aria-label="Tutup video"
                        >
                            <X size={16} />
                        </button>
                        <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
                            <iframe
                                src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0`}
                                title="Video Profil Coach Haryanto Kandani"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="h-full w-full"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Lightbox Modal */}
            {lightboxSrc && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    onClick={() => setLightboxSrc(null)}
                >
                    <button
                        onClick={() => setLightboxSrc(null)}
                        className="absolute right-4 top-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-slate-700 text-white transition-colors hover:bg-slate-600"
                        aria-label="Tutup gambar"
                    >
                        <X size={18} />
                    </button>
                    <img
                        src={lightboxSrc}
                        alt="Perbesar gambar"
                        className="max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}
