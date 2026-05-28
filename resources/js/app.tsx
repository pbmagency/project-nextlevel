import '../css/app.css';

import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Sales & Marketing Skills Training';

createInertiaApp({
    title: (title) => `${title} | ${appName}`,
    resolve: async (name) => {
        const pages = import.meta.glob<{ default: React.ComponentType }>('./pages/**/*.tsx');
        const mod = await pages[`./pages/${name}.tsx`]();
        return mod.default;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#2563EB',
    },
});
