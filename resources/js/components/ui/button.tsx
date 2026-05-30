import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                primary:     'bg-blue-500 text-white shadow-sm shadow-blue-900/40 hover:bg-blue-600 active:bg-blue-700',
                secondary:   'border border-white/10 bg-white/5 text-white shadow-sm hover:bg-white/10 active:bg-white/15',
                dark:        'bg-[#1C1C1E] text-white hover:bg-slate-800 active:bg-slate-900',
                ghost:       'text-slate-400 hover:bg-white/5 hover:text-white',
                outline:     'border border-white/20 bg-transparent text-white hover:bg-white/5 active:bg-white/10',
                destructive: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
                success:     'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800',
            },
            size: {
                sm:   'h-8 px-3 text-xs',
                md:   'h-9 px-4 text-sm',
                lg:   'h-10 px-5 text-sm',
                xl:   'h-12 px-7 text-base',
                icon: 'h-9 w-9',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
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
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
