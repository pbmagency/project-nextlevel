import {
    CheckCircle,
    Clock,
    Gift,
    Headphones,
    Lock,
    ShieldCheck,
    Tag,
    ThumbsUp,
    Zap,
} from "lucide-react";
import { memo, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/ui/section-wrapper";
import { generateEventId } from "@/hooks/use-analytics";
import { WA_URL } from "@/lib/whatsapp";

/* ─── Persistent 6-hour countdown ─────────────────────────────────────────── */
const STORAGE_KEY = "pricing_countdown_expiry";
const DURATION_MS = 12 * 60 * 60 * 1000; // 6 hours

function getOrCreateExpiry(): number {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const expiry = parseInt(stored, 10);
            if (!isNaN(expiry) && expiry > Date.now()) return expiry;
        }
    } catch {
        // localStorage unavailable (SSR / private mode)
    }
    const expiry = Date.now() + DURATION_MS;
    try {
        localStorage.setItem(STORAGE_KEY, String(expiry));
    } catch {
        // ignore
    }
    return expiry;
}

interface TimeLeft {
    hours: string;
    minutes: string;
    seconds: string;
}

function useCountdown(): TimeLeft {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        hours: "06",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        let expiry = getOrCreateExpiry();

        function tick() {
            const remaining = expiry - Date.now();
            if (remaining <= 0) {
                // Reset for another 6-hour window
                expiry = Date.now() + DURATION_MS;
                try {
                    localStorage.setItem(STORAGE_KEY, String(expiry));
                } catch {
                    // ignore
                }
            }
            const totalSec = Math.max(
                0,
                Math.floor((expiry - Date.now()) / 1000),
            );
            const h = Math.floor(totalSec / 3600);
            const m = Math.floor((totalSec % 3600) / 60);
            const s = totalSec % 60;
            setTimeLeft({
                hours: String(h).padStart(2, "0"),
                minutes: String(m).padStart(2, "0"),
                seconds: String(s).padStart(2, "0"),
            });
        }

        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return timeLeft;
}

/* ─── Digit block — memo so only changed units re-render ────────────────────── */
const DigitBlock = memo(function DigitBlock({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="flex flex-col items-center gap-1.5">
            <div className="relative flex overflow-hidden rounded-xl border border-blue-500/25 bg-[#0A0A0F]">
                {value.split("").map((d, i) => (
                    <span
                        key={i}
                        className="flex w-9 items-center justify-center py-3 text-2xl font-black tabular-nums text-blue-300 sm:w-11 sm:text-3xl"
                    >
                        {d}
                    </span>
                ))}
                {/* subtle bottom glow line */}
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
                />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                {label}
            </span>
        </div>
    );
});

/* ─── Separator — static, never re-renders ──────────────────────────────────── */
const Sep = memo(function Sep() {
    return (
        <span className="mb-5 self-center text-xl font-black text-blue-500/30">
            :
        </span>
    );
});

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
    const { hours, minutes, seconds } = useCountdown();

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
                    Investasi Terbaik
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

                        {/* ── Countdown timer ── */}
                        <div className="mt-6 overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#0a0c14] to-[#0A0A0F]">
                            <div className="flex items-center gap-2 border-b border-blue-500/10 px-4 py-2.5">
                                <Clock
                                    size={14}
                                    className="shrink-0 text-blue-400"
                                />
                                <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
                                    Harga Early Bird Berakhir Dalam
                                </p>
                            </div>
                            <div className="flex items-start justify-center gap-2 px-4 py-4">
                                <DigitBlock value={hours} label="Jam" />
                                <Sep />
                                <DigitBlock value={minutes} label="Menit" />
                                <Sep />
                                <DigitBlock value={seconds} label="Detik" />
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
