const LOGO_SRC = '/storage/misc/logo-perusahaan.webp';

export default function ClientBannerSection() {
    return (
        <section className="bg-[#0A0A0F] py-12">
            <p className="mb-6 text-center text-[0.65rem] font-bold uppercase tracking-[0.3em] text-slate-500 sm:text-xs">
                Dipercaya oleh 100+ perusahaan dari berbagai industri
            </p>
            <div className="mx-auto max-w-5xl px-4">
                <img
                    src={LOGO_SRC}
                    alt="Logo perusahaan klien Next Level Training & Motivation"
                    className="w-full rounded-2xl object-contain"
                    style={{ maxHeight: '320px' }}
                    loading="lazy"
                />
            </div>
        </section>
    );
}
