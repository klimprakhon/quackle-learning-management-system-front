import { Link } from "react-router-dom";
import Logo from "../assets/quackle-logo.png";

function Navbar() {
  return (
    <nav className="min-w-screen min-h-16 bg-forest flex justify-between items-center px-10 py-2">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Quackle: Online Learning Platform in Digital Age"
            className="w-10 h-10"
          />
          <h2 className="text-white font-firaCode text-2xl font-medium">
            quackle
          </h2>
        </div>
      </Link>
      <div className="flex gap-6 items-center">
        <div className="flex gap-4">
          <p className="text-green">About</p>
          <p className="text-green">Category</p>
          <p className="text-green">Course</p>
        </div>
        <div>
          <Link to="/register">
            <button className="text-white bg-green-600 py-2 px-2.5 rounded-lg">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
