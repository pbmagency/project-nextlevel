import SectionWrapper from '@/components/ui/section-wrapper';

const LOGO_SRC = '/storage/misc/logo-perusahaan.webp';

const PLACEHOLDERS = Array.from({ length: 12 }, (_, i) => i + 1);

export default function SocialProofSection() {
    return (
        <SectionWrapper id="social-proof" bg="dark" className="py-14">

            {/* Title */}
            <p className="mb-8 text-center text-[0.65rem] font-bold uppercase tracking-[0.3em] text-slate-500 sm:text-xs">
                Dipercaya oleh ratusan perusahaan nasional &amp; multinasional
            </p>

            {/* 12-logo grid — 3 cols × 4 rows */}
            <div className="mx-auto grid max-w-2xl grid-cols-3 gap-3 sm:gap-4">
                {PLACEHOLDERS.map((n) => (
                    <div
                        key={n}
                        className="flex aspect-5/3 items-center justify-center rounded-xl border border-white/[0.07] bg-white/3 transition-colors duration-200 hover:bg-white/6"
                    >
                        <span className="text-[0.6rem] font-semibold tracking-widest text-slate-700 sm:text-xs">
                            LOGO {n}
                        </span>
                    </div>
                ))}
            </div>

            {/* Infinite scroll ticker */}
            <div className="ticker-mask relative mt-10 overflow-hidden">
                <div className="ticker-track flex">
                    {[0, 1].map((i) => (
                        <img
                            key={i}
                            src={LOGO_SRC}
                            alt={i === 0 ? 'Logo perusahaan klien PBM Agency' : ''}
                            aria-hidden={i > 0}
                            className="h-16 w-auto max-w-none shrink-0 select-none object-contain opacity-40 sm:h-24"
                            draggable={false}
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>

        </SectionWrapper>
    );
}
