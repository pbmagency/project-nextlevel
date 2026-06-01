import SectionWrapper from '@/components/ui/section-wrapper';

const LOGO_SRC = '/storage/misc/logo-perusahaan.webp';

const LOGOS = [
    { src: '/storage/social/bca-logo.webp',           alt: 'BCA' },
    { src: '/storage/social/unilever-logo.webp',      alt: 'Unilever' },
    { src: '/storage/social/prudential-logo.webp',    alt: 'Prudential' },
    { src: '/storage/social/samsung-logo.webp',       alt: 'Samsung' },
    { src: '/storage/social/axa-logo.webp',           alt: 'AXA' },
    { src: '/storage/social/citibank-logo.webp',      alt: 'Citibank' },
    { src: '/storage/social/ibm-logo.webp',           alt: 'IBM' },
    { src: '/storage/social/loreal-logo.webp',        alt: "L'Oreal" },
    { src: '/storage/social/fedex-logo.webp',         alt: 'FedEx' },
    { src: '/storage/social/bankindonesia-logo.webp', alt: 'Bank Indonesia' },
    { src: '/storage/social/agunggroup-logo.webp',    alt: 'Agung Group' },
    { src: '/storage/social/agungland-logo.webp',     alt: 'Agung Land' },
];

export default function SocialProofSection() {
    return (
        <SectionWrapper id="social-proof" bg="dark" className="pt-8 pb-10 lg:py-12">

            <p className="mb-8 text-center text-[0.65rem] font-bold uppercase tracking-[0.3em] text-slate-500 sm:text-xs">
                Dipercaya oleh ratusan perusahaan nasional &amp; multinasional
            </p>

            {/* 12-logo grid */}
            <div className="mx-auto grid max-w-2xl grid-cols-3 gap-3 sm:gap-4">
                {LOGOS.map(({ src, alt }) => (
                    <div
                        key={alt}
                        className="flex aspect-5/3 items-center justify-center rounded-xl border border-white/[0.07] bg-white/3 p-3 transition-colors duration-200 hover:bg-white/6"
                    >
                        <img
                            src={src}
                            alt={alt}
                            className="h-full w-full object-contain opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            {/* Infinite marquee */}
            <div className="ticker-mask mt-10 overflow-hidden">
                <div className="ticker-track">
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
