import '../css/app.css';

import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';

const appName = import.meta.env.VITE_APP_NAME || 'Sales & Marketing Skills Training';

function getLayout(name: string) {
    if (name === 'landing' || name === 'welcome') return null;
    if (name.startsWith('admin/')) return null;
    if (name.startsWith('auth/')) return AuthLayout;
    if (name.startsWith('settings/')) return [AppLayout, SettingsLayout];
    return AppLayout;
}

createInertiaApp({
    title: (title) => (title ? `${title} | ${appName}` : appName),
    resolve: async (name) => {
        const pages = import.meta.glob<{ default: React.ComponentType }>('./pages/**/*.tsx');
        const key = `./pages/${name}.tsx`;
        const mod = pages[key];
        if (!mod) throw new Error(`Inertia page not found: ${name}`);
        const { default: Page } = await mod();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (Page as any).layout = getLayout(name) ?? undefined;
        return Page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <TooltipProvider delayDuration={0}>
                <App {...props} />
                <Toaster />
            </TooltipProvider>
        );
    },
    progress: { color: '#2563EB' },
});

initializeTheme();
