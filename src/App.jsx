import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './page/Home';
import Terms from './page/Terms';
import Privacy from './page/Privacy';
import Login from './page/Login';
import Dashboard from './page/Dashboard';

import { AuthProvider, useAuth } from "./AuthContext";

// Route die alleen toegankelijk is als je ingelogd bent
function PrivateRoute({ children }) {
  const { user } = useAuth();
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
