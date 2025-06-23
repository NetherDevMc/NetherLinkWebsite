import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Navbar from "../Navbar";
import { FaCheckCircle, FaExclamationTriangle, FaSpinner, FaArrowLeft } from "react-icons/fa";

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  
  const query = new URLSearchParams(location.search);
  const sessionId = query.get('session_id');

  useEffect(() => {
    if (!user || !user.email) {
      navigate("/login");
      return;
    }

    async function checkPaymentStatus() {
      try {
        const token = await user.token;
        const endpoint = sessionId 
          ? `https://backend.netherlink.net/payment/stripe-session/${user.email}?session_id=${sessionId}`
          : `https://backend.netherlink.net/stripe-session/${user.email}`;
        
        const response = await fetch(endpoint, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          setStatus("fail");
          setErrorMessage(errorData.error || "Unknown error");
          return;
        }

        const data = await response.json();
        console.log("Stripe session status:", data);
        
        if (data.success) {
          setStatus("success");
        } else if (data.message && data.message.includes("not completed")) {
          setStatus("pending");
          setErrorMessage("Payment is being processed. Please wait a moment.");
        } else {
          setStatus("fail");
          setErrorMessage(data.error || "Unknown error");
        }
      } catch (error) {
        console.error("Error fetching stripe session status:", error);
        setStatus("fail");
        setErrorMessage(
          "An error occurred while processing your payment. Please try again later."
        );
      } finally {
        setLoading(false);
        
        if (status === "success" || status === "fail") {
          setTimeout(() => {
            navigate("/dashboard");
          }, 5000);
        }
      }
    }

    checkPaymentStatus();
  }, [user, navigate, sessionId]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Navbar />
      
      <main className="flex-grow flex justify-center items-center mt-20 px-4 max-w-6xl mx-auto">
        <div className="bg-gray-800 border border-gray-700 shadow-lg rounded-lg p-8 w-full max-w-md text-center relative gaming-card overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-600"></div>
          
          {loading && (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="pixel-spinner mb-4">
                <div className="pixel-spinner-inner"></div>
              </div>
              <span className="text-emerald-400 font-medium">Checking payment status...</span>
            </div>
          )}

          {!loading && status === "success" && (
            <div className="py-6">
              <div className="text-emerald-400 mb-6">
                <FaCheckCircle className="mx-auto h-16 w-16" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                Payment Successful!
              </h3>
              <p className="text-gray-300 mb-6">
                Your featured server slot has been added to your account.
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Redirecting to dashboard in a few seconds...
              </p>
              <button 
                onClick={() => navigate("/dashboard")}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition gaming-button"
              >
                Go to Dashboard
              </button>
            </div>
          )}

          {!loading && status === "pending" && (
            <div className="py-6">
              <div className="text-yellow-500 mb-6">
                <FaExclamationTriangle className="mx-auto h-16 w-16" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                Payment Processing
              </h3>
              <p className="text-gray-300 mb-6">
                {errorMessage}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <button 
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition gaming-button"
                >
                  Check Again
                </button>
                <button 
                  onClick={() => navigate("/dashboard")}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition gaming-button"
                >
                  Go to Dashboard
                </button>
              </div>
            </div>
          )}

          {!loading && status === "fail" && (
            <div className="py-6">
              <div className="text-red-500 mb-6">
                <svg className="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">
                Payment Failed
              </h3>
              <p className="text-gray-300 mb-6">
                {errorMessage}
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Redirecting to dashboard in a few seconds...
              </p>
              <button 
                onClick={() => navigate("/dashboard")}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition gaming-button"
              >
                Go to Dashboard
              </button>
            </div>
          )}
          
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-emerald-500/30 -mb-2 -mr-2 z-0"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-blue-500/30 -mt-2 -ml-2 z-0"></div>
        </div>
      </main>
      
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
        
        /* Minecraft-inspired pixel spinner */
        .pixel-spinner {
          width: 40px;
          height: 40px;
          position: relative;
        }
        .pixel-spinner-inner {
          width: 100%;
          height: 100%;
          background-color: #16a34a;
          animation: pixel-spinner-animation 1.5s linear infinite;
        }
        @keyframes pixel-spinner-animation {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}