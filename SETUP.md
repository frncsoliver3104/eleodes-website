# Eleodes APK Download Site

This Vite + React site is ready for static deployment. The APK is stored at `public/releases/app-release.apk`; Vite copies it to `dist/releases/app-release.apk` when building.

## Deploy the static site

1. Install Node.js 18 or later.
2. From the project root, run:

   ```bash
   npm ci
   npm run build
   ```

3. Upload the generated `dist` folder to any static host. Netlify and Vercel detect the included configuration automatically:

   - Build command: `npm run build`
   - Publish directory: `dist`

4. Confirm that `https://your-domain.example/releases/app-release.apk` downloads the APK.

The site uses a direct same-origin APK link by default, so it does not require a backend for deployment.

## Optional protected download service

Use the Express service only if you need its rate-limited `/api/download` endpoint.

1. Install its dependencies:

   ```bash
   cd backend
   npm install
   ```

2. Copy `backend/.env.example` to `backend/.env` and set `FRONTEND_URL` to your deployed site address.
3. Copy `.env.example` to `.env` in the project root, set `VITE_DOWNLOAD_URL` to `https://your-backend-domain.example/api/download`, then rebuild and redeploy the frontend.
4. Start the backend with `npm start` from the `backend` directory.

The backend must have access to `public/releases/app-release.apk` when it is deployed.

## Before going live

- Replace the Instagram and Facebook URLs in `src/components/Footer.jsx` if they are not the project’s official accounts.
- Set up a proper contact or legal page before adding policy/help links back to the footer.
- Verify that the uploaded APK is the intended signed release.
- Test the download on an Android device over HTTPS.
