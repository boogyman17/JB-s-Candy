# JB's Candy

This repository contains a Next.js project located in the `my-app` folder.

## Setup

1. Copy the example environment file and provide your Supabase credentials:

```bash
cp my-app/.env.example my-app/.env.local
```

Edit `my-app/.env.local` and fill in the values for `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

2. Install dependencies and run the development server:

```bash
cd my-app
npm install
npm run dev
```

The application will be available at `http://localhost:3000`.

### Troubleshooting

If `npm run build` fails with an error like `supabaseUrl is required`, make sure
the environment variables `NEXT_PUBLIC_SUPABASE_URL` and
`NEXT_PUBLIC_SUPABASE_ANON_KEY` are defined in `.env.local` (for local
development) or in your Vercel project settings.

## Deployment on Vercel

1. Push this repository to GitHub if it is not already there.
2. In the [Vercel dashboard](https://vercel.com/), create a new project from the repository.
3. In the project settings, add the following Environment Variables:

   - `NEXT_PUBLIC_SUPABASE_URL` – your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` – your Supabase anon key

   Make sure to add them for the **Production** environment (and for **Preview** or **Development** if needed).
4. Trigger a deployment. Vercel will install dependencies and run `npm run build` automatically.
5. Once the deployment completes, your site will be live on the Vercel-provided URL.