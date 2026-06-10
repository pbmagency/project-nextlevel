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
                {/* Scale wrapper — origin bottom-right so head lands at headline level */}
                <div className="absolute inset-0 origin-bottom-right scale-[0.88] lg:scale-[0.82]">
                    <img
                        src="/storage/mentor/image-removebg-preview.webp"
                        alt=""
                        className="h-full w-full object-cover"
                        style={{ transform: 'scaleX(-1) translateX(-8%)', objectPosition: '80% top' }}
                        loading="eager"
                    />
                </div>
                {/* bottom fade — full size, covers scaled image + black area */}
                <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/70 to-transparent" />
                {/* left fade on desktop */}
                <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-[#0A0A0F] to-transparent hidden lg:block" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* Context label — desktop only */}
                <p className="mb-4 hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300 backdrop-blur-sm lg:inline-flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    Sales &amp; Marketing Training
                </p>

                {/* Editorial headline */}
                <h1 className="leading-[0.88] tracking-tight">
                    <span
                        className="block font-black uppercase text-blue-400"
                        style={{
                            fontSize: 'clamp(2.2rem, 5.5vw, 5.5rem)',
                            textShadow: '0 4px 24px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8)',
                        }}
                    >
                        Rasakan
                    </span>
                    <span
                        className="block font-black uppercase text-white"
                        style={{
                            fontSize: 'clamp(4rem, 10vw, 10rem)',
                            textShadow: '0 4px 32px rgba(0,0,0,0.95), 0 2px 12px rgba(0,0,0,0.9)',
                        }}
                    >
                        Leganya
                    </span>
                    <span
                        className="mt-2 inline-block rounded-lg bg-blue-600 px-3 py-1.5 font-bold text-white"
                        style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2rem)' }}
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
