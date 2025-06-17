import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 text-center py-6 mt-12 border-t border-gray-300">
      <p className="mb-2 text-sm">
        © 2025 NetherLink. All rights reserved.
      </p>
      <p className="mb-4 text-sm">
        Built with <span role="img" aria-label="love">❤️</span> by Jens-Co.
      </p>
      <nav className="space-x-6">
        <Link 
          to="/privacy" 
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          Privacy Policy
        </Link>
        <Link 
          to="/terms" 
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          Terms of Service
        </Link>
      </nav>
    </footer>
  );
}
