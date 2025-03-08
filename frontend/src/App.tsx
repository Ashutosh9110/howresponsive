import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import BackgroundAnimation from "./components/BackgroundAnimation";
import "./styles/styles.css";
import Services from "./components/Services";
import Team from "./components/Team";

const App = () => {
  return (
    <Router>
      <BackgroundAnimation />
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>

    </Router>
  );
};

export default App;
