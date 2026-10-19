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
import UserManual from './components/UserManual'

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
    const isStandalonePagePath = pathname === '/privacy' || pathname === '/terms' || pathname === '/manual'
    if (hash === '#terms' || hash === '#privacy' || (isStandalonePagePath && !hash)) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    } else {
      document.getElementById(hash.slice(1) || 'home')?.scrollIntoView()
    }
  }, [hash, pathname])

  const isPrivacyPage = pathname === '/privacy' || hash === '#privacy'

  const isTermsPage = pathname === '/terms' || hash === '#terms'

  const isManualPage = pathname === '/manual' || hash === '#manual'

  useEffect(() => {
    const pageMetadata = isPrivacyPage
      ? {
          title: 'Privacy Notice | Eleodes',
          description: 'Read how the Eleodes website, Android app, and connected AWG device handle information.',
        }
      : isTermsPage
        ? {
            title: 'Terms of Service | Eleodes',
            description: 'Review the terms for using the Eleodes website and Android app.',
          }
        : isManualPage
          ? {
              title: 'User Manual | Eleodes',
              description: 'Learn how to operate the ELEODES atmospheric water generator and set up the Eleodes Android app.',
            }
        : {
            title: 'Eleodes - Every Drop Matters',
            description: 'Download the Eleodes Android app to monitor your smart water-generation system.',
          }

    document.title = pageMetadata.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageMetadata.description)
  }, [isPrivacyPage, isTermsPage, isManualPage])

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar isPolicyPage={isPrivacyPage || isTermsPage || isManualPage} />
      <main id="main-content" tabIndex={-1} className="overflow-hidden outline-none">
        {isPrivacyPage ? <PrivacyNotice /> : isTermsPage ? <Terms /> : isManualPage ? <UserManual /> : <>
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
