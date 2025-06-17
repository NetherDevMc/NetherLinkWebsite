import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Privacy Policy</h1>
      <p className="mb-6 text-lg">
        At <strong>NetherLink</strong>, we are committed to protecting your privacy. This policy outlines what information we collect and how we use it.
      </p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">1. Data We Collect</h2>
          <p>
            We do not collect any personal data such as names, email addresses, or location. However, if you submit a Minecraft server IP for public listing, that address may be visible to others.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">2. Server Information</h2>
          <p>
            Server details submitted for advertisement (e.g. server name, description, or banner) are publicly shown. We do not verify or store player information from connected servers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">3. Third-Party Services</h2>
          <p>
            We use platforms like <a href="https://github.com" className="text-blue-600 underline">GitHub</a> for development and <a href="https://discord.com" className="text-blue-600 underline">Discord</a> for communication. These services may have their own tracking or logging; we encourage you to read their privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">4. Cookies & Analytics</h2>
          <p>
            NetherLink does not use cookies, tracking pixels, or analytics tools that collect identifiable information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">5. Children's Privacy</h2>
          <p>
            Our services are not directed to children under the age of 13. We do not knowingly collect information from children.
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
