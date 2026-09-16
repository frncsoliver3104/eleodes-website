import { useState } from 'react'
import Logo from './Logo'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Download', href: '#download' },
    { label: 'Creators', href: '#creators' },
    { label: 'About', href: '#about' },
  ]

  return (
    <nav className="bg-[#111111] text-white px-4 sm:px-6 py-2.5 sticky top-0 z-50 shadow-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 py-1 md:py-0">
        <a
          href="#home"
          aria-label="Eleodes home"
          className="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-eleodes-teal"
        >
          <Logo size="sm" dark />
        </a>
        <div className="hidden md:flex items-center gap-6 text-[0.95rem] font-light tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-eleodes-teal transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden text-white"
          aria-label="Toggle mobile menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 rounded-3xl border border-white/10 bg-[#111111] px-5 py-4 shadow-lg">
          <div className="flex flex-col gap-3 text-sm font-light tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 hover:bg-white/10 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
