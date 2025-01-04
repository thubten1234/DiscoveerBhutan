import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Index.tsx";
import Service from "./pages/Services.tsx";
import Aboutus from "./pages/Aboutus.tsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
