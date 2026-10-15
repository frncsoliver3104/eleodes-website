import Logo from './Logo'

const PrivacyNotice = () => (
  <div className="min-h-[calc(100vh-56px)] bg-[#e4fff4]">
    <header className="bg-eleodes-teal px-6 py-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 text-center sm:gap-6">
        <Logo size="sm" />
        <div>
          <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">Eleodes · Atmospheric Water Generation</p>
          <h1 className="text-2xl font-bold text-slate-950 sm:text-3xl">Privacy Notice</h1>
        </div>
      </div>
    </header>

    <main className="mx-auto max-w-6xl px-6 py-8 sm:py-10">
      <article className="mx-auto max-w-4xl text-sm leading-7 text-slate-800">
        <p className="mb-6 text-slate-600">Effective date: October 15, 2026</p>
        <p className="mb-6">
          This notice explains how the Eleodes website, Android companion app, and connected atmospheric water generator (AWG) handle information. The Eleodes project team at the Western Institute of Technology in Iloilo City, Philippines, is responsible for information collected through these services. This notice describes our practices; where consent is the appropriate legal basis, we will ask for it separately.
        </p>

        <section className="mb-6">
          <h2 className="mb-2 text-lg font-semibold text-slate-950">Information we handle and why</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>AWG device and operating data:</strong> the device sends its identifier and name, temperature, humidity, pH, water level, flow rate and generated-water totals, operating mode, relay and harvesting state, and online/last-seen status to the Eleodes Firebase Realtime Database. We use these readings to display system status, support device controls, and troubleshoot operation.</li>
            <li><strong>Wi-Fi setup details:</strong> when you connect a device to Wi-Fi, the network name and password are sent from the app to the AWG over Bluetooth and stored on the device so it can connect to your network. The firmware does not publish those credentials as sensor data to Firebase. The credentials are used to provide connectivity; only provision a device you trust and control.</li>
            <li><strong>App information:</strong> the app offers saved devices, settings, history, and notifications. Related device identifiers, preferences, or records may be stored on your phone or retrieved from the connected AWG service to provide those features. The exact local storage and notification behavior depends on the installed app version and Android settings.</li>
            <li><strong>Website and APK requests:</strong> the site does not require an account or provide a contact form. The website host and, if enabled, the APK download service may receive request metadata such as IP address, browser/device details, requested page or file, request time, referrer, and response status. They use this information to deliver content, protect the service, and diagnose errors.</li>
            <li><strong>Website fonts and icons:</strong> the site requests its Inter typeface and Material Symbols icons from Google Fonts. If your browser is allowed to load them, Google receives those requests and associated network information. You can use browser settings or extensions to block external font requests; the site will fall back to system fonts.</li>
            <li><strong>Messages to us:</strong> if you email or call, we receive the contact details and any information you include so we can respond and handle your request.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-lg font-semibold text-slate-950">How information is shared</h2>
          <p>The AWG connects to Firebase Realtime Database, a service provided by Google. Google processes information to provide Firebase; see <a className="font-medium text-emerald-800 underline" href="https://firebase.google.com/support/privacy/" target="_blank" rel="noreferrer">Google’s Firebase privacy and security information</a>. The website and APK may be delivered by the hosting provider selected for deployment, and an optional download backend may process download requests. These providers may process information on systems in the locations where they operate.</p>
          <p className="mt-2">We do not use the site or app for targeted advertising or sell personal information. We may disclose information when required by law or when needed to protect the service, its users, or another person.</p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-lg font-semibold text-slate-950">Retention</h2>
          <p>The firmware updates current AWG readings and control state in Firebase. The project does not currently configure a published automatic deletion period for those database records; they may remain until replaced or deleted by the project administrator. App data stored only on your phone is subject to the app and Android storage behavior. Wi-Fi credentials remain on the AWG until changed or erased. Website and download logs are retained under the hosting or download provider’s settings. We keep messages only as long as needed to respond, handle follow-up, and meet applicable obligations.</p>
          <p className="mt-2">To ask about or request deletion of data associated with a device or message, contact us below. Do not send a Wi-Fi password in your request.</p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-lg font-semibold text-slate-950">Your choices and rights</h2>
          <p>You can stop using the website, disconnect the app, remove app data or saved devices using the app or Android settings, and change or erase the Wi-Fi credentials stored on your AWG. Under applicable Philippine privacy law, you may also have rights to be informed, access, correct, object to, or request erasure/blocking of personal information, subject to legal limits. Requests can be sent to the contact below. We may need to verify your identity or device association before responding.</p>
          <p className="mt-2">Learn more from the <a className="font-medium text-emerald-800 underline" href="https://privacy.gov.ph/the-right-to-be-informed/" target="_blank" rel="noreferrer">National Privacy Commission’s guidance on the right to be informed</a> and its <a className="font-medium text-emerald-800 underline" href="https://privacy.gov.ph/data-subject-rights/" target="_blank" rel="noreferrer">summary of data subject rights</a>.</p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-lg font-semibold text-slate-950">Security</h2>
          <p>We use the technical and organizational safeguards available for the website, app, device, and service configuration. No internet or wireless transmission can be guaranteed completely secure. Keep your phone, Wi-Fi network, and device access protected, and do not share device credentials publicly.</p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-lg font-semibold text-slate-950">Contact the Eleodes team</h2>
          <p>For privacy questions or requests, contact the Eleodes project team, Western Institute of Technology, Iloilo City, Philippines:</p>
          <ul className="mt-2">
            <li>Email: <a className="font-medium text-emerald-800 underline" href="mailto:eleodes472@gmail.com">eleodes472@gmail.com</a></li>
            <li>Phone: <a className="font-medium text-emerald-800 underline" href="tel:+639380114201">+63 938 011 4201</a></li>
          </ul>
        </section>

        <p className="border-t border-emerald-900/15 pt-4 text-xs text-slate-600">We may update this notice when the service or its information practices change. The latest version and effective date will appear here.</p>
        <a href="/" className="mt-6 inline-flex font-semibold text-emerald-800 underline">← Back to Eleodes</a>
      </article>
    </main>
  </div>
)

export default PrivacyNotice
