import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, X } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import SectionCta from "@/components/ui/section-cta";

const TESTIMONIALS = [
    {
        name: "Robert Tan",
        role: "Principal, Multiland Indonesia Property Agent",
        photo: "/storage/testimoni/robert-tan.webp",
        text: "Sungguh luar biasa! Sejak mengikuti seminar yang Bapak Haryanto Kandani bawakan, team marketing kami mencapai hasil yang sangat luar biasa tahun ini. Target yang diberikan oleh perusahaan dapat diraih oleh agen-agen marketing kami hanya dalam waktu 5 bulan.",
    },
    {
        name: "Daniel Indrianto",
        role: "Asst. CEO Bukit Mediterania Samarinda, Member of Agung Podomoro Group",
        photo: "/storage/testimoni/daniel-indrianto.webp",
        text: "Mr. Haryanto's motivation lecture is really moving ourselves instantly to get motivated. His lecture is lively, fun, easy to digest, and straight professionalism. Overall is excellent!",
    },
    {
        name: "Hengky Tan Malaka",
        role: "Wealth Director, PT. AXA Financial Indonesia",
        photo: "/storage/testimoni/hengky-tan-malaka.webp",
        text: "Saat mengikuti seminar Pak Haryanto Kandani pendekatannya logis dengan bahasa yang sederhana tapi dapat menyentuh, membuat suatu perasaan bergejolak sehingga menimbulkan keyakinan yang kuat dalam memotivasi diri. Hal ini menjadi modal utama kesuksesan.",
    },
];

const PROOF_IMAGES = [
    "/storage/testimoni/proof/20180730_115219.webp.webp",
    "/storage/testimoni/proof/20180730_121151.webp.webp",
    "/storage/testimoni/proof/20180730_135732.webp.webp",
    "/storage/testimoni/proof/SmartSelect_20180720-132430_WhatsApp-Business.webp.webp",
    "/storage/testimoni/proof/SmartSelect_20180720-154419_WhatsApp-Business.webp.webp",
    "/storage/testimoni/proof/SmartSelect_20180720-160458_WhatsApp-Business.webp.webp",
    "/storage/testimoni/proof/SmartSelect_20180720-163049_Gallery.webp.webp",
    "/storage/testimoni/proof/SmartSelect_20180720-163254_WhatsApp-Business.webp.webp",
    "/storage/testimoni/proof/SmartSelect_20180720-163614_WhatsApp-Business.webp.webp",
    "/storage/testimoni/proof/SmartSelect_20180720-190359_WhatsApp-Business.webp.webp",
    "/storage/testimoni/proof/SmartSelect_20180728-085827_WhatsApp-Business.webp.webp",
    "/storage/testimoni/proof/SmartSelect_20180730-115538_WhatsApp-Business.webp.webp",
    "/storage/testimoni/proof/SmartSelect_20180730-120129_WhatsApp-Business.webp.webp",
    "/storage/testimoni/proof/SmartSelect_20180730-232548_WhatsApp-Business.webp.webp",
];

const FEATURED = PROOF_IMAGES.slice(0, 3);
const CAROUSEL = PROOF_IMAGES.slice(3);

function StarRating() {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={12}
                    className="text-amber-400"
                    fill="currentColor"
                />
            ))}
        </div>
    );
}

function ProofLightbox({
    images,
    index,
    onClose,
    onPrev,
    onNext,
}: {
    images: string[];
    index: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-sm"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Tutup"
            >
                <X size={18} />
            </button>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                }}
                className="absolute left-4 p-2 text-white/60 transition-colors hover:text-white"
                aria-label="Sebelumnya"
            >
                <ChevronLeft size={36} />
            </button>
            <div
                className="flex flex-col items-center gap-3 px-16"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={images[index]}
                    alt={`Bukti peserta ${index + 1}`}
                    className="max-h-[82vh] max-w-[360px] w-full rounded-2xl object-contain shadow-2xl"
                />
                <p className="text-xs text-white/40">
                    {index + 1} / {images.length}
                </p>
            </div>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                }}
                className="absolute right-4 p-2 text-white/60 transition-colors hover:text-white"
                aria-label="Berikutnya"
            >
                <ChevronRight size={36} />
            </button>
        </div>
    );
}

interface TestimoniSectionProps {
    onCtaClick: (location: string, text: string, dest: string) => void;
}

