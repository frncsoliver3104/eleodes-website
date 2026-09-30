import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="bg-eleodes-teal text-gray-900 py-20">
      <div className="mx-auto max-w-[1428px] px-6">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-12">
          {/* Logo & Social */}
          <div>
            <div className="mb-6 flex items-center">
              <Logo size="sm" black />
            </div>
            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/share/1BiuzxtiuM/"
                target="_blank"
                rel="noreferrer"
                className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-gray-900 transition-colors duration-200 hover:bg-gray-900 hover:text-white"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="mailto:eleodes@myyahoo.com"
                className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-gray-900 transition-colors duration-200 hover:bg-gray-900 hover:text-white"
                aria-label="Yahoo"
              >
                <span className="text-base font-bold leading-none" aria-hidden="true">Y!</span>
              </a>
              <a
                href="mailto:eleodes472@gmail.com"
                className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-gray-900 transition-colors duration-200 hover:bg-gray-900 hover:text-white"
                aria-label="Email eleodes472@gmail.com"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+639380114201" className="hover:underline">+63 938 011 4201</a>
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Iloilo City, Philippines
              </li>
            </ul>
          </div>

          {/* Explore links */}
          <div>
            <h4 className="mb-4 font-semibold">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li id="faq">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                    FAQ&apos;s
                    <span className="text-base leading-none" aria-hidden="true">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <div className="mt-3 space-y-3 border-l border-gray-900/20 pl-3 text-gray-900/80">
                    <details>
                      <summary className="cursor-pointer">What is Eleodes?</summary>
                      <p className="mt-1">A smart system that generates water from air.</p>
                    </details>
                    <details>
                      <summary className="cursor-pointer">What does the app monitor?</summary>
                      <p className="mt-1">Temperature, humidity, water level, and pH.</p>
                    </details>
                    <details>
                      <summary className="cursor-pointer">Where can I get the app?</summary>
                      <p className="mt-1">Download the Android APK from our Download section.</p>
                    </details>
                  </div>
                </details>
              </li>
              <li><a href="#terms" className="hover:underline">Terms and Services</a></li>
              <li><a href="#about" className="hover:underline">Privacy and Policy</a></li>
            </ul>
          </div>

          {/* More links */}
          <div>
            <h4 className="mb-4 font-semibold">More</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#download" className="hover:underline">User Manual</a></li>
              <li><a href="mailto:eleodes@gmail.com?subject=Report%20a%20Bug" className="hover:underline">Report a Bug</a></li>
              <li><a href="mailto:eleodes@gmail.com?subject=Help%20Center" className="hover:underline">Help Center</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-900/20 pt-6 text-center text-sm">
          ©<span className="font-bold">eleodes</span> 2026 All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
