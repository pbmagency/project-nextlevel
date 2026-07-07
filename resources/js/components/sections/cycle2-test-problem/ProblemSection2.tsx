import { AlertCircle, CheckCircle2, ChevronDown, X } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";

const SCENARIOS = [
    'Sudah latih tim sales berkali-kali, tapi hasilnya hasilny tetap buruk"',
    "Tim sales masih terlalu bergantung pada arahan Anda",
    "Performa tim buruk sehingga target sulit tercapai secara konsisten",
    "Anda masih harus ambil alih alih agar target bulanan bisa tercapai.",
];

const ROOT_FACTORS = [
    "Seberapa kuat teknik tim Anda dalam menjual",
    "Seberapa efektif cara tim Anda menangani penolakan",
    "Seberapa besar trust yang tim Anda bangun sejak awal",
];

const WORST_CASE = [
    "Closing rate tidak bergerak bulan demi bulan",
    "Target terus meleset, bisnis atau karir stagnan",
    "Burnt out karena Anda harus selalu turun tangan",
    "Budget training sudah keluar, tapi tim tidak juga menunjukkan hasil",
];

export default function ProblemSection() {
    return (
        <SectionWrapper id="problem-section" bg="dark" className="py-20">
            <div className="mx-auto max-w-5xl">
                {/* Row 1 — both cols stretch to same height */}
                <div className="grid gap-4 lg:grid-cols-2 lg:items-start lg:gap-8">
                    {/* Kiri: Scenarios card */}
                    <div className="flex flex-col rounded-2xl border border-red-500/15 bg-[#0E0E15] p-6 lg:p-8">
                        <p className="mb-6 text-center text-sm font-black uppercase tracking-widest text-white">
                            Pernah ada di posisi ini?
                        </p>
                        <ul className="flex flex-col gap-0">
                            {SCENARIOS.map((s) => (
                                <li
                                    key={s}
                                    className="flex items-start gap-3 border-b border-white/5 py-3.5 first:pt-0 last:border-0 last:pb-0"
                                >
                                    <AlertCircle
                                        size={17}
                                        className="mt-0.5 shrink-0 text-red-500"
                                    />
                                    <span className="text-base font-medium leading-relaxed text-slate-200">
                                        {s}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kanan: Root cause — fills same height */}
                    <div className="flex flex-col rounded-2xl p-6 lg:p-6">
                        <div className="flex flex-1 flex-col justify-center gap-5">
                            <div>
                                <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
                                    Faktanya
                                </p>
                                {/* Fix 3: more extreme size contrast */}
                                <h2 className="text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-4xl">
                                    Terus mengawasi dan menekan tim sales tidak akan membuat{" "}
                                    <span className="relative text-blue-400">
                                        closing jadi konsisten
                                        <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-blue-400/40" />
                                    </span>
                                    
                                </h2>
                            </div>

                            <div>
                                {/* Fix 3: smaller subtext, clear contrast from headline */}
                                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-300">
                                    Tapi seberapa dalam tim anda menguasai:
                                </p>
                                <ul className="flex flex-col gap-3">
                                    {ROOT_FACTORS.map((f) => (
                                        <li
                                            key={f}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle2
                                                size={17}
                                                className="mt-0.5 shrink-0 text-blue-400"
                                            />
                                            <span className="text-base leading-relaxed text-slate-200">
                                                {f}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2 — 2-col, mirrors top rhythm */}
                <div className="mt-12 grid overflow-hidden rounded-2xl border border-red-500/10 lg:mt-20 lg:grid-cols-2">
                    {/* Kiri: worst case */}
                    <div className="bg-[#0D0D14] p-6 lg:p-8">
                        <h3 className="text-xl font-black text-white sm:text-2xl">
                            Kalau ini tidak{" "}
                            <span className="text-red-400">diperbaiki...</span>
                        </h3>
                        <ul className="mt-5 flex flex-col gap-0">
                            {WORST_CASE.map((w) => (
                                <li
                                    key={w}
                                    className="flex items-center gap-3 border-b border-white/5 py-3.5 last:border-0"
                                >
                                    <X
                                        size={15}
                                        className="shrink-0 text-red-500"
                                    />
                                    <span className="text-base text-slate-300">
                                        {w}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kanan: empathy uplift */}
                    <div className="flex flex-col justify-center border-t border-white/5 bg-[#111118] p-6 lg:border-l lg:border-t-0 lg:p-8">
                        <p className="text-2xl font-black text-white sm:text-3xl">
                            Padahal Anda{" "}
                            <span className="text-blue-400">CAPABLE.</span>
                        </p>
                        <p className="mt-3 text-base font-medium leading-relaxed text-slate-300">
                            Yang kurang bukan pengawasan Anda. Yang kurang hanya framework dan teknik sales yang belum diketahui tim.
                        </p>
                        <p className="mt-4 text-sm font-bold uppercase tracking-widest text-blue-400">
                            Dan itu bisa dipelajari dalam 1 hari.
                        </p>
                    </div>
                </div>

                {/* Fix 6: directional CTA */}
                <div className="mt-4 flex justify-center lg:mt-8">
                    <a
                        href="#solution"
                        className="inline-flex flex-col items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-slate-300 transition-colors hover:text-blue-400"
                    >
                        Lihat solusinya
                        <ChevronDown
                            size={16}
                            className="animate-bounce motion-reduce:animate-none"
                        />
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
}
