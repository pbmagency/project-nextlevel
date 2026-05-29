import '../css/app.css';

import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';

const appName = import.meta.env.VITE_APP_NAME || 'Sales & Marketing Skills Training';

const pages = import.meta.glob<{ default: React.ComponentType }>('./pages/**/*.tsx');

function getLayout(name: string) {
    if (name === 'landing' || name === 'welcome') return undefined;
    if (name.startsWith('admin/')) return undefined;
    if (name.startsWith('auth/')) return AuthLayout;
    if (name.startsWith('settings/')) return [AppLayout, SettingsLayout];
    return AppLayout;
}

createInertiaApp({
    title: (title) => (title ? `${title} | ${appName}` : appName),
    resolve: async (name) => {
        const mod = pages[`./pages/${name}.tsx`];
        if (!mod) throw new Error(`Page not found: ${name}`);
        const { default: Component } = await mod();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (Component as any).layout = getLayout(name);
        return Component;
    },
    withApp(app) {
        return (
            <TooltipProvider delayDuration={0}>
                {app}
                <Toaster />
            </TooltipProvider>
        );
    },
    progress: { color: '#2563EB' },
});

initializeTheme();
