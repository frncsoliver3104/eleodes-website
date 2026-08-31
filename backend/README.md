# Eleodes Backend Server

Secure backend for managing APK downloads with rate limiting and security features.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create .env file:**
   ```bash
   cp .env.example .env
   ```

3. **Update .env with your settings:**
   ```
   PORT=5000
   FRONTEND_URL=http://localhost:5173
   NODE_ENV=development
   ```

4. **Run the server:**
   ```bash
   npm run dev
   ```

Server will run on `http://localhost:5000`

## API Endpoints

### Health Check
```
GET /health
Response: { status: 'Server is running' }
```

### Get APK Info
```
GET /api/apk-info
Response: {
  name: 'Eleodes APK',
  version: '0.0.7',
  filename: 'app-release.apk',
  android_version: '8.0+',
  status: 'available'
}
```

### Download APK
```
POST /api/download
Rate Limit: 5 requests per minute per IP
Response: File download or error message
```

## Security Features

✅ **Helmet** - HTTP headers security
✅ **CORS** - Cross-Origin protection
✅ **Rate Limiting** - Prevent abuse (5 downloads per minute)
✅ **Input Validation** - Sanitize requests
✅ **Error Handling** - Secure error messages
✅ **Environment Variables** - Sensitive data protection

## Running Both Frontend & Backend

**Terminal 1 (Frontend):**
```bash
cd ..
npm run dev
```

**Terminal 2 (Backend):**
```bash
cd backend
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Production Deployment

Before deploying:

1. Update `.env` with production URLs
2. Set `NODE_ENV=production`
3. Change CORS origin to your domain:
   ```
   FRONTEND_URL=https://yourdomain.com
   ```
4. Deploy backend and frontend separately
5. Update frontend API URL to production backend URL

## Folder Structure

```
backend/
  server.js          # Main server file
  package.json       # Dependencies
  .env.example       # Environment template
  .env               # Your configuration (don't commit)
  README.md          # This file
```