export default function TestimoniSection({
    onCtaClick,
}: TestimoniSectionProps) {
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
    const [proofIndex, setProofIndex] = useState<number | null>(null);

    const openProof = (i: number) => setProofIndex(i);
    const closeProof = () => setProofIndex(null);
    const prevProof = () =>
        setProofIndex((i) =>
            i !== null
                ? (i - 1 + PROOF_IMAGES.length) % PROOF_IMAGES.length
                : null,
        );
    const nextProof = () =>
        setProofIndex((i) =>
            i !== null ? (i + 1) % PROOF_IMAGES.length : null,
        );

    return (
        <>
            <SectionWrapper id="testimoni-section" bg="slate" className="py-20">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
                        Testimoni Alumni
                    </p>
                    <h2 className="text-2xl font-black text-white sm:text-4xl">
                        Lihat Kata Mereka Tentang Kami
                    </h2>
                </div>

                {/* Proof section — di atas */}
                {/* <div className="mt-10">
                    <p className="mb-4 text-center text-sm font-medium text-slate-300">
                        Klik untuk memperbesar
                    </p>

                    <div className="mx-auto grid max-w-3xl grid-cols-3 gap-3">
                        {FEATURED.map((src, i) => (
                            <div
                                key={src}
                                className="group relative cursor-zoom-in overflow-hidden rounded-2xl"
                                style={{
                                    aspectRatio: "9/16",
                                    boxShadow: "0 6px 24px rgba(0,0,0,0.4)",
                                }}
                                onClick={() => openProof(i)}
                            >
                                <img
                                    src={src}
                                    alt={`Bukti peserta ${i + 1}`}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/25">
                                    <span className="scale-75 rounded-full bg-black/50 px-3 py-1 text-xs font-bold text-white opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                                        Perbesar
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        className="mt-4 overflow-hidden"
                        style={{
                            maskImage:
                                "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
                            WebkitMaskImage:
                                "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
                        }}
                    >
                        <div
                            className="infinite-track"
                            style={{ animationDuration: "55s" }}
                        >
                            {[...CAROUSEL, ...CAROUSEL].map((src, i) => (
                                <div
                                    key={i}
                                    className="group relative mx-2 shrink-0 cursor-zoom-in overflow-hidden rounded-xl"
                                    style={{
                                        width: "120px",
                                        aspectRatio: "9/16",
                                        boxShadow:
                                            "0 4px 16px rgba(0,0,0,0.35)",
                                    }}
                                    onClick={() =>
                                        openProof(
                                            (i % CAROUSEL.length) +
                                                FEATURED.length,
                                        )
                                    }
                                >
                                    <img
                                        src={src}
                                        alt={`Bukti peserta`}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/20" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}

                {/* Text testimonials — di bawah proof */}
                <div className="mt-16 grid gap-4 sm:grid-cols-3">
                    {TESTIMONIALS.map((t) => (
                        <div
                            key={t.name}
                            className="flex flex-col rounded-2xl border border-white/5 bg-[#161620] px-5 py-5 shadow-sm"
                        >
                            <StarRating />
                            <blockquote className="mt-3 flex-1 text-base font-medium leading-relaxed text-slate-200 italic">
                                "{t.text}"
                            </blockquote>
                            <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
                                <img
                                    src={t.photo}
                                    alt={t.name}
                                    className="h-10 w-10 shrink-0 cursor-pointer rounded-full object-cover object-top ring-2 ring-white/10"
                                    loading="lazy"
                                    onClick={() => setLightboxSrc(t.photo)}
                                />
                                <div>
                                    <p className="text-base font-bold text-white">
                                        {t.name}
                                    </p>
                                    <p className="mt-1 text-sm font-medium leading-snug text-slate-300">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <SectionCta
                    location="testimoni"
                    onClick={onCtaClick}
                    showMentorCta
                    socialProof="Telah melatih 100.000+ Sales • 20 tahun pengalaman"
                />
            </SectionWrapper>

            {/* Lightbox — text testimonial photo */}
            {lightboxSrc && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
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
                        alt="Foto testimoni"
                        className="max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            {/* Lightbox — proof images */}
            {proofIndex !== null && (
                <ProofLightbox
                    images={PROOF_IMAGES}
                    index={proofIndex}
                    onClose={closeProof}
                    onPrev={prevProof}
                    onNext={nextProof}
                />
            )}
        </>
    );
}
