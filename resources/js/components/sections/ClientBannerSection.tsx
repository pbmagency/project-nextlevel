const LOGO_SRC = "/storage/misc/logo-perusahaan.webp";

export default function ClientBannerSection() {
    return (
        <section className="bg-[#0A0A0F] py-12">
            <p className="mb-6 px-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-slate-300">
                Dipercaya oleh 100+ perusahaan dari berbagai industri
            </p>
            <div className="mx-auto max-w-5xl px-4">
                <img
                    src={LOGO_SRC}
                    alt="Logo perusahaan klien Next Level Training & Motivation"
                    className="w-full rounded-2xl object-contain"
                    style={{ maxHeight: "320px" }}
                    loading="lazy"
                />
            </div>
        </section>
    );
}
