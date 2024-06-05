function Button(props) {
  const { title } = props;
  return (
    <button className="bg-green-600 text-white px-3 py-2 rounded-lg font-semibold">
      {title}
    </button>
  );
}

export default Button;
