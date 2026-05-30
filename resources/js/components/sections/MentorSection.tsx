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
    '10 tahun berturut-turut Personal Coach Miss Indonesia untuk Miss World',
    'Program Character Building: finalis Indonesian Idol, X Factor, The Voice & Rising Star',
    'Coaching atlit PON & Asian Games, berhasil meraih medali emas',
    'Menginspirasi lebih dari 1.000.000 orang offline & online',
    'Seminar & Training di lebih dari 30 kota besar Indonesia',
    'Melayani ratusan klien perusahaan nasional, multinasional, BUMN & pemerintahan',
    'Public Speaking Training lebih dari 130 angkatan',
    'Menghasilkan Inspirator, Motivator, Trainer & Penulis Buku via Certified Train For Trainer',
    'Diliput berbagai media cetak, online, televisi, dan radio',
    'Praktisi Sales & Marketing sekaligus Founder Next Level Training & Motivation',
    'Gaya penyampaian: dinamis, kreatif, menggugah, fun dan entertaining',
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

                {/* Credential stats — prominent di atas */}
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

                {/* Photo + Bio */}
                <div className="mt-12 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">

                    {/* Foto Coach */}
                    <div className="shrink-0">
                        <div className="relative flex flex-col items-center">
                            <img
                                src="/storage/mentor/hardyanto.webp"
                                alt="Haryanto Kandani - Achievement Motivator"
                                className="h-56 w-auto cursor-pointer object-contain drop-shadow-xl sm:h-72 lg:h-80"
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
                    </div>

                    {/* Bio */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-black text-white">Haryanto Kandani</h3>
                        <p className="mt-1 font-medium text-blue-400">Achievement Motivator · Founder Next Level Training & Motivation</p>

                        <p className="mt-4 leading-relaxed text-slate-400">
                            Praktisi Sales & Marketing dan Achievement Motivator dengan rekam jejak yang tak tertandingi.
                            Dipercaya oleh ratusan perusahaan besar, termasuk{' '}
                            <strong className="text-white">
                                {NOTABLE_CLIENTS.join(', ')}
                            </strong>{' '}
                            serta atlit olimpiade, finalis ajang nasional, hingga jutaan audiens di seluruh Indonesia.
                        </p>

                        {/* Credential bullet list */}
                        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                            {HIGHLIGHTS.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-xs leading-snug text-slate-300 sm:text-sm">
                                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-blue-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
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
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
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
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
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
