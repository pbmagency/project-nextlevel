import '../css/app.css';

import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from '@/hooks/use-appearance';

// Eager import all pages — no code splitting, guaranteed to work
const pages = import.meta.glob<{ default: React.ComponentType }>(
    './pages/**/*.tsx',
    { eager: true },
);

const appName = import.meta.env.VITE_APP_NAME || 'Sales & Marketing Skills Training';

createInertiaApp({
    title: (title) => (title ? `${title} | ${appName}` : appName),
    resolve: (name) => {
        const page = pages[`./pages/${name}.tsx`];
        if (!page) throw new Error(`Page not found: ${name}`);
        return page.default;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: { color: '#2563EB' },
});

initializeTheme();
