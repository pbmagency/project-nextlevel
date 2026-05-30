import { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
    onCtaClick: (location: string, text: string, dest: string) => void;
}

const URGENCY_TAGS = [
    'Kompetitor makin aktif',
    'Perang Harga terjadi',
    'Pembeli makin kritis',
    'Target sales makin naik',
];

const TRUST_BULLETS = [
    '1.000.000+ orang telah diinspirasi',
    'Seminar di 30+ kota besar Indonesia',
    'Reseat gratis, ikuti berkali-kali',
];

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);

    return (
        <>
            <section className="relative flex min-h-dvh flex-col justify-center overflow-hidden bg-[#0A0A0F] pt-16">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
                    <div className="absolute bottom-1/4 left-0 h-[300px] w-[300px] rounded-full bg-blue-900/10 blur-3xl" />
                </div>

                <div className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">

                        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

                            <div className="mb-5 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400 sm:text-sm">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400 motion-reduce:animate-none" />
                                Senin, 27 Juli 2026, Hotel DoubleTree by Hilton Kemayoran
                            </div>

                            <h1 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-[3.25rem]">
                                Raih Target Penjualan Setiap Bulan dan{' '}
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    Jadilah Top Performer yang Selalu Diandalkan Tim Anda
                                </span>
                            </h1>

                            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400">
                                Melalui <strong className="text-white">1 hari training intensif offline</strong> bersama
                                Achievement Motivator Haryanto Kandani, Anda akan menguasai psikologi penjualan,
                                teknik negosiasi, dan strategi closing yang telah{' '}
                                <strong className="text-white">mengubah ribuan sales profesional menjadi top performer</strong>{' '}
                                di seluruh Indonesia.
                            </p>

                            <div className="mt-6 flex flex-wrap justify-center gap-1.5 sm:gap-2 lg:justify-start">
                                {URGENCY_TAGS.map((tag) => (
                                    <span
                                        key={tag}
                                        className="whitespace-nowrap rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row lg:justify-start">
                                <a href="#pricing" onClick={() => onCtaClick('hero_primary', 'Daftar Sekarang', '#pricing')} className="w-full sm:w-auto">
                                    <Button variant="primary" size="xl" className="w-full sm:min-w-[200px]">
                                        Daftar Sekarang
                                    </Button>
                                </a>
                                <a href="#testimoni" onClick={() => onCtaClick('hero_secondary', 'Lihat Testimoni', '#testimoni')} className="w-full sm:w-auto">
                                    <Button variant="outline" size="xl" className="w-full sm:min-w-[200px]">
                                        Lihat Testimoni
                                    </Button>
                                </a>
                            </div>

                            <div className="mt-5 flex flex-wrap justify-center gap-x-3 gap-y-1.5 text-xs text-slate-500 sm:gap-x-5 sm:gap-y-2 sm:text-sm lg:justify-start">
                                {TRUST_BULLETS.map((item) => (
                                    <span key={item} className="flex items-center gap-1.5">
                                        <CheckCircle size={14} className="text-blue-500" />
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:justify-center">
                            <div className="relative w-full">
                                <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#161620] shadow-2xl shadow-black/60">
                                    <div className="h-72 w-full cursor-pointer overflow-hidden lg:h-80" onClick={() => setLightboxOpen(true)}>
                                        <img
                                            src="/storage/mentor/hero.webp"
                                            alt="Haryanto Kandani - Achievement Motivator"
                                            className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                                            loading="eager"
                                        />
                                    </div>
                                    <div className="border-t border-white/10 p-5">
                                        <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">Achievement Motivator & Founder</p>
                                        <p className="mt-1 font-bold text-white">Haryanto Kandani</p>
                                        <p className="mt-0.5 text-xs text-slate-500">Next Level Training & Motivation</p>
                                    </div>
                                </div>
                                <div className="absolute -bottom-5 -right-5 rounded-2xl bg-blue-500 px-4 py-3 text-center shadow-xl shadow-blue-900/60">
                                    <p className="text-xs font-semibold text-blue-200">Super Early Bird</p>
                                    <p className="text-lg font-black text-white">Rp 2.000.000</p>
                                </div>
                                <div className="absolute -left-5 -top-5 rounded-2xl border border-white/10 bg-[#161620] px-3 py-2.5 shadow-xl">
                                    <p className="text-xs font-black text-white">1.000.000+ Orang</p>
                                    <p className="text-xs text-slate-500">Telah Diinspirasi</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {lightboxOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" onClick={() => setLightboxOpen(false)}>
                    <button onClick={() => setLightboxOpen(false)} className="absolute right-4 top-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20" aria-label="Tutup gambar">
                        <X size={18} />
                    </button>
                    <img src="/storage/mentor/hero.webp" alt="Haryanto Kandani" className="max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </>
    );
}
