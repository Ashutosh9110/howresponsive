import ashu from "../assets/8.jpeg"
import moksha from "../assets/moksha.png"


const Team = () => {
  return (
    <div className="card"> 
      <div>
          <h1>Ashutosh</h1>
          <a href="https://github.com/Ashutosh9110" target="_blank" rel="noopener noreferrer">
          <img src={ashu} alt="Ashutosh's GitHub" />
          </a>
          <a href="https://work-with-ashutosh.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio Link</a>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ad exercitationem voluptatem ullam et</p>
        </div>
        <div>
          <h1>Moksha</h1>
          <a href="https://github.com/mokshanirugutti"  target="_blank" rel="noopener noreferrer">
          <img src={moksha} alt="Moksha's GitHub" />
          </a>
          <a href="https://mokshanirugutti.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio Link</a>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ad exercitationem voluptatem ullam et</p>
          </div>
    </div>
  );
};

export default Team;