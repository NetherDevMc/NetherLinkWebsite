import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-12 border-t border-gray-800 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <Link to="/" className="mb-4">
            <span className="text-emerald-400 font-bold text-xl pixelated-logo">NetherLink</span>
          </Link>
          
          <div className="flex items-center space-x-3 mb-6">
            <a href="https://discord.gg/xvaNzE35Rs" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"></path>
              </svg>
            </a>
            <a href="https://github.com/NetherDevMc/NetherLinkWebsite" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
            </a>
          </div>
          
          <div className="w-16 h-0.5 bg-emerald-500 mb-6"></div>
          
          <nav className="flex flex-wrap justify-center space-x-6 mb-6">
            <Link 
              to="/info" 
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 mb-2"
            >
              Info
            </Link>
            <Link 
              to="/privacy" 
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 mb-2"
            >
              Privacy
            </Link>
            <Link 
              to="/terms" 
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 mb-2"
            >
              Terms
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 mb-2"
            >
              Contact
            </Link>
          </nav>
          
          <p className="text-sm text-gray-500">
            © 2025 NetherLink. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Built with <span role="img" aria-label="love" className="text-red-500">❤️</span> by Jens-Co.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600 opacity-30"></div>
    </footer>
  );
}