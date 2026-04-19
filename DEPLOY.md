# Deployment Guide

## Local preview generation

Generate `preview.svg` locally:

```powershell
npm run generate:preview
```

The file will be written to:

```text
preview.svg
```

If you only want to inspect the static result locally, open:

```text
file:///E:/Code%20Repo/BROWN3QQQ/preview.svg
```

## Upload to GitHub

This repository is a GitHub profile repository, so the repo name must match the username:

```text
BROWN3QQQ/BROWN3QQQ
```

Push local changes:

```powershell
git add .
git commit -m "Update profile card"
git push origin master
```

## Deploy to Vercel

### Option 1: Deploy from the Vercel web UI

1. Open `https://vercel.com/new`
2. Sign in with GitHub
3. Import the repository `BROWN3QQQ/BROWN3QQQ`
4. Keep the default framework detection
5. Click `Deploy`

### Option 2: Redeploy an existing Vercel project

1. Open the existing Vercel project dashboard
2. Go to the latest deployment
3. Click `Redeploy`

## Verify the SVG endpoint

The homepage `/` is not the SVG. The dynamic SVG is served from:

```text
https://<your-vercel-domain>/api
```

Open that URL directly in the browser and confirm the SVG renders.

## README configuration

Use the deployed `/api` endpoint inside `README.md`:

```md
<a href="https://github.com/BROWN3QQQ">
  <img width="100%" src="https://<your-vercel-domain>/api?v=1" />
</a>
```

When GitHub caches the old image, bump the query version:

```md
?v=2
```

## Current build compatibility note

This project uses an older Next.js version. The `build` script already includes:

```text
--openssl-legacy-provider
```

That is required for Vercel builds with newer Node/OpenSSL environments.
