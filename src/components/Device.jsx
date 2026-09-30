const Device = () => (
  <section id="device" aria-labelledby="device-title" className="scroll-mt-20 bg-slate-50 pb-20 md:pb-28">
    <div className="bg-slate-50 px-6 py-14 sm:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
          The device
        </p>
        <h1 id="device-title" className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Meet Eleodes.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
          A closer look at our smart atmospheric water generation system.
        </p>
      </div>
    </div>

    <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pt-12 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
      <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        {/* Replace this placeholder with the actual device photo when available. */}
        <div className="relative flex aspect-[4/3] flex-col items-center justify-center bg-gradient-to-br from-[#d9fff2] via-slate-50 to-emerald-100 p-8 text-center">
          <span className="absolute left-5 top-5 rounded-full border border-emerald-200 bg-white/90 px-3 py-1 text-xs font-medium text-emerald-800">
            Demo preview
          </span>
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl border border-emerald-200 bg-white/80 text-emerald-700">
            <svg aria-hidden="true" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
          <p className="text-xl font-semibold text-slate-950 sm:text-2xl">Device photo coming soon</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-600">This space is reserved for the actual Eleodes device.</p>
        </div>
        <figcaption className="border-t border-slate-100 px-6 py-4 text-sm leading-6 text-slate-500">
          Placeholder for demonstration. Official device photography will be added soon.
        </figcaption>
      </figure>

      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Every drop matters</p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Water from air.<br />Connected to you.</h2>
        <p className="mt-5 leading-8 text-slate-600">
          Eleodes combines atmospheric water generation with system monitoring through the mobile app. Check temperature, humidity, water level, and pH from one place.
        </p>
        <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="font-medium text-slate-950">The real device, up close</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">Once photos are ready, this page will showcase the actual device and its details.</p>
        </div> 
      </div>
    </div>
  </section>
)

export default Device
