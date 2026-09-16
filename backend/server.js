import express from 'express'
import rateLimit from 'express-rate-limit'
import cors from 'cors'
import helmet from 'helmet'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000
const APK_PATH = path.resolve(__dirname, '../public/releases/app-release.apk')

// Avoid disclosing that this service is powered by Express.
app.disable('x-powered-by')

const configuredOrigins = (process.env.FRONTEND_URL || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)
  .map((origin) => {
    try {
      return new URL(origin).origin
    } catch {
      throw new Error(`Invalid FRONTEND_URL origin: ${origin}`)
    }
  })

// Only enable this behind a known reverse proxy. The default keeps request IPs
// from being supplied by untrusted X-Forwarded-For headers.
if (process.env.TRUST_PROXY === '1') {
  app.set('trust proxy', 1)
}

// Security Middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'same-site' },
}))

// CORS - Allow only frontend domain
app.use((req, res, next) => {
  const origin = req.get('Origin')
  // Direct APK navigations and command-line downloads do not send Origin.
  // For browser API requests, reject origins outside the explicit allowlist.
  if (origin && !configuredOrigins.includes(origin)) {
    return res.status(403).json({ error: 'Origin is not allowed' })
  }
  return next()
})

const corsOptions = {
  origin: configuredOrigins,
  credentials: false,
  methods: ['GET'],
  maxAge: 86400,
}
app.use(cors(corsOptions))

// Rate Limiting - Prevent abuse
const downloadLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // 5 requests per minute
  message: 'Too many download attempts. Please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
})

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' })
})

// Download APK Endpoint
app.get('/api/download', downloadLimiter, (req, res) => {
  try {
    res.download(APK_PATH, 'app-release.apk', {
      headers: {
        'Content-Type': 'application/vnd.android.package-archive',
        'X-Content-Type-Options': 'nosniff',
        'Cache-Control': 'no-store',
      },
    }, (err) => {
      if (err) {
        console.error('Download error:', err)
        if (!res.headersSent) {
          res.status(500).json({ error: 'Download failed' })
        }
      }
    })
  } catch (error) {
    console.error('Server error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get APK Info
app.get('/api/apk-info', (req, res) => {
  res.json({
    name: 'Eleodes APK',
    version: '0.0.7',
    filename: 'app-release.apk',
    android_version: '8.0+',
    status: 'available'
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack || err.message)
  return res.status(500).json({ error: 'Something went wrong!' })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`)
  console.log(`Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`)
})
