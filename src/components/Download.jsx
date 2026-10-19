import { useState } from 'react'
import { downloadFilename, downloadUrl } from '../config/download'
import downloadQrCode from '../assets/eleodes-download-qr.png'

const screenshots = {
  light: [
    { title: 'Device not found', image: 'dashboard-error-light.jpg' },
    { title: 'Enter device ID and passkey', image: 'connect-device-light.jpg' },
    { title: 'Device connected and Wi-Fi setup', image: 'connected-wifi-light.jpg' },
    { title: 'Dashboard readings', image: 'dashboard-light.jpg' },
    { title: 'Daily and weekly production', image: 'history-light.jpg' },
    { title: 'Production and water usage', image: 'history-detail-light.jpg' },
    { title: 'Saved devices', image: 'saved-devices-light.jpg' },
    { title: 'Settings', image: 'settings-light.jpg' },
    { title: 'Notifications', image: 'notifications-light.jpg' },
  ],
  dark: [
    { title: 'Device not found', image: 'dashboard-error-dark.jpg' },
    { title: 'Device connected and Wi-Fi setup', image: 'connect-wifi-dark.jpg' },
    { title: 'Find the ESP32 over Bluetooth', image: 'bluetooth-off-dark.jpg' },
    { title: 'Dashboard readings', image: 'dashboard-dark.jpg' },
    { title: 'Daily and weekly production', image: 'history-dark.jpg' },
    { title: 'Production details and water usage', image: 'history-detail-dark.jpg' },
    { title: 'Saved devices', image: 'saved-devices-dark.jpg' },
    { title: 'Settings', image: 'settings-dark.jpg' },
    { title: 'Notifications', image: 'notifications-dark.jpg' },
  ],
}

const Download = () => {
  const [screenshotMode, setScreenshotMode] = useState('light')
  const [screenshotIndex, setScreenshotIndex] = useState(0)
  const activeScreens = screenshots[screenshotMode]
  const activeScreenshot = activeScreens[screenshotIndex]
  const previousScreenshot = activeScreens[(screenshotIndex - 1 + activeScreens.length) % activeScreens.length]
  const nextScreenshot = activeScreens[(screenshotIndex + 1) % activeScreens.length]

  return (
    <section id="download" className="bg-[#e9fff4] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#00c896]">
            Download
          </p>
          <h2 className="mb-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Get the Eleodes app
          </h2>
          <p className="text-base leading-8 text-slate-700">
            Download the APK and install it on your Android device.
          </p>
        </div>

        <div className="mt-8 grid gap-y-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-x-10">
          <div className="flex justify-center md:col-start-1 md:row-start-1">
            <div role="group" aria-label="Screenshot display mode" className="inline-flex w-fit rounded-full border border-emerald-200 bg-white/70 p-1">
              {['light', 'dark'].map((mode) => (
                <button
                  key={mode}
                  type="button"
                  aria-pressed={screenshotMode === mode}
                  onClick={() => {
                    setScreenshotMode(mode)
                    setScreenshotIndex(0)
                  }}
                  className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors ${screenshotMode === mode ? 'bg-[#087b61] text-white' : 'text-slate-700 hover:bg-emerald-100'}`}
                >
                  {mode} mode
                </button>
              ))}
            </div>

          </div>

          <div
            role="group"
            aria-label={`${screenshotMode} mode app screenshots`}
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') {
                event.preventDefault()
                setScreenshotIndex((current) => (current - 1 + activeScreens.length) % activeScreens.length)
              } else if (event.key === 'ArrowRight') {
                event.preventDefault()
                setScreenshotIndex((current) => (current + 1) % activeScreens.length)
              }
            }}
            className="flex items-center justify-center gap-3 md:col-start-1 md:row-start-2"
          >
              <button
                type="button"
                aria-label={`Previous screenshot: ${previousScreenshot.title}`}
                onClick={() => setScreenshotIndex((screenshotIndex - 1 + activeScreens.length) % activeScreens.length)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-white/70 text-slate-800 transition-colors hover:bg-white"
              >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <div className="w-[150px]">
                <div className="overflow-hidden rounded-[1.2rem] border border-slate-300 bg-slate-950 p-1 shadow-md">
                  <img
                    key={activeScreenshot.image}
                    src={`/app-screenshots/${activeScreenshot.image}`}
                    loading="lazy"
                    alt={`${screenshotMode === 'light' ? 'Light' : 'Dark'} mode: ${activeScreenshot.title}`}
                    className="aspect-[9/19.5] w-full rounded-[0.9rem] object-cover"
                  />
                </div>
                <p aria-hidden="true" className="mt-2 text-center text-xs text-slate-500">{screenshotIndex + 1} of {activeScreens.length}</p>
                <span aria-live="polite" className="sr-only">
                  Screen {screenshotIndex + 1} of {activeScreens.length}: {activeScreenshot.title}
                </span>
              </div>

              <button
                type="button"
                aria-label={`Next screenshot: ${nextScreenshot.title}`}
                onClick={() => setScreenshotIndex((screenshotIndex + 1) % activeScreens.length)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-white/70 text-slate-800 transition-colors hover:bg-white"
              >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

          <div className="grid h-full items-center justify-center gap-6 rounded-none border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[160px_auto] sm:gap-8 sm:p-6 md:col-start-2 md:row-start-2">
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={downloadQrCode}
                loading="lazy"
                alt="QR code to download the Eleodes Android app"
                className="h-36 w-36 rounded-xl object-contain"
              />
              <p className="mt-2 text-sm font-medium text-slate-600">Scan to download</p>
            </div>

            <div className="flex flex-col items-center gap-4 sm:items-start sm:pl-8">
              <div className="flex items-center gap-3 text-left">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3DDC84" strokeWidth="1.5">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                    <line x1="9" y1="3" x2="15" y2="3"/>
                    <line x1="9" y1="21" x2="15" y2="21"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-900">Android 8.0+</p>
                  <p className="text-xs text-slate-500">Required</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-left">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-900">Version 1.0.1</p>
                  <p className="text-xs text-slate-500">Latest Version</p>
                </div>
              </div>
              <a
                href={downloadUrl}
                download={downloadFilename}
                className="inline-flex w-fit items-center justify-center rounded-full bg-[#00c896] px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-md transition-all duration-200 hover:bg-[#00b386]"
              >
                DOWNLOAD APK
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download
