const Features = () => {
  const features = [
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
  ]

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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr]">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-slate-900 leading-snug">
              Built to make water generation easier to understand and manage.
            </h3>
            <p className="text-base leading-8 text-slate-600">
              The Eleodes system collects moisture from the air, converts it into water, filters it, and gives users a simple way to monitor system performance from an Android device.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e9fff4]">
                  {feature.icon}
                </div>
                <h4 className="mb-1 font-semibold text-gray-900">{feature.title}</h4>
                <p className="mb-3 text-xs font-semibold text-gray-800">{feature.subtitle}</p>
                <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features