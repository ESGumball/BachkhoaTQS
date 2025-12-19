import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Baidanh from "./components/pages/Baidanh";
import Baituong from "./components/pages/Baituong"
import Header from "./components/Header";
import Luatchoi from "./components/pages/Luatchoi";

const App = () => {
  
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Baidanh />} />
          <Route path="/Baituong" element={<Baituong />} />
          <Route path="/Luatchoi" element={<Luatchoi />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App