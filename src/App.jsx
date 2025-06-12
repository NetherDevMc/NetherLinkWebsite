import { useState, useRef, useEffect } from "react";
import {
  FaWindows,
  FaApple,
  FaLinux,
  FaDiscord,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./App.css";

export default function App() {
  const buttonStyles = {
    windows: "bg-blue-800",
    mac: "bg-gray-700",
    linux: "bg-green-800",
  };

  const [showModal, setShowModal] = useState(false);
  const [windowsDropdownOpen, setWindowsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const [servers, setServers] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/NetherLinkMC/NetherLinkServerList/refs/heads/main/servers.json"
    )
      .then((res) => res.json())
      .then((data) => setServers(data))
      .catch((err) => console.error("Failed to load servers:", err));
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setWindowsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = (
    <>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setShowModal(true);
          setMenuOpen(false);
        }}
        className="block md:inline-block px-3 py-2 hover:underline"
      >
        Featured Servers
      </a>
    </>
  );

  const discordButton = (
    <a
      href="https://discord.gg/HAv4ZaSJk5"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        setMenuOpen(false);
        setWindowsDropdownOpen(false);
      }}
      className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-2 transition duration-200 inline-flex items-center justify-center"
      aria-label="Join us on Discord"
      title="Join us on Discord"
    >
      <FaDiscord size={20} />
    </a>
  );

  const serverList = (
    <aside className="bg-gray-800 p-4 rounded-lg shadow-lg w-full md:max-w-lg text-white md:sticky md:top-20 md:h-[calc(100vh-5rem)] overflow-y-auto ml-0 md:ml-4">
      <h2 className="text-xl font-bold mb-4">🌟 Featured Servers List</h2>
      <div className="flex flex-col gap-4">
        {servers.length === 0 && (
          <p className="text-gray-400">Loading servers...</p>
        )}
        {servers.map(({ name, address, port, background }) => (
          <div
            key={name}
            className="rounded-lg p-4 bg-cover bg-center shadow-lg cursor-pointer transform hover:scale-105 transition-transform"
            style={{
              backgroundImage: `url(${background})`,
              minHeight: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              color: "white",
              textShadow: "0 0 5px rgba(0,0,0,0.8)",
            }}
            onClick={() => {
              const textToCopy = `${address}:${port}`;
              navigator.clipboard.writeText(textToCopy).then(() => {
                alert(`Copied ${textToCopy} to clipboard!`);
              }).catch(() => {
                alert('Failed to copy to clipboard');
              });
            }}
            title={`Click to copy ${address}:${port}`}
          >
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm">
              {address}:{port}
            </p>
          </div>
        ))}

      </div>
    </aside>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg shadow-xl p-6 max-w-md w-full mx-4 relative">
            <h2 className="text-xl font-bold text-white mb-4">
              🌟 Featured Server List
            </h2>
            <p className="text-gray-300 mb-4">
              Server owners have the opportunity to purchase a spot on our
              Featured Server List. The higher the position you choose, the
              greater the visibility.
            </p>
            <p className="text-gray-300 mb-4">
              To get started, please contact our staff on Discord for further
              details regarding pricing and payment.
            </p>
            <p className="text-gray-300 mb-6">
              Once your payment is confirmed, we'll add your server to the
              featured list.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <header className="bg-gray-800 text-gray-100 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-3xl font-extrabold tracking-wide">NetherLink</h1>

          <nav className="hidden md:flex items-center space-x-6 text-lg w-full ml-10">
            {navLinks}
            <div className="ml-auto">{discordButton}</div>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-200 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {menuOpen && (
          <nav
            ref={menuRef}
            className="md:hidden bg-gray-700 border-t border-gray-600"
          >
            <div className="flex flex-col p-2 space-y-1">
              {navLinks}
              <div className="pt-2">{discordButton}</div>
            </div>
          </nav>
        )}
      </header>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 py-12">
        <main className="flex-1">
          <section
            id="download"
            className="bg-gray-900 py-12 text-center shadow-inner rounded-lg mb-12"
          >
            <h3 className="text-3xl font-bold mb-8 text-white">
              📥 Download NetherLink
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Choose your platform and start downloading immediately:
            </p>

            <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto px-4">
              <div
                className="flex-1 min-w-[150px] max-w-[180px] relative inline-block text-left"
                ref={dropdownRef}
              >
                <button
                  onClick={() => setWindowsDropdownOpen(!windowsDropdownOpen)}
                  className={`${buttonStyles.windows} flex items-center justify-center gap-3 px-6 py-3 rounded-full text-lg font-semibold text-white shadow-lg focus:outline-none w-full`}
                  aria-haspopup="true"
                  aria-expanded={windowsDropdownOpen}
                >
                  <FaWindows className="text-2xl" />
                  Windows
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {windowsDropdownOpen && (
                  <div className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                      <a
                        href="https://github.com/NetherLinkMC/NetherLinkWebsite/blob/main/downloads/windows/NetherLinkInstaller.exe"
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                        onClick={() => setWindowsDropdownOpen(false)}
                      >
                        Installer (.exe)
                      </a>
                      <a
                        href="https://github.com/NetherLinkMC/NetherLinkWebsite/blob/main/downloads/windows/NetherLink.rar"
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                        onClick={() => setWindowsDropdownOpen(false)}
                      >
                        Portable (.rar)
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-[150px] max-w-[180px]">
                <a
                  href="/NetherLinkMac.zip"
                  className={`${buttonStyles.mac} flex items-center justify-center gap-3 px-6 py-3 rounded-full text-lg font-semibold text-white shadow-lg focus:outline-none w-full`}
                >
                  <FaApple className="text-2xl" />
                  Mac
                </a>
              </div>

              <div className="flex-1 min-w-[150px] max-w-[180px]">
                <a
                  href="/NetherLinkLinux.tar.gz"
                  className={`${buttonStyles.linux} flex items-center justify-center gap-3 px-6 py-3 rounded-full text-lg font-semibold text-white shadow-lg focus:outline-none w-full`}
                >
                  <FaLinux className="text-2xl" />
                  Linux
                </a>
              </div>
            </div>
          </section>

          <section id="features" className="py-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">
              🚀 Features
            </h3>
            <div className="grid gap-10 md:grid-cols-2">

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white flex flex-col">
                <h4 className="text-2xl font-semibold mb-4">
                  🌍 LAN Server Broadcasting
                </h4>
                <p>
                  Connect to external servers using LAN Discovery for easy
                  multiplayer for all consoles.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white flex flex-col">
                <h4 className="text-2xl font-semibold mb-4">🎮 Console support</h4>
                <p>
                  We support all consoles, including Xbox, PlayStation, and
                  Nintendo Switch, for seamless cross-platform play.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white flex flex-col">
                <h4 className="text-2xl font-semibold mb-4">
                  🔥 Fast & Easy
                </h4>
                <p>
                  We do not make use of any protocol libraries, less latency and
                  more performance for you! Texturepacks are supported
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white flex flex-col">
                <h4 className="text-2xl font-semibold mb-4">📡 IPv4 & IPv6</h4>
                <p>
                  Full support for both IPv4 and IPv6 networks to maximize
                  connectivity.
                </p>
              </div>
            </div>
          </section>

          <div className="block md:hidden mt-8">{serverList}</div>
        </main>

        <aside className="hidden md:block">{serverList}</aside>
      </div>
      <footer className="bg-gray-800 text-gray-400 text-center py-4 mt-12">
        <p>© 2025 NetherLink. All rights reserved.</p>
        <p>
          Built with ❤️ by Jens-Co.
        </p>
      </footer>

    </div>
  );
}
