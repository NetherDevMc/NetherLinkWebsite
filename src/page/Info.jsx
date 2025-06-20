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
              NetherLink is an innovative solution for connecting players with Minecraft servers. 
              Our goal is to make it easier for all players to connect to external servers, 
              regardless of the device they are using.
            </p>
            
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl id euismod tincidunt, 
              nisi nisl aliquam magna, eget aliquam nisl nunc vel nunc. Proin quis sem ut libero commodo auctor. 
              Duis erat lorem, rhoncus et porttitor id, facilisis eget lectus. Donec eu metus diam. 
            </p>
            
            <p className="text-gray-300 mb-4">
              Fusce eget nibh fermentum, fringilla eros vel, consequat velit. Phasellus ac quam in magna hendrerit 
              lobortis eu nec ipsum. Curabitur vel arcu ac turpis interdum mattis. Fusce laoreet metus eu mi mollis, 
              a pulvinar lacus varius. Phasellus sodales, nunc vitae feugiat ultricies.
            </p>
            
            <p className="text-gray-300">
              Maecenas vestibulum aliquet orci, non malesuada arcu sollicitudin quis. Sed sodales leo sit amet 
              metus sollicitudin, vel malesuada magna sollicitudin. Cras scelerisque eget augue id vulputate. 
              Vivamus sagittis sapien tortor, id tristique diam lacinia non.
            </p>
            
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-emerald-500/30 -mb-2 -mr-2 z-0"></div>
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-blue-500/30 -mt-2 -ml-2 z-0"></div>
          </div>
        </section>
        
        <section>
          <div className="relative bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg overflow-hidden gaming-card">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-600"></div>
            
            <h2 className="text-2xl font-bold mb-6 text-emerald-400 flex items-center">
              <FaMagic className="mr-2" /> Future Developments
            </h2>
            
            <p className="text-gray-300 mb-4">
              At NetherLink, we are constantly working on new features and improvements. Here are some 
              developments we're working on:
            </p>
            
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget urna vitae ex molestie cursus. 
              Nulla facilisi. Sed non aliquet magna, at tempus magna. Cras vel luctus magna. Ut ac hendrerit est, 
              non fringilla justo. Nullam euismod consectetur tellus, vel volutpat ex ultricies sed.
            </p>
            
            <p className="text-gray-300 mb-4">
              Curabitur sollicitudin, quam ut hendrerit tincidunt, arcu turpis lobortis arcu, at luctus risus elit eu 
              purus. Nullam egestas sapien sit amet augue fermentum, vel finibus libero tincidunt. Proin vitae massa 
              tincidunt, gravida magna in, feugiat odio.
            </p>
            
            <p className="text-gray-300">
              Stay tuned for more updates and new features that will make the Minecraft multiplayer experience even better!
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