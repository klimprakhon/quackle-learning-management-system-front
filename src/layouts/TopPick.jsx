import RecommendPanel from "../features/recommendation/components/RecommendPanel";

function TopPick() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 bg-slate-100 pb-14">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold">Best Selling Courses</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam.
        </span>
      </div>
      <div>
        <RecommendPanel />
      </div>
    </div>
  );
}

export default TopPick;
