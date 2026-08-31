const fallbackDownloadUrl = '/releases/app-release.apk'

// Set VITE_DOWNLOAD_URL when using the optional Express download service.
// Leaving it unset keeps the site fully deployable on static hosting.
export const downloadUrl = import.meta.env.VITE_DOWNLOAD_URL || fallbackDownloadUrl
export const downloadFilename = 'eleodes-app-v0.0.7.apk'
