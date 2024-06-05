function Input(props) {
  const { title, type = "text" } = props;
  return (
    <div className="flex flex-col min-w-[250px]">
      <label className="font-semibold">{title}</label>
      <input
        type={type}
        className="rounded-md px-2 py-1.5 border border-slate-200 shadow-sm"
      />
    </div>
  );
}

export default Input;
