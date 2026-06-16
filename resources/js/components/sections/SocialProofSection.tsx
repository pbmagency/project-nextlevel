import { useState } from "react";
import { X } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";

const LOGOS = [
    { src: "/storage/social/bca-logo-2.webp", alt: "BCA" },
    { src: "/storage/social/unilever-logo.webp", alt: "Unilever" },
    { src: "/storage/social/prudential-logo.webp", alt: "Prudential" },
    { src: "/storage/social/samsung-logo.webp", alt: "Samsung" },
    { src: "/storage/social/axa-logo.webp", alt: "AXA" },
    { src: "/storage/social/citibank-logo.webp", alt: "Citibank" },
    { src: "/storage/social/ibm-logo.webp", alt: "IBM" },
    { src: "/storage/social/ciputra-logo.webp", alt: "Ciputra" },
    { src: "/storage/social/fedex-logo.webp", alt: "FedEx" },
    { src: "/storage/social/bankindonesia-logo-2.webp", alt: "Bank Indonesia" },
    { src: "/storage/social/lippo-logo.webp", alt: "Lippo" },
    { src: "/storage/social/agungland-logo.webp", alt: "Agung Land" },
];

export default function SocialProofSection() {
    const [lightbox, setLightbox] = useState<string | null>(null);

    return (
        <>
            <SectionWrapper
                id="social-proof-section"
                bg="dark"
                className="pt-8 pb-10 lg:py-12"
            >
                <p className="mb-8 text-center text-sm font-bold uppercase tracking-[0.18em] text-slate-300">
                    Dipercaya oleh Perusahaan Nasional &amp; Multinasional
                    Terkemuka
                </p>

                {/* 12-logo grid */}
                <div className="mx-auto grid max-w-2xl grid-cols-3 gap-3 sm:gap-4">
                    {LOGOS.map(({ src, alt }) => (
                        <div
                            key={alt}
                            className="flex aspect-5/3 cursor-zoom-in items-center justify-center rounded-xl border border-white/[0.07] bg-white/3 p-3 transition-colors duration-200 hover:bg-white/6"
                            onClick={() => setLightbox(src)}
                        >
                            <img
                                src={src}
                                alt={alt}
                                className="h-full w-full object-contain opacity-85 transition-opacity duration-200 hover:opacity-100"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {lightbox && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    onClick={() => setLightbox(null)}
                >
                    <button
                        onClick={() => setLightbox(null)}
                        className="absolute right-4 top-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-slate-700 text-white transition-colors hover:bg-slate-600"
                        aria-label="Tutup"
                    >
                        <X size={18} />
                    </button>
                    <img
                        src={lightbox}
                        alt="Logo perusahaan"
                        className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}
