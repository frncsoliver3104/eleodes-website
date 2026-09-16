import { downloadFilename, downloadUrl } from '../config/download'
import downloadQrCode from '../assets/eleodes-download-qr.png'

const Download = () => {
  return (
    <section id="download" className="bg-[#e9fff4] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-[minmax(0,420px)_1fr]">
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

          <div className="grid items-center gap-6 md:grid-cols-[220px_1fr]">
            <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <img
                src={downloadQrCode}
                alt="QR code to download the Eleodes Android app"
                className="h-40 w-40 rounded-xl object-contain"
              />
              <p className="mt-3 text-xs font-medium text-slate-600">Scan to download</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3DDC84" strokeWidth="1.5">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                      <line x1="9" y1="3" x2="15" y2="3"/>
                      <line x1="9" y1="21" x2="15" y2="21"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">android 8.0+</p>
                    <p className="text-xs text-slate-500">Required</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">version 0.0.7</p>
                    <p className="text-xs text-slate-500">Latest Version</p>
                  </div>
                </div>
                <a
                  href={downloadUrl}
                  download={downloadFilename}
                  className="block w-full rounded-full bg-[#00c896] px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-lg transition-all duration-200 hover:bg-[#00b386]"
                >
                  DOWNLOAD APK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download
