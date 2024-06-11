import { Link } from "react-router-dom";
import Dropdown from "../../../components/Dropdown";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import Logo from "../../../assets/quackle-logo.png";
import ArrowDownIcon from "../../../icons/ArrowDown.svg";

function ClassNavbar() {
  const { authUser } = useAuth();
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <nav className="w-screen min-h-16 bg-forest flex justify-between items-center gap-2 px-10 py-2">
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
      <div>
        <h1 className="text-4xl font-bold text-white">Course Title</h1>
      </div>
      <div className="relative">
        <div>
          <button
            className="text-white font-medium bg-green-600 py-2 px-2.5 rounded-lg flex justify-center items-center gap-1"
            onClick={() => {
              setOpenProfile(!openProfile);
            }}
          >
            {authUser?.firstName}
            <img src={ArrowDownIcon} />
          </button>
        </div>
        <div className="absolute right-0">
          <Dropdown openProfile={openProfile} />
        </div>
      </div>
    </nav>
  );
}

export default ClassNavbar;
