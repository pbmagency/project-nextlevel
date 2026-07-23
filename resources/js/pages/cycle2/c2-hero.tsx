import { lazy, Suspense, useEffect } from "react";
import { Head } from "@inertiajs/react";

import { useAnalytics } from "@/hooks/use-analytics";
import { useScrollTracking } from "@/hooks/use-scroll-tracking";
import { useDwellTime } from "@/hooks/use-dwell-time";
import { useSectionTracking } from "@/hooks/use-section-tracking";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/test-hero/HeroSection2";
import SocialProofSection from "@/components/sections/SocialProofSection";
import ProblemSection from "@/components/sections/cycle1-test-problem/ProblemSection1";
import { WA_URL } from "@/lib/whatsapp";

const SolutionSection = lazy(() => import("@/components/sections/cycle1-test-solution/SolutionSection1"));
const TestimoniSection = lazy(() => import("@/components/sections/TestimoniSection"));
const BenefitSection = lazy(() => import("@/components/sections/BenefitSection"));
const MentorSection = lazy(() => import("@/components/sections/MentorSection"));
const PricingSection = lazy(() => import("@/components/sections/PricingSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));
const ClientBannerSection = lazy(() => import("@/components/sections/ClientBannerSection"));
const Footer = lazy(() => import("@/components/sections/Footer"));
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp"));

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
        
        // If it's not the primary blue button, just let it scroll to the section!
        if (dest !== "#pricing-section") {
            return;
        }

        // --- NEW: Track Lead and Initiate Checkout for Blue Buttons! ---
        const eventId = "wa-cta-" + Date.now();
        trackLead("wa-inquiry", {
            button_text: text,
            destination: WA_URL,
            event_id: eventId,
            value: 2000000,
            currency: "IDR",
        });
        trackInitiateCheckout();
        // -------------------------------------------------------------

        setTimeout(() => {
            window.location.href = WA_URL;
        }, 300);
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

                    {/* ── 2. Social Proof ──────────────────── */}
                    <SocialProofSection />

                    {/* ── 3. Problem ───────────────────────── */}
                    <ProblemSection />

                    {/* ── Below The Fold ─────────────────────── */}
                    <Suspense fallback={<div className="h-96 w-full flex items-center justify-center text-slate-500">Loading...</div>}>
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

                <Suspense fallback={null}>
                    {/* ── Footer ───────────────────────────────── */}
                    <Footer />

                    {/* ── Floating WhatsApp ────────────────────── */}
                    <FloatingWhatsApp />
                </Suspense>
            </div>
        </>
    );
}