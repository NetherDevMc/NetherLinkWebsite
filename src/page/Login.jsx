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

function Login() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

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

    await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: result.user.uid, // ✅ HIER TOEGEVOEGD
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

      const res = await fetch("http://localhost:3000/api/users", {
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
    <div className="min-h-screen flex flex-col bg-color-default from-gray-100 to-gray-300">
      {/* Navbar staat sticky bovenaan */}
      <Navbar />

      {/* Login content met padding */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white bg-opacity-90 backdrop-blur-lg p-10 rounded-3xl shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-neutral-800 mb-6">
            {isRegistering ? "Create an account" : "Log in to your account"}
          </h1>

          {!user && (
            <>
              {isRegistering && (
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full mb-3 p-3 border rounded-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
              )}

              <input
                type="email"
                placeholder="Email"
                className="w-full mb-3 p-3 border rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-5 p-3 border rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete={
                  isRegistering ? "new-password" : "current-password"
                }
              />
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() =>
                    handleAuth(
                      isRegistering
                        ? createUserWithEmailAndPassword
                        : signInWithEmailAndPassword
                    )
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
                >
                  {isRegistering ? "Create an account" : "Log in with Email"}
                </button>

<button
  onClick={loginWithGoogle}
  className="bg-neutral-600 hover:bg-neutral-700 text-white py-2 px-4 rounded-full"
>
  Log in with Google
</button>


                <button
                  onClick={() => setIsRegistering(!isRegistering)}
                  className="text-sm text-blue-600 underline mt-2"
                >
                  {isRegistering
                    ? "Already have an account?"
                    : "Create an account"}
                </button>
              </div>
            </>
          )}

          {user && (
            <div className="text-center">
              <button
                onClick={() => navigate("/dashboard")}
                className="bg-neutral-600 hover:bg-neutral-700 text-white py-2 px-6 rounded-full shadow-md transition duration-300"
              >
                {"Ga naar je dashboard"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
