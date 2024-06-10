import { Link } from "react-router-dom";

function DropdownItem({ title, to, icon, onClick = null }) {
  return (
    <Link to={to}>
      <div
        onClick={onClick}
        className="flex min-w-fit p-2 gap-2 hover:bg-slate-100 hover:font-semibold rounded-md"
      >
        <img src={icon} className="size-6" />
        <p className="text-sm ">{title}</p>
      </div>
    </Link>
  );
}

export default DropdownItem;
