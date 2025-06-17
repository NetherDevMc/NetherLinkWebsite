// Navbar.jsx
import { useState } from "react";
import { FaDiscord, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./js/Firebase";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
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
    "px-4 py-2 rounded-md text-sm font-medium transition focus:outline-none";

  const LoggedOutButtons = (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => { setModalOpen(true); setMenuOpen(false); }}
        className={`${btnClass} bg-gray-200 text-gray-700 hover:bg-gray-300`}
      >
        Advertise
      </button>
      <button
        onClick={() => { navigate("/login"); setMenuOpen(false); }}
        className={`${btnClass} bg-gray-100 text-gray-800 hover:bg-gray-200`}
      >
        Login
      </button>
    </div>
  );

  const LoggedInButtons = (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => { navigate("/dashboard"); setMenuOpen(false); }}
        className={`${btnClass} bg-gray-100 text-gray-800 hover:bg-gray-200`}
      >
        Dashboard
      </button>
      <button
        onClick={() => { handleLogout(); setMenuOpen(false); }}
        className={`${btnClass} bg-gray-100 text-gray-800 hover:bg-gray-200`}
      >
        Logout
      </button>
    </div>
  );

  const discordButton = (
    <a
      href="https://discord.gg/HAv4ZaSJk5"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setMenuOpen(false)}
      className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2 transition"
      aria-label="Join us on Discord"
      title="Join us on Discord"
    >
      <FaDiscord size={18} />
    </a>
  );

  return (
    <>
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <h1
            className="text-2xl font-semibold text-gray-800 cursor-pointer"
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
            className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col p-4 space-y-2">
              {user ? LoggedInButtons : LoggedOutButtons}
              {discordButton}
            </div>
          </nav>
        )}
      </header>

      {/* Verduisterde overlay + modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-lg max-w-sm w-full p-6 shadow-xl z-60"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Advertise Your Server
            </h2>
            <p className="text-gray-600 mb-5">
              Plaats hier je advertentie-informatie: prijzen, banner-vereisten, en contactgegevens.
            </p>
            <button
              onClick={() => setModalOpen(false)}
              className={`${btnClass} bg-gray-200 text-gray-800 hover:bg-gray-300 w-full`}
            >
              Sluit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
