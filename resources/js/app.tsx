import '../css/app.css';

import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from '@/hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Sales & Marketing Skills Training';

createInertiaApp({
    title: (title) => (title ? `${title} | ${appName}` : appName),
    resolve: async (name) => {
        const pages = import.meta.glob<{ default: React.ComponentType }>('./pages/**/*.tsx');
        const mod = pages[`./pages/${name}.tsx`];
        if (!mod) throw new Error(`Page not found: ${name}`);
        return (await mod()).default;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: { color: '#2563EB' },
});

initializeTheme();
