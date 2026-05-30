import { useEffect, useRef, useState } from 'react';
import { ImageIcon, Star, X } from 'lucide-react';
import SectionWrapper from '@/components/ui/section-wrapper';
import SectionCta from '@/components/ui/section-cta';

const TESTIMONIALS = [
    {
        name: 'Robert Tan',
        role: 'Principal · Multiland Indonesia Property Agent',
        initials: 'RT',
        text: 'Sejak mengikuti seminar yang Bapak Haryanto Kandani bawakan, team marketing kami mencapai hasil yang sangat luar biasa tahun ini. Target yang diberikan oleh perusahaan, dapat diraih oleh agen-agen marketing kami hanya dalam waktu 5 bulan.',
    },
    {
        name: 'Laras Puruhita',
        role: 'Manager · PT. Panca Sinar Kasih',
        initials: 'LP',
        text: 'Membawa hal yang positif dan memberikan terobosan baru. Serta memberikan masukan baru yang baik, inovatif dan positif untuk kehidupan pribadi dan dapat diaplikasikan di dalam pekerjaan juga.',
    },
];

/**
 * Isi array ini dengan foto peserta saat sudah tersedia.
 * Format: { src: '/storage/testimoni/nama.webp', name: 'Nama Peserta', role: 'Jabatan · Perusahaan' }
 */
const PHOTO_ITEMS: { src?: string; name: string; role: string }[] = [
    { name: 'Peserta 1', role: 'Sales · Perusahaan' },
    { name: 'Peserta 2', role: 'Sales · Perusahaan' },
    { name: 'Peserta 3', role: 'Sales · Perusahaan' },
    { name: 'Peserta 4', role: 'Sales · Perusahaan' },
    { name: 'Peserta 5', role: 'Sales · Perusahaan' },
    { name: 'Peserta 6', role: 'Sales · Perusahaan' },
    { name: 'Peserta 7', role: 'Sales · Perusahaan' },
    { name: 'Peserta 8', role: 'Sales · Perusahaan' },
];

function StarRating() {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="text-amber-400" fill="currentColor" />
            ))}
        </div>
    );
}

interface TestimoniSectionProps {
    onCtaClick: (location: string, text: string, dest: string) => void;
}

export default function TestimoniSection({ onCtaClick }: TestimoniSectionProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const pausedRef = useRef(false);
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        let raf: number;
        let pos = 0; // accumulator untuk sub-pixel scroll

        const tick = () => {
            if (!pausedRef.current) {
                pos += 0.4;
                el.scrollLeft = Math.floor(pos);
                if (el.scrollLeft >= el.scrollWidth / 2) {
                    pos = 0;
                    el.scrollLeft = 0;
                }
            }
            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, []);

    const photoCards = [...PHOTO_ITEMS, ...PHOTO_ITEMS];

    return (
        <>
            <SectionWrapper id="testimoni" bg="slate" className="py-20">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
                        Apa Kata Mereka
                    </p>
                    <h2 className="text-3xl font-black text-white sm:text-4xl">
                        Hasil Nyata dari Peserta Kami
                    </h2>
                    <p className="mt-4 text-slate-400">
                        Bukan janji, ini bukti nyata perubahan yang terjadi setelah mengikuti training.
                    </p>
                </div>

                {/* Editorial: foto mentor kiri + 2 quotes kanan */}
                <div className="mt-10 grid gap-4 sm:gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-stretch">

                    <div
                        className="group cursor-pointer overflow-hidden rounded-3xl shadow-md"
                        onClick={() => setLightboxSrc('/storage/mentor/Krem (bw).webp')}
                    >
                        <img
                            src="/storage/mentor/Krem (bw).webp"
                            alt="Haryanto Kandani - Achievement Motivator"
                            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        {TESTIMONIALS.map((t) => (
                            <div
                                key={t.name}
                                className="flex flex-1 flex-col rounded-2xl border border-white/5 bg-[#161620] px-5 py-4 shadow-sm"
                            >
                                <StarRating />
                                <blockquote className="mt-2.5 flex-1 text-xs leading-relaxed text-slate-400 italic sm:text-sm">
                                    "{t.text}"
                                </blockquote>
                                <div className="mt-3 flex items-center gap-2.5 border-t border-white/10 pt-3">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-slate-400">
                                        {t.initials}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-white">{t.name}</p>
                                        <p className="mt-0.5 text-xs text-slate-400">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Infinite scroll foto peserta — pause on hover */}
                <div className="mt-8">
                    <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
                        Foto Peserta Training
                    </p>
                    <div
                        ref={scrollRef}
                        className="flex gap-3 overflow-hidden"
                        onMouseEnter={() => { pausedRef.current = true; }}
                        onMouseLeave={() => { pausedRef.current = false; }}
                    >
                        {photoCards.map((item, i) => (
                            <div
                                key={i}
                                className={`aspect-square w-24 shrink-0 overflow-hidden rounded-2xl border border-white/5 bg-[#161620] shadow-sm sm:w-32 lg:w-36 ${item.src ? 'cursor-pointer' : ''}`}
                                onClick={() => item.src && setLightboxSrc(item.src)}
                            >
                                {item.src ? (
                                    <img
                                        src={item.src}
                                        alt={item.name}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="flex h-full flex-col items-center justify-center gap-1.5 bg-[#161620]">
                                        <ImageIcon size={22} className="text-slate-500" />
                                        <p className="text-xs font-medium text-slate-400">{item.name}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <SectionCta
                    location="testimoni"
                    onClick={onCtaClick}
                    showMentorCta
                    socialProof="Telah melatih 100.000+ Sales • 20 tahun pengalaman"
                />
            </SectionWrapper>

            {/* Lightbox */}
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
                        alt="Foto peserta training"
                        className="max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}
