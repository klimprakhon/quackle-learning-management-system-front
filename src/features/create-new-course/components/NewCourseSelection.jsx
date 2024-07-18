function NewCourseSelection({
  title,
  src,
  index,
  selectIndex,
  setSelectIndex,
}) {
  // const handleSelectIndex = (index) =>
  //   selectIndex !== index && setSelectIndex(index);
  return (
    <div
      // onClick={() => handleSelectIndex(index)}
      className={`flex w-full h-full gap-2 p-4 cursor-pointer hover:bg-green-50 hover:rounded-lg ${
        selectIndex === index &&
        "border-b-4 border-green-400 hover:rounded-t-lg hover:rounded-b-none"
      }`}
    >
      <img src={src} className="size-6" />
      <h3>{title}</h3>
    </div>
  );
}

export default NewCourseSelection;
