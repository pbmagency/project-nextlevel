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
import TestimoniSection   from '@/components/sections/TestimoniSection';
import BenefitSection     from '@/components/sections/BenefitSection';
import MentorSection      from '@/components/sections/MentorSection';
import PricingSection     from '@/components/sections/PricingSection';
import FAQSection         from '@/components/sections/FAQSection';
import Footer             from '@/components/sections/Footer';
import FloatingVideo      from '@/components/FloatingVideo';

// Force dark mode for landing page
if (typeof document !== 'undefined') {
    document.documentElement.classList.add('dark');
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

            <div className="min-h-screen bg-[#0A0A0F] font-sans antialiased">
                {/* ── Navigation ───────────────────────────── */}
                <Navbar onCtaClick={handleCtaClick} />

                <main>
                    {/* ── 1. Hero ──────────────────────────── */}
                    <HeroSection onCtaClick={handleCtaClick} />

                    {/* ── 2. Social Proof ──────────────────── */}
                    <SocialProofSection />

                    {/* ── 3. Problem ───────────────────────── */}
                    <ProblemSection />

                    {/* ── 4. Solution / Workshop ───────────── */}
                    <SolutionSection onCtaClick={handleCtaClick} />

                    {/* ── 6. Testimonials ──────────────────── */}
                    <TestimoniSection onCtaClick={handleCtaClick} />

                    {/* ── 7. Benefits / Curriculum ─────────── */}
                    <BenefitSection onCtaClick={handleCtaClick} />

                    {/* ── 8. Mentor / Pengajar ─────────────── */}
                    <MentorSection />

                    {/* ── 9. Pricing ───────────────────────── */}
                    <PricingSection onPayClick={handlePayClick} />

                    {/* ── 10. FAQ ──────────────────────────── */}
                    <FAQSection onCtaClick={handleCtaClick} />
                </main>

                {/* ── Footer ───────────────────────────────── */}
                <Footer />

                {/* ── Floating Video ────────────────────────── */}
                <FloatingVideo />
            </div>
        </>
    );
}
