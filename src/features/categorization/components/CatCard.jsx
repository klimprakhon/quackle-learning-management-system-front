import DatabaseIcon from "../../../icons/Database.svg";
import BusinessIcon from "../../../icons/Business.svg";
import MarketingIcon from "../../../icons/Marketing.svg";
import SoftwareIcon from "../../../icons/Software.svg";
import ButtonIcon from "../../../icons/ButtonIcon.svg";

const iconMap = {
  data: DatabaseIcon,
  business: BusinessIcon,
  marketing: MarketingIcon,
  software: SoftwareIcon,
};

function CatCard({ title, icon }) {
  return (
    <div className="flex flex-col w-64 h-70 px-8 py-6 border border-slate-300 rounded-md gap-4 bg-white">
      <img src={iconMap[icon]} className="w-10 h-10" />
      <p>
        Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor sit
        condimentum lacinia.
      </p>
      <hr />
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <img src={ButtonIcon} className="w-8 h-8" />
      </div>
    </div>
  );
}

export default CatCard;
