import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Device from './components/Device'
import Terms from './components/Terms'
import PrivacyNotice from './components/PrivacyNotice'
import Hero from './components/Hero'
import Features from './components/Features'
import Download from './components/Download'
import About from './components/About'
import Creators from './components/Creators'
import Footer from './components/Footer'

function App() {
  const [hash, setHash] = useState(window.location.hash)
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    const onPathChange = () => setPathname(window.location.pathname)
    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('popstate', onPathChange)
    return () => {
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('popstate', onPathChange)
    }
  }, [])

  useEffect(() => {
    if (hash === '#terms' || hash === '#privacy' || pathname === '/privacy' || pathname === '/terms') {
      window.scrollTo({ top: 0, behavior: 'instant' })
    } else {
      document.getElementById(hash.slice(1) || 'home')?.scrollIntoView()
    }
  }, [hash, pathname])

  const isPrivacyPage = pathname === '/privacy' || hash === '#privacy'

  const isTermsPage = pathname === '/terms' || hash === '#terms'

  useEffect(() => {
    document.title = isPrivacyPage
      ? 'Privacy Notice | Eleodes'
      : isTermsPage
        ? 'Terms of Service | Eleodes'
        : 'Eleodes - Every Drop Matters'
  }, [isPrivacyPage, isTermsPage])

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar isPolicyPage={isPrivacyPage || isTermsPage} />
      <main id="main-content" tabIndex={-1} className="overflow-hidden outline-none">
        {isPrivacyPage ? <PrivacyNotice /> : isTermsPage ? <Terms /> : <>
        <Hero />
        <Features />
        <Device />
        <Download />
        <Creators />
        <About />
        </>}
      </main>
      {!isTermsPage && !isPrivacyPage && <Footer />}
    </div>
  )
}

export default App
