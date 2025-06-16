// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Terms from './Terms';
import Privacy from './Privacy';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}
