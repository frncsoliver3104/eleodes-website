import Logo from './Logo'

const Terms = () => {
  return (
    <div className="min-h-[calc(100vh-56px)] bg-[#e4fff4]">
      <header className="bg-eleodes-teal px-6 py-10 sm:py-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 text-center sm:gap-6">
          <Logo size="sm" />
          <h1 className="text-2xl font-bold text-slate-950 sm:text-3xl">Terms and Services</h1>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8 sm:py-10">
        <article className="mx-auto max-w-4xl text-xs leading-6 text-slate-800 sm:text-sm">
          <h2 className="mb-1 font-semibold">Terms and Conditions</h2>
          <p className="mb-4">August 28, 2020</p>

          <p className="mb-4">
            Welcome to the Eleodes app. By downloading, accessing, or using our application, you agree to be bound by these Terms and Conditions. If you do not agree with these terms, please do not use the app.
          </p>

          <section className="mb-4">
            <h3 className="mb-1 font-semibold">1. Acceptance of Terms</h3>
            <p>By using the Eleodes app, you confirm that you have read, understood, and agreed to these Terms and Conditions.</p>
          </section>

          <section className="mb-4">
            <h3 className="mb-1 font-semibold">2. Eligibility</h3>
            <p>You must be at least 13 years old, or the minimum legal age in your jurisdiction, to use this app. If you are under the required age, you must have permission from a parent or legal guardian.</p>
          </section>

          <section className="mb-4">
            <h3 className="mb-1 font-semibold">3. User Accounts</h3>
            <p>If you create an account, you are responsible for:</p>
            <ul className="list-disc pl-5">
              <li>Keeping your login credentials secure.</li>
              <li>Providing accurate and up-to-date information.</li>
              <li>All activities that occur under your account.</li>
            </ul>
          </section>

          <section className="mb-4">
            <h3 className="mb-1 font-semibold">4. Acceptable Use</h3>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5">
              <li>Use the app for any illegal or unauthorized purpose.</li>
              <li>Upload harmful, offensive, or misleading content.</li>
              <li>Attempt to hack, disrupt, or interfere with the app&apos;s operation.</li>
              <li>Violate the rights of other users or third parties.</li>
            </ul>
          </section>

          <section className="mb-4">
            <h3 className="mb-1 font-semibold">5. Intellectual Property</h3>
            <p>All content, trademarks, logos, software, and other materials in the app are owned by Eleodes or its licensors and are protected by applicable intellectual property laws.</p>
          </section>

          <section className="mb-4">
            <h3 className="mb-1 font-semibold">6. Privacy</h3>
            <p>Your use of the app is also governed by our Privacy Policy, which explains how we collect, use, and protect your information.</p>
          </section>

          <section className="mb-4">
            <h3 className="mb-1 font-semibold">7. Payments (If Applicable)</h3>
            <p>If the app offers paid features:</p>
            <ul className="list-disc pl-5">
              <li>Payments are processed through authorized payment providers.</li>
              <li>Payment terms are disclosed before purchase.</li>
              <li>Unless otherwise stated, purchases are non-refundable.</li>
            </ul>
          </section>

          <section className="mb-4">
            <h3 className="mb-1 font-semibold">8. Disclaimer</h3>
            <p>The app is provided “as is” and “as available” without warranties of any kind. We do not guarantee that the app will always be available, secure, or error-free.</p>
          </section>

          <section className="mb-4">
            <h3 className="mb-1 font-semibold">9. Limitation of Liability</h3>
            <p>To the fullest extent permitted by law, Eleodes will not be liable for any indirect, incidental, or consequential damages resulting from your use of the app.</p>
          </section>

          <section className="mb-4">
            <h3 className="mb-1 font-semibold">10. Suspension or Termination</h3>
            <p>We reserve the right to suspend or terminate your access to the app if you violate these Terms and Conditions or engage in harmful or unlawful activities.</p>
          </section>

          <section className="mb-4">
            <h3 className="mb-1 font-semibold">11. Changes to these Terms</h3>
            <p>We may update these Terms and Conditions from time to time. Continued use of the app after changes become effective constitutes your acceptance of the updated terms.</p>
          </section>

          <section className="mb-4">
            <h3 className="mb-1 font-semibold">12. Governing Law</h3>
            <p>These Terms and Conditions shall be governed by the laws of the Philippines, without regard to its conflict of law principles.</p>
          </section>

          <section className="mb-4">
            <h3 className="mb-1 font-semibold">13. Contact Information</h3>
            <p>If you have any questions about these Terms and Conditions, please contact us:</p>
            <ul className="mt-1">
              <li>Email: <a className="underline" href="mailto:eleodes@gmail.com">eleodes@gmail.com</a></li>
              <li>Phone: <a className="underline" href="tel:+639380114201">+63 938 011 4201</a></li>
              <li>Location: Iloilo City, Philippines</li>
            </ul>
          </section>

          <p>By using the Eleodes app, you acknowledge that you have read and agree to these Terms and Conditions.</p>
        </article>
      </main>
    </div>
  )
}

export default Terms
