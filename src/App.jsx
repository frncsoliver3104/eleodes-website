import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Device from './components/Device'
import Terms from './components/Terms'
import Hero from './components/Hero'
import Features from './components/Features'
import Download from './components/Download'
import About from './components/About'
import Creators from './components/Creators'
import Footer from './components/Footer'

function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (hash === '#terms') {
      window.scrollTo({ top: 0, behavior: 'instant' })
    } else {
      document.getElementById(hash.slice(1) || 'home')?.scrollIntoView()
    }
  }, [hash])

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans">
      <Navbar />
      <main className="overflow-hidden">
        {hash === '#terms' ? <Terms /> : <>
        <Hero />
        <Device />
        <Features />
        <Download />
        <Creators />
        <About />
        </>}
      </main>
      {hash !== '#terms' && <Footer />}
    </div>
  )
}

export default App
