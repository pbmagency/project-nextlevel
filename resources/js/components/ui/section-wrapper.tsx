import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
    children: ReactNode;
    bg?: 'white' | 'slate' | 'dark';
    className?: string;
    id?: string;
}

export default function SectionWrapper({ children, bg = 'white', className = '', id }: SectionWrapperProps) {
    const backgrounds: Record<string, string> = {
        white: 'bg-[#0A0A0F]',
        slate: 'bg-[#111118]',
        dark:  'bg-[#050508]',
    };

    return (
        <section id={id} className={cn(backgrounds[bg], className)}>
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
}
