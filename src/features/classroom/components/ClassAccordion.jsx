import { useState } from "react";
import ClassSidebarItem from "./ClassSidebarItem";
import ArrowDownIcon from "../../../icons/ArrowDown.svg";

function ClassAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-1 ${isOpen ? "border-b border-green-600" : null}`}>
      <button
        className="w-full h-[70px] p-4 bg-green-50 hover:bg-green-100 transition duration-300 flex justify-between items-center border-b border-green-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-xl">Topic title</h3>
        <img
          src={ArrowDownIcon}
          className={`transform size-6 ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-300`}
        />
      </button>
      {isOpen && (
        <div>
          <ClassSidebarItem />
        </div>
      )}
    </div>
  );
}

export default ClassAccordion;
