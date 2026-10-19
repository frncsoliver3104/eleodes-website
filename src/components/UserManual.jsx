const deviceSteps = [
  {
    number: '01',
    title: 'Set up the unit',
    text: 'Keep the AWG upright on a stable, dry surface with clear space around the air intake and fan. Check that the red collection container and blue treated-water tank are in place and that visible hoses are seated. Use the electrical supply specified for your unit; keep the plug and control area dry.',
  },
  {
    number: '02',
    title: 'Start and check the panel',
    text: 'Use the red ON/OFF button on the control panel to start the unit. The LCD shows system information. Use the black Next and white Previous buttons to move between display pages. Let the automatic cycle run and check for leaks or unusual sounds.',
  },
  {
    number: '03',
    title: 'Follow the water path',
    text: 'The fan draws air through the generation section. Collected, untreated water enters the red container; the pump transfers it to the front treatment assembly, which includes filter cartridges and UV disinfection. Treated water is stored in the blue tank. Do not drink from the red collection container.',
  },
  {
    number: '04',
    title: 'Dispense from the blue tank',
    text: 'Place a clean cup under the blue tank tap, open it gently, and close it fully after dispensing. Keep the tap and cup clean. If the water looks, smells, or tastes unusual, stop using it and ask the device maintainer to inspect the unit.',
  },
  {
    number: '05',
    title: 'Stop the unit',
    text: 'Use the red ON/OFF button to stop normal operation. Do not open the enclosure or touch internal wiring. Arrange service through a qualified maintainer for electrical, refrigeration, pump, UV, or filter work.',
  },
]

const appScreens = [
  {
    image: 'connect-device-light.jpg',
    alt: 'Eleodes app Connect screen with fields for device ID and device passkey',
    label: 'Connect with your device credentials',
  },
  {
    image: 'connected-wifi-light.jpg',
    alt: 'Eleodes app showing the Configure Wi-Fi option on the device connection screen',
    label: 'Configure the AWG Wi-Fi connection',
  },
  {
    image: 'dashboard-light.jpg',
    alt: 'Eleodes app dashboard with system status, estimated production, sensor readings, and history',
    label: 'Review live status and readings',
  },
]

