import Baidanh from "./components/Baidanh"
import Baituong from "./components/Baituong"
import Header from "./components/Header"
import { useState } from "react";
import Luatchoi from "./components/Luatchoi";

const App = () => {
  const [activeSection, setActiveSection] = useState("Baidanh");
  
  return (
    <div>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <div>
        {activeSection === "Baidanh" && <Baidanh />}
        {activeSection === "Baituong" && <Baituong />}
        {activeSection === "Luatchoi" && <Luatchoi />}
      </div>

    </div>
  );
};

export default App