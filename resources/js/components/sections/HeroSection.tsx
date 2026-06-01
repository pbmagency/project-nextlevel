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
        <section className="relative overflow-hidden bg-[#0A0A0F] flex flex-col justify-end pt-16 pb-4 min-h-[80dvh] lg:min-h-dvh lg:justify-center lg:pt-24 lg:pb-24">

            {/* Speaker — mirrored, shifted right on mobile */}
            <div
                className="pointer-events-none absolute top-14 bottom-0 right-0 select-none w-full lg:inset-y-0 lg:w-[58%]"
                aria-hidden="true"
            >
                <img
                    src="/storage/mentor/haryanto-hero-transparent.webp"
                    alt=""
                    className="h-full w-full object-cover"
                    style={{ transform: 'scaleX(-1)', objectPosition: '70% top' }}
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
                        className="mt-2 inline-block rounded-lg bg-black/50 px-3 py-1.5 font-bold text-white backdrop-blur-sm"
                        style={{ fontSize: 'clamp(1.1rem, 3.2vw, 1.75rem)' }}
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
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-300 sm:text-sm lg:inline-flex lg:rounded-xl lg:bg-black/50 lg:px-4 lg:py-2.5 lg:backdrop-blur-sm">
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
