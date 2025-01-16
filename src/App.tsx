import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Index.tsx";
import Explore from "./pages/Explore.tsx";
import Aboutus from "./pages/Aboutus.tsx";
import Contactus from "./pages/Contactus.tsx";
import Punakha from "./pages/explore/Punakha.tsx";
import Thimphu from "./pages/explore/Thimphu.tsx";
import Paro from "./pages/explore/Paro.tsx";
import Bumthang from "./pages/explore/Bumthang.tsx";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/explore/punakha" element={<Punakha />} />
          <Route path="/explore/thimphu" element={<Thimphu />} />
          <Route path="/explore/paro" element={<Paro />} />
          <Route path="/explore/bumthang" element={<Bumthang />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
