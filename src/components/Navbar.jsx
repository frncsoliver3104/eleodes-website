import { useEffect, useState } from 'react'
import Logo from './Logo'

const Navbar = ({ isPolicyPage = false }) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const closeMenu = () => setOpen(false)
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', closeOnEscape)
    window.addEventListener('hashchange', closeMenu)
    window.addEventListener('popstate', closeMenu)
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('hashchange', closeMenu)
      window.removeEventListener('popstate', closeMenu)
    }
  }, [])
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Device', href: '#device' },
    { label: 'Download', href: '#download' },
    { label: 'Manual', href: '/manual', page: true },
    { label: 'Creators', href: '#creators' },
    { label: 'About', href: '#about' },
  ]

  return (
    <nav aria-label="Main navigation" className="bg-[#111111] text-white px-4 sm:px-6 py-2.5 sticky top-0 z-50 shadow-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 py-1 md:py-0">
        <a
          href={isPolicyPage ? '/' : '#home'}
          aria-label="Eleodes home"
          className="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-eleodes-teal"
        >
          <Logo size="sm" dark />
        </a>
        <div className="hidden md:flex items-center gap-6 text-[0.95rem] font-light tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.page ? link.href : `${isPolicyPage ? '/' : ''}${link.href}`}
              className="hover:text-eleodes-teal transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`md:hidden h-11 w-11 rounded-md text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eleodes-teal ${open ? 'bg-white/10' : ''}`}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          type="button"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      <div id="mobile-navigation" hidden={!open} className="md:hidden mt-4 rounded-3xl border border-white/10 bg-[#111111] px-5 py-4 shadow-lg">
          <div className="flex flex-col gap-3 text-sm font-light tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.page ? link.href : `${isPolicyPage ? '/' : ''}${link.href}`}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 hover:bg-white/10 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
      </div>
    </nav>
  )
}

export default Navbar
