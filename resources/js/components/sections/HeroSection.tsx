import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
    onCtaClick: (location: string, text: string, dest: string) => void;
}

const TRUST_BULLETS = [
    '1.000.000+ orang telah diinspirasi',
    'Seminar di 30+ kota besar Indonesia',
    'Reseat gratis, ikuti berkali-kali',
];

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
    return (
        <section className="relative overflow-hidden bg-[#0A0A0F] min-h-dvh flex flex-col justify-end pt-24 pb-16 lg:pb-24">

            {/* Speaker — transparent image, right side, fades at bottom */}
            <div
                className="pointer-events-none absolute inset-y-0 right-0 select-none w-full lg:w-[58%]"
                aria-hidden="true"
            >
                <img
                    src="/storage/mentor/haryanto-hero-transparent.webp"
                    alt=""
                    className="h-full w-full object-contain object-bottom"
                    loading="eager"
                />
                {/* bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/70 to-transparent" />
                {/* left fade on desktop */}
                <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-[#0A0A0F] to-transparent hidden lg:block" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* Editorial headline */}
                <h1 className="leading-[0.88] tracking-tight">
                    <span
                        className="block font-black uppercase text-blue-400"
                        style={{ fontSize: 'clamp(2.2rem, 7vw, 5.5rem)' }}
                    >
                        Rasakan
                    </span>
                    <span
                        className="block font-black uppercase text-white"
                        style={{ fontSize: 'clamp(4rem, 13vw, 10rem)' }}
                    >
                        Leganya
                    </span>
                    <span
                        className="mt-1 block font-black text-slate-400"
                        style={{ fontSize: 'clamp(1rem, 2.8vw, 1.75rem)' }}
                    >
                        Saat Target Bulanan Konsisten Tercapai
                    </span>
                </h1>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href="#pricing"
                        onClick={() => onCtaClick('hero_primary', 'Daftar Sekarang', '#pricing')}
                    >
                        <Button variant="primary" size="xl" className="min-w-50">
                            Daftar Sekarang
                        </Button>
                    </a>
                    <a
                        href="#testimoni"
                        onClick={() => onCtaClick('hero_secondary', 'Lihat Testimoni', '#testimoni')}
                    >
                        <Button variant="outline" size="xl" className="min-w-50">
                            Lihat Testimoni
                        </Button>
                    </a>
                </div>

                {/* Trust bullets */}
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500 sm:text-sm">
                    {TRUST_BULLETS.map((item) => (
                        <span key={item} className="flex items-center gap-1.5">
                            <CheckCircle size={13} className="shrink-0 text-blue-500" />
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
