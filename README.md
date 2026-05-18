# Codecamp Exercise: Internationalization (next-intl)

## Learning Objectives

- Configure `next-intl` in a Next.js App Router project
- Create translation message files for multiple locales (English and Thai)
- Use the `useTranslations` hook in client components
- Use the `getTranslations` function in server components
- Implement locale switching with a language selector component

## Exercise Instructions

### Setup

1. **Fork** this repository and **clone** your fork
2. Run `pnpm install` to install dependencies
3. Run `pnpm dev` to start the development server

### Step 1: Create Translation Messages

- `src/messages/en.json` — English translations for the app
- `src/messages/th.json` — Thai translations for the same keys

Required keys:
```json
{
  "common": { "welcome": "...", "language": "...", "switchLocale": "..." },
  "home": { "title": "...", "description": "...", "getStarted": "..." },
  "about": { "title": "...", "bio": "..." }
}
```

### Step 2: Configure next-intl (`src/i18n/request.ts`)

- Export a `getRequestConfig` function that loads the correct message file based on locale

### Step 3: Create Components

- `src/components/language-switcher.tsx` — a button/dropdown that toggles between `en` and `th`
- Update `src/app/[locale]/page.tsx` — use `useTranslations('home')` to display translated content
- Create `src/app/[locale]/about/page.tsx` — use `getTranslations('about')` in a server component

### Step 4: Run Tests

- Run `pnpm test` to verify your implementations

## Acceptance Criteria

- [ ] English and Thai message files exist with matching keys
- [ ] Home page displays translated content based on locale
- [ ] About page uses server-side translations
- [ ] Language switcher toggles between `/en` and `/th` routes
- [ ] No hardcoded strings in components (all strings come from translations)
- [ ] `pnpm test` passes with all tests green

## File Structure

```
codecamp-exercise-internationalization/
├── README.md
├── LICENSE
├── .gitignore
├── package.json
├── next.config.ts
├── tsconfig.json
├── src/
│   ├── i18n/
│   │   └── request.ts               # TODO: Configure next-intl
│   ├── messages/
│   │   ├── en.json                   # TODO: English translations
│   │   └── th.json                   # TODO: Thai translations
│   ├── components/
│   │   └── language-switcher.tsx     # TODO: Locale toggle component
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx            # Locale layout (provided)
│   │   │   ├── page.tsx              # TODO: Home page with translations
│   │   │   └── about/
│   │   │       └── page.tsx          # TODO: About page (server component)
│   └── __tests__/
│       └── messages.test.ts          # Tests for translation completeness
```

## Commands

```bash
pnpm install     # Install dependencies
pnpm dev     # Start dev server at http://localhost:3000
npm test        # Run all tests
```

## Tips

- Use `useTranslations('namespace')` in client components
- Use `getTranslations('namespace')` in async server components
- Thai text example: "ยินดีต้อนรับ" (Welcome), "ภาษา" (Language)
- The locale is extracted from the URL path: `/en/about` vs `/th/about`
