import { useNavigate } from "react-router-dom";
import "../styles/styles.css"; // Import CSS

const Hero = () => {

  const navigate = useNavigate(); // Initialize navigation

  return (
    <section className="hero">
      <div className="textBox">
        <h1>
          <span>Check your Website's</span> responsiveness with just one click
        </h1>
        <p>
 
        </p>
        <button className="homeBtn" style={{ "--i": "#00bfff" } as React.CSSProperties }
        onClick={() => navigate("/services")}
        >Click here</button>
      </div>
    </section>
  );
};

export default Hero;