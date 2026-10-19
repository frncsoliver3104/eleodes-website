import { useState } from 'react'

const deviceViews = [
  {
    title: 'Front View of the Device',
    image: 'front-view.jpg',
    alt: 'Front of the ELEODES device showing its blue filtered-water storage tank and water-treatment filters',
    description: 'The front section of the device contains the water-treatment components, including the UV disinfection unit, carbon filter, and sediment filter. The blue container serves as the storage tank for the filtered water.',
  },
  {
    title: 'Rear View of the ELEODES System',
    image: 'rear-view.jpg',
    alt: 'Rear of the ELEODES device with its large fan and red water collection container',
    description: 'This section of the ELEODES device is where water is produced through the compressor and evaporator, while the fan helps draw more air into the system. The produced but still unfiltered water is collected in the red container. When the red container becomes full, the water pump transfers the water to the front section of the device, where the UV disinfection unit, carbon filter, and sediment filter are located for water treatment.',
  },
  {
    title: 'Control Panel View of the ELEODES System',
    image: 'control-panel-side-view.jpg',
    alt: 'ELEODES side control panel with red ON/OFF button, navigation buttons, LCD, and digital TDS monitor',
    description: 'The side view shows the ELEODES control panel with a red ON/OFF button, black Next button, white Previous button, and LCD for system status. A separate digital TDS monitor displays the dissolved solids in the generated water.',
  },
  {
    title: 'Internal View of the ELEODES System',
    image: 'internal-view.jpg',
    alt: 'Open ELEODES device showing internal wiring, control components, and refrigeration parts',
    description: 'The internal view of the ELEODES system shows the electrical wiring, control circuitry, ESP32 connections, water pump, and refrigeration components. These components support automated water generation, sensor monitoring, and system operation.',
  },
]

const Device = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeView = deviceViews[activeIndex]

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + deviceViews.length) % deviceViews.length)
  }

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % deviceViews.length)
  }

  return (
    <section id="device" aria-labelledby="device-title" className="scroll-mt-20 bg-slate-50 pb-20 md:pb-28">
      <div className="bg-slate-50 px-6 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
            The device
          </p>
          <h2 id="device-title" className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Meet Eleodes.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
            Explore the system from the inside out, from water generation to treatment and monitoring.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl items-start gap-8 px-6 pt-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-6 sm:px-8 lg:gap-10">
        <div>
          <div
            role="group"
            aria-label="ELEODES device photo preview"
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') {
                event.preventDefault()
                showPrevious()
              } else if (event.key === 'ArrowRight') {
                event.preventDefault()
                showNext()
              }
            }}
            className="mx-auto flex w-fit items-center justify-center gap-2 sm:gap-3"
          >
            <button
              type="button"
              aria-label={`Previous device view: ${deviceViews[(activeIndex - 1 + deviceViews.length) % deviceViews.length].title}`}
              onClick={showPrevious}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-white/70 text-slate-800 transition-colors hover:bg-white sm:h-9 sm:w-9 lg:h-10 lg:w-10"
            >
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <img
              key={activeView.image}
              src={`/device-views/${activeView.image}`}
              loading="lazy"
              alt={activeView.alt}
              className="aspect-[3/4] w-[100px] shrink-0 rounded-xl object-contain sm:w-[150px] lg:w-[200px]"
            />

            <button
              type="button"
              aria-label={`Next device view: ${deviceViews[(activeIndex + 1) % deviceViews.length].title}`}
              onClick={showNext}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-white/70 text-slate-800 transition-colors hover:bg-white sm:h-9 sm:w-9 lg:h-10 lg:w-10"
            >
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          <p aria-live="polite" className="mt-2 text-center text-sm text-slate-500">
            {activeIndex + 1} of {deviceViews.length}
          </p>
        </div>

        <article aria-live="polite" aria-atomic="true" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Device view {activeIndex + 1}
          </p>
          <h3 className="text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-3xl">
            {activeView.title}
          </h3>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {activeView.description}
          </p>
        </article>
      </div>
    </section>
  )
}

export default Device
