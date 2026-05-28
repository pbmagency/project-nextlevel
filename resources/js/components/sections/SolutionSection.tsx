import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, X } from 'lucide-react';
import SectionWrapper from '@/components/ui/section-wrapper';
import SectionCta from '@/components/ui/section-cta';

const EVENT_DETAILS = [
    { Icon: Calendar, label: 'Tanggal', value: 'Senin, 27 Juli 2026' },
    { Icon: Clock,    label: 'Waktu',   value: '09.30 – 16.00 WIB' },
    { Icon: MapPin,   label: 'Lokasi',  value: 'Hotel DoubleTree by Hilton Kemayoran, Jakarta Pusat' },
    { Icon: Users,    label: 'Format',  value: 'Offline · Intensif · Interaktif' },
];

interface SolutionSectionProps {
    onCtaClick: (location: string, text: string, dest: string) => void;
}

export default function SolutionSection({ onCtaClick }: SolutionSectionProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);

    return (
        <>
            <SectionWrapper id="solution" bg="slate" className="py-20">
                <div className="mx-auto max-w-5xl">

                    <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">

                        {/* Kiri: foto hotel */}
                        <div
                            className="group cursor-pointer overflow-hidden rounded-3xl shadow-lg"
                            onClick={() => setLightboxOpen(true)}
                        >
                            <img
                                src="/storage/misc/hotel.webp"
                                alt="Venue Hotel DoubleTree by Hilton Kemayoran"
                                className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-80 lg:h-full lg:min-h-[420px]"
                                loading="lazy"
                            />
                        </div>

                        {/* Kanan: label + heading + deskripsi + cards */}
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                                Tentang Acara
                            </p>
                            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
                                Sales &amp; Marketing{' '}
                                <span className="text-blue-600">Skills Training</span>
                            </h2>
                            <p className="mt-4 leading-relaxed text-slate-500">
                                Satu hari penuh bersama Achievement Motivator{' '}
                                <strong className="text-slate-800">Haryanto Kandani</strong>, training intensif yang
                                dirancang untuk mengubah cara Anda menjual secara permanen. Bukan seminar motivasi biasa.
                                Ini adalah ruang belajar yang menghasilkan perubahan nyata.
                            </p>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                {EVENT_DETAILS.map(({ Icon, label, value }) => (
                                    <div
                                        key={label}
                                        className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                                    >
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                                            <Icon size={17} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</p>
                                            <p className="mt-0.5 text-sm font-bold leading-snug text-slate-800">{value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <SectionCta
                        location="solution"
                        onClick={onCtaClick}
                        showMentorCta
                        socialProof="Telah melatih 100.000+ Sales • 20 tahun pengalaman"
                    />
                </div>
            </SectionWrapper>

            {/* Lightbox */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    onClick={() => setLightboxOpen(false)}
                >
                    <button
                        onClick={() => setLightboxOpen(false)}
                        className="absolute right-4 top-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-slate-700 text-white transition-colors hover:bg-slate-600"
                        aria-label="Tutup gambar"
                    >
                        <X size={18} />
                    </button>
                    <img
                        src="/storage/misc/hotel.webp"
                        alt="Venue Hotel DoubleTree by Hilton Kemayoran"
                        className="max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}
