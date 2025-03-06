import { useEffect } from "react";

const BackgroundAnimation = () => {
  useEffect(() => {
    const bgAnimation = document.getElementById("bgAnimation");
    const numberOfColorBoxes = 400;

    for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement("div");
      colorBox.classList.add("colorBox");
      bgAnimation.append(colorBox);
    }
  }, []);

  return (
    <div className="bgAnimation" id="bgAnimation">
      <div className="backgroundAmim"></div>
    </div>
  );
};

export default BackgroundAnimation;
