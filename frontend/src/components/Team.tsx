import { useEffect } from "react";
import anime from "animejs";
import ashu from "../assets/8.jpeg";
import moksha from "../assets/moksha.png";

const Team = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card-template");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        anime({
          targets: card,
          rotateY: "+=180",
          easing: "easeInOutSine",
          duration: 400,
        });
      });

      card.addEventListener("mouseleave", () => {
        anime({
          targets: card,
          rotateY: "+=180",
          easing: "easeInOutSine",
          duration: 400,
        });
      });
    });

    // Cleanup event listeners
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="container-card">
      <div className="card-template">
        <div className="front">
          <h1>Ashutosh</h1>
          <a href="https://github.com/Ashutosh9110" target="_blank" rel="noopener noreferrer">
            <img src={ashu} alt="Ashutosh's GitHub" />
          </a>
          <a href="https://work-with-ashutosh.netlify.app/" target="_blank" rel="noopener noreferrer">
            Portfolio Link
          </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="back"></div>
      </div>
      <div className="card-template">
        <div className="front">
          <h1>Moksha</h1>
          <a href="https://github.com/mokshanirugutti" target="_blank" rel="noopener noreferrer">
            <img src={moksha} alt="Moksha's GitHub" />
          </a>
          <a href="https://mokshanirugutti.vercel.app/" target="_blank" rel="noopener noreferrer">
            Portfolio Link
          </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="back"></div>
      </div>
    </div>
  );
};

export default Team;
