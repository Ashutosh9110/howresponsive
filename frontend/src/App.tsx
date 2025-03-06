import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import BackgroundAnimation from "./components/BackgroundAnimation";
import "./styles/styles.css";
import Services from "./components/Services";

const App = () => {
  return (
    <div>
      <BackgroundAnimation />
      <div className="container">
        <Navbar />
        <Hero />
        <Services />
      </div>
    </div>
  );
};

export default App;
