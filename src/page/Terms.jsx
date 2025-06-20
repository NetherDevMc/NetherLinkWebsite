import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FaGavel, FaArrowLeft } from "react-icons/fa";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="relative bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg overflow-hidden gaming-card">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-600"></div>
          
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-gray-700/50 p-4 border border-emerald-600/30">
              <FaGavel className="w-10 h-10 text-emerald-400" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-8 text-center text-emerald-400 pixelated">
            Terms of Service
          </h1>
          
          <p className="mb-8 text-gray-300 text-lg text-center max-w-2xl mx-auto">
            By accessing or using <span className="text-emerald-400 font-medium">NetherLink</span>, 
            you agree to these terms. Please read them carefully.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-3 border-l-4 border-blue-500 pl-3">
                1. Use of the Application
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-300">
                  You may use NetherLink for lawful purposes only. You agree not to interfere with or disrupt 
                  the application's servers, networks, or security features. You are responsible for maintaining 
                  the confidentiality of your account information and for all activities that occur under your account.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-3 border-l-4 border-blue-500 pl-3">
                2. Server Listings
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-300">
                  By submitting a server for listing, you confirm that you have the right to do so. 
                  You are solely responsible for the content and information you provide, including server 
                  IP addresses, ports, and banner images. We reserve the right to remove or deny listings 
                  without prior notice if they violate our guidelines, contain inappropriate content, or 
                  promote activities that breach these Terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-3 border-l-4 border-blue-500 pl-3">
                3. Payment and Subscription Terms
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-300 mb-2">
                  NetherLink offers featured server slots on a subscription basis. By purchasing a subscription:
                </p>
                <ul className="list-disc ml-6 text-gray-300 space-y-1">
                  <li>You agree to pay the fees as presented at the time of purchase</li>
                  <li>Payments are processed through Stripe, and you agree to their Terms of Service</li>
                  <li>Subscriptions automatically renew until canceled</li>
                  <li>You can cancel your subscription at any time through your dashboard</li>
                  <li>Cancellation takes effect at the end of your current billing period</li>
                  <li>Refunds are generally not provided for partial subscription periods</li>
                </ul>
                <p className="mt-3 text-gray-300">
                  We reserve the right to modify pricing or availability of our services at any time. Any changes will 
                  take effect at the end of your current billing cycle.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-3 border-l-4 border-blue-500 pl-3">
                4. Server Rotation System
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-300">
                  Our featured server list uses a rotation system designed to provide fair visibility to all servers.
                  While we strive to ensure equitable rotation, we cannot guarantee specific placement duration or visibility 
                  metrics. We reserve the right to modify the rotation system to improve fairness or site performance.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-3 border-l-4 border-blue-500 pl-3">
                5. Content Restrictions
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-300 mb-2">
                  You agree not to submit or promote content that:
                </p>
                <ul className="list-disc ml-6 text-gray-300 space-y-1">
                  <li>Is illegal, harmful, threatening, abusive, or harassing</li>
                  <li>Contains explicit, obscene, or inappropriate content</li>
                  <li>Infringes on intellectual property or privacy rights</li>
                  <li>Contains malware, phishing attempts, or other harmful code</li>
                  <li>Impersonates others or misrepresents your affiliation</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-3 border-l-4 border-blue-500 pl-3">
                6. Intellectual Property
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-300">
                  All content on NetherLink, including logos, design, and source code, is the intellectual property 
                  of the NetherLink team unless otherwise stated. You may not copy, modify, distribute, or sell any 
                  elements of our service without explicit permission. Server banners uploaded by users remain the 
                  property of their respective owners, but you grant us a license to display them in connection with 
                  our services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-3 border-l-4 border-blue-500 pl-3">
                7. Limitation of Liability
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-300">
                  NetherLink is provided "as is" without warranties of any kind. We are not responsible for the behavior of 
                  Minecraft servers listed on our platform, nor for any damages that may result from using our services. 
                  Our liability is limited to the amount paid for your subscription, if applicable.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-3 border-l-4 border-blue-500 pl-3">
                8. Account Termination
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-300">
                  We reserve the right to terminate or suspend accounts that violate these terms, engage in fraudulent activities, 
                  or for any reason at our sole discretion. Upon termination, your subscription will be canceled, and your 
                  servers will be removed from our listings.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-3 border-l-4 border-blue-500 pl-3">
                9. Modifications to Terms
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-300">
                  These terms may change over time. We will update the page accordingly and notify users of significant changes. 
                  Continued use of the site after such modifications implies acceptance of the updated terms.
                </p>
              </div>
            </section>
          </div>

          <p className="mt-10 text-sm text-gray-400 text-right">
            Last updated: June 20, 2025
          </p>

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
        /* Gaming-style elements */
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
        
        /* Pixelated text effect */
        .pixelated {
          text-shadow: 2px 2px 0px #003b25;
          letter-spacing: 1px;
        }
      `}</style>
    </div>
  );
}