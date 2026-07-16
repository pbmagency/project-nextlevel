import inertia from '@inertiajs/vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression2';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        inertia(),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
        // Add Gzip and Brotli compression just like full-bright!
        compression({ algorithm: 'gzip', exclude: [/\.(br)$/, /\.(gz)$/] }),
        compression({ algorithm: 'brotliCompress', exclude: [/\.(br)$/, /\.(gz)$/] }),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    // React core — always needed, long-lived cache
                    if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
                        return 'react-vendor';
                    }
                    // Lucide icons — shared across pages
                    if (id.includes('node_modules/lucide-react')) {
                        return 'icons-vendor';
                    }
                    // We DO NOT bundle Radix UI or Headless UI here anymore. 
                    // Vite will naturally code-split them, fixing the "Unused JS" warning!
                },
            },
        },
        chunkSizeWarningLimit: 1000,
    }
});