const UserManual = () => (
  <section id="manual" aria-labelledby="manual-title" className="bg-slate-50 pb-20 md:pb-28">
    <header className="bg-[#e9fff4] px-6 py-14 sm:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Help &amp; support</p>
        <h1 id="manual-title" className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">ELEODES user manual</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
          Learn the basic operating steps for the atmospheric water generation device and the Eleodes Android app. Keep your device ID and passkey private, and follow the labels and guidance supplied with your specific unit.
        </p>
        <a href="/#download" className="mt-6 inline-flex rounded-full bg-[#00c896] px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-[#00b386]">
          Get the Android app
        </a>
        <nav aria-label="Manual sections" className="mt-7 flex flex-wrap gap-3">
          {[
            ['#physical-device', 'Physical device'],
            ['#mobile-app', 'Mobile app'],
            ['#troubleshooting', 'Troubleshooting'],
            ['#care-safety', 'Care & safety'],
          ].map(([href, label]) => (
            <a key={href} href={href} className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-900 transition-colors hover:bg-emerald-50">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>

    <div className="mx-auto max-w-6xl space-y-16 px-6 pt-10 sm:px-8 md:pt-14">
      <section aria-labelledby="overview-title">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Quick overview</p>
          <h2 id="overview-title" className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">From air to stored water</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            In the ELEODES unit shown here, the fan draws air through the cooling section. Collected water first enters the red container, then a pump moves it to the front treatment assembly. The treated water is held in the blue tank for dispensing.
          </p>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img src="/device-views/rear-view.jpg" alt="Rear of the ELEODES device with its fan and red water collection container" loading="lazy" className="h-72 w-full object-contain bg-slate-100 p-3 sm:h-80" />
            <figcaption className="border-t border-slate-100 px-5 py-4">
              <p className="font-semibold text-slate-900">Generation and collection</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">The red container collects water before it passes through the treatment section.</p>
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img src="/device-views/front-view.jpg" alt="Front of the ELEODES device showing the blue storage tank and filter assembly" loading="lazy" className="h-72 w-full object-contain bg-slate-100 p-3 sm:h-80" />
            <figcaption className="border-t border-slate-100 px-5 py-4">
              <p className="font-semibold text-slate-900">Treatment and storage</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">The front assembly includes filter cartridges and UV treatment; the blue tank stores treated water.</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="physical-device" aria-labelledby="physical-device-title" className="scroll-mt-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Part 1</p>
          <h2 id="physical-device-title" className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Using the physical device</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">Follow these basic steps during normal operation. Exact readings and fitted sensors can vary between AWG units.</p>
        </div>

        <ol className="mt-7 grid gap-4 md:grid-cols-2">
          {deviceSteps.map((step) => (
            <li key={step.number} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-bold text-emerald-800">{step.number}</span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{step.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 grid items-center gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:p-7">
          <img src="/device-views/control-panel-side-view.jpg" alt="ELEODES control panel, LCD, and separate digital TDS monitor" loading="lazy" className="mx-auto max-h-80 w-full rounded-xl bg-slate-100 object-contain sm:max-w-xs" />
          <div>
            <h3 className="text-xl font-semibold text-slate-950">Control panel and TDS monitor</h3>
            <dl className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <div><dt className="inline font-semibold text-slate-900">Red button:</dt> <dd className="inline">turns the device on or off.</dd></div>
              <div><dt className="inline font-semibold text-slate-900">Black button:</dt> <dd className="inline">moves to the next LCD screen.</dd></div>
              <div><dt className="inline font-semibold text-slate-900">White button:</dt> <dd className="inline">moves to the previous LCD screen.</dd></div>
              <div><dt className="inline font-semibold text-slate-900">LCD:</dt> <dd className="inline">shows the device status and available readings.</dd></div>
              <div><dt className="inline font-semibold text-slate-900">Digital TDS monitor:</dt> <dd className="inline">shows total dissolved solids when a compatible monitor is installed.</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section id="mobile-app" aria-labelledby="mobile-app-title" className="scroll-mt-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Part 2</p>
          <h2 id="mobile-app-title" className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Setting up and using the mobile app</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">The current site lists Android 8.0 or later. Download the APK from the official ELEODES download page and install it using the Android prompts.</p>
        </div>

        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="text-lg font-semibold text-slate-950">1. Connect your device</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-600">
              <li>Open the app and go to the Connect screen.</li>
              <li>Enter the Device ID and Device Passkey issued for your AWG. Check each character before continuing.</li>
              <li>Tap <strong className="text-slate-900">Connect</strong> and wait for the connected confirmation.</li>
            </ol>
            <p className="mt-3 rounded-xl bg-amber-50 p-3 text-sm leading-6 text-amber-950">Keep the passkey private. Do not use the sample values shown in demonstration screenshots.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="text-lg font-semibold text-slate-950">2. Configure Wi-Fi</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-600">
              <li>Keep your phone near the AWG and turn on Bluetooth.</li>
              <li>Tap <strong className="text-slate-900">Configure Wi-Fi</strong> in the connected-device screen.</li>
              <li>Allow the requested Bluetooth or Nearby devices permission, choose your Wi-Fi network, and enter its password in the app.</li>
              <li>Wait for setup to finish, then confirm the AWG appears online in the dashboard.</li>
            </ol>
            <p className="mt-3 rounded-xl bg-slate-50 p-3 text-sm leading-6 text-slate-600">Wi-Fi credentials are sent to the AWG during setup. Only configure a device and network you are authorized to use.</p>
          </article>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-3">
          {appScreens.map((screen) => (
            <figure key={screen.image} className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <img src={`/app-screenshots/${screen.image}`} alt={screen.alt} loading="lazy" className="h-72 w-auto rounded-xl bg-slate-100 object-contain sm:h-80" />
              <figcaption className="mt-3 text-center text-sm font-medium text-slate-700">{screen.label}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-slate-950">Dashboard and remote control</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">The dashboard shows the connection state, estimated production rate, uptime, and available readings such as temperature, humidity, pH, and water level. Other readings appear only when the device has the matching sensor. When online, use the on-screen Start or Stop control to request a state change, then confirm the status updates.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-slate-950">History, devices, and notifications</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
              <li>Use the bottom navigation tabs to open the dashboard, saved devices, and settings.</li>
              <li>Review daily or weekly production and water usage in the history area.</li>
              <li>Open the envelope/notification screen to review alerts. A disconnected alert means recent device updates are not arriving.</li>
              <li>In Settings, choose notification, sound, vibration, and dark-mode preferences. Android notification permissions must also be enabled to receive alerts.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="troubleshooting" aria-labelledby="troubleshooting-title" className="scroll-mt-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Help</p>
          <h2 id="troubleshooting-title" className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Troubleshooting</h2>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <dl className="divide-y divide-slate-200">
            {[
              ['The app cannot find or connect to the AWG', 'Check that the unit is powered, keep the phone nearby, enable Bluetooth, and grant the permission Android requests. Re-enter the Device ID and passkey supplied for that unit.'],
              ['The app says the AWG is disconnected', 'Check the unit power and Wi-Fi router, then reconnect or configure Wi-Fi again. Readings may be stale while the device is offline.'],
              ['A sensor reading is missing', 'Wait for the next update and confirm that your unit has that sensor installed. Contact the maintainer if a fitted sensor remains unavailable.'],
              ['Water production or pumping appears stopped', 'Check the LCD and app status, look for a full or misplaced collection container, and inspect visible hoses for leaks or kinks. Do not open the enclosure; ask a qualified maintainer to inspect persistent faults.'],
              ['Notifications do not appear', 'Enable notifications in both the app Settings and Android app settings. Check that the AWG is online and that battery or background restrictions are not blocking the app.'],
            ].map(([question, answer]) => (
              <div key={question} className="grid gap-2 p-5 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] sm:gap-6 sm:p-6">
                <dt className="font-semibold text-slate-900">{question}</dt>
                <dd className="text-sm leading-7 text-slate-600">{answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="care-safety" aria-labelledby="care-safety-title" className="scroll-mt-24 rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Care and safety</p>
        <h2 id="care-safety-title" className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Keep the device safe to operate</h2>
        <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-600 md:grid-cols-2">
          <li className="rounded-xl bg-slate-50 p-4">Keep water away from the plug, wiring, and control enclosure. Do not operate electrical controls with wet hands.</li>
          <li className="rounded-xl bg-slate-50 p-4">Do not remove panels or service electrical, refrigeration, pump, UV, or filter components yourself. Use a qualified maintainer.</li>
          <li className="rounded-xl bg-slate-50 p-4">Keep the air intake and fan clear. Follow the filter and tank cleaning schedule provided by the device maintainer; no replacement interval is specified here.</li>
          <li className="rounded-xl bg-slate-50 p-4">TDS and pH are readings, not proof that water is safe to drink. Use appropriate independent water-quality testing and follow local drinking-water requirements.</li>
        </ul>
        <p className="mt-4 text-xs leading-6 text-slate-500">
          Water-quality guidance: <a className="font-medium text-emerald-800 underline" href="https://www.who.int/publications/i/item/9789240121225" target="_blank" rel="noreferrer">WHO Guidelines for drinking-water quality</a> and the <a className="font-medium text-emerald-800 underline" href="https://www.who.int/publications/m/item/chemical-fact-sheets--total-dissolved-solids" target="_blank" rel="noreferrer">WHO total dissolved solids fact sheet</a>. This page describes the ELEODES unit and app; follow any unit-specific labels and instructions from your installer.
        </p>
      </section>

      <p className="text-sm text-slate-500">App screens and labels may change between releases. This manual reflects the current Eleodes website screenshots and the device configuration described for this unit.</p>
    </div>
  </section>
)

export default UserManual
