import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Training from "./pages/Training";
import Socials from "./pages/Socials";
import BeginnerTraining from "./pages/BeginnerTraining";
import CompetitiveTraining from "./pages/CompetitiveTraining";
import JumpingDressage from "./pages/JumpingDressage";
import PrivateCoaching from "./pages/PrivateCoaching";

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/training" element={<Training />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/beginner-training" element={<BeginnerTraining />} />
        <Route path="/competitive-training" element={<CompetitiveTraining />} />
        <Route path="/jumping-dressage" element={<JumpingDressage />} />
        <Route path="/private-coaching" element={<PrivateCoaching />} />
      </Routes>
    </div>
  );
}

export default App;
