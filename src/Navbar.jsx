import { useState } from "react";
import { FaDiscord, FaBars, FaTimes, FaInfoCircle, FaSignInAlt, FaTachometerAlt, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./js/Firebase";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/login");
    } catch {
      alert("Logout failed.");
    }
  };

  const btnClass =
    "px-4 py-2 rounded-lg text-sm font-medium transition focus:outline-none gaming-nav-button flex items-center gap-2";

  const InfoButton = (
    <button
      onClick={() => { navigate("/info"); setMenuOpen(false); }}
      className={`${btnClass} bg-gray-700 hover:bg-gray-600 text-emerald-400`}
    >
      <FaInfoCircle /> Info
    </button>
  );

  const LoggedOutButtons = (
    <div className="flex items-center space-x-3">
      {InfoButton}
      <button
        onClick={() => { navigate("/login"); setMenuOpen(false); }}
        className={`${btnClass} bg-blue-600 hover:bg-blue-500 text-white`}
      >
        <FaSignInAlt /> Login
      </button>
    </div>
  );

  const LoggedInButtons = (
    <div className="flex items-center space-x-3">
      {InfoButton}
      <button
        onClick={() => { navigate("/dashboard"); setMenuOpen(false); }}
        className={`${btnClass} bg-gray-700 hover:bg-gray-600 text-amber-400`}
      >
        <FaTachometerAlt /> Dashboard
      </button>
      <button
        onClick={() => { handleLogout(); setMenuOpen(false); }}
        className={`${btnClass} bg-gray-700 hover:bg-gray-600 text-red-400`}
      >
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );

  const discordButton = (
    <a
      href="https://discord.gg/HAv4ZaSJk5"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setMenuOpen(false)}
      className="ml-4 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg p-2 transition gaming-discord-btn"
      aria-label="Join us on Discord"
      title="Join us on Discord"
    >
      <FaDiscord size={18} />
    </a>
  );

  return (
    <>
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <h1
            className="text-2xl font-semibold text-emerald-400 cursor-pointer pixelated-logo"
            onClick={() => navigate("/")}
          >
            NetherLink
          </h1>
          <div className="hidden md:flex items-center">
            {user ? LoggedInButtons : LoggedOutButtons}
            {discordButton}
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-emerald-400 hover:text-emerald-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="flex flex-col p-4 space-y-3">
              {user ? LoggedInButtons : LoggedOutButtons}
              <div className="flex justify-center mt-2">
                {discordButton}
              </div>
            </div>
          </nav>
        )}
      </header>

      <style jsx global>{`
        .gaming-nav-button {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        
        .gaming-nav-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: 0.5s;
        }
        
        .gaming-nav-button:hover::after {
          left: 100%;
        }
        
        .gaming-discord-btn {
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 5px rgba(79, 70, 229, 0.5);
          transition: all 0.3s ease;
        }
        
        .gaming-discord-btn:hover {
          box-shadow: 0 0 10px rgba(79, 70, 229, 0.8);
        }
        
        .pixelated-logo {
          text-shadow: 2px 2px 0px #003b25;
          letter-spacing: 1px;
        }
      `}</style>
    </>
  );
}