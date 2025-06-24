import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaDiscord, FaArrowLeft, FaBuilding } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="relative bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg overflow-hidden gaming-card">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-600"></div>

          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-gray-700/50 p-4 border border-emerald-600/30">
              <FaEnvelope className="w-10 h-10 text-emerald-400" />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-6 text-center text-emerald-400 pixelated">
            Contact Us
          </h1>

          <p className="mb-8 text-gray-300 text-lg text-center max-w-2xl mx-auto">
            Need help or want to get in touch with <span className="text-emerald-400 font-medium">NetherLink</span>? 
            We're happy to assist you with support, business inquiries, or feedback!
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-3 border-l-4 border-blue-500 pl-3">
                Company Details
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaBuilding className="text-emerald-400" />
                  <span className="font-medium text-gray-200">Jens-Co</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-emerald-400" />
                  <span>
                    Statiestraat 26<br />
                    1570 Tollembeek<br />
                    Belgie
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-emerald-400" />
                  <a
                    href="mailto:connect@netherlink.net"
                    className="text-emerald-400 hover:underline"
                  >
                    connect@netherlink.net
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FaDiscord className="text-emerald-400" />
                  <a
                    href="https://discord.gg/HAv4ZaSJk5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline"
                  >
                    Join Discord
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-300 font-semibold">KBO:</span> <span>Null</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-300 font-semibold">BTW:</span> <span>Null</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-3 border-l-4 border-blue-500 pl-3">
                Support & Quick Contact
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-300 mb-2">
                  The quickest way to get help is via our Discord community. 
                  For business or privacy matters, please email us directly.
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-300 space-y-1">
                  <li>
                    <a
                      href="mailto:connect@netherlink.net"
                      className="text-emerald-400 hover:underline"
                    >
                      connect@netherlink.net
                    </a> – General support & business
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/HAv4ZaSJk5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline"
                    >
                      Discord Community
                    </a> – Fastest support, community chat
                  </li>
                </ul>
              </div>
            </section>

          </div>

          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition gaming-button"
            >
              <FaArrowLeft className="mr-2" /> Back to Home
            </Link>
          </div>

          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-emerald-500/30 -mb-2 -mr-2 z-0"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-blue-500/30 -mt-2 -ml-2 z-0"></div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .gaming-card {
          position: relative;
          transition: all 0.3s ease;
        }
        .gaming-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(16, 185, 129, 0.15);
        }
        .gaming-button {
          position: relative;
          overflow: hidden;
        }
        .gaming-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: 0.5s;
        }
        .gaming-button:hover::after {
          left: 100%;
        }
        .pixelated {
          text-shadow: 2px 2px 0px #003b25;
          letter-spacing: 1px;
        }
      `}</style>
    </div>
  );
}