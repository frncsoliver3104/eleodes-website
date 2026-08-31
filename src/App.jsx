import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Download from './components/Download'
import About from './components/About'
import Creators from './components/Creators'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Download />
        <Creators />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App