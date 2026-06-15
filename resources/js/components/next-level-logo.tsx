import { cn } from '@/lib/utils';

interface NextLevelLogoProps {
    className?: string;
}

export default function NextLevelLogo({ className }: NextLevelLogoProps) {
    return (
        <span
            className={cn(
                'relative block h-8 w-36 shrink-0 overflow-hidden',
                className,
            )}
        >
            <img
                src="/storage/logo/LogoNext.webp"
                alt="Next Level"
                className="absolute left-1/2 top-1/2 w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2"
            />
        </span>
    );
}
