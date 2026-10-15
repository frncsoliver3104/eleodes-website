const FeatureIcon = ({ name }) => {
  const icons = {
    monitor: 'monitoring',
    control: 'settings_remote',
    alert: 'notifications_active',
    water: 'water_drop',
    history: 'calendar_month',
    rate: 'show_chart',
    dispense: 'faucet',
    awg: 'air',
    level: 'water_full',
    conditions: 'device_thermostat',
    quality: 'science',
  }

  return <span className="material-symbols-rounded" aria-hidden="true">{icons[name]}</span>
}

const Features = () => {
  const appFeatures = [
    {
      title: 'Live Monitoring',
      subtitle: 'Instant visibility',
      description: 'Track temperature, humidity, water level, and pH in real time from your device.',
      icon: 'monitor',
    },
    {
      title: 'Remote Control',
      subtitle: 'Smart access',
      description: 'Turn the system on or off remotely whenever you need full control.',
      icon: 'control',
    },
    {
      title: 'Smart Alerts',
      subtitle: 'Stay informed',
      description: 'Receive timely notifications when the system needs attention or maintenance.',
      icon: 'alert',
    },
    {
      title: 'Water Management',
      subtitle: 'Efficient use',
      description: 'Monitor water generation and consumption to support sustainable operation.',
      icon: 'water',
    },
    {
      title: 'Production History',
      subtitle: 'Daily and weekly view',
      description: 'Compare production by day alongside weather conditions, with daily and weekly history.',
      icon: 'history',
    },
    {
      title: 'Production Rate',
      subtitle: 'See current output',
      description: 'View the device’s production rate in the app and follow its water output.',
      icon: 'rate',
    },
    {
      title: 'Water Dispensing',
      subtitle: 'Track water release',
      description: 'Keep track of water dispensed by the system and review usage over time.',
      icon: 'dispense',
    },
  ]

  const deviceFeatures = [
    {
      title: 'Atmospheric Water Generation',
      description: 'Collects moisture from the air and turns it into water.',
      icon: 'awg',
    },
    {
      title: 'Water Level',
      description: 'Check the system’s current water level from the connected app.',
      icon: 'level',
    },
    {
      title: 'Operating Conditions',
      description: 'The device reports temperature and humidity readings for monitoring.',
      icon: 'conditions',
    },
    {
      title: 'Water Quality Reading',
      description: 'View the system’s pH reading alongside its other sensor values.',
      icon: 'quality',
    },
  ]

  const renderFeatureGrid = (features) => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {features.map((feature) => (
        <article key={feature.title} className="h-full rounded-2xl border border-slate-200/80 bg-slate-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-100 bg-gradient-to-br from-[#e9fff4] to-white text-[#087b61] shadow-sm">
            <FeatureIcon name={feature.icon} />
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
