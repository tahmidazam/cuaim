The code repository for the official website of Cambridge University's Artificial Intelligence in Medicine Society.

## Frameworks and key libraries

- [NextJS](https://nextjs.org) as the React framework;
- [PostHog](https://posthog.com) for web analytics;
- [Radix Themes](https://www.radix-ui.com) as the UI library;
- [Radix Icons](https://www.radix-ui.com/icons) as the icon library;
- [Framer Motion](https://www.framer.com/motion/) as the animation library
- [MDX](https://mdxjs.com) as markup language for prose content;
- [Zod](https://zod.dev) for data declaration and validation;
- [Sonner](https://sonner.emilkowal.ski) for rendering toasts; and
- [`date-fns`](https://date-fns.org) for date manipulation;

## Directories

The directories inside the `src` folder are structured as follows:

- `analytics`: analytics components;
- `app`: NextJS [app router](https://nextjs.org/docs/app/building-your-application/routing) directory;
- `components`: UI components;
- `constants`: constants;
- `css`: CSS files;
- `interfaces`: Typescript interfaces;
- `schemas`: [zod](https://zod.dev) schemas for data validation; and
- `utils`: utility functions.

## Contributing

### Running a local development server

1. Clone this repository.
2. Add local environment variables (refer to the [schema](#environment-variables-schema)).
3. Run `pnpm i` to install all required dependencies.
4. Run `pnpm dev` to run the local development server.

#### Environment variables schema

- `NEXT_PUBLIC_POSTHOG_KEY`: The public key for PostHog analytics.
- `NEXT_PUBLIC_POSTHOG_HOST`: The host for PostHog analytics.
- `GOOGLE_CLOUD_API_KEY`: The API key for Google Cloud services.
- `GOOGLE_CALENDAR_ID`: The ID of the public Google calendar to pull event data from.
- `GOOGLE_CALENDAR_SHAREABLE_LINK`: The shareable link to visit the public Google Calendar.

### Commits

Commits to this repository follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format.

---

© Tahmid Azam ([ta549@cam.ac.uk](mailto:ta549@cam.ac.uk)) 2024
