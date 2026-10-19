const fallbackDownloadUrl = '/releases/app-release.apk'

export const downloadUrl = import.meta.env.VITE_DOWNLOAD_URL || fallbackDownloadUrl
export const downloadFilename = 'eleodes-app-v1.0.1.apk'
