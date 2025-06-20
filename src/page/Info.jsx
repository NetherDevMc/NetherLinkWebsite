import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FaServer, FaInfoCircle, FaMagic } from "react-icons/fa";

export default function Info() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8 text-emerald-400 text-center pixelated">
          NetherLink Information
        </h1>
        
        <section className="mb-12">
          <div className="relative bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg overflow-hidden gaming-card">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-600"></div>
            
            <h2 className="text-2xl font-bold mb-6 text-emerald-400 flex items-center">
              <FaServer className="mr-2" /> Featured Servers System
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3 text-blue-400">
                  How does the rotation system work?
                </h3>
                <p className="text-gray-300 mb-4">
                  Our featured servers system is designed to provide maximum fairness and visibility for all participating servers, regardless of when they were added.
                </p>
              </div>
              
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-5">
                <h4 className="text-lg font-medium mb-2 text-emerald-400">
                  Backend Rotation
                </h4>
                <p className="text-gray-300 mb-4">
                  Every minute, the order of servers is shifted, ensuring all servers regularly appear at the top. 
                  This happens on the server, so whenever someone loads the page, they see a different order.
                </p>
              </div>
              
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-5">
                <h4 className="text-lg font-medium mb-2 text-emerald-400">
                  Daily Shuffle
                </h4>
                <p className="text-gray-300 mb-4">
                  Every day, all servers are reshuffled. This ensures a completely new starting order and prevents servers from being stuck in a particular pattern.
                </p>
              </div>
              
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-5">
                <h4 className="text-lg font-medium mb-2 text-emerald-400">
                  Frontend Rotation
                </h4>
                <p className="text-gray-300 mb-4">
                  Even while staying on the website, the servers are automatically rotated every 5 seconds. 
                  The top server moves to the bottom, and the next one appears at the top.
                </p>
              </div>
              
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-5">
                <h4 className="text-lg font-medium mb-2 text-emerald-400">
                  Why this is fair
                </h4>
                <p className="text-gray-300 mb-3">
                  This three-layer rotation system ensures that:
                </p>
                <ul className="list-disc pl-6 mb-2 space-y-1 text-gray-300">
                  <li>All servers get an equal chance to be at the top</li>
                  <li>The position of servers constantly changes</li>
                  <li>There is no preference for servers based on when they were added</li>
                  <li>Even with hundreds of servers, everyone gets their turn</li>
                </ul>
              </div>
            </div>
            
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-emerald-500/30 -mb-2 -mr-2 z-0"></div>
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-blue-500/30 -mt-2 -ml-2 z-0"></div>
          </div>
        </section>
        
        <section className="mb-12">
  <div className="relative bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg overflow-hidden gaming-card">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-600"></div>
    
    <h2 className="text-2xl font-bold mb-6 text-emerald-400 flex items-center">
      <FaInfoCircle className="mr-2" /> About NetherLink
    </h2>
    
    <p className="text-gray-300 mb-4">
      NetherLink is a lightweight app that allows Minecraft: Bedrock Edition players on consoles like PlayStation and Switch to connect to external servers using the LAN multiplayer menu.
    </p>

    <p className="text-gray-300 mb-4">
      It works by broadcasting a fake LAN server on your local network. When a console searches for LAN games, it discovers NetherLink's proxy server. Upon connection, players are automatically redirected to a remote Minecraft server of your choice — even if it's hosted externally.
    </p>

    <p className="text-gray-300 mb-4">
      NetherLink supports both IPv4 and IPv6, provides real-time logs in the interface, and includes start/stop control with automatic socket management. It’s ideal for GeyserMC-based servers and simplifies the process of joining online servers from closed platforms.
    </p>

    <p className="text-gray-300">
      No complicated setup, no DNS changes, no extra apps — just launch NetherLink, set your server address, and start playing. Whether you're hosting a server for friends or running a public Bedrock server, NetherLink makes access seamless for everyone.
    </p>

    <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-emerald-500/30 -mb-2 -mr-2 z-0"></div>
    <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-blue-500/30 -mt-2 -ml-2 z-0"></div>
  </div>
</section>

        
    
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
        /* Pixelated text effect */
        .pixelated {
          text-shadow: 2px 2px 0px #003b25;
          letter-spacing: 1px;
        }
      `}</style>
    </div>
  );
}