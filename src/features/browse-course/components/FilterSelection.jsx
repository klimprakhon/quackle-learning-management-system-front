import React from "react";

function FilterSelection({ title, onSelect }) {
  return (
    <div
      className="bg-white border-2 border-slate-300 rounded-3xl px-3.5 py-2 hover:bg-slate-100 cursor-pointer"
      onClick={() => onSelect(title)}
    >
      <p className="cursor-pointer">{title.toUpperCase()}</p>
    </div>
  );
}

export default FilterSelection;
