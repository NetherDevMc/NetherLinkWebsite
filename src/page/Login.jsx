import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../js/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useAuth } from "../AuthContext";
import Navbar from "../Navbar";
import { FaEnvelope, FaGoogle, FaUser, FaLock } from "react-icons/fa";

function Login() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleAuth = async (authFn) => {
    try {
      const result = await authFn(auth, email, password);
      if (isRegistering) {
        await updateProfile(result.user, { displayName: name.trim() });
      }

      const token = await result.user.getIdToken();
      setUser(result.user);

      await fetch("https://backend.netherlink.net/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: result.user.uid,
          email: result.user.email,
          name: result.user.displayName || name.trim(),
        }),
      });

      navigate("/dashboard");
    } catch (error) {
      console.error("Auth failed:", error.message);
      alert(error.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();

      const userData = {
        id: result.user.uid,
        name: result.user.displayName || name.trim(),
        email: result.user.email,
        token: await result.user.getIdToken(),
      };

      setUser(userData);

      const res = await fetch("https://backend.netherlink.net/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: userData.id,
          email: userData.email,
          name: userData.name,
        }),
      });

      if (!res.ok && res.status !== 409) {
        const err = await res.json();
        throw new Error(err.error || "Onbekende fout");
      }

      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Navbar />
      
      <div className="relative">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
          <div className="cubes"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-64px)] px-6 py-12">
          <div className="w-full max-w-md">
            <div className="relative bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-xl gaming-card overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-600"></div>
              
              <h1 className="text-2xl font-bold text-center text-emerald-400 mb-6">
                {isRegistering ? "Create an Account" : "Log In to Your Account"}
              </h1>

              {!user && (
                <form className="space-y-4">
                  {isRegistering && (
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-1">Username</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUser className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          placeholder="Enter your username"
                          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          autoComplete="name"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-1">Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-1">Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="text-gray-400" />
                      </div>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete={
                          isRegistering ? "new-password" : "current-password"
                        }
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-3 pt-2">
                    <button
                      type="button"
                      onClick={() =>
                        handleAuth(
                          isRegistering
                            ? createUserWithEmailAndPassword
                            : signInWithEmailAndPassword
                        )
                      }
                      className="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition gaming-button flex items-center justify-center"
                    >
                      <FaEnvelope className="mr-2" />
                      {isRegistering ? "Create Account" : "Log in with Email"}
                    </button>

                    <button
                      type="button"
                      onClick={loginWithGoogle}
                      className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition gaming-button flex items-center justify-center"
                    >
                      <FaGoogle className="mr-2" />
                      Log in with Google
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsRegistering(!isRegistering)}
                      className="text-sm text-emerald-400 hover:text-emerald-300 transition mt-2"
                    >
                      {isRegistering
                        ? "Already have an account? Log in"
                        : "Don't have an account? Create one"}
                    </button>
                  </div>
                </form>
              )}

              {user && (
                <div className="text-center py-6">
                  <p className="text-gray-300 mb-6">
                    You're logged in! You can now access your dashboard.
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
          </div>
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
        
        /* Background cubes animation */
        .cubes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            radial-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          background-position: 0 0, 25px 25px;
          animation: scrollCubes 40s linear infinite;
          opacity: 0.5;
        }
        @keyframes scrollCubes {
          0% { background-position: 0 0, 25px 25px; }
          100% { background-position: 1000px 0, 1025px 25px; }
        }
      `}</style>
    </div>
  );
}

export default Login;