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

    const openLightbox = useCallback(() => setLightboxOpen(true), []);
    const closeLightbox = useCallback(() => setLightboxOpen(false), []);

    // Close on Escape key
    useEffect(() => {
        if (!lightboxOpen) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
        };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [lightboxOpen, closeLightbox]);

    // Prevent body scroll when lightbox open
    useEffect(() => {
        if (lightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [lightboxOpen]);

    return (
        <SectionWrapper id="social-proof" bg="dark" className="py-14">
            <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
                Dipercaya oleh ratusan perusahaan nasional &amp; multinasional
            </p>

            {/* Infinite Scroll Logo Ticker */}
            <div
                className="ticker-mask overflow-hidden cursor-pointer group"
                onClick={openLightbox}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(); }}
                aria-label="Klik untuk melihat logo perusahaan secara detail"
                title="Klik untuk melihat detail"
            >
                <div className="ticker-track">
                    {Array.from({ length: REPEAT }).map((_, i) => (
                        <img
                            key={i}
                            src={LOGO_SRC}
                            alt={i === 0 ? 'Logo perusahaan klien PBM' : ''}
                            aria-hidden={i > 0}
                            className="h-28 w-auto max-w-none flex-shrink-0 object-contain select-none transition-transform duration-300 group-hover:scale-[1.02] sm:h-36 lg:h-44"
                            draggable={false}
                        />
                    ))}
                </div>
                {/* Hover hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="bg-black/70 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                        </svg>
                        Klik untuk memperbesar
                    </span>
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md animate-fade-in"
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Detail logo perusahaan"
                >
                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 text-white text-sm font-medium transition-all duration-200 cursor-pointer"
                        aria-label="Tutup"
                    >
                        <span>Tutup</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Image container — scrollable */}
                    <div
                        className="max-h-[90vh] max-w-[95vw] overflow-auto rounded-2xl bg-white p-4 shadow-2xl animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={LOGO_SRC}
                            alt="Logo perusahaan klien PBM — detail"
                            className="w-full max-w-[1400px] h-auto object-contain"
                        />
                    </div>
                </div>
            )}

            {/* Stats */}
            <div className="mt-10 flex flex-wrap justify-center gap-5 text-center sm:gap-8">
                {STATS.map((stat) => (
                    <div key={stat.label}>
                        <div className="text-xl font-black text-white sm:text-2xl">{stat.value}</div>
                        <div className="mt-0.5 text-sm text-slate-400">{stat.label}</div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
