import SectionWrapper from '@/components/ui/section-wrapper';
import { useState, useEffect, useCallback } from 'react';

const STATS = [
    { value: '1.000.000+', label: 'Orang Diinspirasi' },
    { value: '30+',        label: 'Kota Besar Indonesia' },
    { value: '130+',       label: 'Angkatan Training' },
];

const LOGO_SRC = '/storage/misc/logo-perusahaan.webp';
const REPEAT = 6;

export default function SocialProofSection() {
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const openLightbox  = useCallback(() => setLightboxOpen(true), []);
    const closeLightbox = useCallback(() => setLightboxOpen(false), []);

    useEffect(() => {
        if (!lightboxOpen) return;
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLightbox(); };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [lightboxOpen, closeLightbox]);

    useEffect(() => {
        document.body.style.overflow = lightboxOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [lightboxOpen]);

    return (
        <>
            <SectionWrapper id="social-proof" bg="dark" className="py-14">

                {/* Header with decorative rule */}
                <div className="mb-8 flex flex-col items-center gap-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Dipercaya oleh ratusan perusahaan nasional &amp; multinasional
                    </p>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
                </div>

                {/* Infinite scroll logo ticker */}
                <div
                    className="group relative cursor-pointer overflow-hidden"
                    onClick={openLightbox}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(); }}
                    aria-label="Klik untuk melihat logo perusahaan secara detail"
                >
                    {/* Wide edge fades to hide repeat seams */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#1C1C1E] to-transparent sm:w-40 lg:w-56" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#1C1C1E] to-transparent sm:w-40 lg:w-56" />

                    <div className="ticker-track opacity-90">
                        {Array.from({ length: REPEAT }).map((_, i) => (
                            <img
                                key={i}
                                src={LOGO_SRC}
                                alt={i === 0 ? 'Logo perusahaan klien PBM' : ''}
                                aria-hidden={i > 0}
                                className="h-24 w-auto max-w-none flex-shrink-0 select-none object-contain sm:h-32 lg:h-40"
                                draggable={false}
                            />
                        ))}
                    </div>

                    {/* Hover hint */}
                    <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                            </svg>
                            Klik untuk memperbesar
                        </span>
                    </div>
                </div>

                {/* Stats — divider style, larger numbers */}
                <div className="mt-10 flex items-stretch justify-center divide-x divide-slate-700/60">
                    {STATS.map(({ value, label }) => (
                        <div key={label} className="flex flex-col items-center px-6 text-center sm:px-10 lg:px-14">
                            <span className="text-2xl font-black tabular-nums text-white sm:text-3xl lg:text-4xl">
                                {value}
                            </span>
                            <span className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>

            </SectionWrapper>

            {/* Lightbox — outside SectionWrapper to avoid z-index constraints */}
            {lightboxOpen && (
                <div
                    className="animate-fade-in fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md"
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Detail logo perusahaan"
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute right-4 top-4 z-10 flex cursor-pointer items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
                        aria-label="Tutup"
                    >
                        <span>Tutup</span>
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div
                        className="animate-scale-in max-h-[90vh] max-w-[95vw] overflow-auto rounded-2xl bg-white p-4 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={LOGO_SRC}
                            alt="Logo perusahaan klien PBM — detail"
                            className="h-auto w-full max-w-[1400px] object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
