import {
    CheckCircle,
    Gift,
    Headphones,
    Lock,
    ShieldCheck,
    Tag,
    ThumbsUp,
    Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/ui/section-wrapper";
import { generateEventId } from "@/hooks/use-analytics";
import { WA_URL } from "@/lib/whatsapp";

const INCLUDES = [
    "Buffet Lunch & Coffee Break",
    "Hand Out Materi",
    "Sertifikat",
    "Mentoring via WhatsApp Group",
    "Reseat & Refresh (ikuti kelas berkali-kali gratis)",
];

const GUARANTEES = [
    {
        icon: ShieldCheck,
        title: "Materi Terbukti",
        desc: "Semua strategi diuji 20+ tahun langsung di lapangan.",
    },
    {
        icon: ThumbsUp,
        title: "Garansi Uang Kembali",
        desc: "Sudah ikut full day tapi tidak puas? Minta refund langsung ke panitia, kami kembalikan penuh tanpa syarat ribet.",
    },
    {
        icon: Headphones,
        title: "Dukungan Penuh",
        desc: "Tim kami siap membantu Anda setelah mengikuti program.",
    },
];

interface PricingSectionProps {
    onPayClick: (text: string, dest: string, eventId: string) => void;
}

export default function PricingSection({ onPayClick }: PricingSectionProps) {
    const handleRegister = () => {
        const eventId = generateEventId();
        onPayClick("Bayar Sekarang", WA_URL, eventId);
        window.open(WA_URL, "_blank", "noopener,noreferrer");
    };

    return (
        <SectionWrapper id="pricing-section" bg="white" className="py-20">
            {/* Header */}
            <div className="mx-auto max-w-2xl text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
                    Investasi Anda
                </p>
                <h2 className="text-3xl font-black text-white sm:text-4xl">
                    Satu Hari yang Mengubah Karir Anda
                </h2>
                <p className="mt-4 font-medium text-slate-300">
                    Program ini hanya diadakan <strong>6 bulan sekali</strong>.
                    Jangan lewatkan kesempatan ini.
                </p>
            </div>

            {/* Pricing card */}
            <div className="mx-auto mt-10 max-w-lg">
                <div className="overflow-hidden rounded-3xl border-2 border-blue-500/60 bg-[#0A0A0F] shadow-2xl shadow-blue-900/20">
                    {/* Hotel image */}
                    <img
                        src="/storage/misc/hotel.webp"
                        alt="Hotel DoubleTree by Hilton Kemayoran"
                        className="h-48 w-full object-cover sm:h-56"
                        loading="lazy"
                    />

                    <div className="p-5 sm:p-8">
                        <p className="text-base font-bold text-blue-400">
                            Sales & Marketing Skills Training
                        </p>
                        <p className="mt-1 text-base font-medium text-slate-300">
                            Offline, Hotel DoubleTree by Hilton Kemayoran –
                            Jakarta Pusat
                        </p>
                        <p className="mt-0.5 text-base font-medium text-slate-300">
                            Senin, 27 Juli 2026, 09.30 – 16.00 WIB
                        </p>

                        <div className="mt-6">
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-medium text-slate-400 line-through">
                                    Rp 3.500.000
                                </span>
                                <span className="rounded-full bg-red-500/10 px-2.5 py-1 text-sm font-bold text-red-400">
                                    HEMAT 43%
                                </span>
                            </div>
                            <div className="mt-1 flex items-end gap-3">
                                <span className="text-3xl font-black text-white sm:text-4xl">
                                    Rp 2.000.000
                                </span>
                                <span className="mb-1 text-base font-semibold text-blue-400">
                                    Super Early Bird
                                </span>
                            </div>
                            <div className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-amber-500/10 px-3 py-2 text-sm font-semibold text-amber-300">
                                <Tag size={14} className="shrink-0" />
                                Khusus Lunas Hari Ini. Promo Terbatas
                            </div>
                        </div>

                        <ul className="mt-6 space-y-2.5">
                            {INCLUDES.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-2.5 text-base font-medium text-slate-300"
                                >
                                    <CheckCircle
                                        size={18}
                                        className="mt-0.5 shrink-0 text-blue-400"
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* Reseat highlight */}
                        <div className="mt-6 flex items-center gap-3 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3">
                            <Gift
                                size={18}
                                className="shrink-0 text-emerald-400"
                            />
                            <div>
                                <p className="text-base font-bold text-emerald-300">
                                    Ikut sekali, batch berikutnya gratis
                                </p>
                                <p className="text-sm font-medium text-emerald-300/90">
                                    Ulangi setiap batch tanpa bayar lagi,
                                    selamanya.
                                </p>
                            </div>
                        </div>

                        <Button
                            variant="primary"
                            size="xl"
                            className="mt-6 w-full"
                            onClick={handleRegister}
                        >
                            Amankan Seat
                        </Button>

                        <p className="mt-4 flex items-center justify-center gap-1.5 text-sm font-medium text-slate-300">
                            <Lock size={14} className="shrink-0" />
                            Tidak puas setelah full day? Uang kembali penuh,
                            tanpa repot.
                        </p>
                    </div>
                </div>

                {/* Urgency notice */}
                <div className="mt-4 flex items-start gap-2 rounded-xl bg-amber-500/10 p-4 text-base font-medium text-amber-300 sm:items-center">
                    <Zap size={16} className="mt-0.5 shrink-0 sm:mt-0" />
                    <span>
                        Program ini hanya diadakan 6 bulan sekali. Batch
                        berikutnya mungkin penuh lebih cepat.
                    </span>
                </div>
            </div>

            {/* Guarantee cards — below pricing */}
            <div className="mx-auto mt-8 grid max-w-lg gap-3 sm:max-w-3xl sm:grid-cols-3">
                {GUARANTEES.map(({ icon: Icon, title, desc }) => (
                    <div
                        key={title}
                        className="flex items-start gap-3 rounded-xl border border-white/5 bg-[#111118] p-4"
                    >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                            <Icon size={16} className="text-blue-400" />
                        </div>
                        <div>
                            <p className="text-base font-bold text-white">
                                {title}
                            </p>
                            <p className="mt-1 text-sm font-medium leading-relaxed text-slate-300">
                                {desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
