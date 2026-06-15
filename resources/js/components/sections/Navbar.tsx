import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { WA_URL } from '@/lib/whatsapp';

interface NavbarProps {
    onCtaClick: (location: string, text: string, dest: string) => void;
}

export default function Navbar({ onCtaClick }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/5' : ''}`}>
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <span className="text-lg font-bold tracking-tight text-white">
                        Next <span className="text-blue-400">Level</span>
                    </span>
                </a>

                {/* CTA */}
                <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onCtaClick('navbar', 'Amankan Seat', WA_URL)}
                >
                    <Button variant="primary" size="sm">
                        Amankan Seat
                    </Button>
                </a>
            </div>
        </nav>
    );
}
