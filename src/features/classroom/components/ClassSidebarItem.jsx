function ClassSidebarItem({ lesson }) {
  const tempId = 0;
  return (
    <div className="cursor-pointer hover:bg-green-200">
      <button>{lesson.lessonName}</button>
    </div>
  );
}

export default ClassSidebarItem;
