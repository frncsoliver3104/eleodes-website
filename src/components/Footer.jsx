import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="bg-eleodes-teal text-gray-900 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Logo & Social */}
          <div className="md:col-span-1">
            <div className="mb-6 flex items-center">
              <Logo size="sm" black />
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/frrrrancs.dgaf?igsh=c2MxZGZ2ZWVydmp1"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-900 transition-colors duration-200 hover:bg-gray-900 hover:text-white"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/19BHH8WEij/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-900 transition-colors duration-200 hover:bg-gray-900 hover:text-white"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:eleodes@gmail.com" className="hover:underline">eleodes@gmail.com</a>
              </li>
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

          {/* Navigate */}
          <div>
            <h4 className="mb-4 font-semibold">Navigate</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#download" className="hover:underline">Download</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
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
