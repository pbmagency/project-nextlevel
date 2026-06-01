import { useState } from 'react';
import { Star, X } from 'lucide-react';
import SectionWrapper from '@/components/ui/section-wrapper';
import SectionCta from '@/components/ui/section-cta';

const TESTIMONIALS = [
    {
        name: 'Robert Tan',
        role: 'Principal, Multiland Indonesia Property Agent',
        photo: '/storage/testimoni/robert-tan.webp',
        text: 'Sungguh luar biasa! Sejak mengikuti seminar yang Bapak Haryanto Kandani bawakan, team marketing kami mencapai hasil yang sangat luar biasa tahun ini. Target yang diberikan oleh perusahaan dapat diraih oleh agen-agen marketing kami hanya dalam waktu 5 bulan.',
    },
    {
        name: 'Laras Puruhita',
        role: 'Manager, PT. Panca Sinar Kasih',
        photo: '/storage/testimoni/laras-puruhita.webp',
        text: 'Membawa hal yang positif dan memberikan terobosan baru. Serta memberikan masukan baru yang baik, inovatif dan positif untuk kehidupan pribadi dan dapat diaplikasikan di dalam pekerjaan juga.',
    },
    {
        name: 'Ricky Sucitra',
        role: 'Student, Swinburne University',
        photo: '/storage/testimoni/ricky-sucitra.webp',
        text: 'Workshop ini sangat membantu saya mengenal diri saya sendiri dan bagaimana untuk menjadi yang terbaik dari diri saya. Perubahan dimulai dari dalam diri sendiri. Mental Achiever!',
    },
    {
        name: 'Mia Hermiyanti',
        role: 'Account Executive, PT. David Roy Indonesia',
        photo: '/storage/testimoni/mia-hermiyanti.webp',
        text: 'Sangat memotivasi saya untuk bisa meraih pencapaian yang tertunda karena faktor external dan internal. Dan saya ingin merubah pola pandang negatif saya ke arah yang lebih positif.',
    },
    {
        name: 'Daniel Indrianto',
        role: 'Asst. CEO Bukit Mediterania Samarinda, Member of Agung Podomoro Group',
        photo: '/storage/testimoni/daniel-indrianto.webp',
        text: "Mr. Haryanto's motivation lecture is really moving ourselves instantly to get motivated. His lecture is lively, fun, easy to digest, and straight professionalism. Overall is excellent!",
    },
    {
        name: 'Hengky Tan Malaka',
        role: 'Wealth Director, PT. AXA Financial Indonesia',
        photo: '/storage/testimoni/hengky-tan-malaka.webp',
        text: 'Saat mengikuti seminar Pak Haryanto Kandani pendekatannya logis dengan bahasa yang sederhana tapi dapat menyentuh, membuat suatu perasaan bergejolak sehingga menimbulkan keyakinan yang kuat dalam memotivasi diri. Hal ini menjadi modal utama kesuksesan.',
    },
];

function StarRating() {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="text-amber-400" fill="currentColor" />
            ))}
        </div>
    );
}

interface TestimoniSectionProps {
    onCtaClick: (location: string, text: string, dest: string) => void;
}

export default function TestimoniSection({ onCtaClick }: TestimoniSectionProps) {
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    return (
        <>
            <SectionWrapper id="testimoni" bg="slate" className="py-20">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
                        Apa Kata Mereka
                    </p>
                    <h2 className="text-3xl font-black text-white sm:text-4xl">
                        Hasil Nyata dari Peserta Kami
                    </h2>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {TESTIMONIALS.map((t) => (
                        <div
                            key={t.name}
                            className="flex flex-col rounded-2xl border border-white/5 bg-[#161620] px-5 py-5 shadow-sm"
                        >
                            <StarRating />
                            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-300 italic">
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
                                    <p className="text-sm font-bold text-white">{t.name}</p>
                                    <p className="mt-0.5 text-xs leading-snug text-slate-400">{t.role}</p>
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

            {lightboxSrc && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
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
        </>
    );
}
