import { useEffect, Suspense, lazy } from "react";
import { Head } from "@inertiajs/react";

import { useAnalytics } from "@/hooks/use-analytics";
import { useScrollTracking } from "@/hooks/use-scroll-tracking";
import { useDwellTime } from "@/hooks/use-dwell-time";
import { useSectionTracking } from "@/hooks/use-section-tracking";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSectionV2";

const SocialProofSection = lazy(() => import("@/components/sections/SocialProofSection"));
const ProblemSection = lazy(() => import("@/components/sections/ProblemSectionV2"));
const SolutionSection = lazy(() => import("@/components/sections/SolutionSectionV2"));
const TestimoniSection = lazy(() => import("@/components/sections/TestimoniSection"));
const BenefitSection = lazy(() => import("@/components/sections/BenefitSection"));
const MentorSection = lazy(() => import("@/components/sections/MentorSection"));
const PricingSection = lazy(() => import("@/components/sections/PricingSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));
const ClientBannerSection = lazy(() => import("@/components/sections/ClientBannerSection"));
const Footer = lazy(() => import("@/components/sections/Footer"));
const FloatingVideo = lazy(() => import("@/components/FloatingVideo"));

// Force dark mode for landing page
if (typeof document !== "undefined") {
    document.documentElement.classList.add("dark");
}

export default function Landing() {
    const { trackVisit, trackCTA, trackInitiateCheckout, trackLead } =
        useAnalytics();

    // Activate scroll-depth & dwell-time tracking
    useScrollTracking();
    useDwellTime();
    useSectionTracking();

    // Track page visit once on mount
    useEffect(() => {
        trackVisit();
    }, []);

    const handleCtaClick = (location: string, text: string, dest: string) => {
        trackCTA(location, text, dest);
        window.location.href = dest;
    };

    const handlePayClick = (text: string, dest: string, eventId: string) => {
        trackLead("wa-inquiry", {
            button_text: text,
            destination: dest,
            event_id: eventId,
            value: 2000000,
            currency: "IDR",
        });

        trackInitiateCheckout();
    };

    return (
        <>
            <Head>
                <title>Sales & Marketing Skills Training</title>
                <meta
                    name="description"
                    content="Kuasai 4 pilar sales terbaik: Psychology of Selling, Negotiation, Handling Objection & Closing. Training offline seharian di Doubletree by Hilton. Hanya Rp 2.000.000."
                />
                <meta name="robots" content="index, follow" />
                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="Sales & Marketing Skills Training | Haryanto Kandani"
                />
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

                    <Suspense fallback={<div className="min-h-[200px]" />}>
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

                        {/* ── 10. Client Banner ────────────────── */}
                        <ClientBannerSection />

                        {/* ── 11. FAQ ──────────────────────────── */}
                        <FAQSection
                            onCtaClick={handleCtaClick}
                            onInitiateCheckout={trackInitiateCheckout}
                        />
                    </Suspense>
                </main>

                <Suspense fallback={<div className="min-h-[100px]" />}>
                    {/* ── Footer ───────────────────────────────── */}
                    <Footer />

                    {/* ── Floating Video ────────────────────────── */}
                    <FloatingVideo />
                </Suspense>
            </div>
        </>
    );
}