import SectionWrapper from '@/components/ui/section-wrapper';

// Daftar klien nyata — logo akan ditambahkan via Image 7
const CLIENTS = [
    'BCA', 'UOB', 'Prudential', 'PermataBank', 'Standard Chartered', 'Citibank',
    'Unilever', 'ACE Hardware', 'CIMB Niaga', 'PaninLife', 'ABN-AMRO', 'Sequislife',
    'Sun Life Financial', 'Dankos', 'TNT', 'Samsung', 'HP', 'Danamon', 'Mizuho',
    'AXA', 'Adira', 'Janssen', 'Hero', 'Prodia', 'IBM', 'ExxonMobil', 'Suzuki',
    'Castrol', 'AHM', "L'Oréal", 'FedEx', 'Schindler', 'Rifa Rifa Resto',
    'LippoLand Club', 'Fin Logistics', 'Senayan City', 'Central Park', 'Ciputra',
    'Alfa', 'Japfa', 'The Haven', 'Matahari', 'Hypermart', 'Petronas', 'ERA',
    'Bank Indonesia', 'MNC', 'Obaja Tour', 'Roy Weston', 'Pluit Junction',
    'Century 21', 'LiteFM', 'PasFM', 'Trijaya Network', 'smartFM', 'Pama',
    'Panorama Tours', 'Astra Otoparts', 'Adira Finance', 'Fortune', 'QBE Pool',
    'MUFG', 'Pondok Indah Group', 'Relife', 'Etrading Securities', 'Astrido',
    'Phapros', 'Indonesian Idol', 'X Factor', 'Rising Star', 'KDI', 'The Voice',
    'PON', 'Asian Games', 'Jembo', 'FinNet', 'Granito', 'PRUDynamic', 'Enesis',
];

const STATS = [
    { value: '1.000.000+', label: 'Orang Diinspirasi' },
    { value: '30+',        label: 'Kota Besar Indonesia' },
    { value: '130+',       label: 'Angkatan Training' },
];

export default function SocialProofSection() {
    return (
        <SectionWrapper id="social-proof" bg="dark" className="py-12">
            <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
                Dipercaya oleh ratusan perusahaan nasional &amp; multinasional
            </p>

            {/* Client name badges */}
            <div className="flex flex-wrap justify-center gap-2">
                {CLIENTS.map((name) => (
                    <span
                        key={name}
                        className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                        {name}
                    </span>
                ))}
                <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-500 italic">
                    dan masih banyak lagi
                </span>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-center">
                {STATS.map((stat) => (
                    <div key={stat.label}>
                        <div className="text-2xl font-black text-white">{stat.value}</div>
                        <div className="mt-0.5 text-sm text-slate-400">{stat.label}</div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
