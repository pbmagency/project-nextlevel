import SectionWrapper from '@/components/ui/section-wrapper';

const PROBLEMS = [
    'Gagal mencapai target bulanan meski sudah kerja keras',
    'Skill komunikasi kurang efektif, calon konsumen tetap tidak tertarik',
    'Terjebak perang harga dan tidak bisa mempertahankan nilai jual',
    'Mental drop akibat penolakan dan di-ghosting terus-menerus',
    'Tidak punya metode closing yang pasti, selalu gagal di ujung negosiasi',
    'Buta strategi pasar baru dan cara menjangkau segmen yang belum disentuh',
];

export default function ProblemSection() {
    return (
        <SectionWrapper id="problem" bg="white" className="py-20">
            <div className="mx-auto max-w-2xl">
                <div className="mb-10 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
                        Kenali Diri Anda
                    </p>
                    <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
                        Apakah Anda Mengalami Hal Ini?
                    </h2>
                </div>

                <div className="mb-10 flex flex-col gap-4">
                    {PROBLEMS.map((point) => (
                        <div key={point} className="flex items-start gap-4 rounded-xl border border-white/5 bg-[#161620] px-4 py-3.5">
                            <span className="mt-0.5 shrink-0 text-lg font-black leading-none text-red-500">✗</span>
                            <p className="text-sm font-medium leading-snug text-slate-300 sm:text-base">{point}</p>
                        </div>
                    ))}
                </div>

                <p className="text-center text-base leading-relaxed text-slate-500">
                    Banyak sales gagal bukan karena kurang kerja keras, tapi karena salah strategi.{' '}
                    <strong className="text-slate-300">Kalau cara yang sama terus dipakai, hasilnya pun akan tetap sama.</strong>
                </p>
            </div>
        </SectionWrapper>
    );
}
