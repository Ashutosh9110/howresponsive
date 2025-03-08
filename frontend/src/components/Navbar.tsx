import { useNavigate } from "react-router-dom";


const Navbar = () => {

const navigate = useNavigate()

  return (
    <nav>
      <h1 onClick={() => navigate("/")}>
        <span>How</span>Responsive
      </h1>
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/services")}>Services</li>
        <li onClick={() => navigate("/team")}>Our Team</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;