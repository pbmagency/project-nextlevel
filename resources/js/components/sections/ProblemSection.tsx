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
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Kenali Diri Anda
                    </p>
                    <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
                        Apakah Anda Mengalami Hal Ini?
                    </h2>
                </div>

                <div className="flex flex-col gap-4 mb-10">
                    {PROBLEMS.map((point) => (
                        <div key={point} className="flex items-start gap-4">
                            <span className="mt-0.5 shrink-0 text-xl font-black leading-none text-red-500">✗</span>
                            <p className="text-base font-medium leading-snug text-slate-800">{point}</p>
                        </div>
                    ))}
                </div>

                <p className="text-center text-base leading-relaxed text-slate-500">
                    Banyak sales gagal bukan karena kurang kerja keras, tapi karena salah strategi.{' '}
                    <strong className="text-slate-800">Kalau cara yang sama terus dipakai, hasilnya pun akan tetap sama.</strong>
                </p>
            </div>
        </SectionWrapper>
    );
}
