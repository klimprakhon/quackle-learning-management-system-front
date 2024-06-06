const widthMap = {
  full: "w-full",
};

function Button(props) {
  const { title, width = "full" } = props;
  return (
    <button
      className={`bg-green-600 text-white px-3 py-2 rounded-lg font-semibold ${widthMap[width]}`}
    >
      {title}
    </button>
  );
}

export default Button;
