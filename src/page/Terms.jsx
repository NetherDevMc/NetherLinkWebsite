import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Terms of Service</h1>
      <p className="mb-6 text-lg">
        By accessing or using <strong>NetherLink</strong>, you agree to these terms. Please read them carefully.
      </p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">1. Use of the Application</h2>
          <p>
            You may use NetherLink for lawful purposes only. You agree not to interfere with or disrupt the application’s servers, networks, or security features.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">2. Server Listings</h2>
          <p>
            By submitting a server for listing, you confirm that you have the right to do so. We reserve the right to remove or deny listings without prior notice if they violate our guidelines.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">3. Featured Server Promotions</h2>
          <p>
            Placement on the Featured Server list is a paid feature. Refunds are not guaranteed once the listing is published. We reserve the right to modify pricing or availability at any time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">4. Intellectual Property</h2>
          <p>
            All content on NetherLink, including logos, design, and source code, is the intellectual property of the team unless otherwise stated. You may not copy or reuse elements without permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">5. Modifications</h2>
          <p>
            These terms may change over time. We will update the page accordingly. Continued use of the site implies acceptance of these changes.
          </p>
        </section>
      </div>

      <p className="mt-10 text-sm text-gray-500 text-right">Last updated: June 2025</p>

      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
