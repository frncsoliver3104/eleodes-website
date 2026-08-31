const About = () => {
  const features = [
    'Real-time system monitoring',
    'Remote ON/OFF control',
    'Humidity monitoring',
    'Temperature monitoring',
    'Water level monitoring',
    'pH level monitoring',
    'System status monitoring',
    'Real-time notifications and alerts',
    'Device and settings management',
    'Wi-Fi connectivity',
  ]

  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#00c896]">
            About
          </p>
          <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
            Smart water generation and monitoring for a more sustainable future.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-slate-950">Our Mission</h3>
              <p className="text-base leading-8 text-slate-700">
                To provide a smart, reliable, and sustainable solution that helps improve access to clean drinking water through atmospheric water generation and IoT technology.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-slate-950">Our Vision</h3>
              <p className="text-base leading-8 text-slate-700">
                To promote innovative water generation technologies that support safe, accessible, and sustainable water sources for communities.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-slate-950">Key Features</h3>
              <ul className="grid gap-3 text-base text-slate-700 sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#00c896]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-end">
            <div className="w-full max-w-xs rounded-3xl border border-[#00c896]/20 bg-gradient-to-br from-[#d9fff2] to-[#bff8e8] p-8 shadow-sm">
              <p className="text-lg font-semibold text-slate-950">Clean water</p>
              <p className="mt-3 text-base leading-7 text-slate-700">
                Designed to make water management smarter, more efficient, and easier to monitor from anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About