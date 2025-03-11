import { useNavigate } from "react-router-dom";


const Navbar = () => {

const navigate = useNavigate()

  return (
    // div clasname: w-full flex justify-between items-center px-10 h-[100px] box-border text-white
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