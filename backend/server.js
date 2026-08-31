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

// Security Middleware
app.use(helmet())

// CORS - Allow only frontend domain
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET'],
  allowedHeaders: ['Content-Type']
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

// Body Parser
app.use(express.json())

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' })
})

// Download APK Endpoint
app.get('/api/download', downloadLimiter, (req, res) => {
  try {
    const filePath = path.join(__dirname, '../public/releases/app-release.apk')
    
    res.download(filePath, 'app-release.apk', (err) => {
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
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`)
  console.log(`Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`)
})
