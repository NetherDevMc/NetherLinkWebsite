import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './page/Home';
import Terms from './page/Terms';
import Privacy from './page/Privacy';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import Checkout from './page/Checkout'; 
import TransactionHistory from "./page/TransactionHistory";
import Info from "./page/Info"; // Importeer de nieuwe pagina

import { AuthProvider, useAuth } from "./AuthContext";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  console.log("PrivateRoute user:", user, "loading:", loading);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/info" element={<Info />} /> {/* Nieuwe route */}
          <Route path="/transactions" element={<TransactionHistory />} />
          <Route path="/checkout" element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          } />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}