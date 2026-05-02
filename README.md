# Villa Babel

A holiday villa website built with Vite, React, and TypeScript.

## Features

- Hero section with welcome message
- About the villa
- Location and activities
- Reviews
- Contact form

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

> If you are using PowerShell and `npm` is blocked by execution policies, use:
> ```powershell
> & 'C:\Program Files\nodejs\npm.cmd' run dev
> ```

### Build

To build the project for production:
```bash
npm run build
```

### Preview Production Build

After building, run:
```bash
npm run preview
```

### Lint

To run the linter:
```bash
npm run lint
```

### Contact Form

The booking form is configured to submit to `info@villa-babel.com` through FormSubmit. Make sure the email is set up to receive messages from FormSubmit.

## Project Structure

- `src/main.tsx` - Entry point
- `src/App.tsx` - Main component
- `src/index.css` - Global styles
- `src/App.css` - Component styles
- `public/` - Static assets
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration

## Technologies Used

- React
- TypeScript
- Vite
- ESLint