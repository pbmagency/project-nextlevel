import { Button } from '@/components/ui/button';

interface NavbarProps {
    onCtaClick: (location: string, text: string, dest: string) => void;
}

export default function Navbar({ onCtaClick }: NavbarProps) {
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#111118] backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <span className="text-lg font-bold tracking-tight text-white">
                        PBM <span className="text-blue-400">Agency</span>
                    </span>
                </a>

                {/* CTA */}
                <a
                    href="#pricing"
                    onClick={() => onCtaClick('navbar', 'Daftar Sekarang', '#pricing')}
                >
                    <Button variant="primary" size="sm">
                        Daftar Sekarang
                    </Button>
                </a>
            </div>
        </nav>
    );
}
