import { AlertCircle, CheckCircle2, ChevronDown, X } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";

const PAIN_POINTS = [
    "Prospek yang awalnya antusias, tiba-tiba menghilang setelah penawaran keluar",
    'Presentasi yang berjalan lancar, berakhir dengan "nanti dikabarin ya"',
    "Dan parahnya, Anda tidak tahu persis di mana deal Anda bocor",
];

const VALIDATION_LINES = [
    "Anda follow up tepat waktu",
    "Anda presentasi dengan serius",
    "Anda lakukan semua yang seharusnya dilakukan.",
];

const WORST_CASE = [
    "Closing rate tetap stagnan",
    "Setiap bulan Anda kembali dari nol dengan beban yang sama",
    "Karir dan income Anda tidak akan pernah mencerminkan seberapa keras Anda sudah berusaha",
];

export default function ProblemSectionV2() {
    return (
        <SectionWrapper id="problem-section-v2" bg="dark" className="py-12">
            <div className="mx-auto max-w-5xl">
                {/* Row 1 — both cols stretch to same height */}
                <div className="grid gap-4 lg:grid-cols-2 lg:items-start lg:gap-8">
                    {/* Kiri: Opening question + validation + pain */}
                    <div className="flex flex-col rounded-2xl border border-red-500/15 bg-[#0E0E15] p-6 lg:p-8">
                        <p className="mb-5 text-center text-lg font-black uppercase tracking-widest text-blue-400">
                            Satu pertanyaan jujur
                        </p>

                        <p className="mb-5 text-base font-medium leading-relaxed text-slate-200">
                            Kapan terakhir kali Anda menutup bulan dan merasa
                            hasilnya{" "}
                            <span className="text-white font-bold">
                                benar-benar mencerminkan
                            </span>{" "}
                            kerja keras Anda?
                        </p>

                        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
                            Anda bukan sales yang malas.
                        </p>

                        <ul className="mb-5 flex flex-col gap-0">
                            {VALIDATION_LINES.map((v) => (
                                <li
                                    key={v}
                                    className="flex items-start gap-3 border-b border-white/5 py-3.5 first:pt-0 last:border-0 last:pb-0"
                                >
                                    <CheckCircle2
                                        size={17}
                                        className="mt-0.5 shrink-0 text-blue-400"
                                    />
                                    <span className="text-base font-medium leading-relaxed text-slate-200">
                                        {v}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kanan: Diagnosis — pain points + self-doubt */}
                    <div className="flex flex-col rounded-2xl p-6 lg:p-6">
                        <div className="flex flex-1 flex-col justify-center gap-5">
                            <div>
                                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">
                                    Lalu mulai muncul:
                                </p>
                                <ul className="flex flex-col gap-0">
                                    {PAIN_POINTS.map((s) => (
                                        <li
                                            key={s}
                                            className="flex items-start gap-3 border-b border-white/5 py-3.5 first:pt-0 last:border-0 last:pb-0"
                                        >
                                            <AlertCircle
                                                size={17}
                                                className="shrink-0 text-red-500 translate-y-[3px]"
                                            />
                                            <span className="text-base font-medium leading-relaxed text-slate-200">
                                                {s}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-xl border border-white/5 bg-[#0E0E15] p-5 font-semibold">
                                <p className="mb-2 text-base leading-relaxed text-slate-300">
                                    Lama-lama muncul pertanyaan:
                                </p>
                                <p className="text-base leading-relaxed text-slate-300 italic">
                                    "Apa memang segini batas kemampuan saya?"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row Sinyal — full-width signal card */}
                <div className="mt-4 lg:mt-8">
                    <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-[#0A0A14] p-6 lg:p-10">
                        {/* Decorative glow blob */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-indigo-600/10 blur-3xl"
                        />

                        <div className="relative flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-10">
                            {/* Divider — vertical on desktop, none on mobile */}
                            <div
                                aria-hidden="true"
                                className="hidden h-14 w-px shrink-0 bg-white/30 lg:block"
                            />

                            {/* Text content */}
                            <div>
                                <p className="mb-1.5 text-lg font-black uppercase tracking-[0.16em] text-blue-400 sm:text-xl">
                                    Itu bukan kelemahan. Itu sinyal.
                                </p>
                                <p className="text-base leading-relaxed text-slate-300">
                                    Sinyal bahwa{" "}
                                    <span className="font-semibold text-white">
                                        tanpa framework yang tepat
                                    </span>{" "}
                                    untuk membaca di mana konversi Anda bocor,
                                    kerja keras sebanyak apapun tidak akan
                                    mengubah angkanya.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2 — 2-col, mirrors top rhythm */}
                <div className="mt-3 grid overflow-hidden rounded-2xl border border-red-500/10 lg:mt-8 lg:grid-cols-2">
                    {/* Kiri: worst case */}
                    <div className="bg-[#0D0D14] p-6 lg:p-8">
                        <h3 className="text-xl font-black text-white sm:text-2xl">
                            Dan kalau ini tidak{" "}
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
                                    <span className="text-base font-medium text-slate-300">
                                        {w}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kanan: empathy uplift */}
                    <div className="flex flex-col justify-center border-t border-white/5 bg-[#111118] p-6 lg:border-l lg:border-t-0 lg:p-8">
                        <p className="text-lg font-black text-white sm:text-2xl uppercase">
                            Yang kurang{" "}
                            <span className="text-blue-400">
                                bukan usaha Anda.
                            </span>
                        </p>
                        <p className="mt-3 text-base font-medium leading-relaxed text-slate-300">
                            Yang kurang adalah cara yang tepat untuk melihat di
                            mana seharusnya usaha Anda diarahkan.
                        </p>
                        <p className="mt-4 text-sm font-bold uppercase tracking-widest text-blue-400">
                            Dan itu bisa dipelajari dalam 1 hari.
                        </p>
                    </div>
                </div>

                {/* Directional CTA */}
                <div className="mt-4 flex justify-center lg:mt-8">
                    <a
                        href="#solution-section"
                        className="inline-flex flex-col items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-slate-300 transition-colors hover:text-blue-400"
                    >
                        LIHAT SOLUSINYA
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
