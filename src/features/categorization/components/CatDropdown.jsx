import DropdownItem from "../../../components/DropdownItem";
import DatabaseIcon from "../../../icons/Database.svg";
import BusinessIcon from "../../../icons/Business.svg";
import MarketingIcon from "../../../icons/Marketing.svg";
import TechIcon from "../../../icons/Software.svg";

function CatDropdown({ openCategory }) {
  return (
    <>
      {openCategory ? (
        <div className="bg-white rounded-md p-2 w-44 flex flex-col gap-2">
          <DropdownItem title="Data" to="/category/data" icon={DatabaseIcon} />
          <DropdownItem
            title="Business"
            to="/category/business"
            icon={BusinessIcon}
          />
          <DropdownItem
            title="Marketing"
            to="/dashboard/settings"
            icon={MarketingIcon}
          />
          <DropdownItem title="Tech" to="/" icon={TechIcon} />
        </div>
      ) : null}
    </>
  );
}

export default CatDropdown;
