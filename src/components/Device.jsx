import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

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
  const [isZoomed, setIsZoomed] = useState(false)
  const previewButtonRef = useRef(null)
  const closeButtonRef = useRef(null)
  const activeView = deviceViews[activeIndex]

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + deviceViews.length) % deviceViews.length)
  }

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % deviceViews.length)
  }

  useEffect(() => {
    if (!isZoomed) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsZoomed(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
      previewButtonRef.current?.focus()
    }
  }, [isZoomed])

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

      <div className="mx-auto grid max-w-6xl items-start gap-8 px-6 pt-8 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] sm:gap-6 sm:px-8 lg:gap-10">
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

            <button
              ref={previewButtonRef}
              type="button"
              aria-haspopup="dialog"
              aria-label={`Open larger photo: ${activeView.title}`}
              onClick={() => setIsZoomed(true)}
              className="aspect-[3/4] w-[120px] shrink-0 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 sm:w-[170px] lg:w-[240px]"
            >
              <img
                key={activeView.image}
                src={`/device-views/${activeView.image}`}
                loading="lazy"
                alt={activeView.alt}
                className="h-full w-full object-contain"
              />
            </button>

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

          <div role="group" aria-label="Choose device photo" className="mt-3 flex items-center justify-center gap-2">
            {deviceViews.map((view, index) => (
              <button
                key={view.image}
                type="button"
                aria-label={`Show device photo ${index + 1}: ${view.title}`}
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${activeIndex === index ? 'bg-black' : 'bg-slate-300 hover:bg-slate-400'}`}
              />
            ))}
            <span aria-live="polite" className="sr-only">Photo {activeIndex + 1} of {deviceViews.length}</span>
          </div>
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

      {isZoomed && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setIsZoomed(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="device-zoom-title"
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[94vh] w-full max-w-5xl flex-col rounded-3xl border border-emerald-100 bg-slate-50 p-3 shadow-2xl sm:max-h-[92vh] sm:p-6"
          >
            <div className="mb-3 flex items-start justify-between gap-4 sm:mb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 sm:text-sm">Device view {activeIndex + 1}</p>
                <h3 id="device-zoom-title" className="mt-1 text-base font-semibold text-slate-950 sm:text-xl">
                  {activeView.title}
                </h3>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close enlarged device photo"
                onClick={() => setIsZoomed(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 sm:h-10 sm:w-10"
              >
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="m18 6-12 12M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 sm:p-4">
              <img
                key={`zoom-${activeView.image}`}
                src={`/device-views/${activeView.image}`}
                alt={activeView.alt}
                className="max-h-[62vh] max-w-full rounded-xl object-contain sm:max-h-[68vh]"
              />
            </div>
            <div className="mt-3 flex justify-center sm:mt-4">
              <div role="group" aria-label="Choose device photo" className="flex items-center justify-center gap-2">
                {deviceViews.map((view, index) => (
                  <button
                    key={view.image}
                    type="button"
                    aria-label={`Show device photo ${index + 1}: ${view.title}`}
                    aria-pressed={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${activeIndex === index ? 'bg-black' : 'bg-slate-300 hover:bg-slate-400'}`}
                  />
                ))}
                <span aria-live="polite" className="sr-only">Photo {activeIndex + 1} of {deviceViews.length}</span>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </section>
  )
}

export default Device
