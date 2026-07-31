This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

Import the repo at [vercel.com/new](https://vercel.com/new). Vercel auto-detects Next.js, so
leave the build and output settings on their defaults:

| Setting          | Value                        | Set by       |
| ---------------- | ---------------------------- | ------------ |
| Framework Preset | Next.js                      | auto-detect  |
| Build Command    | `npm run build`              | auto-detect  |
| Output Directory | `.next`                      | auto-detect  |
| Install Command  | `npm ci --include=dev`       | `vercel.json`|

The install command is pinned in [`vercel.json`](./vercel.json) on purpose. Vercel restores a
cached `node_modules` between builds, and a plain `npm install` can leave stale packages in
place — which once produced a build failure with dependency versions that no longer matched
this repo's lockfile. `npm ci` deletes `node_modules` first and installs strictly from
`package-lock.json`, so every build starts from the exact locked tree. `--include=dev` is
explicit because Vercel builds with `NODE_ENV=production`, and Tailwind, PostCSS and
TypeScript are all devDependencies needed at build time.

For the same reason, the `three` / `three-globe` / `@react-three/*` versions are pinned exactly
(no `^`) in `package.json`. Those packages have inaccurate peer ranges and drift into
incompatible combinations. Change them together and deliberately, not via a range.

### Environment variables

Only one, and it's optional:

- `NEXT_PUBLIC_SITE_URL` — the canonical site URL (e.g. `https://yoursite.com`), used as the
  `metadataBase` for Open Graph / Twitter tags. Leave it unset and the app falls back to the
  Vercel-provided deployment URL.

Verify a deploy locally first with `npm run build && npm start`.
