const fontMap = {
  normal: "font-semibold",
  bigThin: "text-lg font-medium",
};

function Input(props) {
  const {
    font = "normal",
    title,
    type = "text",
    name,
    placeholder = null,
    value,
    onChange,
    error,
  } = props;
  return (
    <div className="flex flex-col min-w-[150px] w-full">
      <label className={fontMap[font]}>{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`rounded-md px-2 py-1.5 border shadow-sm focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-300 max-w-[400px]"
            : "border-slate-300 focus:ring-slate-300"
        }`}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error ? (
        <small className="text-red-500 max-w-[200px]">{error}</small>
      ) : null}
    </div>
  );
}

export default Input;
