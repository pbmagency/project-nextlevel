import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                primary:   'bg-[#2563EB] text-white hover:bg-[#1d4ed8] focus-visible:ring-blue-500 shadow-lg shadow-blue-500/25',
                secondary: 'border-2 border-[#2563EB] text-[#2563EB] hover:bg-blue-50 focus-visible:ring-blue-500',
                dark:      'bg-[#1E293B] text-white hover:bg-[#0F172A] focus-visible:ring-slate-500',
                ghost:     'hover:bg-slate-100 text-slate-700 focus-visible:ring-slate-500',
                outline:   'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 focus-visible:ring-slate-500',
            },
            size: {
                sm:   'h-9 px-4 text-xs',
                md:   'h-11 px-6 text-sm',
                lg:   'h-13 px-8 text-base',
                xl:   'h-15 px-10 text-lg',
                icon: 'h-9 w-9 p-0',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'lg',
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
