
# Next.js Frontend Template

A modern Next.js template with TypeScript, Tailwind CSS 4, Shadcn UI, Clerk authentication, and Zustand state management.

## Features

- Next.js 15 with App Router and TypeScript
- Tailwind CSS 4 with dark/light mode support
- Shadcn UI components
- Clerk Authentication
- Zustand + Immer state management
- Server-side rendering
- Prettier & ESLint

## Project Structure

```bash
├── app/                    # Next.js app router
├── components/            # Reusable UI components
├── sections/             # Page sections
├── providers/            # Client-side providers
├── state/               # Zustand stores
├── lib/                 # Utility functions
├── utils/               # Helper utilities
├── hooks/               # Custom React hooks
└── config/              # Configuration files
```

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**

   ```bash
   cp env.example .env.local
   ```

   Add your Clerk credentials to `.env.local`:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
   CLERK_SECRET_KEY=sk_test_your_secret_here
   ```

3. **Get Clerk keys:**
   - Go to [Clerk Dashboard](https://dashboard.clerk.com/)
   - Create a new application
   - Copy your keys to `.env.local`

4. **Start development server:**

   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix auto-fixable linting errors
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run type-check   # Check TypeScript types
```

## Deployment

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy!

## Learn More

- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com/)
- [Clerk](https://clerk.com/docs)
