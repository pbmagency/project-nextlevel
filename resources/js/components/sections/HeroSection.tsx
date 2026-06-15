import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WA_URL } from "@/lib/whatsapp";

interface HeroSectionProps {
    onCtaClick: (location: string, text: string, dest: string) => void;
}

const TRUST_BULLETS = [
    "1.000.000+ orang telah diinspirasi",
    "Seminar di 30+ kota besar Indonesia",
    "Reseat gratis, ikuti berkali-kali",
];

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
    return (
        <section className="relative flex min-h-dvh flex-col justify-end overflow-hidden bg-[#0A0A0F] pb-8 pt-24 lg:justify-center lg:pb-24">
            {/* Speaker */}
            <div
                className="pointer-events-none absolute bottom-0 right-0 top-14 w-full select-none lg:inset-y-0 lg:w-[58%]"
                aria-hidden="true"
            >
                <div className="absolute inset-0 origin-bottom-right -translate-y-24 scale-[0.88] lg:translate-y-0 lg:scale-[0.9]">
                    <img
                        src="/storage/mentor/final-hero-hd-transparent.webp"
                        alt=""
                        className="h-full w-full object-cover object-[22%_top] lg:object-[16%_top]"
                        style={{
                            transform: "scaleX(-1)",
                        }}
                        loading="eager"
                    />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/90 to-transparent lg:h-[45%] lg:via-[#0A0A0F]/70" />
                <div className="absolute inset-y-0 left-0 hidden w-64 bg-gradient-to-r from-[#0A0A0F] to-transparent lg:block" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <p className="mb-4 inline-flex items-center rounded-full border border-blue-400/30 bg-[#0A0A0F]/90 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-blue-300 shadow-lg shadow-black/30 sm:px-4">
                    Sales &amp; Marketing Training
                </p>

                <h1 className="leading-[0.88] tracking-tight">
                    <span
                        className="block font-black uppercase text-blue-400"
                        style={{
                            fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)",
                            textShadow:
                                "0 4px 24px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8)",
                        }}
                    >
                        Rasakan
                    </span>
                    <span
                        className="block font-black uppercase text-white"
                        style={{
                            fontSize: "clamp(4rem, 10vw, 10rem)",
                            textShadow:
                                "0 4px 32px rgba(0,0,0,0.95), 0 2px 12px rgba(0,0,0,0.9)",
                        }}
                    >
                        Leganya
                    </span>
                    <span
                        className="mt-2 inline-block rounded-lg bg-blue-600 px-3 py-1.5 font-bold text-white"
                        style={{ fontSize: "clamp(1.1rem, 2.5vw, 2rem)" }}
                    >
                        Saat Target Bulanan Konsisten Tercapai
                    </span>
                </h1>

                <p className="mt-5 max-w-2xl text-base font-semibold leading-relaxed text-slate-100">
                    Kuasai teknik negosiasi, handling objection, dan closing
                    bersama Coach Haryanto Kandani dalam 1 hari intensif.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                        href={WA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                        onClick={() =>
                            onCtaClick(
                                "hero_primary",
                                "Daftar Sekarang",
                                WA_URL,
                            )
                        }
                    >
                        <Button
                            variant="primary"
                            size="xl"
                            className="w-full min-w-50 text-lg sm:w-auto"
                        >
                            Daftar Sekarang
                        </Button>
                    </a>
                    <a
                        href="#testimoni"
                        className="w-full sm:w-auto"
                        onClick={() =>
                            onCtaClick(
                                "hero_secondary",
                                "Lihat Testimoni",
                                "#testimoni",
                            )
                        }
                    >
                        <Button
                            variant="outline"
                            size="xl"
                            className="w-full min-w-50 text-lg sm:w-auto"
                        >
                            Lihat Testimoni
                        </Button>
                    </a>
                </div>

                <div className="mt-5 flex flex-col gap-2 text-sm font-medium text-slate-200 sm:flex-row sm:flex-wrap sm:gap-x-5 lg:inline-flex lg:rounded-xl lg:bg-black/55 lg:px-4 lg:py-3 lg:backdrop-blur-sm">
                    {TRUST_BULLETS.map((item) => (
                        <span key={item} className="flex items-center gap-1.5">
                            <CheckCircle
                                size={16}
                                className="shrink-0 text-blue-400"
                            />
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
