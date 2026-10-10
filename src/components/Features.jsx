const Features = () => {
  const appFeatures = [
    {
      title: 'Live Monitoring',
      subtitle: 'Instant visibility',
      description: 'Track temperature, humidity, water level, and pH in real time from your device.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-[#00c896]">
          <path d="M3 12h4" />
          <path d="M17 12h4" />
          <path d="M12 3v4" />
          <path d="M12 17v4" />
          <circle cx="12" cy="12" r="5" />
        </svg>
      ),
    },
    {
      title: 'Remote Control',
      subtitle: 'Smart access',
      description: 'Turn the system on or off remotely whenever you need full control.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-[#00c896]">
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M9 9h6" />
          <path d="M9 13h3" />
        </svg>
      ),
    },
    {
      title: 'Smart Alerts',
      subtitle: 'Stay informed',
      description: 'Receive timely notifications when the system needs attention or maintenance.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-[#00c896]">
          <path d="M12 3l8 15H4z" />
          <path d="M12 8v5" />
          <circle cx="12" cy="15" r="1" />
        </svg>
      ),
    },
    {
      title: 'Water Management',
      subtitle: 'Efficient use',
      description: 'Monitor water generation and consumption to support sustainable operation.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-[#00c896]">
          <path d="M12 3c3 4 6 6 6 10a6 6 0 1 1-12 0c0-4 3-6 6-10z" />
          <path d="M10 12c0 1.1.9 2 2 2s2-.9 2-2" />
        </svg>
      ),
    },
    {
      title: 'Production History',
      subtitle: 'Daily and weekly view',
      description: 'Compare production by day alongside weather conditions, with daily and weekly history.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-[#00c896]">
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
          <path d="m8 15 2 2 5-5" />
        </svg>
      ),
    },
    {
      title: 'Production Rate',
      subtitle: 'See current output',
      description: 'View the device’s production rate in the app and follow its water output.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-[#00c896]">
          <path d="M3 19h18" />
          <path d="M5 15l5-5 4 3 5-7" />
          <path d="M15 6h4v4" />
        </svg>
      ),
    },
    {
      title: 'Water Dispensing',
      subtitle: 'Track water release',
      description: 'Keep track of water dispensed by the system and review usage over time.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-[#00c896]">
          <path d="M12 3c3 4 6 6 6 10a6 6 0 1 1-12 0c0-4 3-6 6-10z" />
          <path d="M12 10v6M9.5 13.5 12 16l2.5-2.5" />
        </svg>
      ),
    },
  ]

  const deviceFeatures = [
    {
      title: 'Atmospheric Water Generation',
      description: 'Collects moisture from the air and turns it into water.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-[#00c896]">
          <path d="M12 3c3 4 6 6 6 10a6 6 0 1 1-12 0c0-4 3-6 6-10z" />
          <path d="M10 12c0 1.1.9 2 2 2s2-.9 2-2" />
        </svg>
      ),
    },
    {
      title: 'Water Level',
      description: 'Check the system’s current water level from the connected app.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-[#00c896]">
          <path d="M5 5v14h14" />
          <path d="M8 15c1.5-2 3-2 4.5 0s3 2 4.5 0" />
        </svg>
      ),
    },
    {
      title: 'Operating Conditions',
      description: 'The device reports temperature and humidity readings for monitoring.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-[#00c896]">
          <path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z" />
          <path d="M12 11v7" />
        </svg>
      ),
    },
    {
      title: 'Water Quality Reading',
      description: 'View the system’s pH reading alongside its other sensor values.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-[#00c896]">
          <path d="M4 19h16" />
          <path d="M7 16l3-8 3 8" />
          <path d="M8 13h4" />
          <path d="M16 9v6" />
          <path d="M14 12h4" />
        </svg>
      ),
    },
  ]

  const renderFeatureGrid = (features) => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {features.map((feature) => (
        <article key={feature.title} className="h-full rounded-xl border border-slate-200 bg-slate-50 p-5 transition-shadow duration-200 hover:shadow-md">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#e9fff4]">
            {feature.icon}
          </div>
          <h4 className="mb-2 text-base font-semibold leading-snug text-gray-900">{feature.title}</h4>
          {feature.subtitle && <p className="mb-2 text-xs font-semibold text-gray-800">{feature.subtitle}</p>}
          <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p>
        </article>
      ))}
    </div>
  )

  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#00c896]">
            Features
          </p>
          <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
            Cleaner water management with simple, smart tools.
          </h2>
        </div>
        <p className="mb-8 max-w-3xl text-base leading-8 text-slate-600">
          Explore what you can do in the Eleodes app and the readings and water-generation capabilities of the AWG device.
        </p>
        <div className="space-y-12">
          <section aria-labelledby="app-features-title">
            <h3 id="app-features-title" className="mb-5 text-xl font-semibold text-slate-900">Eleodes app</h3>
            {renderFeatureGrid(appFeatures)}
          </section>
          <section aria-labelledby="device-features-title">
            <h3 id="device-features-title" className="mb-5 text-xl font-semibold text-slate-900">AWG device</h3>
            {renderFeatureGrid(deviceFeatures)}
          </section>
        </div>
      </div>
    </section>
  )
}

export default Features
