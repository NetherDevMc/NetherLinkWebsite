import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FaWindows, FaDownload, FaArchive } from "react-icons/fa";

const WindowsDownloadModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  
  // Voorkom dat klikken op de modal zelf het sluiten veroorzaakt
  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  
  // Effect voor esc-toets om modal te sluiten
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isOpen, onClose]);
  
  // Effect voor het detecteren van klikken buiten de modal
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    
    if (isOpen) {
      // Gebruik setTimeout om te voorkomen dat de event die de modal opent, deze weer meteen sluit
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      });
    }
    
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      <div 
        ref={modalRef}
        onClick={handleModalClick}
        className="relative z-[10000] bg-gray-800 border border-gray-700 rounded-lg shadow-2xl w-full max-w-md p-6 m-4 transform transition-all duration-200 scale-100"
      >
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-bold text-emerald-400 flex items-center">
            <FaWindows className="mr-2" /> Windows Download
          </h3>
          
          <button
            type="button"
            className="text-gray-400 hover:text-white focus:outline-none p-1 rounded-full hover:bg-gray-700 transition-colors"
            onClick={onClose}
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <p className="text-gray-300 mb-6">
          Choose your preferred installation method:
        </p>
        
        <div className="grid grid-cols-1 gap-4">
          <a
            href="https://github.com/NetherLinkMC/NetherLinkWebsite/raw/refs/heads/main/downloads/windows/NetherLinkInstaller.exe"
            className="flex items-center justify-between px-5 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            onClick={onClose}
          >
            <span className="flex items-center">
              <FaDownload className="mr-3 text-lg" />
              <span>
                <span className="font-medium text-white">Installer (.exe)</span>
                <span className="block text-xs mt-1 text-blue-200">Recommended for most users</span>
              </span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
          
          <a
            href="https://github.com/NetherLinkMC/NetherLinkWebsite/raw/refs/heads/main/downloads/windows/NetherLink.rar"
            className="flex items-center justify-between px-5 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            onClick={onClose}
          >
            <span className="flex items-center">
              <FaArchive className="mr-3 text-lg" />
              <span>
                <span className="font-medium text-white">Portable (.rar)</span>
                <span className="block text-xs mt-1 text-gray-300">No installation required</span>
              </span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default WindowsDownloadModal;