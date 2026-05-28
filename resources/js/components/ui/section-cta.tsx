import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SectionCtaProps {
    href?: string;
    text?: string;
    /** Tambahan secondary CTA menuju #mentor */
    showMentorCta?: boolean;
    /** Pisahkan item dengan " • " untuk tampil multi-chip */
    socialProof?: string;
    location?: string;
    onClick?: (location: string, text: string, href: string) => void;
    /** true untuk section dengan background gelap (dark/slate) */
    dark?: boolean;
    className?: string;
}

/**
 * CTA block standar: tombol primary + opsional secondary ke #mentor + social proof row.
 * Dipakai di semua section kecuali Problem, Social Proof, dan Mentor.
 */
export default function SectionCta({
    href = '#pricing',
    text = 'Daftar Sekarang',
    showMentorCta = false,
    socialProof,
    location = 'section',
    onClick,
    dark = false,
    className = '',
}: SectionCtaProps) {
    const items = socialProof
        ? socialProof.split(' • ').map((s) => s.trim()).filter(Boolean)
        : [];

    const iconColor = dark ? 'text-blue-400' : 'text-blue-500';
    const textColor = dark ? 'text-slate-400' : 'text-slate-500';

    return (
        <div className={`mt-10 text-center ${className}`}>
            <div className="mx-auto flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
                <a
                    href={href}
                    onClick={() => onClick?.(location, text, href)}
                    className="w-full sm:w-auto"
                >
                    <Button variant="primary" size="lg" className="w-full sm:w-auto">
                        {text}
                    </Button>
                </a>

                {showMentorCta && (
                    <a
                        href="#mentor"
                        onClick={() => onClick?.(location, 'Kenali Fasilitator', '#mentor')}
                        className="w-full sm:w-auto"
                    >
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                            Kenali Fasilitator
                        </Button>
                    </a>
                )}
            </div>

            {items.length > 0 && (
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                    {items.map((item) => (
                        <span
                            key={item}
                            className={`flex items-center gap-1.5 text-sm font-medium ${textColor}`}
                        >
                            <CheckCircle2 size={14} className={`shrink-0 ${iconColor}`} />
                            {item}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
