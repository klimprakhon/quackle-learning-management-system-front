import { Link } from "react-router-dom";
import Logo from "../assets/quackle-logo.png";
import useAuth from "../hooks/useAuth";
import Dropdown from "../components/Dropdown";
import ArrowDownIcon from "../icons/ArrowDown.svg";
import { useState } from "react";
import CatDropdown from "../features/categorization/components/CatDropdown";

function Navbar() {
  const { authUser } = useAuth();

  const [openProfile, setOpenProfile] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  return (
    <nav className="relative min-w-screen min-h-16 bg-forest flex justify-between items-center px-10 py-2">
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
          <button className="text-green">About</button>
          <div className="relative">
            <div>
              <button
                className="text-green flex justify-center items-center gap-1"
                onClick={() => {
                  setOpenCategory(!openCategory);
                  setOpenProfile(false);
                }}
              >
                Category
                <img src={ArrowDownIcon} />
              </button>
            </div>
            <div className="absolute right-0 top-8">
              <CatDropdown openCategory={openCategory} />
            </div>
          </div>
          <button className="text-green">Course</button>
        </div>
        <div>
          {authUser ? (
            <div className="relative">
              <div>
                <button
                  className="text-white font-medium bg-green-600 py-2 px-2.5 rounded-lg flex justify-center items-center gap-1"
                  onClick={() => {
                    setOpenProfile(!openProfile);
                    setOpenCategory(false);
                  }}
                >
                  {authUser?.firstName}
                  <img src={ArrowDownIcon} />
                </button>
              </div>
              <div className="absolute right-0">
                <Dropdown
                  openProfile={openProfile}
                  setOpenProfile={setOpenProfile}
                />
              </div>
            </div>
          ) : (
            <Link to="/register">
              <button className="text-white bg-green-600 py-2 px-2.5 rounded-lg">
                Register
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
