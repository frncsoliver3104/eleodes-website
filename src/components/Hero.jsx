import Logo from './Logo'
import { downloadFilename, downloadUrl } from '../config/download'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#d9fff2] py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.14),_transparent_48%)]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="max-w-2xl text-left">
          <Logo size="sm" />
          <p className="mb-6 mt-4 text-2xl font-light italic tracking-tight text-slate-950 md:text-[2.1rem]">
            "Every Drop Matters"
          </p>
          <p className="mb-10 max-w-lg text-base leading-8 tracking-tight text-slate-700 sm:text-lg">
            Download the Eleodes APK directly from this site and install the mobile app to monitor your system remotely.
          </p>
          <a
            href={downloadUrl}
            download={downloadFilename}
            className="inline-flex items-center gap-2 rounded-full bg-[#00c896] px-8 py-3 text-slate-950 shadow-[0_14px_30px_rgba(0,200,150,0.18)] transition-all duration-200 hover:bg-[#00b386]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="font-medium">APK Download</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
