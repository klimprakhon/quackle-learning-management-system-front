import React from "react";

function FilterSelection({ title }) {
  return (
    <div className="bg-white border-2 border-slate-300 rounded-3xl px-3.5 py-2 hover:bg-slate-100">
      <p>{title.toUpperCase()}</p>
    </div>
  );
}

export default FilterSelection;
