import { useEffect } from 'react';
import { Head } from '@inertiajs/react';

import { useAnalytics }      from '@/hooks/use-analytics';
import { useScrollTracking } from '@/hooks/use-scroll-tracking';
import { useDwellTime }      from '@/hooks/use-dwell-time';

import Navbar             from '@/components/sections/Navbar';
import HeroSection        from '@/components/sections/HeroSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import ProblemSection     from '@/components/sections/ProblemSection';
import SolutionSection    from '@/components/sections/SolutionSection';
import BenefitSection     from '@/components/sections/BenefitSection';
import TestimoniSection   from '@/components/sections/TestimoniSection';
import MentorSection      from '@/components/sections/MentorSection';
import PricingSection     from '@/components/sections/PricingSection';
import FAQSection         from '@/components/sections/FAQSection';
import Footer             from '@/components/sections/Footer';

// Force light mode — this landing page is always light
if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('dark');
}

export default function Landing() {
    const { trackVisit, trackCTA, trackConversion } = useAnalytics();

    // Activate scroll-depth & dwell-time tracking
    useScrollTracking();
    useDwellTime();

    // Track page visit once on mount
    useEffect(() => {
        trackVisit();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    /** Generic CTA tracker used by sections that only need location + text + dest */
    const handleCtaClick = (location: string, text: string, dest: string) => {
        trackCTA(location, text, dest);
    };

    /** Pricing CTA — user intent to register via WhatsApp */
    const handlePayClick = (text: string, dest: string, eventId: string) => {
        // Browser-side Meta Pixel AddToCart (dedup via eventId)
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'AddToCart', { currency: 'IDR', value: 2000000 }, { eventID: eventId });
        }
        // Server-side: CTA click + conversion (lead intent)
        trackCTA('pricing', text, dest, 'AddToCart', eventId);
        trackConversion('registration', { button_text: text, event_id: eventId });
    };

    return (
        <>
            <Head>
                <title>Sales & Marketing Skills Training | Haryanto Kandani</title>
                <meta
                    name="description"
                    content="Kuasai 4 pilar sales terbaik: Psychology of Selling, Negotiation, Handling Objection & Closing. Training offline seharian di Doubletree by Hilton. Hanya Rp 2.000.000."
                />
                <meta name="robots" content="index, follow" />
                {/* Open Graph */}
                <meta property="og:title" content="Sales & Marketing Skills Training | Haryanto Kandani" />
                <meta
                    property="og:description"
                    content="Kuasai 4 pilar sales terbaik: Psychology of Selling, Negotiation, Handling Objection & Closing. Training offline seharian di Doubletree by Hilton."
                />
                <meta property="og:type" content="website" />
            </Head>

            <div className="min-h-screen bg-white font-sans antialiased">
                {/* ── Navigation ───────────────────────────── */}
                <Navbar onCtaClick={handleCtaClick} />

                <main>
                    {/* ── 1. Hero ──────────────────────────── */}
                    <HeroSection onCtaClick={handleCtaClick} />

                    {/* ── 2. Social Proof ──────────────────── */}
                    <SocialProofSection />

                    {/* ── 3. Problem ───────────────────────── */}
                    <ProblemSection />

                    {/* ── 4. Solution ──────────────────────── */}
                    <SolutionSection onCtaClick={handleCtaClick} />

                    {/* ── 5. Benefits / Curriculum ─────────── */}
                    <BenefitSection onCtaClick={handleCtaClick} />

                    {/* ── 6. Mentor ────────────────────────── */}
                    <MentorSection />

                    {/* ── 7. Testimonials ──────────────────── */}
                    <TestimoniSection onCtaClick={handleCtaClick} />

                    {/* ── 8. Pricing ───────────────────────── */}
                    <PricingSection onPayClick={handlePayClick} />

                    {/* ── 9. FAQ ───────────────────────────── */}
                    <FAQSection onCtaClick={handleCtaClick} />
                </main>

                {/* ── Footer ───────────────────────────────── */}
                <Footer />

                {/* ── Floating WA Button ───────────────────── */}
                <a
                    href="https://wa.me/6281385059742?text=Halo%2C%20saya%20ingin%20mendaftar%20Sales%20%26%20Marketing%20Skills%20Training."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Hubungi kami via WhatsApp"
                    className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-green-900/30 transition-transform duration-200 hover:scale-110"
                >
                    {/* Pulse ring */}
                    <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40 motion-reduce:animate-none" />
                    {/* WA icon */}
                    <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-7 w-7 text-white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                    {/* Tooltip */}
                    <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                        Hubungi Kami
                    </span>
                </a>
            </div>
        </>
    );
}
