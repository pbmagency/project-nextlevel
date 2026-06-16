import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import NextLevelLogo from "@/components/next-level-logo";

interface NavbarProps {
    onCtaClick: (location: string, text: string, dest: string) => void;
}

export default function Navbar({ onCtaClick }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/5" : ""}`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                {/* Logo */}
                <a href="#" aria-label="Next Level">
                    <NextLevelLogo className="h-8 w-36" />
                </a>

                {/* CTA */}
                <a
                    href="#pricing-section"
                    onClick={() => onCtaClick("navbar", "Amankan Seat", "#pricing-section")}
                >
                    <Button variant="primary" size="md">
                        Amankan Seat
                    </Button>
                </a>
            </div>
        </nav>
    );
}
