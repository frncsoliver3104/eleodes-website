// Client-side security utilities

/**
 * Rate limiter for download attempts
 */
export const createRateLimiter = (maxAttempts = 3, timeWindow = 60000) => {
  const attempts = []
  
  return () => {
    const now = Date.now()
    const recentAttempts = attempts.filter(time => now - time < timeWindow)
    
    if (recentAttempts.length >= maxAttempts) {
      return { allowed: false, retryAfter: Math.ceil((recentAttempts[0] + timeWindow - now) / 1000) }
    }
    
    attempts.push(now)
    return { allowed: true }
  }
}

/**
 * Validate download request
 */
export const validateDownloadRequest = () => {
  // Check if user agent is legitimate
  const userAgent = navigator.userAgent
  if (!userAgent) return false
  
  // Check if request comes from browser
  if (typeof window === 'undefined') return false
  
  return true
}

/**
 * Sanitize filename
 */
export const sanitizeFilename = (filename) => {
  if (typeof filename !== 'string') return ''
  
  // Allow only alphanumeric, dash, underscore, and .apk extension
  const sanitized = filename.replace(/[^a-zA-Z0-9._-]/g, '')
  
  // Ensure it ends with .apk
  if (!sanitized.toLowerCase().endsWith('.apk')) {
    return ''
  }
  
  return sanitized
}

/**
 * Log security events
 */
export const logSecurityEvent = (event, details) => {
  const timestamp = new Date().toISOString()
  console.log(`[SECURITY] ${timestamp} - ${event}`, details)
}

/**
 * Generate secure token for CSRF protection
 */
export const generateToken = () => {
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}
