# mariia-front

A Vue 3 + TypeScript powered by Vite.

## Tech Stack

- Vue 3 for UI rendering
- Vue Router for routing
- Pinia for state management
- Axios for HTTP requests
- Vee Validate + Zod for form validation
- Tailwind CSS + Sass for styling

## Available Scripts

- `npm run dev` - Start development server with `vite.config.dev.mts`
- `npm run build` - Type-check and build production bundle
- `npm run build-only` - Build production bundle only
- `npm run preview` - Preview production build with `vite.config.prod.mts`
- `npm run type-check` - Run `vue-tsc`
- `npm run lint` - Run ESLint with auto-fix
- `npm run format` - Format files in `src/` with Prettier

## Runtime Dependencies

- `@vee-validate/zod` - Adapter that connects Vee Validate schemas with Zod.
- `axios` - Promise-based HTTP client for browser requests.
- `dotenv` - Loads environment variables from `.env` files into `process.env`.
- `pinia` - Official Vue state management library.
- `vee-validate` - Form validation framework for Vue.
- `vue` - Core Vue 3 framework.
- `vue-router` - Official routing library for Vue applications.
- `vue3-toastify` - Toast notification component library for Vue 3.
- `zod` - Type-safe schema validation and parsing library.

## Development Dependencies

- `@rushstack/eslint-patch` - Patch that improves ESLint module resolution behavior.
- `@tsconfig/node20` - Base TypeScript config presets targeting Node.js 20.
- `@types/node` - TypeScript type definitions for Node.js APIs.
- `@vitejs/plugin-vue` - Official Vite plugin for Vue single-file components.
- `@vue/eslint-config-prettier` - Disables ESLint rules that conflict with Prettier.
- `@vue/eslint-config-typescript` - Vue + TypeScript ESLint preset.
- `@vue/tsconfig` - Shared TypeScript config presets for Vue projects.
- `eslint` - JavaScript and TypeScript linter.
- `eslint-plugin-vue` - ESLint rules for Vue files and patterns.
- `npm-run-all2` - Utility to run npm scripts in sequence or parallel.
- `prettier` - Code formatter.
- `sass` - Sass compiler used for `.scss` styles.
- `tailwindcss` - Utility-first CSS framework.
- `typescript` - TypeScript language and compiler.
- `vite` - Fast frontend build tool and dev server.
- `vite-plugin-vue-devtools` - Vite plugin integration for Vue Devtools.
- `vue-tsc` - Type checking for Vue SFCs using TypeScript.

## Notes

- Package versions are defined in [package.json](package.json).
- If dependencies change, update this README to keep descriptions accurate.
