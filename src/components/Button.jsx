import ArrowRightIcon from "../icons/ArrowRight.svg";

const widthMap = {
  full: "w-full",
  30: "w-24",
  40: "w-40",
  50: "w-56",
};

const levelMap = {
  primary:
    "bg-green-600 text-white hover:bg-green-700 hover:drop-shadow-md hover:show-green-700",
  secondary: "bg-green-100 text-green-800 hover:bg-green-200",
  tertiary:
    "bg-white text-green drop-shadow shadow-md shadow-green/40 hover:bg-green-100",
  extreme: "bg-green text-green-800 hover:bg-green-300",
  plain: "bg-white text-green-600",
};

function Button(props) {
  const {
    title,
    width = "full",
    level = "primary",
    icon = null,
    small,
    onClick = null,
  } = props;
  return (
    <button
      onClick={onClick}
      className={
        small
          ? `flex justify-center items-center px-3 py-2 ${levelMap[level]}  ${widthMap[width]} text-[12px] font-medium rounded-md `
          : `flex justify-center items-center gap-2 px-3 py-2 rounded-lg font-semibold ${levelMap[level]} ${widthMap[width]}`
      }
    >
      {title}
      {icon ? <img src={ArrowRightIcon} className="w-4 h-4" /> : null}
    </button>
  );
}

export default Button;
