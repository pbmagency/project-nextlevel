import { useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import SectionCta from "@/components/ui/section-cta";

const GOALS = [
    "Closing rate naik signifikan dalam 30 hari pertama",
    "Percaya diri menghadapi keberatan dan negosiasi berat",
    "Setiap percakapan dengan prospek lebih terarah dan efektif",
    "Tidak lagi bergantung pada keberuntungan untuk closing",
    "Anda berhenti mempertanyakan kemampuan Anda karena hasilnya sudah menjawab",
];

const IMG = "/storage/mentor/haryanto-mengajar_upscaled.webp";

interface SolutionSectionProps {
    onCtaClick: (location: string, text: string, dest: string) => void;
}

export default function SolutionSection({ onCtaClick }: SolutionSectionProps) {
    const [lightbox, setLightbox] = useState(false);

    return (
        <>
            <SectionWrapper id="solution-section" bg="white" className="py-20">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-12 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
                            Training Yang Bantu
                        </p>
                        <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
                            Ubah Kerja Keras Anda Menjadi{" "}
                            <span className="text-blue-400">
                                Closing yang Konsisten
                            </span>
                        </h2>
                    </div>

                    <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
                        {/* Kiri: foto — klikable */}
                        <div
                            className="group cursor-zoom-in overflow-hidden rounded-3xl shadow-2xl shadow-black/60"
                            onClick={() => setLightbox(true)}
                        >
                            <img
                                src={IMG}
                                alt="Haryanto Kandani sedang mengajar"
                                className="w-full object-cover object-top transition-transform duration-300 lg:group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>

                        {/* Kanan: goals */}
                        <div>
                            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-400">
                                Sales &amp; Marketing Training
                            </p>
                            <p className="font-medium leading-relaxed text-slate-300">
                                <strong className="text-white">
                                    Coach Haryanto Kandani{" "}
                                </strong>
                                tidak hanya mengajarkan cara menjual. Ia
                                membantu Anda melihat di mana selama ini Anda
                                kehilangan deal, dengan framework yang sudah{" "}
                                terbukti lebih dari 20 tahun
                            </p>

                            <p className="mt-4 font-semibold text-white">
                                Setelah 1 hari bersama kami, Anda akan mampu:
                            </p>

                            <ul className="mt-4 space-y-3">
                                {GOALS.map((goal) => (
                                    <li
                                        key={goal}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="mt-0.5 shrink-0 text-blue-500"
                                        />
                                        <span className="text-base font-medium leading-relaxed text-slate-300">
                                            {goal}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 px-4 py-3">
                                <p className="text-base font-medium text-blue-300">
                                    <strong className="text-blue-300">
                                        Training Offline, 1 Hari Intensif
                                    </strong>
                                </p>
                                <p className="text-base font-medium text-slate-200">
                                    Senin, 27 Juli 2026, Hotel DoubleTree by
                                    Hilton Kemayoran, Jakarta Pusat
                                </p>
                            </div>
                        </div>
                    </div>

                    <SectionCta
                        location="solution-section"
                        onClick={onCtaClick}
                        showMentorCta
                        socialProof="Telah melatih 100.000+ Sales • 20 tahun pengalaman"
                    />
                </div>
            </SectionWrapper>

            {lightbox && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    onClick={() => setLightbox(false)}
                >
                    <button
                        onClick={() => setLightbox(false)}
                        className="absolute right-4 top-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-slate-700 text-white transition-colors hover:bg-slate-600"
                        aria-label="Tutup gambar"
                    >
                        <X size={18} />
                    </button>
                    <img
                        src={IMG}
                        alt="Haryanto Kandani sedang mengajar"
                        className="max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}
