import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import Navbar from "../Navbar";
import { FaHistory, FaArrowLeft, FaCheck, FaTimes, FaSpinner } from "react-icons/fa";

export default function TransactionHistory() {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;

    const fetchTransactions = async () => {
      setLoading(true);
      try {
        const token = await user.token;
        const res = await fetch(`https://backend.netherlink.net/payment/transactions/${user.email}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          const error = new Error(errorData.error || "Failed to fetch transactions");
          error.status = res.status;
          throw error;
        }

        const data = await res.json();
        setTransactions(data.transactions || []);
      } catch (err) {
        console.error("Error fetching transactions:", err);
        setError(err.message || "Error loading transaction history");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [user]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('nl-NL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getStatusBadge = (transaction) => {
    if (transaction.paid && transaction.active) {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-900/50 text-emerald-400 border border-emerald-500/30">
          <FaCheck className="mr-1" /> Active
        </span>
      );
    } else if (transaction.paid && !transaction.active) {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-900/50 text-orange-400 border border-orange-500/30">
          <FaTimes className="mr-1" /> Canceled
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700/50 text-gray-300 border border-gray-600">
          <FaSpinner className="mr-1 animate-spin" /> Pending
        </span>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="relative bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg overflow-hidden gaming-card">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-600"></div>
          
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-emerald-400 flex items-center">
              <FaHistory className="mr-2" /> Transaction History
            </h1>
            <button 
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center transition gaming-button"
            >
              <FaArrowLeft className="mr-2" /> Back
            </button>
          </div>
          
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="pixel-spinner mb-4">
                <div className="pixel-spinner-inner"></div>
              </div>
              <p className="text-emerald-400">Loading transaction history...</p>
            </div>
          ) : error ? (
            <div className="bg-red-900/30 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
              <p className="text-red-400 flex items-center">
                <FaTimes className="mr-2" /> {error}
              </p>
            </div>
          ) : transactions.length === 0 ? (
            <div className="text-center py-16 bg-gray-700/30 rounded-lg border border-gray-600">
              <div className="mx-auto w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <FaHistory className="text-emerald-400 text-2xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-300 mb-2">No Transactions Found</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Purchase a featured server slot to see your transaction history.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-4 text-left text-sm font-medium text-emerald-400">Date</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-emerald-400">Transaction ID</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-emerald-400">Status</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-emerald-400">Subscription</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-700/30 transition">
                      <td className="py-3 px-4 text-sm text-gray-300">{formatDate(transaction.created_at)}</td>
                      <td className="py-3 px-4 text-sm text-gray-300 font-mono">{transaction.id}</td>
                      <td className="py-3 px-4 text-sm">
                        {getStatusBadge(transaction)}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-300 font-mono">
                        {transaction.subscription_id || '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-emerald-500/30 -mb-2 -mr-2 z-0"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-blue-500/30 -mt-2 -ml-2 z-0"></div>
        </div>
      </div>
      
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