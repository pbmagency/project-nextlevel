import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
    // Ignore patterns
    {
        ignores: [
            'vendor/**',
            'public/build/**',
            'node_modules/**',
            'resources/js/actions/**',   // wayfinder auto-generated
            'resources/js/routes/**',    // wayfinder auto-generated
            'resources/js/wayfinder/**', // wayfinder auto-generated
        ],
    },

    // Base JS + TS rules
    js.configs.recommended,
    ...tseslint.configs.recommended,

    // React files
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooks,
        },
        languageOptions: {
            globals: { ...globals.browser },
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        settings: {
            react: { version: 'detect' },
        },
        rules: {
            // React hooks
            ...reactHooks.configs.recommended.rules,

            // TypeScript — loosen some strict defaults for LP project
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-unused-expressions': 'warn',

            // React
            'react/react-in-jsx-scope': 'off', // not needed in React 17+
            'react/prop-types': 'off',          // using TypeScript instead
        },
    },

    // Prettier — must be last to override formatting rules
    prettier,
);
