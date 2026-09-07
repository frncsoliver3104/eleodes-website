
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

export const validateDownloadRequest = () => {

  const userAgent = navigator.userAgent
  if (!userAgent) return false
  

  if (typeof window === 'undefined') return false
  
  return true
}

export const sanitizeFilename = (filename) => {
  if (typeof filename !== 'string') return ''
  
  const sanitized = filename.replace(/[^a-zA-Z0-9._-]/g, '')
  
  if (!sanitized.toLowerCase().endsWith('.apk')) {
    return ''
  }
  
  return sanitized
}

export const logSecurityEvent = (event, details) => {
  const timestamp = new Date().toISOString()
  console.log(`[SECURITY] ${timestamp} - ${event}`, details)
}


export const generateToken = () => {
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}
